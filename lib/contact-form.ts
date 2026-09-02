"use server";

import { contactTopics } from "@/content/contact";
import { contactConfig } from "@/content/config";

export interface ContactFormState {
  status: "idle" | "success" | "error";
  errors?: Partial<Record<"name" | "company" | "email" | "topic" | "message" | "consent", string>>;
  message?: string;
}

export const initialContactFormState: ContactFormState = { status: "idle" };

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
// Minimum time (ms) a human plausibly takes to fill the form — anything
// faster is almost certainly a bot. Paired with the honeypot field below.
const MIN_FILL_TIME_MS = 2500;

export async function submitContactForm(
  _prevState: ContactFormState,
  formData: FormData,
): Promise<ContactFormState> {
  // Spam protection: honeypot field that real users never see or fill.
  const honeypot = String(formData.get("company_website") ?? "").trim();
  if (honeypot.length > 0) {
    // Silently report success to the bot without processing anything.
    return { status: "success" };
  }

  const renderedAt = Number(formData.get("rendered_at") ?? 0);
  if (renderedAt && Date.now() - renderedAt < MIN_FILL_TIME_MS) {
    return {
      status: "error",
      message: `We could not submit your message. Please review the required fields or contact us directly at ${contactConfig.email}.`,
    };
  }

  const name = String(formData.get("name") ?? "").trim();
  const company = String(formData.get("company") ?? "").trim();
  const email = String(formData.get("email") ?? "").trim();
  const phone = String(formData.get("phone") ?? "").trim();
  const topic = String(formData.get("topic") ?? "").trim();
  const message = String(formData.get("message") ?? "").trim();
  const consent = formData.get("consent") === "on";

  const errors: ContactFormState["errors"] = {};
  if (!name) errors.name = "Please enter your name.";
  if (!company) errors.company = "Please enter your company or organization.";
  if (!email) errors.email = "Please enter your email address.";
  else if (!EMAIL_RE.test(email)) errors.email = "Please enter a valid email address.";
  if (!topic || !(contactTopics as readonly string[]).includes(topic)) {
    errors.topic = "Please select a topic.";
  }
  if (!message) errors.message = "Please enter a message.";
  if (!consent) errors.consent = "Please confirm consent to be contacted.";

  if (Object.keys(errors).length > 0) {
    return {
      status: "error",
      errors,
      message: `We could not submit your message. Please review the required fields or contact us directly at ${contactConfig.email}.`,
    };
  }

  try {
    await deliverSubmission({ name, company, email, phone, topic, message });
  } catch (error) {
    console.error("[contact-form] delivery failed", error);
    return {
      status: "error",
      message: `We could not submit your message. Please review the required fields or contact us directly at ${contactConfig.email}.`,
    };
  }

  return { status: "success" };
}

interface Submission {
  name: string;
  company: string;
  email: string;
  phone: string;
  topic: string;
  message: string;
}

/**
 * Delivery is provider-driven via env vars (see .env.example) so a real
 * submission endpoint can be wired up without touching validation logic.
 * With no provider configured, this runs in a documented "dry run" mode:
 * the submission is logged, not delivered, so the form can be fully tested
 * end to end before H2MB supplies real routing.
 */
async function deliverSubmission(submission: Submission) {
  const provider = process.env.CONTACT_FORM_PROVIDER;

  if (provider === "webhook") {
    const endpoint = process.env.CONTACT_FORM_ENDPOINT_URL;
    if (!endpoint) throw new Error("CONTACT_FORM_ENDPOINT_URL is not configured.");
    const response = await fetch(endpoint, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(submission),
    });
    if (!response.ok) throw new Error(`Webhook endpoint responded with ${response.status}`);
    return;
  }

  if (provider === "resend") {
    const apiKey = process.env.RESEND_API_KEY;
    const to = process.env.CONTACT_FORM_TO_EMAIL;
    const from = process.env.CONTACT_FORM_FROM_EMAIL;
    if (!apiKey || !to || !from) {
      throw new Error("RESEND_API_KEY, CONTACT_FORM_TO_EMAIL and CONTACT_FORM_FROM_EMAIL are required.");
    }
    const response = await fetch("https://api.resend.com/emails", {
      method: "POST",
      headers: {
        Authorization: `Bearer ${apiKey}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        to,
        from,
        reply_to: submission.email,
        subject: `H2MB contact form — ${submission.topic}`,
        text: [
          `Name: ${submission.name}`,
          `Company: ${submission.company}`,
          `Email: ${submission.email}`,
          `Phone: ${submission.phone || "(not provided)"}`,
          `Topic: ${submission.topic}`,
          "",
          submission.message,
        ].join("\n"),
      }),
    });
    if (!response.ok) throw new Error(`Resend responded with ${response.status}`);
    return;
  }

  // Dry-run mode — no provider configured yet.
  console.warn(
    "[contact-form] No CONTACT_FORM_PROVIDER configured — submission was validated but not delivered.",
    { topic: submission.topic, email: submission.email },
  );
}
