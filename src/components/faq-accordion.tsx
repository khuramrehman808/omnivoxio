"use client";

import { useState } from "react";

type Item = { question: string; answer: string };

export function FaqAccordion({ items }: { items: Item[] }) {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <div className="space-y-3">
      {items.map((item, index) => {
        const open = openIndex === index;
        return (
          <div key={item.question} className="rounded-xl border border-white/10 bg-zinc-900/50">
            <button
              type="button"
              aria-expanded={open}
              className="flex w-full items-center justify-between gap-4 px-4 py-3 text-left text-sm font-medium text-zinc-100 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan-300"
              onClick={() => setOpenIndex(open ? null : index)}
            >
              <span>{item.question}</span>
              <span className="text-cyan-200">{open ? "−" : "+"}</span>
            </button>
            {open ? <p className="px-4 pb-4 text-sm text-zinc-400">{item.answer}</p> : null}
          </div>
        );
      })}
    </div>
  );
}
