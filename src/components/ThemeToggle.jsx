"use client";

import { Switch } from "@heroui/react";
import { Moon, Sun } from "lucide-react";
import { useTheme } from "next-themes";

export function ThemeToggle() {
     const { theme, setTheme } = useTheme();
  return (
    <Switch onChange={()=> setTheme(theme === 'dark'? 'light' : 'dark')}>
      {({ isSelected }) => (
        <>
          <Switch.Control
            className={`flex justify-center h-10 w-10 rounded-full bg-white hover:bg-gray-200 ${isSelected ? "bg-gray-600 hover:bg-gray-800" : ""}`}
          >
            <Switch.Icon>
              {isSelected ? (
                <Sun className="size-6 text-white" />
              ) : (
                <Moon className="size-6 text-black" />
              )}
            </Switch.Icon>
          </Switch.Control>
        </>
      )}
    </Switch>
  );
}
