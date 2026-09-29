import { PageShell } from "@/components/page-shell";
import { pageMetadata } from "@/lib/metadata";

export const metadata = pageMetadata(
  "AI Voice Agents",
  "AI voice agent experiences for inbound calls, receptionist flows, appointment capture, qualification, and human handoff pathways.",
  "/ai-voice-agents"
);

export default function AiVoiceAgentsPage() {
  return (
    <PageShell
      title="AI Voice Agents"
      intro="Front-end demonstration of realistic inbound call handling and appointment conversations."
    >
      <section className="grid gap-4 lg:grid-cols-2">
        <div className="card">
          <h2 className="text-xl font-semibold text-white">Phone UI Demo</h2>
          <div className="mt-4 max-w-sm rounded-[2rem] border border-white/15 bg-black/70 p-4">
            <p className="text-xs text-zinc-400">Inbound call · Demo</p>
            <div className="mt-3 rounded-xl border border-cyan-300/30 bg-cyan-300/10 p-3 text-sm text-cyan-100">AI Receptionist</div>
            <div className="mt-3 space-y-2 text-xs text-zinc-300">
              <p>Caller: “I need an appointment this week.”</p>
              <p>Agent: “Sure, I can help with that. What day works best?”</p>
              <p>Caller: “Friday afternoon.”</p>
              <p>Agent: “Great — I can tentatively reserve 3:30 PM and send confirmation.”</p>
            </div>
          </div>
        </div>
        <div className="card">
          <h2 className="text-xl font-semibold text-white">Capabilities</h2>
          <ul className="mt-3 space-y-2 text-sm text-zinc-300">
            <li>• Inbound call answering and guided prompts</li>
            <li>• FAQ handling and service routing</li>
            <li>• Appointment intake and follow-up handoff</li>
            <li>• Qualification logic and CRM note creation</li>
            <li>• Human transfer paths for sensitive requests</li>
          </ul>
          <p className="mt-4 rounded-lg border border-white/10 bg-black/40 p-3 text-xs text-zinc-400">
            Integration disclaimer: this page is a visual demo. Production telephony and CRM integrations require scoped implementation.
          </p>
        </div>
      </section>
    </PageShell>
  );
}
