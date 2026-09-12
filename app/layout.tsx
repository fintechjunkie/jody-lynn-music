import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Jody Lynn — Official Site",
  description: "Enter the kaleidoscopic musical world of artist Jody Lynn.",
  icons: { icon: "/favicon.svg", shortcut: "/favicon.svg" },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="en"><body>{children}</body></html>;
}
