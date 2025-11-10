"use client"

import { useTheme } from "@/hooks/use-theme"
import { Moon, Sun } from "lucide-react"
import { Button } from "@/components/ui/button"
export function ThemeToggle() {
    const { theme, toggleTheme, mounted } = useTheme()

    if (!mounted) return null

    return (
        <div className="flex items-center gap-2">
            <Button
                variant="outline"
                size="icon"
                onClick={toggleTheme}
                title={theme === "light" ? "Switch to dark mode" : "Switch to light mode"}
            >
                {theme === "light" ? <Moon className="h-6 w-6" /> : <Sun className="h-6 w-6" />}
            </Button>
        </div>
    )
}
