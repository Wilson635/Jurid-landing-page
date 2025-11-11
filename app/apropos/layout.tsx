import type React from "react"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "À Propos - Maître Noffe | Cabinet Juridique",
  description:
    "Découvrez le parcours et l'expertise de Maître Sophie Martin, avocate spécialisée en droit des affaires avec plus de 15 années d'expérience.",
}

export default function AProposLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return children
}
