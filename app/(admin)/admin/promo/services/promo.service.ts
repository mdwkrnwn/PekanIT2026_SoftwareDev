import { supabase } from "@/lib/supabase";

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

    status: promoData.status,

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

  const updateData: any = {
    title: promoData.title.trim(),
    description: promoData.description.trim(),

    promo_type: promoData.promo_type,
    discount: Number(promoData.discount),

    target: promoData.target,
    schedule: promoData.schedule.trim(),

    start_date: promoData.start_date,
    end_date: promoData.end_date,

    status: promoData.status,
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