import { useTranslation } from "react-i18next";
import {
  Cpu,
  HandHeart,
  Trophy,
  Zap,
  Target,
  Wallet,
  Globe2,
  UserCog,
  type LucideIcon,
} from "lucide-react";
import { Reveal } from "@/components/site/Reveal";

/** Eight uniform "why Mars" reasons — the three approach pillars + five
 *  capabilities — rendered as one consistent 4×2 card grid. */
const FEATURES: readonly { titleKey: string; bodyKey: string; icon: LucideIcon }[] = [
  { titleKey: "approach.p1Title", bodyKey: "approach.p1Body", icon: Cpu },
  { titleKey: "approach.p2Title", bodyKey: "approach.p2Body", icon: HandHeart },
  { titleKey: "approach.p3Title", bodyKey: "approach.p3Body", icon: Trophy },
  { titleKey: "whyChoose.b1Title", bodyKey: "whyChoose.b1Body", icon: Zap },
  { titleKey: "whyChoose.b2Title", bodyKey: "whyChoose.b2Body", icon: Target },
  { titleKey: "whyChoose.b3Title", bodyKey: "whyChoose.b3Body", icon: Wallet },
  { titleKey: "whyChoose.b4Title", bodyKey: "whyChoose.b4Body", icon: Globe2 },
  { titleKey: "whyChoose.b5Title", bodyKey: "whyChoose.b5Body", icon: UserCog },
] as const;

/**
 * "Why Mars" — a single focused section: the headline plus eight uniform
 * reason-cards (approach pillars + capabilities). Reuses existing i18n keys.
 */
export const WhyMarsSection = () => {
  const { t } = useTranslation();
  return (
    <section id="why-mars" className="bg-secondary/40 py-24">
      <div className="container-narrow">
        <Reveal as="div" className="max-w-2xl">
          <h2 className="font-display text-3xl font-semibold sm:text-4xl">
            {t("whyChoose.headline")}
          </h2>
        </Reveal>
        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {FEATURES.map((f, i) => {
            const Icon = f.icon;
            return (
              <Reveal as="div" key={f.titleKey} delay={i * 70} className="h-full">
                <article className="flex h-full flex-col rounded-2xl border border-border bg-card p-7 shadow-card transition-all duration-300 hover:-translate-y-1 hover:border-accent/50 hover:shadow-elevated">
                  <span className="grid h-11 w-11 place-items-center rounded-lg bg-accent/10 text-accent">
                    <Icon className="h-5 w-5" />
                  </span>
                  <h3 className="mt-5 font-display text-lg font-semibold leading-snug text-foreground">
                    {t(f.titleKey)}
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                    {t(f.bodyKey)}
                  </p>
                </article>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
};
