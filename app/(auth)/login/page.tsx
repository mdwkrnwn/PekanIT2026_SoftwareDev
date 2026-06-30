"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { dummyUsers } from "@/lib/dummyUser";
import Link from "next/link";
import Image from "next/image";
import {
  Breadcrumb,
  BreadcrumbList,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbSeparator,
  BreadcrumbPage,
} from "@/components/ui/breadcrumb";
import { FaChevronLeft } from "react-icons/fa";

export default function LoginPage() {
  const router = useRouter();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();

    const user = dummyUsers.find(
      (u) => u.email === email && u.password === password,
    );

    if (!user) {
      alert("Email atau password salah");
      return;
    }

    localStorage.setItem("user", JSON.stringify(user));

    if (user.role === "owner") {
      router.push("/admin/dashboard");
    } else {
      router.push("/");
    }
  };
  return (
    <div className="min-h-screen bg-[#F8FAFC] p-4 lg:p-6">
      <div className="mx-auto grid w-[1200px] grid-cols-[42%_58%] overflow-hidden rounded-[20px] bg-white shadow-sm">
        {/* LEFT */}
        <div className="hidden w-full bg-[#158A62] lg:flex flex-col justify-between p-10 relative overflow-hidden">
          <div>
            <Image
              src="/bakol.png"
              alt="Bakool"
              width={200}
              height={200}
              priority
              className="mt-10 -ml-2"
            />

            <h1 className="mt- text-4xl font-bold leading-tight text-white">
              Selamat Datang
              <br />
              Kembali
            </h1>

            <p className="mt-6 max-w-[280px] text-lg leading-8 text-white/90">
              Kelola usahamu lebih mudah dengan data dan AI
            </p>
          </div>

          <div className="relative flex justify-center">
            <Image
              src="/loginilustrasi.png"
              alt="Login Illustration"
              width={550}
              height={550}
              className="h-auto w-full mb-20 max-w-[450px]"
              priority
            />
          </div>
        </div>

        {/* RIGHT */}
        <div className="flex flex-1 items-center  bg-white px-8 py-12 lg:px-14">
          <div className="w-full max-w-[680px]">
            {/* Logo */}
            <Breadcrumb className="mb-45">
              <BreadcrumbList>
                <BreadcrumbItem>
                  <BreadcrumbLink asChild>
                    <Link href="/" className="text-xl">
                      Beranda
                    </Link>
                  </BreadcrumbLink>
                </BreadcrumbItem>

                <BreadcrumbSeparator>
                  <FaChevronLeft size={18} />
                </BreadcrumbSeparator>

                <BreadcrumbPage className=" text-xl font-semibold text-[#0B0F1F]">
                  Masuk
                </BreadcrumbPage>
              </BreadcrumbList>
            </Breadcrumb>
            <div className="-mt-10">
              <div className="flex items-center">
                <Image
                  src="/Bakul.png"
                  alt="Bakool"
                  width={100}
                  height={100}
                  className="h-auto w-[100px] -ml-8"
                  priority
                />

                <h2 className="text-[30px] font-semibold -ml-3 text-[#0B0F1F]">
                  Bakool
                </h2>
              </div>

              {/* Heading */}
              <div className="mt-2">
                <h2 className="text-[40px] font-bold leading-tight text-[#0B0F1F]">
                  Masuk ke akunmu
                </h2>

                <p className="mt-2 text-[17px] text-[#667085]">
                  Yuk, masuk untuk lanjut kelola usahamu.
                </p>
              </div>

              {/* Form */}
              <form onSubmit={handleLogin} className="mt-5 space-y-6">
                {/* Email */}
                <div>
                  <label className="mb-2 block text-[15px] font-semibold text-[#0B0F1F]">
                    Email
                  </label>

                  <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="Masukkan email kamu"
                    className="h-14 w-full rounded-xl border border-[#E5E7EB] px-4 text-[15px] outline-none transition focus:border-[#158A62]"
                  />
                </div>

                {/* Password */}
                <div>
                  <label className="mb-2 block text-[15px] font-semibold text-[#0B0F1F]">
                    Password
                  </label>

                  <input
                    type="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    placeholder="Masukkan password kamu"
                    className="h-14 w-full rounded-xl border border-[#E5E7EB] px-4 text-[15px] outline-none transition focus:border-[#158A62]"
                  />
                </div>

                {/* Remember */}
                <div className="flex items-center justify-between">
                  <label className="flex cursor-pointer items-center gap-3 text-[15px] text-[#98A2B3]">
                    <input
                      type="checkbox"
                      className="h-5 w-5 rounded border-[#D0D5DD] accent-[#158A62]"
                    />
                    Ingat Saya
                  </label>

                  <Link
                    href=""
                    className="text-[15px] font-medium text-[#158A62] hover:underline"
                  >
                    Lupa Password?
                  </Link>
                </div>

                {/* Button */}
                <button className="h-14 w-full rounded-xl bg-[#158A62] text-[17px] font-semibold text-white transition hover:bg-[#127553]">
                  Masuk
                </button>
              </form>

              {/* Divider */}
              <div className="my-8 flex items-center gap-4">
                <div className="h-px flex-1 bg-[#EAECF0]" />

                <span className="text-[15px] text-[#98A2B3]">atau</span>

                <div className="h-px flex-1 bg-[#EAECF0]" />
              </div>

              {/* Register */}
              <p className="text-center text-[15px] text-[#101828]">
                Belum punya akun?{" "}
                <Link href="/register" className="font-semibold text-[#158A62]">
                  Daftar sekarang
                </Link>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
