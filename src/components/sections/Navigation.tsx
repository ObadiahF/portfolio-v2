import { useState } from 'react';
import { Menu, X } from 'lucide-react';

export const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = [
    { href: '#experience', label: 'Experience' },
    { href: '#projects', label: 'Projects' },
    { href: '#contact', label: 'Contact' }
  ];

  const handleLinkClick = () => {
    setIsOpen(false);
  };

  return (
    <nav
      className="fixed top-0 left-0 right-0 z-50 px-6 py-4"
      style={{ backgroundColor: 'rgba(9,9,11,0.8)', backdropFilter: 'blur(12px)' }}
    >
      <div className="max-w-6xl mx-auto flex items-center justify-between">
        <div className="font-mono text-sm gap-2">
          <span style={{ color: '#34d399' }}>obadiah</span>
          <span style={{ color: '#71717a' }}>@portfolio</span>
        </div>

        {/* Desktop links - hidden on mobile */}
        <div className="hidden md:flex items-center gap-6">
          {navLinks.map(({ href, label }) => (
            <a
              key={label}
              href={href}
              className="text-sm transition-opacity hover:opacity-70"
              style={{ color: '#a1a1aa' }}
            >
              {label}
            </a>
          ))}
        </div>

        {/* Hamburger button - visible on mobile only */}
        <button
          className="md:hidden p-2 -mr-2"
          onClick={() => setIsOpen(!isOpen)}
          aria-label={isOpen ? 'Close menu' : 'Open menu'}
        >
          {isOpen ? (
            <X className="w-6 h-6" style={{ color: '#a1a1aa' }} />
          ) : (
            <Menu className="w-6 h-6" style={{ color: '#a1a1aa' }} />
          )}
        </button>
      </div>

      {/* Mobile menu - slides down when open */}
      <div
        className={`md:hidden overflow-hidden transition-all duration-300 ease-out ${
          isOpen ? 'max-h-48 opacity-100' : 'max-h-0 opacity-0'
        }`}
      >
        <div className="pt-4 pb-2 flex flex-col gap-4">
          {navLinks.map(({ href, label }) => (
            <a
              key={label}
              href={href}
              onClick={handleLinkClick}
              className="text-sm transition-opacity hover:opacity-70 py-2"
              style={{ color: '#a1a1aa' }}
            >
              {label}
            </a>
          ))}
        </div>
      </div>
    </nav>
  );
};
