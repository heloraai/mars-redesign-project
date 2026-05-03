import { Button } from "@/components/ui/button";
import { ArrowRight, ShieldCheck, Globe2, Sparkles, Cpu, CheckCircle2, Building2, Calendar } from "lucide-react";

const Nav = () => (
  <header className="sticky top-0 z-40 border-b border-border/60 bg-background/85 backdrop-blur">
    <div className="container-narrow flex h-16 items-center justify-between">
      <a href="/" className="flex items-center gap-2">
        <span className="grid h-8 w-8 place-items-center rounded-md bg-primary text-primary-foreground font-display font-semibold">M</span>
        <span className="font-display text-lg font-semibold tracking-tight">Mars Consulting</span>
      </a>
      <nav className="hidden items-center gap-8 md:flex">
        {[
          ["EOR", "#eor"],
          ["HR for AI Companies", "#hr-ai"],
          ["AI Innovation Lab", "#ai-lab"],
          ["About", "#about"],
          ["Contact", "#contact"],
        ].map(([label, href]) => (
          <a key={label} href={href} className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors">
            {label}
          </a>
        ))}
      </nav>
      <div className="flex items-center gap-2">
        <Button asChild variant="ghost" size="sm" className="hidden sm:inline-flex">
          <a href="#contact">Sign in</a>
        </Button>
        <Button asChild size="sm" className="bg-accent text-accent-foreground hover:bg-accent/90">
          <a href="#contact">Book a call</a>
        </Button>
      </div>
    </div>
  </header>
);

