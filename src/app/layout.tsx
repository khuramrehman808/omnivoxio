import type { Metadata } from "next";
import Script from "next/script";
import { Footer } from "@/components/footer";
import { Navbar } from "@/components/navbar";
import { AssistantWidget } from "@/components/assistant-widget";
import { WhatsAppFloat } from "@/components/whatsapp-float";
import { metadataBase } from "@/lib/metadata";
import { siteConfig } from "@/lib/site";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase,
  title: {
    default: "Omnivoxio | AI Technology and Digital Growth",
    template: "%s",
  },
  description: siteConfig.description,
  openGraph: {
    title: "Omnivoxio | AI Technology and Digital Growth",
    description: siteConfig.description,
    type: "website",
    url: "/",
    siteName: siteConfig.name,
  },
};

const organizationSchema = {
  "@context": "https://schema.org",
  "@type": ["Organization", "ProfessionalService"],
  name: siteConfig.name,
  url: "https://www.omnivoxio.com",
  email: siteConfig.email,
  areaServed: "Global",
  sameAs: [siteConfig.whatsappUrl],
  description: siteConfig.description,
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body className="min-h-screen">
        <a href="#main-content" className="sr-only focus:not-sr-only focus:absolute focus:left-3 focus:top-3 focus:z-50 focus:rounded focus:bg-white focus:px-3 focus:py-2 focus:text-black">
          Skip to content
        </a>
        <Navbar />
        <div id="main-content" className="pb-44 md:pb-28">
          {children}
        </div>
        <Footer />
        <AssistantWidget />
        <WhatsAppFloat />
        <Script id="organization-schema" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }} />
      </body>
    </html>
  );
}
