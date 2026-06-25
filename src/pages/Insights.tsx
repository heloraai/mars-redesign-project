import { useEffect } from "react";
import { useTranslation } from "react-i18next";
import { ArrowRight, Search, Globe2, Users, ShieldCheck } from "lucide-react";
import { Button } from "@/components/ui/button";
import { withBase, BOOKING_URL } from "@/lib/href";
import { headlineGap, needsLooseLeading } from "@/lib/headline";
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
  const { t } = useTranslation();
  useEffect(() => {
    const prevTitle = document.title;
    document.title = t("insightsPage.metaTitle");
    setMeta("description", t("insightsPage.metaDesc"));
    return () => {
      document.title = prevTitle;
    };
  }, [t]);
};

const Hero = () => {
  const { t, i18n } = useTranslation();
  const cjk = needsLooseLeading(i18n.resolvedLanguage);
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
          {t("insightsPage.pill")}
        </span>
        <h1 className={`mt-6 max-w-4xl font-display text-4xl font-semibold text-white sm:text-5xl lg:text-[60px] ${cjk ? "!leading-[1.22]" : "!leading-[1.05]"}`}>
          {t("insightsPage.headlineLead")}
          {headlineGap(t("insightsPage.headlineLead"), t("insightsPage.headlineAccent"))}
          <span className="whitespace-nowrap text-accent">{t("insightsPage.headlineAccent")}</span>
        </h1>
        <p className="mt-6 max-w-3xl text-base text-white/75 sm:text-lg">{t("insightsPage.sub")}</p>
      </div>
    </section>
  );
};

interface InsightCard {
  tagKey: string;
  titleKey: string;
  excerptKey: string;
  icon: React.ComponentType<{ className?: string }>;
}

const CARDS: InsightCard[] = [
  { tagKey: "insightsPage.a1Tag", titleKey: "insightsPage.a1Title", excerptKey: "insightsPage.a1Excerpt", icon: Search },
  { tagKey: "insightsPage.a2Tag", titleKey: "insightsPage.a2Title", excerptKey: "insightsPage.a2Excerpt", icon: Globe2 },
  { tagKey: "insightsPage.a3Tag", titleKey: "insightsPage.a3Title", excerptKey: "insightsPage.a3Excerpt", icon: Users },
  { tagKey: "insightsPage.a4Tag", titleKey: "insightsPage.a4Title", excerptKey: "insightsPage.a4Excerpt", icon: ShieldCheck },
];

const Perspectives = () => {
  const { t } = useTranslation();
  return (
    <section className="bg-background py-24">
      <div className="container-narrow">
        <div className="max-w-2xl">
          <p className="eyebrow">{t("insightsPage.eyebrow")}</p>
          <h2 className="mt-3 font-display text-3xl font-semibold sm:text-4xl">
            {t("insightsPage.heading")}
          </h2>
          <p className="mt-4 text-base leading-relaxed text-muted-foreground">
            {t("insightsPage.comingSoon")}
          </p>
        </div>
        <div className="mt-12 grid gap-6 md:grid-cols-2">
          {CARDS.map((card) => {
            const Icon = card.icon;
            return (
              <article
                key={card.titleKey}
                className="flex flex-col rounded-2xl border border-border bg-card p-8 shadow-card transition-colors hover:border-accent/50"
              >
                <div className="flex items-center gap-3">
                  <span className="grid h-10 w-10 place-items-center rounded-lg bg-accent/10 text-accent">
                    <Icon className="h-5 w-5" />
                  </span>
                  <span className="rounded-full border border-border bg-muted/60 px-2.5 py-0.5 text-[10px] font-medium uppercase tracking-wider text-muted-foreground">
                    {t(card.tagKey)}
                  </span>
                </div>
                <h3 className="mt-5 font-display text-xl font-semibold leading-snug text-foreground">
                  {t(card.titleKey)}
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                  {t(card.excerptKey)}
                </p>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
};

const CtaBand = () => {
  const { t } = useTranslation();
  return (
    <section className="relative overflow-hidden bg-gradient-hero py-24 text-primary-foreground">
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.07]"
        style={{
          backgroundImage:
            "radial-gradient(hsl(var(--primary-foreground)) 1px, transparent 1px)",
          backgroundSize: "28px 28px",
        }}
      />
      <div className="pointer-events-none absolute -top-32 -left-24 h-[460px] w-[460px] rounded-full bg-accent/25 blur-3xl animate-blob-drift" />
      <div className="container-narrow relative max-w-3xl text-center">
        <h2 className="font-display text-3xl font-semibold tracking-tight text-white sm:text-4xl">
          {t("insightsPage.ctaHeading")}
        </h2>
        <p className="mx-auto mt-6 max-w-2xl text-base leading-relaxed text-white/70 sm:text-lg">
          {t("insightsPage.ctaBody")}
        </p>
        <div className="mt-10 flex flex-wrap items-center justify-center gap-4">
          <Button
            asChild
            size="lg"
            className="h-12 rounded-xl bg-accent px-7 text-[15px] font-semibold text-white shadow-[0_0_24px_hsl(15_99%_69%/0.35)] transition-shadow hover:bg-accent/90 hover:shadow-[0_0_32px_hsl(15_99%_69%/0.45)]"
          >
            <a href={BOOKING_URL} target="_blank" rel="noopener noreferrer">
              {t("insightsPage.ctaPrimary")} <ArrowRight className="ml-1 h-4 w-4" />
            </a>
          </Button>
          <Button
            asChild
            size="lg"
            variant="outline"
            className="h-12 rounded-xl border-white/15 bg-white/[0.06] px-7 text-[15px] text-white backdrop-blur-sm hover:bg-white/10 hover:text-white"
          >
            <a href={withBase("/contact")}>{t("insightsPage.ctaSecondary")}</a>
          </Button>
        </div>
      </div>
    </section>
  );
};

const Insights = () => {
  usePageMeta();
  return (
    <main className="min-h-screen bg-background">
      <SiteHeader />
      <Hero />
      <Perspectives />
      <CtaBand />
      <SiteFooter />
    </main>
  );
};

export default Insights;
