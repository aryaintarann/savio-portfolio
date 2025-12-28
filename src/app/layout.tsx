import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Jose Inacio Savio Dias da Costa | Portfolio",
  description:
    "Portofolio Jose Inacio Savio Dias da Costa.",
  keywords: [
    "entrepreneur",
    "e-sport player",
    "Mahasiswa",
  ],
  authors: [{ name: "Jose Inacio Savio Dias da Costa" }],
  icons: {
    icon: "/logo.png",
    apple: "/logo.png",
  },
  openGraph: {
    title: "Jose Inacio Savio Dias da Costa | Portfolio",
    description:
      "",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="id" className={inter.className} suppressHydrationWarning>
      <body suppressHydrationWarning>
        <Navbar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
