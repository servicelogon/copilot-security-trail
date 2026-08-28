import type { Role, Station } from "../types";
import { cards } from "./cards";

export const stations: Station[] = [
  {
    id: 1,
    slug: "privacy-architecture",
    title: "How Copilot handles your data",
    promise: "How Microsoft Copilot uses data, stays inside the tenant boundary, and honors the signed-in user's permissions.",
    color: "#159B99",
    colorName: "teal",
    icon: "/assets/sliced/icon-1-teal.png",
    stamp: "/assets/sliced/stamp-1-teal.png",
    sourceIds: ["privacy", "architecture"],
  },
  {
    id: 2,
    slug: "data-protection",
    title: "How Microsoft secures Copilot",
    promise: "Contractual EDP, sensitivity labels, oversharing controls, and where Copilot interactions are audited.",
    color: "#1A61A6",
    colorName: "blue",
    icon: "/assets/sliced/icon-2-blue.png",
    stamp: "/assets/sliced/stamp-2-blue.png",
    sourceIds: ["edp", "dpa-audit"],
  },
  {
    id: 3,
    slug: "data-foundation",
    title: "Get your data ready",
    promise: "Remediate oversharing, set Purview and SharePoint Advanced Management guardrails, and prepare content for Copilot.",
    color: "#E8AA1C",
    colorName: "amber",
    icon: "/assets/sliced/icon-3-amber.png",
    stamp: "/assets/sliced/stamp-3-amber.png",
    sourceIds: ["foundation", "dspm", "sam", "rcd"],
  },
  {
    id: 4,
    slug: "studio-governance",
    title: "Secure Copilot Agents",
    promise: "Maker and tenant controls for agents: data policies, audit, environment routing, and a zoned governance strategy.",
    color: "#734F9B",
    colorName: "purple",
    icon: "/assets/sliced/icon-4-purple.png",
    stamp: "/assets/sliced/stamp-4-purple.png",
    sourceIds: ["studio-sec", "studio-gov"],
  },
  {
    id: 5,
    slug: "zero-trust-agents",
    title: "Adopt with Zero Trust",
    promise: "Seven protection layers for Copilot, plus Microsoft's own agents deployment checklist.",
    color: "#3E793C",
    colorName: "green",
    icon: "/assets/sliced/icon-5-green.png",
    stamp: "/assets/sliced/stamp-5-green.png",
    sourceIds: ["zero-trust", "agents-checklist"],
  },
];

export const roles: Role[] = [
  {
    id: "admin",
    label: "Admin",
    hint: "Highlights identity, dashboards, publishing, and environment routing. Facts stay the same.",
  },
  {
    id: "security",
    label: "Security",
    hint: "Highlights EDP, DLP, Purview, DSPM, oversharing, and Zero Trust. Facts stay the same.",
  },
  {
    id: "agent-maker",
    label: "Agent maker",
    hint: "Highlights Copilot Studio DLP, maker scan, publishing, and the agent checklist. Facts stay the same.",
  },
];

export const stationById = Object.fromEntries(
  stations.map((s) => [s.id, s]),
) as Record<Station["id"], Station>;

/**
 * Hotspot centers on the 960×640 display (source pixel × 0.625).
 * Source image is 1536×1024. Posts run left → right along the path.
 */
export const hotspots: Record<
  Station["id"],
  { sourceX: number; sourceY: number; displayX: number; displayY: number }
> = {
  1: { sourceX: 205, sourceY: 395, displayX: 128.125, displayY: 246.875 },
  2: { sourceX: 475, sourceY: 495, displayX: 296.875, displayY: 309.375 },
  3: { sourceX: 770, sourceY: 525, displayX: 481.25, displayY: 328.125 },
  4: { sourceX: 1055, sourceY: 435, displayX: 659.375, displayY: 271.875 },
  5: { sourceX: 1355, sourceY: 500, displayX: 846.875, displayY: 312.5 },
};


export const STATIONS = stations;
export const ROLES = roles;
export const CARDS = cards;

export const HOTSPOTS: { id: 1 | 2 | 3 | 4 | 5; left: string; top: string; label: string }[] = [
  { id: 1, left: "12.37%", top: "40.04%", label: "Station 1: How Copilot handles your data" },
  { id: 2, left: "30.60%", top: "49.80%", label: "Station 2: How Microsoft secures Copilot" },
  { id: 3, left: "50.13%", top: "51.76%", label: "Station 3: Get your data ready" },
  { id: 4, left: "68.36%", top: "44.92%", label: "Station 4: Secure Copilot Agents" },
  { id: 5, left: "88.54%", top: "50.78%", label: "Station 5: Adopt with Zero Trust" },
];
