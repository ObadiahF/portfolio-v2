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
    role: 'Software Engineer (Contract)',
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
  },
  {
    company: 'Fifth Gear Tech',
    role: 'Software Engineering Intern',
    date: 'Jun 2023 - Aug 2024',
    location: 'Vancouver, WA',
    logo: '/Fifth-gear-tech.png',
    tech: ['React', 'Node.js', 'TypeScript', 'Express', 'AWS DynamoDB', 'AWS Lambda'],
    highlights: [
      'Integrated AWS DynamoDB for enhanced caching, improving data retrieval times by 42%.',
      'Developed reusable libraries to streamline AWS service integration, reducing duplicate code and creating a more sustainable JavaScript codebase.',
      'Collaborated with engineers and team leads in biweekly standups to plan, strategize, and deliver solutions, with all contributions shipped to production.'
    ]
  }
];

export const projects: Project[] = [
  {
    title: 'Hornscore',
    description: 'Social media platform for hunters built at Vox. Features activity feeds, direct messaging, community engagement, and content sharing for the hunting community.',
    images: [
      '/projects/hornscore/feed.svg',
      '/projects/hornscore/dm.svg',
      '/projects/hornscore/profile.svg'
    ],
    featured: true,
    metrics: [
      { value: '6,000+', label: 'Active Users' },
      { value: '5-Layer', label: 'Clean Architecture' },
      { value: 'Blazingly', label: 'Fast' }
    ],
    tech: ['Swift', 'SwiftUI', 'Firebase', 'Clean Architecture'],
  },

  {
    title: 'Productivity OS',
    description: 'AI-powered project management app for macOS. Features intelligent task prioritization, natural language commands, RAG-based context retrieval, and autonomous tool execution.',
    images: [
      '/projects/productivity-os/home.jpeg',
      '/projects/productivity-os/chat.jpeg'
    ],
    featured: true,
    metrics: [
      { value: 'RAG', label: 'Context Engine' },
      { value: 'Native', label: 'macOS App' },
      { value: 'AI', label: 'Tool Calling' }
    ],
    tech: ['Swift', 'SwiftUI', 'RAG', 'LLM Tool Calling', 'SwiftData'],
  },
  {
    title: 'Source Mind',
    description: 'AI-powered transcription and meeting analyzer. Transcribes audio, indexes content with RAG, and answers questions about your meetings and lectures using natural language.',
    images: [
      '/projects/source-mind/transcribe.png'
    ],
    featured: false,
    metrics: [
      { value: 'RAG', label: 'Retrieval' },
      { value: 'Real-time', label: 'Tool Calling' },
      { value: 'AI', label: 'Q&A' }
    ],
    tech: ['Python', 'Whisper', 'RAG', 'LangChain', 'ChromaDB']
  },

  {
    title: 'HB Online Coaching',
    description: 'Full-stack coaching platform with Stripe payments, real-time chat, and scheduling features. Secure webhook handling on AWS Lambda for subscription management.',
    images: [
      '/projects/coaching/Messages.png'
    ],
    tech: ['SvelteKit', 'Firebase', 'AWS Lambda', 'Stripe', 'Resend'],
    links: { }
  },
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
      { value: '13x', label: 'Faster Than Official App' }
    ],
    tech: ['SwiftUI', 'PassKit', 'Swift Concurrency', 'Combine', 'SwiftData', 'MapKit'],
  },
  {
    title: 'Event Coordination Platform',
    description: 'Built and shipped in one week. Event creation, attendance tracking, and real-time SMS notifications via email-to-SMS gateway.',
    images: [
      '/projects/event-platform/home.jpg'
    ],
    tech: ['React', 'MongoDB', 'Express', 'Tailwind', 'Node.js'],
    links: { github: 'https://github.com/ObadiahF/Invite-app' }
  },
  {
    title: 'Math Game',
    description: 'Fast-paced multiplayer math game with WebSocket-powered lobbies, real-time scoring, and competitive gameplay. Supports private and public game rooms.',
    images: [
      '/projects/math-game/home.png'
    ],
    tech: ['Vanilla JS', 'Node.js', 'Socket.IO', 'Express'],
    links: { 
      github: 'https://github.com/ObadiahF/simpleWebsocketGame', 
      live: 'https://mathgame.obadiahfusco.com/'
    }
  },
  {
    title: 'HomeLab',
    description: 'Personal infrastructure running 20+ self-hosted services. Includes media servers, automation, monitoring, backups, and development environments.',
    images: [
      '/projects/homelab/homepage.png',
    ],
    metrics: [
      { value: '20+', label: 'Services' },
      { value: 'Docker', label: 'Containerized' },
    ],
    tech: ['Docker', 'Kubernetes', 'Nginx', 'Portainer'],
  }
];

// Helper to get featured projects
export const getFeaturedProjects = () => projects.filter(p => p.featured);

// Helper to get non-featured projects
export const getRegularProjects = () => projects.filter(p => !p.featured);