"use client";

import { useEffect, useRef, useState } from "react";
import { UMKM } from "../../../data/UMKM";
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
    <div className="w-[80vw] space-y-10">
      <section className="md:grid-cols-[1fr_3fr] grid grid-cols-1 gap-6">
        {/* === LEFT LIST === */}
        <div className="bg-background shadow-foreground/20 rounded-3xl shadow-md p-4 flex flex-col md:col-span-1 h-[75dvh] min-h-[75dvh]">
          {/* Search */}
          <div className="flex items-center gap-3 mb-4">
            <div className="w-full ">
              <input
                type="text"
                placeholder="Cari UMKM atau jasa..."
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                className="border-border rounded-2xl focus:ring-2 focus:ring-primary/20 focus:border-primary px-4 py-3 text-sm transition-all border outline-none w-full"
              />
            </div>

            <div className="h-full">
              <button
                onClick={locateUser}
                className="bg-primary hover:bg-primary/90 rounded-2xl flex items-center justify-center h-full px-4 py-3 text-white transition-all"
              >
                <FaLocationCrosshairs className="text-lg" />
              </button>
            </div>
          </div>

          {/* Radius */}
          <div className="flex items-center justify-between mb-3">
            <label className="text-foreground text-sm font-medium">Radius</label>

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
          <div className="flex-1 min-h-0 pr-1 space-y-3 overflow-y-auto">
            {visible.length === 0 ? (
              <div className="flex items-center justify-center h-full">
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
                    className={`flex items-center gap-3 p-3 min-h-23 rounded-2xl border-2 transition-all cursor-pointer ${activeItem === item.id
                      ? "border-primary bg-primary/5"
                      : "border-transparent hover:bg-primary/5"
                      }`}
                  >
                    {/* Thumbnail */}
                    <div className="shrink-0 rounded-xl w-16 h-16 overflow-hidden bg-gray-100">
                      <Image
                        src={item.gallery[0]}
                        alt={item.name}
                        width={64}
                        height={64}
                        className="object-cover w-full h-full"
                      />
                    </div>

                    {/* Content */}
                    <div className="flex flex-col justify-between flex-1 h-full min-w-0">
                      {/* Top */}
                      <div className="flex items-start justify-between gap-2">
                        <h4 className="text-foreground line-clamp-1 text-sm font-semibold">
                          {item.name}
                        </h4>

                        <div className="bg-primary/10 text-primary shrink-0 px-2 py-1 text-xs font-semibold rounded-lg">
                          {item.rating}
                        </div>
                      </div>

                      {/* Category */}
                      <p className="text-muted-foreground line-clamp-1 text-xs font-medium">
                        {item.category}
                      </p>

                      {/* Distance */}
                      <div className="text-muted-foreground flex items-center gap-1 text-xs">
                        <FaLocationDot className="text-primary shrink-0" />

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
        <div className="rounded-3xl overflow-hidden shadow-md border border-gray-100 h-[75dvh] min-h-[75dvh]">
          {geo ? (
            <LeafletMap
              ref={mapRef}
              products={filtered}
              userLocation={geo}
              radius={radius}
              onVisibleChange={setVisible}
            />
          ) : (
            <div className="flex items-center justify-center h-full">
              <p className="text-gray-500">Memuat peta...</p>
            </div>
          )}
        </div>
      </section>
    </div>
  );
}
