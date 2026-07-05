"use client";
import { supabase } from "@/lib/supabase";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { useRouter } from "next/navigation";
import { LoaderCircle, Check } from "lucide-react";
export default function RegisterPage() {
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const router = useRouter();

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    role: "user" as "user" | "owner",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleRoleChange = (role: "user" | "owner") => {
    setFormData((prev) => ({
      ...prev,
      role,
    }));
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const name = formData.name.trim();
    const email = formData.email.trim();
    const password = formData.password.trim();

    if (!name) {
      alert("Nama lengkap wajib diisi.");
      return;
    }

    if (!email) {
      alert("Email wajib diisi.");
      return;
    }

    if (!password) {
      alert("Password wajib diisi.");
      return;
    }

    setLoading(true);

    try {
      // Register ke Supabase Auth
      const { data, error } = await supabase.auth.signUp({
        email,
        password,
      });

      if (error) {
        alert(error.message);
        setLoading(false);
        return;
      }

      if (!data.user) {
        alert("User gagal dibuat");
        setLoading(false);
        return;
      }

      const { error: profileError } = await supabase.from("profiles").insert({
        id: data.user.id,
        full_name: name,
        email,
        role: formData.role,
      });

      if (profileError) {
        alert(profileError.message);
        setLoading(false);
        return;
      }

      // Animasi berhasil
      setLoading(false);
      setSuccess(true);

      // Redirect ke Login
      setTimeout(() => {
        router.replace("/login");
      }, 800);
    } catch (err) {
      console.error(err);

      setLoading(false);

      alert("Terjadi kesalahan. Silakan coba lagi.");
    }
  };

  return (
    <div className="bg-[#F7FAFC] p-4 lg:p-6 md:w-fit w-full">
      <div className="w-full rounded-[24px] bg-white p-8 md:px-14 md:py-10 shadow-sm">
        {/* Logo */}
        <div className="flex items-center justify-center gap-4">
          <Image
            src="/Bakul.png"
            alt="Bakool"
            width={150}
            height={150}
            className="-ml-10"
            priority
          />

          <h1 className="text-[30px] -ml-10 font-bold text-[#0B0F1F]">
            Bakool
          </h1>
        </div>

        {/* Heading */}
        <div className="text-center">
          <h2 className="text-[34px] font-bold text-[#0B0F1F]">
            Daftar Akun Bakool
          </h2>

          <p className="mt-2 text-[16px] text-[#667085]">
            Pilih peran yang paling sesuai denganmu
          </p>
        </div>

        {/* ROLE >=768 px */}
        <div className="max-w-190 md:grid-cols-2 grid grid-cols-1 gap-6 my-5">
          {/* User */}
          <div
            onClick={() => handleRoleChange("user")}
            className={`relative h-82.5 cursor-pointer overflow-hidden rounded-xl border transition-all duration-200 ${formData.role === "user"
              ? "border-2 border-[#0C7C61] bg-[#F6FCFA]"
              : "border border-[#E5E7EB] bg-white"
              }`}
          >
            <div
              className={`absolute left-5 top-5 flex h-6 w-6 items-center justify-center rounded-full border ${formData.role === "user"
                ? "border-[#0C7C61] bg-[#0C7C61]"
                : "border-[#D0D5DD] bg-white"
                }`}
            >
              {formData.role === "user" && (
                <Check size={13} className="text-white" strokeWidth={3} />
              )}
            </div>

            <h3 className="pt-4 text-center text-[17px] font-semibold text-[#101828]">
              Pengguna
            </h3>

            <div className="h-60 flex items-center justify-center mt-3">
              <Image
                src="/register1.png"
                alt=""
                width={240}
                height={240}
                className="w-60 h-auto mt-6"
                priority
              />
            </div>
          </div>

          {/* Owner */}
          <div
            onClick={() => handleRoleChange("owner")}
            className={`relative cursor-pointer rounded-2xl border p-4 transition-all ${formData.role === "owner"
              ? "border-[#0C7C61] bg-[#F6FCFA]"
              : "border-[#E4E7EC] bg-white"
              }`}
          >
            <div
              className={`absolute left-4 top-4 flex h-5 w-5 items-center justify-center rounded-full border ${formData.role === "owner"
                ? "border-[#0C7C61] bg-[#0C7C61]"
                : "border-[#D0D5DD]"
                }`}
            >
              {formData.role === "owner" && (
                <Check size={13} className="text-white" strokeWidth={3} />
              )}
            </div>

            <h3 className="text-center text-[18px] font-semibold text-[#0B0F1F]">
              Pemilik UMKM
            </h3>

            <div className="h-60 flex items-center justify-center mt-3">
              <Image
                src="/register2.png"
                alt=""
                width={240}
                height={240}
                className="w-60 h-auto mt-6"
                priority
              />
            </div>
          </div>
        </div>

        {/* Divider */}
        {/* <div className="flex items-center gap-5 my-10">
          <div className="h-px flex-1 bg-[#EAECF0]" />

          <span className="text-[14px] text-[#667085]">atau</span>

          <div className="h-px flex-1 bg-[#EAECF0]" />
        </div> */}

        {/* Form */}
        <div className="max-w-190 gap-5 mt-5">
          <h3 className="text-[20px] font-semibold text-[#0B0F1F]">
            Buat Akun Baru
          </h3>

          <form onSubmit={handleSubmit} className="space-y-5">
            {/* Nama */}
            <div>
              <label className="mb-2 block text-[14px] font-semibold text-[#0B0F1F]">
                Nama Lengkap
              </label>

              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                placeholder="Masukkan nama lengkap"
                className="h-12 w-full rounded-lg border border-[#DDE3EA] px-4 text-[15px] outline-none transition focus:border-[#0C7C61]"
              />
            </div>

            {/* Email */}
            <div>
              <label className="mb-2 block text-[14px] font-semibold text-[#0B0F1F]">
                Email
              </label>

              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="Masukkan email kamu"
                className="h-12 w-full rounded-lg border border-[#DDE3EA] px-4 text-[15px] outline-none transition focus:border-[#0C7C61]"
              />
            </div>

            {/* Password */}
            <div>
              <label className="mb-2 block text-[14px] font-semibold text-[#0B0F1F]">
                Password
              </label>

              <input
                type="password"
                name="password"
                value={formData.password}
                onChange={handleChange}
                placeholder="Masukkan password kamu"
                className="h-12 w-full rounded-lg border border-[#DDE3EA] px-4 text-[15px] outline-none transition focus:border-[#0C7C61]"
              />
            </div>

            {/* Button */}
            <button
              type="submit"
              disabled={loading}
              className="flex h-14 w-full items-center justify-center gap-3 rounded-xl bg-[#158A62] text-[17px] font-semibold text-white transition hover:bg-[#127553] disabled:cursor-not-allowed disabled:opacity-80"
            >
              {loading ? (
                <>
                  <LoaderCircle size={20} className="animate-spin" />
                  Sedang mendaftar...
                </>
              ) : success ? (
                <>
                  <Check size={20} />
                  Berhasil
                </>
              ) : (
                "Daftar"
              )}
            </button>
          </form>

          {/* Login */}
          <p className="mt-7 text-center text-[14px] text-[#0B0F1F]">
            Sudah punya akun?{" "}
            <Link
              href="/login"
              className="font-semibold text-[#0C7C61] hover:underline"
            >
              Masuk sekarang
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
}
