import { useEffect, useState, useRef } from "react";
import { useTranslation } from "react-i18next";
import { Button } from "@/components/ui/button";
import {
  ArrowRight,
  ShieldCheck,
  Globe2,
  Sparkles,
  Cpu,
  CheckCircle2,
  Calendar,
  Check,
  X,
  Clock,
  Languages,
  ScrollText,
  Wallet,
  ChevronDown,
} from "lucide-react";
import { useCountUp, useInView } from "@/hooks/use-count-up";
import { SUPPORTED_LANGUAGES } from "@/i18n";

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
  const display = decimals > 0 ? value.toFixed(decimals) : Math.round(value).toString();
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

const LanguageSwitcher = () => {
  const { i18n } = useTranslation();
  const [open, setOpen] = useState(false);
  const wrapRef = useRef<HTMLDivElement | null>(null);
  const current =
    SUPPORTED_LANGUAGES.find((l) => l.code === i18n.resolvedLanguage) ??
    SUPPORTED_LANGUAGES[0];

  useEffect(() => {
    const onClickOutside = (e: MouseEvent) => {
      if (!wrapRef.current?.contains(e.target as Node)) setOpen(false);
    };
    document.addEventListener("mousedown", onClickOutside);
    return () => document.removeEventListener("mousedown", onClickOutside);
  }, []);

  return (
    <div ref={wrapRef} className="relative">
      <button
        type="button"
        onClick={() => setOpen((v) => !v)}
        className="flex h-10 items-center gap-1.5 rounded-md border border-border bg-background px-3 text-sm font-medium text-foreground hover:bg-muted"
        aria-haspopup="listbox"
        aria-expanded={open}
      >
        <Languages className="h-4 w-4 text-muted-foreground" />
        <span className="hidden sm:inline">{current.native}</span>
        <span className="inline sm:hidden uppercase">{current.code}</span>
        <ChevronDown className="h-3.5 w-3.5 text-muted-foreground" />
      </button>
      {open ? (
        <ul
          role="listbox"
          className="absolute right-0 z-50 mt-2 min-w-[180px] overflow-hidden rounded-md border border-border bg-popover py-1 shadow-elevated"
        >
          {SUPPORTED_LANGUAGES.map((lang) => (
            <li key={lang.code}>
              <button
                type="button"
                role="option"
                aria-selected={lang.code === current.code}
                onClick={() => {
                  void i18n.changeLanguage(lang.code);
                  setOpen(false);
                }}
                className={`flex w-full items-center justify-between gap-3 px-3 py-2 text-sm text-foreground hover:bg-muted ${
                  lang.code === current.code ? "bg-muted/60 font-medium" : ""
                }`}
              >
                <span>{lang.native}</span>
                {lang.code === current.code ? <Check className="h-4 w-4 text-accent" /> : null}
              </button>
            </li>
          ))}
        </ul>
      ) : null}
    </div>
  );
};

const Nav = () => {
  const { t } = useTranslation();
  const items = [
    [t("nav.eor"), "#eor"],
    [t("nav.hrAi"), "#hr-ai"],
    [t("nav.aiLab"), "#ai-lab"],
    [t("nav.about"), "#about"],
    [t("nav.contact"), "#contact"],
  ];
  return (
    <header className="sticky top-0 z-40 border-b border-border/60 bg-background/85 backdrop-blur">
      <div className="container-narrow flex h-20 items-center justify-between gap-6">
        <a href="/" className="flex items-center shrink-0" aria-label="Mars Consulting — home">
          <img
            src={`${import.meta.env.BASE_URL}mars-logo.png`}
            alt="Mars Consulting"
            className="h-11 w-auto"
          />
        </a>
        <nav className="hidden items-center gap-7 md:flex">
          {items.map(([label, href]) => (
            <a
              key={label}
              href={href}
              className="text-sm font-medium leading-none text-muted-foreground hover:text-foreground transition-colors"
            >
              {label}
            </a>
          ))}
        </nav>
        <div className="flex items-center gap-2 shrink-0">
          <LanguageSwitcher />
          <Button
            asChild
            className="h-10 px-5 text-sm bg-accent text-accent-foreground hover:bg-accent/90"
          >
            <a href="#contact">{t("nav.bookCall")}</a>
          </Button>
        </div>
      </div>
    </header>
  );
};

