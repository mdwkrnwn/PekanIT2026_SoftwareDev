import { useEffect, useState } from "react";
import { supabase } from "@/lib/supabase";
import { fetchProductInsight } from "../services/product.service";
import { getProductInsights, ProductInsightItem } from "../insight";

export function useProductInsight(refreshKey:number){

  const [insights, setInsights] = useState<ProductInsightItem[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function loadInsight() {
      try {
        const {
          data: { user },
        } = await supabase.auth.getUser();

        if (!user) return;

        const data = await fetchProductInsight(user.id);

        setInsights(getProductInsights(data));
      } catch (error) {
        console.error(error);
      } finally {
        setLoading(false);
      }
    }

    loadInsight();
  }, [refreshKey]);

  return {
    insights,
    loading,
  };
}