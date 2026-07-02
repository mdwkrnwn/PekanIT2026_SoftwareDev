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
