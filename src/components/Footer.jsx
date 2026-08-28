import { sources } from "../data/sources";

export function Footer() {
  return (
    <footer className="site-footer">
      <strong>Content from Microsoft Learn.</strong> Paraphrases on this trail
      were written from the fetched articles; they are not a substitute for the
      pages themselves.
      <div className="date-cloud">
        {sources.map((s) => (
          <span key={s.id}>
            {s.title.replace(" | Microsoft Learn", "")}: last reviewed{" "}
            {s.lastReviewed}
          </span>
        ))}
      </div>
    </footer>
  );
}
