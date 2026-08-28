import { LeftRail } from "../components/LeftRail";
import { RoleChips } from "../components/RoleChips";
import { checklist } from "../data/checklist";
import { sourceById } from "../data/sources";
import { useProgress } from "../lib/useProgress";

export function ChecklistPage() {
  const { progress, toggleCheck, role } = useProgress();
  const groups = [...new Set(checklist.map((i) => i.group))];
  const done = progress.checklist.length;

  return (
    <div className="station-grid">
      <LeftRail />
      <section>
        <h1>Trail checklist</h1>
        <p className="lede">
          These items are copied from Microsoft’s own steps and tables on the
          fetched Learn pages — not extra admin controls invented for this
          trail. Check them off locally; progress stays in this browser.
        </p>
        <RoleChips />
        <p className="muted">
          {done} of {checklist.length} checked.
        </p>
        {groups.map((group) => {
          const items = checklist.filter((i) => i.group === group);
          return (
            <section key={group} className="check-group">
              <h2>{group}</h2>
              <p className="muted">{items[0]?.groupBlurb}</p>
              {items.map((item) => {
                const source = sourceById(item.sourceId);
                const relevant = Boolean(
                  role && item.highlightFor.includes(role),
                );
                return (
                  <label
                    key={item.id}
                    className={`check-item${relevant ? " relevant" : ""}`}
                  >
                    <input
                      type="checkbox"
                      checked={progress.checklist.includes(item.id)}
                      onChange={() => toggleCheck(item.id)}
                    />
                    <span>
                      {item.text}{" "}
                      {source ? (
                        <a href={source.url} target="_blank" rel="noreferrer">
                          Open on Microsoft Learn
                        </a>
                      ) : null}
                    </span>
                  </label>
                );
              })}
            </section>
          );
        })}
      </section>
      <aside className="rail">
        <h2>How to use this</h2>
        <p className="muted">
          Role chips highlight items that match Admin, Security, or Agent maker.
          They do not hide or rewrite the Learn facts. Each line links to the
          article it was taken from.
        </p>
      </aside>
    </div>
  );
}
