import { useMemo, useState } from "react";
import { Navigate, useParams } from "react-router-dom";
import { CardBlock } from "../components/CardBlock";
import { CardDrawer } from "../components/CardDrawer";
import { LeftRail } from "../components/LeftRail";
import { RightRail } from "../components/RightRail";
import { RoleChips } from "../components/RoleChips";
import { Stamp } from "../components/Stamp";
import { cardsForStation } from "../data/cards";
import { stationById } from "../data/stations";
import { useProgress } from "../lib/useProgress";
import type { Card, StationId } from "../types";

export function StationPage() {
  const { id } = useParams();
  const stationId = Number(id) as StationId;
  const station = stationById[stationId];
  const { progress, stamp } = useProgress();
  const [open, setOpen] = useState<Card | null>(null);
  const list = useMemo(() => cardsForStation(stationId), [stationId]);

  if (!station) return <Navigate to="/" replace />;

  const date = progress.stamps[station.id];

  return (
    <div className="station-grid" style={{ ["--accent" as string]: station.color }}>
      <LeftRail current={station.id} />
      <section>
        <div className="station-hero">
          <img src={station.icon} width={96} height={96} alt="" />
          <div>
            <h1>
              Station {station.id}: {station.title}
            </h1>
            <p>{station.promise}</p>
          </div>
        </div>
        <RoleChips />
        <div className="stamp-well">
          <Stamp
            station={station}
            earned={Boolean(date)}
            date={date}
            size={120}
          />
          <div>
            <strong>{date ? `Stamped ${date}` : "Stamp not yet earned"}</strong>
            <p className="muted" style={{ margin: "0.2rem 0 0.6rem" }}>
              Completing this stop inks the passport with today’s local date,
              covering the baked-in 2024-05-18 on the stamp art.
            </p>
            {!date ? (
              <button
                type="button"
                className="stamp-btn"
                onClick={() => stamp(station.id)}
              >
                Stamp this stop
              </button>
            ) : (
              <p className="muted">This stop is already in your passport.</p>
            )}
          </div>
        </div>
        <div className="cards">
          {list.map((card) => (
            <CardBlock key={card.id} card={card} onOpen={setOpen} />
          ))}
        </div>
      </section>
      <RightRail station={station} />
      <CardDrawer card={open} onClose={() => setOpen(null)} />
    </div>
  );
}
