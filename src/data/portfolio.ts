import { Smartphone, Code2, Cpu } from 'lucide-react';
import type { Experience, Project } from '../types';

export const experiences: Experience[] = [
  {
    company: 'Apple',
    role: 'Software Engineering Intern',
    date: 'May 2025 - Aug 2025',
    location: 'Cupertino, CA',
    icon: Smartphone,
    tech: ['Swift', 'Objective-C', 'TypeScript', 'Xcode', 'Jenkins'],
    highlights: [
      'Designed and implemented a new feature for Pages on iCloud',
      'Contributed production code within an 8M+ line codebase',
      'Presented feature to senior leadership and incorporated feedback'
    ]
  },
  {
    company: 'The Vox Company',
    role: 'Software Engineer',
    date: 'Nov 2025 - Present',
    location: 'Phoenix, AZ',
    icon: Code2,
    tech: ['Swift', 'SwiftUI', 'Firebase'],
    highlights: [
      'Architected social platform with 6,000+ active users',
      'Implemented five-layer clean architecture pattern',
      'Built activity feeds, messaging, and community features'
    ]
  },
  {
    company: 'Canyon AI Research Lab',
    role: 'Research Intern',
    date: 'Sep 2024 - Present',
    location: 'Phoenix, AZ',
    icon: Cpu,
    tech: ['Python', 'PyTorch', 'Scikit-learn'],
    highlights: [
      'Researching EEG to wheelchair movement translation',
      'Developed CNN achieving 97% accuracy on EEG datasets',
      'Enabling enhanced mobility for disabled individuals'
    ]
  }
];

export const featuredProject: Project = {
  title: 'Lopes+',
  description: 'Consolidated 10+ university systems into one mobile experience. Digital student ID, real-time gym status, live dining cameras, event registration, budget analytics, and interactive campus navigation.',
  metrics: [
    { value: '~300ms', label: 'Launch Time' },
    { value: '10+', label: 'Systems Unified' },
    { value: '13x', label: 'Faster Than Official' }
  ],
  tech: ['SwiftUI', 'PassKit', 'Swift Concurrency', 'Combine', 'SwiftData', 'MapKit']
};

export const otherProjects: Project[] = [
  {
    title: 'HB Online Coaching',
    description: 'Full-stack coaching platform with Stripe payments, real-time chat, and scheduling features.',
    tech: ['SvelteKit', 'Firebase', 'AWS Lambda', 'Stripe'],
    links: { github: '#' }
  },
  {
    title: 'Event Coordination Platform',
    description: 'Built in one week. Event creation, attendance tracking, and SMS notifications via email gateway.',
    tech: ['React', 'MongoDB', 'Express', 'Tailwind'],
    links: { github: '#', live: '#' }
  }
];
