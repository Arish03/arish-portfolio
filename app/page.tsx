"use client";

import { TypeAnimation } from "react-type-animation";
import PageWrapper from "@/components/PageWrapper";
import Link from "next/link";
//import EducationTimeline from "@/components/EducationTimeline";

export default function HomePage() {
  return (
    <PageWrapper>
      <section className="min-h-[75vh] flex flex-col justify-center items-center text-center">
        
        {/* Badge */}
        <span className="inline-block rounded-full border px-4 py-1 text-sm text-muted-foreground">
          Software Engineer · Frontend Focus
        </span>

        {/* Title */}
        <h1 className="mt-6 text-5xl md:text-6xl font-bold tracking-tight leading-tight">
          Hi, I’m Arish <br />
          I Build{" "}
          <span className="text-blue-600 dark:text-blue-400">
            <TypeAnimation
              sequence={[
                "Modern web apps",
                1500,
                "Clean UI",
                1500,
                "Frontend experiences",
                1500,
              ]}
              speed={50}
              repeat={Infinity}
            />
          </span>
        </h1>

        {/* Description */}
        <p className="mt-6 max-w-2xl text-lg text-muted-foreground">
          Frontend-focused Software Engineer 1 skilled in React, Next.js, Tailwind CSS, Azure IoT, n8n automation, and UI/UX
        </p>

        {/* Actions */}
        <div className="mt-10 flex flex-wrap justify-center gap-4">
          <Link
            href="/projects"
            className="rounded-xl bg-black text-white dark:bg-white dark:text-black
                       px-6 py-3 text-sm font-medium transition hover:opacity-90"
          >
            View Projects
          </Link>

          <Link
            href="/resume"
            className="rounded-xl border px-6 py-3 text-sm font-medium
                       hover:bg-gray-50 dark:hover:bg-neutral-800 transition"
          >
            Resume
          </Link>
        </div>
            
      </section>
       {/* EDUCATION TIMELINE 👇 */}
      
    </PageWrapper>
  );
}
