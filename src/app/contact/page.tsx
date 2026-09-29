import Link from "next/link";
import { ContactForm } from "@/components/contact-form";
import { PageShell } from "@/components/page-shell";
import { pageMetadata } from "@/lib/metadata";
import { siteConfig } from "@/lib/site";

export const metadata = pageMetadata(
  "Contact",
  "Contact Omnivoxio for AI websites, voice agent implementations, business automation, custom AI agents, and SEO growth strategy.",
  "/contact"
);

export default function ContactPage() {
  return (
    <PageShell
      title="Contact"
      intro="Share your goals and constraints, and we will propose a practical phased roadmap."
    >
      <section className="grid gap-6 lg:grid-cols-[0.8fr_1.2fr]">
        <div className="card h-fit">
          <h2 className="text-xl font-semibold text-white">Start a conversation</h2>
          <p className="mt-2 text-sm text-zinc-400">Email: {siteConfig.email}</p>
          <p className="mt-2 text-sm text-zinc-400">WhatsApp: {siteConfig.whatsappNumber}</p>
          <div className="mt-4 flex flex-wrap gap-3">
            <Link href={siteConfig.whatsappPrefilled} target="_blank" rel="noopener noreferrer" className="btn-secondary">
              Chat on WhatsApp
            </Link>
          </div>
        </div>
        <ContactForm />
      </section>
    </PageShell>
  );
}
