import { Github, ExternalLink } from 'lucide-react';
import { GlassCard } from '../ui/GlassCard';
import type { ProjectCardProps } from '../../types';

export const ProjectCard = ({
  title,
  description,
  metrics,
  tech,
  links
}: ProjectCardProps) => (
  <GlassCard className="p-6 group">
    <div className="flex items-start justify-between mb-4">
      <h3 className="text-xl font-semibold" style={{ color: '#ffffff' }}>
        {title}
      </h3>
      <div className="flex gap-2">
        {links?.github && (
          <a href={links.github} target="_blank" rel="noopener noreferrer" style={{ color: '#71717a' }} className="hover:opacity-80 transition-opacity">
            <Github className="w-5 h-5" />
          </a>
        )}
        {links?.live && (
          <a href={links.live} target="_blank" rel="noopener noreferrer" style={{ color: '#71717a' }} className="hover:opacity-80 transition-opacity">
            <ExternalLink className="w-5 h-5" />
          </a>
        )}
      </div>
    </div>

    <p className="text-sm mb-4" style={{ color: '#a1a1aa' }}>{description}</p>

    {metrics && (
      <div className="grid grid-cols-3 gap-3 mb-4">
        {metrics.map((metric, i) => (
          <div
            key={i}
            className="text-center p-3 rounded-xl"
            style={{ backgroundColor: 'rgba(255,255,255,0.03)' }}
          >
            <p
              className="text-xl font-bold"
              style={{
                background: 'linear-gradient(90deg, #34d399 0%, #22d3ee 100%)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                backgroundClip: 'text'
              }}
            >
              {metric.value}
            </p>
            <p className="text-xs" style={{ color: '#71717a' }}>{metric.label}</p>
          </div>
        ))}
      </div>
    )}

    <div className="flex flex-wrap gap-2">
      {tech.map((t, i) => (
        <span
          key={i}
          className="px-2 py-1 text-xs font-mono rounded-md"
          style={{
            backgroundColor: 'rgba(16,185,129,0.1)',
            color: '#34d399',
            border: '1px solid rgba(16,185,129,0.2)'
          }}
        >
          {t}
        </span>
      ))}
    </div>
  </GlassCard>
);
