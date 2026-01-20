import { Mail, Github } from 'lucide-react';
import { AnimatedSection } from '../ui/AnimatedSection';
import { TerminalPrompt } from '../ui/TerminalPrompt';
import { GlassCard } from '../ui/GlassCard';

const LinkedInLogo = ({ className, style }: { className?: string; style?: React.CSSProperties }) => (
  <svg className={className} style={style} viewBox="0 0 24 24" fill="currentColor">
    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
  </svg>
);

const contactLinks = [
  { href: 'mailto:obadiahfusco@gmail.com', icon: Mail, label: 'obadiahfusco@gmail.com' },
  { href: 'https://linkedin.com/in/obadiah-fusco-5813032ba', icon: LinkedInLogo, label: 'LinkedIn' },
  { href: 'https://github.com/ObadiahF', icon: Github, label: 'GitHub' }
];

export const ContactSection = () => (
  <section id="contact" className="px-6 py-24">
    <div className="max-w-6xl mx-auto">
      <AnimatedSection>
        <TerminalPrompt command="contact --info" />
      </AnimatedSection>

      <AnimatedSection>
        <GlassCard className="p-8 mt-8">
          <h2 className="text-2xl font-bold mb-4" style={{ color: '#ffffff' }}>Let's Connect</h2>
          <p className="mb-8 max-w-xl" style={{ color: '#a1a1aa' }}>
            Currently seeking new grad Software Engineering roles for May 2026.
            Open to iOS, AI/ML, and full-stack opportunities.
          </p>

          <div className="flex flex-wrap gap-4">
            {contactLinks.map(({ href, icon: Icon, label }) => (
              <a
                key={label}
                href={href}
                target={href.startsWith('mailto:') ? undefined : '_blank'}
                rel={href.startsWith('mailto:') ? undefined : 'noopener noreferrer'}
                className="flex items-center gap-2 px-4 py-2 rounded-xl transition-all"
                style={{
                  backgroundColor: 'rgba(255,255,255,0.05)',
                  border: '1px solid rgba(255,255,255,0.1)'
                }}
              >
                <Icon className="w-4 h-4" style={{ color: '#34d399' }} />
                <span className="text-sm" style={{ color: '#a1a1aa' }}>{label}</span>
              </a>
            ))}
          </div>
        </GlassCard>
      </AnimatedSection>
    </div>
  </section>
);
