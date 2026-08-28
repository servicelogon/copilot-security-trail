import { createContext } from "react";
import type { RoleId, StationId, ProgressState } from "../types";

export type ProgressContextValue = {
  progress: ProgressState;
  role: RoleId | null;
  setRole: (role: RoleId | null) => void;
  stamp: (id: StationId) => void;
  toggleCheck: (id: string) => void;
  viewCard: (id: string) => void;
};

export const ProgressContext = createContext<ProgressContextValue | null>(null);
