import { useEffect } from "react";
import { ArrowRight, ShieldCheck, Building2, Award, Users, Compass } from "lucide-react";
import { useTranslation } from "react-i18next";
import { Button } from "@/components/ui/button";
import { withBase } from "@/lib/href";
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
    document.title = t("aboutPage.metaTitle");
    setMeta("description", t("aboutPage.metaDesc"));
    return () => {
      document.title = prevTitle;
    };
  }, [t]);
};

const Hero = () => {
  const { t } = useTranslation();
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
        <h1 className="mt-6 max-w-4xl font-display text-4xl font-semibold leading-[1.05] text-white sm:text-5xl lg:text-[60px]">
          {t("aboutPage.headlineLead")}{" "}
          <span className="text-accent">{t("aboutPage.headlineAccent")}</span>{" "}
          {t("aboutPage.headlineTail")}
        </h1>
        <p className="mt-6 max-w-3xl text-base text-white/75 sm:text-lg">{t("aboutPage.sub")}</p>
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
        </div>
      </div>
    </section>
  );
};

const Numbers = () => {
  const { t } = useTranslation();
  const stats = [
    { n: "17+", l: t("aboutPage.numbers.years") },
    { n: "8", l: t("aboutPage.numbers.markets") },
    { n: "100+", l: t("aboutPage.numbers.consultants") },
    { n: "100+", l: t("aboutPage.numbers.clients") },
    { n: "2,560+", l: t("aboutPage.numbers.placements") },
  ];
  return (
    <section className="border-y border-border bg-background">
      <div className="container-narrow py-12">
        <div className="grid grid-cols-2 gap-x-6 gap-y-8 sm:grid-cols-3 lg:grid-cols-5">
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
        <p className="mt-8 text-sm text-muted-foreground">{t("aboutPage.licences.verifiable")}</p>
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
                <a href={withBase("/#contact")}>
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
      <Timeline />
      <Founder />
      <Numbers />
      <Licences />
      <Principles />
      <CTABanner />
      <SiteFooter />
    </main>
  );
};

export default About;
