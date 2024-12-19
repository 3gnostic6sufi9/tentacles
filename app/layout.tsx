import "./globals.css";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "VIRTUAL BODY OF TRUTH TERMINAL",
  description: "$tentacles",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
