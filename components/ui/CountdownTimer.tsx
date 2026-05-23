"use client";

import { useEffect, useState } from "react";

interface TimeLeft { days: number; hours: number; minutes: number; seconds: number; }

function getNextSunday(): Date {
  const now = new Date();
  const d   = (7 - now.getDay()) % 7 || 7;
  const next = new Date(now);
  next.setDate(now.getDate() + d);
  next.setHours(8, 0, 0, 0);
  return next;
}

export function CountdownTimer() {
  const [t, setT] = useState<TimeLeft>({ days: 0, hours: 0, minutes: 0, seconds: 0 });

  useEffect(() => {
    const target = getNextSunday();
    const tick = () => {
      const diff = target.getTime() - Date.now();
      if (diff <= 0) { setT({ days: 0, hours: 0, minutes: 0, seconds: 0 }); return; }
      setT({
        days:    Math.floor(diff / 86400000),
        hours:   Math.floor((diff % 86400000) / 3600000),
        minutes: Math.floor((diff % 3600000)  / 60000),
        seconds: Math.floor((diff % 60000)    / 1000),
      });
    };
    tick();
    const id = setInterval(tick, 1000);
    return () => clearInterval(id);
  }, []);

  const units = [
    { label: "Days",  value: t.days },
    { label: "Hours", value: t.hours },
    { label: "Mins",  value: t.minutes },
    { label: "Secs",  value: t.seconds },
  ];

  return (
    <div className="flex items-end gap-1.5 sm:gap-3">
      {units.map(({ label, value }, i) => (
        <div key={label} className="flex items-end gap-1.5 sm:gap-3">
          <div className="flex flex-col items-center">
            {/* Frosted glass digit box — visible on dark video bg */}
            <div
              className="w-12 h-12 sm:w-16 sm:h-16 rounded-lg flex items-center justify-center"
              style={{
                background: "rgba(255,255,255,0.10)",
                backdropFilter: "blur(12px)",
                WebkitBackdropFilter: "blur(12px)",
                border: "1px solid rgba(232,200,122,0.45)",
                boxShadow: "0 4px 20px rgba(0,0,0,0.25), inset 0 1px 0 rgba(255,255,255,0.12)",
              }}
            >
              <span
                className="text-lg sm:text-2xl font-bold tabular-nums"
                style={{
                  fontFamily: "var(--font-poppins)",
                  color: "#FFFFFF",
                  textShadow: "0 1px 8px rgba(0,0,0,0.4)",
                }}
              >
                {String(value).padStart(2, "0")}
              </span>
            </div>
            {/* Gold label underneath */}
            <span
              className="text-xs mt-1.5 sm:mt-2 font-semibold uppercase tracking-wider sm:tracking-widest"
              style={{ color: "#C9973E", fontSize: "0.62rem" }}
            >
              {label}
            </span>
          </div>
          {/* Colon separator */}
          {i < units.length - 1 && (
            <span
              className="text-base sm:text-xl font-bold mb-5 sm:mb-6"
              style={{ color: "rgba(232,200,122,0.60)" }}
            >
              :
            </span>
          )}
        </div>
      ))}
    </div>
  );
}
