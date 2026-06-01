import { useMemo } from "react";
import { useTranslation } from "react-i18next";
import { ComposableMap, Geographies, Geography } from "react-simple-maps";
import { geoMercator } from "d3-geo";
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
import { withBase, BOOKING_URL } from "@/lib/href";

export type CountryCode =
  | "IN"
  | "TH"
  | "HK"
  | "CN"
  | "US"
  | "AE"
  | "MY"
  | "SG"
  | "VN"
  | "ID";

interface CountryMarker {
  code: CountryCode;
  payroll: string;
  /** [longitude, latitude] of the country marker. */
  coords: [number, number];
  office: boolean;
  /** Optional [dx, dy] offset in percentage points to fan out tight clusters. */
  nudge?: [number, number];
}

const COUNTRY_MARKERS: CountryMarker[] = [
  { code: "US", payroll: "FICA · State taxes", coords: [-95, 39], office: true },
  { code: "AE", payroll: "WPS · GPSSA", coords: [54, 24], office: false, nudge: [-1.5, 0] },
  { code: "IN", payroll: "EPF · ESI", coords: [78, 22], office: true, nudge: [-4, -1] },
  { code: "CN", payroll: "Social Insurance", coords: [104, 35], office: true, nudge: [1, -4] },
  { code: "HK", payroll: "MPF", coords: [114.2, 22.3], office: true, nudge: [7, -1] },
  { code: "VN", payroll: "BHXH · PIT", coords: [106, 16], office: false, nudge: [3.5, 3] },
  { code: "TH", payroll: "SSO · PIT", coords: [100.5, 15], office: false, nudge: [-4.5, 0.5] },
  { code: "MY", payroll: "EPF · SOCSO", coords: [102, 4], office: true, nudge: [-6, 2.5] },
  { code: "SG", payroll: "CPF · IR8A", coords: [103.8, 1.3], office: true, nudge: [-1.5, 6] },
  { code: "ID", payroll: "BPJS · PPh21", coords: [113, -2.5], office: false, nudge: [5, 2.5] },
];

/** Country-flag emoji per marker (falls back to the 2-letter code on systems
 *  without flag-emoji support, e.g. Windows). */
const FLAG: Record<CountryCode, string> = {
  US: "🇺🇸",
  AE: "🇦🇪",
  IN: "🇮🇳",
  CN: "🇨🇳",
  HK: "🇭🇰",
  VN: "🇻🇳",
  TH: "🇹🇭",
  MY: "🇲🇾",
  SG: "🇸🇬",
  ID: "🇮🇩",
};

// Projection framing: Pacific-centered Mercator so the US sits at the left and
// the SE-Asia cluster lands centre-right, matching the served world-110m.json.
const MAP_W = 800;
const MAP_H = 460;
const PROJECTION_CONFIG = {
  rotate: [-150, 0, 0] as [number, number, number],
  scale: 135,
  center: [0, 16] as [number, number],
};
const WORLD_GEO_URL = `${import.meta.env.BASE_URL}world-110m.json`;

interface WorldMapProps {
  /**
   * Currently highlighted country (controlled). When set, that marker is
   * emphasised and the others dim — used to link the map to an external
   * address panel (About "Where we operate").
   */
  activeCode?: CountryCode | null;
  /**
   * When provided, the map runs in "interactive" mode: hovering a marker
   * reports its code (null on leave), pulse rings and floating tooltips are
   * dropped, and highlighting is driven by `activeCode`. This lets a sibling
   * address list stay in sync with the map.
   */
  onMarkerHover?: (code: CountryCode | null) => void;
  /**
   * Fired when a marker is clicked/tapped. Lets the linked address panel jump
   * (scroll) to the matching entry — the primary interaction on touch devices
   * where hover is unavailable.
   */
  onMarkerSelect?: (code: CountryCode) => void;
}

/**
 * Self-contained dark map card (world geography + country flag markers +
 * legend). Works on any background, so it can be embedded in the dark home
 * coverage section or inside the light About "Where we operate" section.
 *
 * Markers are sized in container-query units (`cqw`), so they scale with the
 * rendered map width — small map → small markers, large map → large markers —
 * which keeps the proportions right whether the card is half-width (home) or
 * full-width (About). When `onMarkerHover` is supplied the map runs in
 * interactive mode and links to a sibling address panel via `activeCode`.
 */
