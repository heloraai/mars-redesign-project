import { createElement, type ElementType, type ReactNode } from "react";
import { useInView } from "@/hooks/use-count-up";

/**
 * Detect the user's reduced-motion preference. SSR / test environments without
 * matchMedia fall back to "motion allowed" so content still animates in the
 * browser while never throwing during render.
 */
function prefersReducedMotion(): boolean {
  if (typeof window === "undefined" || typeof window.matchMedia !== "function") {
    return false;
  }
  return window.matchMedia("(prefers-reduced-motion: reduce)").matches;
}

interface RevealProps {
  /** Content revealed when the wrapper scrolls into view. */
  children: ReactNode;
  /** Stagger delay in ms applied via transitionDelay (e.g. index * 80). */
  delay?: number;
  /** Extra classes merged onto the wrapper element. */
  className?: string;
  /** Element/component to render as. Defaults to "div". */
  as?: ElementType;
}

/**
 * Scroll-reveal wrapper used by every homepage section. Starts hidden and
 * slightly translated down, then transitions to fully visible the first time it
 * enters the viewport (via the shared useInView observer). An optional `delay`
 * staggers grids/lists. When the user prefers reduced motion the content renders
 * fully visible with no transform or transition.
 */
export function Reveal({ children, delay = 0, className, as = "div" }: RevealProps) {
  const { ref, inView } = useInView<HTMLElement>("0px 0px -10%");
  const reduceMotion = prefersReducedMotion();
  const shown = reduceMotion || inView;

  const motionClasses = reduceMotion
    ? ""
    : "transition-[opacity,transform] duration-700 ease-out will-change-[opacity,transform] motion-reduce:transition-none";
  const stateClasses = shown
    ? "opacity-100 translate-y-0"
    : "opacity-0 translate-y-6";

  const classes = [motionClasses, stateClasses, className]
    .filter(Boolean)
    .join(" ");

  return createElement(
    as,
    {
      ref,
      className: classes || undefined,
      style: !reduceMotion && delay ? { transitionDelay: `${delay}ms` } : undefined,
    },
    children,
  );
}
