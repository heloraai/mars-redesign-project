import { useTranslation } from "react-i18next";
import { Reveal } from "@/components/site/Reveal";

/** Client logos shipped in /public/clients, split across two marquee rows. */
const ROW_A: readonly string[] = [
  "cd2d3a_10fe9a1d545d4c16ae5189bf934383c2mv2.png",
  "cd2d3a_5382acda8bb447189ac3e6b95c66f375mv2.png",
  "cd2d3a_54583bb9b07e4932a5e9c8d1e1e48c7amv2.png",
  "cd2d3a_63f1981b7e9b49ee87b6bcd314258748mv2.png",
  "cd2d3a_6dd37d513261487b8a99565ba2a4d215mv2.png",
  "cd2d3a_7359bcf89035429dae024730477f9fc1mv2.png",
  "cd2d3a_9081dc4a1b0944c280d6cd48655c2278mv2.png",
  "cd2d3a_9d6afc0f1b0244dfacf4138799ef18e9mv2.png",
] as const;

const ROW_B: readonly string[] = [
  "cd2d3a_a15225f158514a19a64c40531e537777mv2.png",
  "cd2d3a_b0677f4d0b6e48738fffd0611d7555a9mv2.png",
  "cd2d3a_b3af992ce69b4c58ae72386b0bcf1f37mv2.png",
  "cd2d3a_b980eb97d2de42e295cc3c098650b177mv2.png",
  "cd2d3a_f866bc6db7b64948890853b22fc727ffmv2.png",
  "acb62c_2d7c5d44efaf4dbda51f1ad53f08f5e1mv2.jpg",
  "acb62c_de121da1b70344dba9043203bab102f9mv2.jpg",
] as const;

const LogoTile = ({ file }: { file: string }) => (
  <div className="flex h-20 w-44 shrink-0 items-center justify-center rounded-xl border border-border bg-card p-4 shadow-card">
    <img
      src={`${import.meta.env.BASE_URL}clients/${file}`}
      alt="Mars Consulting client"
      loading="lazy"
      className="max-h-10 w-auto max-w-full object-contain opacity-70 grayscale"
    />
  </div>
);

/**
 * Two infinite marquee rows of client logos scrolling in opposite directions.
 * The animated track duplicates its tiles so the -50% translate loops
 * seamlessly. Edges fade via a horizontal mask. Pauses on hover; honours
 * prefers-reduced-motion (the animation simply does not apply). House style.
 */
const MarqueeRow = ({ logos, reverse }: { logos: readonly string[]; reverse?: boolean }) => (
  <div className="flex overflow-hidden [mask-image:linear-gradient(to_right,transparent,#000_8%,#000_92%,transparent)]">
    <div
      className={`flex w-max items-center gap-4 pr-4 hover:[animation-play-state:paused] ${
        reverse ? "motion-safe:animate-marquee-x-reverse" : "motion-safe:animate-marquee-x"
      }`}
    >
      {[...logos, ...logos].map((file, i) => (
        <LogoTile key={`${file}-${i}`} file={file} />
      ))}
    </div>
  </div>
);

/**
 * Client logo wall on the homepage — two opposite-scrolling rows.
 */
export const LogoMarqueeSection = () => {
  const { t } = useTranslation();
  return (
    <section className="border-t border-border bg-background py-24">
      <div className="container-narrow">
        <Reveal as="div" className="mx-auto max-w-2xl text-center">
          <p className="eyebrow">{t("clients.eyebrow")}</p>
          <h2 className="mt-3 font-display text-3xl font-semibold sm:text-4xl">
            {t("clients.headline")}
          </h2>
        </Reveal>
      </div>
      <div className="mt-12 space-y-4">
        {/* Top row scrolls left → right; bottom row scrolls right → left. */}
        <MarqueeRow logos={ROW_A} reverse />
        <MarqueeRow logos={ROW_B} />
      </div>
      <div className="container-narrow">
        <p className="mx-auto mt-12 max-w-3xl text-center text-sm text-muted-foreground">
          {t("clients.logosNote")}
        </p>
      </div>
    </section>
  );
};
