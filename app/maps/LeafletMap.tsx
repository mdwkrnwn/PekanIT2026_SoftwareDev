"use client";

import { useEffect, useState, useImperativeHandle, forwardRef } from "react";
import L from "leaflet";
import "leaflet/dist/leaflet.css";

interface Product {
  id: number;
  name: string;
  image: string;
  category: string;
  store?: string;
  lat?: number;
  lng?: number;
}

interface MapProps {
  products: Product[];
  userLocation: { lat: number; lng: number };
  radius: number; // in km
  onVisibleChange?: (visible: Product[]) => void;
}

const LeafletMap = forwardRef(({
  products,
  userLocation,
  radius,
  onVisibleChange,
}: MapProps, ref) => {
  const [visibleCount, setVisibleCount] = useState(0);
  const [mapInstance, setMapInstance] = useState<L.Map | null>(null);
  const [markers, setMarkers] = useState<{ [key: number]: L.Marker }>({});

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

  // Expose method untuk fokus ke marker tertentu
  useImperativeHandle(ref, () => ({
    focusMarker: (productId: number) => {
      const marker = markers[productId];
      if (marker && mapInstance) {
        mapInstance.setView(marker.getLatLng(), 15, {
          animate: true,
          duration: 0.5
        });
        marker.openPopup();
      }
    }
  }));

  useEffect(() => {
    if (!userLocation) return;

    const map = L.map("map", {
      zoomControl: false,
      scrollWheelZoom: true,
    }).setView([userLocation.lat, userLocation.lng], 13);

    setMapInstance(map);

    L.tileLayer("https://{s}.tile.openstreetmap.fr/hot/{z}/{x}/{y}.png", {
      attribution: "© OpenStreetMap contributors",
    }).addTo(map);

    // Icon user
    const userIcon = L.divIcon({
      html: `
        <div style="
          background: linear-gradient(135deg, #044BC5, #12A1F3);
          width: 18px; height: 18px;
          border-radius: 50%;
          box-shadow: 0 0 12px rgba(16,185,129,0.7);
          border: 2px solid white;
        "></div>
      `,
      className: "",
      iconSize: [18, 18],
      iconAnchor: [9, 9],
    });

    L.marker([userLocation.lat, userLocation.lng], { icon: userIcon })
      .addTo(map)
      .bindPopup(`<b>Lokasi Kamu</b>`);

    // Radius visual
    L.circle([userLocation.lat, userLocation.lng], {
      radius: radius * 1000,
      color: "#044BC5",
      fillColor: "#044BC5",
      fillOpacity: 0.08,
      weight: 2,
      dashArray: "4 6",
    }).addTo(map);

    // Icon UMKM
    const umkmIcon = L.divIcon({
      html: `
        <div style="
          background: white;
          border: 3px solid #0ea5e9;
          border-radius: 50%;
          width: 24px; height: 24px;
          display: flex; align-items: center; justify-content: center;
          box-shadow: 0 3px 8px rgba(0,0,0,0.15);
        ">
          <div style="background: #0ea5e9; width: 10px; height: 10px; border-radius: 50%;"></div>
        </div>
      `,
      className: "",
      iconSize: [24, 24],
      iconAnchor: [12, 12],
    });

    // --- Filter produk berdasarkan jarak ---
    const nearbyProducts = products.filter((p) => {
      if (!p.lat || !p.lng) return false;
      const distance = getDistance(
        userLocation.lat,
        userLocation.lng,
        p.lat,
        p.lng
      );
      return distance <= radius;
    });

    onVisibleChange?.(nearbyProducts);
    setVisibleCount(nearbyProducts.length);

    // --- Tampilkan marker hanya yang dalam radius ---
    const newMarkers: { [key: number]: L.Marker } = {};

    nearbyProducts.forEach((p) => {
      const marker = L.marker([p.lat!, p.lng!], { icon: umkmIcon }).addTo(map);
      const popupHTML = `
  <div style="
    background: white;
    border-radius: 14px;
    overflow: hidden;
    box-shadow: 0 6px 16px rgba(0,0,0,0.2);
    width: 220px;
    font-family: 'Inter', sans-serif;
  ">
    <div style="width: 100%; height: 130px; overflow: hidden;">
      <img 
        src="${p.image.replace("./", "/")}" 
        alt="${p.name}"
        style="width: 100%; height: 100%; object-fit: cover; display: block;"
      />
    </div>
    <div style="padding: 10px 12px 12px;">
      <h3 style="
        font-size: 15px; 
        font-weight: 600; 
        color: #111; 
        margin-bottom: 4px;
        line-height: 1.3;
      ">
        ${p.name}
      </h3>
      <p style="font-size: 12.5px; color: #6b7280; margin: 0 0 8px;">
        ${p.category}
      </p>
      <a 
        href="/detail/${p.id}" 
        style="
          display: inline-block;
          width: 100%;
          text-align: center;
          font-size: 13px;
          font-weight: 600;
          background: #044BC5;
          color: white;
          padding: 6px 0;
          border-radius: 8px;
          text-decoration: none;
          transition: background 0.2s ease;
        "
        onmouseover="this.style.background='#12A1F3'"
        onmouseout="this.style.background='#044BC5'"
      >
        Lihat Detail
      </a>
    </div>
  </div>
`;
      marker.bindPopup(popupHTML);
      newMarkers[p.id] = marker;
    });

    setMarkers(newMarkers);

    L.control.zoom({ position: "bottomright" }).addTo(map);

    return () => {
      map.remove();
    };
  }, [products, userLocation, radius, onVisibleChange]);

  return (
    <div className="relative">
      <div
        id="map"
        className="h-[75vh] rounded-2xl shadow-lg border border-gray-200"
      />
      <div className="absolute top-4 left-4 bg-white/90 backdrop-blur-sm px-4 py-2 rounded-full shadow-md text-sm font-medium text-gray-700 flex items-center gap-2 z-[1000] pointer-events-auto">
        <span className="w-2.5 h-2.5 bg-emerald-500 rounded-full"></span>
        Radius: {radius} km | <b>{visibleCount}</b> UMKM ditemukan
      </div>
    </div>
  );
});

LeafletMap.displayName = "LeafletMap";

export default LeafletMap;