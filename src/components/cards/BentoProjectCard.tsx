import { Github, ExternalLink } from 'lucide-react';
import type { ProjectCardProps } from '../../types';

export const BentoProjectCard = ({
  title,
  description,
  metrics,
  tech,
  links,
  image,
  images,
  featured = false
}: ProjectCardProps) => {
  const hasMultipleImages = images && images.length > 0;
  const hasSingleImage = image && !hasMultipleImages;

  return (
    <div
      className={`group relative overflow-hidden rounded-2xl transition-all duration-300 ${
        featured ? 'md:col-span-2 md:row-span-1' : ''
      }`}
      style={{
        background: 'linear-gradient(135deg, rgba(255,255,255,0.08) 0%, rgba(255,255,255,0.03) 100%)',
        border: '1px solid rgba(255,255,255,0.1)',
        backdropFilter: 'blur(8px)'
      }}
    >
      {/* Multiple Images - side by side for mobile app screenshots */}
      {hasMultipleImages && (
        <div className={`relative overflow-hidden ${featured ? 'h-80' : 'h-48'}`}>
          <div className="flex justify-center items-end gap-4 h-full p-4 pb-0">
            {images.map((img, i) => (
              <img
                key={i}
                src={img}
                alt={`${title} screenshot ${i + 1}`}
                className="h-full w-auto object-contain rounded-t-xl shadow-2xl transition-transform duration-500 group-hover:scale-105"
                style={{
                  maxWidth: `${90 / images.length}%`
                }}
              />
            ))}
          </div>
          <div
            className="absolute inset-0 pointer-events-none"
            style={{
              background: 'linear-gradient(to top, rgba(9,9,11,0.95) 0%, rgba(9,9,11,0.3) 30%, transparent 60%)'
            }}
          />
        </div>
      )}

      {/* Single Image */}
      {hasSingleImage && (
        <div className={`relative overflow-hidden ${featured ? 'h-64' : 'h-48'}`}>
          <img
            src={image}
            alt={`${title} screenshot`}
            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
          />
          <div
            className="absolute inset-0"
            style={{
              background: 'linear-gradient(to top, rgba(9,9,11,0.95) 0%, rgba(9,9,11,0.3) 50%, transparent 100%)'
            }}
          />
        </div>
      )}

      {/* Content Section */}
      <div className={`p-6 ${(hasMultipleImages || hasSingleImage) ? '-mt-16 relative z-10' : ''}`}>
        <div className="flex items-start justify-between mb-3">
          <h3
            className={`font-semibold ${featured ? 'text-2xl' : 'text-xl'}`}
            style={{ color: '#ffffff' }}
          >
            {title}
          </h3>
          <div className="flex gap-2">
            {links?.github && (
              <a
                href={links.github}
                target="_blank"
                rel="noopener noreferrer"
                style={{ color: '#71717a' }}
                className="hover:opacity-80 transition-opacity"
              >
                <Github className="w-5 h-5" />
              </a>
            )}
            {links?.live && (
              <a
                href={links.live}
                target="_blank"
                rel="noopener noreferrer"
                style={{ color: '#71717a' }}
                className="hover:opacity-80 transition-opacity"
              >
                <ExternalLink className="w-5 h-5" />
              </a>
            )}
          </div>
        </div>

        <p
          className={`mb-4 ${featured ? 'text-base' : 'text-sm'}`}
          style={{ color: '#a1a1aa' }}
        >
          {description}
        </p>

        {/* Metrics - only show for featured */}
        {featured && metrics && (
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
                <p className="text-xs" style={{ color: '#71717a' }}>
                  {metric.label}
                </p>
              </div>
            ))}
          </div>
        )}

        {/* Tech Stack */}
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
      </div>
    </div>
  );
};
