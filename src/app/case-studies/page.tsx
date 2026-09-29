import { PageShell } from "@/components/page-shell";
import { pageMetadata } from "@/lib/metadata";
import { demoCaseStudies } from "@/lib/site";

export const metadata = pageMetadata(
  "Case Studies",
  "Demo case study examples illustrating Omnivoxio workflows for AI websites, voice agents, automation, and SEO growth systems.",
  "/case-studies"
);

export default function CaseStudiesPage() {
  return (
    <PageShell
      title="Case Studies"
      intro="All case studies on this page are demo examples for planning discussions and do not represent claimed client performance."
    >
      <div className="grid gap-4 md:grid-cols-3">
        {demoCaseStudies.map((item) => (
          <article key={item.title} className="card">
            <p className="text-xs uppercase tracking-wide text-cyan-200">Demo Example</p>
            <h2 className="mt-2 text-lg font-semibold text-white">{item.title.replace("Demo Example: ", "")}</h2>
            <p className="mt-2 text-sm text-zinc-400">{item.summary}</p>
          </article>
        ))}
      </div>
    </PageShell>
  );
}
