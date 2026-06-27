"use client"

import Image from "next/image";
import Link from "next/link";
import { BiCheckCircle } from "react-icons/bi";

export default function RegisterPage() {
  return (
    <div className="min-h-screen w-[50vw] bg-white text-base py-16 px-6">
      <div className=" w-full flex flex-col items-center">

        {/* Header Branding */}
        <div className="flex items-center gap-3 mb-8">
          <div className="w-12 h-12 bg-[#15803d] rounded-xl flex items-center justify-center font-black text-white text-3xl">
            B
          </div>
          <span className="text-3xl font-bold tracking-wide text-slate-900">Bakool</span>
        </div>

        <h1 className="text-3xl font-bold text-slate-950 tracking-tight text-center">Daftar Akun Bakool</h1>
        <p className="text-slate-500 mt-2 text-base text-center mb-10">
          Pilih peran yang paling sesuai denganmu
        </p>

        {/* Role Selection Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 w-full mb-10">
          {/* Card: Pengguna */}
          <label className="border-2 border-slate-100 rounded-3xl p-8 bg-slate-50/50 flex flex-col gap-6 cursor-pointer hover:border-[#15803d] transition-all relative group">
            <div className="flex items-center justify-between">
              <input type="radio" name="role" defaultChecked className="w-6 h-6 accent-[#15803d]" />
              <span className="text-xl font-bold text-slate-950">Pengguna</span>
            </div>

            <div className="relative w-full aspect-4/3 max-w-60 mx-auto mix-blend-multiply">
              <Image src="/register1.png" fill className="object-contain" alt="Pengguna Illustration" />
            </div>

            <div className="flex flex-col gap-3 mt-auto">
              {[
                "Cari UMKM lokal",
                "Simpan favorit",
                "Dapatkan badge & achievement"
              ].map((text, idx) => (
                <div key={idx} className="flex items-center gap-3 text-slate-800 font-medium">
                  <BiCheckCircle className="text-[#15803d] shrink-0" size={20} />
                  <span>{text}</span>
                </div>
              ))}
            </div>
          </label>

          {/* Card: Pemilik UMKM */}
          <label className="border-2 border-slate-100 rounded-3xl p-8 bg-slate-50/50 flex flex-col gap-6 cursor-pointer hover:border-[#15803d] transition-all relative group">
            <div className="flex items-center justify-between">
              <input type="radio" name="role" className="w-6 h-6 accent-[#15803d]" />
              <span className="text-xl font-bold text-slate-950">Pemilik UMKM</span>
            </div>

            <div className="relative w-full aspect-4/3 max-w-60 mx-auto mix-blend-multiply">
              <Image src="/register2.png" fill className="object-contain" alt="UMKM Illustration" />
            </div>

            <div className="flex flex-col gap-3 mt-auto">
              {[
                "Kelola operasional toko digital",
                "Akses fitur analitik data & AI",
                "Perluas jangkauan pasar lokal"
              ].map((text, idx) => (
                <div key={idx} className="flex items-center gap-3 text-slate-800 font-medium">
                  <BiCheckCircle className="text-[#15803d] shrink-0" size={20} />
                  <span>{text}</span>
                </div>
              ))}
            </div>
          </label>
        </div>

        {/* Divider */}
        <div className="relative flex py-4 items-center w-full my-4">
          <div className="grow border-t border-slate-200"></div>
          <span className="shrink mx-4 text-slate-400 font-medium">atau</span>
          <div className="grow border-t border-slate-200"></div>
        </div>

        {/* Form Container */}
        <div className="w-full text-left mt-4">
          <h3 className="text-xl font-bold text-slate-950 mb-6">Buat Akun Baru</h3>

          <form className="flex flex-col gap-6" onSubmit={(e) => e.preventDefault()}>
            {/* Full Name */}
            <div className="flex flex-col gap-2">
              <label className="font-bold text-slate-900">Nama Lengkap</label>
              <input
                type="text"
                placeholder="Masukkan nama lengkap"
                className="w-full border border-slate-200 rounded-xl p-4 text-slate-800 placeholder-slate-300 focus:outline-none focus:border-[#15803d] transition-colors"
              />
            </div>

            {/* Email */}
            <div className="flex flex-col gap-2">
              <label className="font-bold text-slate-900">Email</label>
              <input
                type="email"
                placeholder="Masukkan email kamu"
                className="w-full border border-slate-200 rounded-xl p-4 text-slate-800 placeholder-slate-300 focus:outline-none focus:border-[#15803d] transition-colors"
              />
            </div>

            {/* Password */}
            <div className="flex flex-col gap-2">
              <label className="font-bold text-slate-900">Password</label>
              <input
                type="password"
                placeholder="Masukkan password kamu"
                className="w-full border border-slate-200 rounded-xl p-4 text-slate-800 placeholder-slate-300 focus:outline-none focus:border-[#15803d] transition-colors"
              />
            </div>

            {/* Action Submit */}
            <button type="submit" className="w-full bg-[#15803d] text-white font-bold py-4 rounded-xl text-lg hover:bg-[#166534] transition-colors mt-4 shadow-sm">
              Daftar
            </button>
          </form>

          {/* Login Trigger */}
          <p className="text-center text-slate-950 text-base font-medium mt-8">
            Sudah punya akun?{" "}
            <Link href="/login" className="text-[#15803d] font-bold hover:underline">
              Masuk sekarang
            </Link>
          </p>
        </div>

      </div>
    </div>
  );
}