const Hero = () => {
  const { t } = useTranslation();
  const snapshotRows: { country: string; ppl: string; tax: string }[] = [
    { country: "Singapore", ppl: "42 employees", tax: "CPF · IR8A filed" },
    { country: "Indonesia", ppl: "31 employees", tax: "BPJS · PPh21 filed" },
    { country: "Vietnam", ppl: "24 employees", tax: "SI · PIT filed" },
    { country: "Malaysia", ppl: "18 employees", tax: "EPF · SOCSO filed" },
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
      <div className="container-narrow relative grid gap-12 py-20 lg:grid-cols-[1.15fr_1fr] lg:py-28">
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
          <div className="mt-12 grid grid-cols-2 gap-x-8 gap-y-6 border-t border-white/10 pt-8 sm:grid-cols-3">
            <CountStat
              to={17}
              label={t("hero.statYears")}
              labelClassName="mt-1 whitespace-nowrap text-xs uppercase tracking-wider text-white/55"
            />
            <CountStat
              to={8}
              label={t("hero.statMarkets")}
              labelClassName="mt-1 whitespace-nowrap text-xs uppercase tracking-wider text-white/55"
            />
            <CountStat
              to={100}
              suffix="+"
              label={t("hero.statConsultants")}
              labelClassName="mt-1 whitespace-nowrap text-xs uppercase tracking-wider text-white/55"
            />
            <CountStat
              to={100}
              suffix="+"
              label={t("hero.statClients")}
              labelClassName="mt-1 whitespace-nowrap text-xs uppercase tracking-wider text-white/55"
            />
            <CountStat
              to={2560}
              suffix="+"
              label={t("hero.statPlacements")}
              labelClassName="mt-1 whitespace-nowrap text-xs uppercase tracking-wider text-white/55"
            />
            <div className="flex items-start gap-2">
              <ShieldCheck className="mt-1 h-5 w-5 shrink-0 text-accent" />
              <div>
                <p className="font-display text-sm font-semibold leading-tight text-white">
                  09C2925
                </p>
                <p className="mt-1 whitespace-nowrap text-xs uppercase tracking-wider text-white/55">
                  {t("hero.statLicence")}
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Service deliverable preview — monthly compliance snapshot */}
        <div className="relative animate-fade-up [animation-delay:120ms]">
          <div className="rounded-2xl border border-white/10 bg-white/5 p-5 shadow-elevated backdrop-blur-sm">
            <div className="flex items-center justify-between pb-4">
              <div>
                <p className="text-[10px] font-medium uppercase tracking-[0.16em] text-white/55">
                  {t("hero.snapshotEyebrow")}
                </p>
                <p className="mt-0.5 text-xs text-white/45">{t("hero.snapshotSample")}</p>
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
          <div className="mt-4 inline-flex items-center gap-2 rounded-xl border border-border bg-card px-4 py-3 shadow-card">
            <ShieldCheck className="h-4 w-4 text-accent" />
            <span className="text-xs font-medium text-foreground">{t("hero.snapshotBadge")}</span>
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

interface PillarStatic {
  id: string;
  key: "eor" | "hrAi" | "aiLab";
  icon: React.ComponentType<{ className?: string }>;
  priority: "primary" | "secondary";
  featured?: boolean;
}

const PILLARS: PillarStatic[] = [
  { id: "eor", key: "eor", icon: Globe2, priority: "primary", featured: true },
  { id: "hr-ai", key: "hrAi", icon: Cpu, priority: "primary" },
  { id: "ai-lab", key: "aiLab", icon: Sparkles, priority: "secondary" },
];

const PillarCard = ({ p }: { p: PillarStatic }) => {
  const { t } = useTranslation();
  const Icon = p.icon;
  const base = `pillars.${p.key}`;
  return (
    <article
      id={p.id}
      className={`group relative flex flex-col overflow-hidden rounded-2xl border bg-card p-7 transition-all hover:-translate-y-0.5 hover:shadow-elevated ${
        p.featured
          ? "border-accent/40 shadow-elevated ring-1 ring-accent/20"
          : "border-border shadow-card"
      }`}
    >
      {p.featured ? (
        <span className="pointer-events-none absolute inset-x-0 top-0 h-1 bg-gradient-to-r from-accent/0 via-accent to-accent/0" />
      ) : null}
      <div className="flex items-center justify-between">
        <span className="grid h-11 w-11 place-items-center rounded-lg bg-primary text-primary-foreground">
          <Icon className="h-5 w-5" />
        </span>
        <span className="rounded-full border border-border bg-muted/60 px-2.5 py-0.5 text-[10px] font-medium uppercase tracking-wider text-muted-foreground">
          {t(`${base}.tag`)}
        </span>
      </div>
      <h3 className="mt-6 font-display text-xl font-semibold leading-tight text-foreground">
        {t(`${base}.title`)}
      </h3>
      <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{t(`${base}.blurb`)}</p>
      <ul className="mt-5 space-y-2.5">
        {([1, 2, 3, 4] as const).map((i) => (
          <li key={i} className="flex items-start gap-2.5 text-sm text-foreground/85">
            <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-accent" />
            <span>{t(`${base}.bullet${i}`)}</span>
          </li>
        ))}
      </ul>
      <div className="mt-auto pt-7 border-t border-border">
        <Button
          asChild
          variant={p.priority === "primary" ? "default" : "outline"}
          className={
            p.priority === "primary" ? "bg-primary text-primary-foreground hover:bg-primary/90" : ""
          }
        >
          <a href="#contact">
            {t(`${base}.cta`)} <ArrowRight />
          </a>
        </Button>
      </div>
    </article>
  );
};

const Pillars = () => {
  const { t } = useTranslation();
  return (
    <section className="bg-background py-24">
      <div className="container-narrow">
        <div className="max-w-2xl">
          <p className="eyebrow">{t("pillars.eyebrow")}</p>
          <h2 className="mt-3 font-display text-3xl font-semibold sm:text-4xl">
            {t("pillars.headline")}
          </h2>
          <p className="mt-4 text-muted-foreground">{t("pillars.body")}</p>
        </div>
        <div className="mt-12 grid gap-6 lg:grid-cols-3">
          {PILLARS.map((p) => (
            <PillarCard key={p.id} p={p} />
          ))}
        </div>
        <p className="mt-8 text-sm text-muted-foreground">
          {t("pillars.alsoAvailable")}
          <a
            href="#contact"
            className="font-medium text-foreground underline-offset-4 hover:underline"
          >
            {t("pillars.talkToUs")}
          </a>
          .
        </p>
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

interface CountryCoord {
  code: "IN" | "TH" | "HK" | "VN" | "PH" | "MY" | "SG" | "ID";
  payroll: string;
  x: number;
  y: number;
}

const COUNTRY_COORDS: CountryCoord[] = [
  { code: "IN", payroll: "EPF · ESI", x: 8, y: 42 },
  { code: "TH", payroll: "SSO · PIT", x: 32, y: 36 },
  { code: "HK", payroll: "MPF", x: 62, y: 22 },
  { code: "VN", payroll: "SI · PIT", x: 46, y: 44 },
  { code: "PH", payroll: "SSS · PhilHealth", x: 78, y: 44 },
  { code: "MY", payroll: "EPF · SOCSO", x: 38, y: 60 },
  { code: "SG", payroll: "CPF · IR8A", x: 44, y: 68 },
  { code: "ID", payroll: "BPJS · PPh21", x: 52, y: 84 },
];

const CountriesMap = () => {
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
      <div className="pointer-events-none absolute -top-20 right-1/4 h-96 w-96 rounded-full bg-accent/15 blur-3xl animate-blob-drift" />
      <div className="container-narrow relative grid gap-12 lg:grid-cols-[1fr_1.2fr] lg:items-center">
        <div>
          <p className="eyebrow text-white/60">{t("countries.eyebrow")}</p>
          <h2 className="mt-3 font-display text-3xl font-semibold sm:text-4xl">
            {t("countries.headline")}
          </h2>
          <p className="mt-5 max-w-lg text-white/70">{t("countries.body")}</p>
          <div className="mt-8 grid grid-cols-3 gap-y-3 max-w-sm">
            <div>
              <p className="font-display text-2xl font-semibold text-white">
                {t("countries.statOnboardingValue")}
              </p>
              <p className="mt-1 text-xs uppercase tracking-wider text-white/55">
                {t("countries.statOnboarding")}
              </p>
            </div>
            <CountStat
              to={0}
              label={t("countries.statMisses")}
              className="font-display text-2xl font-semibold text-white"
              labelClassName="mt-1 text-xs uppercase tracking-wider text-white/55"
            />
            <CountStat
              to={3}
              label={t("countries.statLicences")}
              className="font-display text-2xl font-semibold text-white"
              labelClassName="mt-1 text-xs uppercase tracking-wider text-white/55"
            />
          </div>
        </div>
        <div className="relative aspect-[4/3] rounded-2xl border border-white/10 bg-white/[0.03] p-2 shadow-elevated">
          <div
            className="absolute inset-2 rounded-xl"
            style={{
              backgroundImage:
                "radial-gradient(rgba(255,255,255,0.18) 1px, transparent 1px)",
              backgroundSize: "16px 16px",
            }}
          />
          {COUNTRY_COORDS.map((c, i) => (
            <div
              key={c.code}
              className="group absolute -translate-x-1/2 -translate-y-1/2"
              style={{ left: `${c.x}%`, top: `${c.y}%` }}
            >
              <span
                className="absolute inset-0 -m-2 rounded-full bg-accent/40 animate-pulse-ring"
                style={{ animationDelay: `${(i * 0.3).toFixed(2)}s` }}
              />
              <span className="relative grid h-7 w-7 place-items-center rounded-full bg-accent text-[10px] font-bold text-accent-foreground shadow-elevated">
                {c.code}
              </span>
              <div className="pointer-events-none absolute left-1/2 top-full z-10 mt-2 -translate-x-1/2 whitespace-nowrap rounded-md bg-background px-2.5 py-1.5 text-[11px] font-medium text-foreground opacity-0 shadow-elevated transition-opacity group-hover:opacity-100">
                {t(`countries.name.${c.code}`)} · {c.payroll}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

interface CompareRow {
  key: "time" | "contract" | "payroll" | "risk" | "cost";
  icon: React.ComponentType<{ className?: string }>;
}

const COMPARE_ROWS: CompareRow[] = [
  { key: "time", icon: Clock },
  { key: "contract", icon: Languages },
  { key: "payroll", icon: ScrollText },
  { key: "risk", icon: ShieldCheck },
  { key: "cost", icon: Wallet },
];

const Comparison = () => {
  const { t } = useTranslation();
  return (
    <section className="bg-secondary/40 py-24">
      <div className="container-narrow">
        <div className="max-w-2xl">
          <p className="eyebrow">{t("comparison.eyebrow")}</p>
          <h2 className="mt-3 font-display text-3xl font-semibold sm:text-4xl">
            {t("comparison.headline")}
          </h2>
          <p className="mt-4 text-muted-foreground">{t("comparison.body")}</p>
        </div>
        <div className="mt-12 overflow-hidden rounded-2xl border border-border bg-card shadow-card">
          <div className="grid grid-cols-[1.4fr_1fr_1fr_1.2fr] border-b border-border bg-muted/40 text-xs font-semibold uppercase tracking-wider text-muted-foreground">
            <div className="px-5 py-4">{t("comparison.headers.dimension")}</div>
            <div className="px-5 py-4">{t("comparison.headers.entity")}</div>
            <div className="px-5 py-4">{t("comparison.headers.contractor")}</div>
            <div className="px-5 py-4 bg-primary text-primary-foreground">
              {t("comparison.headers.mars")}
            </div>
          </div>
          {COMPARE_ROWS.map((row, i) => {
            const RowIcon = row.icon;
            const base = `comparison.rows.${row.key}`;
            return (
              <div
                key={row.key}
                className={`grid grid-cols-[1.4fr_1fr_1fr_1.2fr] text-sm ${
                  i % 2 === 1 ? "bg-muted/20" : ""
                }`}
              >
                <div className="flex items-center gap-2.5 border-t border-border px-5 py-4 font-medium text-foreground">
                  <RowIcon className="h-4 w-4 text-muted-foreground" />
                  {t(`${base}.label`)}
                </div>
                <div className="flex items-center gap-2 border-t border-border px-5 py-4 text-muted-foreground">
                  <X className="h-4 w-4 text-muted-foreground/60" />
                  {t(`${base}.entity`)}
                </div>
                <div className="flex items-center gap-2 border-t border-border px-5 py-4 text-muted-foreground">
                  <X className="h-4 w-4 text-muted-foreground/60" />
                  {t(`${base}.contractor`)}
                </div>
                <div className="flex items-center gap-2 border-t border-border bg-primary/5 px-5 py-4 font-medium text-foreground">
                  <Check className="h-4 w-4 text-accent" />
                  {t(`${base}.mars`)}
                </div>
              </div>
            );
          })}
        </div>
        <div className="mt-8 flex flex-wrap items-center gap-3">
          <Button asChild className="bg-accent text-accent-foreground hover:bg-accent/90">
            <a href="#contact">
              {t("comparison.cta")} <ArrowRight />
            </a>
          </Button>
          <span className="text-sm text-muted-foreground">{t("comparison.response")}</span>
        </div>
      </div>
    </section>
  );
};

const HowItWorks = () => {
  const { t } = useTranslation();
  const stepKeys = ["step1", "step2", "step3", "step4"] as const;
  const visuals = [
    (
      <div className="space-y-2.5">
        <div className="flex items-center justify-between rounded-md border border-border/60 bg-muted/40 px-3 py-2 text-xs">
          <span className="text-muted-foreground">Country</span>
          <span className="font-medium">Indonesia</span>
        </div>
        <div className="flex items-center justify-between rounded-md border border-border/60 bg-muted/40 px-3 py-2 text-xs">
          <span className="text-muted-foreground">Role</span>
          <span className="font-medium">Senior ML Engineer</span>
        </div>
        <div className="flex items-center justify-between rounded-md border border-border/60 bg-muted/40 px-3 py-2 text-xs">
          <span className="text-muted-foreground">Salary band</span>
          <span className="font-medium">IDR 65–85M / month</span>
        </div>
      </div>
    ),
    (
      <div className="rounded-md border border-border/60 bg-muted/30 p-3 text-xs">
        <p className="font-display text-sm font-semibold text-foreground">Perjanjian Kerja</p>
        <p className="mt-1 text-muted-foreground">PASAL 1 — Pihak yang membuat perjanjian…</p>
        <div className="mt-3 grid grid-cols-2 gap-2 text-[10px]">
          <span className="rounded border border-accent/40 bg-accent/10 px-2 py-1 text-accent">IP assigned</span>
          <span className="rounded border border-accent/40 bg-accent/10 px-2 py-1 text-accent">NDA · 24 mo</span>
        </div>
      </div>
    ),
    (
      <div className="space-y-2 text-xs">
        {[
          "Contract signed",
          "Tax ID & social security registered",
          "Equipment dispatched",
          "Health benefits active",
        ].map((s) => (
          <div
            key={s}
            className="flex items-center gap-2 rounded-md border border-border/60 bg-muted/40 px-3 py-2"
          >
            <CheckCircle2 className="h-3.5 w-3.5 text-accent" />
            <span className="font-medium">{s}</span>
          </div>
        ))}
      </div>
    ),
    (
      <div className="space-y-2 text-xs">
        <div className="flex items-end gap-1.5 h-16">
          {[55, 70, 60, 85, 75, 90].map((h, i) => (
            <span
              key={i}
              className="flex-1 origin-bottom rounded-sm bg-primary/15 animate-bar-grow"
              style={{ height: `${h}%`, animationDelay: `${i * 80}ms` }}
            />
          ))}
        </div>
        <div className="flex items-center justify-between rounded-md border border-border/60 bg-muted/40 px-3 py-2">
          <span className="text-muted-foreground">May payroll</span>
          <span className="font-medium">SGD 412,890 · cleared</span>
        </div>
      </div>
    ),
  ];
  return (
    <section className="border-y border-border bg-background py-24">
      <div className="container-narrow">
        <div className="flex flex-col gap-3 md:flex-row md:items-end md:justify-between">
          <div className="max-w-xl">
            <p className="eyebrow">{t("howItWorks.eyebrow")}</p>
            <h2 className="mt-3 font-display text-3xl font-semibold sm:text-4xl">
              {t("howItWorks.headline")}
            </h2>
          </div>
          <Button asChild variant="outline">
            <a href="#contact">
              {t("howItWorks.ctaQuote")} <ArrowRight />
            </a>
          </Button>
        </div>
        <ol className="mt-14 space-y-12">
          {stepKeys.map((sk, i) => (
            <li
              key={sk}
              className={`grid items-center gap-8 lg:grid-cols-[1fr_1fr] lg:gap-16 ${
                i % 2 === 1 ? "lg:[&>*:first-child]:order-2" : ""
              }`}
            >
              <div>
                <span className="font-display text-sm font-semibold uppercase tracking-wider text-accent">
                  {t("howItWorks.stepLabel")} {String(i + 1).padStart(2, "0")}
                </span>
                <h3 className="mt-3 font-display text-2xl font-semibold text-foreground">
                  {t(`howItWorks.${sk}.title`)}
                </h3>
                <p className="mt-3 max-w-md text-muted-foreground">{t(`howItWorks.${sk}.desc`)}</p>
              </div>
              <div className="rounded-2xl border border-border bg-card p-6 shadow-card">
                {visuals[i]}
              </div>
            </li>
          ))}
        </ol>
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
    <section id="about" className="bg-primary py-24 text-primary-foreground">
      <div className="container-narrow grid gap-12 lg:grid-cols-2 lg:items-center">
        <div>
          <p className="eyebrow text-white/60">{t("testimonial.eyebrow")}</p>
          <h2 className="mt-3 font-display text-3xl font-semibold sm:text-4xl">
            {t("testimonial.headline")}
          </h2>
          <p className="mt-5 max-w-lg text-white/75">{t("testimonial.body")}</p>
          <div className="mt-8 grid grid-cols-3 gap-6 border-t border-white/10 pt-8 max-w-md">
            {[
              { n: "100+", l: t("testimonial.statClients") },
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

const Footer = () => {
  const { t } = useTranslation();
  const sections = [
    {
      h: t("footer.sections.solutions"),
      l: [t("nav.eor"), t("nav.hrAi"), t("nav.aiLab"), "Recruiting & BD"],
    },
    {
      h: t("footer.sections.company"),
      l: [t("nav.about"), "Clients", "Insights", "Careers"],
    },
    {
      h: t("footer.sections.compliance"),
      l: [
        t("licenses.mom.label"),
        t("licenses.mas.label"),
        t("licenses.acra.label"),
        "Privacy",
      ],
    },
  ];
  return (
    <footer className="border-t border-border bg-background py-12">
      <div className="container-narrow grid gap-10 md:grid-cols-[1.5fr_1fr_1fr_1fr]">
        <div>
          <img
            src={`${import.meta.env.BASE_URL}mars-logo.png`}
            alt="Mars Consulting"
            className="h-12 w-auto"
          />
          <p className="mt-4 max-w-xs text-sm text-muted-foreground">{t("footer.tagline")}</p>
        </div>
        {sections.map((c) => (
          <div key={c.h}>
            <p className="text-xs font-semibold uppercase tracking-wider text-foreground">{c.h}</p>
            <ul className="mt-4 space-y-2.5">
              {c.l.map((i) => (
                <li key={i}>
                  <a href="#" className="text-sm text-muted-foreground hover:text-foreground">
                    {i}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
      <div className="container-narrow mt-12 space-y-3 border-t border-border pt-6 text-xs text-muted-foreground">
        <div className="flex flex-col items-start justify-between gap-3 md:flex-row md:items-center">
          <p>{t("footer.copyright", { year: new Date().getFullYear() })}</p>
          <p>{t("footer.cities")}</p>
        </div>
        <p className="text-[11px] leading-relaxed text-muted-foreground/80">
          {t("footer.compliance")}
        </p>
      </div>
    </footer>
  );
};

const Index = () => (
  <main className="min-h-screen bg-background">
    <Nav />
    <Hero />
    <LogoMarquee />
    <LicenseStrip />
    <CountriesMap />
    <Pillars />
    <Comparison />
    <HowItWorks />
    <Clients />
    <Testimonial />
    <Contact />
    <Footer />
  </main>
);

export default Index;
