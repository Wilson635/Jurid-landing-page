// ==============================================
// Fichier: /hooks/use-translation.ts
// ==============================================

import { useLanguage, Language } from "./use-language"
import { translations } from "@/lib/translations"

export const useTranslation = () => {
    const { language, toggleLanguage, mounted } = useLanguage()

    // Retourner l'objet de traductions directement
    const t = translations[language]

    // Garder aussi la fonction pour la rétrocompatibilité
    const translate = (key: string): any => {
        const keys = key.split(".")
        let value: any = translations[language]

        for (const k of keys) {
            value = value?.[k]
        }

        return value || key
    }

    return {
        t,              // Objet de traductions pour usage direct: t.home.hero.title
        translate,      // Fonction pour usage avec string: translate("home.hero.title")
        language,
        toggleLanguage,
        mounted
    }
}