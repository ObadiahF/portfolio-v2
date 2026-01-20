import type { LucideIcon } from 'lucide-react';
import type { ReactNode } from 'react';

// Data Types
export interface Metric {
  value: string;
  label: string;
}

export interface ProjectLinks {
  github?: string;
  live?: string;
}

export interface Experience {
  company: string;
  role: string;
  date: string;
  location: string;
  icon: LucideIcon;
  tech: string[];
  highlights: string[];
}

export interface Project {
  title: string;
  description: string;
  metrics?: Metric[];
  tech: string[];
  links?: ProjectLinks;
}

// Component Props Types
export interface AnimatedSectionProps {
  children: ReactNode;
  className?: string;
}

export interface TerminalPromptProps {
  command: string;
  delay?: number;
}

export interface GlassCardProps {
  children: ReactNode;
  className?: string;
  hover?: boolean;
}

export interface ExperienceCardProps extends Experience {}

export interface ProjectCardProps extends Project {}

// Hook Return Types
export interface UseTypingEffectReturn {
  displayedText: string;
  isComplete: boolean;
}
