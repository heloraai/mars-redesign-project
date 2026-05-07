import { useEffect } from "react";
import {
  ArrowRight,
  MessageCircle,
  Calculator,
  Users,
  ShieldCheck,
  CheckCircle2,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { withBase } from "@/lib/href";
import { SiteHeader } from "@/components/site/SiteHeader";
import { SiteFooter } from "@/components/site/SiteFooter";

const setMeta = (name: string, content: string, attr: "name" | "property" = "name") => {
  let el = document.querySelector<HTMLMetaElement>(`meta[${attr}='${name}']`);
  if (!el) {
    el = document.createElement("meta");
    el.setAttribute(attr, name);
    document.head.appendChild(el);
  }
  el.setAttribute("content", content);
};

const usePageMeta = () => {
  useEffect(() => {
    const prevTitle = document.title;
    document.title = "AI Innovation & HR Automation — Mars Consulting";
    setMeta(
      "description",
      "AI workflow automation for distributed HR teams in Southeast Asia. WhatsApp-based MC ingestion, AI payroll preprocessing, and embedded AI consulting.",
    );
    return () => {
      document.title = prevTitle;
    };
  }, []);
};

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
    <div className="container-narrow relative py-20 lg:py-28">
      <span className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-3 py-1 text-xs font-medium uppercase tracking-[0.16em] text-white/80">
        <span className="h-1.5 w-1.5 rounded-full bg-accent" />
        AI Innovation · Since 2026
      </span>
      <h1 className="mt-6 max-w-4xl font-display text-4xl font-semibold leading-[1.05] text-white sm:text-5xl lg:text-[60px]">
        Automate the HR and operational workflows{" "}
        <span className="text-accent">behind your hires</span>
      </h1>
      <p className="mt-6 max-w-3xl text-base text-white/75 sm:text-lg">
        We help clients automate the high-friction administrative processes that surround
        distributed teams: medical leave ingestion via WhatsApp, AI-driven payroll preprocessing,
        and embedded AI consultants for teams building internal automation capabilities.
      </p>
      <div className="mt-8 flex flex-wrap items-center gap-3">
        <Button asChild size="lg" className="bg-accent text-accent-foreground hover:bg-accent/90">
          <a href={withBase("/#contact")}>
            Talk to the AI Team <ArrowRight />
          </a>
        </Button>
        <Button
          asChild
          size="lg"
          variant="outline"
          className="border-white/25 bg-transparent text-white hover:bg-white/10 hover:text-white"
        >
          <a href="#capabilities">See Capabilities</a>
        </Button>
      </div>
    </div>
  </section>
);

interface Capability {
  title: string;
  body: string;
  bullets: string[];
  icon: React.ComponentType<{ className?: string }>;
}

const CAPABILITIES: Capability[] = [
  {
    title: "WhatsApp HR Automation Bot",
    body:
      "A secure, WhatsApp-based automation bot functioning as an AI-driven digital employee. Employees submit images of medical certificates or expense receipts directly via WhatsApp; OCR + LLM-driven structured extraction identifies dates, clinic names, diagnosis codes, and rest durations.",
    bullets: [
      "MC processing: 14 days → 3 minutes",
      "Real-time leave balance updates",
      "Direct API push into HRIS / payroll",
    ],
    icon: MessageCircle,
  },
  {
    title: "AI Payroll Preprocessing",
    body:
      "AI calculation engines that process raw operational data — POS feeds, attendance logs, commission triggers — into auditable pre-payroll files. Decoupled from final financial execution to preserve immutable audit trails for statutory reporting.",
    bullets: [
      "Tiered commission structures across 40+ locations",
      "Pre-payroll cycle time: 5 days → 4 hours",
      "Cryptographically hashed adjustment ledger",
    ],
    icon: Calculator,
  },
  {
    title: "Embedded AI Consultants",
    body:
      "Senior AI consultants and prompt engineers deployed inside your team. Fractional Head of AI deployable within 2 weeks. Build internal automation capabilities without hiring a full AI team.",
    bullets: [
      "Fractional Head of AI · 2-week deployment",
      "Workflow automation pods",
      "AI readiness audit and rollout playbook",
    ],
    icon: Users,
  },
];

