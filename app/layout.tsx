import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "990 Challenge - Transform Your Life in 90 Days",
  description: "Track your 90-day challenge journey. Build lasting habits with daily progress tracking, visual calendars, and achievement analytics.",
  keywords: ["90 day challenge", "habit tracker", "goal setting", "productivity", "fitness challenge"],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="antialiased">
        {children}
      </body>
    </html>
  );
}
