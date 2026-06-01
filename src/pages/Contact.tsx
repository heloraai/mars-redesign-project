import { useEffect } from "react";
import { useTranslation } from "react-i18next";
import { ArrowRight, Calendar, CheckCircle2, Clock, Linkedin, Mail, MapPin } from "lucide-react";
import { Button } from "@/components/ui/button";
import { SiteHeader } from "@/components/site/SiteHeader";
import { SiteFooter } from "@/components/site/SiteFooter";
import { BOOKING_URL } from "@/lib/href";

export default function ContactPage() {
  const { t } = useTranslation();

  useEffect(() => {
    const prevTitle = document.title;
    document.title = `${t("contact.eyebrow")} — Mars Consulting`;
    return () => {
      document.title = prevTitle;
    };
  }, [t]);

  return (
    <main className="min-h-screen bg-background">
      <SiteHeader />
      <section id="contact" className="bg-background py-24">
        <div className="container-narrow">
          <div className="overflow-hidden rounded-3xl border border-border bg-gradient-hero p-10 text-primary-foreground shadow-elevated lg:p-14">
            <div className="mx-auto max-w-2xl text-center">
              <p className="eyebrow text-white/60">{t("contact.eyebrow")}</p>
              <h1 className="mt-3 font-display text-3xl font-semibold sm:text-4xl">
                {t("contact.headline")}
              </h1>
              <ul className="mt-8 inline-flex flex-col items-start gap-3 text-sm text-white/80">
                {(["bullet1", "bullet2", "bullet3"] as const).map((k) => (
                  <li key={k} className="flex items-start gap-2.5">
                    <CheckCircle2 className="mt-0.5 h-4 w-4 text-accent" />
                    <span>{t(`contact.${k}`)}</span>
                  </li>
                ))}
              </ul>
              <div className="mt-8">
                <Button asChild size="lg" className="bg-accent text-accent-foreground hover:bg-accent/90">
                  <a href={BOOKING_URL} target="_blank" rel="noopener noreferrer">
                    {t("contact.submit")} <ArrowRight />
                  </a>
                </Button>
              </div>
              <div className="mt-6 flex items-center justify-center gap-3 text-xs text-white/60">
                <Calendar className="h-4 w-4" /> {t("contact.response")}
              </div>
            </div>
          </div>
          <div className="mt-10 grid gap-5 rounded-3xl border border-border bg-card p-8 shadow-card sm:grid-cols-2 lg:grid-cols-4">
            <div className="sm:col-span-2 lg:col-span-4">
              <p className="eyebrow">{t("contact.infoEyebrow")}</p>
            </div>
            <div className="flex items-start gap-3">
              <Mail className="mt-0.5 h-4 w-4 shrink-0 text-primary" />
              <div>
                <p className="text-xs uppercase tracking-wider text-muted-foreground">
                  {t("contact.emailLabel")}
                </p>
                <a
                  href={`mailto:${t("contact.emailValue")}`}
                  className="mt-1 block text-sm font-medium text-foreground hover:underline"
                >
                  {t("contact.emailValue")}
                </a>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-primary" />
              <div>
                <p className="text-xs uppercase tracking-wider text-muted-foreground">
                  {t("contact.hqLabel")}
                </p>
                <p className="mt-1 text-sm text-foreground">{t("contact.hqAddress")}</p>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <Clock className="mt-0.5 h-4 w-4 shrink-0 text-primary" />
              <div>
                <p className="text-xs uppercase tracking-wider text-muted-foreground">
                  {t("contact.hoursLabel")}
                </p>
                <p className="mt-1 text-sm text-foreground">{t("contact.hoursValue")}</p>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <Linkedin className="mt-0.5 h-4 w-4 shrink-0 text-[#0A66C2]" />
              <div>
                <p className="text-xs uppercase tracking-wider text-muted-foreground">
                  {t("contact.linkedinLabel")}
                </p>
                <a
                  href={t("contact.linkedinUrl")}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-1 block text-sm font-medium text-foreground hover:underline"
                >
                  {t("contact.linkedinValue")} ↗
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
      <SiteFooter />
    </main>
  );
}
