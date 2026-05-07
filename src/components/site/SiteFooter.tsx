import { withBase } from "@/lib/href";

export const SiteFooter = () => {
  const sections = [
    {
      h: "Solutions",
      l: [
        { label: "EOR & Payroll", href: "/eor" },
        { label: "Recruitment & Executive Search", href: "/recruitment" },
        { label: "AI Innovation", href: "/ai-innovation" },
      ],
    },
    {
      h: "Company",
      l: [
        { label: "About", href: "/about" },
        { label: "Clients", href: "/#clients" },
        { label: "Contact", href: "/#contact" },
      ],
    },
    {
      h: "Compliance",
      l: [
        { label: "MOM EA Licence 09C2925", href: "#" },
        { label: "ACRA Filing Agent", href: "#" },
        { label: "Privacy", href: "#" },
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
            Singapore-licensed Employer of Record and HR services across Southeast Asia. Since 2009.
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
          <p>© {new Date().getFullYear()} Mars Consulting Pte Ltd. All rights reserved.</p>
          <p>Singapore · Jakarta · Ho Chi Minh City · Kuala Lumpur</p>
        </div>
        <p className="text-[11px] leading-relaxed text-muted-foreground/80">
          MOM Comprehensive EA Licence No. 09C2925  ·  ACRA Corporate Service Provider &amp; Registered Filing Agent  ·  Registered Corporate Secretary
        </p>
      </div>
    </footer>
  );
};
