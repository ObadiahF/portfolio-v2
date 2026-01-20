import { AnimatedSection } from '../ui/AnimatedSection';
import { TerminalPrompt } from '../ui/TerminalPrompt';
import { ExperienceCard } from '../cards/ExperienceCard';
import { ScrollDownButton } from '../ui/ScrollDownButton';
import { experiences } from '../../data/portfolio';

export const ExperienceSection = () => (
  <section id="experience" className="relative px-6 py-24 pb-20">
    <div className="max-w-6xl mx-auto">
      <AnimatedSection>
        <TerminalPrompt command="experience --list" />
      </AnimatedSection>

      <div className="grid gap-6 mt-8">
        {experiences.map((exp, i) => (
          <AnimatedSection key={i} delay={i * 100}>
            <ExperienceCard {...exp} />
          </AnimatedSection>
        ))}
      </div>
    </div>
    <ScrollDownButton targetId="projects" />
  </section>
);
