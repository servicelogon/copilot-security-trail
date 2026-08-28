import { sourceById } from "../data/sources";

export function LearnChip({
  sourceId,
  href,
}) {
  const source = sourceById(sourceId);
  const url = href ?? source?.url;
  if (!url) return null;
  return (
    <a
      className="learn-chip"
      href={url}
      target="_blank"
      rel="noreferrer"
    >
      Open on Microsoft Learn
    </a>
  );
}
