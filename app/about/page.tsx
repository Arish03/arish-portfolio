"use client";

import PageWrapper from "@/components/PageWrapper";
import PageHeader from "@/components/PageHeader";
import Image from "next/image";
import { motion } from "framer-motion";
import { BookOpen, Music, Film } from "lucide-react";

export default function AboutPage() {
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
            <div className="relative h-36 w-36 overflow-hidden rounded-2xl border border-white/20">
              <Image
                src="/profile.jpg"
                alt="Arish Srinivasan"
                fill
                className="object-cover"
                priority
              />
            </div>

            <h2 className="mt-4 text-xl font-semibold">
              Arish Srinivasan
            </h2>

            <p className="mt-1 text-sm text-muted-foreground">
              Software Engineer 
            </p>
          </div>
        </div>

        {/* Right Content */}
        <div className="md:col-span-2 space-y-6">
          {/* Intro */}
          <div className="glass p-6">
            <p className="text-muted-foreground leading-relaxed">
            Software Engineer – 1
            Software Engineer (Level 1) with a strong frontend focus, building scalable, performant, and visually refined web applications using React, Next.js, and Tailwind CSS. Hands-on experience in Azure IoT solutions, including device-to-cloud communication, real-time dashboards, and MQTT-based data flows.
            Skilled in n8n workflow automation for integrating APIs, automating business processes, and reducing manual operations. Passionate about UI/UX design, crafting intuitive interfaces with a strong emphasis on usability, accessibility, and modern design systems.
            Additionally experienced in digital marketing fundamentals, including landing page optimization, performance tracking, and user-engagement strategies to support product growth. A fast learner who collaborates effectively with cross-functional teams and continuously adapts to new technologies to deliver impactful software solutions.
            </p>
          </div>

          {/* Experience */}
          <div className="glass p-6">
            <p className="text-muted-foreground leading-relaxed">
              I currently work at Lansub Technologies, where I build and maintain
              production-ready web applications, develop reusable UI components,
              and integrate APIs and automation workflows using tools like n8n.
              My focus is on writing clean, scalable code and delivering
              real-world solutions.
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
                "Full-Stack Web Development",
                "AI-Powered Applications",
                "UI / UX Design",
                "Responsive Web Design",
                "Automation using n8n",
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
