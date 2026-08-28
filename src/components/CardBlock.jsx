import { stationById } from "../data/stations";
import { sourceById } from "../data/sources";
import { useProgress } from "../lib/useProgress";
import { LearnChip } from "./LearnChip";

export function CardBlock({
  card,
  onOpen,
}) {
  const { role } = useProgress();
  const relevant = Boolean(role && card.highlightFor.includes(role));
  const primary = card.sourceIds[0];
  const accent = stationById[card.stationId]?.color ?? "var(--teal)";
  return (
    <article
      className={`card${relevant ? " relevant" : ""}`}
      style={{ "--accent": accent }}
    >
      {relevant ? <span className="for-you-badge">For you</span> : null}
      <header>
        <h3>
          {card.title}
          {card.preview ? <span className="preview-flag">Preview on Learn</span> : null}
        </h3>
        <LearnChip sourceId={primary} href={card.learnUrl} />
      </header>
      {card.previewNote ? <p className="muted">{card.previewNote}</p> : null}
      <dl className="rhythm">
        <dt>What it is</dt>
        <dd>{card.what}</dd>
        <dt>Why it matters</dt>
        <dd>{card.why}</dd>
        <dt>What to put in place</dt>
        <dd>{card.putInPlace}</dd>
      </dl>
      <div className="card-actions">
        <button type="button" className="text-btn" onClick={() => onOpen(card)}>
          Read the fuller paraphrase
        </button>
        <span className="muted">
          {card.sourceIds
            .map((id) => sourceById(id)?.title)
            .filter(Boolean)
            .join(" · ")}
        </span>
      </div>
    </article>
  );
}
