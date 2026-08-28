import {
  useCallback,
  useMemo,
  useState,
} from "react";
import { ProgressContext } from "./progress-context";
import {
  loadProgress,
  markCardViewed,
  setRole as persistRole,
  stampStation as persistStamp,
  toggleChecklist as persistToggle,
} from "./storage";

export function ProgressProvider({ children }) {
  const [progress, setProgress] = useState(() => loadProgress());

  const setRole = useCallback((role) => {
    setProgress(persistRole(role));
  }, []);

  const stamp = useCallback((id) => {
    setProgress(persistStamp(id));
  }, []);

  const toggleCheck = useCallback((id) => {
    setProgress(persistToggle(id));
  }, []);

  const viewCard = useCallback((id) => {
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
