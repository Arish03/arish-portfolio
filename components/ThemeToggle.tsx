"use client";

import { useTheme } from "next-themes";
import { useEffect, useState } from "react";

export default function ThemeToggle() {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => setMounted(true), []);
  if (!mounted) return null;

  return (
    <button
      type="button"
      aria-label="Toggle theme"
      onClick={(e) => {
        e.preventDefault();
        e.stopPropagation();
        setTheme(theme === "dark" ? "light" : "dark");
      }}
      className="rounded-lg border px-3 py-2 text-sm
                 select-none cursor-pointer
                 hover:bg-gray-100 dark:hover:bg-neutral-800
                 transition"
      style={{ WebkitTapHighlightColor: "transparent" }}
    >
      {theme === "dark" ? "☀️" : "🌙"}
    </button>
  );
}
