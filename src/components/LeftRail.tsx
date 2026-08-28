import { NavLink } from "react-router-dom";
import { stations } from "../data/stations";
import type { StationId } from "../types";

export function LeftRail({ current }: { current?: StationId }) {
  return (
    <nav className="rail" aria-label="Trail stops">
      <h2>Trail stops</h2>
      <NavLink to="/" end>
        Trailhead (home)
      </NavLink>
      {stations.map((s) => (
        <NavLink
          key={s.id}
          to={`/station/${s.id}`}
          className={current === s.id ? "active" : undefined}
        >
          <img className="mini" src={s.icon} alt="" />
          {s.id}. {s.title}
        </NavLink>
      ))}
      <NavLink to="/checklist">Checklist</NavLink>
      <NavLink to="/sources">Sources</NavLink>
    </nav>
  );
}
