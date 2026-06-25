import { useTranslation } from "react-i18next";
import {
  AlertTriangle,
  Globe2,
  ScrollText,
  ShieldAlert,
  Workflow,
  type LucideIcon,
} from "lucide-react";
import { Reveal } from "@/components/site/Reveal";

/**
 * Icons for the exception fragments parsed out of `vsSoftware.body`, in source
 * order (complex hiring, cross-border payroll, regulatory complexity, sensitive
 * workforce situations, business-critical workforce operations). Ordering — not
 * the fragment text — drives the mapping, so it holds across every locale.
 */
const EXCEPTION_ICONS: readonly LucideIcon[] = [
  AlertTriangle,
  Globe2,
  ScrollText,
  ShieldAlert,
  Workflow,
] as const;

interface ParsedBody {
  lead: string;
  fragments: readonly string[];
  closing: string;
}

/**
 * Restructure the EXISTING `vsSoftware.body` value for layout — no new copy.
 * The body shape is consistent across locales: "<lead> — <fragment>, <fragment>
 * … and <fragment>. <closing>". Anything that does not parse cleanly degrades to
 * rendering the raw body as the lead, so the section never loses content.
 */
const parseBody = (body: string): ParsedBody => {
  const emDashIndex = body.indexOf("—");
  if (emDashIndex === -1) {
    return { lead: body, fragments: [], closing: "" };
  }
  const lead = body.slice(0, emDashIndex + 1).trim();
  const remainder = body.slice(emDashIndex + 1).trim();

  const terminatorMatch = remainder.match(/[.。।]\s*\S/);
  let fragmentBlock = remainder;
  let closing = "";
  if (terminatorMatch && typeof terminatorMatch.index === "number") {
    fragmentBlock = remainder.slice(0, terminatorMatch.index).trim();
    closing = remainder.slice(terminatorMatch.index + 1).trim();
  }

  const fragments = fragmentBlock
    .split(/[,、，]|\s+(?:and|dan|at|và|serta|และ|और|y|及)\s+/i)
    .map((fragment) => fragment.replace(/[.。।]\s*$/, "").trim())
    .filter((fragment) => fragment.length > 0);

  return { lead, fragments, closing };
};

/** Split the headline so the "Mars …" clause can be accent-colored. */
const splitHeadline = (headline: string): { before: string; mars: string } => {
  const marsIndex = headline.indexOf("Mars");
  if (marsIndex === -1) return { before: headline, mars: "" };
  return { before: headline.slice(0, marsIndex), mars: headline.slice(marsIndex) };
};

/**
 * SECTION 9 — Different From Software. Light positioning section: "When the
 * Platform Stops, Mars Starts." The single body paragraph is restructured
 * in-place into a lead clause, a clean grid of exception chips (icon + label),
 * and a framed closing statement — density from layout, not new copy. Matches
 * the subpage design language (clean cards, restrained accent). Scroll-reveal.
 */
export const VsSoftwareSection = () => {
  const { t } = useTranslation();
  const { lead, fragments, closing } = parseBody(t("vsSoftware.body"));
  const { before, mars } = splitHeadline(t("vsSoftware.headline"));

  return (
    <section className="bg-secondary/40 py-24">
      <div className="container-narrow">
        <Reveal as="div" className="max-w-3xl">
          <p className="eyebrow">{t("vsSoftware.eyebrow")}</p>
          <h2 className="mt-3 font-display text-3xl font-semibold sm:text-4xl">
            {before}
            {mars && <span className="text-accent">{mars}</span>}
          </h2>
          <p className="mt-5 text-base leading-relaxed text-muted-foreground sm:text-lg">
            {lead}
          </p>
        </Reveal>

        {fragments.length > 0 && (
          <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {fragments.map((fragment, i) => {
              const Icon = EXCEPTION_ICONS[i % EXCEPTION_ICONS.length];
              return (
                <Reveal as="div" key={fragment} delay={i * 80} className="h-full">
                  <article className="group flex h-full items-start gap-3 rounded-2xl border border-border bg-card p-5 shadow-card transition-all duration-300 hover:-translate-y-1 hover:border-accent/50 hover:shadow-elevated">
                    <span className="grid h-10 w-10 shrink-0 place-items-center rounded-lg bg-accent/10 text-accent transition-colors duration-300 group-hover:bg-accent group-hover:text-accent-foreground">
                      <Icon className="h-5 w-5" />
                    </span>
                    <span className="pt-1.5 font-display text-sm font-semibold capitalize leading-snug text-foreground">
                      {fragment}
                    </span>
                  </article>
                </Reveal>
              );
            })}
          </div>
        )}

        {closing && (
          <Reveal as="div" delay={120} className="mt-10">
            <p className="max-w-2xl border-l-2 border-accent pl-5 font-display text-lg font-medium leading-snug text-foreground sm:text-xl">
              {closing}
            </p>
          </Reveal>
        )}
      </div>
    </section>
  );
};
