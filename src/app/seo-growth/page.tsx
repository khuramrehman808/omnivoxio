import { PageShell } from "@/components/page-shell";
import { pageMetadata } from "@/lib/metadata";

export const metadata = pageMetadata(
  "SEO Growth",
  "Evidence-based SEO growth systems including technical SEO, content strategy, local SEO, AEO/GEO readiness, and transparent reporting.",
  "/seo-growth"
);

const seoAreas = [
  "Technical SEO auditing and remediation planning",
  "Content architecture and topical coverage planning",
  "AEO/GEO readiness for answer-focused experiences",
  "Local SEO and business visibility alignment",
  "Competitor and SERP landscape analysis",
  "Entity and reputation signal alignment",
  "Backlink planning and source qualification",
  "Transparent progress reporting",
];

const packages = [
  { name: "Starter", description: "Editable placeholder package for foundational SEO setup and priorities." },
  { name: "Growth", description: "Editable placeholder package for ongoing SEO content and optimization cycles." },
  { name: "Advanced", description: "Editable placeholder package for scaled multi-channel SEO operations." },
];

export default function SeoGrowthPage() {
  return (
    <PageShell
      title="Evidence-Based SEO Growth"
      intro="SEO programs built on real diagnostics, transparent hypotheses, and iterative improvement rather than ranking promises."
    >
      <section className="card">
        <h2 className="text-xl font-semibold text-white">What this includes</h2>
        <ul className="mt-3 grid gap-2 text-sm text-zinc-300 md:grid-cols-2">
          {seoAreas.map((item) => (
            <li key={item}>• {item}</li>
          ))}
        </ul>
      </section>

      <section className="mt-8">
        <h2 className="text-xl font-semibold text-white">Editable Package Placeholders</h2>
        <div className="mt-4 grid gap-4 md:grid-cols-3">
          {packages.map((pkg) => (
            <article key={pkg.name} className="card">
              <h3 className="text-lg font-semibold text-white">{pkg.name}</h3>
              <p className="mt-2 text-sm text-zinc-400">{pkg.description}</p>
              <p className="mt-3 rounded-md border border-white/10 bg-black/40 px-3 py-2 text-xs text-zinc-500">
                Pricing placeholder — update in content settings.
              </p>
            </article>
          ))}
        </div>
      </section>

      <p className="mt-8 rounded-xl border border-amber-300/30 bg-amber-500/10 p-4 text-sm text-amber-100">
        Honest notice: Omnivoxio does not guarantee rankings, traffic, or revenue outcomes. We provide evidence-based strategy and execution.
      </p>
    </PageShell>
  );
}
