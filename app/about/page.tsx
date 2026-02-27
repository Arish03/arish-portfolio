"use client";

import { useState } from "react";
import PageWrapper from "@/components/PageWrapper";
import PageHeader from "@/components/PageHeader";
import Image from "next/image";
import { motion } from "framer-motion";
import { BookOpen, Music, Film } from "lucide-react";

export default function AboutPage() {
  const [imgError, setImgError] = useState(false);
  return (
    <PageWrapper>
      {/* Centered Header */}
      <PageHeader
        label="About"
        title="Frontend-Focused Software Engineer"
        description="I build modern, scalable, and user-centric web applications with clean UI, smooth interactions, and strong frontend architecture."
      />

      {/* Main Grid */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto"
      >
        {/* Profile Card */}
        <div className="glass p-8 md:col-span-1">
          <div className="flex flex-col items-center text-center">
            <div className="relative w-[8cm] h-[12cm] max-w-full overflow-hidden rounded-2xl border border-white/10 shadow-lg ring-1 ring-white/6">
              {!imgError ? (
                <Image
                  src="/profile.jpg"
                  alt="Arish Srinivasan"
                  fill
                  sizes="(max-width: 768px) 100vw, 8cm"
                  className="object-cover"
                  onError={() => setImgError(true)}
                />
              ) : (
                <div className="flex items-center justify-center w-full h-full bg-slate-100 text-slate-700">
                  <svg xmlns="http://www.w3.org/2000/svg" width="128" height="128" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="opacity-80">
                    <rect x="2" y="2" width="20" height="20" rx="4" ry="4" />
                    <path d="M8 14s1.5-2 4-2 4 2 4 2" />
                    <circle cx="12" cy="9" r="2" />
                  </svg>
                </div>
              )}
            </div>

            <h2 className="mt-4 text-2xl font-semibold tracking-tight">
              Arish Srinivasan
            </h2>

            <p className="mt-1 text-sm text-muted-foreground">
              Software Engineer — Level 1
            </p>
          </div>
        </div>

        {/* Right Content */}
        <div className="md:col-span-2 space-y-6">
          {/* Intro */}
          <div className="glass p-6">
            <h3 className="text-lg font-semibold mb-3 flex items-center">
              <span className="mr-2 text-xl">👋</span>
              About
            </h3>
            <p className="text-muted-foreground leading-relaxed text-justify">
            Software Engineer 1 specializing in modern frontend development using React, Next.js, and Tailwind CSS to build scalable, performant, and visually refined web applications. Experienced in Azure IoT ecosystems, including device-to-cloud communication, real-time dashboard development, and MQTT-based data pipelines. Proficient in n8n workflow automation, integrating APIs and automating processes to eliminate manual effort.
            Passionate about UI/UX design, creating intuitive, accessible, and user-centric interfaces backed by strong design systems. Also knowledgeable in digital marketing fundamentals, including landing page optimization, performance tracking, and user-engagement strategies that support product growth.
            A fast learner who collaborates effectively across teams and quickly adapts to new technologies to deliver impactful software solutions.
            </p>
          </div>

          {/* Experience */}
          <div className="glass p-6">
            <h3 className="text-lg font-semibold mb-3 flex items-center">
              <span className="mr-2 text-xl">💼</span>
              Experience
            </h3>
            <p className="text-muted-foreground leading-relaxed text-justify">
              At Lansub Technologies, I develop and maintain production-ready web apps, reusable UI components, and automated API workflows using n8n. I focus on clean, scalable engineering and delivering solutions that directly impact real-world operations, including IoT and dashboard systems.
            </p>
          </div>

          {/* Philosophy */}
          <div className="glass p-6">
            <h3 className="text-lg font-semibold mb-3 flex items-center">
              <span className="mr-2 text-xl">🎯</span>
              Philosophy
            </h3>
            <p className="text-muted-foreground leading-relaxed">
              I believe in creating digital experiences that are not just
              functional, but intuitive and delightful. Technology should
              enhance human capability — not complicate it.
            </p>
          </div>

          {/* What I Do */}
          <div className="glass p-6">
            <h3 className="text-lg font-semibold mb-4 flex items-center">
              <span className="mr-2 text-xl">💡</span>
              What I Do
            </h3>
            <ul className="space-y-2">
              {[
                "Frontend Engineering",
                "Full-Stack Development",
                "IoT-Driven Web Applications",
                "UI / UX & Interaction Design",
                "Automation Workflows with n8n",
                "AI-Powered Application Development",
              ].map((item) => (
                <li key={item} className="flex items-center gap-3 text-muted-foreground">
                  <span className="h-2 w-2 rounded-full bg-primary" />
                  {item}
                </li>
              ))}
            </ul>
          </div>

          {/* When Not Coding */}
          <div className="glass p-6">
            <h3 className="text-lg font-semibold mb-4 flex items-center">
              <span className="mr-2 text-xl">🎈</span>
              When I’m Not Coding
            </h3>

            <div className="grid grid-cols-3 gap-6 text-center">
              {[
                { icon: BookOpen, label: "Reading" },
                { icon: Music, label: "Music" },
                { icon: Film, label: "Sci-Fi Movies" },
              ].map(({ icon: Icon, label }) => (
                <div key={label}>
                  <Icon className="h-7 w-7 text-primary mx-auto mb-2" />
                  <p className="text-sm text-muted-foreground">{label}</p>
                </div>
              ))}
            </div>

            <p className="mt-4 text-sm text-muted-foreground text-center italic">
              I enjoy books, music, and action/sci-fi movies when not coding.
            </p>
          </div>
        </div>
      </motion.div>
    </PageWrapper>
  );
}
