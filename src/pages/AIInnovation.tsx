import { useEffect } from "react";
import {
  ArrowRight,
  MessageCircle,
  Calculator,
  Users,
  ShieldCheck,
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
import { withBase, BOOKING_URL } from "@/lib/href";
import { headlineGap, isCJKLang } from "@/lib/headline";
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
    document.title = t("aiPage.metaTitle");
    setMeta("description", t("aiPage.metaDesc"));
    return () => {
      document.title = prevTitle;
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
          {t("aiPage.pill")}
        </span>
        <h1 className={`mt-6 max-w-4xl font-display text-4xl font-semibold text-white sm:text-5xl lg:text-[60px] ${cjk ? "!leading-[1.22]" : "!leading-[1.05]"}`}>
          {t("aiPage.headlineLead")}
          {headlineGap(t("aiPage.headlineLead"), t("aiPage.headlineAccent"))}
          <span className="whitespace-nowrap text-accent">{t("aiPage.headlineAccent")}</span>
        </h1>
        <p className="mt-6 max-w-3xl text-base text-white/75 sm:text-lg">{t("aiPage.sub")}</p>
        <div className="mt-8 flex flex-wrap items-center gap-3">
          <Button asChild size="lg" className="bg-accent text-accent-foreground hover:bg-accent/90">
            <a href={BOOKING_URL} target="_blank" rel="noopener noreferrer">
              {t("aiPage.ctaPrimary")} <ArrowRight />
            </a>
          </Button>
          <Button
            asChild
            size="lg"
            variant="outline"
            className="border-white/25 bg-transparent text-white hover:bg-white/10 hover:text-white"
          >
            <a href="#capabilities">{t("aiPage.ctaSecondary")}</a>
          </Button>
        </div>
        <div className="mt-8 flex flex-wrap items-center gap-3">
          {([t("aiPage.trustBadge1"), t("aiPage.trustBadge2"), t("aiPage.trustBadge3")] as const).map((badge) => (
            <span
              key={badge}
              className="inline-flex items-center gap-1.5 rounded-full border border-white/15 bg-white/5 px-3 py-1 text-xs text-white/70"
            >
              <ShieldCheck className="h-3 w-3 text-accent" />
              {badge}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
};

const Capabilities = () => {
  const { t } = useTranslation();
  const items = [
    {
      title: t("aiPage.capabilities.whatsapp.title"),
      body: t("aiPage.capabilities.whatsapp.body"),
      bullets: [
        t("aiPage.capabilities.whatsapp.bullet1"),
        t("aiPage.capabilities.whatsapp.bullet2"),
        t("aiPage.capabilities.whatsapp.bullet3"),
      ],
      icon: MessageCircle,
    },
    {
      title: t("aiPage.capabilities.payroll.title"),
      body: t("aiPage.capabilities.payroll.body"),
      bullets: [
        t("aiPage.capabilities.payroll.bullet1"),
        t("aiPage.capabilities.payroll.bullet2"),
        t("aiPage.capabilities.payroll.bullet3"),
      ],
      icon: Calculator,
    },
    {
      title: t("aiPage.capabilities.consultants.title"),
      body: t("aiPage.capabilities.consultants.body"),
      bullets: [
        t("aiPage.capabilities.consultants.bullet1"),
        t("aiPage.capabilities.consultants.bullet2"),
        t("aiPage.capabilities.consultants.bullet3"),
      ],
      icon: Users,
    },
    {
      title: t("aiPage.capabilities.onboarding.title"),
      body: t("aiPage.capabilities.onboarding.body"),
      bullets: [
        t("aiPage.capabilities.onboarding.bullet1"),
        t("aiPage.capabilities.onboarding.bullet2"),
        t("aiPage.capabilities.onboarding.bullet3"),
      ],
      icon: CheckCircle2,
    },
  ];
  return (
    <section id="capabilities" className="bg-background py-24">
      <div className="container-narrow">
        <div className="max-w-2xl">
          <p className="eyebrow">{t("aiPage.capabilities.eyebrow")}</p>
          <h2 className="mt-3 font-display text-3xl font-semibold sm:text-4xl">
            {t("aiPage.capabilities.headline")}
          </h2>
        </div>
        <div className="mt-12 grid gap-6 sm:grid-cols-2">
          {items.map((c) => {
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
};

const Compliance = () => {
  const { t } = useTranslation();
  return (
    <section className="border-t border-border bg-secondary/40 py-24">
      <div className="container-narrow grid gap-10 lg:grid-cols-[1fr_1.4fr] lg:items-start">
        <div>
          <p className="eyebrow">{t("aiPage.compliance.eyebrow")}</p>
          <h2 className="mt-3 font-display text-3xl font-semibold sm:text-4xl">
            {t("aiPage.compliance.headline")}
          </h2>
        </div>
        <div className="space-y-5 text-base leading-relaxed text-muted-foreground">
          <p>{t("aiPage.compliance.p1")}</p>
          <p>{t("aiPage.compliance.p2")}</p>
          <p className="font-medium text-foreground">{t("aiPage.compliance.p3")}</p>
          <div className="flex items-start gap-3 rounded-xl border border-border bg-card p-5 shadow-card">
            <span className="grid h-10 w-10 shrink-0 place-items-center rounded-lg bg-primary/5 text-primary">
              <ShieldCheck className="h-5 w-5" />
            </span>
            <div>
              <p className="font-display text-base font-semibold text-foreground">
                {t("aiPage.compliance.badgeTitle")}
              </p>
              <p className="mt-1 text-sm text-muted-foreground">
                {t("aiPage.compliance.badgeBody")}
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

const FAQ = () => {
  const { t } = useTranslation();
  const items = (["1", "2", "3", "4"] as const).map((i) => ({
    q: t(`aiPage.faq.q${i}`),
    a: t(`aiPage.faq.a${i}`),
  }));
  return (
    <section id="faq" className="border-t border-border bg-background py-24">
      <div className="container-narrow">
        <div className="max-w-2xl">
          <p className="eyebrow">{t("aiPage.faq.eyebrow")}</p>
          <h2 className="mt-3 font-display text-3xl font-semibold sm:text-4xl">
            {t("aiPage.faq.headline")}
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
};

const CTABanner = () => {
  const { t } = useTranslation();
  return (
    <section className="bg-background py-24">
      <div className="container-narrow">
        <div className="overflow-hidden rounded-3xl border border-border bg-gradient-hero p-10 text-primary-foreground shadow-elevated lg:p-14">
          <div className="grid gap-8 lg:grid-cols-[1.4fr_1fr] lg:items-center">
            <div>
              <h2 className="font-display text-3xl font-semibold sm:text-4xl">
                {t("aiPage.ctaBanner.headline")}
              </h2>
              <p className="mt-4 max-w-xl text-white/75">{t("aiPage.ctaBanner.body")}</p>
            </div>
            <div className="lg:justify-self-end">
              <Button
                asChild
                size="lg"
                className="bg-accent text-accent-foreground hover:bg-accent/90"
              >
                <a href={BOOKING_URL} target="_blank" rel="noopener noreferrer">
                  {t("aiPage.ctaBanner.cta")} <ArrowRight />
                </a>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

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
