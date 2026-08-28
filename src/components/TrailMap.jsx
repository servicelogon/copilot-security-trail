import { useNavigate } from "react-router-dom";
import { hotspots, stations } from "../data/stations";
import { useProgress } from "../lib/useProgress";
import { Stamp } from "./Stamp";

export function TrailMap() {
  const navigate = useNavigate();
  const { progress } = useProgress();

  return (
    <div className="map-stage">
      <div className="trail-map" role="navigation" aria-label="Copilot Security Trail map">
        <img
          className="map-art"
          src="/assets/trail-map.png"
          width={960}
          height={640}
          alt="Illustrated parchment trail map with five numbered station posts along a winding path."
        />
        {stations.map((s) => {
          const spot = hotspots[s.id];
          const date = progress.stamps[s.id];
          return (
            <button
              key={s.id}
              type="button"
              className="hotspot"
              style={{
                left: `${(spot.displayX / 960) * 100}%`,
                top: `${(spot.displayY / 640) * 100}%`,
              }}
              aria-label={`Station ${s.id}: ${s.title}. ${date ? `Stamped ${date}.` : "Stamp not yet earned."}`}
              onClick={() => navigate(`/station/${s.id}`)}
            >
              <img className="icon" src={s.icon} alt="" />
              <span className="map-stamp">
                <Stamp
                  station={s}
                  earned={Boolean(date)}
                  date={date}
                  size={48}
                />
              </span>
            </button>
          );
        })}
      </div>
    </div>
  );
}