export const WorldMap = ({
  activeCode = null,
  onMarkerHover,
  onMarkerSelect,
}: WorldMapProps) => {
  const { t } = useTranslation();
  const interactive = !!onMarkerHover || !!onMarkerSelect;

  const markers = useMemo(() => {
    const projection = geoMercator()
      .rotate(PROJECTION_CONFIG.rotate)
      .scale(PROJECTION_CONFIG.scale)
      .center(PROJECTION_CONFIG.center)
      .translate([MAP_W / 2, MAP_H / 2]);
    return COUNTRY_MARKERS.map((c) => {
      const projected = projection(c.coords);
      const [x, y] = projected ?? [MAP_W / 2, MAP_H / 2];
      const [dx, dy] = c.nudge ?? [0, 0];
      return {
        ...c,
        left: (x / MAP_W) * 100 + dx,
        top: (y / MAP_H) * 100 + dy,
      };
    });
  }, []);

  return (
    <div className="relative aspect-[800/460] overflow-hidden rounded-2xl border border-white/10 bg-primary p-2 shadow-elevated">
      <div
        className="absolute inset-2 overflow-hidden rounded-xl"
        style={{ containerType: "inline-size" }}
      >
        <ComposableMap
          projection="geoMercator"
          projectionConfig={PROJECTION_CONFIG}
          width={MAP_W}
          height={MAP_H}
          className="h-full w-full"
          style={{ width: "100%", height: "100%" }}
        >
          <Geographies geography={WORLD_GEO_URL}>
            {({ geographies }) =>
              geographies.map((geo) => (
                <Geography
                  key={geo.rsmKey}
                  geography={geo}
                  style={{
                    default: {
                      fill: "rgba(255,255,255,0.06)",
                      stroke: "rgba(255,255,255,0.16)",
                      strokeWidth: 0.4,
                      outline: "none",
                    },
                    hover: {
                      fill: "rgba(255,255,255,0.06)",
                      stroke: "rgba(255,255,255,0.16)",
                      strokeWidth: 0.4,
                      outline: "none",
                    },
                    pressed: { outline: "none" },
                  }}
                />
              ))
            }
          </Geographies>
        </ComposableMap>

        {markers.map((c) => {
          const isActive = activeCode === c.code;
          const dimmed = interactive && activeCode != null && !isActive;
          return (
            <div
              key={c.code}
              className={`group absolute -translate-x-1/2 -translate-y-1/2 ${
                isActive ? "z-30" : "z-10"
              } ${interactive ? "cursor-pointer hover:z-30" : "hover:z-30"}`}
              style={{ left: `${c.left}%`, top: `${c.top}%` }}
              onMouseEnter={interactive ? () => onMarkerHover?.(c.code) : undefined}
              onMouseLeave={interactive ? () => onMarkerHover?.(null) : undefined}
              onClick={onMarkerSelect ? () => onMarkerSelect(c.code) : undefined}
            >
              {/* Flag chip — the small ring colour encodes office vs service. */}
              <span
                className={`relative grid place-items-center rounded-full bg-black/40 leading-none shadow-elevated backdrop-blur-sm transition-all duration-200 ring-1 ${
                  c.office ? "ring-accent" : "ring-white/40"
                } ${
                  isActive
                    ? "scale-125 ring-2 ring-white/90"
                    : "group-hover:scale-125"
                } ${dimmed ? "opacity-40" : "opacity-100"}`}
                style={{
                  padding: "clamp(3px, 0.8cqw, 7px)",
                  fontSize: "clamp(15px, 2.7cqw, 30px)",
                }}
              >
                <span className="leading-none">{FLAG[c.code]}</span>
              </span>
              {/* Country-name label: always shown for the active marker (in the
                  linked About map) and on hover everywhere. Absolutely placed so
                  it never reflows neighbouring markers. */}
              <span
                className={`pointer-events-none absolute left-1/2 top-full mt-1.5 -translate-x-1/2 whitespace-nowrap rounded-md bg-background px-2 py-1 text-[11px] font-medium text-foreground shadow-elevated transition-opacity duration-150 ${
                  isActive ? "opacity-100" : "opacity-0 group-hover:opacity-100"
                }`}
              >
                {t(`countries.name.${c.code}`)}
              </span>
            </div>
          );
        })}
      </div>
      <div className="absolute bottom-3 left-3 z-10 flex items-center gap-4 rounded-md bg-black/30 px-3 py-1.5 text-[10px] text-white/85 backdrop-blur-sm">
        <span className="flex items-center gap-1.5">
          <span className="h-2.5 w-2.5 rounded-full bg-accent" />
          {t("countries.legendOffice")}
        </span>
        <span className="flex items-center gap-1.5">
          <span className="h-2.5 w-2.5 rounded-full border border-white/70" />
          {t("countries.legendService")}
        </span>
      </div>
    </div>
  );
};

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
        <WorldMap />
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
            <a href={BOOKING_URL} target="_blank" rel="noopener noreferrer">
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
            <a href={BOOKING_URL} target="_blank" rel="noopener noreferrer">
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
