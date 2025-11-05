import type { Metadata } from "next";
import "./globals.css";
import { Inter } from "next/font/google";
import Sidebar from "@/components/Sidebar";

const inter = Inter({ subsets: ["latin"], display: "swap" });

export const metadata: Metadata = {
  title: "IRIS | Incident Response Playbook Assessment",
  description: "AI-powered incident response playbook assessment platform",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <div className="grid-container">
          <Sidebar />
          <main className="min-h-screen bg-white">
            <div className="mx-auto max-w-7xl px-8 py-10">
              {children}
            </div>
          </main>
        </div>
      </body>
    </html>
  );
}
