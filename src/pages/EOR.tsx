import { useEffect } from "react";
import { ArrowRight, Globe2, ShieldCheck, CheckCircle2 } from "lucide-react";
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
import { WhyMarsSection } from "@/components/site/WhyMarsSection";
import {
  CountriesMapSection,
  ComparisonSection,
  HowItWorksSection,
} from "@/components/site/EORSections";

const setMeta = (name: string, content: string, attr: "name" | "property" = "name") => {
  let el = document.querySelector<HTMLMetaElement>(`meta[${attr}='${name}']`);
  if (!el) {
    el = document.createElement("meta");
    el.setAttribute(attr, name);
    document.head.appendChild(el);
  }
  el.setAttribute("content", content);
};

const BREADCRUMB_ID = "eor-breadcrumb-schema";

const usePageMeta = () => {
  useEffect(() => {
    const prevTitle = document.title;
    document.title = "Employer of Record Singapore & APAC — Mars Consulting";
    setMeta(
      "description",
      "Singapore-licensed EOR services across 8 markets. Compliant employment, payroll, and statutory filings from day one. No local entity required. MOM EA 09C2925.",
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
          name: "Employer of Record",
          item: "https://marsconsulting.com.sg/eor",
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
        Employer of Record &amp; Global Payroll
      </span>
      <h1 className="mt-6 max-w-4xl font-display text-4xl font-semibold leading-[1.05] text-white sm:text-5xl lg:text-[60px]">
        Hire compliantly across <span className="text-accent">8 APAC markets</span> — without setting up a local entity
      </h1>
      <p className="mt-6 max-w-3xl text-base text-white/75 sm:text-lg">
        Singapore-licensed Employer of Record services. We become the legal employer; you direct
        the work. Employment contracts, payroll, statutory filings, and offboarding handled from
        day one.
      </p>
      <div className="mt-8 flex flex-wrap items-center gap-3">
        <Button asChild size="lg" className="bg-accent text-accent-foreground hover:bg-accent/90">
          <a href={withBase("/#contact")}>
            Get an EOR Quote <ArrowRight />
          </a>
        </Button>
        <Button
          asChild
          size="lg"
          variant="outline"
          className="border-white/25 bg-transparent text-white hover:bg-white/10 hover:text-white"
        >
          <a href="#how">See How It Works</a>
        </Button>
      </div>
      <p className="mt-6 text-xs uppercase tracking-[0.18em] text-white/55">
        MOM EA Licence No. 09C2925 · 17 years · 8 APAC markets · 5-day onboarding
      </p>
    </div>
  </section>
);

const StatsBar = () => {
  const stats = [
    { n: "5 days", l: "Onboarding", icon: Globe2 },
    { n: "8 markets", l: "APAC coverage", icon: Globe2 },
    { n: "100+", l: "Global clients", icon: Globe2 },
    { n: "0", l: "Statutory misses", icon: ShieldCheck },
  ];
  return (
    <section className="border-y border-border bg-background">
      <div className="container-narrow py-12">
        <div className="grid grid-cols-2 gap-x-6 gap-y-8 sm:grid-cols-4">
          {stats.map((s) => (
            <div key={s.l}>
              <p className="font-display text-3xl font-semibold text-foreground">{s.n}</p>
              <p className="mt-1.5 whitespace-nowrap text-[11px] uppercase tracking-wider text-muted-foreground">
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
    q: "Where does Mars Consulting fit when a global EOR platform 'almost works' but breaks at jurisdiction-specific complexity?",
    a:
      "Global EOR platforms operate on standardised, high-volume SaaS models that fracture under jurisdiction-specific complexities — such as equity compensation reporting in Singapore or non-standard termination negotiations in Indonesia. Mars Consulting intervenes where localised regulatory friction outpaces generic software capabilities. We replace automated workflows with bespoke MNC governance frameworks, integrating directly with local labour laws and tax codes. Our model bridges the gap between software-driven EOR and high-touch BPO, ensuring that cross-border operations do not fail at the 'last mile' of local compliance. This approach mitigates jurisdictional risk by providing active, on-the-ground legal and operational oversight, resolving edge cases that require senior-level human intervention rather than merely a dashboard interface.",
  },
  {
    q: "How does Mars structure engagement governance for multi-entity or multi-region MNCs?",
    a:
      "Engagement governance for multi-region MNCs requires a centralised control plane overlaid with decentralised statutory execution. Mars structures these engagements through a unified Service Level Agreement covering all active jurisdictions, paired with a dedicated regional governance lead based in Singapore. This architecture guarantees a single point of accountability for the client while executing statutory obligations — such as localised benefits administration, statutory reporting, and labour dispute resolution — through deeply embedded in-country HR and legal experts. By separating the strategic MNC governance layer from localised execution, we enforce consistent reporting standards across the client's portfolio while neutralising localised compliance and jurisdictional risks before they escalate to headquarters level.",
  },
  {
    q: "Why does the cost-of-error dominate the cost-of-service in cross-border HR, and how does this shape your pricing philosophy?",
    a:
      "In cross-border HR and EOR deployments, the baseline cost of service is marginal compared to the compounded cost of error. Misclassifying an employee, failing to structure a termination within local statutory bounds, or mishandling cross-border tax liabilities frequently results in multi-year litigation, operational bans, or severe financial penalties. Our pricing philosophy reflects a strict risk-mitigation premium. Rather than competing on transactional volume, we invest heavily in pre-deployment compliance architecture, continuous legal monitoring, and senior-level operational oversight. The fee structure subsidises the deployment of localised legal expertise, effectively transferring the financial and jurisdictional risk of cross-border expansion away from the client's balance sheet and onto our managed infrastructure.",
  },
  {
    q: "How does Mars structure cross-border payroll for a Singapore-headquartered group hiring across Southeast Asia without triggering permanent establishment exposure?",
    a:
      "Cross-border payroll under our model is engineered through three layered controls: jurisdictional entity selection, labour dispatch architecture, and treaty-aligned tax positioning. Where the client's commercial substance does not justify a local registered entity, we deploy our Singapore-licensed EOR vehicle in combination with bilateral labour dispatch structures across Vietnam, Indonesia, the Philippines, Malaysia, and Thailand — neutralising permanent establishment risk while preserving operational control over headcount, KPIs, and termination rights. International tax planning is integrated upstream of the first payroll cycle: we model the interaction between secondment cost recharge, employer-side social contribution ceilings, and applicable double-taxation treaty positions before any payment is initiated. Funds flow through ring-fenced operating accounts subject to MAS-grade KYC/AML controls, with cross-border payroll reconciled in the client's base reporting currency and supported by jurisdiction-specific statutory filings.",
  },
  {
    q: "When and how do labour dispatch structures apply as a cost-optimisation lever?",
    a:
      "Labour dispatch structures serve as a critical cost-optimisation lever when entering Asian markets with high statutory employer burdens or rigid permanent employment regulations. Unlike standard EOR, labour dispatch allows the client to utilise a localised, licensed agency to formally employ and dispatch staff to the operational site. This structure caps statutory severance liabilities, provides flexible headcount scaling, and optimises employer-side tax contributions. We integrate labour dispatch within broader international tax planning frameworks to ensure that cross-border chargebacks for dispatched labour are fully deductible and aligned with prevailing transfer pricing regulations, significantly reducing the blended cost of international human capital.",
  },
  {
    q: "How does Mars approach international tax planning regarding treaty positioning and secondment recharges?",
    a:
      "Strategic international human capital deployment requires rigorous international tax planning to prevent margin erosion. We architect cross-border assignments by aligning secondment recharge agreements with the specific provisions of bilateral double-taxation treaties. This precise treaty positioning allows us to structure remuneration to legally minimise dual tax liabilities for both the assignee and the corporate entity. Furthermore, by analysing jurisdiction-specific social contribution ceilings and exemptions for expatriate staff, we execute localised contribution arbitrage. This ensures that statutory employer burdens are strictly minimised without compromising the employee's net retention or violating local compliance mandates — transforming cross-border payroll from a static liability into an optimised operational expense.",
  },
];

const FAQ = () => (
  <section id="faq" className="border-t border-border bg-background py-24">
    <div className="container-narrow">
      <div className="max-w-2xl">
        <p className="eyebrow">FAQ</p>
        <h2 className="mt-3 font-display text-3xl font-semibold sm:text-4xl">
          Questions we get from serious buyers
        </h2>
        <p className="mt-4 text-muted-foreground">
          These are the questions our clients ask on the second or third call. We have put them
          here so you can ask them on the first.
        </p>
      </div>
      <Accordion
        type="single"
        collapsible
        className="mt-10 grid gap-3 rounded-2xl border border-border bg-card p-3 shadow-card"
      >
        {FAQ_ITEMS.map((item, i) => (
          <AccordionItem
            key={i}
            value={`eor-faq-${i}`}
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
              Ready to hire compliantly across APAC?
            </h2>
            <p className="mt-4 max-w-xl text-white/75">
              Country-by-country cost breakdown. Sample contract & onboarding checklist. Honest
              answer on whether you should set up an entity instead.
            </p>
            <ul className="mt-6 space-y-2.5 text-sm text-white/80">
              {[
                "Quote within 4 business hours",
                "Onboarding in 5 working days",
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
                Talk to a Specialist <ArrowRight />
              </a>
            </Button>
          </div>
        </div>
      </div>
    </div>
  </section>
);

const EOR = () => {
  usePageMeta();
  return (
    <main className="min-h-screen bg-background">
      <SiteHeader />
      <Hero />
      <WhyMarsSection />
      <StatsBar />
      <HowItWorksSection />
      <ComparisonSection />
      <CountriesMapSection />
      <FAQ />
      <CTABanner />
      <SiteFooter />
    </main>
  );
};

export default EOR;
