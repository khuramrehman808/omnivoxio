import { PageShell } from "@/components/page-shell";
import { pageMetadata } from "@/lib/metadata";

export const metadata = pageMetadata(
  "AI Automation",
  "Business automation workflows from lead intake to qualification, CRM updates, notifications, and rapid customer response.",
  "/ai-automation"
);

const flow = [
  "New Lead",
  "AI Understanding",
  "Qualification",
  "CRM Update",
  "Team Notification",
  "Response Sent",
];

export default function AiAutomationPage() {
  return (
    <PageShell
      title="AI Automation"
      intro="Streamline repetitive work with automation sequences that keep your team informed and your response times fast."
    >
      <section className="card">
        <h2 className="text-xl font-semibold text-white">Workflow Visualization</h2>
        <div className="mt-5 grid gap-3 md:grid-cols-6">
          {flow.map((step, index) => (
            <div key={step} className="rounded-xl border border-white/10 bg-black/40 p-3 text-center text-xs text-zinc-200">
              <p className="text-zinc-500">{index + 1}</p>
              <p className="mt-1">{step}</p>
            </div>
          ))}
        </div>
      </section>
    </PageShell>
  );
}
