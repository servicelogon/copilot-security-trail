import { roles } from "../data/stations";
import { useProgress } from "../lib/useProgress";

export function RoleChips() {
  const { role, setRole } = useProgress();
  const current = roles.find((r) => r.id === role);
  return (
    <div>
      <div className="role-row">
        {roles.map((r) => (
          <button
            key={r.id}
            type="button"
            className="chip"
            aria-pressed={role === r.id}
            onClick={() => setRole(role === r.id ? null : r.id)}
          >
            {r.label}
          </button>
        ))}
      </div>
      <p className="hint" style={{ margin: "0.35rem 0 0" }}>
        {current
          ? `Highlighting cards for ${current.label}: ${current.hint}`
          : "Pick a role to highlight relevant cards. Facts stay the same."}
      </p>
    </div>
  );
}
