import { Mail, Linkedin, Github } from 'lucide-react';
import { AnimatedSection } from '../ui/AnimatedSection';
import { TerminalPrompt } from '../ui/TerminalPrompt';
import { GlassCard } from '../ui/GlassCard';

const contactLinks = [
  { href: 'mailto:obadiahfusco@gmail.com', icon: Mail, label: 'obadiahfusco@gmail.com' },
  { href: 'https://linkedin.com/in/obadiah-fusco-5813032ba', icon: Linkedin, label: 'LinkedIn' },
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
