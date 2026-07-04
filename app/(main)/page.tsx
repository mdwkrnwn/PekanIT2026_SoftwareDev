"use client";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { supabase } from "@/lib/supabase";
import SplashScreen from "@/components/SplashScreen";

import { SolusiUMKM } from "../../components/SolusiUMKM";
import { FeatureDashboard } from "../../components/FeatureDashboard";
import { InsightHariIni } from "../../components/InsightHariIni";
import { AiBisnis } from "../../components/AiBisnis";
import { Testimonials } from "../../components/Testimonials";
import { HeroBanner } from "../../components/HeroBanner";
import { CTA } from "../../components/CTA";

export default function Home() {
  const router = useRouter();
  const [showSplash, setShowSplash] = useState(false);
  const [checkingAuth, setCheckingAuth] = useState(true);
  useEffect(() => {
    const checkSession = async () => {
      try {
        const {
          data: { user },
        } = await supabase.auth.getUser();

        // Tidak login
        if (!user) {
          setCheckingAuth(false);
          return;
        }

        const { data: profile } = await supabase
          .from("profiles")
          .select("role")
          .eq("id", user.id)
          .single();

        // Login sebagai owner
        if (profile?.role === "owner") {
          setShowSplash(true);

          // Splash ±700ms
          setTimeout(() => {
            router.replace("/admin/dashboard");
          }, 700);

          return;
        }

        setCheckingAuth(false);
      } catch {
        setCheckingAuth(false);
      }
    };

    checkSession();
  }, [router]);

  if (showSplash) {
    return <SplashScreen message="Memuat Dashboard" />;
  }
  return (
    <>
      <HeroBanner />
      <SolusiUMKM />
      <FeatureDashboard />
      <InsightHariIni />
      <AiBisnis />
      <Testimonials />
      <CTA />
    </>
  );
}
