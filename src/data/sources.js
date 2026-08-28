
export const sources = [
  {
    id: "privacy",
    title: "Data, Privacy, and Security for Microsoft Copilot",
    url: "https://learn.microsoft.com/en-us/microsoft-365/copilot/microsoft-365-copilot-privacy",
    lastReviewed: "2026-07-09",
    fetched: true,
    stations: [1],
  },
  {
    id: "architecture",
    title: "How does Microsoft Copilot work?",
    url: "https://learn.microsoft.com/en-us/microsoft-365/copilot/microsoft-365-copilot-architecture",
    lastReviewed: "2026-03-24",
    fetched: true,
    stations: [1],
  },
  {
    id: "edp",
    title: "Enterprise data protection in Microsoft Copilot and Microsoft Copilot Chat",
    url: "https://learn.microsoft.com/en-us/microsoft-365/copilot/enterprise-data-protection",
    lastReviewed: "2026-05-29",
    fetched: true,
    stations: [2],
  },
  {
    id: "dpa-audit",
    title: "Microsoft Copilot data protection architecture",
    url: "https://learn.microsoft.com/en-us/microsoft-365/copilot/microsoft-365-copilot-architecture-data-protection-auditing",
    lastReviewed: "2026-04-07",
    fetched: true,
    stations: [2],
  },
  {
    id: "foundation",
    title: "Configure a secure and governed foundation for Microsoft Copilot",
    url: "https://learn.microsoft.com/en-us/microsoft-365/copilot/configure-secure-governed-data-foundation-microsoft-365-copilot",
    lastReviewed: "2026-04-17",
    fetched: true,
    stations: [3],
  },
  {
    id: "dspm",
    title: "Microsoft Purview Data Security Posture Management for AI (classic)",
    url: "https://learn.microsoft.com/en-us/purview/dspm-for-ai",
    lastReviewed: "2025-12-15",
    fetched: true,
    stations: [3],
  },
  {
    id: "sam",
    title: "SharePoint Advanced Management",
    url: "https://learn.microsoft.com/en-us/sharepoint/advanced-management",
    lastReviewed: "2026-06-29",
    fetched: true,
    fetchNote:
      "Canonical SAM overview (concept article), not the get-ready how-to.",
    stations: [3],
  },
  {
    id: "rcd",
    title: "Restrict discovery of SharePoint sites and content",
    url: "https://learn.microsoft.com/en-us/sharepoint/restricted-content-discovery",
    lastReviewed: "2026-07-27",
    fetched: true,
    stations: [3],
  },
  {
    id: "studio-sec",
    title: "Security and governance — Microsoft Copilot Studio",
    url: "https://learn.microsoft.com/en-us/microsoft-copilot-studio/security-and-governance",
    lastReviewed: "2026-08-04",
    fetched: true,
    stations: [4],
  },
  {
    id: "studio-gov",
    title: "Manage your Copilot Studio projects, an overview",
    url: "https://learn.microsoft.com/en-us/microsoft-copilot-studio/guidance/sec-gov-intro",
    lastReviewed: "2026-01-16",
    fetched: true,
    stations: [4],
  },
  {
    id: "zero-trust",
    title: "How do I apply Zero Trust principles to Microsoft 365 Copilot?",
    url: "https://learn.microsoft.com/en-us/security/zero-trust/copilots/zero-trust-microsoft-365-copilot",
    lastReviewed: "2026-05-21",
    fetched: true,
    stations: [5],
  },
  {
    id: "agents-checklist",
    title: "Microsoft 365 Agents Checklist",
    url: "https://learn.microsoft.com/en-us/microsoft-365/copilot/agent-essentials/m365-agents-checklist",
    lastReviewed: "2026-03-16",
    fetched: true,
    fetchNote:
      "Requested /copilot/microsoft-365/agent-essentials/m365-agents-checklist; Learn redirected to this canonical URL.",
    stations: [5],
  },
];

export function sourceById(id) {
  return sources.find((s) => s.id === id);
}
