import { createFileRoute } from "@tanstack/react-router";
import { useEffect, useState, type ReactNode } from "react";
import {
  Menu, X, Moon, Sun, ArrowRight, Mail, Github, Linkedin, GraduationCap,
  Code2, Cpu, Globe, Wrench, ExternalLink, User, ImageIcon, Braces, Terminal,
} from "lucide-react";
import { profile, about, education, skillGroups, projects, contact } from "@/data/portfolio";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Md Rehman Arifin — CSE Student & Aspiring Developer" },
      { name: "description", content: "Portfolio of Md Rehman Arifin, a CSE student at Daffodil International University passionate about programming and data structures." },
      { property: "og:title", content: "Md Rehman Arifin — Portfolio" },
      { property: "og:description", content: "CSE student and aspiring software developer. Projects, skills and education." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Index,
});

const NAV = ["Home", "About", "Education", "Skills", "Projects", "Contact"];
const SKILL_ICONS = [Code2, Cpu, Globe, Wrench];

function useReveal() {
  useEffect(() => {
    const els = document.querySelectorAll(".reveal");
    const io = new IntersectionObserver(
      (entries) => entries.forEach((e) => e.isIntersecting && (e.target.classList.add("is-visible"), io.unobserve(e.target))),
      { threshold: 0.12 },
    );
    els.forEach((el) => io.observe(el));
    return () => io.disconnect();
  }, []);
}

function ThemeToggle() {
  const [dark, setDark] = useState(false);
  useEffect(() => setDark(document.documentElement.classList.contains("dark")), []);
  const toggle = () => {
    const next = !dark;
    setDark(next);
    document.documentElement.classList.toggle("dark", next);
    localStorage.setItem("theme", next ? "dark" : "light");
  };
  return (
    <button onClick={toggle} aria-label="Toggle theme"
      className="grid h-10 w-10 place-items-center rounded-full border border-border bg-card text-foreground transition hover:border-primary hover:text-primary">
      {dark ? <Sun size={18} /> : <Moon size={18} />}
    </button>
  );
}

function Navbar() {
  const [open, setOpen] = useState(false);
  return (
    <header className="sticky top-0 z-50 border-b border-border bg-background/80 backdrop-blur-md">
      <nav className="mx-auto flex h-16 max-w-6xl items-center justify-between px-5">
        <a href="#home" aria-label={`${profile.shortName} — back to top`} className="group inline-flex items-center gap-2">
          <span aria-hidden className="h-4 w-1 -skew-x-[20deg] rounded-sm bg-gradient-primary transition group-hover:h-5" />
          <span className="font-brand text-gradient text-lg font-bold uppercase tracking-[0.18em]">{profile.shortName}</span>
        </a>
        <ul className="hidden items-center gap-7 md:flex">
          {NAV.map((n) => (
            <li key={n}><a href={`#${n.toLowerCase()}`} className="text-sm font-medium text-muted-foreground transition hover:text-primary">{n}</a></li>
          ))}
        </ul>
        <div className="flex items-center gap-2">
          <ThemeToggle />
          <button className="grid h-10 w-10 place-items-center rounded-full border border-border bg-card md:hidden" aria-label="Menu" aria-expanded={open} onClick={() => setOpen(!open)}>
            {open ? <X size={18} /> : <Menu size={18} />}
          </button>
        </div>
      </nav>
      {open && (
        <ul className="border-t border-border bg-background px-5 py-3 md:hidden">
          {NAV.map((n) => (
            <li key={n}><a onClick={() => setOpen(false)} href={`#${n.toLowerCase()}`} className="block py-2.5 font-medium text-muted-foreground hover:text-primary">{n}</a></li>
          ))}
        </ul>
      )}
    </header>
  );
}

function Section({ id, eyebrow, title, children, className = "" }: { id: string; eyebrow: string; title: string; children: ReactNode; className?: string }) {
  return (
    <section id={id} className={`px-5 py-24 ${className}`}>
      <div className="mx-auto max-w-6xl">
        <div className="reveal mb-12">
          <p className="mb-3 text-sm font-semibold uppercase tracking-[0.2em] text-primary">{eyebrow}</p>
          <h2 className="text-3xl font-bold md:text-4xl">{title}</h2>
        </div>
        {children}
      </div>
    </section>
  );
}

