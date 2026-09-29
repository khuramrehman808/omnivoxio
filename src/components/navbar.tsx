"use client";

import Link from "next/link";
import { useState } from "react";
import { mainNav, siteConfig } from "@/lib/site";

export function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-40 border-b border-white/10 bg-black/60 backdrop-blur-xl">
      <div className="mx-auto flex w-full max-w-6xl items-center justify-between px-4 py-3 md:px-6">
        <Link href="/" className="group flex items-center gap-3">
          <span className="flex h-9 w-9 items-center justify-center rounded-xl border border-cyan-300/30 bg-gradient-to-br from-cyan-400/20 to-violet-500/20 text-sm font-semibold text-cyan-200">
            OX
          </span>
          <span className="text-sm font-semibold tracking-wide text-white group-hover:text-cyan-200">{siteConfig.name}</span>
        </Link>

        <nav className="hidden items-center gap-6 md:flex">
          {mainNav.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="text-sm text-zinc-300 transition hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan-300"
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <div className="hidden items-center gap-3 md:flex">
          <Link className="btn-secondary" href={siteConfig.whatsappPrefilled} target="_blank" rel="noopener noreferrer">
            WhatsApp
          </Link>
          <Link className="btn-primary" href={siteConfig.consultationUrl}>
            Book a Consultation
          </Link>
        </div>

        <button
          type="button"
          className="inline-flex rounded-lg border border-white/20 px-3 py-2 text-sm text-white md:hidden"
          onClick={() => setOpen((value) => !value)}
          aria-expanded={open}
          aria-controls="mobile-menu"
        >
          Menu
        </button>
      </div>

      {open ? (
        <div id="mobile-menu" className="border-t border-white/10 bg-black/90 px-4 py-4 md:hidden">
          <nav className="flex flex-col gap-3">
            {mainNav.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                onClick={() => setOpen(false)}
                className="rounded-md px-2 py-1 text-sm text-zinc-200 hover:bg-white/10 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan-300"
              >
                {item.label}
              </Link>
            ))}
            <Link className="btn-primary mt-2 text-center" href={siteConfig.consultationUrl} onClick={() => setOpen(false)}>
              Book a Consultation
            </Link>
            <Link
              className="btn-secondary text-center"
              href={siteConfig.whatsappPrefilled}
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => setOpen(false)}
            >
              Chat on WhatsApp
            </Link>
          </nav>
        </div>
      ) : null}
    </header>
  );
}
