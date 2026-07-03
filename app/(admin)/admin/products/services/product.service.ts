import { supabase } from "@/lib/supabase";

export async function getProducts(ownerId: string) {
  const { data: umkm, error: umkmError } = await supabase
    .from("umkm")
    .select("id, name")
    .eq("owner_id", ownerId)
    .single();

  if (umkmError) throw umkmError;

  const { data, error } = await supabase
    .from("menus")
    .select("*")
    .eq("umkm_id", umkm.id)
    .order("created_at", { ascending: false });

  if (error) throw error;

  return data.map((item) => ({
    ...item,
    store: umkm.name,
    image: item.image_url,
  }));
}

interface CreateProductProps {
  userId: string;
  menuData: {
    name: string;
    description: string;
    category: string;
    price: string;
  };
  productImage: File;
}

export async function createProduct({
  userId,
  menuData,
  productImage,
}: CreateProductProps) {
  const { data: umkm, error: umkmError } = await supabase
    .from("umkm")
    .select("id")
    .eq("owner_id", userId)
    .single();

  if (umkmError) throw umkmError;

  const fileName = `${userId}/${Date.now()}-${productImage.name}`;

  const { error: uploadError } = await supabase.storage
    .from("menus")
    .upload(fileName, productImage);

  if (uploadError) throw uploadError;

  const {
    data: { publicUrl },
  } = supabase.storage.from("menus").getPublicUrl(fileName);

  const { error } = await supabase.from("menus").insert({
    umkm_id: umkm.id,
    name: menuData.name.trim(),
    description: menuData.description.trim(),
    category: menuData.category,
    price: Number(menuData.price),
    image_url: publicUrl,
  });

  if (error) throw error;
}

interface UpdateProductProps {
  userId: string;
  editingId: number;
  menuData: {
    name: string;
    description: string;
    category: string;
    price: string;
  };
  productImage: File | null;
}

export async function updateProduct({
  userId,
  editingId,
  menuData,
  productImage,
}: UpdateProductProps) {
  let imageUrl: string | undefined;

  if (productImage) {
    const fileName = `${userId}/${Date.now()}-${productImage.name}`;

    const { error } = await supabase.storage
      .from("menus")
      .upload(fileName, productImage);

    if (error) throw error;

    imageUrl = supabase.storage.from("menus").getPublicUrl(fileName)
      .data.publicUrl;
  }

  const payload: any = {
    name: menuData.name.trim(),
    description: menuData.description.trim(),
    category: menuData.category,
    price: Number(menuData.price),
  };

  if (imageUrl) {
    payload.image_url = imageUrl;
  }

  const { error } = await supabase
    .from("menus")
    .update(payload)
    .eq("id", editingId);

  if (error) throw error;
}

export async function deleteProduct(id: number) {
  const { error } = await supabase.from("menus").delete().eq("id", id);

  if (error) throw error;
}

export async function fetchProductStats(userId: string) {
  const { data: umkm, error: umkmError } = await supabase
    .from("umkm")
    .select("id")
    .eq("owner_id", userId)
    .single();

  if (umkmError || !umkm) {
    throw new Error("UMKM tidak ditemukan.");
  }

  const { data: products, error } = await supabase
    .from("menus")
    .select("views, favorite")
    .eq("umkm_id", umkm.id);

  if (error) {
    throw new Error(error.message);
  }

  const totalViews = products.reduce(
    (total, product) => total + (product.views ?? 0),
    0,
  );

  const totalFavorite = products.reduce(
    (total, product) => total + (product.favorite ?? 0),
    0,
  );

  return {
    totalProduk: products.length,
    totalDilihat: totalViews,
    totalFavorit: totalFavorite,

    // sementara dummy
    produkUnggulan: Math.floor(Math.random() * products.length) + 1,
    rating: (4.5 + Math.random() * 0.5).toFixed(1),
  };
}

export async function fetchPopularProducts(userId: string) {
  const { data: umkm, error: umkmError } = await supabase
    .from("umkm")
    .select("id")
    .eq("owner_id", userId)
    .single();

  if (umkmError || !umkm) {
    throw new Error("UMKM tidak ditemukan.");
  }

  const { data: menus, error } = await supabase
    .from("menus")
    .select("name, image_url, views, created_at")
    .eq("umkm_id", umkm.id);

  if (error) {
    throw new Error(error.message);
  }

  if (!menus || menus.length === 0) {
    return [];
  }

  const hasViews = menus.some((menu) => (menu.views ?? 0) > 0);

  const sortedMenus = hasViews
    ? [...menus].sort((a, b) => (b.views ?? 0) - (a.views ?? 0))
    : [...menus].sort(
        (a, b) =>
          new Date(b.created_at).getTime() - new Date(a.created_at).getTime(),
      );

  const topMenus = sortedMenus.slice(0, 6);

  const totalViews = topMenus.reduce((sum, menu) => sum + (menu.views ?? 0), 0);

  return topMenus.map((menu, index) => ({
    rank: index + 1,
    name: menu.name,
    image: menu.image_url,
    views: menu.views ?? 0,
    percent:
      totalViews > 0 ? Math.round(((menu.views ?? 0) / totalViews) * 100) : 0,
  }));
}

export async function fetchProductInsight(userId: string) {
  const { data: umkm, error: umkmError } = await supabase
    .from("umkm")
    .select("id")
    .eq("owner_id", userId)
    .single();

  if (umkmError || !umkm) {
    throw new Error("UMKM tidak ditemukan.");
  }

  const { data: menus, error } = await supabase
    .from("menus")
    .select("name, views, favorite")
    .eq("umkm_id", umkm.id);

  if (error) {
    throw new Error(error.message);
  }

  if (!menus || menus.length === 0) {
    return {
      mostViewed: null,
      mostFavorite: null,
      highestRating: {
        name: "-",
        rating: "0.0",
        reviews: 0,
      },
    };
  }

  const mostViewed = [...menus].sort(
    (a, b) => (b.views ?? 0) - (a.views ?? 0),
  )[0];

  const mostFavorite = [...menus].sort(
    (a, b) => (b.favorite ?? 0) - (a.favorite ?? 0),
  )[0];

  return {
    mostViewed,
    mostFavorite,
    highestRating: {
      name: menus.length > 0 ? menus[0].name : "-",
      rating: (4.5 + Math.random() * 0.5).toFixed(1), // 4.5 - 5.0
      reviews: Math.floor(Math.random() * 80) + 20, // 20 - 99 ulasan
    },
  };
}
