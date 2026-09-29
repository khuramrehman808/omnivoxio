"use client";

import { useState } from "react";

const panels = {
  website: {
    title: "Website",
    points: ["SEO-ready architecture", "Lead capture + booking", "Conversion-focused UX"],
  },
  voice: {
    title: "Voice Agent",
    points: ["Inbound call handling", "Intent detection", "Human escalation"],
  },
  seo: {
    title: "SEO Growth",
    points: ["Technical audits", "Content systems", "Entity + local signals"],
  },
};

export function WorkflowDemo() {
  const [active, setActive] = useState<keyof typeof panels>("website");

  return (
    <section className="rounded-2xl border border-white/10 bg-zinc-900/50 p-6">
      <h2 className="text-2xl font-semibold text-white">Experience the Omnivoxio System</h2>
      <p className="mt-2 text-sm text-zinc-400">
        Explore how website, voice, and SEO systems coordinate into one practical growth workflow.
      </p>
      <div className="mt-5 grid gap-3 md:grid-cols-3">
        {(Object.keys(panels) as Array<keyof typeof panels>).map((key) => (
          <button
            key={key}
            type="button"
            onClick={() => setActive(key)}
            className={`rounded-xl border px-4 py-3 text-left transition ${
              active === key
                ? "border-cyan-300/60 bg-cyan-400/10 text-white"
                : "border-white/10 bg-black/40 text-zinc-300 hover:border-white/30"
            }`}
          >
            <p className="text-sm font-semibold">{panels[key].title}</p>
          </button>
        ))}
      </div>

      <div className="mt-5 grid gap-4 md:grid-cols-[1fr_auto_1fr_auto_1fr] md:items-center">
        <Card title={panels.website.title} active={active === "website"} points={panels.website.points} />
        <Connector />
        <Card title={panels.voice.title} active={active === "voice"} points={panels.voice.points} />
        <Connector />
        <Card title={panels.seo.title} active={active === "seo"} points={panels.seo.points} />
      </div>
    </section>
  );
}

function Card({ title, points, active }: { title: string; points: string[]; active: boolean }) {
  return (
    <div className={`rounded-xl border p-4 ${active ? "border-cyan-300/50 bg-cyan-400/10" : "border-white/10 bg-black/40"}`}>
      <h3 className="text-sm font-semibold text-white">{title}</h3>
      <ul className="mt-2 space-y-1 text-xs text-zinc-300">
        {points.map((point) => (
          <li key={point}>• {point}</li>
        ))}
      </ul>
    </div>
  );
}

function Connector() {
  return <div aria-hidden className="mx-auto hidden h-px w-8 bg-gradient-to-r from-cyan-300/20 to-violet-300/40 md:block" />;
}
