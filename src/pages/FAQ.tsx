import { useEffect, useMemo } from "react";
import { useTranslation } from "react-i18next";
import { ArrowRight } from "lucide-react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Button } from "@/components/ui/button";
import { BOOKING_URL } from "@/lib/href";
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

interface QA {
  q: string;
  a: string;
}

interface FAQGroup {
  title: string;
  qas: QA[];
}

const FAQ_SCHEMA_ID = "faq-page-jsonld";

const useFAQSchema = (groups: FAQGroup[]) => {
  useEffect(() => {
    const allQas = groups.flatMap((g) => g.qas);
    const schema = {
      "@context": "https://schema.org",
      "@type": "FAQPage",
      mainEntity: allQas.map((qa) => ({
        "@type": "Question",
        name: qa.q,
        acceptedAnswer: { "@type": "Answer", text: qa.a },
      })),
    };
    const existing = document.getElementById(FAQ_SCHEMA_ID);
    if (existing) existing.remove();
    const script = document.createElement("script");
    script.type = "application/ld+json";
    script.id = FAQ_SCHEMA_ID;
    script.text = JSON.stringify(schema);
    document.head.appendChild(script);
    return () => {
      script.remove();
    };
  }, [groups]);
};

export default function FAQPage() {
  const { t, i18n } = useTranslation();
  const cjk = isCJKLang(i18n.resolvedLanguage);

  useEffect(() => {
    const prevTitle = document.title;
    document.title = t("faqPage.metaTitle");
    setMeta("description", t("faqPage.metaDesc"));
    return () => {
      document.title = prevTitle;
    };
  }, [t]);

  const groups = useMemo<FAQGroup[]>(
    () => [
      {
        title: t("faqPage.about.eyebrow"),
        qas: (["1", "2", "3", "4"] as const).map((n) => ({
          q: t(`faqPage.about.q${n}`),
          a: t(`faqPage.about.a${n}`),
        })),
      },
      {
        title: t("faqPage.categories.eor"),
        qas: (["1", "2", "3", "4", "5", "6"] as const).map((n) => ({
          q: t(`eorPage.faq.q${n}`),
          a: t(`eorPage.faq.a${n}`),
        })),
      },
      {
        title: t("faqPage.categories.recruitment"),
        qas: (["1", "2"] as const).map((n) => ({
          q: t(`recruitmentPage.faq.q${n}`),
          a: t(`recruitmentPage.faq.a${n}`),
        })),
      },
      {
        title: t("faqPage.categories.ai"),
        qas: (["1", "2", "3", "4"] as const).map((n) => ({
          q: t(`aiPage.faq.q${n}`),
          a: t(`aiPage.faq.a${n}`),
        })),
      },
    ],
    [t]
  );

  useFAQSchema(groups);

  return (
    <main className="min-h-screen bg-background">
      <SiteHeader />
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
        <div className="container-narrow relative py-20 lg:py-24">
          <span className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-3 py-1 text-xs font-medium uppercase tracking-[0.16em] text-white/80">
            <span className="h-1.5 w-1.5 rounded-full bg-accent" />
            {t("faqPage.pill")}
          </span>
          <h1 className={`mt-6 max-w-4xl font-display text-4xl font-semibold text-white sm:text-5xl lg:text-[60px] ${cjk ? "!leading-[1.22]" : "!leading-[1.05]"}`}>
            {t("faqPage.headlineLead")}
            {headlineGap(t("faqPage.headlineLead"), t("faqPage.headlineAccent"))}
            <span className="whitespace-nowrap text-accent">{t("faqPage.headlineAccent")}</span>
          </h1>
          <p className="mt-6 max-w-3xl text-base text-white/75 sm:text-lg">
            {t("faqPage.sub")}
          </p>
        </div>
      </section>
      <section className="bg-background py-20">
        <div className="container-narrow space-y-16">
          {groups.map((g) => (
            <div key={g.title}>
              <p className="eyebrow">{g.title}</p>
              <Accordion
                type="single"
                collapsible
                className="mt-6 grid gap-3 rounded-2xl border border-border bg-card p-3 shadow-card"
              >
                {g.qas.map((qa, idx) => (
                  <AccordionItem
                    key={idx}
                    value={`${g.title}-${idx}`}
                    className="rounded-xl border border-border/70 bg-background last:border-b"
                  >
                    <AccordionTrigger className="px-5 text-left text-base font-medium text-foreground hover:no-underline">
                      {qa.q}
                    </AccordionTrigger>
                    <AccordionContent className="px-5 text-sm leading-relaxed text-muted-foreground">
                      {qa.a}
                    </AccordionContent>
                  </AccordionItem>
                ))}
              </Accordion>
            </div>
          ))}
        </div>
      </section>
      <section className="bg-background pb-24">
        <div className="container-narrow">
          <div className="overflow-hidden rounded-3xl border border-border bg-gradient-hero p-10 text-primary-foreground shadow-elevated lg:p-14">
            <div className="grid gap-8 lg:grid-cols-[1.4fr_1fr] lg:items-center">
              <div>
                <h2 className="font-display text-3xl font-semibold sm:text-4xl">
                  {t("contact.headline")}
                </h2>
                <p className="mt-4 max-w-xl text-white/75">{t("contact.response")}</p>
              </div>
              <div className="lg:justify-self-end">
                <Button
                  asChild
                  size="lg"
                  className="bg-accent text-accent-foreground hover:bg-accent/90"
                >
                  <a href={BOOKING_URL} target="_blank" rel="noopener noreferrer">
                    {t("contact.submit")} <ArrowRight />
                  </a>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>
      <SiteFooter />
    </main>
  );
}
