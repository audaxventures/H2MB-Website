export interface ContactFormState {
  status: "idle" | "success" | "error";
  errors?: Partial<Record<"name" | "company" | "email" | "topic" | "message" | "consent", string>>;
  message?: string;
}

export const initialContactFormState: ContactFormState = { status: "idle" };
