import { useEffect, useState } from 'react';
import { ChevronDown, FileText } from 'lucide-react';
import { TerminalPrompt } from '../ui/TerminalPrompt';

const roleLabels = ['iOS Engineer @ Vox', 'AI Researcher @ GCU', "May '26 Grad"];

export const HeroSection = () => {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  return (
    <section className="min-h-screen flex flex-col justify-center px-6 pt-20">
      <div className="max-w-6xl mx-auto w-full">
        <div
          className={`transition-all duration-700 ease-out ${
            mounted ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
          }`}
        >
          <TerminalPrompt command="whoami" delay={300} />
        </div>

        <div className="mt-8 space-y-4">
          <h1
            className={`text-5xl md:text-7xl font-bold tracking-tight transition-all duration-700 ease-out ${
              mounted ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
            }`}
            style={{ color: '#ffffff', transitionDelay: '100ms' }}
          >
            Obadiah Fusco
          </h1>

          <p
            className={`text-xl md:text-2xl max-w-2xl transition-all duration-700 ease-out ${
              mounted ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
            }`}
            style={{ color: '#a1a1aa', transitionDelay: '200ms' }}
          >
            Software Engineer building{' '}
            <span style={{ color: '#34d399' }}>iOS apps</span>,{' '}
            <span style={{ color: '#22d3ee' }}>AI systems</span>, and{' '}
            <span style={{ color: '#a78bfa' }}>full-stack experiences</span>.
          </p>

          <div
            className={`flex items-center gap-3 text-sm font-mono mt-6 flex-wrap transition-all duration-700 ease-out ${
              mounted ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
            }`}
            style={{ transitionDelay: '300ms' }}
          >
            {roleLabels.map((label, index) => (
              <div key={label} className="flex items-center gap-3">
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
                  <span className="hidden md:inline" style={{ color: '#3f3f46' }}>→</span>
                )}
              </div>
            ))}
          </div>
        </div>

        <div
          className={`flex items-center gap-4 mt-12 flex-wrap transition-all duration-700 ease-out ${
            mounted ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
          }`}
          style={{ transitionDelay: '400ms' }}
        >
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
          <a
            href="https://docs.google.com/document/d/1IFknNg2vOOQ6i8CGrYbttxDdS9X5-fQB/edit?usp=sharing&ouid=101486817433600214935&rtpof=true&sd=true"
            target="_blank"
            rel="noopener noreferrer"
            className="px-6 py-3 rounded-xl transition-all hover:bg-white/5 flex items-center gap-2"
            style={{ border: '1px solid rgba(255,255,255,0.1)', color: '#ffffff' }}
          >
            <FileText className="w-4 h-4" />
            Resume
          </a>
        </div>

        <div
          className={`absolute bottom-12 left-1/2 -translate-x-1/2 transition-all duration-700 ease-out ${
            mounted ? 'opacity-100 animate-bounce' : 'opacity-0'
          }`}
          style={{ transitionDelay: '600ms' }}
        >
          <ChevronDown className="w-6 h-6" style={{ color: '#52525b' }} />
        </div>
      </div>
    </section>
  );
};
