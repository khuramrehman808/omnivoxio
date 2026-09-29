import Link from "next/link";
import { PageShell } from "@/components/page-shell";
import { pageMetadata } from "@/lib/metadata";
import { serviceCards, siteConfig } from "@/lib/site";

export const metadata = pageMetadata(
  "Services",
  "Explore Omnivoxio services: SEO growth systems, AI websites, AI voice agents, AI automation, custom AI agents, and AI-powered content growth.",
  "/services"
);

export default function ServicesPage() {
  return (
    <PageShell
      title="Services"
      intro="Integrated services designed to improve discoverability, conversion, response speed, and operational efficiency."
    >
      <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-3">
        {serviceCards.map((service) => (
          <article key={service.title} className="card">
            <h2 className="text-lg font-semibold text-white">{service.title}</h2>
            <p className="mt-2 text-sm text-zinc-400">{service.description}</p>
            <Link href={service.href} className="mt-4 inline-flex text-sm text-cyan-300 hover:text-cyan-200">
              Explore →
            </Link>
          </article>
        ))}
      </div>

      <section id="content-growth" className="card mt-8">
        <h2 className="text-xl font-semibold text-white">AI-Powered Content and Digital Growth</h2>
        <p className="mt-2 text-sm text-zinc-400">
          We help plan, draft, and refine content systems aligned with buyer intent, search visibility, and practical conversion goals.
        </p>
      </section>

      <section className="card mt-8">
        <h2 className="text-xl font-semibold text-white">Need help selecting a service mix?</h2>
        <p className="mt-2 text-sm text-zinc-400">Book a consultation and we will map the right phased roadmap for your business stage.</p>
        <Link href={siteConfig.consultationUrl} className="btn-primary mt-4">
          Book a Consultation
        </Link>
      </section>
    </PageShell>
  );
}
