import type { CSSProperties } from "react";
import type { Station } from "../types";

type Size = 48 | 120;

export function Stamp({
  station,
  earned,
  date,
  size,
}: {
  station: Station;
  earned: boolean;
  date?: string;
  size: Size;
}) {
  const src = earned ? station.stamp : "/assets/sliced/stamp-unearned.png";
  return (
    <span
      className={`stamp${earned ? "" : " faint"}`}
      style={
        {
          "--stamp-size": `${size}px`,
          "--stamp-ink": station.color,
        } as CSSProperties
      }
      aria-hidden="true"
    >
      <img src={src} alt="" />
      {earned && date ? <span className="date-cover">{date}</span> : null}
    </span>
  );
}
