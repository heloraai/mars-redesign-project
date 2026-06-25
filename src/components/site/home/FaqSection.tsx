import { useTranslation } from "react-i18next";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Reveal } from "@/components/site/Reveal";

const FAQ_KEYS = ["q1", "q2", "q3", "q4"] as const;

/**
 * Homepage FAQ. Reuses the general "About Mars" Q&A already maintained for the
 * /faq page (faqPage.about.*) so there is a single source of truth. Clean
 * accordion in the subpage design language. Subtle scroll-reveal.
 */
export const FaqSection = () => {
  const { t } = useTranslation();
  return (
    <section className="bg-background py-24">
      <div className="container-narrow">
        <Reveal as="div" className="max-w-2xl">
          <p className="eyebrow">{t("faqPage.pill")}</p>
          <h2 className="mt-3 font-display text-3xl font-semibold sm:text-4xl">
            {t("faqPage.headlineLead")} {t("faqPage.headlineAccent")}
          </h2>
        </Reveal>
        <Reveal as="div" delay={120}>
          <Accordion
            type="single"
            collapsible
            className="mt-10 grid gap-3 rounded-2xl border border-border bg-card p-3 shadow-card"
          >
            {FAQ_KEYS.map((k, i) => (
              <AccordionItem
                key={k}
                value={`faq-${i}`}
                className="rounded-xl border border-border/70 bg-background last:border-b"
              >
                <AccordionTrigger className="px-5 text-left text-base font-medium text-foreground hover:no-underline">
                  {t(`faqPage.about.${k}`)}
                </AccordionTrigger>
                <AccordionContent className="px-5 text-sm leading-relaxed text-muted-foreground">
                  {t(`faqPage.about.a${k.slice(1)}`)}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </Reveal>
      </div>
    </section>
  );
};
