"use client";

import { useEffect, useRef, useState } from "react";
import { UMKM } from "../../data/UMKM";
import Image from "next/image";
import LeafletMap from "./LeafletMap";
import { FaLocationCrosshairs, FaLocationDot } from "react-icons/fa6";

const getDistance = (
  lat1: number,
  lon1: number,
  lat2: number,
  lon2: number,
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

export function Control() {
  const [search, setSearch] = useState("");
  const [radius, setRadius] = useState(5);
  const [geo, setGeo] = useState<{ lat: number; lng: number } | null>(null);
  const [filtered, setFiltered] = useState(UMKM);
  const [visible, setVisible] = useState<any>(UMKM);
  const [activeItem, setActiveItem] = useState<number | null>(null);
  const mapRef = useRef<any>(null);

  useEffect(() => {
    const query = search.toLowerCase();
    setFiltered(
      UMKM.filter(
        (p) =>
          p.name.toLowerCase().includes(query) ||
          p.category.toLowerCase().includes(query) ||
          p.description.toLowerCase().includes(query),
      ),
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
      },
    );
  };

  // Fungsi untuk handle klik item di list
  const handleItemClick = (item: any) => {
    setActiveItem(item.id);
    if (mapRef.current && item.lat && item.lng) {
      mapRef.current.focusMarker(item.id);
    }
  };

  useEffect(() => {
    locateUser();
  }, []);

  return (
    <main className="w-[86vw] mx-auto px-4 md:px-8 py-10 pb-28 mt-3 space-y-10">
      <section className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {/* === LEFT LIST === */}
        <div className="bg-white rounded-3xl shadow-md p-4 flex flex-col md:col-span-1 h-[75dvh] min-h-[75dvh]">
          {/* Search */}
          <div className="flex items-center mb-4 gap-3">
            <div className="w-full">
              <div className="flex items-center gap-2">
                <input
                  type="text"
                  placeholder="Cari UMKM atau jasa..."
                  value={search}
                  onChange={(e) => setSearch(e.target.value)}
                  className="px-4 py-3 border border-gray-200 rounded-2xl text-sm focus:ring-2 focus:ring-primary/20 focus:border-primary outline-none transition-all w-75"
                />
              </div>
            </div>

            <div className="h-full">
              <button
                onClick={locateUser}
                className="px-4 py-3 h-full bg-primary hover:bg-primary/90 text-white rounded-2xl flex items-center justify-center transition-all"
              >
                <FaLocationCrosshairs className="text-lg" />
              </button>
            </div>
          </div>

          {/* Radius */}
          <div className="flex items-center justify-between mb-3">
            <label className="text-sm font-medium text-gray-700">Radius</label>

            <span className="text-primary text-sm font-semibold">
              {radius} km
            </span>
          </div>

          <input
            type="range"
            min="1"
            max="20"
            value={radius}
            onChange={(e) => setRadius(parseInt(e.target.value))}
            className="accent-primary w-full mb-5"
          />

          {/* === LIST UMKM DALAM RADIUS === */}
          <div className="flex-1 min-h-0 overflow-y-auto space-y-3 pr-1">
            {visible.length === 0 ? (
              <div className="h-full flex items-center justify-center">
                <p className="text-muted-foreground text-sm text-center">
                  Tidak ada UMKM dalam radius ini
                </p>
              </div>
            ) : (
              visible.map((item: any) => {
                const distance =
                  geo && item.lat && item.lng
                    ? getDistance(geo.lat, geo.lng, item.lat, item.lng)
                    : null;

                return (
                  <div
                    key={item.id}
                    onClick={() => handleItemClick(item)}
                    className={`flex items-center gap-3 p-3 min-h-[92px] rounded-2xl border-2 transition-all cursor-pointer ${activeItem === item.id
                      ? "border-primary bg-primary/5"
                      : "border-transparent hover:bg-primary/5"
                      }`}
                  >
                    {/* Thumbnail */}
                    <div className="w-16 h-16 flex-shrink-0 overflow-hidden rounded-xl bg-gray-100">
                      <Image
                        src={item.gallery[0]}
                        alt={item.name}
                        width={64}
                        height={64}
                        className="w-full h-full object-cover"
                      />
                    </div>

                    {/* Content */}
                    <div className="flex flex-col justify-between flex-1 min-w-0 h-full">
                      {/* Top */}
                      <div className="flex items-start justify-between gap-2">
                        <h4 className="text-sm font-semibold text-gray-800 line-clamp-1">
                          {item.name}
                        </h4>

                        <div className="bg-primary/10 text-primary rounded-lg px-2 py-1 text-xs font-semibold flex-shrink-0">
                          {item.rating}
                        </div>
                      </div>

                      {/* Category */}
                      <p className="text-xs font-medium text-muted-foreground line-clamp-1">
                        {item.category}
                      </p>

                      {/* Distance */}
                      <div className="flex items-center gap-1 text-xs text-muted-foreground">
                        <FaLocationDot className="text-primary flex-shrink-0" />

                        <span className="whitespace-nowrap">
                          {distance !== null
                            ? `${distance.toFixed(1)} km`
                            : "N/A"}
                        </span>
                      </div>
                    </div>
                  </div>
                );
              })
            )}
          </div>
        </div>

        {/* === MAP AREA === */}
        <div className="rounded-3xl overflow-hidden shadow-md border border-gray-100 md:col-span-2 h-[75dvh] min-h-[75dvh]">
          {geo ? (
            <LeafletMap
              ref={mapRef}
              products={filtered}
              userLocation={geo}
              radius={radius}
              onVisibleChange={setVisible}
            />
          ) : (
            <div className="h-full flex items-center justify-center">
              <p className="text-gray-500">Memuat peta...</p>
            </div>
          )}
        </div>
      </section>
    </main>
  );
}
