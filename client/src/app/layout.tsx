import type { Metadata } from "next";
import { GeistSans } from "geist/font/sans";
import { GeistMono } from "geist/font/mono";
import { Toaster } from "sonner";
import "./globals.css";
import Header from "../components/Header";
import Footer from "../components/Footer";
import Newsletter from "@/components/Newsletter/index.newsletters";

export const metadata: Metadata = {
  title: "Ajmal Expert",
  description: "Experience the real power of Development.",
};
//  bg - background;
export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${GeistSans.className} `}>
        <Toaster />
        <div className="flex content max-w-3xl mx-auto flex-col min-h-screen">
          <Header />
          <main className="flex-grow max-w-3xl mx-auto w-full">{children}</main>
          <div>
            <Newsletter />
            <Footer />
          </div>
        </div>
      </body>
    </html>
  );
}
