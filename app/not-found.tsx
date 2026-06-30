import Link from "next/link";
import { FaCompass } from "react-icons/fa";
import { FaArrowLeft } from "react-icons/fa6";
import "./globals.css"

export default function NotFound() {
  return (
    <main className="flex min-h-screen items-center justify-center px-6 bg-background">
      <div className="max-w-md rounded-3xl border border-gray-100 bg-white p-10 text-center shadow-sm">
        {/* Icon */}
        <div className="bg-primary/10 text-primary mx-auto mb-6 flex h-20 w-20 items-center justify-center rounded-full">
          <FaCompass size={34} />
        </div>

        {/* Title */}
        <h1 className="text-4xl font-bold text-gray-800">404</h1>

        <h2 className="mt-2 text-xl font-semibold text-gray-700">
          Halaman Tidak Ditemukan
        </h2>

        {/* Description */}
        <p className="mt-3 text-sm leading-relaxed text-gray-500">
          Halaman yang kamu cari mungkin sudah dipindahkan, dihapus,
          atau tidak tersedia.
        </p>

        {/* Actions */}
        <div className="mt-8 flex flex-col gap-3">
          <Link
            href="/"
            className="bg-primary hover:bg-primary/90 flex items-center justify-center gap-2 rounded-2xl py-3 font-semibold text-white transition"
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
    </main>
  );
}