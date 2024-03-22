import type { Metadata } from "next";
import { Inter, Poppins } from "next/font/google";
import "./globals.css";
import Header from "../components/Header";
import Footer from "../components/Footer";
import Newsletter from "@/components/Newsletter/index.newsletters";
import ReduxProvider from "@/Redux/Redux";

const inter = Poppins({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: "Ajmal Expert",
  description: "Experience the real power of Development.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <ReduxProvider>
        <body className={inter.className}>
          <Header />
          <main className="dark text-foreground bg-background">{children}</main>
          <Newsletter />
          <Footer />
        </body>
      </ReduxProvider>
    </html>
  );
}
