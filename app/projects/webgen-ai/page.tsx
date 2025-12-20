"use client";

import PageWrapper from "@/components/PageWrapper";
import PageHeader from "@/components/PageHeader";
import Link from "next/link";

export default function WebgenAICaseStudyPage() {
  return (
    <PageWrapper>
      <PageHeader
        label="Case Study"
        title="Webgen-AI — AI Website Builder"
        description="An AI-powered platform that converts natural language prompts into clean, modular, production-ready React applications."
      />

      <div className="max-w-4xl mx-auto space-y-12 text-muted-foreground leading-relaxed">
        <div className="sticky top-24 z-40">
  <div className="max-w-4xl mx-auto px-4">
    <Link
      href="/projects"
      className="inline-flex items-center gap-2 rounded-full border
                 bg-white/80 dark:bg-neutral-900/80 backdrop-blur
                 px-4 py-2 text-sm font-medium
                 text-gray-700 dark:text-gray-300
                 hover:text-black dark:hover:text-white
                 hover:bg-white dark:hover:bg-neutral-800
                 transition shadow-sm"
    >
      ← Back to Projects
    </Link>
  </div>
</div>



        {/* Overview */}
        <section>
          <h2 className="text-xl font-semibold text-black dark:text-white">
            Project Overview
          </h2>
          <p className="mt-3">
            Webgen-AI is an AI-driven website builder designed to generate clean,
            reusable React components from text prompts. Unlike template-based
            tools, it prioritizes developer experience, maintainable code, and
            real-world frontend architecture.
          </p>
        </section>

        {/* Problem */}
        <section>
          <h2 className="text-xl font-semibold text-black dark:text-white">
            Problem Statement
          </h2>
          <p className="mt-3">
            Building modern websites requires frontend expertise and significant
            setup time. Existing AI website builders often generate unstructured
            code, lock users into proprietary editors, or produce output that is
            difficult to maintain or extend.
          </p>
        </section>

        {/* Goals */}
        <section>
          <h2 className="text-xl font-semibold text-black dark:text-white">
            Goals & Objectives
          </h2>
          <ul className="mt-3 list-disc ml-6 space-y-2">
            <li>Generate clean, readable React component code</li>
            <li>Maintain proper component and folder structure</li>
            <li>Provide live preview with real-time editing</li>
            <li>Allow full project export and reuse</li>
          </ul>
        </section>

        {/* Solution */}
        <section>
          <h2 className="text-xl font-semibold text-black dark:text-white">
            Solution Architecture
          </h2>
          <p className="mt-3">
            Webgen-AI was designed as a full-stack AI system with three layers:
            prompt interpretation, frontend rendering, and exportable project
            generation. Prompt engineering and post-processing logic were used to
            enforce consistent component boundaries.
          </p>
        </section>

        {/* Tech Stack */}
        <section>
          <h2 className="text-xl font-semibold text-black dark:text-white">
            Technology Stack
          </h2>
          <ul className="mt-3 list-disc ml-6 space-y-2">
            <li>Frontend: React.js, Tailwind CSS</li>
            <li>Backend: Node.js (Express)</li>
            <li>AI: Gemini AI with structured prompt templates</li>
            <li>Database: MongoDB</li>
          </ul>
        </section>

        {/* Challenges */}
        <section>
          <h2 className="text-xl font-semibold text-black dark:text-white">
            Challenges & Solutions
          </h2>
          <ul className="mt-3 space-y-3">
            <li>
              <strong>AI Output Consistency:</strong> Solved using strict prompt
              templates and output normalization.
            </li>
            <li>
              <strong>Component Scalability:</strong> Introduced standardized
              layout and reusable UI patterns.
            </li>
            <li>
              <strong>Live Preview Performance:</strong> Optimized rendering to
              reduce unnecessary re-renders.
            </li>
          </ul>
        </section>

        {/* Outcome */}
        <section>
          <h2 className="text-xl font-semibold text-black dark:text-white">
            Outcome & Impact
          </h2>
          <p className="mt-3">
            Webgen-AI significantly reduces website setup time while generating
            maintainable, developer-friendly code. The project demonstrates how
            AI can be integrated responsibly into real-world frontend workflows.
          </p>
        </section>

        {/* Learnings */}
        <section>
          <h2 className="text-xl font-semibold text-black dark:text-white">
            Key Learnings
          </h2>
          <ul className="mt-3 list-disc ml-6 space-y-2">
            <li>AI requires strong architectural guardrails</li>
            <li>Prompt engineering is critical for usable output</li>
            <li>Developer experience matters as much as automation</li>
          </ul>
        </section>

      </div>
    </PageWrapper>
  );
}
