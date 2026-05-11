import { useTranslation } from "react-i18next";
import { Button } from "@/components/ui/button";
import {
  ArrowRight,
  ShieldCheck,
  Globe2,
  Sparkles,
  CheckCircle2,
  Calendar,
  Check,
  Users,
} from "lucide-react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { useCountUp, useInView } from "@/hooks/use-count-up";
import { withBase } from "@/lib/href";
import { SiteHeader } from "@/components/site/SiteHeader";
import { SiteFooter } from "@/components/site/SiteFooter";
import { WhyMarsSection } from "@/components/site/WhyMarsSection";
import {
  CountriesMapSection,
  ComparisonSection,
  HowItWorksSection,
} from "@/components/site/EORSections";

interface CountStatProps {
  to: number;
  suffix?: string;
  prefix?: string;
  decimals?: number;
  label: string;
  className?: string;
  labelClassName?: string;
}

const CountStat = ({
  to,
  suffix = "",
  prefix = "",
  decimals = 0,
  label,
  className,
  labelClassName,
}: CountStatProps) => {
  const { ref, inView } = useInView<HTMLDivElement>();
  const value = useCountUp({ to, start: inView });
  const display =
    decimals > 0 ? value.toFixed(decimals) : Math.round(value).toLocaleString("en-US");
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

const Hero = () => {
  const { t } = useTranslation();
  const snapshotRows: { country: string; ppl: string; tax: string }[] = [
    { country: "Singapore", ppl: "42 employees", tax: "CPF · IR8A filed" },
    { country: "Malaysia", ppl: "31 employees", tax: "EPF · SOCSO filed" },
    { country: "Hong Kong", ppl: "24 employees", tax: "MPF filed" },
    { country: "China", ppl: "18 employees", tax: "Social Insurance filed" },
  ];
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
      <div className="pointer-events-none absolute -bottom-24 right-0 h-[380px] w-[380px] rounded-full bg-white/10 blur-3xl animate-blob-drift [animation-delay:-7s]" />
      <div className="container-narrow relative grid gap-12 py-20 lg:grid-cols-[1.15fr_1fr] lg:items-center lg:py-28">
        <div className="animate-fade-up">
          <span className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-3 py-1 text-xs font-medium uppercase tracking-[0.16em] text-white/80">
            <span className="h-1.5 w-1.5 rounded-full bg-accent" />
            {t("hero.pill")}
          </span>
          <h1 className="mt-6 font-display text-4xl font-semibold leading-[1.05] text-white sm:text-5xl lg:text-[64px]">
            {t("hero.headlineLead")} <span className="text-accent">{t("hero.headlineAccent")}</span>
          </h1>
          <p className="mt-6 max-w-xl text-base text-white/75 sm:text-lg">{t("hero.sub")}</p>
          <div className="mt-8 flex flex-wrap items-center gap-3">
            <Button asChild size="lg" className="bg-accent text-accent-foreground hover:bg-accent/90">
              <a href="#contact">
                {t("hero.ctaPrimary")} <ArrowRight />
              </a>
            </Button>
            <Button
              asChild
              size="lg"
              variant="outline"
              className="border-white/25 bg-transparent text-white hover:bg-white/10 hover:text-white"
            >
              <a href="#about">{t("hero.ctaSecondary")}</a>
            </Button>
          </div>
        </div>

        {/* Service deliverable preview — monthly compliance snapshot */}
        <div className="relative animate-fade-up [animation-delay:120ms]">
          <div className="rounded-2xl border border-white/10 bg-white/5 p-4 shadow-elevated backdrop-blur-sm">
            <div className="flex items-start justify-between gap-4 px-1 pb-4 pt-1">
              <div>
                <p className="text-[10px] font-medium uppercase tracking-[0.16em] text-white/65">
                  {t("hero.snapshotEyebrow")}
                </p>
                <p className="mt-1 text-xs text-white/50">{t("hero.snapshotSample")}</p>
              </div>
              <span className="rounded-full bg-accent/15 px-2.5 py-1 text-[10px] font-medium uppercase tracking-wider text-accent">
                {t("hero.snapshotStatus")}
              </span>
            </div>
            <div className="rounded-xl bg-background p-5 text-foreground">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-xs text-muted-foreground">{t("hero.snapshotHeadcount")}</p>
                  <p className="font-display text-3xl font-semibold">128</p>
                </div>
                <span className="rounded-full bg-accent/10 px-2.5 py-1 text-xs font-medium text-accent">
                  {t("hero.snapshotDelta")}
                </span>
              </div>
              <div className="mt-5 space-y-2">
                {snapshotRows.map((r) => (
                  <div
                    key={r.country}
                    className="flex items-center justify-between rounded-lg border border-border/60 bg-muted/40 px-3 py-2.5"
                  >
                    <div className="flex items-center gap-2.5">
                      <Globe2 className="h-4 w-4 text-primary" />
                      <span className="text-sm font-medium">{r.country}</span>
                    </div>
                    <span className="text-xs text-muted-foreground">{r.ppl} · {r.tax}</span>
                  </div>
                ))}
              </div>
              <div className="mt-4 flex items-center justify-between border-t border-border pt-3 text-xs text-muted-foreground">
                <span>{t("hero.snapshotPayroll")}</span>
                <span className="font-medium text-foreground">{t("hero.snapshotPayrollValue")}</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

const TrustBar = () => {
  const { t } = useTranslation();
  return (
    <section className="border-y border-border bg-background">
      <div className="container-narrow py-10">
        <div className="grid grid-cols-2 gap-x-6 gap-y-8 sm:grid-cols-4">
          <CountStat
            to={2009}
            label={t("hero.statYears")}
            className="font-display text-3xl font-semibold text-foreground"
            labelClassName="mt-1.5 whitespace-nowrap text-[11px] uppercase tracking-wider text-muted-foreground"
          />
          <CountStat
            to={8}
            label={t("hero.statMarkets")}
            className="font-display text-3xl font-semibold text-foreground"
            labelClassName="mt-1.5 whitespace-nowrap text-[11px] uppercase tracking-wider text-muted-foreground"
          />
          <CountStat
            to={100}
            suffix="+"
            label={t("hero.statConsultants")}
            className="font-display text-3xl font-semibold text-foreground"
            labelClassName="mt-1.5 whitespace-nowrap text-[11px] uppercase tracking-wider text-muted-foreground"
          />
          <div>
            <p className="font-display text-3xl font-semibold text-foreground">09C2925</p>
            <p className="mt-1.5 whitespace-nowrap text-[11px] uppercase tracking-wider text-muted-foreground">
              {t("hero.statLicence")}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

const LicenseStrip = () => {
  const { t } = useTranslation();
  const items = [
    {
      authority: t("licenses.mom.authority"),
      label: t("licenses.mom.label"),
      code: t("licenses.mom.code"),
    },
    {
      authority: t("licenses.mas.authority"),
      label: t("licenses.mas.label"),
      code: t("licenses.mas.code"),
    },
    {
      authority: t("licenses.acra.authority"),
      label: t("licenses.acra.label"),
      code: t("licenses.acra.code"),
    },
  ];
  return (
    <section className="border-y border-border bg-background">
      <div className="container-narrow py-10">
        <p className="eyebrow text-center">{t("licenses.eyebrow")}</p>
        <div className="mt-6 grid gap-4 sm:grid-cols-3">
          {items.map((it) => (
            <div
              key={it.label}
              className="flex items-start gap-3 rounded-xl border border-border bg-card p-5 shadow-card"
            >
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

interface TwinPillar {
  id: string;
  keyBase: "twinPillars.eor" | "twinPillars.recruitment";
  ctaHref: string;
  icon: React.ComponentType<{ className?: string }>;
}

const TWIN_PILLARS: TwinPillar[] = [
  { id: "eor", keyBase: "twinPillars.eor", ctaHref: "/eor", icon: Globe2 },
  { id: "recruitment", keyBase: "twinPillars.recruitment", ctaHref: "/recruitment", icon: Users },
];

const TwinPillarCard = ({ p }: { p: TwinPillar }) => {
  const { t } = useTranslation();
  const Icon = p.icon;
  return (
    <article
      id={p.id}
      className="group relative flex flex-col overflow-hidden rounded-2xl border border-accent/40 bg-card p-8 shadow-elevated ring-1 ring-accent/20 transition-all hover:-translate-y-0.5"
    >
      <span className="pointer-events-none absolute inset-x-0 top-0 h-1 bg-gradient-to-r from-accent/0 via-accent to-accent/0" />
      <div className="flex items-center justify-between">
        <span className="grid h-12 w-12 place-items-center rounded-lg bg-primary text-primary-foreground">
          <Icon className="h-5 w-5" />
        </span>
        <span className="rounded-full border border-border bg-muted/60 px-2.5 py-0.5 text-[10px] font-medium uppercase tracking-wider text-muted-foreground">
          {t(`${p.keyBase}.tag`)}
        </span>
      </div>
      <h3 className="mt-6 font-display text-2xl font-semibold leading-tight text-foreground">
        {t(`${p.keyBase}.title`)}
      </h3>
      <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{t(`${p.keyBase}.body`)}</p>
      <ul className="mt-5 space-y-2.5">
        {(["bullet1", "bullet2", "bullet3"] as const).map((bk) => (
          <li key={bk} className="flex items-start gap-2.5 text-sm text-foreground/85">
            <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-accent" />
            <span>{t(`${p.keyBase}.${bk}`)}</span>
          </li>
        ))}
      </ul>
      <div className="mt-auto pt-7 border-t border-border">
        <Button asChild className="bg-primary text-primary-foreground hover:bg-primary/90">
          <a href={withBase(p.ctaHref)}>
            {t(`${p.keyBase}.cta`)} <ArrowRight />
          </a>
        </Button>
      </div>
    </article>
  );
};

const TwinPillars = () => {
  const { t } = useTranslation();
  return (
    <section className="bg-background py-24">
      <div className="container-narrow">
        <div className="max-w-3xl">
          <p className="eyebrow">{t("twinPillars.eyebrow")}</p>
          <h2 className="mt-3 font-display text-3xl font-semibold sm:text-4xl">
            {t("twinPillars.headline")}
          </h2>
        </div>
        <div className="mt-12 grid gap-6 lg:grid-cols-2">
          {TWIN_PILLARS.map((p) => (
            <TwinPillarCard key={p.id} p={p} />
          ))}
        </div>
      </div>
    </section>
  );
};

const FAQTeaser = () => {
  const { t } = useTranslation();
  const items = (["1", "2", "3"] as const).map((i) => ({
    q: t(`faqTeaser.q${i}`),
    a: t(`faqTeaser.a${i}`),
  }));
  return (
    <section className="border-t border-border bg-background py-24">
      <div className="container-narrow">
        <div className="max-w-2xl">
          <p className="eyebrow">{t("faqTeaser.eyebrow")}</p>
          <h2 className="mt-3 font-display text-3xl font-semibold sm:text-4xl">
            {t("faqTeaser.headline")}
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
              value={`faq-${i}`}
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
        <p className="mt-6 text-sm text-muted-foreground">
          <a href={withBase("/eor#faq")} className="font-medium text-foreground underline-offset-4 hover:underline">
            {t("faqTeaser.readAll")}
          </a>
        </p>
      </div>
    </section>
  );
};

const AIInnovationBlock = () => {
  const { t } = useTranslation();
  return (
    <section id="ai-lab" className="border-t border-border bg-background py-16">
      <div className="container-narrow grid gap-8 lg:grid-cols-[1fr_1.4fr] lg:items-center">
        <div className="flex items-center gap-4">
          <span className="grid h-12 w-12 place-items-center rounded-lg bg-primary/10 text-primary">
            <Sparkles className="h-5 w-5" />
          </span>
          <div>
            <p className="eyebrow">{t("aiBlock.eyebrow")}</p>
            <h2 className="font-display text-2xl font-semibold text-foreground">{t("aiBlock.title")}</h2>
          </div>
        </div>
        <div>
          <p className="text-muted-foreground">{t("aiBlock.body")}</p>
          <a
            href={withBase("/ai-innovation")}
            className="mt-4 inline-flex items-center gap-1.5 text-sm font-medium text-foreground underline-offset-4 hover:underline"
          >
            {t("aiBlock.cta")} <ArrowRight className="h-4 w-4" />
          </a>
        </div>
      </div>
    </section>
  );
};

const LogoMarquee = () => {
  const { t } = useTranslation();
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
          {t("marquee.label")}
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


const CLIENT_LOGOS: string[] = [
  "cd2d3a_b0677f4d0b6e48738fffd0611d7555a9mv2.png",
  "cd2d3a_9d6afc0f1b0244dfacf4138799ef18e9mv2.png",
  "cd2d3a_63f1981b7e9b49ee87b6bcd314258748mv2.png",
  "cd2d3a_f866bc6db7b64948890853b22fc727ffmv2.png",
  "cd2d3a_a15225f158514a19a64c40531e537777mv2.png",
  "cd2d3a_7359bcf89035429dae024730477f9fc1mv2.png",
  "cd2d3a_9081dc4a1b0944c280d6cd48655c2278mv2.png",
  "cd2d3a_54583bb9b07e4932a5e9c8d1e1e48c7amv2.png",
  "cd2d3a_b3af992ce69b4c58ae72386b0bcf1f37mv2.png",
  "cd2d3a_b980eb97d2de42e295cc3c098650b177mv2.png",
  "cd2d3a_5382acda8bb447189ac3e6b95c66f375mv2.png",
  "cd2d3a_10fe9a1d545d4c16ae5189bf934383c2mv2.png",
  "cd2d3a_6dd37d513261487b8a99565ba2a4d215mv2.png",
  "acb62c_2d7c5d44efaf4dbda51f1ad53f08f5e1mv2.jpg",
  "acb62c_de121da1b70344dba9043203bab102f9mv2.jpg",
];

const Clients = () => {
  const { t } = useTranslation();
  return (
    <section id="clients" className="border-t border-border bg-background py-24">
      <div className="container-narrow">
        <p className="eyebrow text-center">{t("clients.eyebrow")}</p>
        <h2 className="mx-auto mt-3 max-w-2xl text-center font-display text-3xl font-semibold sm:text-4xl">
          {t("clients.headline")}
        </h2>
        <div className="mt-12 grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-5">
          {CLIENT_LOGOS.map((file) => (
            <div
              key={file}
              className="group flex aspect-[3/2] items-center justify-center rounded-xl border border-border bg-card p-5 shadow-card transition-all hover:-translate-y-0.5 hover:shadow-elevated"
            >
              <img
                src={`${import.meta.env.BASE_URL}clients/${file}`}
                alt="Mars Consulting client"
                loading="lazy"
                className="max-h-14 w-auto max-w-full object-contain opacity-80 grayscale transition-all duration-300 group-hover:opacity-100 group-hover:grayscale-0"
              />
            </div>
          ))}
        </div>
        <p className="mx-auto mt-10 max-w-3xl text-center text-sm text-muted-foreground">
          {t("clients.logosNote")}
        </p>
      </div>
    </section>
  );
};

const Testimonial = () => {
  const { t } = useTranslation();
  return (
    <section className="bg-primary py-24 text-primary-foreground">
      <div className="container-narrow grid gap-12 lg:grid-cols-2 lg:items-center">
        <div>
          <p className="eyebrow text-white/60">{t("testimonial.eyebrow")}</p>
          <h2 className="mt-3 font-display text-3xl font-semibold sm:text-4xl">
            {t("testimonial.headline")}
          </h2>
          <p className="mt-5 max-w-lg text-white/75">{t("testimonial.body")}</p>
          <div className="mt-8 grid grid-cols-2 gap-6 border-t border-white/10 pt-8 max-w-xs">
            {[
              { n: "100+", l: t("testimonial.statConsultants") },
              { n: "3", l: t("testimonial.statLicences") },
            ].map((s) => (
              <div key={s.l}>
                <p className="font-display text-2xl font-semibold">{s.n}</p>
                <p className="mt-1 text-xs uppercase tracking-wider text-white/55">{s.l}</p>
              </div>
            ))}
          </div>
        </div>
        <figure className="rounded-2xl border border-white/10 bg-white/[0.04] p-8">
          <blockquote className="font-display text-xl leading-relaxed text-white/90">
            &ldquo;{t("testimonial.quote")}&rdquo;
          </blockquote>
          <figcaption className="mt-6 flex items-center gap-3">
            <span className="grid h-10 w-10 place-items-center rounded-full bg-accent/20 font-display text-sm font-semibold text-accent">
              A
            </span>
            <div>
              <p className="text-sm font-medium text-white">{t("testimonial.attribution")}</p>
              <p className="text-xs text-white/60">{t("testimonial.location")}</p>
            </div>
          </figcaption>
        </figure>
      </div>
    </section>
  );
};

const Contact = () => {
  const { t } = useTranslation();
  const fields = [
    { key: "email" as const, type: "email" },
    { key: "company" as const, type: "text" },
    { key: "country" as const, type: "text" },
    { key: "hires" as const, type: "number" },
  ];
  return (
    <section id="contact" className="bg-background py-24">
      <div className="container-narrow">
        <div className="overflow-hidden rounded-3xl border border-border bg-card shadow-elevated">
          <div className="grid gap-0 lg:grid-cols-[1.1fr_1fr]">
            <div className="bg-gradient-hero p-10 text-primary-foreground lg:p-12">
              <p className="eyebrow text-white/60">{t("contact.eyebrow")}</p>
              <h2 className="mt-3 font-display text-3xl font-semibold sm:text-4xl">
                {t("contact.headline")}
              </h2>
              <ul className="mt-8 space-y-3 text-sm text-white/80">
                {(["bullet1", "bullet2", "bullet3"] as const).map((k) => (
                  <li key={k} className="flex items-start gap-2.5">
                    <CheckCircle2 className="mt-0.5 h-4 w-4 text-accent" />
                    <span>{t(`contact.${k}`)}</span>
                  </li>
                ))}
              </ul>
              <div className="mt-10 flex items-center gap-3 text-xs text-white/60">
                <Calendar className="h-4 w-4" /> {t("contact.response")}
              </div>
            </div>
            <form className="space-y-4 p-10 lg:p-12" onSubmit={(e) => e.preventDefault()}>
              {fields.map((f) => (
                <div key={f.key}>
                  <label className="text-xs font-medium uppercase tracking-wider text-muted-foreground">
                    {t(`contact.label.${f.key}`)}
                  </label>
                  <input
                    type={f.type}
                    placeholder={t(`contact.placeholder.${f.key}`)}
                    className="mt-1.5 h-11 w-full rounded-md border border-input bg-background px-3 text-sm focus:outline-none focus:ring-2 focus:ring-ring"
                  />
                </div>
              ))}
              <Button
                type="submit"
                className="w-full bg-accent text-accent-foreground hover:bg-accent/90"
                size="lg"
              >
                {t("contact.submit")} <ArrowRight />
              </Button>
              <p className="text-xs text-muted-foreground">{t("contact.privacy")}</p>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

const Index = () => (
  <main className="min-h-screen bg-background">
    <SiteHeader />
    <Hero />
    <TrustBar />
    <LicenseStrip />
    <TwinPillars />
    <HowItWorksSection />
    <ComparisonSection />
    <WhyMarsSection />
    <CountriesMapSection />
    <LogoMarquee />
    <Clients />
    <FAQTeaser />
    <AIInnovationBlock />
    <Testimonial />
    <Contact />
    <SiteFooter />
  </main>
);

export default Index;
