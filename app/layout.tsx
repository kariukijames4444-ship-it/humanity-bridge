import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "HUMANITY BRIDGE | Connecting Humanity. Changing Lives.",
  description:
    "A global humanitarian platform connecting people who want to help with people and communities in need.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
