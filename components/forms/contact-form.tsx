"use client";

import { useActionState, useEffect, useRef, useState } from "react";
import { useSearchParams } from "next/navigation";
import { CheckCircle2 } from "lucide-react";
import { contactTopics, type ContactTopic } from "@/content/contact";
import { ContactEmailLink } from "@/components/ui/contact-email-link";
import { submitContactForm } from "@/lib/contact-form";
import { initialContactFormState } from "@/lib/contact-form-state";
import { ButtonEl } from "@/components/ui/button";
import { trackEvent } from "@/lib/analytics";
import { cn } from "@/lib/cn";

const fieldBase =
  "w-full border bg-white px-4 py-3 text-sm text-navy-950 placeholder:text-ink-500/60 focus-visible:outline-2 focus-visible:outline-h2green-600";

function Field({
  id,
  label,
  error,
  required,
  children,
}: {
  id: string;
  label: string;
  error?: string;
  required?: boolean;
  children: React.ReactNode;
}) {
  return (
    <div className="flex flex-col gap-2">
      <label htmlFor={id} className="text-sm font-semibold text-navy-950">
        {label} {required && <span className="text-h2green-600">*</span>}
      </label>
      {children}
      {error && (
        <p id={`${id}-error`} role="alert" className="text-sm text-red-700">
          {error}
        </p>
      )}
    </div>
  );
}

export function ContactForm() {
  const [state, formAction, pending] = useActionState(submitContactForm, initialContactFormState);
  const searchParams = useSearchParams();
  const presetTopic = searchParams.get("topic");
  const [topic, setTopic] = useState<string>(
    presetTopic && (contactTopics as readonly string[]).includes(presetTopic) ? presetTopic : "",
  );
  const [renderedAt] = useState(() => Date.now());
  const formRef = useRef<HTMLFormElement>(null);

  useEffect(() => {
    // The form unmounts (replaced by the success message below) once
    // state.status becomes "success", so this only needs to fire the
    // analytics event — there's no form left to reset.
    if (state.status === "success") {
      trackEvent({ name: "form_submit_success", form: "contact" });
    }
  }, [state.status]);

  if (state.status === "success") {
    return (
      <div
        role="status"
        className="flex flex-col items-start gap-4 border border-h2green-600/30 bg-h2green-50 p-8"
      >
        <CheckCircle2 className="size-8 text-h2green-600" aria-hidden="true" />
        <p className="font-display text-xl font-semibold text-navy-950">Thank you for contacting H2MB.</p>
        <p className="text-sm leading-relaxed text-ink-700">
          Your message has been received, and a member of our team will respond if the
          inquiry is a fit for the appropriate contact.
        </p>
      </div>
    );
  }

  return (
    <form ref={formRef} action={formAction} noValidate className="flex flex-col gap-6">
      <input type="hidden" name="rendered_at" value={renderedAt} />
      <div className="sr-only" aria-hidden="true">
        <label htmlFor="company_website">Leave this field empty</label>
        <input type="text" id="company_website" name="company_website" tabIndex={-1} autoComplete="off" />
      </div>

      {state.status === "error" && state.message && (
        <p role="alert" className="border border-red-300 bg-red-50 p-4 text-sm text-red-800">
          {state.message}
        </p>
      )}

      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
        <Field id="name" label="Name" required error={state.errors?.name}>
          <input
            id="name"
            name="name"
            type="text"
            required
            autoComplete="name"
            className={fieldBase}
            aria-invalid={Boolean(state.errors?.name)}
            aria-describedby={state.errors?.name ? "name-error" : undefined}
          />
        </Field>
        <Field id="company" label="Company / Organization" required error={state.errors?.company}>
          <input
            id="company"
            name="company"
            type="text"
            required
            autoComplete="organization"
            className={fieldBase}
            aria-invalid={Boolean(state.errors?.company)}
            aria-describedby={state.errors?.company ? "company-error" : undefined}
          />
        </Field>
        <Field id="email" label="Email" required error={state.errors?.email}>
          <input
            id="email"
            name="email"
            type="email"
            required
            autoComplete="email"
            className={fieldBase}
            aria-invalid={Boolean(state.errors?.email)}
            aria-describedby={state.errors?.email ? "email-error" : undefined}
          />
        </Field>
        <Field id="phone" label="Phone (optional)">
          <input id="phone" name="phone" type="tel" autoComplete="tel" className={fieldBase} />
        </Field>
      </div>

      <Field id="topic" label="I'm contacting H2MB about…" required error={state.errors?.topic}>
        <select
          id="topic"
          name="topic"
          required
          value={topic}
          onChange={(e) => {
            setTopic(e.target.value);
            trackEvent({ name: "contact_topic_selected", topic: e.target.value });
          }}
          className={cn(fieldBase, "appearance-none")}
          aria-invalid={Boolean(state.errors?.topic)}
          aria-describedby={state.errors?.topic ? "topic-error" : undefined}
        >
          <option value="" disabled>
            Select a topic
          </option>
          {contactTopics.map((t: ContactTopic) => (
            <option key={t} value={t}>
              {t}
            </option>
          ))}
        </select>
      </Field>

      <Field id="message" label="Message" required error={state.errors?.message}>
        <textarea
          id="message"
          name="message"
          required
          rows={6}
          className={fieldBase}
          aria-invalid={Boolean(state.errors?.message)}
          aria-describedby={state.errors?.message ? "message-error" : undefined}
        />
      </Field>

      <div className="flex flex-col gap-2">
        <div className="flex items-start gap-3">
          <input
            id="consent"
            name="consent"
            type="checkbox"
            required
            className="mt-1 size-4 shrink-0 border-linegrey"
            aria-invalid={Boolean(state.errors?.consent)}
            aria-describedby={state.errors?.consent ? "consent-error" : undefined}
          />
          <label htmlFor="consent" className="text-sm leading-relaxed text-ink-700">
            I consent to H2MB collecting and using the information above to respond to my
            inquiry, in accordance with the{" "}
            <a href="/privacy" className="underline underline-offset-2">
              Privacy Policy
            </a>
            . <span className="text-h2green-600">*</span>
          </label>
        </div>
        {state.errors?.consent && (
          <p id="consent-error" role="alert" className="text-sm text-red-700">
            {state.errors.consent}
          </p>
        )}
      </div>

      <ButtonEl type="submit" variant="primary" disabled={pending} className="self-start disabled:opacity-60">
        {pending ? "Sending…" : "Send Message"}
      </ButtonEl>

      <p className="text-xs text-ink-500">
        Prefer email? Reach us directly at <ContactEmailLink className="underline" />.
      </p>
    </form>
  );
}
