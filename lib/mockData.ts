import {
  FaBagShopping,
  FaBottleWater,
  FaLocationDot,
  FaShirt,
  FaStore,
  FaWandMagicSparkles,
} from "react-icons/fa6";
import { FaBorderAll, FaCoffee, FaGamepad, FaHeart, FaMugHot, FaSearch, FaStar, FaUsers, FaUtensils } from "react-icons/fa";

import { ARTICLES } from "@/data/ARTIKEL";
import {
  MdFastfood,
  MdOutlineMiscellaneousServices,
} from "react-icons/md";
import { RiShirtFill, RiShoppingBag4Fill } from "react-icons/ri";
import { IoPaperPlane } from "react-icons/io5";
import { GiOpenedFoodCan } from "react-icons/gi";
import { LuGrid2X2 } from "react-icons/lu";

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
  Makanan: "bg-orange-100 text-orange-700",
  "Toko Kelontong": "bg-emerald-100 text-emerald-700",
  Jasa: "bg-sky-100 text-sky-700",
  Fashion: "bg-pink-100 text-pink-700",
  Hobi: "bg-violet-100 text-violet-700",
  Kafe: "bg-amber-100 text-amber-800",
  Kecantikan: "bg-rose-100 text-rose-700",
};

export const popularArticles = ARTICLES.slice(1, 5).map((article) => ({
  id: article.id,
  title: article.title,
  image: article.thumbnail,
  readTime: article.readTime,
}));

const article = ARTICLES.find((item) => item.id === 1);

const articlePoints = article?.content || [];

export const categoriesMerchant = [
  {
    name: "Semua",
    icon: FaBorderAll,
    active: true,
  },
  {
    name: "Restoran",
    icon: FaUtensils,
  },
  {
    name: "Cemilan",
    icon: GiOpenedFoodCan,
  },
  {
    name: "Kafe",
    icon: FaMugHot,
  },
  {
    name: "Minuman",
    icon: FaBottleWater,
  },
  {
    name: "Toko Kelontong",
    icon: FaBagShopping,
  },
  {
    name: "Jasa",
    icon: FaWandMagicSparkles,
  },
  {
    name: "Fashion",
    icon: FaShirt,
  },
];

export const merchants = [
  {
    title: "Dapur Nona",
    category: "Makanan",
    description: "Aneka makanan rumahan lezat & berkualitas.",
    location: "Jakarta Selatan",
    distance: "1.0 km",
    rating: 4.5,
    reviews: 20,
    image: "https://picsum.photos/600/400?random=501",
  },
  {
    title: "Kopi Titik",
    category: "Kafe",
    description: "Aneka makanan rumahan lezat & berkualitas.",
    location: "Jakarta Selatan",
    distance: "1.0 km",
    rating: 4.5,
    reviews: 20,
    image: "https://picsum.photos/600/400?random=502",
  },
  {
    title: "Cemilan Nendang",
    category: "Cemilan",
    description: "Aneka makanan rumahan lezat & berkualitas.",
    location: "Jakarta Selatan",
    distance: "1.0 km",
    rating: 4.5,
    reviews: 20,
    image: "https://picsum.photos/600/400?random=503",
  },
  {
    title: "Seger Banget",
    category: "Minuman",
    description: "Aneka makanan rumahan lezat & berkualitas.",
    location: "Jakarta Selatan",
    distance: "1.0 km",
    rating: 4.5,
    reviews: 20,
    image: "https://picsum.photos/600/400?random=504",
  },
];

export const reasons = [
  {
    title: "Mudah Dicari",
    description:
      "Temukan UMKM favorit dengan cepat dan praktis dalam satu platform.",
    icon: FaSearch,
  },
  {
    title: "Dekat Dengan Kamu",
    description:
      "Cari hidden gem UMKM di sekitar lokasi kamu dengan mudah.",
    icon: FaLocationDot,
  },
  {
    title: "Dukung Lokal",
    description:
      "Setiap klik dan transaksi membantu UMKM lokal semakin berkembang.",
    icon: FaHeart,
  },
];

export const statistics = [
  {
    title: "500+",
    subtitle: "UMKM bergabung",
    description: "Bergabung dan tumbuh bersama UFinder",
    icon: FaUsers,
  },
  {
    title: "15+",
    subtitle: "Kota Terjangkau",
    description: "Terjabar di berbagai kota di Indonesia",
    icon: FaLocationDot,
  },
  {
    title: "1.200+",
    subtitle: "Pengguna Aktif",
    description: "Pengguna aktif setiap bulan yang terus bertambah",
    icon: FaUsers,
  },
  {
    title: "10+",
    subtitle: "Kategori Usaha",
    description: "Beragam kategori usaha kebutuhan kamu",
    icon: LuGrid2X2,
  },
];