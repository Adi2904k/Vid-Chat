import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { ClerkProvider } from "@clerk/nextjs";
import Navbar from "@/components/layout/Navbar";
import Container from "@/components/layout/Container";
import SocketProvider from "@/provider/SocketProvider";
import { cn } from "@/lib/utils";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Vid Chat",
  description: "Video Call",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <ClerkProvider>
    <html lang="en">
      <body
        className={cn(`${geistSans.variable} ${geistMono.variable} antialiased`,'relative')}
      >
        <SocketProvider>
        <main className="flex flex-col min-h-screen bg-secondary">
        <Navbar />
        <Container>
          {children}
        </Container>
        </main>
        </SocketProvider>
      </body>
    </html>
    </ClerkProvider>
  );
}
