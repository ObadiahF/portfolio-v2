export const Navigation = () => (
  <nav
    className="fixed top-0 left-0 right-0 z-50 px-6 py-4"
    style={{ backdropFilter: 'blur(12px)' }}
  >
    <div className="max-w-6xl mx-auto flex items-center justify-between">
      <div className="font-mono text-sm">
        <span style={{ color: '#34d399' }}>~/</span>
        <span style={{ color: '#71717a' }}>obadiah</span>
      </div>
      <div className="flex items-center gap-6">
        <a href="#experience" className="text-sm transition-opacity hover:opacity-70" style={{ color: '#a1a1aa' }}>Experience</a>
        <a href="#projects" className="text-sm transition-opacity hover:opacity-70" style={{ color: '#a1a1aa' }}>Projects</a>
        <a href="#contact" className="text-sm transition-opacity hover:opacity-70" style={{ color: '#a1a1aa' }}>Contact</a>
      </div>
    </div>
  </nav>
);
