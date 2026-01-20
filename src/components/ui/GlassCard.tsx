import type { GlassCardProps } from '../../types';

export const GlassCard = ({
  children,
  className = '',
}: GlassCardProps) => (
  <div
    className={`relative overflow-hidden rounded-2xl transition-all duration-300 ${className}`}
    style={{
      background: 'linear-gradient(135deg, rgba(255,255,255,0.08) 0%, rgba(255,255,255,0.03) 100%)',
      border: '1px solid rgba(255,255,255,0.1)',
      backdropFilter: 'blur(8px)'
    }}
  >
    {children}
  </div>
);
