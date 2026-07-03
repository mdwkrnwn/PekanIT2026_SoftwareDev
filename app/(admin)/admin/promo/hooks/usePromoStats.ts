import { useEffect, useState } from "react";
import { supabase } from "@/lib/supabase";

import { fetchPromoStats } from "../services/promo.service";
import { getPromoStats, PromoStat } from "../promoStats";
export function usePromoStats(refreshKey: number) {
  const [stats, setStats] = useState<PromoStat[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function loadStats() {
      try {
        const {
          data: { user },
        } = await supabase.auth.getUser();

        if (!user) {
          setLoading(false);
          return;
        }

        const result = await fetchPromoStats(user.id);

        setStats(getPromoStats(result));
      } catch (error) {
        console.error(error);
      } finally {
        setLoading(false);
      }
    }

    loadStats();
  }, [refreshKey]);

  return {
    stats,
    loading,
  };
}