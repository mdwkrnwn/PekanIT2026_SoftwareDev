'use client';

import { useTheme } from "next-themes";
import { useEffect, useState } from "react";
import { FaSun } from "react-icons/fa6";
import { IoMoonSharp } from "react-icons/io5";

export default function ThemeSwitcher() {
  const [mounted, setMounted] = useState(false);
  const { setTheme, resolvedTheme } = useTheme();
  useEffect(() => {
    // eslint-disable-next-line react-hooks/set-state-in-effect
    setMounted(true);
  }, []);

  const toggleTheme = () => {
    setTheme(resolvedTheme === 'dark' ? 'light' : 'dark')
  }

  if (!mounted) {
    return (
      <div className="dark:bg-gray-700 flex items-center justify-center w-10 h-10 bg-gray-200 rounded-full">
      </div>
    )
  }

  const currentIcon = resolvedTheme === 'dark' ? (<FaSun className="text-primary fill-primary" size={24} />) :
    (<IoMoonSharp className="fill-primary" size={24} strokeWidth={2} />);

  return (
    <button
      onClick={toggleTheme}
      className="outline-1 outline-primary flex items-center justify-center p-2 transition-colors bg-transparent rounded-full cursor-pointer"
      title={resolvedTheme === 'dark' ? 'Switch to light theme' : 'Switch to dark theme'}
    >
      {currentIcon}
    </button>
  )
};