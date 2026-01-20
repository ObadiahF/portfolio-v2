import { ChevronDown } from 'lucide-react';
import { TerminalPrompt } from '../ui/TerminalPrompt';

const roleLabels = ['Apple Intern', 'Vox Engineer', 'AI Researcher'];

export const HeroSection = () => (
  <section className="min-h-screen flex flex-col justify-center px-6 pt-20">
    <div className="max-w-6xl mx-auto w-full">
      <TerminalPrompt command="whoami" delay={300} />

      <div className="mt-8 space-y-4">
        <h1
          className="text-5xl md:text-7xl font-bold tracking-tight"
          style={{ color: '#ffffff' }}
        >
          Obadiah Fusco
        </h1>

        <p className="text-xl md:text-2xl max-w-2xl" style={{ color: '#a1a1aa' }}>
          Software Engineer building{' '}
          <span style={{ color: '#34d399' }}>iOS apps</span>,{' '}
          <span style={{ color: '#22d3ee' }}>AI systems</span>, and{' '}
          <span style={{ color: '#a78bfa' }}>full-stack experiences</span>.
        </p>

        <div className="flex items-center gap-2 text-sm font-mono mt-6 flex-wrap">
          {roleLabels.map((label, index) => (
            <span key={label}>
              <span
                className="px-2 py-1 rounded"
                style={{
                  backgroundColor: 'rgba(255,255,255,0.05)',
                  border: '1px solid rgba(255,255,255,0.1)',
                  color: '#a1a1aa'
                }}
              >
                {label}
              </span>
              {index < roleLabels.length - 1 && (
                <span style={{ color: '#3f3f46' }}> → </span>
              )}
            </span>
          ))}
        </div>
      </div>

      <div className="flex items-center gap-4 mt-12 flex-wrap">
        <a
          href="#experience"
          className="px-6 py-3 rounded-xl font-medium transition-opacity hover:opacity-90"
          style={{ background: 'linear-gradient(90deg, #10b981 0%, #06b6d4 100%)', color: '#000000' }}
        >
          View Experience
        </a>
        <a
          href="mailto:obadiahfusco@gmail.com"
          className="px-6 py-3 rounded-xl transition-all hover:bg-white/5"
          style={{ border: '1px solid rgba(255,255,255,0.1)', color: '#ffffff' }}
        >
          Get in Touch
        </a>
      </div>

      <div className="absolute bottom-12 left-1/2 -translate-x-1/2 animate-bounce">
        <ChevronDown className="w-6 h-6" style={{ color: '#52525b' }} />
      </div>
    </div>
  </section>
);
