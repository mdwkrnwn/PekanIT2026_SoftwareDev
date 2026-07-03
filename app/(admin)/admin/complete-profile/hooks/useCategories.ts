import { useEffect, useState } from "react";
import { supabase } from "@/lib/supabase";

export function useCategories() {
  const [categories, setCategories] = useState<any[]>([]);

  useEffect(() => {
    const getCategories = async () => {
      const { data } = await supabase
        .from("categories")
        .select("*")
        .order("name");

      if (data) setCategories(data);
    };

    getCategories();
  }, []);

  return categories;
}