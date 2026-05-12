"use client";

import { useEffect, useRef, useState } from "react";
import { useInView } from "framer-motion";

interface AnimatedCounterProps {
  from?: number;
  to: number;
  duration?: number;
  suffix?: string;
  prefix?: string;
  className?: string;
}

export function AnimatedCounter({
  from = 0,
  to,
  duration = 2,
  suffix = "",
  prefix = "",
  className,
}: AnimatedCounterProps) {
  const [count, setCount] = useState(from);
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true, margin: "-50px" });
  const hasAnimated = useRef(false);

  useEffect(() => {
    if (!inView || hasAnimated.current) return;
    hasAnimated.current = true;

    const startTime = performance.now();
    const endTime = startTime + duration * 1000;
    const range = to - from;

    function easeOutQuart(t: number) {
      return 1 - Math.pow(1 - t, 4);
    }

    function tick(currentTime: number) {
      const elapsed = currentTime - startTime;
      const totalDuration = endTime - startTime;
      const progress = Math.min(elapsed / totalDuration, 1);
      const easedProgress = easeOutQuart(progress);
      const currentValue = Math.round(from + range * easedProgress);

      setCount(currentValue);

      if (progress < 1) {
        requestAnimationFrame(tick);
      }
    }

    requestAnimationFrame(tick);
  }, [inView, from, to, duration]);

  return (
    <span ref={ref} className={className}>
      {prefix}
      {count.toLocaleString()}
      {suffix}
    </span>
  );
}
