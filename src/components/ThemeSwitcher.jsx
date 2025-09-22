"use client";

import { useEffect, useState } from "react";
import { useTheme } from "next-themes";
import { FaSun, FaMoon } from "react-icons/fa";
// If you're using shadcn/ui, keep your Button import:
import { Button } from "@/components/ui/button";

export function ThemeToggle() {
  const { resolvedTheme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => setMounted(true), []);
  if (!mounted) return null;

  const isDark = resolvedTheme === "dark";
console.log(resolvedTheme)
  return (
    <Button
      variant="outline"
      size="icon"
      className="relative rounded-full overflow-hidden"
      aria-label="Toggle theme"
      title="Toggle theme"
      onClick={() => setTheme(isDark ? "light" : "dark")}
    >
      {/* Sun (visible in light) */}
      <FaSun
        className="
          absolute h-5 w-5 transition-all duration-300
          rotate-0 scale-100 opacity-100
          dark:-rotate-90 dark:scale-0 dark:opacity-0
        "
      />
      {/* Moon (visible in dark) */}
      <FaMoon
        className="
          absolute h-5 w-5 transition-all duration-300
          rotate-90 scale-0 opacity-0
          dark:rotate-0 dark:scale-100 dark:opacity-100
        "
      />
      {/* Spacer so the button keeps size */}
      <span className="invisible">.</span>
    </Button>
  );
}