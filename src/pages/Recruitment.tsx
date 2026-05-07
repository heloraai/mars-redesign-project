import { useEffect } from "react";
import {
  ArrowRight,
  Briefcase,
  Building2,
  Crown,
  Cpu,
  Banknote,
  HeartPulse,
  Factory,
  Building,
  ShoppingBag,
  ScrollText,
  Landmark,
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

const BREADCRUMB_ID = "recruitment-breadcrumb-schema";

const usePageMeta = () => {
  useEffect(() => {
    const prevTitle = document.title;
    document.title = "Recruitment & Executive Search Singapore — Mars Consulting";
    setMeta(
      "description",
      "Permanent placement, contract staffing and confidential C-suite executive search across Singapore and APAC. 2,560+ successful placements. 17 years. MOM-licensed.",
    );
    let script = document.getElementById(BREADCRUMB_ID) as HTMLScriptElement | null;
    if (!script) {
      script = document.createElement("script");
      script.type = "application/ld+json";
      script.id = BREADCRUMB_ID;
      document.head.appendChild(script);
    }
    script.textContent = JSON.stringify({
      "@context": "https://schema.org",
      "@type": "BreadcrumbList",
      itemListElement: [
        {
          "@type": "ListItem",
          position: 1,
          name: "Home",
          item: "https://marsconsulting.com.sg/",
        },
        {
          "@type": "ListItem",
          position: 2,
          name: "Recruitment & Executive Search",
          item: "https://marsconsulting.com.sg/recruitment",
        },
      ],
    });
    return () => {
      document.title = prevTitle;
      document.getElementById(BREADCRUMB_ID)?.remove();
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
        Recruitment & Executive Search
      </span>
      <h1 className="mt-6 max-w-4xl font-display text-4xl font-semibold leading-[1.05] text-white sm:text-5xl lg:text-[60px]">
        Recruitment &amp; Executive Search Across{" "}
        <span className="text-accent">Singapore and APAC</span>
      </h1>
      <p className="mt-6 max-w-3xl text-base text-white/75 sm:text-lg">
        Permanent placement, contract staffing, and confidential C-suite search — delivered by
        practitioners who have placed over 2,560 candidates across technology, financial services,
        healthcare, and manufacturing since 2009.
      </p>
      <div className="mt-8 flex flex-wrap items-center gap-3">
        <Button asChild size="lg" className="bg-accent text-accent-foreground hover:bg-accent/90">
          <a href={withBase("/#contact")}>
            Discuss a Search Mandate <ArrowRight />
          </a>
        </Button>
        <Button
          asChild
          size="lg"
          variant="outline"
          className="border-white/25 bg-transparent text-white hover:bg-white/10 hover:text-white"
        >
          <a href="#process">See Our Process</a>
        </Button>
      </div>
      <p className="mt-6 text-xs uppercase tracking-[0.18em] text-white/55">
        MOM EA Licence No. 09C2925 · 17 years · 8 APAC markets
      </p>
    </div>
  </section>
);

interface TrackCard {
  title: string;
  body: string;
  suitable: string;
  icon: React.ComponentType<{ className?: string }>;
}

const TRACKS: TrackCard[] = [
  {
    title: "Permanent Placement",
    body:
      "Mid-to-senior permanent hires across all industries. We source active and passive candidates, conduct structured interviews, and present a vetted shortlist — not a CV dump.",
    suitable:
      "Manager to Director level · All industries · Singapore and regional roles",
    icon: Briefcase,
  },
  {
    title: "Contract & Temporary Staffing",
    body:
      "Short-term, project-based, and interim hires with full statutory compliance. Particularly effective for BPO project ramps, parental cover, and market-entry headcount before a permanent hire decision.",
    suitable: "3–24 month engagements · Project teams · Market entry",
    icon: Building2,
  },
  {
    title: "Executive & C-Suite Search",
    body:
      "Retained, confidential search for C-suite, VP, and Board-level mandates. We commit to a fully vetted, jurisdiction-ready passive candidate shortlist within a 21-day initial sprint, governed by a milestone-driven SLA.",
    suitable:
      "CEO, CFO, CTO, COO, VP and above · Cross-border mandates · Stealth-mode searches",
    icon: Crown,
  },
];

const Tracks = () => (
  <section className="bg-background py-24">
    <div className="container-narrow">
      <div className="max-w-2xl">
        <p className="eyebrow">Service tracks</p>
        <h2 className="mt-3 font-display text-3xl font-semibold sm:text-4xl">
          Three search tracks. One team.
        </h2>
      </div>
      <div className="mt-12 grid gap-6 md:grid-cols-3">
        {TRACKS.map((t) => {
          const Icon = t.icon;
          return (
            <article
              key={t.title}
              className="flex flex-col rounded-2xl border border-border bg-card p-7 shadow-card transition-all hover:-translate-y-0.5 hover:shadow-elevated"
            >
              <span className="grid h-11 w-11 place-items-center rounded-lg bg-primary text-primary-foreground">
                <Icon className="h-5 w-5" />
              </span>
              <h3 className="mt-6 font-display text-xl font-semibold leading-tight text-foreground">
                {t.title}
              </h3>
              <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{t.body}</p>
              <p className="mt-5 border-t border-border pt-4 text-xs uppercase tracking-wider text-muted-foreground">
                {t.suitable}
              </p>
            </article>
          );
        })}
      </div>
    </div>
  </section>
);

interface IndustryItem {
  label: string;
  icon: React.ComponentType<{ className?: string }>;
}

const INDUSTRIES: IndustryItem[] = [
  { label: "Technology & SaaS", icon: Cpu },
  { label: "Financial Services & Fintech", icon: Banknote },
  { label: "Healthcare & Life Sciences", icon: HeartPulse },
  { label: "Manufacturing & Industrial", icon: Factory },
  { label: "Real Estate & Construction", icon: Building },
  { label: "Retail & E-commerce", icon: ShoppingBag },
  { label: "Professional Services", icon: ScrollText },
  { label: "Government & Public Sector", icon: Landmark },
];

const Industries = () => (
  <section className="border-t border-border bg-secondary/40 py-24">
    <div className="container-narrow">
      <div className="max-w-2xl">
        <p className="eyebrow">Industries</p>
        <h2 className="mt-3 font-display text-3xl font-semibold sm:text-4xl">
          Across every industry. Specialists in four.
        </h2>
      </div>
      <ul className="mt-12 grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-4">
        {INDUSTRIES.map((i) => {
          const Icon = i.icon;
          return (
            <li
              key={i.label}
              className="flex items-center gap-3 rounded-xl border border-border bg-card px-4 py-3.5 shadow-card"
            >
              <span className="grid h-9 w-9 shrink-0 place-items-center rounded-lg bg-primary/5 text-primary">
                <Icon className="h-4 w-4" />
              </span>
              <span className="text-sm font-medium text-foreground">{i.label}</span>
            </li>
          );
        })}
      </ul>
    </div>
  </section>
);

const PROCESS_STEPS = [
  {
    title: "Mandate Brief",
    body:
      "We spend the first session understanding not just the role, but why it is open, what the last hire got wrong, and what success looks like in 90 days.",
  },
  {
    title: "Market Mapping",
    body:
      "We map the full talent pool — active candidates, passive candidates, and competitors' talent. You receive a market intelligence report before the first CV.",
  },
  {
    title: "Candidate Outreach",
    body:
      "We engage candidates discreetly. For executive mandates, our outreach does not mention the client by name until mutual interest is confirmed.",
  },
  {
    title: "Structured Assessment",
    body:
      "Every presented candidate has cleared a structured competency interview, reference check alignment, and jurisdiction-specific background verification framework.",
  },
  {
    title: "Shortlist Presentation",
    body:
      "You receive a shortlist of 3–5 fully qualified candidates within the agreed sprint timeline, with written assessment summaries.",
  },
  {
    title: "Offer & Close",
    body:
      "We manage offer negotiations, counter-offer scenarios, and notice period transitions. For regional hires, we coordinate directly with the EOR onboarding team.",
  },
];

const Process = () => (
  <section id="process" className="border-t border-border bg-background py-24">
    <div className="container-narrow">
      <div className="max-w-2xl">
        <p className="eyebrow">How it works</p>
        <h2 className="mt-3 font-display text-3xl font-semibold sm:text-4xl">
          How a search works with Mars
        </h2>
      </div>
      <ol className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {PROCESS_STEPS.map((s, i) => (
          <li
            key={s.title}
            className="rounded-2xl border border-border bg-card p-6 shadow-card"
          >
            <div className="flex items-baseline gap-3">
              <span className="font-display text-3xl font-semibold text-accent">
                {String(i + 1).padStart(2, "0")}
              </span>
              <h3 className="font-display text-lg font-semibold text-foreground">{s.title}</h3>
            </div>
            <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{s.body}</p>
          </li>
        ))}
      </ol>
    </div>
  </section>
);

const Integration = () => (
  <section className="relative overflow-hidden bg-primary py-24 text-primary-foreground">
    <div
      className="pointer-events-none absolute inset-0 opacity-[0.06]"
      style={{
        backgroundImage:
          "radial-gradient(hsl(var(--primary-foreground)) 1px, transparent 1px)",
        backgroundSize: "32px 32px",
      }}
    />
    <div className="container-narrow relative grid gap-10 lg:grid-cols-[1fr_1.2fr] lg:items-start">
      <div>
        <p className="eyebrow text-white/60">Recruitment + EOR</p>
        <h2 className="mt-3 font-display text-3xl font-semibold sm:text-4xl">
          From offer letter to day one — without the gap
        </h2>
      </div>
      <div className="space-y-5 text-white/80">
        <p>
          The traditional friction point in international expansion is the handoff between talent
          acquisition and local HR compliance. Most firms treat these as separate workstreams.
          Mars does not.
        </p>
        <p>
          The moment a candidate accepts an offer, our EOR compliance engine initiates the
          localised onboarding sequence concurrently with the candidate&rsquo;s notice period.
          Employment contracts drafted. Work authorisation initiated. Payroll profile established.
          Statutory accounts opened.
        </p>
        <p className="text-white">
          By the time the candidate walks in on day one, they are fully compliant and operational.
          Not pending.
        </p>
        <Button asChild className="bg-accent text-accent-foreground hover:bg-accent/90">
          <a href={withBase("/#how")}>
            Learn how EOR works <ArrowRight />
          </a>
        </Button>
      </div>
    </div>
  </section>
);

const StatsBar = () => {
  const stats = [
    { n: "2,560+", l: "Successful placements" },
    { n: "17 years", l: "Since 2009" },
    { n: "8 markets", l: "APAC coverage" },
    { n: "21 days", l: "C-suite shortlist sprint" },
  ];
  return (
    <section className="border-y border-border bg-background">
      <div className="container-narrow py-12">
        <div className="grid grid-cols-2 gap-x-6 gap-y-8 sm:grid-cols-4">
          {stats.map((s) => (
            <div key={s.l}>
              <p className="font-display text-3xl font-semibold text-foreground">{s.n}</p>
              <p className="mt-1.5 text-[11px] uppercase tracking-wider text-muted-foreground">
                {s.l}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

const FAQ_ITEMS = [
  {
    q: "What is the SLA model for cross-border C-suite and VP-level search mandates?",
    a:
      "Executing cross-border C-suite and VP-level mandates requires absolute precision and guaranteed execution timelines. Our retained search model is governed by a rigorous, milestone-driven Service Level Agreement. We do not rely on passive job board aggregation. Instead, we commit to delivering a fully vetted, jurisdiction-ready shortlist of passive candidates within an initial 21-day sprint. The SLA defines strict metrics for candidate presentation, interview scheduling, and final offer negotiation. By tying our operational cadence to hard contractual deliverables, we provide MNC headquarters with the predictability required to align critical executive transitions with broader strategic market entry and cross-border expansion timelines.",
  },
  {
    q: "How is background verification handled across mixed jurisdictions with fragmented privacy laws?",
    a:
      "Cross-jurisdiction background checks face heavily fragmented privacy and data access laws. While financial probity is readily verifiable in Singapore, jurisdictions like the EU or mainland China impose strict limitations on accessing civil litigation or employment histories. Mars navigates these gaps by mapping verification protocols to localised legal realities, ensuring strict ICA/MOM compliance in Singapore and analogous frameworks abroad. Where direct database verification is legally blocked, we deploy deep-referencing frameworks — analysing indirect professional footprints and executing structured, multi-tier interviews with former superiors to create a high-fidelity risk profile even when statutory records remain opaque.",
  },
];

const FAQ = () => (
  <section id="faq" className="border-t border-border bg-secondary/40 py-24">
    <div className="container-narrow">
      <div className="max-w-2xl">
        <p className="eyebrow">FAQ</p>
        <h2 className="mt-3 font-display text-3xl font-semibold sm:text-4xl">
          Questions we get on executive mandates
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
            value={`rec-faq-${i}`}
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
              Ready to start a search?
            </h2>
            <p className="mt-4 max-w-xl text-white/75">
              Whether you need a VP in Singapore next quarter or a confidential CFO search across
              three jurisdictions, we have done it before.
            </p>
            <ul className="mt-6 space-y-2.5 text-sm text-white/80">
              {[
                "21-day shortlist sprint for retained executive mandates",
                "Direct EOR handoff for international placements",
                "MOM EA Licence No. 09C2925",
              ].map((b) => (
                <li key={b} className="flex items-start gap-2.5">
                  <CheckCircle2 className="mt-0.5 h-4 w-4 text-accent" />
                  <span>{b}</span>
                </li>
              ))}
            </ul>
          </div>
          <div className="lg:justify-self-end">
            <Button
              asChild
              size="lg"
              className="bg-accent text-accent-foreground hover:bg-accent/90"
            >
              <a href={withBase("/#contact")}>
                Discuss a Confidential Search <ArrowRight />
              </a>
            </Button>
          </div>
        </div>
      </div>
    </div>
  </section>
);

const Recruitment = () => {
  usePageMeta();
  return (
    <main className="min-h-screen bg-background">
      <SiteHeader />
      <Hero />
      <Tracks />
      <Industries />
      <Process />
      <Integration />
      <StatsBar />
      <FAQ />
      <CTABanner />
      <SiteFooter />
    </main>
  );
};

export default Recruitment;
