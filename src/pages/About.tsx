import { useEffect, useLayoutEffect, useRef, useState, type CSSProperties } from "react";
import { ArrowRight, ShieldCheck, Building2, Award, Users, Compass, Linkedin } from "lucide-react";
import { useTranslation } from "react-i18next";
import { Button } from "@/components/ui/button";
import { withBase, BOOKING_URL } from "@/lib/href";
import { SiteHeader } from "@/components/site/SiteHeader";
import { SiteFooter } from "@/components/site/SiteFooter";
import { WorldMap, type CountryCode } from "@/components/site/EORSections";
import { headlineGap, isCJKLang } from "@/lib/headline";

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
    document.title = t("aboutPage.metaTitle");
    setMeta("description", t("aboutPage.metaDesc"));
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
          {t("aboutPage.pill")}
        </span>
        <h1 className={`mt-6 max-w-4xl font-display text-4xl font-semibold text-white sm:text-5xl lg:text-[60px] ${cjk ? "!leading-[1.22]" : "!leading-[1.05]"}`}>
          {t("aboutPage.headlineLead")}
          {headlineGap(t("aboutPage.headlineLead"), t("aboutPage.headlineAccent"))}
          <span className="whitespace-nowrap text-accent">{t("aboutPage.headlineAccent")}</span>
          <span className="mt-1 block font-normal text-white/90">{t("aboutPage.headlineTail")}</span>
        </h1>
        <p className="mt-6 max-w-3xl text-base text-white/75 sm:text-lg">{t("aboutPage.sub")}</p>
      </div>
    </section>
  );
};

const Overview = () => {
  const { t } = useTranslation();
  return (
    <section className="border-b border-border bg-secondary/30">
      <div className="container-narrow py-10 lg:py-12">
        <p className="max-w-4xl text-sm leading-relaxed text-muted-foreground">
          {t("aboutPage.overview")}
        </p>
      </div>
    </section>
  );
};

