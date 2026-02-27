"use client";

import PageWrapper from "@/components/PageWrapper";
import PageHeader from "@/components/PageHeader";
import { motion } from "framer-motion";

export default function ContactPage() {
  // Form handler removed; contact form no longer present

  return (
    <PageWrapper>
      {/* Header */}
      <PageHeader
        label="Contact"
        title="Let’s build something together"
        description="Feel free to reach out for opportunities, collaborations, or frontend projects."
      />

      {/* Contact Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-4xl mx-auto mb-12">
        <div className="card">
          <h3 className="font-semibold">Email</h3>
          <p className="mt-2 text-muted-foreground">
            arishsrinivasan@outlook.com
          </p>
        </div>

        <div className="card">
          <h3 className="font-semibold">GitHub</h3>
          <a
            href="https://github.com/Arish03"
            target="_blank"
            className="mt-2 inline-block text-blue-600 dark:text-blue-400 hover:underline"
          >
            Arish03
          </a>
        </div>

        <div className="card">
          <h3 className="font-semibold">LinkedIn</h3>
          <a
            href="https://www.linkedin.com/in/arishsrinivasank/"
            target="_blank"
            className="mt-2 inline-block text-blue-600 dark:text-blue-400 hover:underline"
          >
            arishsrinivasank
          </a>
        </div>

        <div className="card">
          <h3 className="font-semibold">Mobile</h3>
          <p className="mt-2 text-blue-600 dark:text-blue-400">
            +91 7826961372
          </p>
        </div>

        <div className="card">
          <h3 className="font-semibold">Address</h3>
          <p className="mt-2 text-muted-foreground">
            Vaniyambadi, Thirupattur, Tamil Nadu, India
          </p>
        </div>

        <div className="card">
          <h3 className="font-semibold">Availability</h3>
          <p className="mt-2 text-muted-foreground">
            I am currently open to new opportunities and collaborations.
          </p>
        </div>
      </div>

      {/* Contact Details + FAQ */}
      <motion.div
        initial={{ opacity: 0, y: 16 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="card max-w-4xl mx-auto"
      >
        <h2 className="text-2xl font-bold">Contact Me</h2>
        <p className="mt-2 text-muted-foreground">
          Feel free to reach out via the details above; the form has been
          removed.
        </p>

        {/* FAQ */}
        <div className="mt-10">
          <h3 className="text-lg font-semibold mb-4">FAQ</h3>

          <div className="space-y-3">
            <details className="group rounded-lg border p-4">
              <summary className="cursor-pointer list-none font-medium flex items-center justify-between">
                <span>How long will it take to hear a reply?</span>
                <span className="transition group-open:rotate-180">⌄</span>
              </summary>
              <p className="mt-3 text-muted-foreground">
                I usually respond within 1–3 days depending on availability.
              </p>
            </details>

            <details className="group rounded-lg border p-4">
              <summary className="cursor-pointer list-none font-medium flex items-center justify-between">
                <span>I haven&apos;t heard back yet — what should I do?</span>
                <span className="transition group-open:rotate-180">⌄</span>
              </summary>
              <p className="mt-3 text-muted-foreground">
                Please feel free to send a follow-up message or email.
              </p>
            </details>
          </div>
        </div>
      </motion.div>
    </PageWrapper>
  );
}
