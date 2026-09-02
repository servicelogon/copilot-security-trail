// Static content for the trail UI. The app renders directly from these arrays,
// so ids and station numbers are the contracts between content, pins, and cards.
window.TRAIL = {
  // High-level stops shown on the map and in the station index.
  "stations": [
    {
      "id": 1,
      "title": "How Copilot handles your data",
      "promise": "How Microsoft Copilot uses data, stays inside the tenant boundary, and honors the signed-in user's permissions.",
      "color": "#2A9D8F",
      "colorName": "teal",
      "sourceIds": [
        "privacy",
        "architecture"
      ],
      "icon": "sparkle"
    },
    {
      "id": 2,
      "title": "How Microsoft secures Copilot",
      "promise": "Contractual EDP, sensitivity labels, oversharing controls, and where Copilot interactions are audited.",
      "color": "#479EF5",
      "colorName": "blue",
      "sourceIds": [
        "edp",
        "dpa-audit"
      ],
      "icon": "shield"
    },
    {
      "id": 3,
      "title": "Get your data ready",
      "promise": "Remediate oversharing, set Purview and SharePoint Advanced Management guardrails, and prepare content for Copilot.",
      "color": "#E9A825",
      "colorName": "amber",
      "sourceIds": [
        "foundation",
        "dspm",
        "sam",
        "rcd"
      ],
      "icon": "folder"
    },
    {
      "id": 4,
      "title": "Secure Copilot Agents",
      "promise": "Maker and tenant controls for agents: data policies, audit, environment routing, and a zoned governance strategy.",
      "color": "#7C5CFC",
      "colorName": "purple",
      "sourceIds": [
        "studio-sec",
        "studio-gov"
      ],
      "icon": "bot"
    },
    {
      "id": 5,
      "title": "Adopt with Zero Trust",
      "promise": "Seven protection layers for Copilot, plus Microsoft's own agents deployment checklist.",
      "color": "#2F9E44",
      "colorName": "green",
      "sourceIds": [
        "zero-trust",
        "agents-checklist"
      ],
      "icon": "checkmark_circle"
    }
  ],
  // Used by cards and checklist items to call out audience-specific guidance.
  "roles": [
    {
      "id": "admin",
      "label": "Admin"
    },
    {
      "id": "security",
      "label": "Security"
    },
    {
      "id": "agent-maker",
      "label": "Agent maker"
    }
  ],
  // Pin positions in the 960x640 source artwork coordinate space.
  "hotspots": [
    {
      "id": 1,
      "x": 194.1,
      "y": 165.6
    },
    {
      "id": 2,
      "x": 328.9,
      "y": 270.6
    },
    {
      "id": 3,
      "x": 496.5,
      "y": 330.3
    },
    {
      "id": 4,
      "x": 672.5,
      "y": 363.4
    },
    {
      "id": 5,
      "x": 838.4,
      "y": 434.2
    }
  ],
  // Sampled route geometry used to draw the completed trail overlay.
  "routePoints": [
    [
      95.0,
      143.8
    ],
    [
      99.8,
      145.0
    ],
    [
      105.2,
      145.6
    ],
    [
      110.6,
      146.2
    ],
    [
      116.2,
      146.2
    ],
    [
      121.6,
      146.9
    ],
    [
      127.1,
      146.9
    ],
    [
      132.7,
      146.9
    ],
    [
      138.3,
      146.9
    ],
    [
      143.5,
      146.9
    ],
    [
      149.0,
      147.5
    ],
    [
      154.1,
      149.2
    ],
    [
      158.1,
      153.1
    ],
    [
      161.7,
      157.3
    ],
    [
      164.9,
      161.7
    ],
    [
      169.6,
      164.2
    ],
    [
      174.8,
      166.1
    ],
    [
      180.1,
      165.6
    ],
    [
      185.5,
      165.3
    ],
    [
      191.0,
      165.6
    ],
    [
      194.1,
      165.6
    ],
    [
      200.2,
      168.2
    ],
    [
      203.8,
      171.3
    ],
    [
      207.2,
      174.7
    ],
    [
      208.9,
      179.0
    ],
    [
      209.4,
      183.7
    ],
    [
      209.8,
      188.4
    ],
    [
      211.4,
      192.8
    ],
    [
      213.8,
      196.9
    ],
    [
      217.2,
      200.3
    ],
    [
      220.9,
      203.3
    ],
    [
      225.3,
      204.9
    ],
    [
      229.8,
      206.4
    ],
    [
      234.0,
      208.6
    ],
    [
      238.0,
      211.2
    ],
    [
      241.4,
      214.5
    ],
    [
      244.2,
      218.4
    ],
    [
      245.6,
      222.8
    ],
    [
      245.6,
      227.6
    ],
    [
      245.6,
      232.4
    ],
    [
      247.2,
      236.8
    ],
    [
      250.0,
      240.6
    ],
    [
      253.5,
      243.9
    ],
    [
      257.9,
      245.6
    ],
    [
      262.3,
      247.1
    ],
    [
      266.7,
      248.7
    ],
    [
      270.4,
      251.7
    ],
    [
      273.8,
      255.1
    ],
    [
      277.1,
      258.5
    ],
    [
      279.7,
      262.5
    ],
    [
      282.5,
      266.3
    ],
    [
      285.5,
      269.9
    ],
    [
      289.5,
      272.6
    ],
    [
      293.3,
      275.4
    ],
    [
      297.9,
      276.2
    ],
    [
      302.4,
      277.4
    ],
    [
      306.9,
      277.2
    ],
    [
      311.5,
      276.9
    ],
    [
      316.0,
      275.7
    ],
    [
      320.4,
      274.2
    ],
    [
      328.9,
      270.6
    ],
    [
      329.5,
      270.9
    ],
    [
      333.9,
      268.6
    ],
    [
      338.1,
      265.9
    ],
    [
      342.6,
      263.7
    ],
    [
      347.4,
      262.5
    ],
    [
      352.1,
      261.2
    ],
    [
      356.8,
      260.0
    ],
    [
      361.6,
      259.2
    ],
    [
      366.4,
      258.1
    ],
    [
      371.3,
      257.5
    ],
    [
      376.3,
      257.5
    ],
    [
      381.0,
      258.8
    ],
    [
      385.7,
      260.3
    ],
    [
      389.8,
      263.0
    ],
    [
      393.7,
      266.2
    ],
    [
      397.2,
      269.7
    ],
    [
      400.5,
      273.5
    ],
    [
      404.0,
      277.1
    ],
    [
      406.8,
      281.1
    ],
    [
      410.3,
      284.7
    ],
    [
      413.9,
      288.3
    ],
    [
      417.6,
      291.6
    ],
    [
      422.2,
      293.3
    ],
    [
      426.8,
      295.0
    ],
    [
      431.7,
      295.5
    ],
    [
      436.5,
      295.4
    ],
    [
      441.3,
      295.0
    ],
    [
      446.1,
      294.4
    ],
    [
      451.2,
      294.4
    ],
    [
      455.9,
      295.6
    ],
    [
      460.5,
      297.4
    ],
    [
      465.0,
      299.3
    ],
    [
      469.3,
      301.8
    ],
    [
      473.4,
      304.6
    ],
    [
      477.2,
      307.7
    ],
    [
      481.0,
      311.0
    ],
    [
      484.5,
      314.5
    ],
    [
      487.7,
      318.3
    ],
    [
      490.9,
      322.2
    ],
    [
      496.5,
      330.3
    ],
    [
      496.9,
      330.0
    ],
    [
      500.3,
      334.1
    ],
    [
      504.2,
      337.9
    ],
    [
      508.6,
      340.9
    ],
    [
      513.1,
      343.7
    ],
    [
      517.7,
      344.1
    ],
    [
      522.9,
      345.0
    ],
    [
      528.0,
      343.8
    ],
    [
      533.1,
      342.5
    ],
    [
      537.9,
      340.6
    ],
    [
      543.0,
      339.4
    ],
    [
      548.1,
      338.1
    ],
    [
      552.6,
      336.8
    ],
    [
      557.1,
      335.5
    ],
    [
      562.3,
      334.4
    ],
    [
      567.3,
      332.9
    ],
    [
      572.2,
      330.9
    ],
    [
      576.6,
      329.0
    ],
    [
      581.0,
      327.7
    ],
    [
      586.1,
      326.9
    ],
    [
      591.3,
      325.9
    ],
    [
      596.6,
      325.6
    ],
    [
      601.9,
      325.0
    ],
    [
      607.3,
      325.0
    ],
    [
      612.6,
      325.6
    ],
    [
      617.7,
      326.7
    ],
    [
      622.9,
      328.0
    ],
    [
      627.8,
      329.9
    ],
    [
      632.8,
      331.7
    ],
    [
      637.8,
      333.6
    ],
    [
      642.3,
      336.5
    ],
    [
      646.8,
      339.4
    ],
    [
      651.2,
      342.5
    ],
    [
      655.5,
      345.6
    ],
    [
      659.4,
      349.4
    ],
    [
      663.2,
      353.2
    ],
    [
      667.0,
      357.1
    ],
    [
      670.5,
      361.2
    ],
    [
      672.5,
      363.4
    ],
    [
      676.5,
      369.0
    ],
    [
      679.8,
      372.3
    ],
    [
      683.1,
      375.6
    ],
    [
      687.0,
      378.3
    ],
    [
      690.6,
      381.2
    ],
    [
      694.5,
      383.8
    ],
    [
      698.4,
      386.4
    ],
    [
      702.3,
      389.0
    ],
    [
      706.1,
      391.7
    ],
    [
      709.7,
      394.6
    ],
    [
      714.0,
      396.7
    ],
    [
      718.3,
      398.2
    ],
    [
      722.8,
      399.2
    ],
    [
      727.5,
      399.4
    ],
    [
      732.0,
      399.9
    ],
    [
      736.5,
      399.8
    ],
    [
      741.1,
      399.4
    ],
    [
      745.5,
      398.2
    ],
    [
      749.9,
      397.1
    ],
    [
      754.3,
      396.9
    ],
    [
      758.8,
      395.6
    ],
    [
      763.3,
      395.0
    ],
    [
      767.9,
      394.4
    ],
    [
      772.6,
      394.4
    ],
    [
      777.3,
      394.6
    ],
    [
      781.5,
      395.5
    ],
    [
      786.0,
      396.4
    ],
    [
      790.4,
      398.0
    ],
    [
      794.7,
      399.5
    ],
    [
      798.9,
      401.7
    ],
    [
      803.2,
      403.8
    ],
    [
      807.4,
      405.9
    ],
    [
      811.3,
      408.5
    ],
    [
      815.2,
      411.0
    ],
    [
      819.1,
      413.6
    ],
    [
      822.5,
      416.8
    ],
    [
      826.1,
      419.8
    ],
    [
      829.4,
      423.2
    ],
    [
      832.0,
      427.0
    ],
    [
      838.4,
      434.2
    ],
    [
      839.1,
      434.4
    ],
    [
      842.6,
      438.8
    ],
    [
      846.6,
      442.8
    ],
    [
      850.6,
      446.9
    ],
    [
      854.6,
      450.7
    ],
    [
      859.7,
      453.3
    ],
    [
      864.8,
      455.6
    ],
    [
      870.1,
      457.2
    ],
    [
      875.4,
      458.8
    ],
    [
      880.7,
      460.6
    ],
    [
      885.8,
      463.2
    ],
    [
      890.5,
      466.2
    ],
    [
      895.4,
      468.6
    ],
    [
      899.5,
      472.6
    ],
    [
      903.5,
      476.6
    ],
    [
      907.8,
      480.3
    ],
    [
      912.8,
      482.9
    ],
    [
      918.0,
      484.9
    ],
    [
      923.4,
      486.2
    ],
    [
      928.8,
      487.5
    ]
  ],
  // Indexes into routePoints where each station sits along the route.
  "routePinIndex": [
    20,
    60,
    100,
    139,
    179
  ],
  // Station cards summarize what to know, why it matters, and what to configure.
  "cards": [
    {
      "id": "s1-org-graph",
      "stationId": 1,
      "title": "Org data through Graph",
      "what": "Copilot grounds answers in Microsoft Graph content the signed-in user can already view.",
      "why": "Overshared files become overshared answers.",
      "putInPlace": "Use SharePoint (and similar) permission models, including guests via Teams shared channels.",
      "sourceIds": [
        "privacy"
      ],
      "learnUrl": "https://learn.microsoft.com/en-us/microsoft-365/copilot/microsoft-365-copilot-privacy#how-does-microsoft-copilot-use-your-proprietary-organizational-data",
      "highlightFor": [
        "admin",
        "security"
      ]
    },
    {
      "id": "s1-boundary",
      "stationId": 1,
      "title": "Service boundary, not tenant-wide",
      "what": "Copilot is a shared Microsoft 365 service inside the tenant boundary. Data stays there, but Copilot does not get tenant-wide visibility; access is always the signed-in user's permissions.",
      "why": "Existing security, compliance, and privacy policies still apply.",
      "putInPlace": "Keep Restricted SharePoint Search (RSS), SharePoint Advanced Management (SAM), and Microsoft Purview current.",
      "sourceIds": [
        "architecture"
      ],
      "highlightFor": [
        "security",
        "admin"
      ]
    },
    {
      "id": "s1-prompt-flow",
      "stationId": 1,
      "title": "Prompt flow",
      "what": "Prompt, then grounding against Graph in the user's tenant, then the LLM, then a response. Data used to generate responses is encrypted in transit.",
      "why": "Content a user can open can be grounded.",
      "putInPlace": "Oversharing fixes land in later stations.",
      "sourceIds": [
        "architecture"
      ],
      "highlightFor": [
        "admin",
        "agent-maker"
      ]
    },
    {
      "id": "s1-no-train",
      "stationId": 1,
      "title": "Not used to train foundation LLMs",
      "what": "Prompts, responses, and Graph data are not used to train foundation LLMs. Optional customer feedback is not used to train them either. Copilot opted out of Azure OpenAI abuse monitoring that includes human review of content.",
      "why": "Third-party models (Anthropic, OpenAI) can have extra terms. Anthropic is currently excluded from the EU Data Boundary.",
      "putInPlace": "Confirm with legal. Manage feedback via admin controls.",
      "sourceIds": [
        "privacy"
      ],
      "highlightFor": [
        "security",
        "admin"
      ]
    },
    {
      "id": "s1-history",
      "stationId": 1,
      "title": "Interaction history",
      "what": "The prompt, response, and citations are stored  activity history, encrypted, under the same Microsoft 365 commitments. Users can delete that history from My Account.",
      "why": "Activity history is what users see and what compliance tools can search.",
      "putInPlace": "Admins use Content search, Microsoft Purview, and retention. Use Teams Export APIs for Teams Copilot chats. Set retention now.",
      "sourceIds": [
        "privacy"
      ],
      "learnUrl": "https://learn.microsoft.com/en-us/microsoft-365/copilot/microsoft-365-copilot-privacy#data-stored-about-user-interactions-with-microsoft-copilot",
      "highlightFor": [
        "admin",
        "security"
      ]
    },
    {
      "id": "s1-ca-mfa",
      "stationId": 1,
      "title": "Conditional Access and MFA",
      "what": "Copilot honors Conditional Access and the same multifactor authentication  rest of Microsoft 365, including device compliance if you set it.",
      "why": "Copilot honors the same access stack  365. Conditional Access is not what lets users in.",
      "putInPlace": "If you turn Conditional Access on, make sure users can still reach Microsoft 365. If MFA is not on, Microsoft recommends enabling it (security defaults already do).",
      "sourceIds": [
        "architecture"
      ],
      "highlightFor": [
        "admin",
        "security"
      ]
    },
    {
      "id": "s1-agents-connectors",
      "stationId": 1,
      "title": "Agents and connectors",
      "what": "Graph connectors honor the signed-in user's access. Admins allow agents in Integrated apps after reviewing permissions, terms, and the agent's privacy statement. Copilot only uses agents the user h on.",
      "why": "Connectors and agents extend Copilot beyond Microsoft 365; they also extend the privacy review.",
      "putInPlace": "In Integrated apps, review each agent's privacy statement, permissions, and terms before allowing it.",
      "sourceIds": [
        "privacy"
      ],
      "learnUrl": "https://learn.microsoft.com/en-us/microsoft-365/copilot/microsoft-365-copilot-privacy#extensibility-of-microsoft-copilot",
      "highlightFor": [
        "agent-maker",
        "admin"
      ]
    },
    {
      "id": "s2-what-edp",
      "stationId": 2,
      "title": "What EDP is",
      "what": "For organizations, Microsoft Copilot and Microsoft Copilot Chat sit under the Microsoft Products and Services Data Protection Addendum (DPA) and Microsoft Product Terms, with Microsoft  processor. Enterprise data protection (EDP) is those controls and commitments; the name does not shrink them. Prompts and responses get the same contractual terms  mail and SharePoint files: encryption at rest and in transit, tenant isolation, GDPR, EU Data Boundary, and ISO/IEC 27018. Prompts, responses, and Graph data are not used to train foundation models. Controls vary by plan.",
      "why": "HIPAA can apply to properly configured implementations, not to web search queries (those are not on the DPA or BAA). The EU Data Boundary does not cover web queries. Anthropic models are currently excluded from it.",
      "putInPlace": "Read Copilot against the DPA and Product Terms for your subscription plan. Do not treat \u201cEDP\u201d  separate product you turn on, and do not quote EU Data Boundary or HIPAA language for web search.",
      "sourceIds": [
        "edp"
      ],
      "highlightFor": [
        "security",
        "admin"
      ]
    },
    {
      "id": "s2-policies",
      "stationId": 2,
      "title": "Your policies still apply",
      "what": "Copilot respects your identity model and permissions, inherits sensitivity labels, applies retention, supports audit of interactions, and follows admin settings.",
      "why": "You do not stand up a parallel stack for Copilot.",
      "putInPlace": "Confirm those controls are actually on for your SKU.",
      "sourceIds": [
        "edp"
      ],
      "highlightFor": [
        "admin",
        "security"
      ]
    },
    {
      "id": "s2-ai-copyright",
      "stationId": 2,
      "title": "AI security and copyright",
      "what": "EDP includes help against harmful content and prompt injections, plus protected material detection and the Customer Copyright Commitment.",
      "why": "These are the AI-focused protections named on the EDP page, not a separate Copilot security product.",
      "putInPlace": "Keep product guardrails available. Details for harms and jailbreaks are on the privacy article.",
      "sourceIds": [
        "edp"
      ],
      "highlightFor": [
        "security",
        "admin"
      ]
    },
    {
      "id": "s2-web-queries",
      "stationId": 2,
      "title": "Web queries are a different path",
      "what": "Copilot sends a short Bing query over a secure connection with user and tenant IDs removed. Queries are not shared with advertisers and are not used to train foundation LLMs. Bing is separate from Microsoft 365 (Microsoft Services Agreement and Privacy Statement, with Microsoft  independent controller). Product Terms add commitments.",
      "why": "Web search is not Graph. EU Data Boundary and HIPAA do not apply to it.",
      "putInPlace": "Treat web search  own privacy review.",
      "sourceIds": [
        "edp"
      ],
      "learnUrl": "https://learn.microsoft.com/en-us/microsoft-365/copilot/enterprise-data-protection#privacy-and-security-of-web-queries",
      "highlightFor": [
        "security",
        "admin"
      ]
    },
    {
      "id": "s2-labels-encryption",
      "stationId": 2,
      "title": "Sensitivity labels and encryption",
      "what": "Copilot only summarizes or references content the user is authorized to access. When a sensitivity label applies encryption, the user needs EXTRACT and VIEW usage rights. Items encrypted by Azure RMS without a sensitivity label need EXTRACT or VIEW. Copilot Chat can show labels and uses the highest-priority one; generated content inherits that label when supported. Protection still applies if labeled files sit outside the tenant.",
      "why": "Labeled encryption and unlabeled Azure RMS are different usage-right tests. Do not collapse AND with OR.",
      "putInPlace": "User-defined label permissions can block Copilot. Agents cannot read those files. Review labeling so EXTRACT and VIEW (labeled) versus EXTRACT or VIEW (Azure RMS without a label) match how you expect Copilot and agents to use files.",
      "sourceIds": [
        "dpa-audit"
      ],
      "learnUrl": "https://learn.microsoft.com/en-us/microsoft-365/copilot/microsoft-365-copilot-architecture-data-protection-auditing#how-microsoft-copilot-works-with-sensitivity-labels-and-encryption",
      "highlightFor": [
        "security",
        "admin",
        "agent-maker"
      ]
    },
    {
      "id": "s2-spo-discovery",
      "stationId": 2,
      "title": "SharePoint and OneDrive shape discovery",
      "what": "Search and discovery, sharing and membership, lifecycle, and information protection (labels and DLP) change what Copilot can find, without changing user permissions.",
      "why": "Tightening discovery can limit Copilot without rewriting every ACL.",
      "putInPlace": "Remediation detail is station 3.",
      "sourceIds": [
        "dpa-audit"
      ],
      "learnUrl": "https://learn.microsoft.com/en-us/microsoft-365/copilot/microsoft-365-copilot-architecture-data-protection-auditing#how-sharepoint-and-onedrive-access-controls-affect-copilot",
      "highlightFor": [
        "admin",
        "security"
      ]
    },
    {
      "id": "s2-audit-store",
      "stationId": 2,
      "title": "Where interactions are stored and audited",
      "what": "Interactions are stored in Microsoft 365. Purview can audit, eDiscover, and retain them. Captures include prompts, responses, and references; eDiscovery of interactions; retained referenced files (cloud attachments and Preservation Hold Libraries); uploads in OneDrive Copilot Chat folders; and Copilot Pages in user-owned SharePoint Embedded containers.",
      "why": "Retention follows your Purview policies, not a Copilot-only store.",
      "putInPlace": "Configure Purview audit, eDiscovery, and retention for Copilot interactions.",
      "sourceIds": [
        "dpa-audit"
      ],
      "learnUrl": "https://learn.microsoft.com/en-us/microsoft-365/copilot/microsoft-365-copilot-architecture-data-protection-auditing#where-copilot-usage-data-is-stored-and-how-it-is-audited",
      "highlightFor": [
        "admin",
        "security"
      ]
    },
    {
      "id": "s3-three-steps",
      "stationId": 3,
      "title": "Three steps, in order",
      "what": "Microsoft\u2019s foundation is remediate oversharing, set up guardrails, then meet regulations. Copilot uses Work IQ on data the user already h to access. Well-governed, current, appropriately shared data is what makes answers accurate and safe.",
      "why": "Copilot quality and Copilot risk are the same content estate.",
      "putInPlace": "Needs Microsoft 365 E3 or E5 (or Office 365 E3 or E5), Microsoft Copilot, and SharePoint Advanced Management (included with Copilot licenses).",
      "sourceIds": [
        "foundation"
      ],
      "highlightFor": [
        "admin",
        "security"
      ]
    },
    {
      "id": "s3-what-sam",
      "stationId": 3,
      "title": "What SAM is",
      "what": "SharePoint Advanced Management is admin governance for SharePoint and OneDrive: manage content sprawl, manage the content lifecycle, and prevent oversharing. Run it from the SharePoint admin center (SharePoint Admin Agent is also available). It is built for SharePoint and Microsoft 365 admins on governance, risk, and audit readiness.",
      "why": "SAM is helpful  prepare for Copilot and agents.",
      "putInPlace": "See SAM prerequisites for licenses, roles, and PowerShell.",
      "sourceIds": [
        "sam"
      ],
      "highlightFor": [
        "admin",
        "security"
      ]
    },
    {
      "id": "s3-find-risk",
      "stationId": 3,
      "title": "Find high-risk sites first",
      "what": "Use Purview DSPM data risk assessments (overshared sensitive sites, risky links, frequently accessed content) and the SAM Content Management Assessment (oversized audiences, EEEU, broken inheritance, inappropriate sharing, inactive or ownerless sites). DSPM for AI (classic) also runs a weekly assessment of the top 100 SharePoint sites by usage, plus custom assessments.",
      "why": "That Learn page says classic is replaced by a newer Data Security Posture Management. Do not treat classic-only steps  whole product.",
      "putInPlace": "Start with DSPM data risk assessments and the SAM Content Management Assessment before you change access.",
      "sourceIds": [
        "foundation",
        "dspm"
      ],
      "highlightFor": [
        "security",
        "admin"
      ],
      "preview": true,
      "previewNote": "Learn labels this DSPM for AI article  and says it is replaced by a newer Data Security Posture Management."
    },
    {
      "id": "s3-interim",
      "stationId": 3,
      "title": "Interim Copilot protections",
      "what": "Before you finish remediating, turn on Restricted Content Discovery to keep sensitive SharePoint sites out of Copilot discovery, and Purview DLP for Copilot to keep sensitive content out of grounding. RCD is a site-level SharePoint setting. It is not supported for OneDrive, and it does not change existing permissions.",
      "why": "These are interim controls while access is still wrong, not the permanent fix. SAM overview language about sites and files is not file-level RCD.",
      "putInPlace": "Validate in Purview that Copilot no longer surfaces the content. Take the interim controls off once access is fixed.",
      "sourceIds": [
        "foundation",
        "rcd"
      ],
      "highlightFor": [
        "admin",
        "security"
      ]
    },
    {
      "id": "s3-fix-access",
      "stationId": 3,
      "title": "Fix access, then drop the interim",
      "what": "Apply site sensitivity labels, remove excessive or anonymous access, rescope sharing links, run SAM site access reviews so owners can strip excess users, groups, and EEEU down to file level, fix broken inheritance, and confirm ownership with SAM site lifecycle management.",
      "why": "Interim RCD and DLP buy time. Permission repair is the actual fix.",
      "putInPlace": "Then remove RCD and DLP interim.",
      "sourceIds": [
        "foundation"
      ],
      "highlightFor": [
        "admin",
        "security"
      ]
    },
    {
      "id": "s3-guardrails",
      "stationId": 3,
      "title": "Durable guardrails",
      "what": "Restricted Access Control (RAC) by default on business-critical sites at provisioning; restrict company-wide sharing and Anyone links; require site sensitivity labels at provisioning; auto-label files and emails. DLP for Copilot on labeled files and emails that should not be grounded; DLP for Copilot prompts for specified sensitive info (optionally allow Work IQ grounding but block web grounding). Insider Risk Management for inappropriate Copilot use. Classic DSPM for AI also h-click policies and a recommendation to pick labels that Copilot and agents must not summarize.",
      "why": "One-time cleanup fails if new sites provision wide-open.",
      "putInPlace": "Keep using DSPM Activity Explorer, risk assessments, and DLP and Insider Risk Management alerts.",
      "sourceIds": [
        "foundation",
        "dspm"
      ],
      "highlightFor": [
        "admin",
        "security"
      ],
      "preview": true,
      "previewNote": "The one-click policies and label-summarization recommendation are from the DSPM for AI (classic) Learn page."
    },
    {
      "id": "s3-regulations",
      "stationId": 3,
      "title": "Meet regulations and clean the estate",
      "what": "Use Compliance Manager for AI-related gaps. Set audit log and Copilot interaction retention with Purview Data Lifecycle Management. Use eDiscovery for Copilot content. Hygiene: SAM inactive site policies; Microsoft 365 Archive so Copilot does not process or reason over archived sites; Purview retention and deletion for obsolete files.",
      "why": "Copilot inherits the retention, eDiscovery, and archive behavior you configure.",
      "putInPlace": "SAM also gives ownership policies, attestations, 180-day change history, DAG reports (sharing links, EEEU, permission snapshots), and site access reviews.",
      "sourceIds": [
        "foundation",
        "sam"
      ],
      "highlightFor": [
        "admin",
        "security"
      ]
    },
    {
      "id": "s4-governance-stack",
      "stationId": 4,
      "title": "Governance stack",
      "what": "Copilot Studio provides maker- and tenant-level access controls, data policies that restrict endpoints, sharing rules, and data residency and GDPR support. The security page also names geographic residency, DLP, environment routing, regional customization, certifications, and the Security Development Lifecycle (SDL). Product Terms and the Data Protection Addendum govern the service. The Microsoft Trust Center is the primary resource for Power Platform compliance.",
      "why": "Studio agents are a different control plane from Microsoft Copilot in Microsoft 365 apps.",
      "putInPlace": "Assign agent admins and Center of Excellence leads, then follow the intro sequence: requirements, zoned governance, secure, test, ALM, monitor, checklist.",
      "sourceIds": [
        "studio-gov",
        "studio-sec"
      ],
      "highlightFor": [
        "admin",
        "security",
        "agent-maker"
      ]
    },
    {
      "id": "s4-agent365",
      "stationId": 4,
      "title": "Agent 365  control plane",
      "what": "Microsoft Agent 365 is how you observe, govern, and secure Copilot Studio agents. If you onboard it, agents can be Microsoft Entra identities with Conditional Access, RBAC/ABAC, and access governance, plus centralized observability, on top of Power Platform and Microsoft 365. Entra network egress and ingress for these agents through Agent 365 is generally available.",
      "why": "Agent identity in Entra is how Conditional Access and access reviews attach to Studio agents. This sits on top of, not instead of, Power Platform data policies.",
      "putInPlace": "Onboard Agent 365 if you want agents  identities with Conditional Access, RBAC/ABAC, and centralized inventory.",
      "sourceIds": [
        "studio-sec"
      ],
      "highlightFor": [
        "admin",
        "security"
      ]
    },
    {
      "id": "s4-data-policies",
      "stationId": 4,
      "title": "Data policies for agents",
      "what": "Power Platform data policies cover maker and user authentication, knowledge sources, actions, connectors, skills, HTTP, channel publishing, Application Insights, and triggers (including autonomous agents).",
      "why": "Data policies are the tenant control that restricts what an agent can reach.",
      "putInPlace": "Review connector dependencies before deploy. Pair Copilot Studio DLP with Power Platform data policies.",
      "sourceIds": [
        "studio-sec"
      ],
      "highlightFor": [
        "admin",
        "security",
        "agent-maker"
      ]
    },
    {
      "id": "s4-environments",
      "stationId": 4,
      "title": "Environments, routing, zoned strategy",
      "what": "The intro describes layered environments, guardrails, and approval workflows that separate experimentation from production. The security page adds environment routing for a safe maker space, a maker welcome message for privacy and compliance, and customer-managed keys (CMK) for Copilot Studio environments.",
      "why": "Makers need a safe space to build without landing in production.",
      "putInPlace": "Use environment routing so makers have a safe space. Enable CMK if your environment requires customer-managed keys. Put a maker welcome message in place for privacy and compliance.",
      "sourceIds": [
        "studio-gov",
        "studio-sec"
      ],
      "highlightFor": [
        "admin",
        "agent-maker"
      ]
    },
    {
      "id": "s4-maker-time",
      "stationId": 4,
      "title": "Maker-time protections",
      "what": "Runtime protection status is on the Agents page (Agent 365 can add inventory and ownership). An automatic security scan warns before publish if defaults were changed. Real-time risk assessment runs while configuring knowledge, tools, and actions, so makers can fix exfiltration and security issues before publish.",
      "why": "The documented maker-time controls catch issues before an agent is published, not after.",
      "putInPlace": "Review runtime protection status before publish. Do not skip the security scan warnings.",
      "sourceIds": [
        "studio-sec"
      ],
      "highlightFor": [
        "agent-maker",
        "admin"
      ]
    },
    {
      "id": "s4-identity-labels",
      "stationId": 4,
      "title": "Identity, credentials, labels",
      "what": "Tools can run with the user\u2019s credentials by default. Entra ID manual authentication with a certificate provider is supported. SharePoint knowledge shows the highest sensitivity label on sources used in a response, plus individual reference labels in chat.",
      "why": "User credentials and inherited labels are how Studio agents honor existing identity and information protection.",
      "putInPlace": "Keep the default of running tools with the user\u2019s credentials unless you have a documented reason not to. Review SharePoint knowledge labels on responses.",
      "sourceIds": [
        "studio-sec"
      ],
      "highlightFor": [
        "agent-maker",
        "admin",
        "security"
      ]
    },
    {
      "id": "s4-publish-audit",
      "stationId": 4,
      "title": "Publish, geo, audit, Lockbox",
      "what": "Admins can disable publishing of generative-AI agents, disable generative-AI data movement across geos outside the US, and govern agents that show in Microsoft 365 Copilot from the Microsoft 365 admin center. Maker audit logs go to Microsoft Purview; agent activity can go to Microsoft Sentinel. Customer Lockbox is supported but does not cover Copilot Studio security audit logging (Purview pipeline) or Agent 365 governance and audit events.",
      "why": "Lockbox coverage is easy to over-claim. Those two streams are named exclusions.",
      "putInPlace": "Decide publish and geo settings in admin centers. Do not state that Lockbox covers Purview audit telemetry or Agent 365 events.",
      "sourceIds": [
        "studio-sec"
      ],
      "highlightFor": [
        "admin",
        "security"
      ]
    },
    {
      "id": "s5-data-protection",
      "stationId": 5,
      "title": "Data protection",
      "what": "Immediate oversharing controls: Restricted SharePoint Search, data access governance reports, and Restricted Content Discovery. Then Microsoft Purview, starting with DSPM for AI (insights, one-click policies, labels, DLP, risky interactions, Compliance Manager for AI regulations). Sensitivity labels are the cornerstone; publish them and guide users in Word, Excel, PowerPoint, and Outlook. Add DLP and retention. Revisit temporary oversharing controls after labeling. Also Compliance Manager, Communication Compliance, Data Lifecycle Management, and eDiscovery with Copilot audit logs.",
      "why": "Copilot surfaces whatever users can already access. Labels, DLP, and oversharing controls are the first Zero Trust layer.",
      "putInPlace": "If this layer is not in place, the article says to pilot it before assigning Copilot licenses.",
      "sourceIds": [
        "zero-trust"
      ],
      "highlightFor": [
        "security",
        "admin"
      ]
    },
    {
      "id": "s5-identity",
      "stationId": 5,
      "title": "Identity and access",
      "what": "Use strong authentication, risk-evaluated sign-ins, and access reviews so Copilot is not a shortcut for attackers. E3 / Entra ID P1: Conditional Access requiring MFA for admins, MFA for all users, and block legacy auth; scope Microsoft 365 and other SaaS. Hybrid: Entra Password Protection. E5 / Entra ID P2: MFA at medium or high sign-in risk, password change for high-risk users if not passwordless, PIM, Purview Privileged Access Management, and access reviews for just-enough access.",
      "why": "Identity is how Copilot decides who is signed in. Weak auth becomes Copilot access.",
      "putInPlace": "If this layer is not in place, the article says to pilot it before assigning Copilot licenses.",
      "sourceIds": [
        "zero-trust"
      ],
      "highlightFor": [
        "admin",
        "security"
      ]
    },
    {
      "id": "s5-app-protection",
      "stationId": 5,
      "title": "App Protection policies",
      "what": "Intune App Protection policies wall organization data from personal data so it cannot be pasted into unmanaged apps, even on an unmanaged device. That stops Copilot-generated content leaking to unpermitted apps and limits blast radius on a compromised device. Use for E3 and E5.",
      "why": "A compromised or unmanaged device plus Copilot is a faster data-discovery path.",
      "putInPlace": "If this layer is not in place, the article says to pilot it before assigning Copilot licenses.",
      "sourceIds": [
        "zero-trust"
      ],
      "highlightFor": [
        "admin",
        "security"
      ]
    },
    {
      "id": "s5-devices",
      "stationId": 5,
      "title": "Device management",
      "what": "Enroll devices in Intune, require health and compliance, manage settings, monitor risk, and prevent data loss. E3: enroll, compliance policies, require healthy devices, deploy profiles. E5: Intune plus Defender for Endpoint (mobile risk  access condition; Windows baseline compliance) and endpoint DLP once you have a sensitivity schema.",
      "why": "Device health is part of verifying access before Copilot can run.",
      "putInPlace": "If this layer is not in place, the article says to pilot it before assigning Copilot licenses.",
      "sourceIds": [
        "zero-trust"
      ],
      "highlightFor": [
        "admin",
        "security"
      ]
    },
    {
      "id": "s5-threat",
      "stationId": 5,
      "title": "Threat protection",
      "what": "Prevent common email and device attacks, shrink the Windows attack surface, and detect and respond. E3: Defender for Office 365 Plan 1 (anti-malware, anti-spam, anti-phish, Safe Attachments, Safe Links); Defender for Endpoint Plan 1; Windows Hello, Firewall, SmartScreen, Application Control, BitLocker, Application Guard. E5: Defender XDR (Identity, Office 365 P2, Endpoint P2, Cloud Apps), then Sentinel (licensed separately from E5).",
      "why": "Assume-breach protections sit next to Copilot, not behind it.",
      "putInPlace": "If this layer is not in place, the article says to pilot it before assigning Copilot licenses.",
      "sourceIds": [
        "zero-trust"
      ],
      "highlightFor": [
        "security",
        "admin"
      ]
    },
    {
      "id": "s5-teams",
      "stationId": 5,
      "title": "Secure Teams collaboration",
      "what": "Teams h, sensitive, and highly sensitive protection tiers. Review them before Copilot. Guest accounts are not licensed to use Copilot. Review external file sharing and guest contributors (files, sites, teams, shared channels). Many organizations have nothing that needs highly sensitive. Everything else should be at least baseline.",
      "why": "Copilot is a recommended time to review Teams protection tiers and guest sharing.",
      "putInPlace": "If this layer is not in place, the article says to pilot it before assigning Copilot licenses.",
      "sourceIds": [
        "zero-trust"
      ],
      "highlightFor": [
        "admin",
        "security"
      ]
    },
    {
      "id": "s5-jea",
      "stationId": 5,
      "title": "User permissions (JEA)",
      "what": "Just enough access, nothing more. File level: Purview Information Protection, classification, labels, and DLP. Site, team, and container: audit access and enforce restrictions. The article still says Microsoft Syntex - SharePoint Advanced Management to find oversharing in SharePoint and Teams. Site access reviews or restrict to security groups from one place. Train users on the policies.",
      "why": "Least privilege is both a file problem and a site/team problem. Copilot uses whatever those permissions allow.",
      "putInPlace": "If this layer is not in place, the article says to pilot it before assigning Copilot licenses.",
      "sourceIds": [
        "zero-trust"
      ],
      "highlightFor": [
        "admin",
        "security"
      ]
    },
    {
      "id": "s5-agents-checklist",
      "stationId": 5,
      "title": "Agents checklist",
      "what": "Staff Microsoft 365 admins (agents and connectors), Power Platform admins (Copilot Studio), Search admins (Graph connectors), and Azure admins. Copilot Control System is the Microsoft 365 admin-center slice: who can access which agent types, how agents are shared or published, and inventory. The rest of the walk is the checklist itself, not CCS: pick the build path (SharePoint agents, Agent Builder, Copilot Studio, Agents Toolkit); plan, license, and set the environment; ALM; inventory and lifecycle (RBAC, pin/share, requested and custom agents, connectors, assign/deploy); data access (third-party systems, SharePoint oversharing, audit, information protection/DLP, Compliance Manager, Communication Compliance, eDiscovery, retention); pay-as-you-go and capacity packs. The blueprint and visual guide are on the same page.",
      "why": "CCS is only the admin-center slice. Do not label the whole checklist sequence  Control System.",
      "putInPlace": "Walk CCS for access, share/publish, and inventory. Walk the rest of the checklist for build path, environment, ALM, data access, and billing.",
      "sourceIds": [
        "agents-checklist"
      ],
      "highlightFor": [
        "admin",
        "security",
        "agent-maker"
      ]
    }
  ],
  // Source metadata feeds both station source lists and the all-sources view.
  "sources": [
    {
      "id": "privacy",
      "title": "Data, Privacy, and Security for Microsoft Copilot",
      "url": "https://learn.microsoft.com/en-us/microsoft-365/copilot/microsoft-365-copilot-privacy",
      "lastReviewed": "2026-07-09",
      "fetched": true,
      "stations": [
        1
      ]
    },
    {
      "id": "architecture",
      "title": "How does Microsoft Copilot work?",
      "url": "https://learn.microsoft.com/en-us/microsoft-365/copilot/microsoft-365-copilot-architecture",
      "lastReviewed": "2026-03-24",
      "fetched": true,
      "stations": [
        1
      ]
    },
    {
      "id": "edp",
      "title": "Enterprise data protection in Microsoft Copilot and Microsoft Copilot Chat",
      "url": "https://learn.microsoft.com/en-us/microsoft-365/copilot/enterprise-data-protection",
      "lastReviewed": "2026-05-29",
      "fetched": true,
      "stations": [
        2
      ]
    },
    {
      "id": "dpa-audit",
      "title": "Microsoft Copilot data protection architecture",
      "url": "https://learn.microsoft.com/en-us/microsoft-365/copilot/microsoft-365-copilot-architecture-data-protection-auditing",
      "lastReviewed": "2026-04-07",
      "fetched": true,
      "stations": [
        2
      ]
    },
    {
      "id": "foundation",
      "title": "Configure a secure and governed foundation for Microsoft Copilot",
      "url": "https://learn.microsoft.com/en-us/microsoft-365/copilot/configure-secure-governed-data-foundation-microsoft-365-copilot",
      "lastReviewed": "2026-04-17",
      "fetched": true,
      "stations": [
        3
      ]
    },
    {
      "id": "dspm",
      "title": "Microsoft Purview Data Security Posture Management for AI (classic)",
      "url": "https://learn.microsoft.com/en-us/purview/dspm-for-ai",
      "lastReviewed": "2025-12-15",
      "fetched": true,
      "stations": [
        3
      ]
    },
    {
      "id": "sam",
      "title": "SharePoint Advanced Management",
      "url": "https://learn.microsoft.com/en-us/sharepoint/advanced-management",
      "lastReviewed": "2026-06-29",
      "fetched": true,
      "fetchNote": "Canonical SAM overview (concept article), not the get-ready how-to.",
      "stations": [
        3
      ]
    },
    {
      "id": "rcd",
      "title": "Restrict discovery of SharePoint sites and content",
      "url": "https://learn.microsoft.com/en-us/sharepoint/restricted-content-discovery",
      "lastReviewed": "2026-07-27",
      "fetched": true,
      "stations": [
        3
      ]
    },
    {
      "id": "studio-sec",
      "title": "Security and governance \u2014 Microsoft Copilot Studio",
      "url": "https://learn.microsoft.com/en-us/microsoft-copilot-studio/security-and-governance",
      "lastReviewed": "2026-08-04",
      "fetched": true,
      "stations": [
        4
      ]
    },
    {
      "id": "studio-gov",
      "title": "Manage your Copilot Studio projects, an overview",
      "url": "https://learn.microsoft.com/en-us/microsoft-copilot-studio/guidance/sec-gov-intro",
      "lastReviewed": "2026-01-16",
      "fetched": true,
      "stations": [
        4
      ]
    },
    {
      "id": "zero-trust",
      "title": "How do I apply Zero Trust principles to Microsoft 365 Copilot?",
      "url": "https://learn.microsoft.com/en-us/security/zero-trust/copilots/zero-trust-microsoft-365-copilot",
      "lastReviewed": "2026-05-21",
      "fetched": true,
      "stations": [
        5
      ]
    },
    {
      "id": "agents-checklist",
      "title": "Microsoft 365 Agents Checklist",
      "url": "https://learn.microsoft.com/en-us/microsoft-365/copilot/agent-essentials/m365-agents-checklist",
      "lastReviewed": "2026-03-16",
      "fetched": true,
      "fetchNote": "Requested /copilot/microsoft-365/agent-essentials/m365-agents-checklist; Learn redirected to this canonical URL.",
      "stations": [
        5
      ]
    }
  ],
  // Checklist items stay flat; app.js groups them by station while rendering.
  "checklist": [
    {
      "id": "c-s1-permissions",
      "group": "Station 1 \u00b7 Privacy & architecture",
      "groupBlurb": "Items Microsoft Learn states on the privacy and architecture pages.",
      "text": "Use Microsoft 365 permission models (including SharePoint, and inter-tenant options such  shared channels) so Copilot only surfaces data users have at least view permission to.",
      "sourceId": "privacy",
      "highlightFor": [
        "admin",
        "security"
      ],
      "stampsStation": 1
    },
    {
      "id": "c-s1-agents-terms",
      "group": "Station 1 \u00b7 Privacy & architecture",
      "groupBlurb": "Items Microsoft Learn states on the privacy and architecture pages.",
      "text": "When using agents, check each agent\u2019s privacy statement and terms of use.",
      "sourceId": "privacy",
      "highlightFor": [
        "admin",
        "agent-maker"
      ],
      "stampsStation": 1
    },
    {
      "id": "c-s1-integrated-apps",
      "group": "Station 1 \u00b7 Privacy & architecture",
      "groupBlurb": "Items Microsoft Learn states on the privacy and architecture pages.",
      "text": "In Microsoft 365 admin center \u2192 Integrated apps, review agent permissions, data access, terms, and privacy statements; allow only the agents the organization intends.",
      "sourceId": "privacy",
      "highlightFor": [
        "admin"
      ],
      "stampsStation": 1
    },
    {
      "id": "c-s1-retention",
      "group": "Station 1 \u00b7 Privacy & architecture",
      "groupBlurb": "Items Microsoft Learn states on the privacy and architecture pages.",
      "text": "Use Content search or Microsoft Purview to view/manage stored Copilot interaction data, and set Purview retention policies for Copilot chat interactions.",
      "sourceId": "privacy",
      "highlightFor": [
        "admin",
        "security"
      ],
      "stampsStation": 1
    },
    {
      "id": "c-s1-delete",
      "group": "Station 1 \u00b7 Privacy & architecture",
      "groupBlurb": "Items Microsoft Learn states on the privacy and architecture pages.",
      "text": "Tell users they can delete Copilot activity history from the My Account portal.",
      "sourceId": "privacy",
      "highlightFor": [
        "admin"
      ],
      "stampsStation": 1
    },
    {
      "id": "c-s1-ca-mfa",
      "group": "Station 1 \u00b7 Privacy & architecture",
      "groupBlurb": "Items Microsoft Learn states on the privacy and architecture pages.",
      "text": "Confirm Conditional Access and MFA apply to Copilot the same way they apply to other Microsoft 365 services; enable MFA if it is not already on.",
      "sourceId": "architecture",
      "highlightFor": [
        "admin",
        "security"
      ],
      "stampsStation": 1
    },
    {
      "id": "c-s1-connected",
      "group": "Station 1 \u00b7 Privacy & architecture",
      "groupBlurb": "Items Microsoft Learn states on the privacy and architecture pages.",
      "text": "Review privacy controls for connected experiences that analyze content and for optional connected experiences \u2014 they can remove Copilot features from Word, Excel, PowerPoint, Outlook, and OneNote, and can affect web search.",
      "sourceId": "privacy",
      "highlightFor": [
        "admin"
      ],
      "stampsStation": 1
    },
    {
      "id": "c-s1-anthropic-eudb",
      "group": "Station 1 \u00b7 Privacy & architecture",
      "groupBlurb": "Items Microsoft Learn states on the privacy and architecture pages.",
      "text": "If Anthropic models are enabled, note Learn\u2019s statement that they are currently excluded from the EU Data Boundary.",
      "sourceId": "privacy",
      "highlightFor": [
        "admin",
        "security"
      ],
      "stampsStation": 1
    },
    {
      "id": "c-s2-dpa",
      "group": "Station 2 \u00b7 Enterprise data protection",
      "groupBlurb": "Items from the EDP and data-protection architecture articles.",
      "text": "Treat prompts and responses  by the DPA and Product Terms (Microsoft ) for Microsoft Copilot and Microsoft Copilot Chat used by organizations.",
      "sourceId": "edp",
      "highlightFor": [
        "security",
        "admin"
      ],
      "stampsStation": 2
    },
    {
      "id": "c-s2-web",
      "group": "Station 2 \u00b7 Enterprise data protection",
      "groupBlurb": "Items from the EDP and data-protection architecture articles.",
      "text": "Treat Bing web queries  separate handling path (identifiers removed; Microsoft  controller; EU Data Boundary and HIPAA/BAA do not apply to those queries per the footnotes).",
      "sourceId": "edp",
      "highlightFor": [
        "security",
        "admin"
      ],
      "stampsStation": 2
    },
    {
      "id": "c-s2-extract-view",
      "group": "Station 2 \u00b7 Enterprise data protection",
      "groupBlurb": "Items from the EDP and data-protection architecture articles.",
      "text": "For encrypted content, users need EXTRACT and VIEW usage rights for Copilot to interact; user-defined sensitivity label permissions can block Copilot and agents.",
      "sourceId": "dpa-audit",
      "highlightFor": [
        "security",
        "agent-maker"
      ],
      "stampsStation": 2
    },
    {
      "id": "c-s2-purview-audit",
      "group": "Station 2 \u00b7 Enterprise data protection",
      "groupBlurb": "Items from the EDP and data-protection architecture articles.",
      "text": "Use Microsoft Purview for audit records, eDiscovery of Copilot interactions, and retention; expect Copilot Pages in user-owned SharePoint Embedded containers and uploads in OneDrive Copilot Chat folders.",
      "sourceId": "dpa-audit",
      "highlightFor": [
        "security",
        "admin"
      ],
      "stampsStation": 2
    },
    {
      "id": "c-s3-dspm-dra",
      "group": "Station 3 \u00b7 Governed data foundation",
      "groupBlurb": "Microsoft\u2019s own numbered steps from the foundation, DSPM, and SAM articles.",
      "text": "Review Purview DSPM data risk assessments for overshared sites, risky sharing links, and frequently accessed sensitive content.",
      "sourceId": "foundation",
      "highlightFor": [
        "security"
      ],
      "stampsStation": 3
    },
    {
      "id": "c-s3-sam-cma",
      "group": "Station 3 \u00b7 Governed data foundation",
      "groupBlurb": "Microsoft\u2019s own numbered steps from the foundation, DSPM, and SAM articles.",
      "text": "Run the SharePoint Advanced Management Content Management Assessment (oversized audiences, EEEU, broken inheritance, inactive/ownerless sites).",
      "sourceId": "foundation",
      "highlightFor": [
        "admin"
      ],
      "stampsStation": 3
    },
    {
      "id": "c-s3-rcd",
      "group": "Station 3 \u00b7 Governed data foundation",
      "groupBlurb": "Microsoft\u2019s own numbered steps from the foundation, DSPM, and SAM articles.",
      "text": "Enable SAM Restricted Content Discovery to exclude sensitive sites from Copilot discovery  interim control.",
      "sourceId": "foundation",
      "highlightFor": [
        "admin",
        "security"
      ],
      "stampsStation": 3
    },
    {
      "id": "c-s3-dlp-copilot",
      "group": "Station 3 \u00b7 Governed data foundation",
      "groupBlurb": "Microsoft\u2019s own numbered steps from the foundation, DSPM, and SAM articles.",
      "text": "Configure Microsoft Purview DLP for Copilot to exclude sensitive content from grounding (and DLP for prompts if specified sensitive info should not be processed).",
      "sourceId": "foundation",
      "highlightFor": [
        "security"
      ],
      "stampsStation": 3
    },
    {
      "id": "c-s3-rac",
      "group": "Station 3 \u00b7 Governed data foundation",
      "groupBlurb": "Microsoft\u2019s own numbered steps from the foundation, DSPM, and SAM articles.",
      "text": "Enforce Restricted Access Control by default for business-critical sites at provisioning; restrict company-wide sharing groups and Anyone links.",
      "sourceId": "foundation",
      "highlightFor": [
        "admin"
      ],
      "stampsStation": 3
    },
    {
      "id": "c-s3-labels",
      "group": "Station 3 \u00b7 Governed data foundation",
      "groupBlurb": "Microsoft\u2019s own numbered steps from the foundation, DSPM, and SAM articles.",
      "text": "Require site sensitivity labels at provisioning; configure auto-label and default sensitivity labels for files and emails.",
      "sourceId": "foundation",
      "highlightFor": [
        "security",
        "admin"
      ],
      "stampsStation": 3
    },
    {
      "id": "c-s3-compliance-mgr",
      "group": "Station 3 \u00b7 Governed data foundation",
      "groupBlurb": "Microsoft\u2019s own numbered steps from the foundation, DSPM, and SAM articles.",
      "text": "Use Purview Compliance Manager for AI-related requirements; set audit-log and Copilot-interaction retention; use eDiscovery for Copilot content.",
      "sourceId": "foundation",
      "highlightFor": [
        "security"
      ],
      "stampsStation": 3
    },
    {
      "id": "c-s3-archive",
      "group": "Station 3 \u00b7 Governed data foundation",
      "groupBlurb": "Microsoft\u2019s own numbered steps from the foundation, DSPM, and SAM articles.",
      "text": "Use SAM inactive-site policies and Microsoft 365 Archive so Copilot is not trained on / does not process archived sites; apply retention/deletion on stale files.",
      "sourceId": "sam",
      "highlightFor": [
        "admin"
      ],
      "stampsStation": 3
    },
    {
      "id": "c-s3-dspm-audit",
      "group": "Station 3 \u00b7 Governed data foundation",
      "groupBlurb": "Microsoft\u2019s own numbered steps from the foundation, DSPM, and SAM articles.",
      "text": "In classic DSPM for AI: confirm Purview Audit is on; review one-click policies, Reports, Activity explorer, and the weekly top-100 SharePoint data risk assessment.",
      "sourceId": "dspm",
      "highlightFor": [
        "security"
      ],
      "stampsStation": 3
    },
    {
      "id": "c-s3-backup",
      "group": "Station 3 \u00b7 Governed data foundation",
      "groupBlurb": "Microsoft\u2019s own numbered steps from the foundation, DSPM, and SAM articles.",
      "text": "Review Microsoft 365 Backup setup in the Microsoft 365 admin center (Settings \u2192 Microsoft 365 Backup)  on the SAM page.",
      "sourceId": "sam",
      "highlightFor": [
        "admin"
      ],
      "stampsStation": 3
    },
    {
      "id": "c-s4-dlp",
      "group": "Station 4 \u00b7 Copilot Studio",
      "groupBlurb": "Controls and phases listed on the Studio security and guidance pages.",
      "text": "Configure Power Platform data policies for Copilot Studio (authentication, knowledge, actions/connectors, HTTP, channels, Application Insights, triggers, autonomous agents).",
      "sourceId": "studio-sec",
      "highlightFor": [
        "admin",
        "agent-maker"
      ],
      "stampsStation": 4
    },
    {
      "id": "c-s4-routing",
      "group": "Station 4 \u00b7 Copilot Studio",
      "groupBlurb": "Controls and phases listed on the Studio security and guidance pages.",
      "text": "Configure environment routing (and a maker welcome message) so makers have a defined space to build.",
      "sourceId": "studio-sec",
      "highlightFor": [
        "admin"
      ],
      "stampsStation": 4
    },
    {
      "id": "c-s4-scan",
      "group": "Station 4 \u00b7 Copilot Studio",
      "groupBlurb": "Controls and phases listed on the Studio security and guidance pages.",
      "text": "Use maker security warnings and real-time risk assessment (automatic security scan) before publishing; check agent runtime protection status.",
      "sourceId": "studio-sec",
      "highlightFor": [
        "agent-maker"
      ],
      "stampsStation": 4
    },
    {
      "id": "c-s4-audit",
      "group": "Station 4 \u00b7 Copilot Studio",
      "groupBlurb": "Controls and phases listed on the Studio security and guidance pages.",
      "text": "Review maker audit logs in Microsoft Purview (and Sentinel if used). Do not assume Customer Lockbox covers Purview audit telemetry or Agent 365 events.",
      "sourceId": "studio-sec",
      "highlightFor": [
        "security",
        "admin"
      ],
      "stampsStation": 4
    },
    {
      "id": "c-s4-zones",
      "group": "Station 4 \u00b7 Copilot Studio",
      "groupBlurb": "Controls and phases listed on the Studio security and guidance pages.",
      "text": "Implement the guidance series: capture requirements, zoned environments, RBAC and gated release, testing, ALM pipelines, monitoring, then the manage checklist.",
      "sourceId": "studio-gov",
      "highlightFor": [
        "admin",
        "agent-maker"
      ],
      "stampsStation": 4
    },
    {
      "id": "c-s5-overshare",
      "group": "Station 5 \u00b7 Zero Trust & agents",
      "groupBlurb": "Zero Trust layers and the Microsoft 365 Agents Checklist tables.",
      "text": "Deploy or validate oversharing controls (Restricted SharePoint Search, DAG reports, Restricted Content Discovery) and start DSPM for AI / sensitivity labels / DLP / retention.",
      "sourceId": "zero-trust",
      "highlightFor": [
        "security",
        "admin"
      ],
      "stampsStation": 5
    },
    {
      "id": "c-s5-identity",
      "group": "Station 5 \u00b7 Zero Trust & agents",
      "groupBlurb": "Zero Trust layers and the Microsoft 365 Agents Checklist tables.",
      "text": "Deploy common Conditional Access (MFA for admins, MFA for all users, block legacy auth) scoped to Microsoft 365; add risk-based CA, PIM, and access reviews if licensed for E5 / Entra ID P2.",
      "sourceId": "zero-trust",
      "highlightFor": [
        "admin",
        "security"
      ],
      "stampsStation": 5
    },
    {
      "id": "c-s5-app-device",
      "group": "Station 5 \u00b7 Zero Trust & agents",
      "groupBlurb": "Zero Trust layers and the Microsoft 365 Agents Checklist tables.",
      "text": "Create Intune App Protection policies; enroll devices; require compliant devices; deploy Defender for Office 365 and Defender for Endpoint plans included in the SKU.",
      "sourceId": "zero-trust",
      "highlightFor": [
        "security",
        "admin"
      ],
      "stampsStation": 5
    },
    {
      "id": "c-s5-teams",
      "group": "Station 5 \u00b7 Zero Trust & agents",
      "groupBlurb": "Zero Trust layers and the Microsoft 365 Agents Checklist tables.",
      "text": "Review Teams protection tiers (baseline / sensitive / highly sensitive) and external sharing; guest accounts are not licensed to use Copilot.",
      "sourceId": "zero-trust",
      "highlightFor": [
        "admin"
      ],
      "stampsStation": 5
    },
    {
      "id": "c-s5-jea",
      "group": "Station 5 \u00b7 Zero Trust & agents",
      "groupBlurb": "Zero Trust layers and the Microsoft 365 Agents Checklist tables.",
      "text": "Validate just-enough-access at file and site/team level; use Purview labeling/DLP and SharePoint Advanced Management to find oversharing.",
      "sourceId": "zero-trust",
      "highlightFor": [
        "admin",
        "security"
      ],
      "stampsStation": 5
    },
    {
      "id": "c-s5-ccs",
      "group": "Station 5 \u00b7 Zero Trust & agents",
      "groupBlurb": "Zero Trust layers and the Microsoft 365 Agents Checklist tables.",
      "text": "In Copilot Control System: manage who can access agents and which types they may install; manage sharing, sideload, publish, and marketplace submit paths.",
      "sourceId": "agents-checklist",
      "highlightFor": [
        "admin"
      ],
      "stampsStation": 5
    },
    {
      "id": "c-s5-choose-studio",
      "group": "Station 5 \u00b7 Zero Trust & agents",
      "groupBlurb": "Zero Trust layers and the Microsoft 365 Agents Checklist tables.",
      "text": "Choose the right authoring path (SharePoint agents, Agent Builder, Copilot Studio, Agents Toolkit); plan objectives, RAI, licensing/consumption, and the development environment.",
      "sourceId": "agents-checklist",
      "highlightFor": [
        "agent-maker",
        "admin"
      ],
      "stampsStation": 5
    },
    {
      "id": "c-s5-inventory",
      "group": "Station 5 \u00b7 Zero Trust & agents",
      "groupBlurb": "Zero Trust layers and the Microsoft 365 Agents Checklist tables.",
      "text": "Set RBAC for managing agents; manage Agent Builder and Copilot Studio inventory (pin, requested agents, upload); configure Copilot connectors with staged rollout.",
      "sourceId": "agents-checklist",
      "highlightFor": [
        "admin",
        "agent-maker"
      ],
      "stampsStation": 5
    },
    {
      "id": "c-s5-paygo",
      "group": "Station 5 \u00b7 Zero Trust & agents",
      "groupBlurb": "Zero Trust layers and the Microsoft 365 Agents Checklist tables.",
      "text": "Review Microsoft Copilot pay-as-you-go, Studio capacity packs, credit consumption, and agent usage reports in the Microsoft 365 admin center.",
      "sourceId": "agents-checklist",
      "highlightFor": [
        "admin"
      ],
      "stampsStation": 5
    }
  ]
};
