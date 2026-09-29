import Script from "next/script";
import { FaqAccordion } from "@/components/faq-accordion";
import { PageShell } from "@/components/page-shell";
import { pageMetadata } from "@/lib/metadata";
import { faqItems } from "@/lib/site";

export const metadata = pageMetadata(
  "FAQ",
  "Frequently asked questions about Omnivoxio services, deliverables, integrations, and project approach.",
  "/faq"
);

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: faqItems.map((item) => ({
    "@type": "Question",
    name: item.question,
    acceptedAnswer: {
      "@type": "Answer",
      text: item.answer,
    },
  })),
};

export default function FaqPage() {
  return (
    <PageShell title="Frequently Asked Questions" intro="Answers to common questions about Omnivoxio services and implementation approach.">
      <FaqAccordion items={faqItems} />
      <Script id="faq-schema" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
    </PageShell>
  );
}
