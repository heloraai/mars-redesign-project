import { useEffect } from "react";
import { ArrowRight, CheckCircle2, Briefcase, Users, Target, Wrench } from "lucide-react";
import { useTranslation } from "react-i18next";
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
    document.title = t("hrOutsourcingPage.metaTitle");
    setMeta("description", t("hrOutsourcingPage.metaDesc"));
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
          {t("hrOutsourcingPage.pill")}
        </span>
        <h1 className={`mt-6 max-w-4xl font-display text-4xl font-semibold text-white sm:text-5xl lg:text-[60px] ${cjk ? "!leading-[1.22] [text-wrap:balance]" : "!leading-[1.05]"}`}>
          {t("hrOutsourcingPage.headlineLead")}
          {headlineGap(t("hrOutsourcingPage.headlineLead"), t("hrOutsourcingPage.headlineAccent"))}
          <span className="whitespace-nowrap text-accent">{t("hrOutsourcingPage.headlineAccent")}</span>
        </h1>
        <p className="mt-6 max-w-3xl text-base text-white/75 sm:text-lg">
          {t("hrOutsourcingPage.sub")}
        </p>
        <div className="mt-8 flex flex-wrap items-center gap-3">
          <Button asChild size="lg" className="bg-accent text-accent-foreground hover:bg-accent/90">
            <a href={BOOKING_URL} target="_blank" rel="noopener noreferrer">
              {t("hrOutsourcingPage.ctaPrimary")} <ArrowRight />
            </a>
          </Button>
          <Button
            asChild
            size="lg"
            variant="outline"
            className="border-white/25 bg-transparent text-white hover:bg-white/10 hover:text-white"
          >
            <a href="#how">{t("hrOutsourcingPage.ctaSecondary")}</a>
          </Button>
        </div>
      </div>
    </section>
  );
};

const UseCases = () => {
  const { t } = useTranslation();
  const cases = [
    { k: "case1", icon: Users },
    { k: "case2", icon: Target },
    { k: "case3", icon: Briefcase },
    { k: "case4", icon: Wrench },
  ] as const;
  return (
    <section id="how" className="bg-background py-24">
      <div className="container-narrow">
        <div className="max-w-2xl">
          <p className="eyebrow">{t("hrOutsourcingPage.useCases.eyebrow")}</p>
          <h2 className="mt-3 font-display text-3xl font-semibold sm:text-4xl">
            {t("hrOutsourcingPage.useCases.headline")}
          </h2>
        </div>
        <div className="mt-12 grid gap-5 sm:grid-cols-2">
          {cases.map(({ k, icon: Icon }) => (
            <article
              key={k}
              className="rounded-2xl border border-border bg-card p-7 shadow-card"
            >
              <span className="grid h-11 w-11 place-items-center rounded-lg bg-primary/5 text-primary">
                <Icon className="h-5 w-5" />
              </span>
              <p className="mt-6 text-base leading-relaxed text-foreground">
                {t(`hrOutsourcingPage.useCases.${k}`)}
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

const Included = () => {
  const { t } = useTranslation();
  const items = ["item1", "item2", "item3", "item4", "item5", "item6"] as const;
  return (
    <section className="border-t border-border bg-secondary/40 py-24">
      <div className="container-narrow">
        <p className="eyebrow">{t("hrOutsourcingPage.included.eyebrow")}</p>
        <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {items.map((k) => (
            <article
              key={k}
              className="flex h-full flex-col gap-4 rounded-2xl border border-border bg-card p-6 shadow-card transition-all duration-300 hover:-translate-y-1 hover:border-accent/50 hover:shadow-elevated"
            >
              <span className="grid h-11 w-11 place-items-center rounded-lg bg-accent/10 text-accent">
                <CheckCircle2 className="h-5 w-5" />
              </span>
              <span className="text-base font-medium leading-snug text-foreground">
                {t(`hrOutsourcingPage.included.${k}`)}
              </span>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

const Integration = () => {
  const { t } = useTranslation();
  return (
    <section className="bg-background py-24">
      <div className="container-narrow">
        <div className="overflow-hidden rounded-3xl border border-border bg-card p-10 shadow-elevated lg:p-12">
          <div className="grid gap-8 lg:grid-cols-[1.5fr_1fr] lg:items-center">
            <div>
              <p className="eyebrow">{t("hrOutsourcingPage.integration.eyebrow")}</p>
              <p className="mt-4 text-base leading-relaxed text-muted-foreground sm:text-lg">
                {t("hrOutsourcingPage.integration.body")}
              </p>
            </div>
            <div className="flex flex-col gap-3 sm:flex-row lg:flex-col lg:justify-self-end">
              <Button asChild className="bg-primary text-primary-foreground hover:bg-primary/90">
                <a href={withBase("/payroll-anywhere")}>EOR & Payroll <ArrowRight /></a>
              </Button>
              <Button asChild variant="outline">
                <a href={withBase("/executive-search")}>Recruitment <ArrowRight /></a>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

const CTABanner = () => {
  const { t } = useTranslation();
  return (
    <section className="bg-background pb-24">
      <div className="container-narrow">
        <div className="overflow-hidden rounded-3xl border border-border bg-gradient-hero p-10 text-primary-foreground shadow-elevated lg:p-14">
          <div className="grid gap-8 lg:grid-cols-[1.4fr_1fr] lg:items-center">
            <div>
              <h2 className="font-display text-3xl font-semibold sm:text-4xl">
                {t("hrOutsourcingPage.ctaPrimary")}
              </h2>
              <p className="mt-4 max-w-xl text-white/75">{t("hrOutsourcingPage.sub")}</p>
            </div>
            <div className="lg:justify-self-end">
              <Button
                asChild
                size="lg"
                className="bg-accent text-accent-foreground hover:bg-accent/90"
              >
                <a href={BOOKING_URL} target="_blank" rel="noopener noreferrer">
                  {t("hrOutsourcingPage.ctaPrimary")} <ArrowRight />
                </a>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default function HROutsourcing() {
  usePageMeta();
  return (
    <main className="min-h-screen bg-background">
      <SiteHeader />
      <Hero />
      <UseCases />
      <Included />
      <Integration />
      <CTABanner />
      <SiteFooter />
    </main>
  );
}
