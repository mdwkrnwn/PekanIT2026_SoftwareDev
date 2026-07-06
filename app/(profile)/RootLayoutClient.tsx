"use client";

import "@/app/globals.css"
import { useState } from "react";
import { RxHamburgerMenu } from "react-icons/rx";
import Navbar from "@/components/Navbar";
import ThemeProviders from "@/components/ThemeProviders";
import { cn } from "@/lib/utils";
import AosProvider from "@/lib/aos-provider";
import Sidebar from "./Sidebar";

function RootLayoutClient({ children }: { children: React.ReactNode }) {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  return (
    <ThemeProviders>
      <AosProvider>
        <Navbar />
        <div
          aria-hidden="true"
          className={cn(
            "fixed inset-0 z-950 bg-slate-950/20 backdrop-blur-sm transition-opacity duration-300 lg:hidden",
            isSidebarOpen
              ? "opacity-100 pointer-events-auto"
              : "opacity-0 pointer-events-none",
          )}
          onClick={() => setIsSidebarOpen(false)}
        />
        <Sidebar isOpen={isSidebarOpen} onClose={() => setIsSidebarOpen(false)} />
        <main className="min-h-0 overflow-y-auto">
          <div className="lg:hidden border-b border-slate-200 bg-background/90 px-4 py-4 backdrop-blur-sm">
            <button
              type="button"
              onClick={() => setIsSidebarOpen(true)}
              className="inline-flex items-center gap-2 rounded-xl border border-slate-200 bg-white px-4 py-2 text-sm font-semibold text-slate-900 shadow-sm transition hover:bg-slate-50"
            >
              <RxHamburgerMenu size={18} />
              Menu Profil
            </button>
          </div>
          {children}
        </main>
      </AosProvider>
    </ThemeProviders>
  )
}

export default RootLayoutClient