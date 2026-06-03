import {
  ArrowRight,
  ArrowUpRight,
  BadgeCheck,
  BriefcaseBusiness,
  Cloud,
  Code2,
  Database,
  GitBranch,
  Layers3,
  MapPin,
  Palette,
  Server,
  ShieldCheck,
  Sparkles,
} from 'lucide-react';
import { portfolio } from './content/portfolio.js';

const navItems = [
  { label: 'Work', href: '#work' },
  { label: 'Skills', href: '#capabilities' },
  { label: 'Experience', href: '#experience' },
  { label: 'Contact', href: '#contact' },
];

const capabilityIcons = [Server, Code2, Palette];
const linkIcons = {
  GitHub: GitBranch,
  LinkedIn: BriefcaseBusiness,
};

const backendNodes = [
  { label: 'API Gateway', Icon: Server },
  { label: 'Auth', Icon: ShieldCheck },
  { label: 'Products', Icon: Code2 },
  { label: 'Orders', Icon: Layers3 },
  { label: 'PostgreSQL', Icon: Database },
  { label: 'S3 Storage', Icon: Cloud },
];

function Header() {
  return (
    <header className="site-header">
      <a className="brand" href="#top" aria-label={`${portfolio.name} home`}>
        <span className="brand-mark">{portfolio.initials}</span>
        <span>{portfolio.name}</span>
      </a>
      <nav className="nav-links" aria-label="Primary navigation">
        {navItems.map((item) => (
          <a key={item.href} href={item.href}>
            {item.label}
          </a>
        ))}
      </nav>
    </header>
  );
}

function Hero() {
  return (
    <section className="hero" id="top" aria-labelledby="hero-title">
      <div className="hero-bg" aria-hidden="true" />
      <div className="hero-content shell">
        <div className="hero-copy">
          <p className="eyebrow">
            <BadgeCheck size={18} aria-hidden="true" />
            {portfolio.availability}
          </p>
          <h1 id="hero-title">{portfolio.name}</h1>
          <p className="role">{portfolio.role}</p>
          <p className="intro">{portfolio.intro}</p>
          <div className="hero-actions" aria-label="Primary actions">
            <a className="button primary" href="#work">
              <span>View work</span>
              <ArrowRight size={18} aria-hidden="true" />
            </a>
            <a className="button secondary" href={portfolio.contact.href} target="_blank" rel="noreferrer">
              <span>{portfolio.contact.label}</span>
              <ArrowUpRight size={18} aria-hidden="true" />
            </a>
          </div>
        </div>
        <dl className="hero-stats" aria-label="Portfolio stats">
          <div className="profile-card">
            <img src={portfolio.photo.src} alt={portfolio.photo.alt} />
            <div>
              <strong>{portfolio.name}</strong>
              <span>{portfolio.role}</span>
            </div>
          </div>
          {portfolio.stats.map((stat) => (
            <div key={stat.label}>
              <dt>{stat.value}</dt>
              <dd>{stat.label}</dd>
            </div>
          ))}
        </dl>
      </div>
    </section>
  );
}

function SectionHeading({ eyebrow, title, text }) {
  return (
    <div className="section-heading">
      <p className="section-eyebrow">{eyebrow}</p>
      <h2>{title}</h2>
      {text ? <p>{text}</p> : null}
    </div>
  );
}

function ProjectPreview({ project }) {
  if (project?.image) {
    return (
      <div className={`project-preview image-preview ${project.accent}`} aria-label={`${project.title} preview`}>
        <img src={project.image} alt={project.imageAlt} />
      </div>
    );
  }

  if (project?.preview === 'backend-architecture') {
    return (
      <div className={`project-preview backend-architecture ${project.accent}`} aria-label={`${project.title} architecture preview`}>
        <div className="architecture-header">
          <span>Microservices API</span>
          <span>NestJS</span>
        </div>
        <div className="architecture-grid">
          {backendNodes.map(({ label, Icon }) => (
            <div className="architecture-node" key={label}>
              <Icon size={18} aria-hidden="true" />
              <span>{label}</span>
            </div>
          ))}
        </div>
        <div className="architecture-code" aria-hidden="true">
          <span>POST /auth/login</span>
          <span>GET /products</span>
          <span>POST /orders</span>
        </div>
      </div>
    );
  }

  return (
    <div className={`project-preview ${project.accent}`} aria-label={`${project.title} preview`}>
      <div className="preview-top">
        <span />
        <span />
        <span />
      </div>
      <div className="preview-grid">
        <span className="wide" />
        <span />
        <span />
        <span className="tall" />
        <span />
        <span className="wide" />
      </div>
    </div>
  );
}

