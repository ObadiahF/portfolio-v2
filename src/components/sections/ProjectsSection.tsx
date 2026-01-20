import { AnimatedSection } from '../ui/AnimatedSection';
import { TerminalPrompt } from '../ui/TerminalPrompt';
import { ProjectCard } from '../cards/ProjectCard';
import { featuredProject, otherProjects } from '../../data/portfolio';

export const ProjectsSection = () => (
  <section id="projects" className="px-6 py-24">
    <div className="max-w-6xl mx-auto">
      <AnimatedSection>
        <TerminalPrompt command="projects --featured" />
      </AnimatedSection>

      <AnimatedSection className="mt-8">
        <ProjectCard {...featuredProject} />
      </AnimatedSection>

      <AnimatedSection className="mt-8">
        <TerminalPrompt command="projects --other" />
      </AnimatedSection>

      <div className="grid md:grid-cols-2 gap-6 mt-8">
        {otherProjects.map((project, i) => (
          <AnimatedSection key={i}>
            <ProjectCard {...project} />
          </AnimatedSection>
        ))}
      </div>
    </div>
  </section>
);
