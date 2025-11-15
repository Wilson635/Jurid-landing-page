// ==============================================
// Fichier 1: /hooks/use-language.ts
// ==============================================

import { useEffect, useState } from "react"

export type Language = "fr" | "en"

export const useLanguage = () => {
    const [language, setLanguage] = useState<Language>("fr")
    const [mounted, setMounted] = useState(false)

    useEffect(() => {
        setMounted(true)
        const savedLanguage = localStorage.getItem("adminLanguage") as Language | null
        if (savedLanguage) {
            setLanguage(savedLanguage)
        }
    }, [])

    const toggleLanguage = () => {
        const newLanguage: Language = language === "fr" ? "en" : "fr"
        setLanguage(newLanguage)
        localStorage.setItem("adminLanguage", newLanguage)
    }

    return { language, toggleLanguage, mounted }
}

// ==============================================
// Fichier 4: Exemple d'utilisation dans une page
// ==============================================

/*
import { useTranslation } from "@/hooks/use-translation"
import { Languages } from "lucide-react"

export default function MyPage() {
  const { t, language, toggleLanguage } = useTranslation()

  return (
    <div>
      <h1>{t("dashboard.title")}</h1>
      <p>{t("dashboard.subtitle")}</p>

      <Button onClick={toggleLanguage}>
        <Languages className="w-4 h-4 mr-1" />
        {language === "fr" ? "EN" : "FR"}
      </Button>

      <p>{t("articles.title")}</p>
      <p>{t("consultations.totalRequests")}</p>
    </div>
  )
}
*/