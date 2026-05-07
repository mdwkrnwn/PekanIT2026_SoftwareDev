"use client";

import { useEffect, useState, useRef } from "react";
import { UMKM } from "@/data/UMKM";
import dynamic from "next/dynamic";
import Image from "next/image";
import {
  FaHeart,
  FaMap,
  FaSearch,
  FaTags,
  FaTh,
  FaChevronLeft,
  FaEye,
} from "react-icons/fa";
import { SiGooglemaps } from "react-icons/si";
import { useRouter } from "next/navigation";
import { getWishlist } from "@/lib/wishlist";
import "sweetalert2/dist/sweetalert2.min.css";
import Link from "next/link";
import {
  FaLocationCrosshairs,
  FaLocationDot,
} from "react-icons/fa6";

const LeafletMap = dynamic(() => import("./LeafletMap"), { ssr: false });

// Fungsi menghitung jarak (Haversine formula)
const getDistance = (
  lat1: number,
  lon1: number,
  lat2: number,
  lon2: number
) => {
  const R = 6371; // km
  const dLat = ((lat2 - lat1) * Math.PI) / 180;
  const dLon = ((lon2 - lon1) * Math.PI) / 180;
  const a =
    Math.sin(dLat / 2) * Math.sin(dLat / 2) +
    Math.cos((lat1 * Math.PI) / 180) *
      Math.cos((lat2 * Math.PI) / 180) *
      Math.sin(dLon / 2) *
      Math.sin(dLon / 2);
  const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
  return R * c;
};

