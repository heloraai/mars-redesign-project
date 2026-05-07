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
      ],
    },
    {
      h: t("footer.sections.company"),
      l: [
        { label: t("footer.links.about"), href: "/about" },
        { label: t("footer.links.clients"), href: "/#clients" },
        { label: t("footer.links.contact"), href: "/#contact" },
      ],
    },
    {
      h: t("footer.sections.compliance"),
      l: [
        { label: t("footer.links.mom"), href: "#" },
        { label: t("footer.links.acra"), href: "#" },
        { label: t("footer.links.privacy"), href: "#" },
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
        </div>
        {sections.map((c) => (
          <div key={c.h}>
            <p className="text-xs font-semibold uppercase tracking-wider text-foreground">{c.h}</p>
            <ul className="mt-4 space-y-2.5">
              {c.l.map((i) => (
                <li key={i.label}>
                  <a href={i.href.startsWith("/") ? withBase(i.href) : i.href} className="text-sm text-muted-foreground hover:text-foreground">
                    {i.label}
                  </a>
                </li>
              ))}
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
