import type { Metadata } from "next";
import { headers } from "next/headers";
import "./globals.css";
import { PortalShell } from "./components/PortalShell";

export async function generateMetadata(): Promise<Metadata> {
  const requestHeaders = await headers();
  const host = requestHeaders.get("host") || "localhost:5173";
  const protocol = requestHeaders.get("x-forwarded-proto") || (host.startsWith("localhost") ? "http" : "https");
  const siteUrl = `${protocol}://${host}`;

  return {
    metadataBase: new URL(siteUrl),
    title: {
      default: "CyberReady | Security Awareness Training",
      template: "%s | CyberReady",
    },
    description:
      "A fictional internal cybersecurity awareness portal for government IT training.",
    openGraph: {
      title: "CyberReady | Security Awareness Training",
      description: "Small habits. Stronger systems. Practical cybersecurity learning for public-sector teams.",
      url: siteUrl,
      siteName: "CyberReady",
      images: [{ url: `${siteUrl}/og.png`, width: 1200, height: 630, alt: "CyberReady security awareness training" }],
      type: "website",
    },
    twitter: {
      card: "summary_large_image",
      title: "CyberReady | Security Awareness Training",
      description: "Small habits. Stronger systems.",
      images: [`${siteUrl}/og.png`],
    },
  };
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <a className="skipLink" href="#main-content">
          Skip to main content
        </a>
        <PortalShell>{children}</PortalShell>
      </body>
    </html>
  );
}