export default function ProductsSection() {
  const [view, setView] = useState<"map" | "grid">("map");
  const [search, setSearch] = useState("");
  const [radius, setRadius] = useState(5);
  const [geo, setGeo] = useState<{ lat: number; lng: number } | null>(null);
  const [filtered, setFiltered] = useState(UMKM);
  const [visible, setVisible] = useState<any>(UMKM);
  const [wishlist, setWishlist] = useState<number[]>([]);
  const [activeItem, setActiveItem] = useState<number | null>(null);
  const mapRef = useRef<any>(null);

  useEffect(() => {
    const query = search.toLowerCase();
    setFiltered(
      UMKM.filter(
        (p) =>
          p.name.toLowerCase().includes(query) ||
          p.category.toLowerCase().includes(query) ||
          p.description.toLowerCase().includes(query)
      )
    );
  }, [search]);

  const locateUser = () => {
    if (!navigator.geolocation) {
      setGeo({ lat: -7.981894, lng: 112.626503 }); // fallback Malang
      return;
    }
    navigator.geolocation.getCurrentPosition(
      (pos) => {
        setGeo({ lat: pos.coords.latitude, lng: pos.coords.longitude });
      },
      () => {
        setGeo({ lat: -7.981894, lng: 112.626503 });
      }
    );
  };

  useEffect(() => {
    const ids = getWishlist();
    setWishlist(ids);
    locateUser();
  }, []);

  // Fungsi untuk handle klik item di list
  const handleItemClick = (item: any) => {
    setActiveItem(item.id);
    if (mapRef.current && item.lat && item.lng) {
      mapRef.current.focusMarker(item.id);
    }
  };

  const router = useRouter();

  return (
    <>
      <header className="sticky top-0 bg-white shadow-sm z-20">
        <div className="max-w-7xl mx-auto flex items-center gap-3 p-4">
          {/* Logo */}
          <Link href="/">
            <div className="w-12 h-12 sm:w-[60px] sm:h-[60px]">
              <Image
                src="/logo.png"
                alt="UMKM Finder"
                width={200}
                height={200}
                className="rounded-md cursor-pointer w-full h-full object-contain"
              />
            </div>
          </Link>

          {/* Search Bar */}
          <div className="flex items-center w-full bg-gray-100 px-3 py-2 rounded-lg">
            <FaSearch className="text-gray-400" />
            <input
              type="text"
              placeholder="Cari UMKM..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className="bg-transparent w-full px-2 outline-none"
            />
          </div>

          {/* Wishlist Button */}
          <button
            onClick={() => router.push("/wishlist")}
            className="relative p-2 rounded-full bg-white hover:bg-gray-100 transition border"
            title="Lihat Wishlist"
          >
            <FaHeart className="text-xl text-blue-600" />
            {wishlist.length > 0 && (
              <span className="absolute -top-1 -right-1 bg-red-500 text-white text-[10px] px-1.5 rounded-full">
                {wishlist.length}
              </span>
            )}
          </button>

          <button
            onClick={() => router.push("/map")}
            className="relative p-2 rounded-full bg-white hover:bg-gray-100 transition border"
            title="Lihat Wishlist"
          >
            <SiGooglemaps className="text-xl text-blue-600" />
          </button>
        </div>
      </header>
      <main className="max-w-7xl mx-auto px-4 md:px-8 py-10 pb-28 mt-3 space-y-10">
        <nav className="flex items-center gap-2 text-sm text-gray-500 mb-8">
          <div
            onClick={() => router.push("/")}
            className="flex items-center gap-1 cursor-pointer text-gray-600 hover:text-blue-600 transition-all"
          >
            <FaChevronLeft className="text-xs" />
            <span className="font-medium">Kembali</span>
          </div>
          <FaChevronLeft className="text-gray-400 text-xs" />
          <span className="text-gray-800 font-semibold">UMKM</span>
        </nav>
        {/* Toggle & Filters */}
        <div className="flex items-center justify-between mb-4 flex-wrap gap-3">
          <div className="flex items-center gap-2">
            <button
              onClick={() => setView("map")}
              className={`px-4 py-2 rounded-lg flex items-center gap-2 border ${
                view === "map"
                  ? "bg-blue-100 text-blue-700 border-blue-300"
                  : "bg-white text-gray-700 border-gray-300 hover:bg-gray-50"
              }`}
            >
              <FaMap className="text-xl text-blue-600" /> <span>Map View</span>
            </button>
            <button
              onClick={() => setView("grid")}
              className={`px-4 py-2 rounded-lg flex items-center gap-2 border ${
                view === "grid"
                  ? "bg-blue-100 text-blue-700 border-blue-300"
                  : "bg-white text-gray-700 border-gray-300 hover:bg-gray-50"
              }`}
            >
              <FaTh className="text-xl text-blue-600" /> <span>Grid View</span>
            </button>
          </div>
        </div>

        {/* === MAP MODE === */}
        {view === "map" ? (
          <section className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {/* === LEFT LIST === */}
            <div className="bg-white rounded-3xl shadow-md p-4 flex flex-col md:col-span-1 h-[75vh]">
              <div className="flex items-center mb-4 gap-3">
                <div className="w-full">
                  <div className="flex items-center gap-2">
                    <input
                      type="text"
                      placeholder="Cari UMKM atau jasa..."
                      value={search}
                      onChange={(e) => setSearch(e.target.value)}
                      className="px-3 py-2 border rounded-lg w-full text-sm focus:ring-2 focus:ring-blue-400"
                    />
                  </div>
                </div>
                <div className="h-full">
                  <button
                    onClick={locateUser}
                    className="px-3 py-2 h-full text-sm bg-blue-600 hover:bg-blue-700 text-white rounded-lg flex items-center justify-center gap-2"
                  >
                    <FaLocationCrosshairs className="text-lg" />
                  </button>
                </div>
              </div>
              <div className="flex items-center justify-between mb-3">
                <label className="text-sm font-medium">Radius:</label>
                <span className="text-blue-700 text-sm">{radius} km</span>
              </div>
              <input
                type="range"
                min="1"
                max="20"
                value={radius}
                onChange={(e) => setRadius(parseInt(e.target.value))}
                className="accent-blue-600 w-full mb-4"
              />
              {/* === LIST UMKM DALAM RADIUS === */}
              <div className="flex-1 overflow-y-auto space-y-3">
                {visible.length === 0 ? (
                  <p className="text-gray-500 text-sm text-center mt-10">
                    Tidak ada UMKM dalam radius ini
                  </p>
                ) : (
                  visible.map((item: any) => {
                    // Hitung jarak jika ada koordinat
                    const distance =
                      geo && item.lat && item.lng
                        ? getDistance(geo.lat, geo.lng, item.lat, item.lng)
                        : null;

                    return (
                      <div
                        key={item.id}
                        onClick={() => handleItemClick(item)}
                        className={`flex gap-3 p-2 transition cursor-pointer rounded-xl ${
                          activeItem === item.id
                            ? "bg-blue-100 border-2 border-blue-400"
                            : "hover:bg-blue-50 border-2 border-transparent"
                        }`}
                      >
                        <Image
                          src={item.image}
                          alt={item.name}
                          width={64}
                          height={64}
                          className="rounded-xl object-cover w-16 h-16 flex-shrink-0"
                        />
                        <div className="flex flex-col w-full min-w-0">
                          <div className="flex justify-between items-start gap-2">
                            <h4 className="font-semibold text-gray-800 text-sm truncate flex-1 min-w-0">
                              {item.name}
                            </h4>
                            <div className="rounded-lg bg-blue-200 px-2 py-1 flex-shrink-0">
                              <p className="text-xs text-blue-700 font-semibold whitespace-nowrap">
                                {item.rating}
                              </p>
                            </div>
                          </div>

                          <div className="mt-0.5">
                            <p className="text-xs text-gray-500 font-semibold truncate">
                              {item.category}
                            </p>
                          </div>

                          <div className="flex gap-1 mt-1 items-center">
                            <FaLocationDot className="text-sm text-blue-700 font-semibold flex-shrink-0" />
                            <p className="text-sm text-gray-500 font-semibold whitespace-nowrap">
                              {distance !== null
                                ? `${distance.toFixed(1)} km`
                                : "N/A"}
                            </p>
                          </div>
                        </div>
                      </div>
                    );
                  })
                )}
              </div>
            </div>
            {/* === MAP AREA === */}
            <div className="rounded-3xl z-0 overflow-hidden shadow-md border border-gray-100 md:col-span-2">
              {geo ? (
                <LeafletMap
                  ref={mapRef}
                  products={filtered}
                  userLocation={geo}
                  radius={radius}
                  onVisibleChange={setVisible}
                />
              ) : (
                <p className="text-gray-500 text-center mt-20">
                  Memuat peta...
                </p>
              )}
            </div>
          </section>
        ) : (
          /* === GRID MODE === */
          <section className="product-main">
            <h2 className="text-2xl font-bold mb-6">Semua Produk UMKM</h2>

            <div className="grid grid-cols-[repeat(auto-fill,minmax(280px,1fr))] gap-6">
              {filtered.map((item) => (
                <a
                  key={item.id}
                  href={`/umkm/${item.id}`}
                  className="group block border rounded-3xl shadow-md bg-white overflow-hidden hover:shadow-xl transition-all"
                >
                  {/* IMAGE WRAPPER */}
                  <div className="relative overflow-hidden">
                    <Image
                      src={item.image.replace("./", "/")}
                      alt={item.name}
                      width={400}
                      height={300}
                      className="rounded-b-none object-cover w-full h-60 transition-transform duration-500 group-hover:scale-105"
                    />

                    {/* DARK OVERLAY */}
                    <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity"></div>

                    {/* ICON EYE */}
                    <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition">
                      <div className="bg-white rounded-full p-3 shadow-md">
                        <FaEye className="text-xl text-gray-700" />
                      </div>
                    </div>
                  </div>

                  {/* CARD BODY */}
                  <div className="px-5 pb-6 text-center">
                    <span className="inline-flex items-center gap-1 mt-4 bg-blue-100 text-blue-600 px-3 py-1 rounded-full text-xs font-semibold">
                      <FaTags className="text-sm" />
                      {item.category}
                    </span>

                    <h3 className="text-lg font-semibold mt-3 mb-1 group-hover:text-blue-600 transition">
                      {item.name}
                    </h3>

                    <p className="text-gray-600 text-sm mt-2 line-clamp-2">
                      {item.description}
                    </p>
                  </div>
                </a>
              ))}
            </div>
          </section>
        )}
      </main>

      {/* FOOTER */}
      <footer className="bg-white border-t text-center py-6 text-gray-600 text-sm">
        Hak Cipta &copy; {new Date().getFullYear()}{" "}
        <span className="font-semibold text-blue-700">UMKM Finder</span> —
        Bangun Ekonomi Lokal.
      </footer>
    </>
  );
}
