"use client";

import { useTheme } from "@/context/theme-context";
import React from "react";
import { RxSun, RxMoon } from "react-icons/rx";

export default function ThemeSwitch() {
  const { theme, toggleTheme } = useTheme();

  return (
    <button
      className="bg-white w-[2rem] h-[2rem] bg-opacity-80 backdrop-blur-[0.5rem] border border-black dark:border-white border-opacity-40 shadow-2xl rounded-full flex items-center justify-center hover:scale-[1.15] active:scale-105 transition-all dark:bg-gray-950 dark:text-white"
      onClick={toggleTheme}
    >
      {theme === "light" ? (
        <RxSun />
      ) : (
        <RxMoon className="transform -scale-x-100" />
      )}
    </button>
  );
}
