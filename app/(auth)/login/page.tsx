"use client"

import Image from "next/image";
import Link from "next/link";

export default function LoginPage() {
  return (
    <div className="min-h-screen flex flex-row w-screen overflow-x-hidden bg-white text-base justify-center">
      {/* Right Panel: Login Form */}
      <div className="w-[65vw] flex flex-col justify-center px-24 py-12">
        <div className="max-w-2xl w-full mx-auto">
          {/* Top Logo */}
          <div className="flex items-center gap-3 mb-16">
            <div className="w-10 h-10 bg-[#15803d] rounded-xl flex items-center justify-center font-black text-white text-2xl">
              B
            </div>
            <span className="text-2xl font-bold tracking-wide text-slate-900">Bakool</span>
          </div>

          <h2 className="text-3xl font-bold text-slate-950 tracking-tight">Masuk ke akunmu</h2>
          <p className="text-slate-500 mt-2 text-base mb-10">
            Yuk, masuk untuk lanjut kelola usahamu.
          </p>

          <form className="flex flex-col gap-6" onSubmit={(e) => e.preventDefault()}>
            {/* Email Field */}
            <div className="flex flex-col gap-2">
              <label className="font-bold text-slate-900">Email</label>
              <input
                type="email"
                placeholder="Masukkan email kamu"
                className="w-full border border-slate-200 rounded-xl p-4 text-slate-800 placeholder-slate-300 focus:outline-none focus:border-[#15803d] transition-colors"
              />
            </div>

            {/* Password Field */}
            <div className="flex flex-col gap-2">
              <label className="font-bold text-slate-900">Password</label>
              <input
                type="password"
                placeholder="Masukkan password kamu"
                className="w-full border border-slate-200 rounded-xl p-4 text-slate-800 placeholder-slate-300 focus:outline-none focus:border-[#15803d] transition-colors"
              />
            </div>

            {/* Options Row */}
            <div className="flex items-center justify-between text-base mt-2">
              <label className="flex items-center gap-3 cursor-pointer text-slate-400 select-none">
                <input type="checkbox" className="w-5 h-5 accent-[#15803d] rounded-md border-slate-300" />
                <span>Ingat Saya</span>
              </label>
              <Link href="/forgot-password" className="text-[#15803d] font-semibold hover:underline">
                Lupa Password?
              </Link>
            </div>

            {/* Submit Button */}
            <button type="submit" className="w-full bg-[#15803d] text-white font-bold py-4 rounded-xl text-lg hover:bg-[#166534] transition-colors mt-4 shadow-sm">
              Masuk
            </button>
          </form>

          {/* Divider */}
          <div className="relative flex py-6 items-center my-6">
            <div className="flex-grow border-t border-slate-100"></div>
            <span className="flex-shrink mx-4 text-slate-400 font-medium">atau</span>
            <div className="flex-grow border-t border-slate-100"></div>
          </div>

          {/* Registration Trigger */}
          <p className="text-center text-slate-900 text-base font-medium">
            Belum punya akun?{" "}
            <Link href="/register" className="text-[#15803d] font-bold hover:underline">
              Daftar sekarang
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
}