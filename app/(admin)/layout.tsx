"use client";

import "../globals.css";
import { Poppins } from "next/font/google";
import { cn } from "@/lib/utils";
import Sidebar from "./sidebar";
import AdminGuard from "@/components/AdminGuard";
import { Header } from "./header";
import { usePathname } from "next/navigation";

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
      <body
        className={cn(
          "relative grid h-screen overflow-hidden bg-background",
          isCompleteProfile
            ? "grid-cols-1 grid-rows-[1fr]"
            : "grid-cols-[auto_1fr] gap-y-8 grid-rows-[auto_1fr]",
        )}
      >
        {!isCompleteProfile && <Sidebar />}
        <Header />
        <main
          className={cn(
            "overflow-y-auto",
            isCompleteProfile ? "px-24" : "px-8",
          )}
        >
          <AdminGuard>{children}</AdminGuard>
        </main>
      </body>
    </html>
  );
}