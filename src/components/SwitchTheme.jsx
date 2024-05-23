"use client";
import { Switch } from "@headlessui/react";
import { useTheme } from "next-themes";
import { MoonIcon, SunIcon } from "@radix-ui/react-icons";

import { useState } from "react";

function Toggle() {
  const { theme, setTheme } = useTheme();
  const [isDarkMode, setIsDarkMode] = useState(false);

  const handleChange = () => {
    setTheme(theme === "light" ? "dark" : "light");
    setIsDarkMode(!isDarkMode);
  };
  return (
    <div className="flex items-center py-2  gap-2 justify-end mr-6">
      <MoonIcon
        className={`${
          isDarkMode && "bg-[#f4f6fa]"
        } h-[1.5rem] w-[1.5rem]  m-1 rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100`}
      />
      <Switch
        checked={isDarkMode}
        onChange={handleChange}
        className={`${
          isDarkMode ? "bg-[#8d3dcb]" : "bg-[#8d3dcb]"
        } relative inline-flex h-7 w-10  items-center  rounded-full `}
      >
        <span className="sr-only">Enable notifications</span>
        <span
          className={`${
            isDarkMode ? "translate-x-4" : "translate-x-1"
          } inline-block h-5 w-5  transform rounded-full bg-white transition`}
        />
      </Switch>
      <SunIcon className=" h-[1.5rem] w-[1.5rem]  rotate-0 scale-100 m-1 transition-all dark:-rotate-90 dark:scale-0" />
    </div>
  );
}

export default Toggle;