const Hero = () => (
  <section className="relative overflow-hidden bg-gradient-hero text-primary-foreground">
    <div
      className="pointer-events-none absolute inset-0 opacity-[0.07]"
      style={{
        backgroundImage:
          "radial-gradient(hsl(var(--primary-foreground)) 1px, transparent 1px)",
        backgroundSize: "28px 28px",
      }}
    />
    <div className="container-narrow relative grid gap-12 py-20 lg:grid-cols-[1.15fr_1fr] lg:py-28">
      <div className="animate-fade-up">
        <span className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-3 py-1 text-xs font-medium uppercase tracking-[0.16em] text-white/80">
          <span className="h-1.5 w-1.5 rounded-full bg-accent" />
          Since 2009 · 17 years in Singapore
        </span>
        <h1 className="mt-6 font-display text-4xl font-semibold leading-[1.05] text-white sm:text-5xl lg:text-[64px]">
          Your EOR & HR partner across <span className="text-accent">Southeast Asia.</span>
        </h1>
        <p className="mt-6 max-w-xl text-base text-white/75 sm:text-lg">
          Hire, pay and stay compliant in 8 APAC markets — without setting up an entity.
          Backed by Singapore's MOM EA Licence, MAS Payroll-Service Exemption and ACRA Filing Agent registration.
        </p>
        <div className="mt-8 flex flex-wrap items-center gap-3">
          <Button asChild size="lg" className="bg-accent text-accent-foreground hover:bg-accent/90">
            <a href="#contact">
              Book a 20-min EOR call <ArrowRight />
            </a>
          </Button>
          <Button asChild size="lg" variant="outline" className="border-white/25 bg-transparent text-white hover:bg-white/10 hover:text-white">
            <a href="#eor">See pricing</a>
          </Button>
        </div>
        <dl className="mt-12 grid grid-cols-3 gap-6 border-t border-white/10 pt-8 max-w-md">
          {[
            ["17", "Years"],
            ["8", "APAC markets"],
            ["2,560+", "Hires placed"],
          ].map(([n, l]) => (
            <div key={l}>
              <dt className="font-display text-2xl font-semibold text-white">{n}</dt>
              <dd className="mt-1 text-xs uppercase tracking-wider text-white/55">{l}</dd>
            </div>
          ))}
        </dl>
      </div>

      {/* Dashboard mockup */}
      <div className="relative animate-fade-up [animation-delay:120ms]">
        <div className="rounded-2xl border border-white/10 bg-white/5 p-4 shadow-elevated backdrop-blur-sm">
          <div className="flex items-center gap-1.5 pb-3">
            <span className="h-2.5 w-2.5 rounded-full bg-white/30" />
            <span className="h-2.5 w-2.5 rounded-full bg-white/20" />
            <span className="h-2.5 w-2.5 rounded-full bg-white/15" />
            <span className="ml-3 text-xs text-white/50">app.mars · Workforce</span>
          </div>
          <div className="rounded-xl bg-background p-5 text-foreground">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-xs text-muted-foreground">Active employees</p>
                <p className="font-display text-3xl font-semibold">128</p>
              </div>
              <span className="rounded-full bg-accent/10 px-2.5 py-1 text-xs font-medium text-accent">+12 this month</span>
            </div>
            <div className="mt-5 grid grid-cols-4 gap-1.5">
              {[40, 65, 35, 80, 55, 70, 45, 90, 60, 75, 50, 95].map((h, i) => (
                <div key={i} className="rounded-md bg-primary/10" style={{ height: `${h}px` }} />
              ))}
            </div>
            <div className="mt-5 space-y-2">
              {[
                ["Singapore", "42 employees", "CPF · IR8A"],
                ["Indonesia", "31 employees", "BPJS · PPh21"],
                ["Vietnam", "24 employees", "SI · PIT"],
              ].map(([country, ppl, tax]) => (
                <div key={country} className="flex items-center justify-between rounded-lg border border-border/60 bg-muted/40 px-3 py-2.5">
                  <div className="flex items-center gap-2.5">
                    <Globe2 className="h-4 w-4 text-primary" />
                    <span className="text-sm font-medium">{country}</span>
                  </div>
                  <span className="text-xs text-muted-foreground">{ppl} · {tax}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
        <div className="absolute -bottom-5 -left-5 hidden rounded-xl border border-border bg-card p-3 shadow-card md:block">
          <div className="flex items-center gap-2">
            <CheckCircle2 className="h-4 w-4 text-accent" />
            <span className="text-xs font-medium text-foreground">Payroll run · SGD 412,890 · on time</span>
          </div>
        </div>
      </div>
    </div>
  </section>
);

const LicenseStrip = () => {
  const items = [
    { authority: "Ministry of Manpower", label: "MOM EA Licence", code: "Licence No. 09C2925" },
    { authority: "Monetary Authority of Singapore", label: "Payroll Service Exemption", code: "MAS exempted entity" },
    { authority: "ACRA Singapore", label: "Registered Filing Agent", code: "ACRA-licensed" },
  ];
  return (
    <section className="border-y border-border bg-background">
      <div className="container-narrow py-10">
        <p className="eyebrow text-center">Licensed & regulated in Singapore</p>
        <div className="mt-6 grid gap-4 sm:grid-cols-3">
          {items.map((it) => (
            <div key={it.label} className="flex items-start gap-3 rounded-xl border border-border bg-card p-5 shadow-card">
              <span className="grid h-10 w-10 shrink-0 place-items-center rounded-lg bg-primary/5 text-primary">
                <ShieldCheck className="h-5 w-5" />
              </span>
              <div>
                <p className="text-xs uppercase tracking-wider text-muted-foreground">{it.authority}</p>
                <p className="mt-0.5 font-display text-base font-semibold text-foreground">{it.label}</p>
                <p className="mt-0.5 text-xs text-muted-foreground">{it.code}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

type Pillar = {
  id: string;
  tag: string;
  icon: React.ComponentType<{ className?: string }>;
  title: string;
  blurb: string;
  bullets: string[];
  cta: string;
  priority: string;
};

const PILLARS: Pillar[] = [
  {
    id: "eor",
    tag: "Flagship · P0",
    icon: Globe2,
    title: "EOR / Cross-border employment",
    blurb:
      "Hire full-time talent in 8 APAC markets without registering a local entity. We become the legal employer; you direct the work.",
    bullets: [
      "Coverage: SG · MY · ID · VN · TH · PH · HK · IN",
      "Compliant payroll, CPF/EPF/BPJS/MPF, statutory filings",
      "Employment contracts in local language, IP & NDA included",
      "Onboarding in as little as 5 working days",
    ],
    cta: "See EOR pricing",
    priority: "primary",
  },
  {
    id: "hr-ai",
    tag: "P0 · Available now",
    icon: Cpu,
    title: "HR for AI Companies",
    blurb:
      "A packaged solution for AI startups scaling across borders: research-grade recruiting plus EOR for fast, compliant hiring.",
    bullets: [
      "Recruit ML researchers, applied AI, infra, GTM",
      "EOR + equity-aware contracts (RSU / ISO / phantom)",
      "Cross-border team setup in SG ↔ JP ↔ ID ↔ US",
      "Confidential search for stealth-mode teams",
    ],
    cta: "Talk to the AI HR team",
    priority: "primary",
  },
  {
    id: "ai-lab",
    tag: "Pilot Partner Program",
    icon: Sparkles,
    title: "AI Innovation Lab",
    blurb:
      "Embed senior AI consultants and prompt engineers inside your team. We're currently onboarding founding partners.",
    bullets: [
      "Fractional Head of AI, deployable in 2 weeks",
      "Prompt-engineering & workflow automation pods",
      "AI readiness audit and rollout playbook",
      "Limited slots — founding-partner pricing",
    ],
    cta: "Apply as Pilot Partner",
    priority: "secondary",
  },
];

const PillarCard = ({ p }: { p: Pillar }) => {
  const Icon = p.icon;
  return (
    <article id={p.id} className="group relative flex flex-col rounded-2xl border border-border bg-card p-7 shadow-card transition-all hover:-translate-y-0.5 hover:shadow-elevated">
      <div className="flex items-center justify-between">
        <span className="grid h-11 w-11 place-items-center rounded-lg bg-primary text-primary-foreground">
          <Icon className="h-5 w-5" />
        </span>
        <span className="rounded-full border border-border bg-muted/60 px-2.5 py-0.5 text-[10px] font-medium uppercase tracking-wider text-muted-foreground">
          {p.tag}
        </span>
      </div>
      <h3 className="mt-6 font-display text-xl font-semibold leading-tight text-foreground">{p.title}</h3>
      <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{p.blurb}</p>
      <ul className="mt-5 space-y-2.5">
        {p.bullets.map((b) => (
          <li key={b} className="flex items-start gap-2.5 text-sm text-foreground/85">
            <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-accent" />
            <span>{b}</span>
          </li>
        ))}
      </ul>
      <div className="mt-7 pt-5 border-t border-border">
        <Button
          asChild
          variant={p.priority === "primary" ? "default" : "outline"}
          className={p.priority === "primary" ? "bg-primary text-primary-foreground hover:bg-primary/90" : ""}
        >
          <a href="#contact">
            {p.cta} <ArrowRight />
          </a>
        </Button>
      </div>
    </article>
  );
};

const Pillars = () => (
  <section className="bg-background py-24">
    <div className="container-narrow">
      <div className="max-w-2xl">
        <p className="eyebrow">What we do</p>
        <h2 className="mt-3 font-display text-3xl font-semibold sm:text-4xl">
          Three ways we help you build a compliant team in Asia.
        </h2>
        <p className="mt-4 text-muted-foreground">
          Recruiting and BD outsourcing remain available on request — but our 2026 focus is the three programs below.
        </p>
      </div>
      <div className="mt-12 grid gap-6 lg:grid-cols-3">
        {PILLARS.map((p) => (
          <PillarCard key={p.id} p={p} />
        ))}
      </div>
    </div>
  </section>
);

const HowItWorks = () => {
  const steps = [
    { n: "01", t: "Tell us who and where", d: "Share country, role, salary band and start date." },
    { n: "02", t: "We draft local contracts", d: "Compliant employment, IP, NDA in local language." },
    { n: "03", t: "Employee signs & onboards", d: "Equipment, benefits and statutory accounts in 5 days." },
    { n: "04", t: "We run payroll & compliance", d: "You get one monthly invoice. We file everything else." },
  ];
  return (
    <section className="border-y border-border bg-secondary/40 py-24">
      <div className="container-narrow">
        <div className="flex flex-col gap-3 md:flex-row md:items-end md:justify-between">
          <div className="max-w-xl">
            <p className="eyebrow">How EOR works with Mars</p>
            <h2 className="mt-3 font-display text-3xl font-semibold sm:text-4xl">
              From offer letter to payroll — in one workflow.
            </h2>
          </div>
          <Button asChild variant="outline">
            <a href="#contact">Get a quote <ArrowRight /></a>
          </Button>
        </div>
        <ol className="mt-12 grid gap-5 md:grid-cols-2 lg:grid-cols-4">
          {steps.map((s) => (
            <li key={s.n} className="rounded-xl border border-border bg-card p-6 shadow-card">
              <span className="font-display text-sm font-semibold text-accent">{s.n}</span>
              <h3 className="mt-3 font-display text-lg font-semibold">{s.t}</h3>
              <p className="mt-2 text-sm text-muted-foreground">{s.d}</p>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
};

const Clients = () => {
  const industries = ["AI / ML", "Tech & SaaS", "Finance", "Manufacturing", "Retail", "Government-linked"];
  return (
    <section className="bg-background py-24">
      <div className="container-narrow">
        <p className="eyebrow">Trusted by 100+ employers across APAC</p>
        <h2 className="mt-3 max-w-2xl font-display text-3xl font-semibold sm:text-4xl">
          From Series-A AI startups to listed manufacturers.
        </h2>
        <div className="mt-10 grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-6">
          {Array.from({ length: 12 }).map((_, i) => (
            <div
              key={i}
              className="flex h-20 items-center justify-center rounded-lg border border-border bg-muted/40 text-xs font-medium uppercase tracking-wider text-muted-foreground"
            >
              <Building2 className="mr-2 h-4 w-4 opacity-60" /> Client {i + 1}
            </div>
          ))}
        </div>
        <div className="mt-8 flex flex-wrap gap-2">
          {industries.map((i) => (
            <span key={i} className="rounded-full border border-border bg-card px-3 py-1 text-xs font-medium text-foreground/80">
              {i}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
};

const Testimonial = () => (
  <section id="about" className="bg-primary py-24 text-primary-foreground">
    <div className="container-narrow grid gap-12 lg:grid-cols-2 lg:items-center">
      <div>
        <p className="eyebrow text-white/60">Why Mars</p>
        <h2 className="mt-3 font-display text-3xl font-semibold sm:text-4xl">
          17 years of being the operator behind the operator.
        </h2>
        <p className="mt-5 max-w-lg text-white/75">
          Founded in Singapore in 2009, Mars Consulting has grown from a recruiting boutique into a regional
          employment platform — quietly running hires, payroll and compliance for AI startups, scale-ups and
          government-linked enterprises across Southeast Asia.
        </p>
        <div className="mt-8 grid grid-cols-3 gap-6 border-t border-white/10 pt-8 max-w-md">
          {[["100+", "Global clients"], ["100+", "Consultants"], ["3", "SG licences"]].map(([n, l]) => (
            <div key={l}>
              <p className="font-display text-2xl font-semibold">{n}</p>
              <p className="mt-1 text-xs uppercase tracking-wider text-white/55">{l}</p>
            </div>
          ))}
        </div>
      </div>
      <figure className="rounded-2xl border border-white/10 bg-white/[0.04] p-8">
        <blockquote className="font-display text-xl leading-relaxed text-white/90">
          "Mars onboarded our research team across Singapore and Jakarta in under two weeks. They handled
          everything — contracts, equity acknowledgements, local statutory filings — so we could focus on shipping models."
        </blockquote>
        <figcaption className="mt-6 flex items-center gap-3">
          <span className="grid h-10 w-10 place-items-center rounded-full bg-accent/20 font-display text-sm font-semibold text-accent">A</span>
          <div>
            <p className="text-sm font-medium text-white">Head of People · Series-B AI company</p>
            <p className="text-xs text-white/60">Singapore ↔ Jakarta · 12 hires in 2025</p>
          </div>
        </figcaption>
      </figure>
    </div>
  </section>
);

const Contact = () => (
  <section id="contact" className="bg-background py-24">
    <div className="container-narrow">
      <div className="overflow-hidden rounded-3xl border border-border bg-card shadow-elevated">
        <div className="grid gap-0 lg:grid-cols-[1.1fr_1fr]">
          <div className="bg-gradient-hero p-10 text-primary-foreground lg:p-12">
            <p className="eyebrow text-white/60">Talk to a Singapore-licensed specialist</p>
            <h2 className="mt-3 font-display text-3xl font-semibold sm:text-4xl">
              See if EOR is the right move — in 20 minutes.
            </h2>
            <ul className="mt-8 space-y-3 text-sm text-white/80">
              {[
                "Country-by-country cost breakdown",
                "Sample contract & onboarding checklist",
                "Honest answer on whether you should set up an entity instead",
              ].map((t) => (
                <li key={t} className="flex items-start gap-2.5">
                  <CheckCircle2 className="mt-0.5 h-4 w-4 text-accent" />
                  <span>{t}</span>
                </li>
              ))}
            </ul>
            <div className="mt-10 flex items-center gap-3 text-xs text-white/60">
              <Calendar className="h-4 w-4" /> Average response: under 4 business hours
            </div>
          </div>
          <form className="space-y-4 p-10 lg:p-12" onSubmit={(e) => e.preventDefault()}>
            {[
              { label: "Work email", type: "email", placeholder: "you@company.com" },
              { label: "Company", type: "text", placeholder: "Company name" },
              { label: "Country to hire in", type: "text", placeholder: "e.g. Indonesia" },
              { label: "Number of hires (next 6 months)", type: "number", placeholder: "5" },
            ].map((f) => (
              <div key={f.label}>
                <label className="text-xs font-medium uppercase tracking-wider text-muted-foreground">{f.label}</label>
                <input
                  type={f.type}
                  placeholder={f.placeholder}
                  className="mt-1.5 h-11 w-full rounded-md border border-input bg-background px-3 text-sm focus:outline-none focus:ring-2 focus:ring-ring"
                />
              </div>
            ))}
            <Button type="submit" className="w-full bg-accent text-accent-foreground hover:bg-accent/90" size="lg">
              Book my 20-min call <ArrowRight />
            </Button>
            <p className="text-xs text-muted-foreground">
              We reply within 4 business hours, Singapore time. By submitting you agree to our privacy policy.
            </p>
          </form>
        </div>
      </div>
    </div>
  </section>
);

const Footer = () => (
  <footer className="border-t border-border bg-background py-12">
    <div className="container-narrow grid gap-10 md:grid-cols-[1.5fr_1fr_1fr_1fr]">
      <div>
        <div className="flex items-center gap-2">
          <span className="grid h-8 w-8 place-items-center rounded-md bg-primary text-primary-foreground font-display font-semibold">M</span>
          <span className="font-display text-lg font-semibold">Mars Consulting</span>
        </div>
        <p className="mt-4 max-w-xs text-sm text-muted-foreground">
          Singapore-licensed Employer of Record and HR services across Southeast Asia. Since 2009.
        </p>
      </div>
      {[
        { h: "Solutions", l: ["EOR", "HR for AI Companies", "AI Innovation Lab", "Recruiting & BD"] },
        { h: "Company", l: ["About", "Clients", "Insights", "Careers"] },
        { h: "Compliance", l: ["MOM EA Licence", "MAS Payroll Exemption", "ACRA Filing Agent", "Privacy"] },
      ].map((c) => (
        <div key={c.h}>
          <p className="text-xs font-semibold uppercase tracking-wider text-foreground">{c.h}</p>
          <ul className="mt-4 space-y-2.5">
            {c.l.map((i) => (
              <li key={i}>
                <a href="#" className="text-sm text-muted-foreground hover:text-foreground">{i}</a>
              </li>
            ))}
          </ul>
        </div>
      ))}
    </div>
    <div className="container-narrow mt-12 flex flex-col items-start justify-between gap-3 border-t border-border pt-6 text-xs text-muted-foreground md:flex-row md:items-center">
      <p>© {new Date().getFullYear()} Mars Consulting Pte Ltd. All rights reserved.</p>
      <p>Singapore · Jakarta · Ho Chi Minh City · Kuala Lumpur</p>
    </div>
  </footer>
);

const Index = () => (
  <main className="min-h-screen bg-background">
    <Nav />
    <Hero />
    <LicenseStrip />
    <Pillars />
    <HowItWorks />
    <Clients />
    <Testimonial />
    <Contact />
    <Footer />
  </main>
);

export default Index;
