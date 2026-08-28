import {
  useCallback,
  useMemo,
  useState,
  type ReactNode,
} from "react";
import type { ProgressState, RoleId, StationId } from "../types";
import { ProgressContext } from "./progress-context";
import {
  loadProgress,
  markCardViewed,
  setRole as persistRole,
  stampStation as persistStamp,
  toggleChecklist as persistToggle,
} from "./storage";

export function ProgressProvider({ children }: { children: ReactNode }) {
  const [progress, setProgress] = useState<ProgressState>(() => loadProgress());

  const setRole = useCallback((role: RoleId | null) => {
    setProgress(persistRole(role));
  }, []);

  const stamp = useCallback((id: StationId) => {
    setProgress(persistStamp(id));
  }, []);

  const toggleCheck = useCallback((id: string) => {
    setProgress(persistToggle(id));
  }, []);

  const viewCard = useCallback((id: string) => {
    setProgress(markCardViewed(id));
  }, []);

  const value = useMemo(
    () => ({
      progress,
      role: progress.role,
      setRole,
      stamp,
      toggleCheck,
      viewCard,
    }),
    [progress, setRole, stamp, toggleCheck, viewCard],
  );

  return (
    <ProgressContext.Provider value={value}>{children}</ProgressContext.Provider>
  );
}
