const fetchData = {
  core_engineering: [
    {
      id: 1,
      title: "Mechanical Engineering",
      scope:
        "Design of pressure vessels, heat exchangers, reactors, boilers, compressors, pumps, turbines, tanks, and rotating/static equipment. Material selection, welding specifications, fabrication oversight, and mechanical integrity assessment.",
      standards:
        "ASME Sec VIII Div 1 & 2, TEMA, API 650/653/620, EN 13445, PED 2014/68/EU",
      deliverables:
        "Data sheets, fabrication drawings, WPS, material selection reports, mechanical design calculations",
    },
    {
      id: 2,
      title: "Piping Engineering",
      scope:
        "Piping layout, stress analysis (static/dynamic), support design, isometric drawings, valve selection.",
      standards: "ASME B31.3, B31.4, B31.8, API 570, ANSI/ASME B16.5",
      deliverables:
        "P&IDs, GAs, isometrics, stress analysis reports, MTO, valve list",
    },
    {
      id: 3,
      title: "Structural Engineering",
      scope:
        "Design of steel structures, pipe racks, platforms, ladders, seismic analysis, and foundation interfaces.",
      standards: "AISC, ASCE 7, Eurocode 3, SBC, BS 5950",
      deliverables:
        "Structural drawings, calculation sheets, connection details",
    },
    {
      id: 4,
      title: "Civil Engineering",
      scope:
        "Site grading, drainage, foundation design, roads, utilities, retaining walls, and earthwork.",
      standards: "ACI 318, IBC, AASHTO, SAES-L codes",
      deliverables: "Reinforcement drawings, site plans, drainage layouts",
    },
    {
      id: 5,
      title: "Electrical Engineering",
      scope:
        "HV/MV/LV power distribution, substation layout, lighting, earthing, cable sizing.",
      standards: "NEC, IEC, IEEE, SAES, ATEX/IECEx",
      deliverables: "SLD, load schedule, cable schedule, grounding drawings",
    },
    {
      id: 6,
      title: "Automation & Instrumentation",
      scope:
        "PLC/SCADA/DCS programming, loop diagrams, control panels, SIS, calibration.",
      standards: "ISA, IEC 61131, IEC 61511, NEMA",
      deliverables:
        "I/O lists, loop diagrams, instrument datasheets, narratives",
    },
  ],

  specialized_equipment: [
    {
      id: 7,
      title: "Tank Engineering",
      scope:
        "Fixed roof, floating roof, spherical tanks, nozzle design, repair methods.",
      standards: "API 650, API 653, API 620, EN 14015",
      deliverables: "Shell layout, roof drawings, settlement reports",
    },
    {
      id: 8,
      title: "Heat Exchanger Engineering",
      scope:
        "Thermal + mechanical design of shell & tube, plate, air-cooled HX.",
      standards: "TEMA, ASME Sec VIII, API 660/661",
      deliverables: "Thermal design reports, mechanical drawings",
    },
    {
      id: 9,
      title: "Pressure Vessel Engineering",
      scope:
        "Design, analysis, fabrication support for vessels, columns, reactors.",
      standards: "ASME Sec VIII Div 1/2, EN 13445, PD 5500",
      deliverables: "Design reports, fabrication drawings",
    },
    {
      id: 10,
      title: "Skid Mounted Systems",
      scope: "Modular skids for pumping, compression, filtration, utilities.",
      standards: "ASME, PED, ATEX",
      deliverables: "Skid layout, P&IDs, lifting plans",
    },
  ],

  detailed_engineering: [
    {
      id: 11,
      title: "Detailed Engineering Drawings",
      scope:
        "Fabrication, machining, assembly, exploded views, installation drawings.",
      standards: "ASME Y14.5, AWS A2.4",
      deliverables: "Part drawings, assembly drawings",
    },
    {
      id: 12,
      title: "Nesting & CNC Manufacturing Files",
      scope: "Plate nesting, CAM files, laser & plasma cutting.",
      standards: "ISO 10303 (STEP), DXF/DWG",
      deliverables: "Nesting layouts, CNC G-code",
    },
    {
      id: 13,
      title: "Manufacturing & Fabrication Support",
      scope: "Welding procedures, CNC programming, NDT coordination.",
      standards: "AWS D1.1, ASME Sec IX",
      deliverables: "WPS, ITP, NDT reports",
    },
  ],

  analysis: [
    {
      id: 14,
      title: "Finite Element Analysis (FEA)",
      scope:
        "Structural, thermal, modal, fatigue, buckling, vibration analysis.",
      standards: "ASME Sec VIII, API 579",
      deliverables: "Stress contours, deformation reports",
    },
    {
      id: 15,
      title: "Computational Fluid Dynamics (CFD)",
      scope: "Flow distribution, mixing, ventilation, pressure drop.",
      standards: "ASHRAE, ISO 5167",
      deliverables: "CFD contour plots, optimization reports",
    },
    {
      id: 16,
      title: "DFM / DFA",
      scope: "Part simplification, manufacturability, assembly optimization.",
      standards: "Industry practices",
      deliverables: "DFM/DFA reports",
    },
    {
      id: 17,
      title: "Design FMEA",
      scope: "Risk analysis for design stages, mitigation planning.",
      standards: "AIAG-VDA, SAE J1739",
      deliverables: "DFMEA worksheets",
    },
    {
      id: 18,
      title: "Process FMEA",
      scope: "Manufacturing process risk assessment.",
      standards: "AIAG-VDA PFMEA",
      deliverables: "PFMEA reports, control plans",
    },
    {
      id: 19,
      title: "Control Plans",
      scope: "Process controls, inspections, reaction plans.",
      standards: "AIAG CP Manual",
      deliverables: "Control plan documents",
    },
  ],

  fabrication: [
    {
      id: 20,
      title: "Piping Supports & Restraints",
      scope:
        "Spring hangers, snubbers, guides, anchors, EJMA expansion joints.",
      standards: "MSS SP-58, EJMA",
      deliverables: "Support drawings, load tables",
    },
    {
      id: 21,
      title: "Jigs & Fixtures",
      scope: "Welding jigs, inspection gauges, CNC fixtures.",
      standards: "ASME Y14.5 GD&T",
      deliverables: "3D models, fabrication drawings",
    },
  ],

  project_docs: [
    {
      id: 22,
      title: "PFD & P&ID",
      scope: "Process flow diagrams, utility diagrams, hydraulic profiles.",
      standards: "ISA 5.1, ISO 10628",
      deliverables: "PFDs, P&IDs, line lists",
    },
    {
      id: 23,
      title: "EPC Documentation",
      scope: "SAES, SAMSS, SAEP compliance.",
      standards: "Saudi Aramco Standards",
      deliverables: "Compliance matrices, approvals",
    },
    {
      id: 24,
      title: "BOM & MTO",
      scope: "Procurement & quantity takeoff.",
      standards: "Client formats",
      deliverables: "BOM, MTO",
    },
    {
      id: 25,
      title: "As-Built Engineering",
      scope: "Red-line markups, CNC updates, revision control.",
      standards: "ISO 9001",
      deliverables: "As-built drawings",
    },
  ],

  execution: [
    {
      id: 26,
      title: "Construction Supervision",
      scope: "Site installation, quality checks, safety compliance.",
      standards: "OSHA, ISO 45001",
      deliverables: "Inspection reports",
    },
    {
      id: 27,
      title: "Testing & Commissioning",
      scope: "FAT, SAT, loop checks, commissioning.",
      standards: "ISA, ISO 9001",
      deliverables: "Commissioning reports",
    },
  ],

  lifecycle: [
    {
      id: 28,
      title: "Technical Support",
      scope: "Troubleshooting, training, CNC maintenance.",
      standards: "ISO 9001",
      deliverables: "Training manuals, support logs",
    },
    {
      id: 29,
      title: "Plant Revamp",
      scope: "Capacity expansion, layout modifications, CNC retrofit.",
      standards: "ASME, API",
      deliverables: "Revamp packages",
    },
    {
      id: 30,
      title: "Energy Efficiency",
      scope: "Energy audits, heat recovery, sustainability.",
      standards: "ISO 50001, LEED",
      deliverables: "Audit reports, ROI analysis",
    },
  ],
};


