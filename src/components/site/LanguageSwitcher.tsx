import { useEffect, useRef, useState } from "react";
import { useTranslation } from "react-i18next";
import { Check, ChevronDown, Languages } from "lucide-react";
import { SUPPORTED_LANGUAGES } from "@/i18n";

export const LanguageSwitcher = () => {
  const { i18n } = useTranslation();
  const [open, setOpen] = useState(false);
  const wrapRef = useRef<HTMLDivElement | null>(null);
  const current =
    SUPPORTED_LANGUAGES.find((l) => l.code === i18n.resolvedLanguage) ??
    SUPPORTED_LANGUAGES[0];

  useEffect(() => {
    const onClickOutside = (e: MouseEvent) => {
      if (!wrapRef.current?.contains(e.target as Node)) setOpen(false);
    };
    document.addEventListener("mousedown", onClickOutside);
    return () => document.removeEventListener("mousedown", onClickOutside);
  }, []);

  return (
    <div ref={wrapRef} className="relative">
      <button
        type="button"
        onClick={() => setOpen((v) => !v)}
        className="flex h-10 items-center gap-1.5 rounded-md border border-border bg-background px-3 text-sm font-medium text-foreground hover:bg-muted"
        aria-haspopup="listbox"
        aria-expanded={open}
      >
        <Languages className="h-4 w-4 text-muted-foreground" />
        <span className="hidden sm:inline">{current.native}</span>
        <span className="inline sm:hidden uppercase">{current.code}</span>
        <ChevronDown className="h-3.5 w-3.5 text-muted-foreground" />
      </button>
      {open ? (
        <ul
          role="listbox"
          className="absolute right-0 z-50 mt-2 min-w-[180px] overflow-hidden rounded-md border border-border bg-popover py-1 shadow-elevated"
        >
          {SUPPORTED_LANGUAGES.map((lang) => (
            <li key={lang.code}>
              <button
                type="button"
                role="option"
                aria-selected={lang.code === current.code}
                onClick={() => {
                  void i18n.changeLanguage(lang.code);
                  setOpen(false);
                }}
                className={`flex w-full items-center justify-between gap-3 px-3 py-2 text-sm text-foreground hover:bg-muted ${
                  lang.code === current.code ? "bg-muted/60 font-medium" : ""
                }`}
              >
                <span>{lang.native}</span>
                {lang.code === current.code ? <Check className="h-4 w-4 text-accent" /> : null}
              </button>
            </li>
          ))}
        </ul>
      ) : null}
    </div>
  );
};
