"use client";

import { PetrolPump } from "@/lib/data";

export default function PumpCard({ pump }: { pump: PetrolPump }) {
  return (
    <div className="glass-card p-5 flex flex-col gap-4" id={`pump-${pump.id}`}>
      <div className="flex items-start justify-between gap-3">
        <div className="min-w-0 flex-1">
          <h3 className="text-base font-semibold text-white">
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
            <span>{pump.location}</span>
          </p>
        </div>
        <span className="status-badge status-badge-muted">
          {pump.isDemo ? "Demo record" : pump.verificationStatus}
        </span>
      </div>

      <div className="space-y-2 text-sm text-slate-400">
        <p>{pump.address}</p>
        <p>
          {pump.upazila ? `Upazila: ${pump.upazila}` : ""}
          {pump.thana ? `${pump.upazila ? " · " : ""}Thana: ${pump.thana}` : ""}
        </p>
        <p>
          Fuel types:{" "}
          {pump.fuelTypes.length > 0 ? pump.fuelTypes.join(", ") : "Not provided by source"}
        </p>
      </div>

      <div className="flex items-center justify-between pt-2 border-t border-white/5 text-xs text-slate-500">
        <span>{pump.contact ?? "Contact not provided"}</span>
        <a
          href={pump.source}
          target="_blank"
          rel="noreferrer"
          className="text-cyan-400 hover:text-cyan-300"
        >
          Source
        </a>
      </div>
    </div>
  );
}
