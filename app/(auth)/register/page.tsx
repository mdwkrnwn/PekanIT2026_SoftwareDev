"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { Check } from "lucide-react";
import { useRouter } from "next/navigation";

export default function RegisterPage() {
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

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const users = JSON.parse(localStorage.getItem("users") || "[]");

    const emailExists = users.some(
      (user: typeof formData) => user.email === formData.email,
    );

    if (emailExists) {
      alert("Email sudah terdaftar");
      return;
    }

    users.push(formData);

    localStorage.setItem("users", JSON.stringify(users));
    router.push("/login");
  };

  return (
    <div className="min-h-screen bg-[#F7FAFC] py-8">
      <div className="mx-auto w-full max-w-500 rounded-[24px] bg-white px-14 py-10 shadow-sm">
        <div className="-mt-10 w-full max-w-275 px-16 py-12">
          {/* Logo */}
          <div className="flex justify-center">
            <div className="flex items-center gap-3">
              <Image
                src="/Bakul.png"
                alt="Bakool"
                width={150}
                className="-ml-10"
                height={150}
                priority
              />

              <h1 className="text-[30px] -ml-10 font-bold text-[#0B0F1F]">
                Bakool
              </h1>
            </div>
          </div>

          {/* Heading */}
          <div className=" text-center">
            <h2 className="text-[34px] font-bold text-[#0B0F1F]">
              Daftar Akun Bakool
            </h2>

            <p className="mt-2 text-[16px] text-[#667085]">
              Pilih peran yang paling sesuai denganmu
            </p>
          </div>

          {/* ROLE */}
          <div className="mx-auto mt-10 grid max-w-[760px] grid-cols-2 gap-6">
            {/* User */}
            <div
              onClick={() => handleRoleChange("user")}
              className={`relative h-[330px] cursor-pointer overflow-hidden rounded-xl border transition-all duration-200 ${
                formData.role === "user"
                  ? "border-2 border-[#0C7C61] bg-[#F6FCFA]"
                  : "border border-[#E5E7EB] bg-[#F6FCFA]"
              }`}
            >
              <div
                className={`absolute left-5 top-5 flex h-6 w-6 items-center justify-center rounded-full border ${
                  formData.role === "user"
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

              <div className="mt-3 flex h-60 items-center justify-center">
                <Image
                  src="/register1.png"
                  alt=""
                  width={240}
                  height={240}
                  className="mt-6 h-auto w-60"
                  priority
                />
              </div>
            </div>

            {/* Owner */}
            <div
              onClick={() => handleRoleChange("owner")}
              className={`relative cursor-pointer rounded-2xl border p-4 transition-all ${
                formData.role === "owner"
                  ? "border-[#0C7C61]"
                  : "border-[#E4E7EC]"
              }`}
            >
              <div
                className={`absolute left-4 top-4 flex h-5 w-5 items-center justify-center rounded-full border ${
                  formData.role === "owner"
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

              <div className="mt-3 flex h-60 items-center justify-center">
                <Image
                  src="/register2.png"
                  alt=""
                  width={240}
                  height={240}
                  className="mt-6 h-auto w-60"
                  priority
                />
              </div>
            </div>
          </div>

          {/* Divider */}
          <div className="my-10 flex items-center gap-5">
            <div className="h-px flex-1 bg-[#EAECF0]" />

            <span className="text-[14px] text-[#667085]">atau</span>

            <div className="h-px flex-1 bg-[#EAECF0]" />
          </div>

          {/* Form */}
          <div className="mx-auto mt-2 max-w-190">
            <h3 className="mb-6 text-[20px] font-semibold text-[#0B0F1F]">
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
                className="mt-3 h-12 w-full rounded-lg bg-[#158A62] text-[16px] font-semibold text-white transition hover:bg-[#09624D]"
              >
                Daftar
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
    </div>
  );
}
