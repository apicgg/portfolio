"use client";

import { ThemeProvider } from "next-themes";

export function NextThemesProviders({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <ThemeProvider
      attribute="class"
      defaultTheme="dark"
      forcedTheme="dark"
      enableSystem={false}
    >
      {children}
    </ThemeProvider>
  );
}
