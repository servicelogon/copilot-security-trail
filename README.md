# Copilot Security Trail

An interactive React learning trail for Microsoft Copilot security concepts. The app presents five guided stations as a park-trail experience, with role-based highlights, local progress tracking, station stamps, a practical checklist, and a Microsoft Learn source index.

## Overview

Copilot Security Trail is designed to help administrators, security teams, and Copilot agent makers walk through the major security and governance areas that matter when adopting Microsoft Copilot:

1. How Copilot handles your data
2. How Microsoft secures Copilot
3. How to get your data ready
4. How to secure Copilot agents
5. How to adopt Copilot with Zero Trust

The content is paraphrased from Microsoft Learn pages fetched for this build. Source links and article review dates are included in the app so users can verify the underlying guidance.

## Features

- Five-station interactive trail map
- Station pages with focused security and governance cards
- Role chips for Admin, Security, and Agent maker perspectives
- Browser-local progress tracking and passport stamps
- Trail checklist with source-linked action items
- Source index for every Microsoft Learn article used
- Bundled trail map, station icons, and stamp artwork
- Vite, React, TypeScript, and React Router

## Tech Stack

| Area | Technology |
| --- | --- |
| Frontend | React 19 |
| Build tool | Vite 8 |
| Language | TypeScript |
| Routing | React Router |
| Linting | oxlint |
| State persistence | Browser local storage |

## Getting Started

### Prerequisites

- Node.js
- npm

### Install

```bash
npm install
```

For a clean, lockfile-based install:

```bash
npm ci
```

### Run Locally

```bash
npm run dev
```

Vite starts the local development server, usually at:

```text
http://localhost:5173
```

### Build

```bash
npm run build
```

### Preview Production Build

```bash
npm run preview
```

### Lint

```bash
npm run lint
```

## App Routes

| Route | Description |
| --- | --- |
| `/` | Trail home, role selector, map, and passport strip |
| `/station/:id` | Station detail page for stations 1 through 5 |
| `/checklist` | Source-linked implementation checklist |
| `/sources` | Microsoft Learn source index |

Unknown routes redirect back to the home page.

## Project Structure

```text
.
├── public/
│   ├── assets/
│   │   ├── trail-map.png
│   │   └── sliced/
│   └── favicon.svg
├── src/
│   ├── components/
│   ├── data/
│   │   ├── cards.ts
│   │   ├── checklist.ts
│   │   ├── sources.ts
│   │   └── stations.ts
│   ├── lib/
│   ├── pages/
│   ├── App.tsx
│   ├── index.css
│   └── main.tsx
├── index.html
├── package.json
├── package-lock.json
└── vite.config.ts
```

## Content And Sources

The app keeps source records in `src/data/sources.ts`. Each source includes:

- Microsoft Learn title and URL
- Last-reviewed date from the article metadata
- Fetch status for this build
- Station usage

The station cards and checklist items reference those source records so users can move from the learning trail back to the authoritative Microsoft documentation.

## Progress Storage

Progress is stored in the browser using local storage. The app does not require a backend, database, or sign-in for local use. Clearing browser storage resets station stamps, viewed cards, checklist progress, and selected role.

## Available Scripts

| Script | Purpose |
| --- | --- |
| `npm run dev` | Start the Vite development server |
| `npm run build` | Type-check and create a production build |
| `npm run preview` | Preview the production build locally |
| `npm run lint` | Run oxlint |

## Notes

- Microsoft Copilot is the current name for what was Microsoft 365 Copilot.
- Some source articles may still use older product names. The trail keeps the article-specific wording where relevant.
- The learning content is informational and should be validated against current Microsoft Learn guidance before production policy changes.
