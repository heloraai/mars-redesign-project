import { useEffect } from "react";
import { ArrowRight, Globe2, ShieldCheck, CheckCircle2 } from "lucide-react";
import { useTranslation } from "react-i18next";
import { Button } from "@/components/ui/button";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { withBase, BOOKING_URL } from "@/lib/href";
import { headlineGap, isCJKLang } from "@/lib/headline";
import { SiteHeader } from "@/components/site/SiteHeader";
import { SiteFooter } from "@/components/site/SiteFooter";
import {
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
  const { t } = useTranslation();
  useEffect(() => {
    const prevTitle = document.title;
    document.title = t("eorPage.metaTitle");
    setMeta("description", t("eorPage.metaDesc"));
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
  }, [t]);
};

const Hero = () => {
  const { t, i18n } = useTranslation();
  const cjk = isCJKLang(i18n.resolvedLanguage);
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
          {t("eorPage.pill")}
        </span>
        <h1 className={`mt-6 max-w-4xl font-display text-4xl font-semibold text-white sm:text-5xl lg:text-[60px] ${cjk ? "!leading-[1.22]" : "!leading-[1.05]"}`}>
          {t("eorPage.headlineLead")}
          {headlineGap(t("eorPage.headlineLead"), t("eorPage.headlineAccent"))}
          <span className="whitespace-nowrap text-accent">{t("eorPage.headlineAccent")}</span>
          {headlineGap(t("eorPage.headlineAccent"), t("eorPage.headlineTail"))}
          {t("eorPage.headlineTail")}
        </h1>
        <p className="mt-6 max-w-3xl text-base text-white/75 sm:text-lg">{t("eorPage.sub")}</p>
        <div className="mt-8 flex flex-wrap items-center gap-3">
          <Button asChild size="lg" className="bg-accent text-accent-foreground hover:bg-accent/90">
            <a href={BOOKING_URL} target="_blank" rel="noopener noreferrer">
              {t("eorPage.ctaPrimary")} <ArrowRight />
            </a>
          </Button>
          <Button
            asChild
            size="lg"
            variant="outline"
            className="border-white/25 bg-transparent text-white hover:bg-white/10 hover:text-white"
          >
            <a href="#how">{t("eorPage.ctaSecondary")}</a>
          </Button>
        </div>
        <p className="mt-6 text-xs uppercase tracking-[0.18em] text-white/55">
          {t("eorPage.trustLine")}
        </p>
      </div>
    </section>
  );
};

const StatsBar = () => {
  const { t } = useTranslation();
  const stats = [
    { n: t("eorPage.stats.onboardingValue"), l: t("eorPage.stats.onboarding"), icon: Globe2 },
    { n: t("eorPage.stats.coverageValue"), l: t("eorPage.stats.coverage"), icon: Globe2 },
    { n: t("eorPage.stats.clientsValue"), l: t("eorPage.stats.clients"), icon: Globe2 },
    { n: t("eorPage.stats.missesValue"), l: t("eorPage.stats.misses"), icon: ShieldCheck },
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

const FAQ = () => {
  const { t } = useTranslation();
  const items = (["1", "2", "3", "4", "5", "6"] as const).map((i) => ({
    q: t(`eorPage.faq.q${i}`),
    a: t(`eorPage.faq.a${i}`),
  }));
  return (
    <section id="faq" className="border-t border-border bg-background py-24">
      <div className="container-narrow">
        <div className="max-w-2xl">
          <p className="eyebrow">{t("eorPage.faq.eyebrow")}</p>
          <h2 className="mt-3 font-display text-3xl font-semibold sm:text-4xl">
            {t("eorPage.faq.headline")}
          </h2>
          <p className="mt-4 text-muted-foreground">{t("eorPage.faq.sub")}</p>
        </div>
        <Accordion
          type="single"
          collapsible
          className="mt-10 grid gap-3 rounded-2xl border border-border bg-card p-3 shadow-card"
        >
          {items.map((item, i) => (
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
};

const CTABanner = () => {
  const { t } = useTranslation();
  const bullets = [
    t("eorPage.ctaBanner.bullet1"),
    t("eorPage.ctaBanner.bullet2"),
    t("eorPage.ctaBanner.bullet3"),
  ];
  return (
    <section className="bg-background py-24">
      <div className="container-narrow">
        <div className="overflow-hidden rounded-3xl border border-border bg-gradient-hero p-10 text-primary-foreground shadow-elevated lg:p-14">
          <div className="grid gap-8 lg:grid-cols-[1.4fr_1fr] lg:items-center">
            <div>
              <h2 className="font-display text-3xl font-semibold sm:text-4xl">
                {t("eorPage.ctaBanner.headline")}
              </h2>
              <p className="mt-4 max-w-xl text-white/75">{t("eorPage.ctaBanner.body")}</p>
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
                <a href={BOOKING_URL} target="_blank" rel="noopener noreferrer">
                  {t("eorPage.ctaBanner.cta")} <ArrowRight />
                </a>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

const EOR = () => {
  usePageMeta();
  return (
    <main className="min-h-screen bg-background">
      <SiteHeader />
      <Hero />
      <StatsBar />
      <HowItWorksSection />
      <ComparisonSection />
      <FAQ />
      <CTABanner />
      <SiteFooter />
    </main>
  );
};

export default EOR;
