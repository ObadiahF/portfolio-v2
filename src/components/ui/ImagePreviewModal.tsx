import { useEffect, useCallback, useState, useRef } from 'react';
import { createPortal } from 'react-dom';
import { X, ChevronLeft, ChevronRight } from 'lucide-react';

interface ImagePreviewModalProps {
  images: string[];
  initialIndex: number;
  alt: string;
  isOpen: boolean;
  onClose: () => void;
}

export const ImagePreviewModal = ({
  images,
  initialIndex,
  alt,
  isOpen,
  onClose
}: ImagePreviewModalProps) => {
  const [currentIndex, setCurrentIndex] = useState(initialIndex);
  const [slideOffset, setSlideOffset] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);
  const touchStartX = useRef<number | null>(null);
  const hasMultipleImages = images.length > 1;

  // Reset index when modal opens with new initial index
  useEffect(() => {
    if (isOpen) {
      setCurrentIndex(initialIndex);
      setSlideOffset(0);
    }
  }, [isOpen, initialIndex]);

  const goToPrevious = useCallback(() => {
    if (isAnimating) return;
    setIsAnimating(true);
    setSlideOffset(100); // Slide right to reveal previous
    setTimeout(() => {
      setCurrentIndex((prev) => (prev > 0 ? prev - 1 : images.length - 1));
      setSlideOffset(0);
      setIsAnimating(false);
    }, 300);
  }, [images.length, isAnimating]);

  const goToNext = useCallback(() => {
    if (isAnimating) return;
    setIsAnimating(true);
    setSlideOffset(-100); // Slide left to reveal next
    setTimeout(() => {
      setCurrentIndex((prev) => (prev < images.length - 1 ? prev + 1 : 0));
      setSlideOffset(0);
      setIsAnimating(false);
    }, 300);
  }, [images.length, isAnimating]);

  const goToIndex = useCallback((index: number) => {
    if (index === currentIndex || isAnimating) return;
    setIsAnimating(true);
    setSlideOffset(index > currentIndex ? -100 : 100);
    setTimeout(() => {
      setCurrentIndex(index);
      setSlideOffset(0);
      setIsAnimating(false);
    }, 300);
  }, [currentIndex, isAnimating]);

  const handleKeyDown = useCallback(
    (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        onClose();
      } else if (e.key === 'ArrowLeft' && hasMultipleImages) {
        goToPrevious();
      } else if (e.key === 'ArrowRight' && hasMultipleImages) {
        goToNext();
      }
    },
    [onClose, goToPrevious, goToNext, hasMultipleImages]
  );

  const handleTouchStart = (e: React.TouchEvent) => {
    touchStartX.current = e.touches[0].clientX;
  };

  const handleTouchEnd = (e: React.TouchEvent) => {
    if (touchStartX.current === null || !hasMultipleImages) return;

    const touchEndX = e.changedTouches[0].clientX;
    const diff = touchStartX.current - touchEndX;
    const minSwipeDistance = 50;

    if (Math.abs(diff) > minSwipeDistance) {
      if (diff > 0) {
        goToNext();
      } else {
        goToPrevious();
      }
    }

    touchStartX.current = null;
  };

  useEffect(() => {
    if (isOpen) {
      document.addEventListener('keydown', handleKeyDown);
      document.body.style.overflow = 'hidden';
    }

    return () => {
      document.removeEventListener('keydown', handleKeyDown);
      document.body.style.overflow = '';
    };
  }, [isOpen, handleKeyDown]);

  if (!isOpen || images.length === 0) return null;

  // Get prev/next indices for carousel
  const prevIndex = currentIndex > 0 ? currentIndex - 1 : images.length - 1;
  const nextIndex = currentIndex < images.length - 1 ? currentIndex + 1 : 0;

  const modalContent = (
    <div
      className="fixed inset-0 z-[9999] flex items-center justify-center"
      style={{
        backgroundColor: 'rgba(0, 0, 0, 0.95)',
        backdropFilter: 'blur(12px)'
      }}
      onClick={onClose}
      onTouchStart={handleTouchStart}
      onTouchEnd={handleTouchEnd}
    >
      {/* Close button */}
      <button
        onClick={onClose}
        className="absolute top-6 right-6 p-2 rounded-full transition-colors hover:bg-white/10 z-10"
        style={{ color: '#ffffff' }}
      >
        <X className="w-8 h-8" />
      </button>

      {/* Previous button */}
      {hasMultipleImages && (
        <button
          onClick={(e) => {
            e.stopPropagation();
            goToPrevious();
          }}
          className="absolute left-4 md:left-8 p-3 rounded-full transition-colors hover:bg-white/10 z-10"
          style={{ color: '#ffffff' }}
        >
          <ChevronLeft className="w-10 h-10" />
        </button>
      )}

      {/* Image carousel container */}
      <div
        className="relative overflow-hidden"
        style={{ width: '85vw', height: '85vh' }}
        onClick={(e) => e.stopPropagation()}
      >
        <div
          className="flex items-center h-full"
          style={{
            transform: `translateX(calc(-100% + ${slideOffset}%))`,
            transition: isAnimating ? 'transform 300ms ease-out' : 'none'
          }}
        >
          {/* Previous image */}
          <div className="flex-shrink-0 w-full h-full flex items-center justify-center">
            <img
              src={images[prevIndex]}
              alt={`${alt} ${prevIndex + 1}`}
              className="max-w-full max-h-full object-contain rounded-lg select-none"
              style={{ filter: 'drop-shadow(0 25px 50px rgba(0, 0, 0, 0.5))' }}
              draggable={false}
            />
          </div>

          {/* Current image */}
          <div className="flex-shrink-0 w-full h-full flex items-center justify-center">
            <img
              src={images[currentIndex]}
              alt={`${alt} ${currentIndex + 1}`}
              className="max-w-full max-h-full object-contain rounded-lg select-none"
              style={{ filter: 'drop-shadow(0 25px 50px rgba(0, 0, 0, 0.5))' }}
              draggable={false}
            />
          </div>

          {/* Next image */}
          <div className="flex-shrink-0 w-full h-full flex items-center justify-center">
            <img
              src={images[nextIndex]}
              alt={`${alt} ${nextIndex + 1}`}
              className="max-w-full max-h-full object-contain rounded-lg select-none"
              style={{ filter: 'drop-shadow(0 25px 50px rgba(0, 0, 0, 0.5))' }}
              draggable={false}
            />
          </div>
        </div>
      </div>

      {/* Next button */}
      {hasMultipleImages && (
        <button
          onClick={(e) => {
            e.stopPropagation();
            goToNext();
          }}
          className="absolute right-4 md:right-8 p-3 rounded-full transition-colors hover:bg-white/10 z-10"
          style={{ color: '#ffffff' }}
        >
          <ChevronRight className="w-10 h-10" />
        </button>
      )}

      {/* Indicator dots */}
      {hasMultipleImages && (
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex gap-2">
          {images.map((_, i) => (
            <button
              key={i}
              onClick={(e) => {
                e.stopPropagation();
                goToIndex(i);
              }}
              className={`w-2.5 h-2.5 rounded-full transition-all ${
                i === currentIndex
                  ? 'bg-white scale-125'
                  : 'bg-white/40 hover:bg-white/60'
              }`}
            />
          ))}
        </div>
      )}
    </div>
  );

  return createPortal(modalContent, document.body);
};