const Capabilities = () => (
  <section id="capabilities" className="bg-background py-24">
    <div className="container-narrow">
      <div className="max-w-2xl">
        <p className="eyebrow">What we build</p>
        <h2 className="mt-3 font-display text-3xl font-semibold sm:text-4xl">
          Three capabilities. One operating layer.
        </h2>
      </div>
      <div className="mt-12 grid gap-6 md:grid-cols-3">
        {CAPABILITIES.map((c) => {
          const Icon = c.icon;
          return (
            <article
              key={c.title}
              className="flex flex-col rounded-2xl border border-border bg-card p-7 shadow-card transition-all hover:-translate-y-0.5 hover:shadow-elevated"
            >
              <span className="grid h-11 w-11 place-items-center rounded-lg bg-primary text-primary-foreground">
                <Icon className="h-5 w-5" />
              </span>
              <h3 className="mt-6 font-display text-xl font-semibold leading-tight text-foreground">
                {c.title}
              </h3>
              <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{c.body}</p>
              <ul className="mt-5 space-y-2.5">
                {c.bullets.map((b) => (
                  <li key={b} className="flex items-start gap-2.5 text-sm text-foreground/85">
                    <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-accent" />
                    <span>{b}</span>
                  </li>
                ))}
              </ul>
            </article>
          );
        })}
      </div>
    </div>
  </section>
);

const Compliance = () => (
  <section className="border-t border-border bg-secondary/40 py-24">
    <div className="container-narrow grid gap-10 lg:grid-cols-[1fr_1.4fr] lg:items-start">
      <div>
        <p className="eyebrow">Data residency &amp; governance</p>
        <h2 className="mt-3 font-display text-3xl font-semibold sm:text-4xl">
          PDPA-aligned. Closed-loop. Zero training leakage.
        </h2>
      </div>
      <div className="space-y-5 text-base leading-relaxed text-muted-foreground">
        <p>
          Deploying LLMs in human resources requires rigorous data governance. Our AI architecture
          operates strictly on enterprise-grade, closed-loop model instances. Client HR data is
          never used for foundational model training.
        </p>
        <p>
          We enforce strict data residency protocols, ensuring that all processing and storage of
          personally identifiable information occurs on localised, sovereign servers aligned with
          the client&rsquo;s compliance directives. Sensitive fields undergo programmatic
          anonymisation and tokenisation prior to LLM processing.
        </p>
        <div className="flex items-start gap-3 rounded-xl border border-border bg-card p-5 shadow-card">
          <span className="grid h-10 w-10 shrink-0 place-items-center rounded-lg bg-primary/5 text-primary">
            <ShieldCheck className="h-5 w-5" />
          </span>
          <div>
            <p className="font-display text-base font-semibold text-foreground">
              PDPA &middot; Singapore data residency
            </p>
            <p className="mt-1 text-sm text-muted-foreground">
              Confidentiality controls remain unbroken while realising the operational velocity of
              generative AI.
            </p>
          </div>
        </div>
      </div>
    </div>
  </section>
);

