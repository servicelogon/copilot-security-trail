import type { ProgressState, RoleId, StationId } from "../types";
import { checklist } from "../data/checklist";

const KEY = "copilot-security-trail.v1";

const empty: ProgressState = {
  stamps: {},
  viewedCards: [],
  checklist: [],
  role: null,
};

function parse(raw: string | null): ProgressState {
  if (!raw) return { ...empty, stamps: {}, viewedCards: [], checklist: [] };
  try {
    const data = JSON.parse(raw) as Partial<ProgressState>;
    return {
      stamps: data.stamps ?? {},
      viewedCards: Array.isArray(data.viewedCards) ? data.viewedCards : [],
      checklist: Array.isArray(data.checklist) ? data.checklist : [],
      role: data.role ?? null,
    };
  } catch {
    return { ...empty, stamps: {}, viewedCards: [], checklist: [] };
  }
}

export function loadProgress(): ProgressState {
  return parse(localStorage.getItem(KEY));
}

export function saveProgress(next: ProgressState): void {
  localStorage.setItem(KEY, JSON.stringify(next));
}

export function todayLocal(): string {
  const parts = new Intl.DateTimeFormat("en-CA", {
    timeZone: "America/New_York",
    year: "numeric",
    month: "2-digit",
    day: "2-digit",
  }).formatToParts(new Date());
  const y = parts.find((p) => p.type === "year")?.value;
  const m = parts.find((p) => p.type === "month")?.value;
  const d = parts.find((p) => p.type === "day")?.value;
  return `${y}-${m}-${d}`;
}

export function stampStation(id: StationId): ProgressState {
  const current = loadProgress();
  const next: ProgressState = {
    ...current,
    stamps: { ...current.stamps, [id]: current.stamps[id] ?? todayLocal() },
  };
  saveProgress(next);
  return next;
}

export function unstampStation(id: StationId): ProgressState {
  const current = loadProgress();
  const stamps = { ...current.stamps };
  delete stamps[id];
  const next: ProgressState = { ...current, stamps };
  saveProgress(next);
  return next;
}

export function setRole(role: RoleId | null): ProgressState {
  const current = loadProgress();
  const next: ProgressState = { ...current, role };
  saveProgress(next);
  return next;
}

export function toggleChecklist(id: string): ProgressState {
  const current = loadProgress();
  const on = current.checklist.includes(id);
  let next: ProgressState = {
    ...current,
    checklist: on
      ? current.checklist.filter((x) => x !== id)
      : [...current.checklist, id],
  };
  const item = checklist.find((i) => i.id === id);
  if (item?.stampsStation) {
    const group = checklist.filter((i) => i.group === item.group);
    const allOn = group.every((i) => next.checklist.includes(i.id));
    if (allOn && !next.stamps[item.stampsStation]) {
      next = {
        ...next,
        stamps: { ...next.stamps, [item.stampsStation]: todayLocal() },
      };
    }
  }
  saveProgress(next);
  return next;
}

export function markCardViewed(id: string): ProgressState {
  const current = loadProgress();
  if (current.viewedCards.includes(id)) return current;
  const next: ProgressState = {
    ...current,
    viewedCards: [...current.viewedCards, id],
  };
  saveProgress(next);
  return next;
}
