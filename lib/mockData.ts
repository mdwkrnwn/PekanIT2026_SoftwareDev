import {
  FaLocationDot,
  FaStore,
} from "react-icons/fa6";
import { FaCoffee, FaGamepad, FaHeart, FaStar } from "react-icons/fa";

import {
  MdFastfood,
  MdOutlineMiscellaneousServices,
} from "react-icons/md";
import { RiShirtFill, RiShoppingBag4Fill } from "react-icons/ri";
import { IoPaperPlane } from "react-icons/io5";

export const categories = [
  {
    name: "Semua",
    icon: FaStore,
    active: true,
  },
  {
    name: "Makanan",
    icon: MdFastfood,
  },
  {
    name: "Toko Kelontong",
    icon: FaStore,
  },
  {
    name: "Jasa",
    icon: MdOutlineMiscellaneousServices,
  },
  {
    name: "Fashion",
    icon: RiShirtFill,
  },
  {
    name: "Hobi",
    icon: FaGamepad,
  },
  {
    name: "Kafe",
    icon: FaCoffee,
  },
  {
    name: "Kecantikan",
    icon: FaStore,
  },
];

export const umkmData = [
  {
    title: "Dapur Nona",
    category: "Makanan",
    description: "Aneka makanan rumahan lezat & berkualitas.",
    location: "Jakarta Selatan",
    rating: 4.5,
    reviews: 20,
    distance: "1.0 km",
    image: "https://picsum.photos/500/400?random=101",
  },
  {
    title: "Toko Berkah",
    category: "Toko Kelontong",
    description: "Kebutuhan sehari-hari lengkap & terjangkau.",
    location: "Depok",
    rating: 4.6,
    reviews: 10,
    distance: "2.0 km",
    image: "https://picsum.photos/500/400?random=102",
  },
  {
    title: "Greeny Plant",
    category: "Hobi",
    description: "Tanaman hias & perlengkapan berkebun.",
    location: "Bogor",
    rating: 4.9,
    reviews: 60,
    distance: "3.1 km",
    image: "https://picsum.photos/500/400?random=103",
  },
  {
    title: "Local Outfit",
    category: "Fashion",
    description: "Fashion lokal berkualitas dengan harga bersahabat.",
    location: "Jakarta Timur",
    rating: 4.7,
    reviews: 20,
    distance: "1.8 km",
    image: "https://picsum.photos/500/400?random=104",
  },
  {
    title: "Kopi Titik",
    category: "Kafe",
    description: "Tempat nongkrong nyaman dengan kopi pilihan.",
    location: "Jakarta Selatan",
    rating: 4.5,
    reviews: 70,
    distance: "1.0 km",
    image: "https://picsum.photos/500/400?random=105",
  },
  {
    title: "Fixit Home",
    category: "Jasa",
    description: "Jasa perbaikan rumah cepat & terpercaya.",
    location: "Tangerang",
    rating: 4.8,
    reviews: 45,
    distance: "1.0 km",
    image: "https://picsum.photos/500/400?random=106",
  },
  {
    title: "Glow & Go",
    category: "Kecantikan",
    description: "Produk perawatan kulit aman & viral.",
    location: "Bekasi",
    rating: 4.9,
    reviews: 20,
    distance: "2.4 km",
    image: "https://picsum.photos/500/400?random=107",
  },
  {
    title: "Cemilan Nendang",
    category: "Makanan",
    description: "Aneka makanan rumahan lezat & berkualitas.",
    location: "Bogor",
    rating: 4.9,
    reviews: 42,
    distance: "3.6 km",
    image: "https://picsum.photos/500/400?random=108",
  },
];

export const categoryBadgeColor: Record<string, string> = {
  Makanan: "bg-primary",
  "Toko Kelontong": "bg-primary",
  Jasa: "bg-primary",
  Fashion: "bg-primary",
  Hobi: "bg-primary",
  Kafe: "bg-primary",
  Kecantikan: "bg-primary",
};

export const popularArticles = [
  {
    title: "Rekomendasi jajanan lokal favorit anak muda",
    image: "https://picsum.photos/200/200?random=301",
  },
  {
    title: "Tips menemukan hidden GEM di kotamu",
    image: "https://picsum.photos/200/200?random=302",
  },
  {
    title: "Cara mudah belanja lokal tanpa ribet",
    image: "https://picsum.photos/200/200?random=303",
  },
  {
    title: "Kenapa dukung UMKM itu penting?",
    image: "https://picsum.photos/200/200?random=304",
  },
];

export const articlePoints = [
  {
    title: "Belanja Produk Lokal",
    description:
      "Pilih produk lokal untuk kebutuhan sehari-hari. Mulai dari makanan, minuman, fashion, hingga kerajinan tangan",
    icon: RiShoppingBag4Fill,
  },
  {
    title: "Cari di Sekitar Kamu",
    description:
      "Gunakan platform seperti UFinder untuk menemukan UMKM terdekat. Belanja jadi lebih praktis dan hemat ongkir!",
    icon: FaLocationDot,
  },
  {
    title: "Beri Review & Rating",
    description:
      "Ulasan positif darimu sangat berarti bagi pelaku UMKM. Ini membantu mereka menarik lebih banyak pelanggan.",
    icon: FaStar,
  },
  {
    title: "Bagikan ke Teman & Keluarga",
    description:
      "Rekomendasikan UMKM favoritmu ke orang terdekat. Dukungan kecilmu bisa jadi besar bagi mereka.",
    icon: IoPaperPlane,
  },
  {
    title: "Dukung Secara Konsisten",
    description:
      "Dukungan terbaik adalah yang berkelanjutan. Jadikan belanja lokal sebagai kebiasaan baik setiap hari.",
    icon: FaHeart,
  },
];