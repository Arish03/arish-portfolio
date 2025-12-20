"use client";

import PageWrapper from "@/components/PageWrapper";
import PageHeader from "@/components/PageHeader";

export default function ExperiencePage() {
  return (
    <PageWrapper>
      {/* Centered Header */}
      <PageHeader
        label="Experience"
        title="Professional experience"
        description="Real-world experience building and maintaining production-grade web applications."
      />

      {/* Experience Timeline */}
      <div className="space-y-8 max-w-4xl mx-auto">
        {/* Role 1 */}
        <div className="card">
          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-2">
            <h2 className="text-xl font-semibold">
              Software Engineer — Lansub Technologies
            </h2>
            <span className="text-sm text-muted-foreground">
              Jan 2025 – Present
            </span>
          </div>

          <ul className="mt-4 space-y-3 text-muted-foreground leading-relaxed">
            <li>
              • Built and maintained modern web applications using React,
              Next.js, Node.js, and Tailwind CSS.
            </li>
            <li>
              • Designed reusable UI components and implemented clean,
              scalable frontend architecture.
            </li>
            <li>
              • Developed automation workflows using n8n to integrate APIs,
              WhatsApp, Google Sheets, and databases.
            </li>
            <li>
              • Focused on performance, usability, and maintainable code
              across production systems.
            </li>
          </ul>
        </div>

        {/* Role 2 */}
        <div className="card">
          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-2">
            <h2 className="text-xl font-semibold">
              Python Programming Intern — CODTECH IT Solutions
            </h2>
            <span className="text-sm text-muted-foreground">
              Jul 2024 – Aug 2024
            </span>
          </div>

          <ul className="mt-4 space-y-3 text-muted-foreground leading-relaxed">
            <li>
              • Worked on Python fundamentals, problem-solving, and
              project-based learning.
            </li>
            <li>
              • Built small applications with clean, modular code.
            </li>
          </ul>
        </div>
      </div>
    </PageWrapper>
  );
}
