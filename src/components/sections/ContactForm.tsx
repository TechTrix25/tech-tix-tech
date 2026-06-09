"use client";

import { useState } from "react";
import { Send } from "lucide-react";
import { site } from "@/data/site";
import { Button } from "@/components/ui/Button";

type Status = "idle" | "submitting" | "success" | "error";

const fields = {
  name: "",
  email: "",
  subject: "",
  contact: "",
  message: "",
};

/**
 * Contact form — posts to the original Google Apps Script webhook (preserved
 * verbatim in src/data/site.ts). Accessible labels, inline status, no layout
 * shift on submit.
 */
export function ContactForm() {
  const [form, setForm] = useState(fields);
  const [status, setStatus] = useState<Status>("idle");

  const update =
    (key: keyof typeof fields) =>
    (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) =>
      setForm((prev) => ({ ...prev, [key]: e.target.value }));

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("submitting");
    try {
      const res = await fetch(site.contact.formWebhook, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ ...form, date: new Date().toISOString() }),
      });
      if (res.ok) {
        setStatus("success");
        setForm(fields);
      } else {
        setStatus("error");
      }
    } catch {
      setStatus("error");
    }
  };

  const inputClass =
    "w-full rounded-xl border border-hairline bg-base/50 px-4 py-3 text-sm text-ink placeholder:text-muted/60 outline-none transition-colors focus:border-iris/60";

  return (
    <form onSubmit={handleSubmit} className="space-y-5" noValidate>
      <div className="grid gap-5 sm:grid-cols-2">
        <div className="space-y-2">
          <label htmlFor="name" className="text-sm font-medium text-ink">
            Your name
          </label>
          <input
            id="name"
            value={form.name}
            onChange={update("name")}
            placeholder="John Doe"
            required
            className={inputClass}
          />
        </div>
        <div className="space-y-2">
          <label htmlFor="email" className="text-sm font-medium text-ink">
            Email address
          </label>
          <input
            id="email"
            type="email"
            value={form.email}
            onChange={update("email")}
            placeholder="john@example.com"
            required
            className={inputClass}
          />
        </div>
      </div>

      <div className="space-y-2">
        <label htmlFor="subject" className="text-sm font-medium text-ink">
          Subject
        </label>
        <input
          id="subject"
          value={form.subject}
          onChange={update("subject")}
          placeholder="How can we help you?"
          required
          className={inputClass}
        />
      </div>

      <div className="space-y-2">
        <label htmlFor="contact" className="text-sm font-medium text-ink">
          Phone / contact
        </label>
        <input
          id="contact"
          value={form.contact}
          onChange={update("contact")}
          placeholder="+91 98765 43210"
          required
          className={inputClass}
        />
      </div>

      <div className="space-y-2">
        <label htmlFor="message" className="text-sm font-medium text-ink">
          Message
        </label>
        <textarea
          id="message"
          value={form.message}
          onChange={update("message")}
          placeholder="Tell us more about your project..."
          rows={5}
          required
          className={inputClass}
        />
      </div>

      <Button
        type="submit"
        size="lg"
        className="w-full"
        disabled={status === "submitting"}
      >
        {status === "submitting" ? "Sending..." : "Send message"}
        {status !== "submitting" && <Send className="h-4 w-4" />}
      </Button>

      {/* Inline status — reserve space to avoid layout shift */}
      <p
        role="status"
        aria-live="polite"
        className="min-h-5 text-sm"
        style={{
          color:
            status === "success"
              ? "var(--color-mint)"
              : status === "error"
                ? "#ff7a7a"
                : "var(--color-muted)",
        }}
      >
        {status === "success" &&
          "Thank you for your message. We will get back to you soon!"}
        {status === "error" &&
          "There was an error sending your message. Please try again later."}
      </p>
    </form>
  );
}
