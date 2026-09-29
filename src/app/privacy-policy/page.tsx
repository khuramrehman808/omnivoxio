import { PageShell } from "@/components/page-shell";
import { pageMetadata } from "@/lib/metadata";

export const metadata = pageMetadata(
  "Privacy Policy",
  "Read Omnivoxio's privacy policy covering data collection, usage, communication, and request handling practices.",
  "/privacy-policy"
);

export default function PrivacyPolicyPage() {
  return (
    <PageShell
      title="Privacy Policy"
      intro="This page is a general template and should be reviewed with legal counsel before production use."
    >
      <section className="card space-y-3 text-sm text-zinc-300">
        <p>We collect only information submitted through forms or direct communication channels.</p>
        <p>Submitted information is used to respond to inquiries, scope projects, and provide requested services.</p>
        <p>We do not sell your data. Third-party services may process data as required for hosting, analytics, or communication delivery.</p>
        <p>You can request data updates or deletion by contacting the listed business email on this website.</p>
      </section>
    </PageShell>
  );
}
