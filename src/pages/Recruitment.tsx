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
import { useTranslation } from "react-i18next";
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
  const { t } = useTranslation();
  useEffect(() => {
    const prevTitle = document.title;
    document.title = t("recruitmentPage.metaTitle");
    setMeta("description", t("recruitmentPage.metaDesc"));
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
  }, [t]);
};

const Hero = () => {
  const { t } = useTranslation();
  return (
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
          {t("recruitmentPage.pill")}
        </span>
        <h1 className="mt-6 max-w-4xl font-display text-4xl font-semibold leading-[1.05] text-white sm:text-5xl lg:text-[60px]">
          {t("recruitmentPage.headlineLead")}{" "}
          <span className="text-accent">{t("recruitmentPage.headlineAccent")}</span>
        </h1>
        <p className="mt-6 max-w-3xl text-base text-white/75 sm:text-lg">
          {t("recruitmentPage.sub")}
        </p>
        <div className="mt-8 flex flex-wrap items-center gap-3">
          <Button asChild size="lg" className="bg-accent text-accent-foreground hover:bg-accent/90">
            <a href={withBase("/#contact")}>
              {t("recruitmentPage.ctaPrimary")} <ArrowRight />
            </a>
          </Button>
          <Button
            asChild
            size="lg"
            variant="outline"
            className="border-white/25 bg-transparent text-white hover:bg-white/10 hover:text-white"
          >
            <a href="#process">{t("recruitmentPage.ctaSecondary")}</a>
          </Button>
        </div>
        <p className="mt-6 text-xs uppercase tracking-[0.18em] text-white/55">
          {t("recruitmentPage.trustLine")}
        </p>
      </div>
    </section>
  );
};

