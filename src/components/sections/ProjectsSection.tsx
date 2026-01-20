import { AnimatedSection } from '../ui/AnimatedSection';
import { TerminalPrompt } from '../ui/TerminalPrompt';
import { BentoProjectCard } from '../cards/BentoProjectCard';
import { projects } from '../../data/portfolio';

export const ProjectsSection = () => (
  <section id="projects" className="px-6 py-24">
    <div className="max-w-6xl mx-auto">
      <AnimatedSection>
        <TerminalPrompt command="projects --list" />
      </AnimatedSection>

      {/* Bento Grid */}
      <div
        className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8"
        style={{ gridAutoRows: 'minmax(0, auto)' }}
      >
        {projects.map((project, i) => (
          <AnimatedSection
            key={i}
            className={project.featured ? 'md:col-span-2' : ''}
          >
            <BentoProjectCard {...project} />
          </AnimatedSection>
        ))}
      </div>
    </div>
  </section>
);
