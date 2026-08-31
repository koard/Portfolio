import type { Metadata, Viewport } from "next";
import { Inter, Fira_Code } from "next/font/google";
import { Analytics } from "@vercel/analytics/next";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800", "900"],
});

const firaCode = Fira_Code({
  variable: "--font-fira-code",
  subsets: ["latin"],
  weight: ["400", "500"],
});

export const viewport: Viewport = {
  themeColor: "#060b14",
  width: "device-width",
  initialScale: 1,
};

export const metadata: Metadata = {
  metadataBase: new URL("https://www.ratchanon.space"),
  title: {
    default: "Ratchanon K. | Full-Stack Developer",
    template: "%s | Ratchanon Kulpatrakorn",
  },
  description:
    "Professional portfolio of Ratchanon Kulpatrakorn, a passionate Full-Stack Developer specializing in building high-performance web applications, scalable backend systems, and modern user interfaces.",
  keywords: [
    "Ratchanon Kulpatrakorn",
    "Software Engineer",
    "Full-Stack Developer",
    "Frontend",
    "Backend",
    "Next.js",
    "React",
    "TypeScript",
    "Node.js",
    "Portfolio",
  ],
  authors: [{ name: "Ratchanon Kulpatrakorn" }],
  creator: "Ratchanon Kulpatrakorn",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "/",
    title: "Ratchanon K. | Full-Stack Developer",
    description:
      "Professional portfolio of Ratchanon Kulpatrakorn, a passionate Full-Stack Developer specializing in building high-performance web applications.",
    siteName: "Ratchanon Kulpatrakorn Portfolio",
  },
  twitter: {
    card: "summary_large_image",
    title: "Ratchanon K. | Full-Stack Developer",
    description:
      "Professional portfolio of Ratchanon Kulpatrakorn, a passionate Full-Stack Developer specializing in building high-performance web applications.",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: "Ratchanon Kulpatrakorn",
  url: "https://www.ratchanon.space",
  jobTitle: "Full-Stack Developer",
  alumniOf: {
    "@type": "CollegeOrUniversity",
    name: "Prince of Songkla University",
  },
  sameAs: [
    "https://github.com/koard",
    "https://www.linkedin.com/in/kulpatrakorn/",
  ],
  knowsAbout: [
    "TypeScript",
    "JavaScript",
    "React",
    "Next.js",
    "Node.js",
    "Express",
    "PostgreSQL",
    "Python",
    "Flutter",
    "Docker",
    "Full-Stack Development",
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${inter.variable} ${firaCode.variable} h-full`}
      suppressHydrationWarning
    >
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="min-h-full" suppressHydrationWarning>
        {children}
        <Analytics />
      </body>
    </html>
  );
}
