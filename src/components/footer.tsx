import Link from "next/link";
import { mainNav, siteConfig } from "@/lib/site";

export function Footer() {
  return (
    <footer className="border-t border-white/10 bg-black/70">
      <div className="mx-auto grid w-full max-w-6xl gap-8 px-4 py-10 md:grid-cols-3 md:px-6">
        <div>
          <h2 className="text-lg font-semibold text-white">{siteConfig.name}</h2>
          <p className="mt-3 max-w-sm text-sm text-zinc-400">
            Premium AI technology and digital growth systems for modern businesses.
          </p>
          <p className="mt-3 text-sm text-zinc-300">Email: {siteConfig.email}</p>
          <Link className="text-sm text-cyan-300 hover:text-cyan-200" href={siteConfig.whatsappPrefilled} target="_blank" rel="noopener noreferrer">
            WhatsApp: {siteConfig.whatsappNumber}
          </Link>
        </div>

        <div>
          <h3 className="text-sm font-semibold uppercase tracking-wide text-zinc-200">Navigate</h3>
          <ul className="mt-3 space-y-2">
            {mainNav.map((item) => (
              <li key={item.href}>
                <Link href={item.href} className="text-sm text-zinc-400 hover:text-white">
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h3 className="text-sm font-semibold uppercase tracking-wide text-zinc-200">Legal</h3>
          <ul className="mt-3 space-y-2">
            <li>
              <Link href="/faq" className="text-sm text-zinc-400 hover:text-white">
                FAQ
              </Link>
            </li>
            <li>
              <Link href="/privacy-policy" className="text-sm text-zinc-400 hover:text-white">
                Privacy Policy
              </Link>
            </li>
            <li>
              <Link href="/terms-of-service" className="text-sm text-zinc-400 hover:text-white">
                Terms of Service
              </Link>
            </li>
          </ul>
        </div>
      </div>
      <div className="border-t border-white/10 px-4 py-4 text-center text-xs text-zinc-500">
        © {new Date().getFullYear()} {siteConfig.name}. All rights reserved.
      </div>
    </footer>
  );
}
