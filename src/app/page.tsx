import Link from "next/link";
import { WorkflowDemo } from "@/components/workflow-demo";
import { pageMetadata } from "@/lib/metadata";
import { demoCaseStudies, industries, serviceCards, siteConfig } from "@/lib/site";

export const metadata = pageMetadata(
  "Home",
  "Build smarter digital growth systems with Omnivoxio: AI websites, AI voice agents, automation, custom AI agents, and evidence-based SEO.",
  "/"
);

const process = ["Understand", "Strategize", "Build", "Improve"];

export default function Home() {
  return (
    <main className="mx-auto w-full max-w-6xl space-y-16 px-4 py-10 md:px-6 md:py-14">
      <section className="grid gap-8 lg:grid-cols-[1.1fr_0.9fr] lg:items-center">
        <div>
          <p className="mb-3 inline-flex rounded-full border border-cyan-300/30 bg-cyan-300/10 px-3 py-1 text-xs text-cyan-100">
            Premium AI Technology + Digital Growth
          </p>
          <h1 className="text-balance text-4xl font-semibold tracking-tight text-white md:text-6xl">
            Build Smarter. Get Found. Grow Faster.
          </h1>
          <p className="mt-5 max-w-2xl text-base text-zinc-300 md:text-lg">
            Omnivoxio designs AI websites, AI voice agents, practical automations, and evidence-based SEO systems that help
            your business turn attention into reliable growth.
          </p>
          <div className="mt-7 flex flex-wrap gap-3">
            <Link href={siteConfig.consultationUrl} className="btn-primary">
              Book a Consultation
            </Link>
            <Link href="/services" className="btn-secondary">
              Explore Our Services
            </Link>
            <Link href={siteConfig.whatsappPrefilled} target="_blank" rel="noopener noreferrer" className="btn-secondary">
              Chat With Us on WhatsApp
            </Link>
          </div>
        </div>

        <div className="card relative overflow-hidden">
          <div className="absolute -right-14 -top-14 h-40 w-40 rounded-full bg-cyan-400/20 blur-3xl" />
          <div className="absolute -bottom-14 -left-14 h-40 w-40 rounded-full bg-violet-500/20 blur-3xl" />
          <div className="relative grid gap-3">
            <div className="rounded-xl border border-white/10 bg-black/30 p-4">
              <p className="text-xs text-zinc-400">AI Voice Waveform</p>
              <div className="mt-3 h-8 rounded bg-gradient-to-r from-cyan-300/30 via-violet-300/30 to-cyan-300/30" />
            </div>
            <div className="grid gap-3 sm:grid-cols-2">
              <div className="rounded-xl border border-white/10 bg-black/30 p-4">
                <p className="text-xs text-zinc-400">Website UI</p>
                <div className="mt-3 space-y-2">
                  <div className="h-2 rounded bg-zinc-700" />
                  <div className="h-2 w-4/5 rounded bg-zinc-700" />
                  <div className="h-6 rounded bg-cyan-500/20" />
                </div>
              </div>
              <div className="rounded-xl border border-white/10 bg-black/30 p-4">
                <p className="text-xs text-zinc-400">SEO Signals</p>
                <ul className="mt-3 space-y-1 text-xs text-zinc-300">
                  <li>• Technical health</li>
                  <li>• Entity consistency</li>
                  <li>• Content cadence</li>
                </ul>
              </div>
            </div>
            <div className="rounded-xl border border-white/10 bg-black/30 p-4">
              <p className="text-xs text-zinc-400">Automation Nodes</p>
              <div className="mt-3 flex items-center gap-2">
                <span className="h-2 w-2 rounded-full bg-cyan-200" />
                <span className="h-px flex-1 bg-zinc-700" />
                <span className="h-2 w-2 rounded-full bg-violet-200" />
                <span className="h-px flex-1 bg-zinc-700" />
                <span className="h-2 w-2 rounded-full bg-cyan-200" />
              </div>
            </div>
          </div>
        </div>
      </section>

      <WorkflowDemo />

      <section className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {[
          "Clear Strategy",
          "Practical AI",
          "Evidence-Based Growth",
          "Human Approval",
        ].map((value) => (
          <div key={value} className="card p-4">
            <p className="text-sm font-semibold text-white">{value}</p>
          </div>
        ))}
      </section>

      <section>
        <h2 className="text-2xl font-semibold text-white">Core Services</h2>
        <div className="mt-5 grid gap-4 md:grid-cols-2 xl:grid-cols-3">
          {serviceCards.map((service) => (
            <article key={service.title} className="card">
              <h3 className="text-lg font-semibold text-white">{service.title}</h3>
              <p className="mt-2 text-sm text-zinc-400">{service.description}</p>
              <Link href={service.href} className="mt-4 inline-flex text-sm text-cyan-300 hover:text-cyan-200">
                Learn more →
              </Link>
            </article>
          ))}
        </div>
      </section>

      <section className="card">
        <h2 className="text-2xl font-semibold text-white">More Than a Website. More Than a Chatbot.</h2>
        <p className="mt-3 text-zinc-400">
          We connect your growth stack end-to-end: website experience, inbound conversations, qualification logic, team
          notifications, and ongoing SEO improvements.
        </p>
      </section>

      <section>
        <h2 className="text-2xl font-semibold text-white">Industries We Support</h2>
        <div className="mt-4 flex flex-wrap gap-2">
          {industries.map((industry) => (
            <span key={industry} className="rounded-full border border-white/10 bg-white/5 px-3 py-1 text-sm text-zinc-300">
              {industry}
            </span>
          ))}
        </div>
      </section>

      <section>
        <h2 className="text-2xl font-semibold text-white">Our Four-Step Process</h2>
        <div className="mt-4 grid gap-3 md:grid-cols-4">
          {process.map((step, index) => (
            <div key={step} className="card p-4">
              <p className="text-xs uppercase tracking-wide text-zinc-500">Step {index + 1}</p>
              <p className="mt-1 text-sm font-semibold text-white">{step}</p>
            </div>
          ))}
        </div>
      </section>

      <section>
        <h2 className="text-2xl font-semibold text-white">Demo Case Studies (Examples)</h2>
        <p className="mt-2 text-sm text-zinc-400">
          These are illustrative examples and not claims about real client outcomes.
        </p>
        <div className="mt-4 grid gap-4 md:grid-cols-3">
          {demoCaseStudies.map((study) => (
            <article key={study.title} className="card">
              <h3 className="text-base font-semibold text-white">{study.title}</h3>
              <p className="mt-2 text-sm text-zinc-400">{study.summary}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="card text-center">
        <h2 className="text-2xl font-semibold text-white">Ready to build your Omnivoxio system?</h2>
        <p className="mt-2 text-zinc-400">Start with a focused consultation and clear implementation roadmap.</p>
        <div className="mt-4 flex flex-wrap justify-center gap-3">
          <Link href={siteConfig.consultationUrl} className="btn-primary">
            Book a Consultation
          </Link>
          <Link href={siteConfig.whatsappPrefilled} className="btn-secondary" target="_blank" rel="noopener noreferrer">
            Chat on WhatsApp
          </Link>
        </div>
      </section>
    </main>
  );
}
