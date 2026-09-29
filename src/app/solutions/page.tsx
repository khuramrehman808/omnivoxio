import { PageShell } from "@/components/page-shell";
import { pageMetadata } from "@/lib/metadata";
import { industries } from "@/lib/site";

export const metadata = pageMetadata(
  "Solutions & Industries",
  "Omnivoxio solutions adapted for healthcare, real estate, ecommerce, SaaS, local businesses, and other service-driven industries.",
  "/solutions"
);

export default function SolutionsPage() {
  return (
    <PageShell
      title="Solutions & Industries"
      intro="We adapt website, voice, automation, and SEO systems to operational realities across different sectors."
    >
      <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
        {industries.map((industry) => (
          <article key={industry} className="card p-4">
            <h2 className="text-lg font-semibold text-white">{industry}</h2>
            <p className="mt-2 text-sm text-zinc-400">
              Practical AI and growth workflows tailored to process, demand patterns, and customer communication needs.
            </p>
          </article>
        ))}
      </div>
    </PageShell>
  );
}
