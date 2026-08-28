import { useEffect } from "react";
import { sourceById } from "../data/sources";
import { LearnChip } from "./LearnChip";

export function CardDrawer({
  card,
  onClose,
}) {
  useEffect(() => {
    if (!card) return;
    const onKey = (e) => {
      if (e.key === "Escape") onClose();
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [card, onClose]);

  if (!card) return null;

  return (
    <>
      <div className="drawer-backdrop" onClick={onClose} />
      <aside className="drawer" role="dialog" aria-modal="true" aria-labelledby="drawer-title">
        <header>
          <h2 id="drawer-title">
            {card.title}
            {card.preview ? <span className="preview-flag">Preview</span> : null}
          </h2>
          <button type="button" className="chip" onClick={onClose}>
            Close
          </button>
        </header>
        <dl className="rhythm">
          <dt>What it is</dt>
          <dd>{card.what}</dd>
          <dt>Why it matters</dt>
          <dd>{card.why}</dd>
          <dt>What to put in place</dt>
          <dd>{card.putInPlace}</dd>
        </dl>
        {card.previewNote ? <p className="muted">{card.previewNote}</p> : null}
        <h3>Official Learn sources</h3>
        <ul className="source-list">
          {card.sourceIds.map((id) => {
            const s = sourceById(id);
            if (!s) return null;
            return (
              <li key={id}>
                <a href={card.learnUrl && id === card.sourceIds[0] ? card.learnUrl : s.url} target="_blank" rel="noreferrer">
                  {s.title}
                </a>
                <div className="muted">Last reviewed {s.lastReviewed}</div>
              </li>
            );
          })}
        </ul>
        <p style={{ marginTop: "1rem" }}>
          <LearnChip sourceId={card.sourceIds[0]} href={card.learnUrl} />
        </p>
      </aside>
    </>
  );
}
