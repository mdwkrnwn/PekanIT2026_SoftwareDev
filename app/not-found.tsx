import Link from "next/link";
import { FaCompass } from "react-icons/fa";
import { FaArrowLeft } from "react-icons/fa6";

export default function NotFound() {
  return (
    <div className="text-center max-w-md bg-white border border-gray-100 shadow-sm rounded-3xl p-10">
      {/* Icon */}
      <div className="w-20 h-20 mx-auto flex items-center justify-center rounded-full bg-primary/10 text-primary mb-6">
        <FaCompass size={34} />
      </div>

      {/* Title */}
      <h1 className="text-4xl font-bold text-gray-800">404</h1>

      <h2 className="text-xl font-semibold text-gray-700 mt-2">
        Halaman Tidak Ditemukan
      </h2>

      {/* Description */}
      <p className="text-sm text-gray-500 mt-3 leading-relaxed">
        Halaman yang kamu cari mungkin sudah dipindahkan, dihapus, atau tidak
        tersedia.
      </p>

      {/* Actions */}
      <div className="mt-8 flex flex-col gap-3">
        <Link
          href="/"
          className="flex items-center justify-center gap-2 bg-primary text-white py-3 rounded-2xl font-semibold hover:bg-primary/90 transition"
        >
          <FaArrowLeft />
          Kembali ke Beranda
        </Link>

        <Link
          href="/explore"
          className="text-primary font-semibold hover:underline"
        >
          Jelajahi UMKM
        </Link>
      </div>
    </div>
  );
}
