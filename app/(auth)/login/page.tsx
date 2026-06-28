"use client"

import Link from "next/link";

export default function LoginPage() {
  return (
    <div className="flex flex-row justify-center w-screen min-h-screen overflow-x-hidden text-base bg-white">
      {/* Right Panel: Login Form */}
      <div className="w-[65vw] flex flex-col justify-center px-24 py-12">
        <div className="w-full max-w-2xl mx-auto">
          {/* Top Logo */}
          <div className="flex items-center gap-3 mb-16">
            <div className="w-10 h-10 bg-[#15803d] rounded-xl flex items-center justify-center font-black text-white text-2xl">
              B
            </div>
            <span className="text-slate-900 text-2xl font-bold tracking-wide">Bakool</span>
          </div>

          <h2 className="text-slate-950 text-3xl font-bold tracking-tight">Masuk ke akunmu</h2>
          <p className="text-slate-500 mt-2 mb-10 text-base">
            Yuk, masuk untuk lanjut kelola usahamu.
          </p>

          <form className="flex flex-col gap-6" onSubmit={(e) => e.preventDefault()}>
            {/* Email Field */}
            <div className="flex flex-col gap-2">
              <label className="text-slate-900 font-bold">Email</label>
              <input
                type="email"
                placeholder="Masukkan email kamu"
                className="w-full border border-slate-200 rounded-xl p-4 text-slate-800 placeholder-slate-300 focus:outline-none focus:border-[#15803d] transition-colors"
              />
            </div>

            {/* Password Field */}
            <div className="flex flex-col gap-2">
              <label className="text-slate-900 font-bold">Password</label>
              <input
                type="password"
                placeholder="Masukkan password kamu"
                className="w-full border border-slate-200 rounded-xl p-4 text-slate-800 placeholder-slate-300 focus:outline-none focus:border-[#15803d] transition-colors"
              />
            </div>

            {/* Options Row */}
            <div className="flex items-center justify-between mt-2 text-base">
              <label className="text-slate-400 flex items-center gap-3 cursor-pointer select-none">
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
          <div className="relative flex items-center py-6 my-6">
            <div className="border-slate-100 flex-grow border-t"></div>
            <span className="text-slate-400 flex-shrink mx-4 font-medium">atau</span>
            <div className="border-slate-100 flex-grow border-t"></div>
          </div>

          {/* Registration Trigger */}
          <p className="text-slate-900 text-base font-medium text-center">
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