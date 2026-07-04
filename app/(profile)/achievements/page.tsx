import { LuTrophy, LuMedal, LuLock } from "react-icons/lu";
import { CheckCircle2 } from "lucide-react";
import Image from "next/image";
export default function AchievementsPage() {
  const earnedBadges = [
    {
      image: "/badges/local.png",
      title: "Local Explorer",
      desc: "Kunjungi 5 UMKM berbeda",
      xp: "+100 XP",
      date: "12 Mei 2026",
    },
    {
      image: "/badges/food.png",
      title: "Food Hunter",
      desc: "Favoritkan 10 UMKM Kuliner",
      xp: "+150 XP",
      date: "12 Mei 2026",
    },
    {
      image: "/badges/rev.png",
      title: "Reviewer",
      desc: "Berikan 5 ulasan untuk UMKM",
      xp: "+120 XP",
      date: "12 Mei 2026",
    },
    {
      image: "/badges/love.png",
      title: "Community Supporter",
      desc: "Dukung 20 UMKM dengan favorit",
      xp: "+200 XP",
      date: "12 Mei 2026",
    },
    {
      image: "/badges/photo.png",
      title: "Photo Reviewer",
      desc: "Kunjungi 5 UMKM berbeda",
      xp: "+80 XP",
      date: "12 Mei 2026",
    },
  ];

  const lockedBadges = [
    {
      image: "/badges/shield.png",
      title: "Top Explorer",
      desc: "Kunjungi 50 UMKM berbeda",
      progress: "25/50",
      percent: 50,
      xp: "+100 XP",
    },
    {
      image: "/badges/clock.png",
      title: "Early Bird",
      desc: "Kunjungi UMKM antara jam 06.00 – 09.00 sebanyak 10 kali",
      progress: "4/10",
      percent: 40,
      xp: "+150 XP",
    },
    {
      image: "/badges/like.png",
      title: "Helpful Reviewer",
      desc: "Berikan 10 ulasan yang bermanfaat",
      progress: "6/10",
      percent: 60,
      xp: "+120 XP",
    },
    {
      image: "/badges/calendar.png",
      title: "Event Attendee",
      desc: "Ikuti 3 Event atau promo dari UMKM",
      progress: "1/3",
      percent: 33,
      xp: "+200 XP",
    },
    {
      image: "/badges/trophy.png",
      title: "Champion",
      desc: "Raih semua badge sebagai tanda champion",
      progress: "7/15",
      percent: 47,
      xp: "+80 XP",
    },
  ];

  return (
    <div className="min-h-screen bg-slate-50 p-12 text-base dark:bg-slate-950 transition-colors">
      {/* Header */}
      <div className="mb-10">
        <h1 className="text-3xl font-bold text-[#0B0F1F] dark:text-white">
          Achievement & Badge
        </h1>

        <p className="mt-1 text-lg text-slate-500 dark:text-slate-400">
          Raih badge dengan berkontribusi dan dukung UMKM lokal bersama Bakool!
        </p>
      </div>

      {/* Top Banner */}
      <div className="mb-12 overflow-hidden rounded-2xl border border-[#EAECF0] bg-[#F9FAFB] dark:border-slate-800 dark:bg-slate-900 transition-colors">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4">
          {[
            {
              icon: "/badges/shieldbadge.png",
              value: "7",
              label: "Badge Diraih",
            },
            {
              icon: "/badges/xp.png",
              value: "1.250",
              label: "Total XP",
            },
            {
              icon: "/badges/leve.png",
              value: "3",
              label: "Level Saat ini",
            },
            {
              icon: "/badges/badge.png",
              value: "85%",
              label: "Menuju level 4",
            },
          ].map((item, index) => (
            <div
              key={index}
              className="flex items-center gap-5 border-r border-[#EAECF0] dark:border-slate-800 px-8 py-9 last:border-r-0"
            >
              <Image
                src={item.icon}
                alt={item.label}
                width={65}
                height={65}
                className="shrink-0"
              />

              <div>
                <h3 className="mt-2 text-[30px] font-bold leading-none text-[#101828] dark:text-white">
                  {item.value}
                </h3>

                <p className="mt-2 text-[16px] font-medium text-[#101828] dark:text-slate-300">
                  {item.label}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Badge Diraih */}
      <div className="mb-12">
        <div className="mb-6 flex items-center justify-between">
          <h3 className="text-[28px] font-bold text-[#0B0F1F] dark:text-white">
            Badge yang Telah Diraih
          </h3>

          <button className="text-[15px] font-semibold text-[#158A62] dark:text-emerald-400 hover:underline">
            Lihat Semua
          </button>
        </div>

        <div className="grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-5">
          {earnedBadges.map((badge) => (
            <div
              key={badge.title}
              className="flex min-h-[285px] flex-col items-center rounded-2xl border border-[#EAECF0] dark:border-slate-800 bg-[#F9FAFB] dark:bg-slate-900 px-6 py-8 text-center transition-all"
            >
              <Image
                src={badge.image}
                alt={badge.title}
                width={1000}
                height={1000}
                className="object-contain"
              />

              <h4 className="mt-6 text-[18px] font-semibold leading-8 text-[#0B0F1F] dark:text-white">
                {badge.title}
              </h4>

              <p className="mt-2 text-[15px] leading-7 text-[#667085] dark:text-slate-400">
                {badge.desc}
              </p>

              <div className="mt-auto pt-8">
                <p className="text-[12px] text-[#98A2B3] dark:text-slate-500">
                  Diraih {badge.date}
                </p>

                <p className="mt-2 text-[24px] font-bold text-[#158A62] dark:text-emerald-400">
                  {badge.xp}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Badge Bisa Diraih */}
      <div>
        <div className="mb-6 flex items-center justify-between">
          <h3 className="text-[28px] font-bold text-[#0B0F1F] dark:text-white">
            Badge yang Bisa Diraih
          </h3>
        </div>

        <div className="grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-5">
          {lockedBadges.map((badge) => (
            <div
              key={badge.title}
              className="flex min-h-[310px] flex-col rounded-2xl border border-[#EAECF0] dark:border-slate-800 bg-[#F9FAFB] dark:bg-slate-900 px-6 py-8 text-center transition-all"
            >
              <Image
                src={badge.image}
                alt={badge.title}
                width={1000}
                height={1000}
                className="mx-auto object-contain"
              />

              <h4 className="mt-6 text-[18px] font-semibold text-[#0B0F1F] dark:text-white">
                {badge.title}
              </h4>

              <p className="mt-2 text-[15px] leading-7 text-[#667085] dark:text-slate-400">
                {badge.desc}
              </p>

              <div className="mt-auto pt-8">
                <div className="mb-2 flex justify-end">
                  <span className="text-[12px] font-medium text-[#98A2B3] dark:text-slate-500">
                    {badge.progress}
                  </span>
                </div>

                <div className="h-[8px] overflow-hidden rounded-full bg-[#E5E7EB] dark:bg-slate-700">
                  <div
                    className="h-full rounded-full bg-[#158A62] dark:bg-emerald-400"
                    style={{
                      width: `${badge.percent}%`,
                    }}
                  />
                </div>

                <p className="mt-4 text-[24px] font-bold text-[#158A62] dark:text-emerald-400">
                  {badge.xp}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
