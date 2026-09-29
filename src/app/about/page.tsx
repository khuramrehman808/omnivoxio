import { PageShell } from "@/components/page-shell";
import { pageMetadata } from "@/lib/metadata";

export const metadata = pageMetadata(
  "About",
  "Learn about Omnivoxio's approach to practical AI implementation, transparent strategy, and evidence-based digital growth systems.",
  "/about"
);

export default function AboutPage() {
  return (
    <PageShell
      title="About Omnivoxio"
      intro="We build practical AI and digital growth systems that combine strategic clarity with disciplined implementation."
    >
      <section className="card space-y-3 text-sm text-zinc-300">
        <p>
          Omnivoxio focuses on high-quality execution across websites, voice systems, automation, and SEO growth programs.
        </p>
        <p>
          Our operating principles: clear strategy, practical AI, evidence-based growth decisions, and human approval before critical actions.
        </p>
      </section>
    </PageShell>
  );
}
