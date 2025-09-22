"use client";

import { ThemeProvider as NextThemesProvider } from "next-themes";

export default function ThemeRoot({ children }) {
  return (
    <NextThemesProvider
      attribute="class"          // adds/removes 'dark' on <html>
      defaultTheme="system"
      enableSystem
      disableTransitionOnChange
    >
      {children}
    </NextThemesProvider>
  );
}