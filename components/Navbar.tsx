"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import ThemeToggle from "@/components/ThemeToggle";

const links = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/skills", label: "Skills" },
  { href: "/projects", label: "Projects" },
  { href: "/experience", label: "Experience" },
  { href: "/contact", label: "Contact" },
];

export default function Navbar() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  const isActive = (href: string) =>
    pathname === href
      ? "text-black dark:text-white font-semibold"
      : "text-gray-600 dark:text-gray-400 hover:text-black dark:hover:text-white";

  return (
    <nav className="sticky top-0 z-50 border-b bg-white/80 dark:bg-neutral-900/80 backdrop-blur">
      <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
        
        {/* Logo */}
        <Link href="/" className="text-lg font-bold select-none">
          Arish
        </Link>

        {/* Desktop Navigation (Right aligned) */}
        <div className="hidden md:flex items-center gap-6 select-none">
          {links.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={isActive(link.href)}
            >
              {link.label}
            </Link>
          ))}

          {/* Theme Toggle */}
          <ThemeToggle />

          {/* Download CV */}
          <a
            href="/resume.pdf"
            download
            className="rounded-lg border px-4 py-2 text-sm font-medium
                       hover:bg-gray-50 dark:hover:bg-neutral-800 transition"
          >
            Download CV
          </a>
        </div>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden rounded-lg border px-3 py-2 text-lg select-none"
          onClick={() => setOpen(!open)}
          aria-label="Toggle menu"
        >
          {open ? "✕" : "☰"}
        </button>
      </div>

      {/* Mobile Menu */}
      {open && (
        <div className="md:hidden border-t bg-white dark:bg-neutral-900">
          <div className="flex flex-col gap-4 px-6 py-6 select-none">
            {links.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setOpen(false)}
                className={isActive(link.href)}
              >
                {link.label}
              </Link>
            ))}

            {/* Theme Toggle (Mobile) */}
            <ThemeToggle />

            {/* Download CV */}
            <a
              href="/resume.pdf"
              download
              className="rounded-lg border px-4 py-2 text-sm font-medium
                         hover:bg-gray-50 dark:hover:bg-neutral-800 transition"
            >
              Download CV
            </a>
          </div>
        </div>
      )}
    </nav>
  );
}
