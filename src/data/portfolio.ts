import type { Experience, Project } from '../types';

export const experiences: Experience[] = [
  {
    company: 'Apple',
    role: 'Software Engineering Intern',
    date: 'May 2025 - Aug 2025',
    location: 'Cupertino, CA',
    logo: '/Apple.jpeg',
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
    logo: '/TheVoxCompany.jpeg',
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
    logo: '/CanyonAIResearch.jpeg',
    tech: ['Python', 'PyTorch', 'Scikit-learn'],
    highlights: [
      'Researching EEG to wheelchair movement translation',
      'Developed CNN achieving 97% accuracy on EEG datasets',
      'Enabling enhanced mobility for disabled individuals'
    ]
  }
];

export const projects: Project[] = [
  {
    title: 'Lopes+',
    description: 'Consolidated 10+ university systems into one mobile experience. Digital student ID, real-time gym status, live dining cameras, event registration, budget analytics, and interactive campus navigation.',
    images: [
      '/projects/lopes-plus/Home/normal.png',
      '/projects/lopes-plus/Budget/normal.png',
      '/projects/lopes-plus/Venue/normal.png'
    ],
    featured: true,
    metrics: [
      { value: '~300ms', label: 'Launch Time' },
      { value: '10+', label: 'Systems Unified' },
      { value: '13x', label: 'Faster Than Official' }
    ],
    tech: ['SwiftUI', 'PassKit', 'Swift Concurrency', 'Combine', 'SwiftData', 'MapKit']
  },
  {
    title: 'HB Online Coaching',
    description: 'Full-stack coaching platform with Stripe payments, real-time chat, and scheduling features.',
    image: '/projects/coaching/Messages.png',
    tech: ['SvelteKit', 'Firebase', 'AWS Lambda', 'Stripe'],
    links: { }
  },
  {
    title: 'Event Coordination Platform',
    description: 'Built in one week. Event creation, attendance tracking, and SMS notifications via email gateway.',
    image: '/projects/event-platform/home.jpg',
    tech: ['React', 'MongoDB', 'Express', 'Tailwind'],
    links: { github: 'https://github.com/ObadiahF/Invite-app' }
  },
  {
    title: 'Math Game',
    description: 'Interactive math learning game with progressive difficulty and score tracking.',
    image: '/projects/math-game/home.png',
    tech: ['Express.js', 'Node JS', 'Websockets', 'Vanilla JS'],
    links: { github: 'https://github.com/ObadiahF/simpleWebsocketGame', live: 'https://mathgame.obadiahfusco.com/'}
  }
];
