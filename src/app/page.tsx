"use client";

import { useState, useMemo } from "react";
import { petrolPumps, getStats, getDistricts } from "@/lib/data";
import PumpCard from "@/components/PumpCard";
import StatCard from "@/components/StatCard";
import LanguageSwitcher from "@/components/LanguageSwitcher";
import { useLanguage } from "@/components/LanguageProvider";

export default function Home() {
  const [search, setSearch] = useState("");
  const [selectedDistrict, setSelectedDistrict] = useState("All");
  const { t } = useLanguage();

  const districts = useMemo(() => getDistricts(petrolPumps), []);

  const filteredPumps = useMemo(() => {
    return petrolPumps.filter((pump) => {
      const matchesSearch =
        pump.name.toLowerCase().includes(search.toLowerCase()) ||
        pump.location.toLowerCase().includes(search.toLowerCase()) ||
        pump.district.toLowerCase().includes(search.toLowerCase());
      const matchesDistrict =
        selectedDistrict === "All" || pump.district === selectedDistrict;
      return matchesSearch && matchesDistrict;
    });
  }, [search, selectedDistrict]);

  const stats = getStats(petrolPumps);

  // Build the hero description with highlighted words
  const descParts = t.hero.description.split(/\{petrol\}|\{octane\}/);
  const heroDescription = (
    <>
      {descParts[0]}
      <span className="text-amber-400 font-medium">{t.hero.petrol}</span>
      {descParts[1]}
      <span className="text-amber-400 font-medium">{t.hero.octane}</span>
      {descParts[2]}
    </>
  );

  return (
    <div className="bg-animated min-h-screen">
      <div className="relative z-10">
        {/* Header */}
        <header className="border-b border-white/5">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-5">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-3">
                {/* Fuel icon */}
                <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-cyan-500/20 to-blue-500/20 flex items-center justify-center border border-cyan-500/20">
                  <svg
                    width="22"
                    height="22"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="#38bdf8"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M3 22V5a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v17" />
                    <path d="M15 22V10a2 2 0 0 1 2-2h1a2 2 0 0 1 2 2v2a2 2 0 0 0 2 2v0" />
                    <path d="M3 22h12" />
                    <rect x="6" y="7" width="6" height="5" rx="1" />
                  </svg>
                </div>
                <div>
                  <h1 className="text-lg sm:text-xl font-bold text-white tracking-tight">
                    {t.header.title}{" "}
                    <span className="text-cyan-400">{t.header.highlight}</span>
                  </h1>
                  <p className="text-xs text-slate-500 hidden sm:block">
                    {t.header.subtitle}
                  </p>
                </div>
              </div>
              <div className="flex items-center gap-2.5">
                <LanguageSwitcher />
                <div className="flex items-center gap-2 px-3 py-1.5 rounded-full bg-red-500/10 border border-red-500/20">
                  <span className="live-dot" style={{ background: "#ff1744" }} />
                  <span className="text-xs font-semibold text-red-400 uppercase tracking-wider">
                    {t.header.live}
                  </span>
                </div>
              </div>
            </div>
          </div>
        </header>

        {/* Hero Section */}
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-8 pb-4">
          <div className="glass-card p-6 sm:p-8 relative overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/5 to-transparent pointer-events-none" />
            <div className="relative">
              <div className="flex items-center gap-2 mb-3">
                <span className="px-2.5 py-1 rounded-md bg-amber-500/10 text-amber-400 text-xs font-semibold border border-amber-500/20">
                  {t.hero.badge}
                </span>
              </div>
              <h2 className="text-xl sm:text-2xl font-bold text-white mb-2">
                {t.hero.title}
              </h2>
              <p className="text-sm text-slate-400 max-w-2xl leading-relaxed">
                {heroDescription}
              </p>
            </div>
          </div>
        </section>

        {/* Stats Grid */}
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4">
            <div className="animate-fade-in-up">
              <StatCard
                title={t.stats.totalStations}
                value={stats.totalPumps}
                subtitle={t.stats.currentlyOpen.replace("{count}", String(stats.openPumps))}
                glowClass="stat-glow-cyan"
                accentColor="#38bdf8"
                icon={
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#38bdf8" strokeWidth="2">
                    <path d="M3 22V5a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v17" />
                    <path d="M15 22V10a2 2 0 0 1 2-2h1a2 2 0 0 1 2 2v2a2 2 0 0 0 2 2v0" />
                    <path d="M3 22h12" />
                  </svg>
                }
              />
            </div>
            <div className="animate-fade-in-up delay-100">
              <StatCard
                title={t.stats.avgPetrol}
                value={`${stats.avgPetrol}%`}
                subtitle={t.stats.acrossAll}
                glowClass="stat-glow-green"
                accentColor="#00e676"
                icon={
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#00e676" strokeWidth="2">
                    <path d="M12 2v20M2 12h20" />
                  </svg>
                }
              />
            </div>
            <div className="animate-fade-in-up delay-200">
              <StatCard
                title={t.stats.avgOctane}
                value={`${stats.avgOctane}%`}
                subtitle={t.stats.acrossAll}
                glowClass="stat-glow-amber"
                accentColor="#ffab00"
                icon={
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#ffab00" strokeWidth="2">
                    <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
                  </svg>
                }
              />
            </div>
            <div className="animate-fade-in-up delay-300">
              <StatCard
                title={t.stats.critical}
                value={stats.criticalPumps}
                subtitle={t.stats.atRisk}
                glowClass="stat-glow-red"
                accentColor="#ff1744"
                icon={
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#ff1744" strokeWidth="2">
                    <path d="M10.29 3.86L1.82 18a2 2 0 0 0 1.71 3h16.94a2 2 0 0 0 1.71-3L13.71 3.86a2 2 0 0 0-3.42 0z" />
                    <line x1="12" y1="9" x2="12" y2="13" />
                    <line x1="12" y1="17" x2="12.01" y2="17" />
                  </svg>
                }
              />
            </div>
          </div>
        </section>

        {/* Search & Filters */}
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex flex-col sm:flex-row gap-3 sm:items-center">
            {/* Search */}
            <div className="relative flex-1 max-w-md">
              <svg
                className="absolute left-3.5 top-1/2 -translate-y-1/2 text-slate-500"
                width="18"
                height="18"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
              >
                <circle cx="11" cy="11" r="8" />
                <line x1="21" y1="21" x2="16.65" y2="16.65" />
              </svg>
              <input
                id="search-input"
                type="text"
                className="search-input"
                placeholder={t.search.placeholder}
                value={search}
                onChange={(e) => setSearch(e.target.value)}
              />
            </div>

            {/* District filters */}
            <div className="flex items-center gap-2 overflow-x-auto pb-1 scrollbar-none">
              <button
                id="filter-all"
                className={`filter-chip ${selectedDistrict === "All" ? "active" : ""}`}
                onClick={() => setSelectedDistrict("All")}
              >
                {t.search.all}
              </button>
              {districts.map((district) => (
                <button
                  key={district}
                  id={`filter-${district.toLowerCase()}`}
                  className={`filter-chip ${selectedDistrict === district ? "active" : ""}`}
                  onClick={() => setSelectedDistrict(district)}
                >
                  {district}
                </button>
              ))}
            </div>
          </div>
        </section>

        {/* Pump Grid */}
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 pb-12">
          {filteredPumps.length === 0 ? (
            <div className="glass-card p-12 text-center">
              <p className="text-slate-400 text-lg">
                No fuel stations found matching your search.
              </p>
              <p className="text-slate-600 text-sm mt-2">
                Try adjusting your search or filter criteria.
              </p>
            </div>
          ) : (
            <>
              <div className="flex items-center justify-between mb-4">
                <p className="text-sm text-slate-400">
                  {t.search.showing}{" "}
                  <span className="text-cyan-400 font-semibold">
                    {filteredPumps.length}
                  </span>{" "}
                  {filteredPumps.length !== 1 ? t.search.stations : t.search.station}
                </p>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                {filteredPumps.map((pump, index) => (
                  <div
                    key={pump.id}
                    className="animate-fade-in-up"
                    style={{ animationDelay: `${index * 0.08}s` }}
                  >
                    <PumpCard pump={pump} />
                  </div>
                ))}
              </div>
            </>
          )}
        </section>

        {/* Footer */}
        <footer className="border-t border-white/5 py-6">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col sm:flex-row items-center justify-between gap-3">
            <p className="text-xs text-slate-600">
              {t.footer.copyright}
            </p>
            <p className="text-xs text-slate-600 flex items-center gap-1.5">
              <span className="live-dot" style={{ background: "#38bdf8" }} />
              {t.footer.refreshNote}
            </p>
          </div>
        </footer>
      </div>
    </div>
  );
}
