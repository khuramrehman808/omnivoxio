import { PageShell } from "@/components/page-shell";
import { pageMetadata } from "@/lib/metadata";

export const metadata = pageMetadata(
  "Custom AI Agents",
  "Build custom AI agents for internal operations, research, customer service, sales support, and domain-specific execution workflows.",
  "/custom-ai-agents"
);

export default function CustomAiAgentsPage() {
  return (
    <PageShell
      title="Custom AI Agents"
      intro="Purpose-built agents designed around your workflows, knowledge sources, and integration requirements."
    >
      <section className="grid gap-4 md:grid-cols-2">
        <article className="card">
          <h2 className="text-xl font-semibold text-white">Use Cases</h2>
          <ul className="mt-3 space-y-2 text-sm text-zinc-300">
            <li>• Internal assistants for operations and reporting</li>
            <li>• Industry-specific guidance and process agents</li>
            <li>• Research copilots and synthesis assistants</li>
            <li>• Customer service and sales enablement agents</li>
          </ul>
        </article>
        <article className="card">
          <h2 className="text-xl font-semibold text-white">System Components</h2>
          <ul className="mt-3 space-y-2 text-sm text-zinc-300">
            <li>• Structured knowledge bases</li>
            <li>• Business rule and approval layers</li>
            <li>• Platform and API integrations</li>
            <li>• Observability and quality controls</li>
          </ul>
        </article>
      </section>
    </PageShell>
  );
}
