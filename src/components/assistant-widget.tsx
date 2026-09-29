"use client";

import Link from "next/link";
import { useState } from "react";
import { siteConfig } from "@/lib/site";

const quickActions = [
  { label: "What does Omnivoxio build?", href: "/services" },
  { label: "AI Voice Agents", href: "/ai-voice-agents" },
  { label: "AI Websites", href: "/ai-websites" },
  { label: "SEO Growth", href: "/seo-growth" },
  { label: "Book a Consultation", href: siteConfig.consultationUrl },
  { label: "Chat on WhatsApp", href: siteConfig.whatsappPrefilled, external: true },
];

export function AssistantWidget() {
  const [open, setOpen] = useState(false);

  return (
    <div className="fixed bottom-24 right-4 z-40 w-[min(92vw,22rem)]">
      {open ? (
        <div className="rounded-2xl border border-cyan-300/30 bg-zinc-950/95 p-4 shadow-2xl backdrop-blur">
          <div className="mb-3 flex items-center justify-between">
            <h2 className="text-sm font-semibold text-white">Omnivoxio Assistant Demo</h2>
            <button type="button" onClick={() => setOpen(false)} className="text-xs text-zinc-400 hover:text-white">
              Close
            </button>
          </div>
          <p className="mb-3 text-xs text-zinc-400">
            Demo only — this widget is a front-end experience and is not connected to a live AI backend.
          </p>
          <div className="grid gap-2">
            {quickActions.map((action) => (
              <Link
                key={action.label}
                href={action.href}
                {...(action.external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
                className="rounded-lg border border-white/10 px-3 py-2 text-xs text-zinc-200 hover:border-cyan-300/40 hover:text-white"
              >
                {action.label}
              </Link>
            ))}
          </div>
        </div>
      ) : null}
      <button type="button" className="btn-primary mt-3 w-full" onClick={() => setOpen((value) => !value)}>
        {open ? "Hide AI Demo" : "Open AI Assistant Demo"}
      </button>
    </div>
  );
}
