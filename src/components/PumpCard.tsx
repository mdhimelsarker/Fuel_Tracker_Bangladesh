"use client";

import {
  PetrolPump,
  getFuelStatus,
  getStatusColor,
} from "@/lib/data";
import { useLanguage } from "./LanguageProvider";

function FuelBar({
  label,
  level,
  color,
}: {
  label: string;
  level: number;
  color: string;
}) {
  return (
    <div className="space-y-1">
      <div className="flex justify-between items-center text-xs">
        <span className="text-slate-400">{label}</span>
        <span style={{ color }} className="font-semibold font-mono">
          {level}%
        </span>
      </div>
      <div className="fuel-bar-bg">
        <div
          className="fuel-bar-fill"
          style={{
            width: `${level}%`,
            background: `linear-gradient(90deg, ${color}88, ${color})`,
          }}
        />
      </div>
    </div>
  );
}

function StatusBadge({ level }: { level: number }) {
  const { t } = useLanguage();
  const status = getFuelStatus(level);
  const color = getStatusColor(status);
  const label = t.status[status];

  return (
    <span
      className="status-badge"
      style={{
        background: `${color}18`,
        color,
        border: `1px solid ${color}33`,
      }}
    >
      <span className="live-dot" style={{ background: color }} />
      {label}
    </span>
  );
}

export default function PumpCard({ pump }: { pump: PetrolPump }) {
  const { t } = useLanguage();

  const overallLevel = Math.round(
    (pump.petrolLevel + pump.octaneLevel + pump.dieselLevel) / 3
  );

  const updatedAt = new Date(pump.lastUpdated);
  const timeAgo = getTimeAgo(updatedAt, t.time);

  return (
    <div className="glass-card p-5 flex flex-col gap-4" id={`pump-${pump.id}`}>
      {/* Header */}
      <div className="flex items-start justify-between gap-3">
        <div className="min-w-0 flex-1">
          <h3 className="text-base font-semibold text-white truncate">
            {pump.name}
          </h3>
          <p className="text-sm text-slate-400 mt-0.5 flex items-center gap-1.5">
            <svg
              width="14"
              height="14"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              className="shrink-0"
            >
              <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
              <circle cx="12" cy="10" r="3" />
            </svg>
            <span className="truncate">{pump.location}</span>
          </p>
        </div>
        <StatusBadge level={overallLevel} />
      </div>

      {/* Fuel Bars */}
      <div className="space-y-3">
        <FuelBar
          label={t.pump.petrol}
          level={pump.petrolLevel}
          color={getStatusColor(getFuelStatus(pump.petrolLevel))}
        />
        <FuelBar
          label={t.pump.octane}
          level={pump.octaneLevel}
          color={getStatusColor(getFuelStatus(pump.octaneLevel))}
        />
        <FuelBar
          label={t.pump.diesel}
          level={pump.dieselLevel}
          color={getStatusColor(getFuelStatus(pump.dieselLevel))}
        />
      </div>

      {/* Footer */}
      <div className="flex items-center justify-between pt-2 border-t border-white/5 text-xs text-slate-500">
        <div className="flex items-center gap-1.5">
          <span
            className="w-2 h-2 rounded-full"
            style={{
              background: pump.isOpen ? "#00e676" : "#ff1744",
            }}
          />
          <span>{pump.isOpen ? t.pump.openNow : t.pump.closed}</span>
        </div>
        <span>{t.pump.updated} {timeAgo}</span>
      </div>
    </div>
  );
}

function getTimeAgo(
  date: Date,
  timeStrings: { justNow: string; mAgo: string; hAgo: string; dAgo: string }
): string {
  const now = new Date();
  const diffMs = now.getTime() - date.getTime();
  const diffMins = Math.round(diffMs / 60000);

  if (diffMins < 1) return timeStrings.justNow;
  if (diffMins < 60) return `${diffMins}${timeStrings.mAgo}`;
  const diffHours = Math.round(diffMins / 60);
  if (diffHours < 24) return `${diffHours}${timeStrings.hAgo}`;
  return `${Math.round(diffHours / 24)}${timeStrings.dAgo}`;
}
