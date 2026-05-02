"use client";

import { useState, type FormEvent } from "react";
import { siteConfig } from "@/lib/siteConfig";
import { Send } from "lucide-react";

type Status = "idle" | "submitting" | "ok" | "error";

export function ContactForm() {
  const [status, setStatus] = useState<Status>("idle");

  function onSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus("submitting");
    const form = e.currentTarget;
    const data = new FormData(form);
    const name = String(data.get("name") || "");
    const email = String(data.get("email") || "");
    const phone = String(data.get("phone") || "");
    const project = String(data.get("project") || "");
    const message = String(data.get("message") || "");

    const subject = encodeURIComponent(
      `Demande de devis — ${project || "ferronnerie"}`,
    );
    const body = encodeURIComponent(
      `Nom : ${name}\nEmail : ${email}\nTéléphone : ${phone}\nProjet : ${project}\n\n${message}`,
    );
    window.location.href = `mailto:${siteConfig.contact.email}?subject=${subject}&body=${body}`;
    setStatus("ok");
  }

  return (
    <form onSubmit={onSubmit} className="space-y-6">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <Field name="name" label="Votre nom" required />
        <Field name="email" type="email" label="Email" required />
        <Field name="phone" type="tel" label="Téléphone" />
        <Field name="project" label="Type de projet" placeholder="Portail, escalier…" />
      </div>
      <div>
        <label htmlFor="message" className="block mb-2 text-xs uppercase tracking-[0.18em] text-[color:var(--color-smoke)] font-medium">
          Décrivez votre projet
        </label>
        <textarea
          id="message"
          name="message"
          rows={6}
          required
          className="w-full bg-transparent border-b border-[color:var(--color-hairline)] py-3 text-base focus:border-[color:var(--color-iron)] focus:outline-none transition-colors resize-none"
          placeholder="Dimensions, style recherché, contraintes du lieu…"
        />
      </div>

      <div className="pt-4">
        <button
          type="submit"
          disabled={status === "submitting"}
          className="group inline-flex items-center gap-3 bg-[color:var(--color-ink)] text-[color:var(--color-parchment)] px-8 py-4 text-sm uppercase tracking-[0.18em] font-medium hover:bg-[color:var(--color-iron)] focus-visible:bg-[color:var(--color-iron)] transition-colors duration-300 disabled:opacity-60"
        >
          {status === "submitting" ? "Envoi…" : "Envoyer ma demande"}
          <Send size={15} strokeWidth={1.75} className="transition-transform group-hover:translate-x-0.5" />
        </button>
        {status === "ok" && (
          <p className="mt-4 text-sm text-[color:var(--color-iron)]">
            Votre client mail s&apos;est ouvert. À très vite.
          </p>
        )}
      </div>
    </form>
  );
}

function Field({
  name,
  label,
  type = "text",
  required = false,
  placeholder,
}: {
  name: string;
  label: string;
  type?: string;
  required?: boolean;
  placeholder?: string;
}) {
  return (
    <div>
      <label htmlFor={name} className="block mb-2 text-xs uppercase tracking-[0.18em] text-[color:var(--color-smoke)] font-medium">
        {label}{required && <span className="text-[color:var(--color-iron)]"> *</span>}
      </label>
      <input
        id={name}
        name={name}
        type={type}
        required={required}
        placeholder={placeholder}
        className="w-full bg-transparent border-b border-[color:var(--color-hairline)] py-3 text-base focus:border-[color:var(--color-iron)] focus:outline-none transition-colors"
      />
    </div>
  );
}
