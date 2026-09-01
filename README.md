<h1>
  <img src="assets/header-mark-32.svg" width="32" height="32" alt="" />
  Copilot Security Trail
</h1>

Copilot Security Trail is a static web app for exploring Microsoft Copilot security, privacy, governance, and Zero Trust readiness concepts through a five-station interactive map.

The app is built with plain HTML, CSS, and vanilla JavaScript. It has no package manager, build process, backend service, or runtime dependency beyond a modern browser.

## Features

- Interactive route map with five security waypoints
- Toggleable map and terrain views
- Station detail sheets with guidance grouped by security topic
- Role-aware highlights for admins, security teams, and agent makers
- Completion tracking saved in browser `localStorage`
- Checklist view for implementation-oriented follow-through
- Source links back to Microsoft Learn documentation
- Responsive UI designed for desktop and mobile browsers

## Trail Stations

1. **How Copilot handles your data** - tenant boundaries, data access, and user permissions.
2. **How Microsoft secures Copilot** - contractual protections, labels, oversharing controls, and audit locations.
3. **Get your data ready** - Purview, SharePoint Advanced Management, oversharing remediation, and restricted content discovery.
4. **Secure Copilot Agents** - tenant controls, maker governance, data policies, audit, and environment routing.
5. **Adopt with Zero Trust** - layered controls and deployment checklist guidance.

## Project Structure

```text
.
|-- index.html              # Static app shell
|-- styles.css              # Layout, map, sheet, and component styling
|-- app.js                  # Client-side routing, rendering, and local state
|-- data.js                 # Trail stations, cards, sources, and route data
|-- assets/                 # Map artwork and Fluent-style icons
`-- output/pdf/             # Supporting generated PDF artifact
```

## Getting Started

Open `index.html` directly in a browser, or serve the folder locally:

```bash
python3 -m http.server 8080
```

Then visit:

```text
http://localhost:8080
```

## State And Persistence

Progress is stored locally in the browser under:

```text
copilot-security-trail.v1
```

Completion dates are generated in the `America/New_York` time zone. Clearing site data or browser local storage resets trail progress.

## Development Notes

- No install step is required.
- Keep Microsoft Learn source metadata in `data.js`.
- Keep UI behavior in `app.js` and presentation details in `styles.css`.
- Asset paths are relative so the app can run from a local static server or by opening `index.html`.

## Verification

For lightweight validation after changes:

1. Start a local static server with `python3 -m http.server 8080`.
2. Open `http://localhost:8080`.
3. Switch between Map and Terrain views.
4. Open each station from the route map.
5. Mark a station complete and confirm the route progress and checklist state update.
6. Refresh the browser and confirm completion state persists.

## License

No license file is currently included. Add one before distributing or reusing this project outside its current context.