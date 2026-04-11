import type { Metadata } from "next";
import { Inter, Fira_Code } from "next/font/google";
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

export const metadata: Metadata = {
  title: "Ratchanon Kulpatrakorn | Full-Stack Developer",
  description:
    "Portfolio of Ratchanon Kulpatrakorn — Full-Stack Developer specializing in Next.js, React, TypeScript, Node.js and cloud-scale backend systems. Open to full-stack and backend roles.",
  keywords: [
    "Full-Stack Developer",
    "React",
    "Next.js",
    "TypeScript",
    "Node.js",
    "PostgreSQL",
    "Software Engineer",
  ],
  authors: [{ name: "Ratchanon Kulpatrakorn" }],
  openGraph: {
    title: "Ratchanon Kulpatrakorn | Full-Stack Developer",
    description:
      "Portfolio of Ratchanon Kulpatrakorn — Full-Stack Developer specializing in Next.js, TypeScript, and backend systems.",
    type: "website",
  },
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
    >
      <body className="min-h-full">{children}</body>
    </html>
  );
}
