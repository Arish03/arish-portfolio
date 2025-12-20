"use client";

import PageWrapper from "@/components/PageWrapper";
import PageHeader from "@/components/PageHeader";

const projects = [
  
  {
    title: "Webgen-AI",
    subtitle: "AI Website Builder",
    status: "Completed",
    description:
      "An AI-powered website generator that converts text prompts into clean, modular React applications with live editing and real-time preview.",
    features: [
      "Text-to-website UI builder",
      "Live editing & real-time preview",
      "Auto-generated component structure",
      "Export & download full React project",
    ],
    tech: ["React", "Node.js", "Gemini AI", "MongoDB"],
    github: "https://github.com/Arish03/Webgen-AI",
    caseStudy: "/projects/webgen-ai",
  },
  {
    title: "Freelancer Hub",
    subtitle: "Client–Freelancer Platform",
    status: "Completed",
    description:
      "A modern platform designed to connect freelancers with clients, focusing on smooth collaboration, secure communication, and project tracking.",
    features: [
      "Freelancer profile creation & customization",
      "Browse and manage client projects",
      "Secure client–freelancer chat",
      "Project tracking dashboard",
    ],
    tech: ["React", "Node.js", "MongoDB", "Tailwind CSS"],
    github: "https://github.com/Arish03/Freelancer_Hub",
    caseStudy: null,
  },
  {
    title: "AI Video Reality Detector",
    subtitle: "AI vs Real Video Detection",
    status: "In Progress",
    description:
      "A deep learning system that detects whether a video is AI-generated or real by analyzing visual artifacts and temporal inconsistencies.",
    features: [
      "AI-generated vs real video classification",
      "Frame-level video analysis",
      "Deep learning & CV pipeline",
      "Model training & evaluation",
    ],
    tech: ["Python", "HuggingFace", "OpenCV"],
    github: null,
    caseStudy: "/projects/ai-video-detector",
  },
  {
    title: "FrameDrop",
    subtitle: "Poster & Wall Art E-Commerce Platform",
    status: "Completed",
    description:
      "A modern e-commerce platform for discovering and purchasing wall posters and framed artwork with a clean, minimal UI.",
    features: [
      "Modern product listing & detail pages",
      "Authentication & user accounts",
      "Cart & checkout flow",
      "Responsive, design-first UI",
    ],
    tech: ["Next.js", "React", "Tailwind CSS", "MongoDB"],
    github: null,
    caseStudy: null,
  },
];

export default function ProjectsPage() {
  return (
    <PageWrapper>
      <PageHeader
        label="Projects"
        title="Selected Work & Case Studies"
        description="A collection of frontend, AI-powered, and full-stack projects built with clean architecture and real-world use cases."
      />

      <div className="grid grid-cols-1 gap-8 max-w-5xl mx-auto">
        {projects.map((project) => (
          <div key={project.title} className="card">
            {/* Header */}
            <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-3">
              <div>
                <h2 className="text-2xl font-semibold">
                  {project.title}
                </h2>
                <p className="text-sm text-muted-foreground">
                  {project.subtitle}
                </p>
              </div>

              <span className="rounded-full border px-3 py-1 text-xs w-fit">
                {project.status}
              </span>
            </div>

            {/* Description */}
            <p className="mt-4 text-muted-foreground leading-relaxed">
              {project.description}
            </p>

            {/* Features */}
            <ul className="mt-4 space-y-2 text-muted-foreground">
              {project.features.map((feature) => (
                <li key={feature} className="flex gap-2">
                  <span className="text-blue-600 dark:text-blue-400">•</span>
                  {feature}
                </li>
              ))}
            </ul>

            {/* Tech stack */}
            <div className="mt-5 flex flex-wrap gap-2">
              {project.tech.map((tech) => (
                <span
                  key={tech}
                  className="rounded-full border px-3 py-1 text-xs
                             text-gray-700 dark:text-gray-300
                             border-gray-200 dark:border-white/10"
                >
                  {tech}
                </span>
              ))}
            </div>

            {/* Actions */}
            <div className="mt-6 flex flex-wrap gap-3 items-center">
              {project.github && (
                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center rounded-lg border
                             px-4 py-2 text-sm font-medium
                             hover:bg-gray-50 dark:hover:bg-neutral-800 transition"
                >
                  GitHub
                </a>
              )}

              {project.caseStudy && (
                <a
                  href={project.caseStudy}
                  className="inline-flex items-center rounded-lg
                             bg-black text-white dark:bg-white dark:text-black
                             px-4 py-2 text-sm font-medium
                             hover:opacity-90 transition"
                >
                  Case Study →
                </a>
              )}

              {!project.github && !project.caseStudy && (
                <span className="text-sm text-muted-foreground">
                  🚧 Details coming soon
                </span>
              )}
            </div>
          </div>
        ))}
      </div>
    </PageWrapper>
  );
}
