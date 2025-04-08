import type { Metadata } from "next";
import "./globals.css";
import ClientBody from "./ClientBody";
import ErrorBoundary from "@/components/ErrorBoundary";

export const metadata: Metadata = {
  title: "Giertsen Energy Solutions",
  description: "Energy thought through to the end: We develop tailored energy solutions that reduce CO₂ emissions, lower costs, and increase self-sufficiency. Learn how we sustainably strengthen businesses.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <ClientBody>
        <ErrorBoundary>
          {children}
        </ErrorBoundary>
      </ClientBody>
    </html>
  );
}