function Hero() {
  return (
    <section id="home" className="relative overflow-hidden px-5 pb-24 pt-16 md:pt-24">
      <div className="mx-auto grid max-w-6xl items-center gap-14 md:grid-cols-[1.2fr_1fr]">
        <div className="reveal">
          <span className="mb-6 inline-flex items-center gap-2 rounded-full border border-border bg-card px-4 py-1.5 text-sm text-muted-foreground">
            <span className="h-2 w-2 rounded-full bg-primary" /> Learning & building
          </span>
          <h1 className="text-5xl font-bold leading-[1.05] md:text-6xl">
            Hi, I'm <span className="text-gradient">{profile.name}</span>
          </h1>
          <p className="mt-5 font-display text-lg font-medium text-foreground/80">{profile.title}</p>
          <p className="mt-5 max-w-xl text-lg leading-relaxed text-muted-foreground">{profile.intro}</p>
          <div className="mt-9 flex flex-wrap gap-3">
            <a href="#projects" className="inline-flex items-center gap-2 rounded-full bg-primary px-6 py-3 font-medium text-primary-foreground shadow-soft transition hover:-translate-y-0.5 hover:shadow-lift">
              Explore My Projects <ArrowRight size={18} />
            </a>
            <a href="#contact" className="inline-flex items-center gap-2 rounded-full border border-border bg-card px-6 py-3 font-medium transition hover:border-primary hover:text-primary">
              Contact Me
            </a>
          </div>
        </div>
        <div className="reveal relative mx-auto w-full max-w-sm">
          <div className="absolute -inset-6 rounded-[3rem] bg-gradient-accent opacity-50 blur-2xl" />
          <div className="relative aspect-[4/5] overflow-hidden rounded-[2.5rem] border border-border bg-card shadow-lift">
            {profile.photo ? (
              <img src={profile.photo} alt="Md Rehman Arifin profile photo" className="h-full w-full object-cover object-center" />
            ) : (
              <div className="flex h-full flex-col items-center justify-center gap-3 bg-secondary/60 text-secondary-foreground">
                <User size={72} strokeWidth={1.2} />
                <p className="text-sm font-medium">Your photo here</p>
                <p className="text-xs text-muted-foreground">Set <code>profile.photo</code> in portfolio data</p>
              </div>
            )}
          </div>
          <div className="animate-float absolute -left-6 top-10 grid h-14 w-14 place-items-center rounded-2xl border border-border bg-card text-primary shadow-soft"><Braces size={24} /></div>
          <div className="animate-float absolute -right-5 bottom-12 grid h-14 w-14 place-items-center rounded-2xl bg-ink text-sky shadow-soft [animation-delay:1.5s]"><Terminal size={24} /></div>
        </div>
      </div>
    </section>
  );
}

function About() {
  return (
    <section id="about" className="bg-surface px-5 py-24">
      <div className="reveal mx-auto max-w-6xl">
        <p className="mb-5 text-sm font-semibold uppercase tracking-[0.2em] text-primary">About me</p>
        <div className="max-w-3xl space-y-3 text-lg leading-relaxed text-muted-foreground">
          {about.map((p, i) => <p key={i}>{p}</p>)}
        </div>
      </div>
    </section>
  );
}

function Education() {
  return (
    <Section id="education" eyebrow="Education" title="Academic journey">
      {education.map((e) => (
        <div key={e.institution} className="reveal relative flex flex-col gap-6 overflow-hidden rounded-3xl border border-border bg-card p-8 shadow-soft sm:flex-row sm:items-center">
          <div className="absolute inset-y-0 left-0 w-1.5 bg-gradient-primary" />
          <div className="grid h-16 w-16 shrink-0 place-items-center rounded-2xl bg-secondary text-primary"><GraduationCap size={32} /></div>
          <div className="flex-1">
            <h3 className="text-xl font-bold">{e.institution}</h3>
            <p className="mt-1 text-muted-foreground">{e.degree}</p>
          </div>
          <span className="self-start rounded-full bg-accent px-4 py-1.5 text-sm font-medium text-accent-foreground sm:self-center">{e.status}</span>
        </div>
      ))}
    </Section>
  );
}

function Skills() {
  return (
    <Section id="skills" eyebrow="Skills" title="What I'm working with" className="bg-surface">
      <div className="grid gap-5 sm:grid-cols-2">
        {skillGroups.map((g, i) => {
          const Icon = SKILL_ICONS[i % SKILL_ICONS.length]!;
          const dark = i === 1 || i === 2;
          return (
            <div key={g.category} className={`reveal rounded-3xl border p-7 transition hover:-translate-y-1 ${dark ? "border-transparent bg-ink text-ink-foreground" : "border-border bg-card"}`}>
              <div className="mb-5 flex items-center gap-3">
                <div className={`grid h-11 w-11 place-items-center rounded-xl ${dark ? "bg-ink-card text-sky" : "bg-secondary text-primary"}`}><Icon size={20} /></div>
                <h3 className="font-semibold">{g.category}</h3>
              </div>
              <div className="flex flex-wrap gap-2">
                {g.skills.map((s) => (
                  <span key={s} className={`rounded-full px-3.5 py-1.5 text-sm ${dark ? "bg-ink-card text-ink-foreground" : "bg-muted text-foreground"}`}>{s}</span>
                ))}
              </div>
            </div>
          );
        })}
      </div>
    </Section>
  );
}