const Tracks = () => {
  const { t } = useTranslation();
  const items = [
    {
      title: t("recruitmentPage.tracks.permanent.title"),
      body: t("recruitmentPage.tracks.permanent.body"),
      suitable: t("recruitmentPage.tracks.permanent.suitable"),
      icon: Briefcase,
    },
    {
      title: t("recruitmentPage.tracks.contract.title"),
      body: t("recruitmentPage.tracks.contract.body"),
      suitable: t("recruitmentPage.tracks.contract.suitable"),
      icon: Building2,
    },
    {
      title: t("recruitmentPage.tracks.executive.title"),
      body: t("recruitmentPage.tracks.executive.body"),
      suitable: t("recruitmentPage.tracks.executive.suitable"),
      icon: Crown,
    },
  ];
  return (
    <section className="bg-background py-24">
      <div className="container-narrow">
        <div className="max-w-2xl">
          <p className="eyebrow">{t("recruitmentPage.tracks.eyebrow")}</p>
          <h2 className="mt-3 font-display text-3xl font-semibold sm:text-4xl">
            {t("recruitmentPage.tracks.headline")}
          </h2>
        </div>
        <div className="mt-12 grid gap-6 md:grid-cols-3">
          {items.map((tr) => {
            const Icon = tr.icon;
            return (
              <article
                key={tr.title}
                className="flex flex-col rounded-2xl border border-border bg-card p-7 shadow-card transition-all hover:-translate-y-0.5 hover:shadow-elevated"
              >
                <span className="grid h-11 w-11 place-items-center rounded-lg bg-primary text-primary-foreground">
                  <Icon className="h-5 w-5" />
                </span>
                <h3 className="mt-6 font-display text-xl font-semibold leading-tight text-foreground">
                  {tr.title}
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{tr.body}</p>
                <p className="mt-5 border-t border-border pt-4 text-xs uppercase tracking-wider text-muted-foreground">
                  {tr.suitable}
                </p>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
};

const Industries = () => {
  const { t } = useTranslation();
  const items = [
    { label: t("recruitmentPage.industries.tech"), icon: Cpu },
    { label: t("recruitmentPage.industries.finance"), icon: Banknote },
    { label: t("recruitmentPage.industries.health"), icon: HeartPulse },
    { label: t("recruitmentPage.industries.manufacturing"), icon: Factory },
    { label: t("recruitmentPage.industries.realestate"), icon: Building },
    { label: t("recruitmentPage.industries.retail"), icon: ShoppingBag },
    { label: t("recruitmentPage.industries.services"), icon: ScrollText },
    { label: t("recruitmentPage.industries.government"), icon: Landmark },
  ];
  return (
    <section className="border-t border-border bg-secondary/40 py-24">
      <div className="container-narrow">
        <div className="max-w-2xl">
          <p className="eyebrow">{t("recruitmentPage.industries.eyebrow")}</p>
          <h2 className="mt-3 font-display text-3xl font-semibold sm:text-4xl">
            {t("recruitmentPage.industries.headline")}
          </h2>
        </div>
        <ul className="mt-12 grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-4">
          {items.map((i) => {
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
};

const Process = () => {
  const { t } = useTranslation();
  const steps = (["1", "2", "3", "4", "5", "6"] as const).map((n) => ({
    title: t(`recruitmentPage.process.step${n}Title`),
    body: t(`recruitmentPage.process.step${n}Body`),
  }));
  return (
    <section id="process" className="border-t border-border bg-background py-24">
      <div className="container-narrow">
        <div className="max-w-2xl">
          <p className="eyebrow">{t("recruitmentPage.process.eyebrow")}</p>
          <h2 className="mt-3 font-display text-3xl font-semibold sm:text-4xl">
            {t("recruitmentPage.process.headline")}
          </h2>
        </div>
        <ol className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {steps.map((s, i) => (
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
};

const Integration = () => {
  const { t } = useTranslation();
  return (
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
          <p className="eyebrow text-white/60">{t("recruitmentPage.integration.eyebrow")}</p>
          <h2 className="mt-3 font-display text-3xl font-semibold sm:text-4xl">
            {t("recruitmentPage.integration.headline")}
          </h2>
        </div>
        <div className="space-y-5 text-white/80">
          <p>{t("recruitmentPage.integration.p1")}</p>
          <p>{t("recruitmentPage.integration.p2")}</p>
          <p className="text-white">{t("recruitmentPage.integration.p3")}</p>
          <Button asChild className="bg-accent text-accent-foreground hover:bg-accent/90">
            <a href={withBase("/eor#how")}>
              {t("recruitmentPage.integration.cta")} <ArrowRight />
            </a>
          </Button>
        </div>
      </div>
    </section>
  );
};

const StatsBar = () => {
  const { t } = useTranslation();
  const stats = [
    { n: t("recruitmentPage.stats.placementsValue"), l: t("recruitmentPage.stats.placements") },
    { n: t("recruitmentPage.stats.sinceValue"), l: t("recruitmentPage.stats.since") },
    { n: t("recruitmentPage.stats.coverageValue"), l: t("recruitmentPage.stats.coverage") },
    { n: t("recruitmentPage.stats.sprintValue"), l: t("recruitmentPage.stats.sprint") },
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

const FAQ = () => {
  const { t } = useTranslation();
  const items = (["1", "2"] as const).map((i) => ({
    q: t(`recruitmentPage.faq.q${i}`),
    a: t(`recruitmentPage.faq.a${i}`),
  }));
  return (
    <section id="faq" className="border-t border-border bg-secondary/40 py-24">
      <div className="container-narrow">
        <div className="max-w-2xl">
          <p className="eyebrow">{t("recruitmentPage.faq.eyebrow")}</p>
          <h2 className="mt-3 font-display text-3xl font-semibold sm:text-4xl">
            {t("recruitmentPage.faq.headline")}
          </h2>
        </div>
        <Accordion
          type="single"
          collapsible
          className="mt-10 grid gap-3 rounded-2xl border border-border bg-card p-3 shadow-card"
        >
          {items.map((item, i) => (
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
};

const CTABanner = () => {
  const { t } = useTranslation();
  const bullets = [
    t("recruitmentPage.ctaBanner.bullet1"),
    t("recruitmentPage.ctaBanner.bullet2"),
    t("recruitmentPage.ctaBanner.bullet3"),
  ];
  return (
    <section className="bg-background py-24">
      <div className="container-narrow">
        <div className="overflow-hidden rounded-3xl border border-border bg-gradient-hero p-10 text-primary-foreground shadow-elevated lg:p-14">
          <div className="grid gap-8 lg:grid-cols-[1.4fr_1fr] lg:items-center">
            <div>
              <h2 className="font-display text-3xl font-semibold sm:text-4xl">
                {t("recruitmentPage.ctaBanner.headline")}
              </h2>
              <p className="mt-4 max-w-xl text-white/75">{t("recruitmentPage.ctaBanner.body")}</p>
              <ul className="mt-6 space-y-2.5 text-sm text-white/80">
                {bullets.map((b) => (
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
                  {t("recruitmentPage.ctaBanner.cta")} <ArrowRight />
                </a>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

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