// Load data (NO json() because fetchData is not fetched)
const serviceContainer = document.getElementById("services");
const tabs = document.querySelectorAll(".nav-link"); // ✅ FIXED

function loadServices(category = "core_engineering") {
  const services = fetchData[category];
  serviceContainer.innerHTML = "";

  services.forEach((item) => {
    const standardsBadges = item.standards
      .split(",")
      .map((std) => `<span class="badge badge-custom">${std.trim()}</span>`)
      .join(" ");

    serviceContainer.innerHTML += `
      <div class="col-lg-6 col-md-12 mb-4">
        <div class="card service-card h-100">
          <div class="service-header" onclick="toggleAccordion(this)">
            <h5 class="mb-0 fw-bold">${item.id}. ${item.title}</h5>
            <i class="bi bi-chevron-down"></i>
          </div>

          <div class="accordion-body">
            <p><strong>Scope:</strong> ${item.scope}</p>
            <p><strong>Standards:</strong><br>${standardsBadges}</p>
            <p><strong>Deliverables:</strong> ${item.deliverables}</p>
          </div>
        </div>
      </div>
    `;
  });
}

function toggleAccordion(header) {
  const body = header.nextElementSibling;
  const icon = header.querySelector("i");

  body.classList.toggle("show");
  icon.classList.toggle("bi-chevron-down");
  icon.classList.toggle("bi-chevron-up");
}

// Tabs
tabs.forEach((tab) => {
  tab.addEventListener("click", () => {
    tabs.forEach((t) => t.classList.remove("active"));
    tab.classList.add("active");

    loadServices(tab.dataset.tab);
  });
});

// Default load
loadServices();