function LinkBtn({ href, children }: { href?: string | undefined; children: ReactNode }) {
  if (!href) return <span className="inline-flex items-center gap-1.5 text-sm text-ink-muted" title="Link coming soon">{children} <em className="not-italic opacity-70">(add link)</em></span>;
  return <a href={href} target="_blank" rel="noreferrer" className="inline-flex items-center gap-1.5 text-sm font-medium text-sky hover:underline">{children}</a>;
}

function Projects() {
  return (
    <Section id="projects" eyebrow="Projects" title="Things I've built">
      <div className="grid gap-6 md:grid-cols-2">
        {projects.map((p) => (
          <article key={p.title} className="reveal group overflow-hidden rounded-3xl bg-ink text-ink-foreground transition duration-300 hover:-translate-y-1.5 hover:shadow-lift">
            <div className="relative aspect-video overflow-hidden bg-ink-card">
              {p.image ? (
                <img src={p.image} alt={p.title} loading="lazy" className="h-full w-full object-cover transition duration-500 group-hover:scale-105" />
              ) : (
                <div className="flex h-full flex-col items-center justify-center gap-2 text-ink-muted">
                  <div className="absolute inset-0 bg-gradient-accent opacity-10" />
                  <ImageIcon size={36} strokeWidth={1.3} />
                  <span className="text-xs">Project image placeholder</span>
                </div>
              )}
            </div>
            <div className="p-7">
              <h3 className="text-xl font-bold">{p.title}</h3>
              <p className="mt-3 leading-relaxed text-ink-muted">{p.description}</p>
              <div className="mt-5 flex flex-wrap gap-2">
                {p.tech.map((t) => <span key={t} className="rounded-full border border-lavender/30 px-3 py-1 text-xs text-lavender">{t}</span>)}
              </div>
              <div className="mt-6 flex flex-wrap gap-5 border-t border-ink-card pt-5">
                <LinkBtn href={p.github}><Github size={16} /> GitHub</LinkBtn>
                {p.demo !== undefined && <LinkBtn href={p.demo}><ExternalLink size={16} /> Live demo</LinkBtn>}
              </div>
            </div>
          </article>
        ))}
      </div>
    </Section>
  );
}

function Contact() {
  const items = [
    { label: "Email", icon: Mail, href: contact.email ? `mailto:${contact.email}` : "", text: contact.email || "your-email@example.com" },
    { label: "GitHub", icon: Github, href: contact.github, text: contact.github ? "View profile" : "Add GitHub link" },
    { label: "LinkedIn", icon: Linkedin, href: contact.linkedin, text: contact.linkedin ? "Connect" : "Add LinkedIn link" },
  ];
  return (
    <section id="contact" className="px-5 py-24">
      <div className="reveal mx-auto max-w-4xl rounded-[2rem] bg-ink p-10 text-center text-ink-foreground md:p-16">
        <p className="mb-3 text-sm font-semibold uppercase tracking-[0.2em] text-lavender">Contact</p>
        <h2 className="text-3xl font-bold md:text-4xl">Let's connect</h2>
        <p className="mx-auto mt-4 max-w-lg text-ink-muted">Whether it's a project idea, collaboration, or just a chat about tech — I'd love to hear from you.</p>
        <div className="mt-10 grid gap-4 sm:grid-cols-3">
          {items.map(({ label, icon: Icon, href, text }) => {
            const inner = (<><Icon className="mx-auto mb-3 text-sky" size={24} /><p className="font-semibold">{label}</p><p className="mt-1 truncate text-sm text-ink-muted">{text}</p></>);
            return href ? (
              <a key={label} href={href} target={label === "Email" ? undefined : "_blank"} rel="noreferrer" className="rounded-2xl bg-ink-card p-6 transition hover:-translate-y-1">{inner}</a>
            ) : (
              <div key={label} className="rounded-2xl border border-dashed border-ink-muted/40 bg-ink-card p-6 opacity-80">{inner}</div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

function Index() {
  useReveal();
  return (
    <div className="min-h-screen">
      <Navbar />
      <main>
        <Hero /><About /><Education /><Skills /><Projects /><Contact />
      </main>
      <footer className="border-t border-border px-5 py-8 text-center text-sm text-muted-foreground">
        © {new Date().getFullYear()} {profile.name}. All rights reserved.
      </footer>
    </div>
  );
}
