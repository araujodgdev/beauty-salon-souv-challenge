import type { Metadata } from "next";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Beauty Salon",
  description: "Desafio proposto durante o processo de seleção da souv!",
};

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-br" className="scroll-smooth overflow-x-hidden">
      <body
        className={`bg-gray-50 antialiased flex flex-col items-start justify-start min-h-screen text-dark`}
      >
        <Header />
        <main>
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
