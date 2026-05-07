import { useEffect } from "react";
import { ArrowRight, ShieldCheck, Building2, Award, Users, Compass } from "lucide-react";
import { Button } from "@/components/ui/button";
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
    document.title = "About Mars Consulting — Singapore HR & EOR Specialists Since 2009";
    setMeta(
      "description",
      "Mars Consulting was founded in Singapore in April 2009. 17 years of HR, EOR, and executive search experience across 8 APAC markets. MOM EA Licence No. 09C2925.",
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
        About Mars Consulting
      </span>
      <h1 className="mt-6 max-w-4xl font-display text-4xl font-semibold leading-[1.05] text-white sm:text-5xl lg:text-[60px]">
        Seventeen Years Building the{" "}
        <span className="text-accent">HR Infrastructure</span> Behind Global Teams
      </h1>
      <p className="mt-6 max-w-3xl text-base text-white/75 sm:text-lg">
        Mars Consulting was founded in Singapore in April 2009 with one conviction: that great
        businesses are built by the right people, placed in the right roles, supported by the
        right systems. Today we are a full-service HR partner across 8 markets — providing
        Employer of Record, global payroll, executive search, HR outsourcing, and AI-powered
        process automation to companies at every stage of growth.
      </p>
    </div>
  </section>
);

const TIMELINE = [
  {
    year: "2009",
    body:
      "Founded in Singapore. Initially focused on permanent and contract recruitment for technology and financial services sectors. Built from day one on the principle that HR advice is only as good as the operational knowledge behind it.",
  },
  {
    year: "2013",
    body:
      "Expanded into Business Process Outsourcing. Extended industry coverage beyond tech and finance into real estate and construction — bringing structured HR operations to sectors that historically relied on informal hiring practices.",
  },
  {
    year: "2017",
    body:
      "Launched Employer of Record services. Expanded geographic coverage to 6+ countries across APAC, opening the capability to all industries. This marked the shift from regional recruiter to cross-border HR infrastructure provider.",
  },
  {
    year: "2020",
    body:
      "Introduced HR Outsourcing — embedding experienced HR consultants directly within client organisations for strategic and operational work. This model allows companies to access senior HR capability without the cost of a full-time hire.",
  },
  {
    year: "2026",
    body:
      "Launched AI Innovation practice — helping clients automate HR and business workflows through intelligent process design, WhatsApp-based automation, and embedded AI consulting teams.",
  },
];

const Timeline = () => (
  <section className="bg-background py-24">
    <div className="container-narrow">
      <div className="max-w-2xl">
        <p className="eyebrow">Our journey</p>
        <h2 className="mt-3 font-display text-3xl font-semibold sm:text-4xl">How we got here</h2>
      </div>
      <ol className="mt-12 space-y-6">
        {TIMELINE.map((m) => (
          <li
            key={m.year}
            className="grid gap-6 rounded-2xl border border-border bg-card p-6 shadow-card md:grid-cols-[160px_1fr] md:items-start md:gap-10 md:p-8"
          >
            <div className="flex items-center gap-3 md:block">
              <span className="font-display text-4xl font-semibold text-accent">{m.year}</span>
            </div>
            <p className="text-base leading-relaxed text-muted-foreground">{m.body}</p>
          </li>
        ))}
      </ol>
    </div>
  </section>
);

const Founder = () => (
  <section className="border-t border-border bg-secondary/40 py-24">
    <div className="container-narrow grid gap-10 lg:grid-cols-[1fr_1.4fr] lg:items-start">
      <div>
        <p className="eyebrow">Founder</p>
        <h2 className="mt-3 font-display text-3xl font-semibold sm:text-4xl">
          Practitioner-led. Not consultant-led.
        </h2>
      </div>
      <div className="space-y-5 text-base leading-relaxed text-muted-foreground">
        <p>
          Mars Consulting was founded by{" "}
          <span className="font-semibold text-foreground">Yuggie Wang</span>, a Singapore-based HR
          and enterprise systems professional with deep expertise in SAP HR platforms and
          workforce management strategy.
        </p>
        <p>
          With a background spanning enterprise technology and human capital operations, Yuggie
          built Mars Consulting on the conviction that HR advice must be grounded in operational
          reality — that the people who understand how systems actually run are best placed to
          design the structures that support them.
        </p>
        <p>
          This philosophy shapes everything: how we scope engagements, how we staff projects, and
          how we tell clients when a simpler solution is the right one.
        </p>
      </div>
    </div>
  </section>
);

