import { Link } from "react-router-dom";
import { stations } from "../data/stations";
import { useProgress } from "../lib/useProgress";
import { Stamp } from "./Stamp";

export function PassportStrip() {
  const { progress } = useProgress();
  const earned = stations.filter((s) => progress.stamps[s.id]).length;
  return (
    <section className="passport" aria-label="Trail passport">
      <h2>Passport stamps</h2>
      <p className="muted">
        {earned} of 5 stops inked. Unearned marks are a faint ring; completing a
        station stamps today’s date over the baked-in 2024-05-18.
      </p>
      <div className="passport-row">
        {stations.map((s) => {
          const date = progress.stamps[s.id];
          return (
            <Link
              key={s.id}
              className="passport-item"
              to={`/station/${s.id}`}
            >
              <Stamp
                station={s}
                earned={Boolean(date)}
                date={date}
                size={120}
              />
              <span>
                {s.id}. {s.title}
              </span>
            </Link>
          );
        })}
      </div>
    </section>
  );
}
