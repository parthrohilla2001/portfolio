const user = {
  name: 'Parth Rohilla',
  title: 'Software Engineer |Full Stack Developer',
  bio: 'Full Stack Developer with hands-on experience building scalable web applications using React.js/Next.js on the frontend and Node.js/Express on the backend. Skilled in designing RESTful APIs, implementing secure authentication (JWT, RBAC, OAuth), and working across PostgreSQL and MySQL with Prisma. Experienced with Redis, BullMQ, and WebSocket for caching, background processing, and real-time functionality. Proven ability to ship production-shaped systems, optimize performance, and deliver reliable software within Agile teams.',
  avatar: null,
  email: 'parthrohilla2000@gmail.com',
  phone: '+91 7404234155',
  location: 'Sonipat, India',
  linkedin: 'https://www.linkedin.com/in/parth-rohilla-4792b926',
  github: 'https://github.com/parthrohilla2001',
  skills: {
    Languages: ['PHP', 'JavaScript', 'TypeScript', 'Python'],
    Backend: ['Node.js', 'Express.js', 'REST APIs', 'API Integration', 'JWT', 'RBAC', 'Google OAuth', 'Zod'],
    'Databases & ORM': ['MySQL', 'PostgreSQL', 'SQL', 'Prisma ORM', 'Database Design', 'Query Optimization'],
    'Caching, Queues & Real-Time': ['Redis', 'BullMQ', 'WebSocket', 'Socket.IO'],
    Frontend: ['React.js', 'Next.js 15', 'HTML5', 'CSS3', 'AJAX', 'JSON', 'Zustand', 'React Hook Form'],
    'Cloud, Integrations & DevOps': ['OpenAI API', 'YouTube Data API', 'AWS S3', 'Docker', 'Nginx', 'Axios'],
    Concepts: [
      'OOP',
      'MVC Architecture',
      'Debugging',
      'SDLC',
      'Agile Development',
      'Performance Optimization',
      'Secure Authentication',
      'Backend Architecture'
    ]
  },
  experience: [
    {
      role: 'Software Engineer',
      company: 'Proeffico Solutions Pvt. Ltd.',
      location: 'Noida, India',
      period: 'Jan 2025 - Present',
      highlights: [
        'Developed scalable backend systems and RESTful APIs for enterprise applications.',
        'Designed optimized database schemas and improved query performance for faster data retrieval.',
        'Implemented caching mechanisms using Redis to reduce latency and improve performance.',
        'Built real-time features using WebSocket for live data processing and updates.',
        'Implemented secure authentication and Role-Based Access Control (RBAC).',
        'Integrated third-party APIs to enhance system capabilities.',
        'Collaborated with cross-functional teams in Agile development environments.',
        'Improved system reliability through debugging, performance tuning, and optimization.'
      ],
      keyProjects: [
        {
          title: 'AI-Based HRMS System',
          bullets: [
            'Developed backend logic for facial recognition-based attendance tracking.',
            'Designed database schema for employee and attendance data.',
            'Built APIs for real-time attendance processing and reporting.'
          ]
        },
        {
          title: 'Factory Management System',
          bullets: [
            'Developed backend modules for workforce and inventory management.',
            'Optimized database queries for improved performance.',
            'Implemented role-based access control for secure operations.'
          ]
        }
      ]
    },
    {
      role: 'Full Stack PHP Developer',
      company: 'Tacty Solutions Pvt. Ltd.',
      location: 'Zirakpur, India',
      period: 'Oct 2023 - Oct 2024',
      highlights: [
        'Developed and maintained web applications using PHP and CodeIgniter.',
        'Optimized backend code and MySQL queries to improve performance.',
        'Integrated third-party APIs for extended functionality.',
        'Worked closely with frontend teams to deliver user-friendly features.',
        'Delivered clean, maintainable, and scalable code.'
      ],
      keyProjects: [
        {
          title: 'Driving School Management System',
          bullets: [
            'Developed modules for scheduling, student management, and payments.',
            'Built backend APIs for managing student and instructor data.'
          ]
        },
        {
          title: 'Learning Management System (LMS)',
          bullets: [
            'Developed course management and certification tracking features.',
            'Improved backend performance through optimization techniques.'
          ]
        },
        {
          title: 'Student Learning Platform',
          bullets: [
            'Implemented new features based on client requirements.',
            'Improved application performance and responsiveness.'
          ]
        }
      ]
    }
  ],
  projects: [
    {
      title: 'FlowTube',
      description:
        'Production-shaped full-stack SaaS platform that automates AI-powered YouTube video uploads, metadata generation, scheduled publishing, authenticated channel linking, media storage, analytics, and retry-safe background processing.',
      tech: [
        'Next.js 15',
        'TypeScript',
        'Express',
        'PostgreSQL',
        'Prisma',
        'Redis',
        'BullMQ',
        'OpenAI API',
        'YouTube Data API',
        'AWS S3',
        'Docker',
        'Nginx'
      ],
      link: '#'
    },
    {
      title: 'AI-Based HRMS System',
      description:
        'Backend system powering facial recognition-based attendance tracking with real-time processing, employee data management, and automated reporting.',
      tech: ['Node.js', 'Redis', 'WebSocket', 'MySQL'],
      link: '#'
    },
    {
      title: 'Factory Management System',
      description:
        'Enterprise backend for workforce and inventory management with optimized queries and role-based access control for secure operations.',
      tech: ['Node.js', 'REST API', 'MySQL', 'RBAC'],
      link: '#'
    },
    {
      title: 'Driving School Management System',
      description:
        'Full-featured platform for scheduling, student management, and payment processing with robust backend APIs.',
      tech: ['PHP', 'CodeIgniter', 'MySQL', 'REST API'],
      link: '#'
    },
    {
      title: 'Learning Management System',
      description:
        'Course management and certification tracking platform with optimized backend performance for seamless user experiences.',
      tech: ['PHP', 'CodeIgniter', 'MySQL'],
      link: '#'
    },
    {
      title: 'Student Learning Platform',
      description:
        'Client-focused learning platform where new features were implemented based on requirements while improving application performance and responsiveness.',
      tech: ['PHP', 'CodeIgniter', 'MySQL', 'Responsive UI'],
      link: '#'
    }
  ],
  achievements: [
    {
      title: 'Extra Mile Award',
      org: 'Proeffico Solutions Pvt. Ltd.',
      description: 'Recognized for exceptional dedication and exceeding performance expectations.'
    },
    {
      title: 'Best Team Award',
      org: 'Proeffico Solutions Pvt. Ltd.',
      description: 'Awarded for collaborative teamwork and successful project delivery.'
    }
  ],
  education: {
    degree: 'Bachelor of Technology (B.Tech) - Computer Science',
    university: 'DCRUST University',
    period: '2019 - 2023'
  }
}

export default user
