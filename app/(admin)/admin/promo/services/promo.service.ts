import { supabase } from "@/lib/supabase";
import { getPromoStatus } from "../utils/promo";
interface PromoData {
  title: string;
  description: string;
  promo_type: string;
  discount: string;
  target: string;
  schedule: string;
  start_date: string;
  end_date: string;
  status: string;
}

interface CreatePromoProps {
  userId: string;
  promoData: PromoData;
  promoImage: File;
}

interface UpdatePromoProps {
  editingId: number;
  userId: string;
  promoData: PromoData;
  promoImage: File | null;
}

export async function fetchPromos(userId: string) {
  const { data: umkm, error: umkmError } = await supabase
    .from("umkm")
    .select("id")
    .eq("owner_id", userId)
    .single();

  if (umkmError || !umkm) {
    throw new Error("UMKM tidak ditemukan.");
  }

  const { data, error } = await supabase
    .from("promos")
    .select("*")
    .eq("umkm_id", umkm.id)
    .order("created_at", { ascending: false });

  if (error) {
    throw new Error(error.message);
  }

  return data ?? [];
}

export async function createPromo({
  userId,
  promoData,
  promoImage,
}: CreatePromoProps) {
  const { data: umkm, error: umkmError } = await supabase
    .from("umkm")
    .select("id")
    .eq("owner_id", userId)
    .single();

  if (umkmError || !umkm) {
    throw new Error("UMKM tidak ditemukan.");
  }

  const fileName = `${userId}/${Date.now()}-${promoImage.name}`;

  const { error: uploadError } = await supabase.storage
    .from("promos")
    .upload(fileName, promoImage);

  if (uploadError) {
    throw new Error(uploadError.message);
  }

  const {
    data: { publicUrl },
  } = supabase.storage.from("promos").getPublicUrl(fileName);
  const status = getPromoStatus(promoData.start_date, promoData.end_date);
  const { error } = await supabase.from("promos").insert({
    umkm_id: umkm.id,

    title: promoData.title.trim(),
    description: promoData.description.trim(),

    promo_type: promoData.promo_type,
    discount: Number(promoData.discount),

    target: promoData.target,
    schedule: promoData.schedule.trim(),

    start_date: promoData.start_date,
    end_date: promoData.end_date,

    status: status,

    image_url: publicUrl,
  });

  if (error) {
    throw new Error(error.message);
  }
}

export async function updatePromo({
  editingId,
  userId,
  promoData,
  promoImage,
}: UpdatePromoProps) {
  let imageUrl: string | undefined;

  if (promoImage) {
    const fileName = `${userId}/${Date.now()}-${promoImage.name}`;

    const { error: uploadError } = await supabase.storage
      .from("promos")
      .upload(fileName, promoImage);

    if (uploadError) {
      throw new Error(uploadError.message);
    }

    const {
      data: { publicUrl },
    } = supabase.storage.from("promos").getPublicUrl(fileName);

    imageUrl = publicUrl;
  }

  const status = getPromoStatus(promoData.start_date, promoData.end_date);

  const updateData: any = {
    title: promoData.title.trim(),
    description: promoData.description.trim(),

    promo_type: promoData.promo_type,
    discount: Number(promoData.discount),

    target: promoData.target,
    schedule: promoData.schedule.trim(),

    start_date: promoData.start_date,
    end_date: promoData.end_date,

    status: status,
  };

  if (imageUrl) {
    updateData.image_url = imageUrl;
  }

  const { error } = await supabase
    .from("promos")
    .update(updateData)
    .eq("id", editingId);

  if (error) {
    throw new Error(error.message);
  }
}

export async function deletePromo(id: number) {
  const { error } = await supabase.from("promos").delete().eq("id", id);

  if (error) {
    throw new Error(error.message);
  }
}

export async function fetchPromoStats(userId: string) {
  const { data: umkm, error: umkmError } = await supabase
    .from("umkm")
    .select("id")
    .eq("owner_id", userId)
    .single();

  if (umkmError || !umkm) {
    throw new Error("UMKM tidak ditemukan.");
  }

  const { data: promos, error } = await supabase
    .from("promos")
    .select("views, clicks, status")
    .eq("umkm_id", umkm.id);

  if (error) {
    throw new Error(error.message);
  }

  return {
    totalPromo: promos.length,
    totalDilihat: promos.reduce(
      (total, promo) => total + (promo.views ?? 0),
      0,
    ),
    totalKlik: promos.reduce((total, promo) => total + (promo.clicks ?? 0), 0),
    promoAktif: promos.filter((promo) => promo.status === "Aktif").length,

    promoSelesai: promos.filter((promo) => promo.status === "Selesai").length,
  };
}

export async function fetchPromoPerformance(userId: string) {
  const { data: umkm, error: umkmError } = await supabase
    .from("umkm")
    .select("id")
    .eq("owner_id", userId)
    .single();

  if (umkmError || !umkm) {
    throw new Error("UMKM tidak ditemukan.");
  }

  const { data: promos, error } = await supabase
    .from("promos")
    .select("views")
    .eq("umkm_id", umkm.id);

  if (error) {
    throw new Error(error.message);
  }

  const totalViews = promos.reduce(
    (total, promo) => total + (promo.views ?? 0),
    0,
  );

  return {
    totalViews,
    growth: (Math.random() * 15 + 5).toFixed(1), // random 5.0 - 20.0
  };
}
