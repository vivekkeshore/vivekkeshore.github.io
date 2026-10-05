// Gallery content. `file` is a filename in src/assets/gallery/.
// The carousel shuffles these on every visit, so order here doesn't matter.

export interface GalleryItem {
    file: string;
    event: string;
    caption: string;
}

export const gallery: GalleryItem[] = [
    { file: "RDS_3444.JPG", event: "EPAM TechScape 2026", caption: "Speaking on agentic AI architecture patterns" },
    { file: "20250913_162250.jpg", event: "PyCon India 2025", caption: "Surprises, Pitfalls and Patterns — on the main stage" },
    { file: "1775121751378.jpeg", event: "Python Asia 2026", caption: "Hacking Python data types for fun and power" },
    { file: "54849315877_c3eef20b30_o.jpg", event: "PyCon India 2025", caption: "A packed hall" },
    { file: "IMG20260619144735.jpg", event: "PyCon Singapore 2026", caption: "How to write terrible Python code" },
    { file: "20260315_141606.jpeg", event: "PyConf Hyderabad 2026", caption: "Python concurrency chaos: sync vs async" },
    { file: "meetup1.jpeg", event: "HydPy Meetup · June 2025", caption: "Under the hood of Python data types" },
    { file: "54850488255_f264e06a36_o.jpg", event: "PyCon India 2025", caption: "Hands up from the audience" },
    { file: "RDS_3456.JPG", event: "EPAM TechScape 2026", caption: "The TechScape Hyderabad crowd" },
    { file: "20250913_145242.jpg", event: "PyCon India 2025", caption: "With the PyCon India community" },
    { file: "pyconf2025.jpeg", event: "PyConf Hyderabad 2025", caption: "Automated data validation with Great Expectations" },
    { file: "1727777598418.jpeg", event: "PyCon India 2024", caption: "From Zero to Backend Hero — FastAPI workshop" },

    { file: "RDS_3447.JPG", event: "EPAM TechScape 2026", caption: "Six agentic AI design patterns, and when to pick each" },
    { file: "IMG20260619144720.jpg", event: "PyCon Singapore 2026", caption: "On stage in Singapore" },
    { file: "20260315_141528.jpeg", event: "PyConf Hyderabad 2026", caption: "How asyncio works" },
    { file: "1775121751696.jpeg", event: "Python Asia 2026", caption: "The Python Asia main hall" },
    { file: "20250913_162652.jpg", event: "PyCon India 2025", caption: "Story time" },
    { file: "54850488225_61f0a044c5_o.jpg", event: "PyCon India 2025", caption: "Lessons from interviewing 400+ developers" },
    { file: "54850486980_e1071d11e6_o.jpg", event: "PyCon India 2025", caption: "Main stage, Bengaluru" },
    { file: "20250913_165147.jpg", event: "PyCon India 2025", caption: "Wrapping up the talk" },
    { file: "20250913_165526.jpg", event: "PyCon India 2025", caption: "Hallway Q&A after the talk" },
    { file: "20250913_165538.jpg", event: "PyCon India 2025", caption: "More questions in the hallway" },
    { file: "1757766910535.jpeg", event: "PyCon India 2025", caption: "PyCon India 2025, Bengaluru" },
    { file: "1758013006420.jpeg", event: "PyCon India 2025", caption: "Catching up with fellow Pythonistas" },
    { file: "20250912_100951.jpg", event: "PyCon India 2025", caption: "FastAPI for Production workshop" },
    { file: "20250912_101702.jpg", event: "PyCon India 2025", caption: "Workshop in full swing" },
    { file: "meetup2.jpeg", event: "HydPy Meetup · June 2025", caption: "HydPy at Advance Auto Parts" },
    { file: "1750836121881.jpeg", event: "HydPy Meetup · June 2025", caption: "Speaker appreciation" },
    { file: "pyconf2.jpeg", event: "PyConf Hyderabad 2025", caption: "Live demo" },
    { file: "pyconf3.jpeg", event: "PyConf Hyderabad 2025", caption: "What are expectations?" },
    { file: "1737354998963.jpeg", event: "HydPy Meetup · January 2025", caption: "API testing with Schemathesis and Hypothesis" },
    { file: "1737107777630.jpeg", event: "Softobiz Technology Quarter 2025", caption: "After the advanced prompt engineering session" },
    { file: "1744438404161.jpeg", event: "SenecaGlobal Hackathon 2025", caption: "At the SenecaGlobal hackathon" },
    { file: "1760289329271.jpeg", event: "GDG DevFest Hyderabad 2025", caption: "With friends at DevFest" },
    { file: "1727777598695.jpeg", event: "PyCon India 2024", caption: "Meeting the community" },
    { file: "1695973775186.jpeg", event: "PyCon India 2023", caption: "Mastering object-oriented Python workshop" },
    { file: "1695973775428.jpeg", event: "PyCon India 2023", caption: "A full workshop room in Hyderabad" },
    { file: "DSC01122_1.JPG", event: "Community", caption: "Conversations over dinner" },
    { file: "IMG_8357.jpg", event: "Community", caption: "Selfie with the audience" },

    { file: "techscape-2026-speaker-card.png", event: "EPAM TechScape 2026", caption: "Agentic AI Architecture Patterns" },
    { file: "1778405395319.jpeg", event: "PyCon Singapore 2026", caption: "How to Write Terrible Python Code" },
    { file: "1773074536072.jpeg", event: "Python Asia 2026", caption: "Under the Hood: Hacking Python Data Types" },
    { file: "1773178681624.jpeg", event: "PyConf Hyderabad 2026", caption: "Python Concurrency Chaos" },
    { file: "1756364087134.jpeg", event: "PyCon India 2025", caption: "Surprises, Pitfalls, and Patterns" },
    { file: "1757329282657.jpeg", event: "PyCon India 2025", caption: "FastAPI for Production — workshop" },
    { file: "singapore.jpeg", event: "PyCon Singapore 2025", caption: "Boosting API Reliability" },
    { file: "1748426938049.jpeg", event: "Softobiz Learning Quarter 2025", caption: "Web API Security Practices" },
    { file: "1738737089158.jpeg", event: "PyConf Hyderabad 2025", caption: "From Raw to Reliable" },
    { file: "1736934856773.jpeg", event: "Softobiz Technology Quarter 2025", caption: "Advanced Prompt Engineering" },
    { file: "1726151937625.jpeg", event: "PyCon India 2024", caption: "From Zero to Backend Hero — workshop" },
    { file: "1695382068328.jpeg", event: "PyCon India 2023", caption: "From Novice to Virtuoso — workshop" },
];
