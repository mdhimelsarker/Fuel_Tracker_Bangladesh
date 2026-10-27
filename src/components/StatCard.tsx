interface StatCardProps {
  title: string;
  value: string | number;
  subtitle?: string;
  icon: React.ReactNode;
  glowClass: string;
  accentColor: string;
}

export default function StatCard({
  title,
  value,
  subtitle,
  icon,
  glowClass,
  accentColor,
}: StatCardProps) {
  return (
    <div className={`glass-card p-5 ${glowClass}`}>
      <div className="flex items-start justify-between">
        <div>
          <p className="text-xs text-slate-400 uppercase tracking-wider font-medium">
            {title}
          </p>
          <p
            className="text-3xl font-bold mt-1 font-mono"
            style={{ color: accentColor }}
          >
            {value}
          </p>
          {subtitle && (
            <p className="text-xs text-slate-500 mt-1">{subtitle}</p>
          )}
        </div>
        <div
          className="p-2.5 rounded-xl"
          style={{ background: `${accentColor}15` }}
        >
          {icon}
        </div>
      </div>
    </div>
  );
}
