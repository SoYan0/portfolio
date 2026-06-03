export const portfolio = {
  name: 'Abdulaziz Wakah',
  initials: 'AW',
  photo: {
    src: '/personal-photo.jpg',
    alt: 'Portrait of Abdulaziz Wakah',
  },
  role: 'Full-Stack Developer',
  availability: 'Building backend-first full-stack products with clean web interfaces',
  email: 'wakah.abdulaziz@gmail.com',
  contact: {
    label: 'Email me',
    href: 'mailto:wakah.abdulaziz@gmail.com',
  },
  location: 'Saudi Arabia',
  intro:
    'I build full-stack web products with a strong backend foundation. My strongest work is in NestJS, TypeScript, PostgreSQL, authentication, and API architecture, supported by clean React/Vite interfaces that make the system usable.',
  links: [
    { label: 'GitHub', href: 'https://github.com/SoYan0' },
    { label: 'LinkedIn', href: 'https://www.linkedin.com/in/abdulaziz-wakah-606741287/' },
  ],
  stats: [
    { value: '02', label: 'Featured projects' },
    { value: '01', label: 'Software internship' },
    { value: 'BE+', label: 'Backend-first full-stack' },
  ],
  work: [
    {
      title: 'AFAQ Talents Daycare',
      category: 'Landing page + visual design',
      year: '2025',
      summary:
        'A bright, child-friendly daycare landing page designed and built from scratch to introduce the center, show activities, share location details, and guide visitors toward contact.',
      outcomes: [
        'Designed the full visual direction',
        'Built responsive React/Vite sections',
        'Published a live public website',
      ],
      stack: ['React', 'Vite', 'Responsive CSS'],
      accent: 'daycare',
      image: '/project-daycare-home.png',
      imageAlt: 'Homepage screenshot for the AFAQ Talents daycare landing page',
      links: [
        { label: 'Live site', href: 'https://www.talentshorizonssports.com/' },
        { label: 'GitHub', href: 'https://github.com/SoYan0/afaq-academy' },
      ],
    },
    {
      title: 'E-Commerce Backend',
      category: 'Backend API + microservices',
      year: '2025',
      summary:
        'A production-minded e-commerce backend built during the Rasid Payments internship, using NestJS services, PostgreSQL data modeling, custom authentication, and file storage.',
      outcomes: [
        'Custom auth system from scratch',
        'Products, orders, and service boundaries',
        'PostgreSQL, TypeORM, and S3 integration',
      ],
      stack: ['NestJS', 'TypeScript', 'PostgreSQL', 'TypeORM', 'S3'],
      accent: 'backend',
      preview: 'backend-architecture',
      links: [{ label: 'GitHub', href: 'https://github.com/SoYan0/e-commerce' }],
    },
    {
      title: 'Personal Portfolio',
      category: 'Portfolio + responsive UI',
      year: '2026',
      summary:
        'A custom dark portfolio built to present full-stack work clearly, with project-focused sections, responsive layouts, and a backend architecture visual for non-UI projects.',
      outcomes: [
        'Built a responsive dark-mode portfolio',
        'Structured the content for easy future updates',
        'Created a custom backend project visual',
      ],
      stack: ['React', 'Vite', 'CSS', 'Content structure'],
      accent: 'teal',
      image: '/project-portfolio-home.png',
      imageAlt: 'Homepage screenshot for Abdulaziz Wakah personal portfolio',
    },
  ],
  capabilities: [
    {
      title: 'Backend Development',
      body:
        'Designing APIs, auth flows, database models, and service boundaries for practical production systems.',
      items: ['NestJS', 'PostgreSQL', 'TypeORM'],
    },
    {
      title: 'Full-Stack Delivery',
      body:
        'Connecting backend logic to clean user-facing experiences with readable, maintainable code.',
      items: ['TypeScript', 'React', 'REST APIs'],
    },
    {
      title: 'Frontend Interfaces',
      body:
        'Building responsive pages and product screens that communicate clearly and work across devices.',
      items: ['React', 'Vite', 'Responsive CSS'],
    },
  ],
  experience: [
    {
      period: '2025',
      title: 'Software Engineer Intern - Rasid Payments',
      description:
        'Completed an internship in Saudi Arabia focused on backend development, TypeScript, NestJS, PostgreSQL, and a final e-commerce backend project.',
    },
    {
      period: '2025',
      title: 'Independent Frontend Project - AFAQ Talents',
      description:
        'Designed and built a live daycare landing page from scratch with React and Vite, including activities, about, location, and contact sections.',
    },
  ],
};
