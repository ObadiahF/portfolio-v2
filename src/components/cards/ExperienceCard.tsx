import { GlassCard } from '../ui/GlassCard';
import type { ExperienceCardProps } from '../../types';

export const ExperienceCard = ({
  company,
  role,
  date,
  location,
  tech,
  highlights,
  logo
}: ExperienceCardProps) => (
  <GlassCard className="p-6">
    <div className="flex items-start justify-between mb-4">
      <div className="flex items-center gap-3">
        <img
          src={logo}
          alt={`${company} logo`}
          className="w-10 h-10 rounded-xl object-cover"
        />
        <div>
          <h3 className="font-semibold" style={{ color: '#ffffff' }}>{company}</h3>
          <p className="text-sm" style={{ color: '#a1a1aa' }}>{role}</p>
        </div>
      </div>
      <div className="text-right">
        <p className="text-sm" style={{ color: '#71717a' }}>{date}</p>
        <p className="text-xs" style={{ color: '#52525b' }}>{location}</p>
      </div>
    </div>
    <div className="space-y-2 mb-4">
      {highlights.map((highlight, i) => (
        <p key={i} className="text-sm flex items-center gap-2" style={{ color: '#a1a1aa' }}>
          <span style={{ color: '#10b981' }}>•</span>
          <span>{highlight}</span>
        </p>
      ))}
    </div>
    <div className="flex flex-wrap gap-2">
      {tech.map((t, i) => (
        <span
          key={i}
          className="px-2 py-1 text-xs font-mono rounded-md"
          style={{
            backgroundColor: 'rgba(255,255,255,0.05)',
            color: '#a1a1aa',
            border: '1px solid rgba(255,255,255,0.05)'
          }}
        >
          {t}
        </span>
      ))}
    </div>
  </GlassCard>
);
