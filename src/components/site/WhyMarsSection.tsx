import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { withBase } from "@/lib/href";

export const WhyMarsSection = () => (
  <section className="bg-background py-24">
    <div className="container-narrow grid gap-12 lg:grid-cols-[1fr_1.2fr] lg:items-start">
      <div>
        <p className="eyebrow">Why Mars</p>
        <h2 className="mt-3 font-display text-3xl font-semibold sm:text-4xl">
          Why Mars, not a global EOR platform?
        </h2>
      </div>
      <div className="space-y-5 text-base leading-relaxed text-muted-foreground">
        <p>
          Global EOR platforms — Deel, Remote, Rippling — operate on standardised, high-volume
          SaaS models. They work well until they don&rsquo;t: equity compensation reporting across
          jurisdictions, non-standard termination negotiations in Indonesia, PE exposure that
          needs a counsel opinion before payroll cycle one.
        </p>
        <p>
          Mars intervenes where localised regulatory friction outpaces generic software. We
          replace automated workflows with bespoke governance frameworks, active in-country legal
          oversight, and senior-level human intervention for the edge cases that require it.
        </p>
        <p className="text-foreground font-medium">
          We are not cheaper than a SaaS platform. We are what you use when the cost of a
          compliance error exceeds the cost of our service.
        </p>
        <Button asChild className="mt-2 bg-accent text-accent-foreground hover:bg-accent/90">
          <a href={withBase("/#contact")}>
            Talk to a specialist <ArrowRight />
          </a>
        </Button>
      </div>
    </div>
  </section>
);
