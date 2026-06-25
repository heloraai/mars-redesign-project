import { useCountUp, useInView } from "@/hooks/use-count-up";

export interface CountStatProps {
  to: number;
  suffix?: string;
  prefix?: string;
  decimals?: number;
  label: string;
  className?: string;
  labelClassName?: string;
}

/**
 * Animated count-up statistic. Counts from 0 → `to` once the element scrolls
 * into view. Shared by TrustBar (light) and MetricsSection (dark) — callers
 * pass `className` / `labelClassName` to switch the colour treatment.
 */
export const CountStat = ({
  to,
  suffix = "",
  prefix = "",
  decimals = 0,
  label,
  className,
  labelClassName,
}: CountStatProps) => {
  const { ref, inView } = useInView<HTMLDivElement>();
  const value = useCountUp({ to, start: inView });
  const display =
    decimals > 0 ? value.toFixed(decimals) : String(Math.round(value));
  return (
    <div ref={ref}>
      <p className={className ?? "font-display text-2xl font-semibold text-white"}>
        {prefix}
        {display}
        {suffix}
      </p>
      <p
        className={
          labelClassName ?? "mt-1 text-xs uppercase tracking-wider text-white/55"
        }
      >
        {label}
      </p>
    </div>
  );
};
