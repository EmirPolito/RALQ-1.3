"use client";

import * as React from "react";
import { ThemeProvider as NextThemesProvider } from "next-themes";

export function ThemeProvider({
  children,
  ...props
}: React.ComponentProps<typeof NextThemesProvider>) {
  return (
    <NextThemesProvider
      {...props}
      attribute="class"
      defaultTheme="light"   // inicia SIEMPRE en claro
      enableSystem={false}   // ya no usa system
    >
      {children}
    </NextThemesProvider>
  );
}
