import { useTranslation } from "react-i18next";
import { Reveal } from "@/components/site/Reveal";

/**
 * SECTION 2 — Who We Are. Clean two-column intro matching the subpage design
 * language (eyebrow + display headline on the left, lead paragraph with an
 * emphasised closing line on the right). Subtle scroll-reveal.
 */
export const WhoWeAreSection = () => {
  const { t } = useTranslation();
  return (
    <section id="who-we-are" className="scroll-mt-24 bg-background py-24">
      <div className="container-narrow grid gap-12 lg:grid-cols-[1fr_1.2fr] lg:items-start">
        <Reveal as="div">
          <p className="eyebrow">{t("whoWeAre.eyebrow")}</p>
          <h2 className="mt-3 font-display text-3xl font-semibold sm:text-4xl">
            {t("whoWeAre.headline")}
          </h2>
        </Reveal>
        <Reveal
          as="div"
          delay={120}
          className="space-y-6 text-base leading-relaxed text-muted-foreground"
        >
          <p>{t("whoWeAre.body1")}</p>
          <p className="border-l-2 border-accent pl-5 font-display text-xl font-semibold leading-snug text-foreground">
            {t("whoWeAre.body2")}
          </p>
        </Reveal>
      </div>
    </section>
  );
};