function ProjectCard({ project, index }) {
  return (
    <article className="project-card">
      <ProjectPreview project={project} />
      <div className="project-body">
        <div className="project-kicker">
          <span>{String(index + 1).padStart(2, '0')}</span>
          <span>{project.category}</span>
          <span>{project.year}</span>
        </div>
        <h3>{project.title}</h3>
        <p>{project.summary}</p>
        <ul className="outcome-list">
          {project.outcomes.map((outcome) => (
            <li key={outcome}>
              <BadgeCheck size={16} aria-hidden="true" />
              <span>{outcome}</span>
            </li>
          ))}
        </ul>
        <div className="stack-list" aria-label={`${project.title} stack`}>
          {project.stack.map((item) => (
            <span key={item}>{item}</span>
          ))}
        </div>
        {project.links?.length ? (
          <div className="project-links" aria-label={`${project.title} links`}>
            {project.links.map((link) => (
              <a key={link.href} href={link.href} target="_blank" rel="noreferrer">
                <span>{link.label}</span>
                <ArrowUpRight size={16} aria-hidden="true" />
              </a>
            ))}
          </div>
        ) : null}
      </div>
    </article>
  );
}

function WorkSection() {
  return (
    <section className="section shell" id="work" aria-labelledby="work-title">
      <SectionHeading
        eyebrow="Selected work"
        title="Backend depth with enough frontend polish to ship complete products."
        text="These projects show both sides of the work: a deployed landing page and a stronger backend system built with service architecture, auth, and database design."
      />
      <div className="project-grid">
        {portfolio.work.map((project, index) => (
          <ProjectCard key={project.title} project={project} index={index} />
        ))}
      </div>
    </section>
  );
}

function Capability({ capability, index }) {
  const Icon = capabilityIcons[index] ?? Layers3;

  return (
    <article className="capability">
      <div className="icon-tile">
        <Icon size={22} aria-hidden="true" />
      </div>
      <h3>{capability.title}</h3>
      <p>{capability.body}</p>
      <ul>
        {capability.items.map((item) => (
          <li key={item}>{item}</li>
        ))}
      </ul>
    </article>
  );
}

function CapabilitiesSection() {
  return (
    <section
      className="section capability-band"
      id="capabilities"
      aria-labelledby="capabilities-title"
    >
      <div className="shell">
        <SectionHeading
          eyebrow="Capabilities"
          title="Full-stack development with backend as the strongest layer."
          text="The current focus is building reliable APIs, auth systems, database-backed services, and clean React interfaces on top."
        />
        <div className="capability-grid">
          {portfolio.capabilities.map((capability, index) => (
            <Capability key={capability.title} capability={capability} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}

function ExperienceSection() {
  return (
    <section className="section shell split-section" id="experience">
      <div>
        <p className="section-eyebrow">Experience</p>
        <h2>Growing through real projects, internship work, and stronger builds.</h2>
      </div>
      <div className="timeline">
        {portfolio.experience.map((item) => (
          <article className="timeline-item" key={item.title}>
            <p>{item.period}</p>
            <h3>{item.title}</h3>
            <span>{item.description}</span>
          </article>
        ))}
      </div>
    </section>
  );
}

function ContactSection() {
  return (
    <section className="contact-band" id="contact" aria-labelledby="contact-title">
      <div className="shell contact-content">
        <div>
          <p className="section-eyebrow">Contact</p>
          <h2 id="contact-title">Have a frontend project or backend idea that needs careful execution?</h2>
        </div>
        <div className="contact-actions">
          <a className="button primary light" href={portfolio.contact.href} target="_blank" rel="noreferrer">
            <span>{portfolio.contact.label}</span>
            <ArrowUpRight size={18} aria-hidden="true" />
          </a>
          <p className="contact-meta">
            <MapPin size={17} aria-hidden="true" />
            {portfolio.location}
          </p>
          <div className="social-links">
            {portfolio.links.map((link) => {
              const Icon = linkIcons[link.label] ?? ArrowUpRight;

              return (
                <a
                  key={link.label}
                  href={link.href}
                  target="_blank"
                  rel="noreferrer"
                  aria-label={`${link.label} profile`}
                  title={`${link.label} profile`}
                >
                  <Icon size={20} aria-hidden="true" />
                </a>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer className="footer shell">
      <p>© 2026 {portfolio.name}. Frontend, backend, and product-minded web work.</p>
      <a href="#top">
        Back to top
        <ArrowUpRight size={16} aria-hidden="true" />
      </a>
    </footer>
  );
}

export default function App() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <WorkSection />
        <CapabilitiesSection />
        <ExperienceSection />
        <ContactSection />
      </main>
      <Footer />
    </>
  );
}
