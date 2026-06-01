import { useTranslation } from "react-i18next";
import { Button } from "@/components/ui/button";
import {
  ArrowRight,
  ShieldCheck,
  Globe2,
  CheckCircle2,
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
import { withBase, BOOKING_URL } from "@/lib/href";
import { headlineGap, needsLooseLeading } from "@/lib/headline";
import { SiteHeader } from "@/components/site/SiteHeader";
import { SiteFooter } from "@/components/site/SiteFooter";
import { WhyMarsSection } from "@/components/site/WhyMarsSection";
import { CountriesMapSection } from "@/components/site/EORSections";

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
  const display = decimals > 0 ? value.toFixed(decimals) : String(Math.round(value));
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

const COUNTRY_FLAGS: Record<string, string> = {
  SG: "🇸🇬", MY: "🇲🇾", HK: "🇭🇰", CN: "🇨🇳", VN: "🇻🇳", TH: "🇹🇭", ID: "🇮🇩",
};

// Count up the first numeric token inside a localized string (e.g. the payroll
// value "SGD 412,890 · cleared") from 0 → target as `progress` goes 0 → 1,
// keeping the surrounding text and thousands separators intact.
const countUpInString = (str: string, progress: number): string => {
  const match = str.match(/\d[\d,]*(?:\.\d+)?/);
  if (!match) return str;
  const target = Number(match[0].replace(/,/g, ""));
  if (!Number.isFinite(target)) return str;
  const current = Math.round(target * progress).toLocaleString("en-US");
  return str.replace(match[0], current);
};

const Hero = () => {
  const { t, i18n } = useTranslation();
  const cjk = needsLooseLeading(i18n.resolvedLanguage);
  const countries = [
    { code: "SG", name: "Singapore", n: 38 },
    { code: "MY", name: "Malaysia", n: 26 },
    { code: "HK", name: "Hong Kong", n: 18 },
    { code: "CN", name: "China", n: 14 },
    { code: "VN", name: "Vietnam", n: 12 },
    { code: "TH", name: "Thailand", n: 11 },
  ];
  const maxHeadcount = 38;
  const { ref: snapshotRef, inView: snapshotInView } = useInView<HTMLDivElement>();
  const progress = useCountUp({ to: 1, start: snapshotInView });
  return (
    <section className="relative overflow-hidden bg-gradient-hero text-primary-foreground">
      {/* Dot texture — identical spec to the subpage heroes so the base
          background matches across the whole site. */}
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.07]"
        style={{
          backgroundImage:
            "radial-gradient(hsl(var(--primary-foreground)) 1px, transparent 1px)",
          backgroundSize: "28px 28px",
        }}
      />
      {/* Richer animated aurora than the subpages (home-only flourish): three
          accent blobs drifting on desynced cycles. */}
      <div className="pointer-events-none absolute -top-40 -left-24 h-[560px] w-[560px] rounded-full bg-accent/20 blur-[120px] animate-blob-drift" />
      <div
        className="pointer-events-none absolute top-1/4 right-[-8%] h-[460px] w-[460px] rounded-full bg-accent/14 blur-[110px] animate-blob-drift"
        style={{ animationDelay: "-7s", animationDuration: "19s" }}
      />
      <div
        className="pointer-events-none absolute -bottom-32 left-1/3 h-[420px] w-[420px] rounded-full bg-accent/10 blur-[100px] animate-blob-drift"
        style={{ animationDelay: "-3.5s", animationDuration: "22s" }}
      />

      <div className="container-narrow relative py-24 lg:py-32">
        <div className="grid gap-16 lg:grid-cols-[1.1fr_1fr] lg:items-stretch">
          <div className="animate-fade-up">
            <span className="inline-flex items-center gap-2.5 rounded-full border border-white/12 bg-white/[0.06] px-4 py-1.5 text-[11px] font-medium uppercase tracking-[0.18em] text-white/70 backdrop-blur-sm">
              <span className="h-1.5 w-1.5 rounded-full bg-accent animate-pulse" />
              {t("hero.pill")}
            </span>
            <h1 className={`mt-8 font-display text-[clamp(2.5rem,5vw,4.5rem)] font-semibold tracking-tight text-white ${cjk ? "!leading-[1.18]" : "!leading-[1.02]"}`}>
              {t("hero.headlineLead")}
              {headlineGap(t("hero.headlineLead"), t("hero.headlineAccent"))}
              <span className="whitespace-nowrap bg-gradient-to-r from-accent to-orange-soft bg-clip-text text-transparent">{t("hero.headlineAccent")}</span>
            </h1>
            <p className="mt-7 max-w-lg text-base leading-relaxed text-white/60 sm:text-[17px]">{t("hero.sub")}</p>
            <div className="mt-10 flex flex-wrap items-center gap-4">
              <Button asChild size="lg" className="h-12 rounded-xl bg-accent px-7 text-[15px] font-semibold text-white shadow-[0_0_24px_hsl(15_99%_69%/0.35)] hover:bg-accent/90 hover:shadow-[0_0_32px_hsl(15_99%_69%/0.45)] transition-shadow">
                <a href={BOOKING_URL} target="_blank" rel="noopener noreferrer">
                  {t("hero.ctaPrimary")} <ArrowRight className="ml-1 h-4 w-4" />
                </a>
              </Button>
              <Button
                asChild
                size="lg"
                variant="outline"
                className="h-12 rounded-xl border-white/15 bg-white/[0.06] px-7 text-[15px] text-white backdrop-blur-sm hover:bg-white/10 hover:text-white"
              >
                <a href="#about">{t("hero.ctaSecondary")}</a>
              </Button>
            </div>
          </div>

          <div ref={snapshotRef} className="relative hidden h-full animate-fade-up [animation-delay:150ms] lg:block">
            <div className="absolute -inset-4 rounded-3xl bg-accent/[0.06] blur-2xl" />
            <div className="relative flex h-full flex-col rounded-2xl border border-white/[0.08] bg-white/[0.04] p-5 backdrop-blur-md">
              <div className="flex items-center justify-between gap-2 pb-4">
                <div className="flex min-w-0 items-center gap-2.5">
                  <div className="grid h-7 w-7 shrink-0 place-items-center rounded-lg bg-accent/15">
                    <ShieldCheck className="h-3.5 w-3.5 text-accent" />
                  </div>
                  <p className="truncate text-[11px] font-medium uppercase tracking-[0.14em] text-white/60">
                    {t("hero.snapshotEyebrow")}
                  </p>
                </div>
                <span className="flex shrink-0 items-center gap-1.5 whitespace-nowrap rounded-full border border-white/15 bg-white/[0.08] px-2.5 py-1 text-[10px] font-semibold uppercase tracking-wider text-white/70 backdrop-blur-sm">
                  <span className="relative flex h-1.5 w-1.5">
                    <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-accent/60" />
                    <span className="relative inline-flex h-1.5 w-1.5 rounded-full bg-accent" />
                  </span>
                  {t("hero.snapshotStatus")}
                </span>
              </div>

              <div className="flex flex-1 flex-col rounded-xl bg-background/95 p-5 text-foreground shadow-card">
                <div className="flex items-end justify-between gap-3">
                  <div className="min-w-0">
                    <p className="text-[11px] uppercase tracking-wider text-muted-foreground">{t("hero.snapshotHeadcount")}</p>
                    <p className="mt-1 font-display text-4xl font-bold tracking-tight tabular-nums">{Math.round(128 * progress)}</p>
                  </div>
                  <span className="mb-1 inline-flex shrink-0 items-center gap-1 whitespace-nowrap rounded-md bg-accent/10 px-2 py-1 text-xs font-semibold text-accent">
                    <ArrowRight className="h-3 w-3 -rotate-45" />
                    {t("hero.snapshotDelta")}
                  </span>
                </div>
                <div className="mt-5 flex flex-1 flex-col justify-center gap-3.5">
                  {countries.map((c) => (
                    <div key={c.code} className="flex items-center gap-3">
                      <span className="text-base leading-none">{COUNTRY_FLAGS[c.code]}</span>
                      <span className="w-20 text-xs font-medium text-foreground">{c.name}</span>
                      <div className="h-1.5 flex-1 overflow-hidden rounded-full bg-muted">
                        <div className="h-full rounded-full bg-accent transition-[width] duration-150 ease-out" style={{ width: `${(c.n / maxHeadcount) * 100 * progress}%` }} />
                      </div>
                      <span className="w-6 text-right font-display text-sm font-semibold tabular-nums">{Math.round(c.n * progress)}</span>
                    </div>
                  ))}
                </div>
                <div className="mt-5 flex items-center justify-between rounded-lg bg-accent/[0.06] px-3 py-2.5">
                  <span className="text-xs text-muted-foreground">{t("hero.snapshotPayroll")}</span>
                  <span className="font-display text-sm font-semibold text-foreground tabular-nums">{countUpInString(t("hero.snapshotPayrollValue"), progress)}</span>
                </div>
              </div>

              <p className="mt-4 flex items-center justify-center gap-2 text-[10px] text-white/35">
                <ShieldCheck className="h-3 w-3 text-accent/60" />
                {t("hero.snapshotBadge")}
              </p>
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
        <div className="grid grid-cols-2 gap-x-6 gap-y-8 sm:grid-cols-3 lg:grid-cols-5">
          <CountStat
            to={2009}
            label={t("hero.statYears")}
            className="font-display text-3xl font-semibold text-foreground"
            labelClassName="mt-1.5 whitespace-nowrap text-[11px] uppercase tracking-wider text-muted-foreground"
          />
          <CountStat
            to={10}
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
          <div>
            <p className="font-display text-3xl font-semibold text-foreground">{t("hero.statAcraValue")}</p>
            <p className="mt-1.5 whitespace-nowrap text-[11px] uppercase tracking-wider text-muted-foreground">
              {t("hero.statAcra")}
            </p>
          </div>
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
      className="group relative flex flex-col overflow-hidden rounded-2xl border border-border bg-card p-8 shadow-card transition-all duration-300 hover:-translate-y-1 hover:border-accent/50 hover:shadow-[0_0_0_1px_hsl(15_99%_69%/0.45),0_20px_45px_-15px_hsl(15_99%_69%/0.35)]"
    >
      <span className="pointer-events-none absolute inset-x-0 top-0 h-1 bg-gradient-to-r from-accent/0 via-accent to-accent/0 opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
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


const Index = () => (
  <main className="min-h-screen bg-background">
    <SiteHeader />
    <Hero />
    <TrustBar />
    <TwinPillars />
    <WhyMarsSection />
    <CountriesMapSection />
    <FAQTeaser />
    <SiteFooter />
  </main>
);

export default Index;