const Timeline = () => {
  const { t } = useTranslation();
  const items = [
    { year: "2009", body: t("aboutPage.timeline.y2009") },
    { year: "2013", body: t("aboutPage.timeline.y2013") },
    { year: "2017", body: t("aboutPage.timeline.y2017") },
    { year: "2020", body: t("aboutPage.timeline.y2020") },
    { year: "2025", body: t("aboutPage.timeline.y2025") },
    { year: "2026", body: t("aboutPage.timeline.y2026") },
  ];
  return (
    <section className="bg-background py-24">
      <div className="container-narrow">
        <div className="max-w-2xl">
          <p className="eyebrow">{t("aboutPage.timeline.eyebrow")}</p>
          <h2 className="mt-3 font-display text-3xl font-semibold sm:text-4xl">
            {t("aboutPage.timeline.headline")}
          </h2>
        </div>
        <ol className="mt-12 space-y-6">
          {items.map((m) => (
            <li
              key={m.year}
              className="grid gap-6 rounded-2xl border border-border bg-card p-6 shadow-card md:grid-cols-[160px_1fr] md:items-start md:gap-10 md:p-8"
            >
              <div className="flex items-center gap-3 md:block">
                <span className="font-display text-4xl font-semibold text-accent">{m.year}</span>
              </div>
              <p className="text-base leading-relaxed text-muted-foreground">{m.body}</p>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
};

const Founder = () => {
  const { t } = useTranslation();
  return (
    <section className="border-t border-border bg-secondary/40 py-24">
      <div className="container-narrow grid gap-10 lg:grid-cols-[1fr_1.4fr] lg:items-start">
        <div>
          <p className="eyebrow">{t("aboutPage.founder.eyebrow")}</p>
          <h2 className="mt-3 font-display text-3xl font-semibold sm:text-4xl">
            {t("aboutPage.founder.headline")}
          </h2>
        </div>
        <div className="space-y-5 text-base leading-relaxed text-muted-foreground">
          <p>
            {t("aboutPage.founder.p1Lead")}{" "}
            <span className="font-semibold text-foreground">
              {t("aboutPage.founder.p1Name")}
            </span>
            {t("aboutPage.founder.p1Tail")}
          </p>
          <p>{t("aboutPage.founder.p2")}</p>
          <p>{t("aboutPage.founder.p3")}</p>
          <p>{t("aboutPage.founder.p4")}</p>
        </div>
      </div>
    </section>
  );
};

const Licences = () => {
  const { t } = useTranslation();
  return (
    <section className="bg-background py-24">
      <div className="container-narrow">
        <div className="max-w-2xl">
          <p className="eyebrow">{t("aboutPage.licences.eyebrow")}</p>
          <h2 className="mt-3 font-display text-3xl font-semibold sm:text-4xl">
            {t("aboutPage.licences.headline")}
          </h2>
          <p className="mt-4 text-muted-foreground">{t("aboutPage.licences.body")}</p>
        </div>
        <div className="mt-12 grid gap-6 md:grid-cols-2">
          <article className="rounded-2xl border border-border bg-card p-7 shadow-card">
            <span className="grid h-11 w-11 place-items-center rounded-lg bg-primary/5 text-primary">
              <ShieldCheck className="h-5 w-5" />
            </span>
            <p className="mt-6 text-xs uppercase tracking-wider text-muted-foreground">
              {t("aboutPage.licences.momAuthority")}
            </p>
            <p className="mt-1 font-display text-xl font-semibold text-foreground">
              {t("aboutPage.licences.momLabel")}
            </p>
            <p className="mt-1 text-sm text-muted-foreground">{t("aboutPage.licences.momCode")}</p>
            <p className="mt-5 border-t border-border pt-4 text-sm italic text-muted-foreground">
              {t("aboutPage.licences.momNote")}
            </p>
          </article>
          <article className="rounded-2xl border border-border bg-card p-7 shadow-card">
            <span className="grid h-11 w-11 place-items-center rounded-lg bg-primary/5 text-primary">
              <Building2 className="h-5 w-5" />
            </span>
            <p className="mt-6 text-xs uppercase tracking-wider text-muted-foreground">
              {t("aboutPage.licences.acraAuthority")}
            </p>
            <p className="mt-1 font-display text-xl font-semibold text-foreground">
              {t("aboutPage.licences.acraLabel")}
            </p>
            <p className="mt-1 text-sm text-muted-foreground">
              {t("aboutPage.licences.acraCode")}
            </p>
            <p className="mt-5 border-t border-border pt-4 text-sm italic text-muted-foreground">
              {t("aboutPage.licences.acraNote")}
            </p>
          </article>
        </div>
        <div className="mt-10 rounded-2xl border border-border bg-secondary/30 p-7">
          <p className="text-xs uppercase tracking-wider text-muted-foreground">
            {t("aboutPage.licences.entityLabel")}
          </p>
          <p className="mt-1 font-display text-xl font-semibold text-foreground">
            {t("aboutPage.licences.entityName")}
          </p>
          <p className="mt-1 text-sm text-muted-foreground">
            {t("aboutPage.licences.entityUEN")} · {t("aboutPage.licences.entityAddress")}
          </p>
          <p className="mt-3 text-sm italic text-muted-foreground">
            {t("aboutPage.licences.entityNote")}
          </p>
        </div>
        <p className="mt-8 text-sm text-muted-foreground">{t("aboutPage.licences.verifiable")}</p>
      </div>
    </section>
  );
};

const TeamModule = () => {
  const { t } = useTranslation();
  return (
    <section className="border-t border-border bg-background py-24">
      <div className="container-narrow grid gap-10 lg:grid-cols-[1fr_1.2fr] lg:items-start">
        <div>
          <p className="eyebrow">{t("aboutPage.team.eyebrow")}</p>
          <h2 className="mt-3 font-display text-3xl font-semibold sm:text-4xl">
            {t("aboutPage.team.headline")}
          </h2>
        </div>
        <div className="space-y-5">
          <p className="text-base leading-relaxed text-muted-foreground">
            {t("aboutPage.team.body")}
          </p>
          <Button asChild className="bg-primary text-primary-foreground hover:bg-primary/90">
            <a href={t("aboutPage.team.ctaUrl")} target="_blank" rel="noopener noreferrer">
              <Linkedin className="h-4 w-4" />
              {t("aboutPage.team.cta")}
            </a>
          </Button>
        </div>
      </div>
    </section>
  );
};

// Physical offices (orange markers) and their i18n sub-keys, in display order.
const OFFICE_ROWS: { code: CountryCode; k: string; badge?: boolean }[] = [
  { code: "SG", k: "sg", badge: true },
  { code: "MY", k: "my" },
  { code: "HK", k: "hk" },
  { code: "CN", k: "cn" },
  { code: "IN", k: "in" },
  { code: "US", k: "us" },
];
// Markets served through partners (outline markers), no physical office.
const SERVICE_ROWS: CountryCode[] = ["AE", "VN", "TH", "ID"];

const Offices = () => {
  const { t } = useTranslation();
  const [activeCode, setActiveCode] = useState<CountryCode | null>(null);

  // Measure the map's rendered height so the address panel can cap its own
  // height to match — keeping the two columns visually balanced (the address
  // list scrolls internally instead of overflowing past the map).
  const mapWrapRef = useRef<HTMLDivElement>(null);
  const [mapH, setMapH] = useState<number | null>(null);
  useLayoutEffect(() => {
    const el = mapWrapRef.current;
    if (!el) return;
    const ro = new ResizeObserver(() => setMapH(el.offsetHeight));
    ro.observe(el);
    setMapH(el.offsetHeight);
    return () => ro.disconnect();
  }, []);

  // Each address card registers itself by country code so a map-marker click
  // can scroll the matching card into view inside the (internally scrolling)
  // panel — the key interaction on touch, where hover doesn't exist.
  const panelRef = useRef<HTMLDivElement>(null);
  const cardRefs = useRef<Partial<Record<CountryCode, HTMLButtonElement | null>>>({});
  const selectMarket = (code: CountryCode) => {
    setActiveCode(code);
    const card = cardRefs.current[code];
    const panel = panelRef.current;
    if (!card) return;
    // Desktop: the panel scrolls internally — pin the selected card to the
    // panel's top by adjusting only the panel's own scroll (never the page).
    // The browser clamps to max scroll, so the last entries settle near the
    // bottom instead of being force-pinned — the natural fallback.
    if (panel && panel.scrollHeight > panel.clientHeight) {
      const delta = card.getBoundingClientRect().top - panel.getBoundingClientRect().top;
      panel.scrollTo({ top: panel.scrollTop + delta - 4, behavior: "smooth" });
    } else {
      // Mobile (no internal scroll): just bring the card into the viewport.
      card.scrollIntoView({ block: "nearest", behavior: "smooth" });
    }
  };

  return (
    <section className="border-t border-border bg-secondary/30 py-24">
      <div className="container-narrow">
        <div className="max-w-2xl">
          <p className="eyebrow">{t("aboutPage.offices.eyebrow")}</p>
          <h2 className="mt-3 font-display text-3xl font-semibold sm:text-4xl">
            {t("aboutPage.offices.headline")}
          </h2>
          <p className="mt-4 text-muted-foreground">{t("aboutPage.offices.body")}</p>
        </div>

        {/* Map + address list are one linked unit: hover a marker to highlight
            its address, or hover an address to highlight its marker. The list
            scrolls within the map's height so the two panels stay balanced. */}
        <div
          className="mt-10 grid gap-6 lg:grid-cols-[1.85fr_1fr] lg:items-start"
          style={{ "--offices-map-h": mapH ? `${mapH}px` : undefined } as CSSProperties}
        >
          <div ref={mapWrapRef}>
            <WorldMap
              activeCode={activeCode}
              onMarkerHover={setActiveCode}
              onMarkerSelect={selectMarket}
            />
          </div>

          <div
            ref={panelRef}
            className="flex flex-col gap-2 lg:max-h-[var(--offices-map-h,30rem)] lg:overflow-y-auto lg:pr-1"
          >
            {OFFICE_ROWS.map(({ code, k, badge }) => {
              const active = activeCode === code;
              return (
                <button
                  key={code}
                  ref={(el) => (cardRefs.current[code] = el)}
                  type="button"
                  onMouseEnter={() => setActiveCode(code)}
                  onMouseLeave={() => setActiveCode(null)}
                  onFocus={() => setActiveCode(code)}
                  onBlur={() => setActiveCode(null)}
                  onClick={() => selectMarket(code)}
                  className={`scroll-mt-2 rounded-xl border p-3.5 text-left transition-colors ${
                    active
                      ? "border-accent bg-accent/[0.06] shadow-card"
                      : "border-border bg-card hover:border-accent/40"
                  }`}
                >
                  <div className="flex items-center gap-2">
                    <span className="h-2 w-2 shrink-0 rounded-full bg-accent" />
                    <span className="font-semibold text-foreground">
                      {t(`aboutPage.offices.${k}.country`)}
                    </span>
                    {badge ? (
                      <span className="rounded-full bg-accent/10 px-2 py-0.5 text-[10px] font-medium text-accent">
                        {t("aboutPage.offices.sg.badge")}
                      </span>
                    ) : null}
                  </div>
                  <p className="mt-1.5 pl-4 text-sm leading-snug text-muted-foreground">
                    {t(`aboutPage.offices.${k}.address`)}
                  </p>
                </button>
              );
            })}

            {/* Service markets live in the same list (not a detached box): a
                slim labelled divider, then cards in the same visual language —
                only the hollow dot + caption signal "partner-led, no office". */}
            <div className="mt-2 flex items-center gap-3 px-1">
              <span className="h-px flex-1 bg-border" />
              <span className="whitespace-nowrap text-[11px] font-semibold uppercase tracking-wide text-muted-foreground">
                {t("aboutPage.offices.serviceLabel")}
              </span>
              <span className="h-px flex-1 bg-border" />
            </div>

            {SERVICE_ROWS.map((code) => {
              const active = activeCode === code;
              return (
                <button
                  key={code}
                  ref={(el) => (cardRefs.current[code] = el)}
                  type="button"
                  onMouseEnter={() => setActiveCode(code)}
                  onMouseLeave={() => setActiveCode(null)}
                  onFocus={() => setActiveCode(code)}
                  onBlur={() => setActiveCode(null)}
                  onClick={() => selectMarket(code)}
                  className={`scroll-mt-2 flex items-center gap-2 rounded-xl border p-3 text-left transition-colors ${
                    active
                      ? "border-accent bg-accent/[0.06] shadow-card"
                      : "border-border bg-card/60 hover:border-accent/40"
                  }`}
                >
                  <span className="h-2 w-2 shrink-0 rounded-full border border-muted-foreground/60 bg-transparent" />
                  <span className="font-medium text-foreground">
                    {t(`countries.name.${code}`)}
                  </span>
                  <span className="ml-auto text-[11px] text-muted-foreground">
                    {t("aboutPage.offices.servicePartner")}
                  </span>
                </button>
              );
            })}

            <p className="mt-1 px-1 text-xs leading-snug text-muted-foreground">
              {t("aboutPage.offices.serviceNote")}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

const Principles = () => {
  const { t } = useTranslation();
  const items = [
    { title: t("aboutPage.principles.honestTitle"), body: t("aboutPage.principles.honestBody"), icon: Compass },
    { title: t("aboutPage.principles.depthTitle"), body: t("aboutPage.principles.depthBody"), icon: Award },
    { title: t("aboutPage.principles.accountTitle"), body: t("aboutPage.principles.accountBody"), icon: Users },
  ];
  return (
    <section className="border-t border-border bg-secondary/40 py-24">
      <div className="container-narrow">
        <div className="max-w-2xl">
          <p className="eyebrow">{t("aboutPage.principles.eyebrow")}</p>
          <h2 className="mt-3 font-display text-3xl font-semibold sm:text-4xl">
            {t("aboutPage.principles.headline")}
          </h2>
        </div>
        <div className="mt-12 grid gap-6 md:grid-cols-3">
          {items.map((p) => {
            const Icon = p.icon;
            return (
              <article
                key={p.title}
                className="rounded-2xl border border-border bg-card p-7 shadow-card"
              >
                <span className="grid h-11 w-11 place-items-center rounded-lg bg-primary text-primary-foreground">
                  <Icon className="h-5 w-5" />
                </span>
                <h3 className="mt-6 font-display text-lg font-semibold text-foreground">
                  {p.title}
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{p.body}</p>
              </article>
            );
          })}
        </div>
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
                {t("aboutPage.ctaBanner.headline")}
              </h2>
              <p className="mt-4 max-w-xl text-white/75">{t("aboutPage.ctaBanner.body")}</p>
            </div>
            <div className="lg:justify-self-end">
              <Button
                asChild
                size="lg"
                className="bg-accent text-accent-foreground hover:bg-accent/90"
              >
                <a href={BOOKING_URL} target="_blank" rel="noopener noreferrer">
                  {t("aboutPage.ctaBanner.cta")} <ArrowRight />
                </a>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

const About = () => {
  usePageMeta();
  return (
    <main className="min-h-screen bg-background">
      <SiteHeader />
      <Hero />
      <Overview />
      <Timeline />
      <Founder />
      <TeamModule />
      <Licences />
      <Offices />
      <Principles />
      <CTABanner />
      <SiteFooter />
    </main>
  );
};

export default About;
