import type { Metadata } from "next";
import "./globals.css";
import { rubikFont } from "./fonts";

export const metadata: Metadata = {
  title: "Natrium",
  description: "This is my own bento box layout.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${rubikFont.className} antialiased`}>
        {children}
      </body>
    </html>
  );
}
