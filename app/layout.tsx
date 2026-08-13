import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Monish P N — Backend Software Engineer",
  description: "Backend engineer building reliable Go services, cloud integrations, asynchronous systems, and production tooling.",
  icons: { icon: "/favicon.svg", shortcut: "/favicon.svg" },
  openGraph: {
    title: "Monish P N — Backend Software Engineer",
    description: "Reliable systems. Measurable impact. Built in Go.",
    type: "website",
    images: [{ url: "/og.png", width: 1200, height: 630, alt: "Monish P N — Backend Software Engineer" }],
  },
  twitter: { card: "summary_large_image", title: "Monish P N — Backend Software Engineer", description: "Reliable systems. Measurable impact. Built in Go.", images: ["/og.png"] },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="en"><body>{children}</body></html>;
}
