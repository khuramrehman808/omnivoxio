import { PageShell } from "@/components/page-shell";
import { pageMetadata } from "@/lib/metadata";

export const metadata = pageMetadata(
  "AI Websites",
  "Premium AI-powered websites with conversion-focused UX, lead capture, booking flows, integrations, and SEO-ready architecture.",
  "/ai-websites"
);

export default function AiWebsitesPage() {
  return (
    <PageShell
      title="AI Websites"
      intro="Modern website systems designed to convert attention into qualified conversations and action."
    >
      <section className="grid gap-4 lg:grid-cols-2">
        <div className="card">
          <h2 className="text-xl font-semibold text-white">Website + AI Assistant Experience</h2>
          <div className="mt-4 rounded-xl border border-white/10 bg-black/50 p-4">
            <p className="text-xs text-zinc-400">Mockup: Homepage with AI assistant panel</p>
            <div className="mt-3 grid gap-3 md:grid-cols-[1fr_0.9fr]">
              <div className="space-y-2">
                <div className="h-2 w-3/4 rounded bg-zinc-700" />
                <div className="h-2 w-2/3 rounded bg-zinc-700" />
                <div className="h-10 rounded bg-cyan-400/20" />
                <div className="h-10 rounded bg-zinc-800" />
              </div>
              <div className="rounded-lg border border-white/10 bg-zinc-900/70 p-3 text-xs text-zinc-300">
                <p className="text-cyan-200">AI Assistant Demo</p>
                <p className="mt-2">“I can guide visitors to booking, services, or WhatsApp.”</p>
              </div>
            </div>
          </div>
        </div>
        <div className="card">
          <h2 className="text-xl font-semibold text-white">Core capabilities</h2>
          <ul className="mt-3 space-y-2 text-sm text-zinc-300">
            <li>• Conversion-first page structures</li>
            <li>• Lead capture and booking components</li>
            <li>• CRM, analytics, and communication integrations</li>
            <li>• Fast, responsive, SEO-ready architecture</li>
            <li>• Accessible UI patterns and clear CTA paths</li>
          </ul>
        </div>
      </section>
    </PageShell>
  );
}
