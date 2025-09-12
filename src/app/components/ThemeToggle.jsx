"use client";
import { Button } from "@/components/ui/button";
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";

export default function ThemeToggle() {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null; // only render after client mounted

  return (
   <Button variant="outline" onClick={() => setTheme(theme === "dark" ? "light" : "dark")}>
      Switch to {theme === "dark" ? "Light" : "Dark"}
    </Button>
   
  );
}

