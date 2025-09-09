import type React from "react"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Blog Juridique - Cabinet Juridique",
  description: "Actualités, conseils pratiques et analyses juridiques pour vous accompagner dans vos décisions.",
}

export default function BlogLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return children
}
