"use client";

import "../globals.css";
import { Poppins } from "next/font/google";
import { cn } from "@/lib/utils";
import Sidebar from "./sidebar";
import AdminGuard from "@/components/AdminGuard";
import { Header } from "./header";
import { usePathname } from "next/navigation";
import { useState } from "react";

const poppins = Poppins({
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
  variable: "--font-poppins",
  subsets: ["latin"],
});

export default function AdminLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const pathname = usePathname();
  const isCompleteProfile = pathname === "/admin/complete-profile";
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  return (
    <html
      lang="en"
      className={cn(
        "h-full",
        "antialiased",
        poppins.variable,
        poppins.className,
      )}
      suppressHydrationWarning
    >
      <body className={cn("min-h-screen bg-background", isCompleteProfile ? "flex flex-col" : "flex flex-col lg:flex-row")}>
        {!isCompleteProfile && (
          <>
            <div
              aria-hidden="true"
              className={cn(
                "fixed inset-0 z-30 bg-black/40 transition-opacity duration-200 lg:hidden",
                isSidebarOpen
                  ? "pointer-events-auto opacity-100"
                  : "pointer-events-none opacity-0",
              )}
              onClick={() => setIsSidebarOpen(false)}
            />
            <Sidebar
              isOpen={isSidebarOpen}
              onClose={() => setIsSidebarOpen(false)}
            />
          </>
        )}

        <div className="flex flex-col flex-1 min-h-screen">
          <Header onMenuClick={() => setIsSidebarOpen(true)} />
          <main
            className={cn(
              "flex-1 overflow-y-auto",
              isCompleteProfile ? "px-4 py-6 sm:px-8 lg:px-24" : "px-4 py-4 sm:px-6 lg:px-8",
            )}
          >
            <AdminGuard>{children}</AdminGuard>
          </main>
        </div>
      </body>
    </html>
  );
}