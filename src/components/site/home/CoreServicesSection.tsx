import { useTranslation } from "react-i18next";
import { ArrowRight, Search, Globe2, Users } from "lucide-react";
import { Reveal } from "@/components/site/Reveal";
import { Button } from "@/components/ui/button";
import { withBase } from "@/lib/href";

interface ServiceCard {
  id: string;
  keyBase:
    | "coreServices.executiveSearch"
    | "coreServices.payrollAnywhere"
    | "coreServices.workforceOps";
  href: string;
  icon: React.ComponentType<{ className?: string }>;
}

const SERVICE_CARDS: ServiceCard[] = [
  { id: "executive-search", keyBase: "coreServices.executiveSearch", href: "/executive-search", icon: Search },
  { id: "payroll-anywhere", keyBase: "coreServices.payrollAnywhere", href: "/payroll-anywhere", icon: Globe2 },
  { id: "workforce-operations", keyBase: "coreServices.workforceOps", href: "/workforce-operations", icon: Users },
];

const ServiceCardItem = ({ card }: { card: ServiceCard }) => {
  const { t } = useTranslation();
  const Icon = card.icon;
  return (
    <article className="group flex h-full flex-col rounded-2xl border border-border bg-card p-8 shadow-card transition-all duration-300 hover:-translate-y-1 hover:border-accent/50 hover:shadow-elevated">
      <div className="flex items-center justify-between">
        <span className="grid h-12 w-12 place-items-center rounded-lg bg-primary text-primary-foreground transition-colors duration-300 group-hover:bg-accent group-hover:text-accent-foreground">
          <Icon className="h-5 w-5" />
        </span>
        <span className="rounded-full border border-border bg-muted/60 px-2.5 py-0.5 text-[10px] font-medium uppercase tracking-wider text-muted-foreground">
          {t(`${card.keyBase}.tag`)}
        </span>
      </div>
      <h3 className="mt-6 font-display text-2xl font-semibold leading-tight text-foreground">
        {t(`${card.keyBase}.title`)}
      </h3>
      <p className="mt-3 flex-1 text-sm leading-relaxed text-muted-foreground">
        {t(`${card.keyBase}.body`)}
      </p>
      <div className="mt-7 border-t border-border pt-7">
        <Button asChild className="bg-primary text-primary-foreground hover:bg-primary/90">
          <a href={withBase(card.href)}>
            {t(`${card.keyBase}.cta`)} <ArrowRight />
          </a>
        </Button>
      </div>
    </article>
  );
};

/**
 * SECTION 3 — What We Do. Three core-service cards mapped to existing subpages:
 * Executive Search → /recruitment, Payroll Anywhere → /eor,
 * Workforce Operations → /hr-outsourcing. The hero secondary CTA
 * ("Explore What We Do") deep-links to #what-we-do. Clean house-style card grid.
 */
export const CoreServicesSection = () => {
  const { t } = useTranslation();
  return (
    <section id="what-we-do" className="scroll-mt-24 bg-secondary/40 py-24">
      <div className="container-narrow">
        <div className="max-w-3xl">
          <p className="eyebrow">{t("coreServices.eyebrow")}</p>
          <h2 className="mt-3 font-display text-3xl font-semibold sm:text-4xl">
            {t("coreServices.headline")}
          </h2>
        </div>
        <div className="mt-12 grid gap-6 lg:grid-cols-3">
          {SERVICE_CARDS.map((card, i) => (
            <Reveal key={card.id} as="div" delay={i * 90} className="h-full">
              <ServiceCardItem card={card} />
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
};
