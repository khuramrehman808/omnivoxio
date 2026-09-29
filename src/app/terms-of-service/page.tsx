import { PageShell } from "@/components/page-shell";
import { pageMetadata } from "@/lib/metadata";

export const metadata = pageMetadata(
  "Terms of Service",
  "Review Omnivoxio terms of service including scope, responsibilities, limitations, and agreement terms.",
  "/terms-of-service"
);

export default function TermsOfServicePage() {
  return (
    <PageShell
      title="Terms of Service"
      intro="This page is a general template and should be reviewed with legal counsel before production use."
    >
      <section className="card space-y-3 text-sm text-zinc-300">
        <p>Project scopes, deliverables, timelines, and fees are defined in individual service agreements.</p>
        <p>Client-provided information, approvals, and access are required for timely delivery.</p>
        <p>Unless expressly stated, no guarantees are made regarding rankings, traffic, or revenue outcomes.</p>
        <p>Each party remains responsible for legal, regulatory, and compliance obligations relevant to their operations.</p>
      </section>
    </PageShell>
  );
}
