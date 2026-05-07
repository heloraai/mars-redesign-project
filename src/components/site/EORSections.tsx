import { useTranslation } from "react-i18next";
import {
  ArrowRight,
  CheckCircle2,
  Check,
  X,
  Clock,
  Languages,
  ScrollText,
  Wallet,
  ShieldCheck,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { withBase } from "@/lib/href";

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

export const CountriesMapSection = () => {
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

export const ComparisonSection = () => {
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
            <a href={withBase("/#contact")}>
              {t("comparison.cta")} <ArrowRight />
            </a>
          </Button>
          <span className="text-sm text-muted-foreground">{t("comparison.response")}</span>
        </div>
      </div>
    </section>
  );
};

export const HowItWorksSection = () => {
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
        <p className="font-display text-sm font-semibold text-foreground">Local employment agreement</p>
        <p className="mt-1 text-muted-foreground">Article 1 — Parties to the agreement…</p>
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
    <section id="how" className="border-y border-border bg-background py-24">
      <div className="container-narrow">
        <div className="flex flex-col gap-3 md:flex-row md:items-end md:justify-between">
          <div className="max-w-xl">
            <p className="eyebrow">{t("howItWorks.eyebrow")}</p>
            <h2 className="mt-3 font-display text-3xl font-semibold sm:text-4xl">
              {t("howItWorks.headline")}
            </h2>
          </div>
          <Button asChild variant="outline">
            <a href={withBase("/#contact")}>
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
