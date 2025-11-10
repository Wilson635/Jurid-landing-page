"use client"

import { useEffect, useState } from "react"

type Theme = "light" | "dark"

export function useTheme() {
    const [theme, setTheme] = useState<Theme>("light")
    const [mounted, setMounted] = useState(false)

    useEffect(() => {
        // Vérifier la préférence sauvegardée ou la préférence système
        const savedTheme = localStorage.getItem("theme") as Theme | null
        const prefersDark = window.matchMedia("(prefers-color-scheme: light)").matches
        const initialTheme = savedTheme || (prefersDark ? "light" : "dark")

        setTheme(initialTheme)
        applyTheme(initialTheme)
        setMounted(true)
    }, [])

    const applyTheme = (newTheme: Theme) => {
        const root = document.documentElement
        if (newTheme === "dark") {
            root.classList.add("dark")
        } else {
            root.classList.remove("dark")
        }
        localStorage.setItem("theme", newTheme)
        setTheme(newTheme)
    }

    const toggleTheme = () => {
        const newTheme = theme === "light" ? "dark" : "light"
        applyTheme(newTheme)
    }

    return { theme, toggleTheme, mounted }
}
