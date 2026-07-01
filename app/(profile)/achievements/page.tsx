import { LuTrophy, LuMedal, LuLock } from "react-icons/lu";
import { CheckCircle2 } from "lucide-react";

export default function AchievementsPage() {
  const earnedBadges = [
    { title: "Local Explorer", desc: "Kunjungi 5 UMKM berbeda", xp: "+100 XP" },
    { title: "Food Hunter", desc: "Favoritkan 10 UMKM Kuliner", xp: "+150 XP" },
    { title: "Reviewer", desc: "Berikan 5 ulasan untuk UMKM", xp: "+120 XP" },
    { title: "Community Supporter", desc: "Dukung 20 UMKM dengan favorit", xp: "+200 XP" },
  ];

  const lockedBadges = [
    { title: "Top Explorer", desc: "Kunjungi 50 UMKM berbeda", progress: "25/50", pct: "w-1/2" },
    { title: "Early Bid", desc: "Kunjungi UMKM antara jam 06.00 - 09.00 sebanyak 10 kali", progress: "4/10", pct: "w-[40%]" },
    { title: "Helpful Reviewer", desc: "Berikan 10 ulasan yang bermanfaat", progress: "6/10", pct: "w-[60%]" },
    { title: "Event Attendee", desc: "Ikuti 3 Event atau promo dari UMKM", progress: "1/3", pct: "w-[33%]" },
  ];

  return (
    <div className="p-12 bg-slate-50 min-h-screen text-base">
      {/* Header */}
      <div className="mb-10">
        <h1 className="text-3xl font-bold text-slate-900">Achievement & Badge</h1>
        <p className="text-slate-500 mt-1 text-lg">Raih badge dengan berkontribusi dan dukung UMKM lokal bersama Bakool!</p>
      </div>

      {/* Top Banner Overview Summary */}
      <div className="bg-white border border-slate-200 rounded-3xl p-6 shadow-xs grid grid-cols-2 lg:grid-cols-4 gap-6 mb-12 text-center">
        <div className="p-4 border-r border-slate-100 last:border-0">
          <span className="text-slate-400 font-bold block">7</span>
          <h4 className="text-xl font-bold text-slate-900 mt-1">Badge Diraih</h4>
        </div>
        <div className="p-4 border-r border-slate-100 last:border-0">
          <span className="text-amber-500 font-bold block">1.250</span>
          <h4 className="text-xl font-bold text-slate-900 mt-1">Total XP</h4>
        </div>
        <div className="p-4 border-r border-slate-100 last:border-0">
          <span className="text-blue-600 font-bold block">3</span>
          <h4 className="text-xl font-bold text-slate-900 mt-1">Level Saat Ini</h4>
        </div>
        <div className="p-4 last:border-0">
          <span className="text-emerald-600 font-bold block">85%</span>
          <h4 className="text-xl font-bold text-slate-900 mt-1">Menuju level 4</h4>
        </div>
      </div>

      {/* Section: Badges Earned */}
      <div className="mb-12">
        <div className="flex justify-between items-center mb-6">
          <h3 className="text-2xl font-bold text-slate-900">Badge yang Telah Diraih</h3>
          <button className="text-[#15803d] font-bold">Lihat Semua</button>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {earnedBadges.map((badge, idx) => (
            <div key={idx} className="bg-white border border-slate-200 rounded-2xl p-6 shadow-xs text-center flex flex-col items-center justify-between min-h-[220px]">
              <div className="w-20 h-20 bg-emerald-50 rounded-full flex items-center justify-center text-emerald-600 font-bold text-3xl mb-4 shadow-inner">
                🌟
              </div>
              <div>
                <h4 className="text-lg font-bold text-slate-900">{badge.title}</h4>
                <p className="text-slate-400 font-medium mt-1 leading-normal">{badge.desc}</p>
              </div>
              <span className="mt-4 bg-emerald-50 text-emerald-700 font-bold px-3 py-1 rounded-md">{badge.xp}</span>
            </div>
          ))}
        </div>
      </div>

      {/* Section: Badges Lock Progress */}
      <div>
        <h3 className="text-2xl font-bold text-slate-900 mb-6">Badge yang Bisa Diraih</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {lockedBadges.map((badge, idx) => (
            <div key={idx} className="bg-white border border-slate-200 rounded-2xl p-6 shadow-xs flex flex-col justify-between min-h-[240px] relative group">
              <div className="absolute top-4 right-4 text-slate-300">
                <LuLock size={20} />
              </div>

              <div className="flex flex-col items-center text-center">
                <div className="w-16 h-16 bg-slate-50 rounded-full flex items-center justify-center text-slate-300 font-bold text-2xl mb-4">
                  🔒
                </div>
                <h4 className="text-lg font-bold text-slate-900">{badge.title}</h4>
                <p className="text-slate-400 font-medium mt-1 leading-normal">{badge.desc}</p>
              </div>

              {/* Progress Bar Component */}
              <div className="mt-6 w-full">
                <div className="flex justify-between items-center text-slate-400 font-bold mb-1">
                  <span>Progres</span>
                  <span>{badge.progress}</span>
                </div>
                <div className="w-full bg-slate-100 rounded-full h-2 overflow-hidden">
                  <div className={`bg-slate-300 h-full ${badge.pct}`} />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}