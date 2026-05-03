import { Button } from "@/components/ui/button";
import {
  ArrowRight,
  ShieldCheck,
  Globe2,
  Sparkles,
  Cpu,
  CheckCircle2,
  Calendar,
  Check,
  X,
  Clock,
  Languages,
  ScrollText,
  Wallet,
} from "lucide-react";
import { useCountUp, useInView } from "@/hooks/use-count-up";

interface CountStatProps {
  to: number;
  suffix?: string;
  prefix?: string;
  decimals?: number;
  label: string;
  className?: string;
  labelClassName?: string;
}

const CountStat = ({ to, suffix = "", prefix = "", decimals = 0, label, className, labelClassName }: CountStatProps) => {
  const { ref, inView } = useInView<HTMLDivElement>();
  const value = useCountUp({ to, start: inView });
  const display = decimals > 0 ? value.toFixed(decimals) : Math.round(value).toString();
  return (
    <div ref={ref}>
      <p className={className ?? "font-display text-2xl font-semibold text-white"}>
        {prefix}
        {display}
        {suffix}
      </p>
      <p className={labelClassName ?? "mt-1 text-xs uppercase tracking-wider text-white/55"}>{label}</p>
    </div>
  );
};

const Nav = () => (
  <header className="sticky top-0 z-40 border-b border-border/60 bg-background/85 backdrop-blur">
    <div className="container-narrow flex h-20 items-center justify-between gap-6">
      <a href="/" className="flex items-center shrink-0" aria-label="Mars Consulting — home">
        <img src={`${import.meta.env.BASE_URL}mars-logo.png`} alt="Mars Consulting" className="h-11 w-auto" />
      </a>
      <nav className="hidden items-center gap-7 md:flex">
        {[
          ["EOR", "#eor"],
          ["HR for AI Companies", "#hr-ai"],
          ["AI Innovation Lab", "#ai-lab"],
          ["About", "#about"],
          ["Contact", "#contact"],
        ].map(([label, href]) => (
          <a
            key={label}
            href={href}
            className="text-sm font-medium leading-none text-muted-foreground hover:text-foreground transition-colors"
          >
            {label}
          </a>
        ))}
      </nav>
      <div className="flex items-center gap-2 shrink-0">
        <Button
          asChild
          className="h-10 px-5 text-sm bg-accent text-accent-foreground hover:bg-accent/90"
        >
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
    <div className="pointer-events-none absolute -top-32 -left-24 h-[420px] w-[420px] rounded-full bg-accent/25 blur-3xl animate-blob-drift" />
    <div className="pointer-events-none absolute -bottom-24 right-0 h-[380px] w-[380px] rounded-full bg-white/10 blur-3xl animate-blob-drift [animation-delay:-7s]" />
    <div className="container-narrow relative grid gap-12 py-20 lg:grid-cols-[1.15fr_1fr] lg:py-28">
      <div className="animate-fade-up">
        <span className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-3 py-1 text-xs font-medium uppercase tracking-[0.16em] text-white/80">
          <span className="h-1.5 w-1.5 rounded-full bg-accent" />
          Since 2009 · 17 years in Singapore
        </span>
        <h1 className="mt-6 font-display text-4xl font-semibold leading-[1.05] text-white sm:text-5xl lg:text-[64px]">
          The EOR & HR partner for <span className="text-accent">Southeast Asia's AI era.</span>
        </h1>
        <p className="mt-6 max-w-xl text-base text-white/75 sm:text-lg">
          Hire, pay and stay compliant in 8 APAC markets — without setting up an entity.
          One Singapore-licensed partner running this since 2009, now built for AI-native teams.
        </p>
        <div className="mt-8 flex flex-wrap items-center gap-3">
          <Button asChild size="lg" className="bg-accent text-accent-foreground hover:bg-accent/90">
            <a href="#contact">
              Book a 20-min EOR call <ArrowRight />
            </a>
          </Button>
          <Button asChild size="lg" variant="outline" className="border-white/25 bg-transparent text-white hover:bg-white/10 hover:text-white">
            <a href="#about">Why Mars</a>
          </Button>
        </div>
        <div className="mt-12 grid grid-cols-3 gap-6 border-t border-white/10 pt-8 max-w-md">
          <CountStat to={17} label="Years in Singapore" />
          <CountStat to={8} label="APAC markets" />
          <CountStat to={100} suffix="+" label="Employers served" />
        </div>
      </div>

      {/* Service deliverable preview — monthly compliance snapshot */}
      <div className="relative animate-fade-up [animation-delay:120ms]">
        <div className="rounded-2xl border border-white/10 bg-white/5 p-5 shadow-elevated backdrop-blur-sm">
          <div className="flex items-center justify-between pb-4">
            <div>
              <p className="text-[10px] font-medium uppercase tracking-[0.16em] text-white/55">Monthly compliance snapshot</p>
              <p className="mt-0.5 text-xs text-white/45">Sample · April 2026 · Client A (anonymised)</p>
            </div>
            <span className="rounded-full bg-accent/15 px-2.5 py-1 text-[10px] font-medium uppercase tracking-wider text-accent">On time</span>
          </div>
          <div className="rounded-xl bg-background p-5 text-foreground">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-xs text-muted-foreground">Headcount under management</p>
                <p className="font-display text-3xl font-semibold">128</p>
              </div>
              <span className="rounded-full bg-accent/10 px-2.5 py-1 text-xs font-medium text-accent">+12 this month</span>
            </div>
            <div className="mt-5 space-y-2">
              {[
                ["Singapore", "42 employees", "CPF · IR8A filed"],
                ["Indonesia", "31 employees", "BPJS · PPh21 filed"],
                ["Vietnam", "24 employees", "SI · PIT filed"],
                ["Malaysia", "18 employees", "EPF · SOCSO filed"],
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
            <div className="mt-4 flex items-center justify-between border-t border-border pt-3 text-xs text-muted-foreground">
              <span>Payroll run</span>
              <span className="font-medium text-foreground">SGD 412,890 · cleared</span>
            </div>
          </div>
        </div>
        <div className="absolute -bottom-5 -left-5 hidden rounded-xl border border-border bg-card p-3 shadow-card md:block">
          <div className="flex items-center gap-2">
            <ShieldCheck className="h-4 w-4 text-accent" />
            <span className="text-xs font-medium text-foreground">3 SG licences · 0 statutory misses</span>
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
  featured?: boolean;
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
    cta: "Get an EOR quote",
    priority: "primary",
    featured: true,
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
    <article
      id={p.id}
      className={`group relative flex flex-col overflow-hidden rounded-2xl border bg-card p-7 transition-all hover:-translate-y-0.5 hover:shadow-elevated ${
        p.featured
          ? "border-accent/40 shadow-elevated ring-1 ring-accent/20"
          : "border-border shadow-card"
      }`}
    >
      {p.featured ? (
        <span className="pointer-events-none absolute inset-x-0 top-0 h-1 bg-gradient-to-r from-accent/0 via-accent to-accent/0" />
      ) : null}
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
      <div className="mt-auto pt-7 border-t border-border">
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
      <p className="mt-8 text-sm text-muted-foreground">
        Also available on request: contingent recruiting and Asia BD outsourcing —{" "}
        <a href="#contact" className="font-medium text-foreground underline-offset-4 hover:underline">talk to us</a>.
      </p>
    </div>
  </section>
);

const LogoMarquee = () => {
  const items = [
    "AI / ML",
    "Series-B AI co · SG ↔ JKT",
    "Listed industrial group · ID payroll",
    "US scale-up · VN engineers",
    "Stealth foundation-model team",
    "Asia private credit fund",
    "Cross-border DTC brand",
    "Tech & SaaS",
    "Healthcare",
    "Manufacturing",
  ];
  const loop = [...items, ...items];
  return (
    <section className="border-y border-border bg-background py-6 overflow-hidden">
      <div className="container-narrow flex items-center gap-6">
        <span className="shrink-0 text-xs font-medium uppercase tracking-[0.18em] text-muted-foreground">
          100+ employers · since 2009
        </span>
        <div className="relative flex-1 overflow-hidden [mask-image:linear-gradient(to_right,transparent,black_8%,black_92%,transparent)]">
          <div className="flex w-max animate-marquee-x gap-10 will-change-transform">
            {loop.map((label, i) => (
              <span
                key={i}
                className="flex items-center gap-2 whitespace-nowrap text-sm font-medium text-foreground/70"
              >
                <span className="h-1.5 w-1.5 rounded-full bg-accent" />
                {label}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

const COUNTRIES: { code: string; name: string; payroll: string; x: number; y: number }[] = [
  { code: "IN", name: "India", payroll: "EPF · ESI", x: 8, y: 42 },
  { code: "TH", name: "Thailand", payroll: "SSO · PIT", x: 32, y: 36 },
  { code: "HK", name: "Hong Kong", payroll: "MPF", x: 62, y: 22 },
  { code: "VN", name: "Vietnam", payroll: "SI · PIT", x: 46, y: 44 },
  { code: "PH", name: "Philippines", payroll: "SSS · PhilHealth", x: 78, y: 44 },
  { code: "MY", name: "Malaysia", payroll: "EPF · SOCSO", x: 38, y: 60 },
  { code: "SG", name: "Singapore", payroll: "CPF · IR8A", x: 44, y: 68 },
  { code: "ID", name: "Indonesia", payroll: "BPJS · PPh21", x: 52, y: 84 },
];

const CountriesMap = () => (
  <section className="relative overflow-hidden bg-primary py-24 text-primary-foreground">
    <div
      className="pointer-events-none absolute inset-0 opacity-[0.06]"
      style={{
        backgroundImage:
          "radial-gradient(hsl(var(--primary-foreground)) 1px, transparent 1px)",
        backgroundSize: "32px 32px",
      }}
    />
    <div className="pointer-events-none absolute -top-20 right-1/4 h-96 w-96 rounded-full bg-accent/15 blur-3xl animate-blob-drift" />
    <div className="container-narrow relative grid gap-12 lg:grid-cols-[1fr_1.2fr] lg:items-center">
      <div>
        <p className="eyebrow text-white/60">Coverage</p>
        <h2 className="mt-3 font-display text-3xl font-semibold sm:text-4xl">
          Hire compliantly across 8 APAC markets — under one Singapore contract.
        </h2>
        <p className="mt-5 max-w-lg text-white/70">
          We've been running payroll, statutory filings and employment contracts in these markets since 2009.
          You stay the operator; we stay the legal employer.
        </p>
        <div className="mt-8 grid grid-cols-3 gap-y-3 max-w-sm">
          <CountStat
            to={5}
            suffix=" days"
            label="Onboarding"
            className="font-display text-2xl font-semibold text-white"
            labelClassName="mt-1 text-xs uppercase tracking-wider text-white/55"
          />
          <CountStat
            to={0}
            label="Statutory misses"
            className="font-display text-2xl font-semibold text-white"
            labelClassName="mt-1 text-xs uppercase tracking-wider text-white/55"
          />
          <CountStat
            to={3}
            label="SG licences"
            className="font-display text-2xl font-semibold text-white"
            labelClassName="mt-1 text-xs uppercase tracking-wider text-white/55"
          />
        </div>
      </div>
      <div className="relative aspect-[4/3] rounded-2xl border border-white/10 bg-white/[0.03] p-2 shadow-elevated">
        <div
          className="absolute inset-2 rounded-xl"
          style={{
            backgroundImage:
              "radial-gradient(rgba(255,255,255,0.18) 1px, transparent 1px)",
            backgroundSize: "16px 16px",
          }}
        />
        {COUNTRIES.map((c, i) => (
          <div
            key={c.code}
            className="group absolute -translate-x-1/2 -translate-y-1/2"
            style={{ left: `${c.x}%`, top: `${c.y}%` }}
          >
            <span
              className="absolute inset-0 -m-2 rounded-full bg-accent/40 animate-pulse-ring"
              style={{ animationDelay: `${(i * 0.3).toFixed(2)}s` }}
            />
            <span className="relative grid h-7 w-7 place-items-center rounded-full bg-accent text-[10px] font-bold text-accent-foreground shadow-elevated">
              {c.code}
            </span>
            <div className="pointer-events-none absolute left-1/2 top-full z-10 mt-2 -translate-x-1/2 whitespace-nowrap rounded-md bg-background px-2.5 py-1.5 text-[11px] font-medium text-foreground opacity-0 shadow-elevated transition-opacity group-hover:opacity-100">
              {c.name} · {c.payroll}
            </div>
          </div>
        ))}
      </div>
    </div>
  </section>
);

const COMPARE_ROWS = [
  {
    label: "Time to hire #1 employee",
    icon: Clock,
    entity: "3–9 months",
    contractor: "1–2 weeks",
    mars: "5 working days",
  },
  {
    label: "Local employment contract",
    icon: Languages,
    entity: "You draft it",
    contractor: "Not employment",
    mars: "Local-language contract, IP & NDA",
  },
  {
    label: "Payroll & statutory filings",
    icon: ScrollText,
    entity: "You run + file",
    contractor: "Worker self-files",
    mars: "CPF/EPF/BPJS/MPF — we file",
  },
  {
    label: "Misclassification risk",
    icon: ShieldCheck,
    entity: "Low (entity)",
    contractor: "High",
    mars: "Low (we are the employer)",
  },
  {
    label: "Setup cost",
    icon: Wallet,
    entity: "USD 15–40k + ongoing",
    contractor: "None",
    mars: "Per-employee monthly fee",
  },
];

const Comparison = () => (
  <section className="bg-secondary/40 py-24">
    <div className="container-narrow">
      <div className="max-w-2xl">
        <p className="eyebrow">EOR vs Entity vs Contractor</p>
        <h2 className="mt-3 font-display text-3xl font-semibold sm:text-4xl">
          Three ways to put someone on the ground in Asia.
        </h2>
        <p className="mt-4 text-muted-foreground">
          Set up your own entity, hire as a contractor, or use Mars as your Employer of Record.
          Here's how the three compare on the numbers that matter.
        </p>
      </div>
      <div className="mt-12 overflow-hidden rounded-2xl border border-border bg-card shadow-card">
        <div className="grid grid-cols-[1.4fr_1fr_1fr_1.2fr] border-b border-border bg-muted/40 text-xs font-semibold uppercase tracking-wider text-muted-foreground">
          <div className="px-5 py-4">Dimension</div>
          <div className="px-5 py-4">Set up local entity</div>
          <div className="px-5 py-4">Hire as contractor</div>
          <div className="px-5 py-4 bg-primary text-primary-foreground">Mars EOR</div>
        </div>
        {COMPARE_ROWS.map((row, i) => {
          const RowIcon = row.icon;
          return (
            <div
              key={row.label}
              className={`grid grid-cols-[1.4fr_1fr_1fr_1.2fr] text-sm ${i % 2 === 1 ? "bg-muted/20" : ""}`}
            >
              <div className="flex items-center gap-2.5 border-t border-border px-5 py-4 font-medium text-foreground">
                <RowIcon className="h-4 w-4 text-muted-foreground" />
                {row.label}
              </div>
              <div className="flex items-center gap-2 border-t border-border px-5 py-4 text-muted-foreground">
                <X className="h-4 w-4 text-muted-foreground/60" />
                {row.entity}
              </div>
              <div className="flex items-center gap-2 border-t border-border px-5 py-4 text-muted-foreground">
                <X className="h-4 w-4 text-muted-foreground/60" />
                {row.contractor}
              </div>
              <div className="flex items-center gap-2 border-t border-border bg-primary/5 px-5 py-4 font-medium text-foreground">
                <Check className="h-4 w-4 text-accent" />
                {row.mars}
              </div>
            </div>
          );
        })}
      </div>
      <div className="mt-8 flex flex-wrap items-center gap-3">
        <Button asChild className="bg-accent text-accent-foreground hover:bg-accent/90">
          <a href="#contact">Get a country-by-country quote <ArrowRight /></a>
        </Button>
        <span className="text-sm text-muted-foreground">Average response: under 4 business hours</span>
      </div>
    </div>
  </section>
);

const HowItWorks = () => {
  const steps = [
    {
      n: "01",
      t: "Tell us who and where",
      d: "Share country, role, salary band and start date. We'll quote you within 4 business hours, with full statutory cost breakdown.",
      visual: (
        <div className="space-y-2.5">
          <div className="flex items-center justify-between rounded-md border border-border/60 bg-muted/40 px-3 py-2 text-xs">
            <span className="text-muted-foreground">Country</span>
            <span className="font-medium">Indonesia</span>
          </div>
          <div className="flex items-center justify-between rounded-md border border-border/60 bg-muted/40 px-3 py-2 text-xs">
            <span className="text-muted-foreground">Role</span>
            <span className="font-medium">Senior ML Engineer</span>
          </div>
          <div className="flex items-center justify-between rounded-md border border-border/60 bg-muted/40 px-3 py-2 text-xs">
            <span className="text-muted-foreground">Salary band</span>
            <span className="font-medium">IDR 65–85M / month</span>
          </div>
        </div>
      ),
    },
    {
      n: "02",
      t: "We draft local contracts",
      d: "Compliant employment agreement, IP assignment and NDA in local language. Equity acknowledgements (RSU / ISO / phantom) handled if you have them.",
      visual: (
        <div className="rounded-md border border-border/60 bg-muted/30 p-3 text-xs">
          <p className="font-display text-sm font-semibold text-foreground">Perjanjian Kerja</p>
          <p className="mt-1 text-muted-foreground">PASAL 1 — Pihak yang membuat perjanjian…</p>
          <div className="mt-3 grid grid-cols-2 gap-2 text-[10px]">
            <span className="rounded border border-accent/40 bg-accent/10 px-2 py-1 text-accent">IP assigned</span>
            <span className="rounded border border-accent/40 bg-accent/10 px-2 py-1 text-accent">NDA · 24 mo</span>
          </div>
        </div>
      ),
    },
    {
      n: "03",
      t: "Employee signs & onboards",
      d: "Statutory accounts opened, equipment shipped, benefits enrolled. Most employees are fully onboarded inside 5 working days.",
      visual: (
        <div className="space-y-2 text-xs">
          {["Contract signed", "Tax ID & social security registered", "Equipment dispatched", "Health benefits active"].map((s) => (
            <div key={s} className="flex items-center gap-2 rounded-md border border-border/60 bg-muted/40 px-3 py-2">
              <CheckCircle2 className="h-3.5 w-3.5 text-accent" />
              <span className="font-medium">{s}</span>
            </div>
          ))}
        </div>
      ),
    },
    {
      n: "04",
      t: "We run payroll & compliance",
      d: "One monthly invoice from Mars. CPF / EPF / BPJS / MPF and equivalents filed in each market — we send you the report; you do nothing.",
      visual: (
        <div className="space-y-2 text-xs">
          <div className="flex items-end gap-1.5 h-16">
            {[55, 70, 60, 85, 75, 90].map((h, i) => (
              <span
                key={i}
                className="flex-1 origin-bottom rounded-sm bg-primary/15 animate-bar-grow"
                style={{ height: `${h}%`, animationDelay: `${i * 80}ms` }}
              />
            ))}
          </div>
          <div className="flex items-center justify-between rounded-md border border-border/60 bg-muted/40 px-3 py-2">
            <span className="text-muted-foreground">May payroll</span>
            <span className="font-medium">SGD 412,890 · cleared</span>
          </div>
        </div>
      ),
    },
  ];
  return (
    <section className="border-y border-border bg-background py-24">
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
        <ol className="mt-14 space-y-12">
          {steps.map((s, i) => (
            <li
              key={s.n}
              className={`grid items-center gap-8 lg:grid-cols-[1fr_1fr] lg:gap-16 ${i % 2 === 1 ? "lg:[&>*:first-child]:order-2" : ""}`}
            >
              <div>
                <span className="font-display text-sm font-semibold uppercase tracking-wider text-accent">Step {s.n}</span>
                <h3 className="mt-3 font-display text-2xl font-semibold text-foreground">{s.t}</h3>
                <p className="mt-3 max-w-md text-muted-foreground">{s.d}</p>
              </div>
              <div className="rounded-2xl border border-border bg-card p-6 shadow-card">
                {s.visual}
              </div>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
};

const Clients = () => {
  const industries = ["AI / ML", "Tech & SaaS", "Finance", "Manufacturing", "Retail & e-commerce", "Healthcare"];
  const engagements = [
    { sector: "AI / ML", label: "Series-B AI co", note: "Singapore + Jakarta · 12 hires in 2025" },
    { sector: "Tech & SaaS", label: "US scale-up", note: "Vietnam EOR · 8 engineers" },
    { sector: "Manufacturing", label: "Listed industrial group", note: "Indonesia payroll · 60+ HC" },
    { sector: "Finance", label: "Asia private credit fund", note: "SG hiring + secondment" },
    { sector: "AI / ML", label: "Stealth foundation-model team", note: "SG ↔ JP confidential search" },
    { sector: "Retail & e-commerce", label: "Cross-border DTC brand", note: "Malaysia & Thailand EOR" },
  ];
  return (
    <section className="bg-background py-24">
      <div className="container-narrow">
        <p className="eyebrow">Working with operators across APAC</p>
        <h2 className="mt-3 max-w-2xl font-display text-3xl font-semibold sm:text-4xl">
          From Series-A AI startups to listed manufacturers.
        </h2>
        <div className="mt-10 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
          {engagements.map((e) => (
            <div key={e.label} className="rounded-xl border border-border bg-card p-5 shadow-card">
              <p className="text-[10px] font-medium uppercase tracking-wider text-muted-foreground">{e.sector}</p>
              <p className="mt-1.5 font-display text-base font-semibold text-foreground">{e.label}</p>
              <p className="mt-1 text-sm text-muted-foreground">{e.note}</p>
            </div>
          ))}
        </div>
        <div className="mt-8 flex flex-wrap items-center gap-2">
          {industries.map((i) => (
            <span key={i} className="rounded-full border border-border bg-card px-3 py-1 text-xs font-medium text-foreground/80">
              {i}
            </span>
          ))}
          <span className="text-xs text-muted-foreground">· Client logos available under NDA on request</span>
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
        <img src={`${import.meta.env.BASE_URL}mars-logo.png`} alt="Mars Consulting" className="h-12 w-auto" />
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
    <LogoMarquee />
    <LicenseStrip />
    <CountriesMap />
    <Pillars />
    <Comparison />
    <HowItWorks />
    <Clients />
    <Testimonial />
    <Contact />
    <Footer />
  </main>
);

export default Index;
