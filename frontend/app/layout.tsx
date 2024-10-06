'use client'

import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { QueryClientProvider } from '@tanstack/react-query'
import queryClient from "@/lib/query-client";

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
        <QueryClientProvider client={queryClient}>
          <Header />
          <main>
            {children}
          </main>
          <Footer />
        </QueryClientProvider>
      </body>
    </html>
  );
}
