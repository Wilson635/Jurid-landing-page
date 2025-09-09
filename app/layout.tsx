import type React from "react"
import type { Metadata } from "next"
import { GeistSans } from "geist/font/sans"
import { GeistMono } from "geist/font/mono"
import { Analytics } from "@vercel/analytics/next"
import { Suspense } from "react"
import ChatWidget from "@/components/chat-widget"
import "./globals.css"

export const metadata: Metadata = {
  title: "Cabinet Juridique - Expert Juridique de Confiance",
  description:
    "Consultation juridique, création d'entreprises, droit des sociétés. Votre expert juridique pour tous vos besoins professionnels.",
  generator: "v0.app",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="fr">
      <body className={`font-sans ${GeistSans.variable} ${GeistMono.variable}`}>
        <Suspense fallback={null}>{children}</Suspense>
        <ChatWidget />
        <Analytics />
      </body>
    </html>
  )
}
