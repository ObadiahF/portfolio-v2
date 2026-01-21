import { useEffect, useRef } from 'react';

export const CursorGlow = () => {
  const glowRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (glowRef.current) {
        glowRef.current.style.transform = `translate(${e.clientX - 192}px, ${e.clientY - 192}px)`;
      }
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  return (
    <div
      ref={glowRef}
      className="fixed pointer-events-none z-0 w-96 h-96 rounded-full blur-3xl opacity-50"
      style={{
        background: 'radial-gradient(circle, rgba(167, 139, 250, 0.6) 0%, transparent 70%)',
        transform: 'translate(-192px, -192px)'
      }}
    />
  );
};
