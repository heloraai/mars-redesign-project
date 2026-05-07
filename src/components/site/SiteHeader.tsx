import { useState } from "react";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { withBase } from "@/lib/href";
import { LanguageSwitcher } from "./LanguageSwitcher";

interface NavItem {
  label: string;
  href: string;
}

const NAV_ITEMS: NavItem[] = [
  { label: "EOR & Payroll", href: "/eor" },
  { label: "Recruitment & Executive Search", href: "/recruitment" },
  { label: "AI Innovation", href: "/ai-innovation" },
  { label: "About", href: "/about" },
  { label: "Contact", href: "/#contact" },
];

export const SiteHeader = () => {
  const [open, setOpen] = useState(false);
  return (
    <header className="sticky top-0 z-40 border-b border-border/60 bg-background/85 backdrop-blur">
      <div className="container-narrow flex h-20 items-center justify-between gap-6">
        <a href={withBase("/")} className="flex items-center shrink-0" aria-label="Mars Consulting — home">
          <img
            src={`${import.meta.env.BASE_URL}mars-logo.png`}
            alt="Mars Consulting"
            className="h-11 w-auto"
          />
        </a>
        <nav className="hidden items-center gap-6 md:flex">
          {NAV_ITEMS.map((item) => (
            <a
              key={item.label}
              href={withBase(item.href)}
              className="text-sm font-medium leading-none text-muted-foreground hover:text-foreground transition-colors"
            >
              {item.label}
            </a>
          ))}
        </nav>
        <div className="flex items-center gap-2 shrink-0">
          <LanguageSwitcher />
          <Button
            asChild
            className="hidden md:inline-flex h-10 px-5 text-sm bg-accent text-accent-foreground hover:bg-accent/90"
          >
            <a href={withBase("/#contact")}>Book a call</a>
          </Button>
          <button
            type="button"
            onClick={() => setOpen((v) => !v)}
            className="grid h-10 w-10 place-items-center rounded-md border border-border bg-background text-foreground md:hidden"
            aria-label="Toggle navigation"
            aria-expanded={open}
          >
            {open ? <X className="h-4 w-4" /> : <Menu className="h-4 w-4" />}
          </button>
        </div>
      </div>
      {open ? (
        <div className="border-t border-border bg-background md:hidden">
          <div className="container-narrow flex flex-col gap-1 py-3">
            {NAV_ITEMS.map((item) => (
              <a
                key={item.label}
                href={withBase(item.href)}
                onClick={() => setOpen(false)}
                className="rounded-md px-3 py-2.5 text-sm font-medium text-foreground hover:bg-muted"
              >
                {item.label}
              </a>
            ))}
            <a
              href={withBase("/#contact")}
              onClick={() => setOpen(false)}
              className="mt-2 rounded-md bg-accent px-3 py-2.5 text-center text-sm font-medium text-accent-foreground hover:bg-accent/90"
            >
              Book a call
            </a>
          </div>
        </div>
      ) : null}
    </header>
  );
};
