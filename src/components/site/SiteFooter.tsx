import { Linkedin } from "lucide-react";
import { useTranslation } from "react-i18next";
import { withBase } from "@/lib/href";

export const SiteFooter = () => {
  const { t } = useTranslation();
  const sections = [
    {
      h: t("footer.sections.solutions"),
      l: [
        { label: t("footer.links.eor"), href: "/eor" },
        { label: t("footer.links.recruitment"), href: "/recruitment" },
        { label: t("footer.links.aiLab"), href: "/ai-innovation" },
        { label: t("footer.links.hrOutsourcing"), href: "/hr-outsourcing" },
      ],
    },
    {
      h: t("footer.sections.company"),
      l: [
        { label: t("footer.links.about"), href: "/about" },
        { label: t("footer.links.clients"), href: "/recruitment#clients" },
        { label: t("footer.links.contact"), href: "/contact" },
      ],
    },
    {
      h: t("footer.sections.compliance"),
      l: [
        // MOM / ACRA are credentials we display, not pages — no link (was "#",
        // which just jumped to the top of the page). Rendered as plain text.
        { label: t("footer.links.mom"), href: null },
        { label: t("footer.links.acra"), href: null },
        { label: t("footer.links.privacy"), href: "/privacy" },
        { label: t("footer.links.terms"), href: "/terms" },
      ],
    },
  ];
  return (
    <footer className="border-t border-border bg-background py-12">
      <div className="container-narrow grid gap-10 md:grid-cols-[1.5fr_1fr_1fr_1fr]">
        <div>
          <img
            src={`${import.meta.env.BASE_URL}mars-logo.png`}
            alt="Mars Consulting"
            className="h-12 w-auto"
          />
          <p className="mt-4 max-w-xs text-sm text-muted-foreground">
            {t("footer.tagline")}
          </p>
          <a
            href={t("footer.linkedinUrl")}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn"
            className="mt-4 inline-flex items-center gap-1.5 text-sm text-muted-foreground hover:text-foreground"
          >
            <Linkedin className="h-4 w-4 text-[#0A66C2]" />
            LinkedIn
          </a>
        </div>
        {sections.map((c) => (
          <div key={c.h}>
            <p className="text-xs font-semibold uppercase tracking-wider text-foreground">{c.h}</p>
            <ul className="mt-4 space-y-2.5">
              {c.l.map((i) =>
                i.href ? (
                  <li key={i.label}>
                    <a
                      href={i.href.startsWith("/") ? withBase(i.href) : i.href}
                      className="text-sm text-muted-foreground hover:text-foreground"
                    >
                      {i.label}
                    </a>
                  </li>
                ) : (
                  // Credential (MOM / ACRA), not a page — plain text, no jump.
                  <li key={i.label}>
                    <span className="text-sm text-muted-foreground">{i.label}</span>
                  </li>
                )
              )}
            </ul>
          </div>
        ))}
      </div>
      <div className="container-narrow mt-12 space-y-3 border-t border-border pt-6 text-xs text-muted-foreground">
        <div className="flex flex-col items-start justify-between gap-3 md:flex-row md:items-center">
          <p>{t("footer.copyright", { year: new Date().getFullYear() })}</p>
          <p>{t("footer.cities")}</p>
        </div>
        <p className="text-[11px] leading-relaxed text-muted-foreground/80">
          {t("footer.compliance")}
        </p>
      </div>
    </footer>
  );
};
