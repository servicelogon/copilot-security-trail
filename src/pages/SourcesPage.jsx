import { LeftRail } from "../components/LeftRail";
import { sources } from "../data/sources";
import { stations } from "../data/stations";

export function SourcesPage() {
  return (
    <div className="station-grid">
      <LeftRail />
      <section>
        <h1>Sources index</h1>
        <p className="lede">
          Every Microsoft Learn URL cited on this trail. Pages were fetched for
          this build; last-reviewed dates are the articles own ms.date values.
        </p>
        <div className="source-index">
          {sources.map((s) => {
            const stops = stations.filter((st) => s.stations.includes(st.id));
            return (
              <article key={s.id} className="source-card">
                <h2 style={{ fontSize: "1.15rem" }}>{s.title}</h2>
                <p>
                  <a href={s.url} target="_blank" rel="noreferrer">
                    {s.url}
                  </a>
                </p>
                <p className="muted">
                  Last reviewed {s.lastReviewed}. Used at{" "}
                  {stops.map((st) => `Station ${st.id} (${st.title})`).join(", ")}.
                  {s.fetched ? " Fetch succeeded." : " Fetch failed — link only."}
                </p>
                {s.fetchNote ? <p className="muted">{s.fetchNote}</p> : null}
              </article>
            );
          })}
        </div>
      </section>
      <aside className="rail">
        <h2>Naming note</h2>
        <p className="muted">
          The privacy article states Microsoft 365 Copilot is now named
          Microsoft Copilot, and Microsoft 365 Copilot Chat is now named
          Microsoft Copilot Chat. Some older articles still use the former
          names; this trail keeps each page’s wording.
        </p>
      </aside>
    </div>
  );
}
