"use client";

import { FormEvent, useMemo, useState } from "react";

type FormData = {
  fullName: string;
  email: string;
  company: string;
  whatsapp: string;
  websiteUrl: string;
  businessType: string;
  serviceNeeded: string;
  budget: string;
  timeline: string;
  message: string;
};

const initialData: FormData = {
  fullName: "",
  email: "",
  company: "",
  whatsapp: "",
  websiteUrl: "",
  businessType: "",
  serviceNeeded: "",
  budget: "",
  timeline: "",
  message: "",
};

export function ContactForm() {
  const [formData, setFormData] = useState<FormData>(initialData);
  const [errors, setErrors] = useState<Partial<Record<keyof FormData, string>>>({});
  const [status, setStatus] = useState<"idle" | "success" | "error" | "submitting">("idle");

  const isValidEmail = (email: string) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);

  const requiredFields: Array<keyof FormData> = useMemo(
    () => ["fullName", "email", "company", "whatsapp", "websiteUrl", "businessType", "serviceNeeded", "message"],
    []
  );

  const validate = () => {
    const nextErrors: Partial<Record<keyof FormData, string>> = {};

    requiredFields.forEach((field) => {
      if (!formData[field].trim()) {
        nextErrors[field] = "This field is required.";
      }
    });

    if (formData.email && !isValidEmail(formData.email)) {
      nextErrors.email = "Please enter a valid email address.";
    }

    if (formData.websiteUrl && !/^https?:\/\/.+/.test(formData.websiteUrl)) {
      nextErrors.websiteUrl = "Please enter a valid URL including http:// or https://.";
    }

    setErrors(nextErrors);
    return Object.keys(nextErrors).length === 0;
  };

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setStatus("idle");

    if (!validate()) {
      setStatus("error");
      return;
    }

    try {
      setStatus("submitting");
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      if (!response.ok) {
        throw new Error("Contact endpoint is not configured yet.");
      }

      setStatus("success");
      setFormData(initialData);
      setErrors({});
    } catch {
      setStatus("error");
    }
  };

  const fields: Array<{ name: keyof FormData; label: string; required?: boolean; type?: string; placeholder?: string }> = [
    { name: "fullName", label: "Full name", required: true },
    { name: "email", label: "Email", required: true, type: "email" },
    { name: "company", label: "Company", required: true },
    { name: "whatsapp", label: "WhatsApp number", required: true },
    { name: "websiteUrl", label: "Website URL", required: true, placeholder: "https://" },
    { name: "businessType", label: "Business type", required: true },
    { name: "serviceNeeded", label: "Service needed", required: true },
    { name: "budget", label: "Budget (optional)" },
    { name: "timeline", label: "Timeline (optional)" },
  ];

  return (
    <form id="contact-form" onSubmit={handleSubmit} noValidate className="space-y-4 rounded-2xl border border-white/10 bg-zinc-900/50 p-6">
      <div className="grid gap-4 md:grid-cols-2">
        {fields.map((field) => (
          <div key={field.name} className={field.name === "serviceNeeded" ? "md:col-span-2" : ""}>
            <label htmlFor={field.name} className="mb-1 block text-sm text-zinc-200">
              {field.label}
            </label>
            <input
              id={field.name}
              name={field.name}
              type={field.type ?? "text"}
              value={formData[field.name]}
              onChange={(event) => setFormData((current) => ({ ...current, [field.name]: event.target.value }))}
              placeholder={field.placeholder}
              className="w-full rounded-lg border border-white/15 bg-black/50 px-3 py-2 text-sm text-white outline-none ring-cyan-300/60 placeholder:text-zinc-500 focus-visible:ring-2"
              aria-invalid={errors[field.name] ? true : false}
            />
            {errors[field.name] ? <p className="mt-1 text-xs text-rose-300">{errors[field.name]}</p> : null}
          </div>
        ))}
        <div className="md:col-span-2">
          <label htmlFor="message" className="mb-1 block text-sm text-zinc-200">
            Message
          </label>
          <textarea
            id="message"
            name="message"
            rows={4}
            value={formData.message}
            onChange={(event) => setFormData((current) => ({ ...current, message: event.target.value }))}
            className="w-full rounded-lg border border-white/15 bg-black/50 px-3 py-2 text-sm text-white outline-none ring-cyan-300/60 placeholder:text-zinc-500 focus-visible:ring-2"
            aria-invalid={errors.message ? true : false}
          />
          {errors.message ? <p className="mt-1 text-xs text-rose-300">{errors.message}</p> : null}
        </div>
      </div>
      <div className="flex flex-wrap items-center gap-3">
        <button type="submit" className="btn-primary" disabled={status === "submitting"}>
          {status === "submitting" ? "Sending..." : "Send Inquiry"}
        </button>
        {status === "success" ? <p className="text-sm text-emerald-300">Thanks! Your message was submitted.</p> : null}
        {status === "error" ? (
          <p className="text-sm text-amber-300">
            We could not submit right now. Configure the `/api/contact` endpoint and try again.
          </p>
        ) : null}
      </div>
    </form>
  );
}
