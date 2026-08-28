
export function Stamp({
  station,
  earned,
  date,
  size,
}) {
  const src = earned ? station.stamp : "/assets/sliced/stamp-unearned.png";
  return (
    <span
      className={`stamp${earned ? "" : " faint"}`}
      style={
        {
          "--stamp-size": `${size}px`,
          "--stamp-ink": station.color,
        }
      }
      aria-hidden="true"
    >
      <img src={src} alt="" />
      {earned && date ? <span className="date-cover">{date}</span> : null}
    </span>
  );
}
