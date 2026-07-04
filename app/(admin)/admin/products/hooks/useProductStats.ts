import { useState,useEffect } from "react";
import { supabase } from "@/lib/supabase";
import { fetchProductStats } from "../services/product.service";
import { getProductStats, ProductStat } from "../productStats";
export function useProductStats(refreshKey: number) {
  const [stats, setStats] = useState<ProductStat[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function loadStats() {
      try {
        const {
          data: { user },
        } = await supabase.auth.getUser();

        if (!user) return;

        const result = await fetchProductStats(user.id);

        setStats(getProductStats(result));
      } finally {
        setLoading(false);
      }
    }

    loadStats();
  }, [refreshKey]);

  return { stats, loading };
}