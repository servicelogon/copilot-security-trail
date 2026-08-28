import { NavLink, Outlet } from "react-router-dom";
import { Footer } from "./Footer";

export function Layout() {
  return (
    <div className="app-shell">
      <header className="site-header">
        <NavLink to="/" className="brand">
          <small>A LEARNING TRAIL</small>
          <strong>Copilot Security Trail</strong>
        </NavLink>
        <nav className="header-nav" aria-label="Primary">
          <NavLink to="/" end>
            Map
          </NavLink>
          <NavLink to="/station/1">Stations</NavLink>
          <NavLink to="/checklist">Checklist</NavLink>
          <NavLink to="/sources">Sources</NavLink>
        </nav>
      </header>
      <main>
        <Outlet />
      </main>
      <Footer />
    </div>
  );
}
