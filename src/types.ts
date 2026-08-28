export type RoleId = "admin" | "security" | "agent-maker";
export type StationId = 1 | 2 | 3 | 4 | 5;

export interface Role {
  id: RoleId;
  label: string;
  hint: string;
}

export interface Source {
  id: string;
  title: string;
  url: string;
  lastReviewed: string;
  fetched: boolean;
  fetchNote?: string;
  stations: StationId[];
}

export interface Card {
  id: string;
  stationId: StationId;
  title: string;
  what: string;
  why: string;
  putInPlace: string;
  sourceIds: string[];
  /** Optional Learn URL with fragment; falls back to the source record. */
  learnUrl?: string;
  highlightFor: RoleId[];
  preview?: boolean;
  previewNote?: string;
}

export interface Station {
  id: StationId;
  slug: string;
  title: string;
  promise: string;
  color: string;
  colorName: string;
  icon: string;
  stamp: string;
  sourceIds: string[];
}

export interface ChecklistItem {
  id: string;
  group: string;
  groupBlurb: string;
  text: string;
  sourceId: string;
  highlightFor: RoleId[];
  stampsStation?: StationId;
}

export interface ProgressState {
  stamps: Partial<Record<StationId, string>>;
  viewedCards: string[];
  checklist: string[];
  role: RoleId | null;
}
