"use client";

import { useTheme } from "next-themes";
import { useEffect, useState } from "react";
import { FaSun } from "react-icons/fa6";
import { IoMoonSharp } from "react-icons/io5";

type ThemeSwitcherProps = {
  className?: string;
};

export default function ThemeSwitcher({ className = "" }: ThemeSwitcherProps) {
  const [mounted, setMounted] = useState(false);
  const { setTheme, resolvedTheme } = useTheme();
  useEffect(() => {
    // eslint-disable-next-line react-hooks/set-state-in-effect
    setMounted(true);
  }, []);

  const toggleTheme = () => {
    setTheme(resolvedTheme === "dark" ? "light" : "dark");
  };

  if (!mounted) {
    return (
      <div className="flex items-center justify-center w-10 h-10 bg-background rounded-full"></div>
    );
  }

  const currentIcon =
    resolvedTheme === "dark" ? (
      <FaSun
        className="text-primary-foreground fill-primary-foreground"
        size={24}
      />
    ) : (
      <IoMoonSharp
        className="fill-primary-foreground"
        size={24}
        strokeWidth={2}
      />
    );

  return (
    <button
      onClick={toggleTheme}
      className={`outline-1 outline-primary-foreground flex items-center justify-center p-2 transition-colors bg-transparent rounded-full cursor-pointer ${className}`}
      title={
        resolvedTheme === "dark"
          ? "Switch to light theme"
          : "Switch to dark theme"
      }
    >
      {currentIcon}
    </button>
  );
}
