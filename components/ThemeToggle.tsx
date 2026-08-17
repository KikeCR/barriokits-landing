"use client";

import { useEffect, useState } from "react";
import { useTheme } from "next-themes";
import { Moon, Sun } from "@phosphor-icons/react";

export function ThemeToggle() {
  const { resolvedTheme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const isDark = mounted && resolvedTheme === "dark";

  return (
    <button
      type="button"
      onClick={() => setTheme(isDark ? "light" : "dark")}
      aria-label={mounted ? (isDark ? "Switch to light mode" : "Switch to dark mode") : "Toggle color theme"}
      className="inline-flex h-9 w-9 items-center justify-center rounded-full border border-border text-text-muted transition-colors hover:border-border-strong hover:text-text active:scale-95"
    >
      {mounted ? (
        isDark ? (
          <Sun size={17} weight="bold" />
        ) : (
          <Moon size={17} weight="bold" />
        )
      ) : (
        <span className="block h-[17px] w-[17px]" aria-hidden="true" />
      )}
    </button>
  );
}
