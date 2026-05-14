import { ArrowRight, Linkedin } from "lucide-react";
import { useTranslation } from "react-i18next";
import { Button } from "@/components/ui/button";
import { withBase } from "@/lib/href";

export const WhyMarsSection = () => {
  const { t } = useTranslation();
  return (
    <section className="bg-background py-24">
      <div className="container-narrow grid gap-12 lg:grid-cols-[1fr_1.2fr] lg:items-start">
        <div>
          <p className="eyebrow">{t("whyMars.eyebrow")}</p>
          <h2 className="mt-3 font-display text-3xl font-semibold sm:text-4xl">
            {t("whyMars.headline")}
          </h2>
        </div>
        <div className="space-y-5 text-base leading-relaxed text-muted-foreground">
          <p>{t("whyMars.p1")}</p>
          <p>{t("whyMars.p2")}</p>
          <p className="text-foreground font-medium">{t("whyMars.p3")}</p>
          <Button asChild className="mt-2 bg-accent text-accent-foreground hover:bg-accent/90">
            <a href={withBase("/#contact")}>
              {t("whyMars.cta")} <ArrowRight />
            </a>
          </Button>
          <div className="mt-4 flex items-center gap-2 border-t border-border pt-5 text-sm text-muted-foreground">
            <Linkedin className="h-4 w-4 shrink-0 text-[#0A66C2]" />
            <span>{t("whyMars.verifyLine")}</span>
            <a
              href={t("whyMars.verifyUrl")}
              target="_blank"
              rel="noopener noreferrer"
              className="font-medium text-foreground hover:underline"
            >
              {t("whyMars.verifyCta")}
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};
