import { AnimatedSection } from '../ui/AnimatedSection';
import { TerminalPrompt } from '../ui/TerminalPrompt';
import { BentoProjectCard } from '../cards/BentoProjectCard';
import { projects } from '../../data/portfolio';

export const ProjectsSection = () => {
  let featuredIndex = 0;

  return (
    <section id="projects" className="px-6 py-24">
      <div className="max-w-6xl mx-auto">
        <AnimatedSection>
          <TerminalPrompt command="projects --list" />
        </AnimatedSection>

        {/* Bento Grid */}
        <div
          className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8"
          style={{ gridAutoRows: 'minmax(0, auto)', gridAutoFlow: 'dense' }}
        >
          {projects.map((project, i) => {
            const isFeatured = project.featured;
            const currentFeaturedIndex = isFeatured ? featuredIndex++ : 0;
            const colStart = isFeatured && currentFeaturedIndex % 2 === 1 ? 'md:col-start-2' : '';

            return (
              <AnimatedSection
                key={i}
                className={`${isFeatured ? 'md:col-span-2' : ''} ${colStart}`}
              >
                <BentoProjectCard {...project} />
              </AnimatedSection>
            );
          })}
        </div>
      </div>
    </section>
  );
};