const Numbers = () => {
  const stats = [
    { n: "17+", l: "Years in operation" },
    { n: "8", l: "Markets covered" },
    { n: "100+", l: "Expert consultants" },
    { n: "100+", l: "Global clients" },
    { n: "2,560+", l: "Successful placements" },
  ];
  return (
    <section className="border-y border-border bg-background">
      <div className="container-narrow py-12">
        <div className="grid grid-cols-2 gap-x-6 gap-y-8 sm:grid-cols-3 lg:grid-cols-5">
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

const Licences = () => (
  <section className="bg-background py-24">
    <div className="container-narrow">
      <div className="max-w-2xl">
        <p className="eyebrow">Licences &amp; regulatory standing</p>
        <h2 className="mt-3 font-display text-3xl font-semibold sm:text-4xl">
          Licensed, regulated, and accountable
        </h2>
        <p className="mt-4 text-muted-foreground">
          Mars Consulting operates under full regulatory compliance in Singapore. Our licences and
          registrations are publicly verifiable on the MOM and ACRA registers.
        </p>
      </div>
      <div className="mt-12 grid gap-6 md:grid-cols-2">
        <article className="rounded-2xl border border-border bg-card p-7 shadow-card">
          <span className="grid h-11 w-11 place-items-center rounded-lg bg-primary/5 text-primary">
            <ShieldCheck className="h-5 w-5" />
          </span>
          <p className="mt-6 text-xs uppercase tracking-wider text-muted-foreground">
            Ministry of Manpower (MOM)
          </p>
          <p className="mt-1 font-display text-xl font-semibold text-foreground">
            Comprehensive EA Licence
          </p>
          <p className="mt-1 text-sm text-muted-foreground">Licence No. 09C2925</p>
          <p className="mt-5 border-t border-border pt-4 text-sm italic text-muted-foreground">
            Employment Agency licence — authorising placement of local and foreign candidates in
            Singapore.
          </p>
        </article>
        <article className="rounded-2xl border border-border bg-card p-7 shadow-card">
          <span className="grid h-11 w-11 place-items-center rounded-lg bg-primary/5 text-primary">
            <Building2 className="h-5 w-5" />
          </span>
          <p className="mt-6 text-xs uppercase tracking-wider text-muted-foreground">
            ACRA Singapore
          </p>
          <p className="mt-1 font-display text-xl font-semibold text-foreground">
            Corporate Service Provider
          </p>
          <p className="mt-1 text-sm text-muted-foreground">
            Registered Filing Agent (RFA) · Registered Corporate Secretary
          </p>
          <p className="mt-5 border-t border-border pt-4 text-sm italic text-muted-foreground">
            Accounting and Corporate Regulatory Authority registration.
          </p>
        </article>
      </div>
      <p className="mt-8 text-sm text-muted-foreground">
        Licence details are publicly verifiable on the MOM Employment Agency Directory and the
        ACRA BizFile+ register.
      </p>
    </div>
  </section>
);

const PRINCIPLES = [
  {
    title: "Honest scoping",
    body:
      "We tell clients when a SaaS platform is sufficient and they do not need us. We only engage where our capability adds material value over a cheaper alternative.",
    icon: Compass,
  },
  {
    title: "Operational depth",
    body:
      "We do not subcontract jurisdiction-specific compliance to third parties we have not worked with. Every country we operate in has an established in-country partner relationship built over years, not sourced for a single engagement.",
    icon: Award,
  },
  {
    title: "Single point of accountability",
    body:
      "Regardless of how many countries or services are involved, one relationship manager is accountable for the full scope of work. You do not manage a supplier network. You manage one call.",
    icon: Users,
  },
];

const Principles = () => (
  <section className="border-t border-border bg-secondary/40 py-24">
    <div className="container-narrow">
      <div className="max-w-2xl">
        <p className="eyebrow">What we stand for</p>
        <h2 className="mt-3 font-display text-3xl font-semibold sm:text-4xl">How we work</h2>
      </div>
      <div className="mt-12 grid gap-6 md:grid-cols-3">
        {PRINCIPLES.map((p) => {
          const Icon = p.icon;
          return (
            <article
              key={p.title}
              className="rounded-2xl border border-border bg-card p-7 shadow-card"
            >
              <span className="grid h-11 w-11 place-items-center rounded-lg bg-primary text-primary-foreground">
                <Icon className="h-5 w-5" />
              </span>
              <h3 className="mt-6 font-display text-lg font-semibold text-foreground">
                {p.title}
              </h3>
              <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{p.body}</p>
            </article>
          );
        })}
      </div>
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
              17 years of being the operator behind the operator
            </h2>
            <p className="mt-4 max-w-xl text-white/75">
              Talk to a Singapore-licensed specialist about EOR, executive search, or AI-powered
              HR automation across APAC.
            </p>
          </div>
          <div className="lg:justify-self-end">
            <Button
              asChild
              size="lg"
              className="bg-accent text-accent-foreground hover:bg-accent/90"
            >
              <a href={withBase("/#contact")}>
                Book a Call <ArrowRight />
              </a>
            </Button>
          </div>
        </div>
      </div>
    </div>
  </section>
);

const About = () => {
  usePageMeta();
  return (
    <main className="min-h-screen bg-background">
      <SiteHeader />
      <Hero />
      <Timeline />
      <Founder />
      <Numbers />
      <Licences />
      <Principles />
      <CTABanner />
      <SiteFooter />
    </main>
  );
};

export default About;