const FAQ_ITEMS = [
  {
    q: "How does the WhatsApp-based HR automation bot handle ingestion and structured extraction?",
    a:
      "Our AI workflow automation architecture resolves high-friction administrative processes for distributed teams in Southeast Asia. We deploy a secure, WhatsApp-based automation bot functioning as an AI-driven digital employee. The ingestion flow begins with employees submitting images of medical certificates or expense receipts directly via WhatsApp. The system utilises advanced OCR and LLM-driven structured extraction to identify dates, clinic names, diagnosis codes, and rest durations. This extracted data is verified against statutory limits and automatically pushed via API into the core HRIS and payroll system handoff queue. This eliminates manual data entry, guarantees real-time leave balance updates, and ensures audit-ready compliance.",
  },
  {
    q: "How does AI Workflow Automation integrate with statutory payroll cycles without breaking audit trails?",
    a:
      "Integrating AI workflow automation into statutory payroll requires a zero-fault tolerance architecture. We decouple the AI processing layer from the final financial execution layer to preserve immutable audit trails. When our AI systems process raw operational data, the output is staged in a pre-payroll validation environment. The payroll system handoff is strictly permissioned; the AI generates a structured, cryptographically hashed ledger of proposed adjustments. Human payroll controllers review this deterministic output against established variance thresholds before committing the run. This guarantees that while AI handles the computational volume, statutory financial reporting and tax filings remain governed by verifiable, auditable approval matrices.",
  },
  {
    q: "What data residency and confidentiality controls exist for LLM-mediated HR data?",
    a:
      "Deploying LLMs in human resources necessitates rigorous data governance to satisfy multi-jurisdictional privacy laws, particularly Singapore's PDPA. Our AI architecture operates strictly on enterprise-grade, closed-loop model instances. Client HR data is never utilised for foundational model training. We enforce strict data residency protocols, ensuring that all processing and storage of personally identifiable information occurs on localised, sovereign servers aligned with the client's compliance directives. Prior to LLM processing, sensitive fields undergo programmatic anonymisation and tokenisation. This ensures that confidentiality controls remain unbroken, neutralising the risk of data leakage while realising the operational velocity of generative AI.",
  },
];

const FAQ = () => (
  <section id="faq" className="border-t border-border bg-background py-24">
    <div className="container-narrow">
      <div className="max-w-2xl">
        <p className="eyebrow">FAQ</p>
        <h2 className="mt-3 font-display text-3xl font-semibold sm:text-4xl">
          Questions on AI in HR
        </h2>
      </div>
      <Accordion
        type="single"
        collapsible
        className="mt-10 grid gap-3 rounded-2xl border border-border bg-card p-3 shadow-card"
      >
        {FAQ_ITEMS.map((item, i) => (
          <AccordionItem
            key={i}
            value={`ai-faq-${i}`}
            className="rounded-xl border border-border/70 bg-background last:border-b"
          >
            <AccordionTrigger className="px-5 text-left text-base font-medium text-foreground hover:no-underline">
              {item.q}
            </AccordionTrigger>
            <AccordionContent className="px-5 text-sm leading-relaxed text-muted-foreground">
              {item.a}
            </AccordionContent>
          </AccordionItem>
        ))}
      </Accordion>
    </div>
  </section>
);

const CTABanner = () => (
  <section className="bg-background py-24">
    <div className="container-narrow">
      <div className="overflow-hidden rounded-3xl border border-border bg-gradient-hero p-10 text-primary-foreground shadow-elevated lg:p-14">
        <div className="grid gap-8 lg:grid-cols-[1.4fr_1fr] lg:items-center">
          <div>
            <h2 className="font-display text-3xl font-semibold sm:text-4xl">
              Apply as a pilot partner
            </h2>
            <p className="mt-4 max-w-xl text-white/75">
              Founding-partner pricing for early deployments. We&rsquo;re onboarding a small
              cohort of pilot partners to co-design the next generation of HR automation.
            </p>
          </div>
          <div className="lg:justify-self-end">
            <Button
              asChild
              size="lg"
              className="bg-accent text-accent-foreground hover:bg-accent/90"
            >
              <a href={withBase("/#contact")}>
                Apply as Pilot Partner <ArrowRight />
              </a>
            </Button>
          </div>
        </div>
      </div>
    </div>
  </section>
);

const AIInnovation = () => {
  usePageMeta();
  return (
    <main className="min-h-screen bg-background">
      <SiteHeader />
      <Hero />
      <Capabilities />
      <Compliance />
      <FAQ />
      <CTABanner />
      <SiteFooter />
    </main>
  );
};

export default AIInnovation;
