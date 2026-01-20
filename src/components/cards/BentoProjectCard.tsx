import { useState } from 'react';
import { Github, ExternalLink } from 'lucide-react';
import type { ProjectCardProps } from '../../types';
import { ImagePreviewModal } from '../ui/ImagePreviewModal';

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
  const [previewIndex, setPreviewIndex] = useState<number | null>(null);
  const hasMultipleImages = images && images.length > 0;
  const hasSingleImage = image && !hasMultipleImages;

  // Get all images as array for the modal
  const allImages = hasMultipleImages ? images : hasSingleImage ? [image] : [];

  return (
    <div
      className={`group relative rounded-2xl transition-all duration-300 ${
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
        <div className="flex justify-center items-end gap-4 p-6 pb-4">
          {images.map((img, i) => (
            <img
              key={i}
              src={img}
              alt={`${title} screenshot ${i + 1}`}
              className="w-auto object-contain rounded-2xl shadow-2xl transition-transform duration-300 hover:scale-110 hover:z-10 cursor-pointer"
              style={{
                maxHeight: featured ? '350px' : '200px',
                maxWidth: `${85 / images.length}%`,
                filter: 'drop-shadow(0 20px 40px rgba(0,0,0,0.4))'
              }}
              onClick={() => setPreviewIndex(i)}
            />
          ))}
        </div>
      )}

      {/* Single Image */}
      {hasSingleImage && (
        <div className="p-6 pb-4">
          <img
            src={image}
            alt={`${title} screenshot`}
            className="w-full h-auto object-contain rounded-xl transition-transform duration-500 group-hover:scale-105 cursor-pointer"
            style={{
              maxHeight: featured ? '300px' : '200px',
              filter: 'drop-shadow(0 10px 30px rgba(0,0,0,0.3))'
            }}
            onClick={() => setPreviewIndex(0)}
          />
        </div>
      )}

      {/* Content Section */}
      <div className="p-6 pt-2">
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

      {previewIndex !== null && allImages.length > 0 && (
        <ImagePreviewModal
          images={allImages}
          initialIndex={previewIndex}
          alt={`${title} preview`}
          isOpen={previewIndex !== null}
          onClose={() => setPreviewIndex(null)}
        />
      )}
    </div>
  );
};
