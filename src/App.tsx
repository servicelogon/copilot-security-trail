import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import { Layout } from "./components/Layout";
import { ProgressProvider } from "./lib/Progress";
import { ChecklistPage } from "./pages/ChecklistPage";
import { Home } from "./pages/Home";
import { SourcesPage } from "./pages/SourcesPage";
import { StationPage } from "./pages/StationPage";

export default function App() {
  return (
    <ProgressProvider>
      <BrowserRouter>
        <Routes>
          <Route element={<Layout />}>
            <Route index element={<Home />} />
            <Route path="station/:id" element={<StationPage />} />
            <Route path="checklist" element={<ChecklistPage />} />
            <Route path="sources" element={<SourcesPage />} />
            <Route path="*" element={<Navigate to="/" replace />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </ProgressProvider>
  );
}
