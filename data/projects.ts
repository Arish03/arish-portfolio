export type Project = {
  slug: string;
  title: string;
  description: string;
  tech: string[];
  problem: string;
  solution: string;
  outcome: string;
};

export const projects: Project[] = [
  {
    slug: "ai-uiux-platform",
    title: "AI-powered UI/UX Platform",
    description:
      "Frontend-focused platform that provides AI-driven UI suggestions and live previews.",
    tech: ["React", "Next.js", "Tailwind", "Framer Motion", "AI"],
    problem:
      "Designing good UI requires experience and iteration. Beginners struggle with feedback and structure.",
    solution:
      "Built an AI-assisted platform that analyzes UI and provides real-time suggestions with live preview and exportable components.",
    outcome:
      "Improved design workflow speed and helped users generate clean, reusable frontend code.",
  },
];
