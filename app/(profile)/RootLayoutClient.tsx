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
          <div className="lg:hidden border-slate-200 bg-background/90 backdrop-blur-sm sticky top-0 px-4 py-4 border-b">
            <button
              type="button"
              onClick={() => setIsSidebarOpen(true)}
              className="rounded-xl border-slate-200 text-slate-900 hover:bg-slate-50 inline-flex items-center gap-2 px-4 py-2 text-sm font-semibold transition bg-white border shadow-sm"
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