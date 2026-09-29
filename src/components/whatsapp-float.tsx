import Link from "next/link";
import { siteConfig } from "@/lib/site";

export function WhatsAppFloat() {
  return (
    <Link
      href={siteConfig.whatsappPrefilled}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Chat with Omnivoxio on WhatsApp"
      className="fixed bottom-4 right-4 z-40 rounded-full border border-emerald-300/40 bg-emerald-500/90 px-4 py-3 text-sm font-semibold text-white shadow-lg shadow-emerald-900/40 hover:bg-emerald-400 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-emerald-200"
    >
      WhatsApp
    </Link>
  );
}
