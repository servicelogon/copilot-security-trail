import type { Station } from "../types";
import { sourceById } from "../data/sources";

export function RightRail({ station }: { station: Station }) {
  return (
    <aside className="rail">
      <h2>Official Learn sources</h2>
      <div className="source-list">
        {station.sourceIds.map((id) => {
          const s = sourceById(id);
          if (!s) return null;
          return (
            <div key={id}>
              <a href={s.url} target="_blank" rel="noreferrer">
                {s.title}
              </a>
              <div className="muted">Last reviewed {s.lastReviewed}</div>
              {s.fetchNote ? <div className="muted">{s.fetchNote}</div> : null}
            </div>
          );
        })}
      </div>
    </aside>
  );
}
