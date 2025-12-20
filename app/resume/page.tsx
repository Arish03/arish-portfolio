"use client";

import { useState } from "react";
import PageWrapper from "@/components/PageWrapper";
import PageHeader from "@/components/PageHeader";

export default function ResumePage() {
  const [open, setOpen] = useState(false);

  return (
    <PageWrapper>
      <PageHeader
        label="Resume"
        title="My Resume"
        description="View my resume in an immersive, distraction-free experience."
      />

      {/* Action Buttons */}
      <div className="flex justify-center gap-4">
        <button
          onClick={() => setOpen(true)}
          className="rounded-lg border px-6 py-2 text-sm font-medium
                     bg-white dark:bg-neutral-900
                     hover:bg-gray-50 dark:hover:bg-neutral-800
                     transition"
        >
          View Resume
        </button>

        <a
          href="/resume.pdf"
          download
          className="rounded-lg border px-6 py-2 text-sm font-medium
                     hover:bg-gray-50 dark:hover:bg-neutral-800
                     transition"
        >
          Download PDF
        </a>
      </div>

      {/* MODAL */}
      {open && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center
                     bg-black/40 backdrop-blur-sm"
          onClick={() => setOpen(false)}
        >
          {/* Modal Container */}
          <div
            className="relative w-[95%] md:w-[80%] h-[85vh]
                       glass p-4"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Header */}
            <div className="flex items-center justify-between mb-3">
              <h2 className="text-sm font-semibold">
                Resume Preview
              </h2>

              <div className="flex gap-2">
                <a
                  href="/resume.pdf"
                  download
                  className="text-xs rounded-md border px-3 py-1
                             hover:bg-gray-50 dark:hover:bg-neutral-800"
                >
                  Download
                </a>

                <button
                  onClick={() => setOpen(false)}
                  className="text-xs rounded-md border px-3 py-1
                             hover:bg-gray-50 dark:hover:bg-neutral-800"
                >
                  Close ✕
                </button>
              </div>
            </div>

            {/* Resume Viewer */}
            <div className="w-full h-full rounded-xl overflow-hidden border border-white/20">
              <iframe
                src="/resume.pdf"
                className="w-full h-full"
                title="Resume"
              />
            </div>
          </div>
        </div>
      )}
    </PageWrapper>
  );
}
