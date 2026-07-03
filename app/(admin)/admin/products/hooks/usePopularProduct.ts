import { useEffect, useState } from "react";
import { supabase } from "@/lib/supabase";
import { fetchPopularProducts } from "../services/product.service";
import { PopularProduct } from "../product.type";

export function usePopularProducts() {
  const [products, setProducts] = useState<PopularProduct[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function loadProducts() {
      try {
        const {
          data: { user },
        } = await supabase.auth.getUser();

        if (!user) return;

        const data = await fetchPopularProducts(user.id);

        setProducts(data);
      } catch (error) {
        console.error(error);
      } finally {
        setLoading(false);
      }
    }

    loadProducts();
  }, []);

  return {
    products,
    loading,
  };
}