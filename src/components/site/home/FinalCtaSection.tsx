import { useTranslation } from "react-i18next";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Reveal } from "@/components/site/Reveal";
import { BOOKING_URL } from "@/lib/href";

/**
 * SECTION 10 — Final CTA. Dark gradient band that bookends the page, matching
 * the subpage CTA banners. Primary → BOOKING_URL (filled accent), Secondary →
 * /contact (outline). Subtle scroll-reveal; one soft accent glow.
 */
export const FinalCtaSection = () => {
  const { t } = useTranslation();
  return (
    <section className="relative overflow-hidden bg-gradient-hero py-24 text-primary-foreground">
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.07]"
        style={{
          backgroundImage:
            "radial-gradient(hsl(var(--primary-foreground)) 1px, transparent 1px)",
          backgroundSize: "28px 28px",
        }}
      />
      <div className="pointer-events-none absolute -top-32 -left-24 h-[460px] w-[460px] rounded-full bg-accent/20 blur-3xl animate-blob-drift" />
      <Reveal as="div" className="container-narrow relative max-w-3xl text-center">
        <p className="eyebrow text-orange-soft">{t("finalCta.eyebrow")}</p>
        <h2 className="mt-3 font-display text-3xl font-semibold tracking-tight text-white sm:text-4xl lg:text-5xl">
          {t("finalCta.headline")}
        </h2>
        <p className="mx-auto mt-6 max-w-2xl text-base leading-relaxed text-white/70 sm:text-lg">
          {t("finalCta.body")}
        </p>
        <div className="mt-10 flex items-center justify-center">
          <Button
            asChild
            size="lg"
            className="h-12 rounded-xl bg-accent px-7 text-[15px] font-semibold text-white shadow-[0_0_24px_hsl(15_99%_69%/0.35)] transition-shadow hover:bg-accent/90 hover:shadow-[0_0_32px_hsl(15_99%_69%/0.45)]"
          >
            <a href={BOOKING_URL} target="_blank" rel="noopener noreferrer">
              {t("finalCta.ctaPrimary")} <ArrowRight className="ml-1 h-4 w-4" />
            </a>
          </Button>
        </div>
      </Reveal>
    </section>
  );
};
