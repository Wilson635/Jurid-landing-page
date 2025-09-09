"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Badge } from "@/components/ui/badge"
import {
  Scale,
  Bot,
  MessageCircle,
  Sparkles,
  Zap,
  Shield,
  Clock,
  ArrowRight,
} from "lucide-react"
import Link from "next/link"

export default function AssistantIAPage() {
  const [question, setQuestion] = useState("")

  const quickQuestions = [
    "Comment créer une SAS ?",
    "Quels sont vos tarifs ?",
    "J'ai besoin d'un contrat commercial",
    "Différence entre SARL et SAS ?",
    "Aide pour un bail commercial",
    "Consultation en droit financier",
  ]

  const features = [
    {
      icon: Zap,
      title: "Réponses Instantanées",
      description:
          "Obtenez des réponses immédiates à vos questions juridiques de base",
    },
    {
      icon: Shield,
      title: "Expertise Juridique",
      description:
          "Basé sur notre expertise de 15+ années en droit des affaires",
    },
    {
      icon: Clock,
      title: "Disponible 24/7",
      description: "Votre assistant juridique est disponible à tout moment",
    },
  ]

  const useCases = [
    {
      title: "Orientation Services",
      description:
          "Trouvez rapidement le service juridique adapté à votre situation",
      examples: ["Quel service pour mon projet ?", "Qui contacter pour un contrat ?"],
    },
    {
      title: "Questions Pratiques",
      description: "Réponses aux questions courantes sur les démarches juridiques",
      examples: ["Comment créer une entreprise ?", "Quels documents fournir ?"],
    },
    {
      title: "Informations Tarifaires",
      description:
          "Estimations et informations sur nos tarifs et prestations",
      examples: ["Combien coûte une création de SAS ?", "Tarifs consultation ?"],
    },
    {
      title: "Prise de Rendez-vous",
      description:
          "Planification simplifiée de vos consultations juridiques",
      examples: ["Prendre rendez-vous", "Consultation urgente"],
    },
  ]

  return (
      <div className="min-h-screen bg-gradient-to-br from-background via-background to-card">
        {/* Header */}
        <header className="bg-card/70 backdrop-blur-md border-b border-border sticky top-0 z-50 shadow-sm">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex h-16 items-center justify-between">
              <Link href="/" className="flex items-center gap-2">
                <Scale className="w-8 h-8 text-primary" />
                <span className="text-xl font-bold text-foreground">
                Cabinet Juridique
              </span>
              </Link>
              <nav className="hidden md:block">
                <div className="ml-10 flex items-baseline space-x-8">
                  {["Accueil","Services","Blog","Boutique","À Propos","Contact"].map((item,i)=>(
                      <Link
                          key={i}
                          href={`/${item.toLowerCase().replace(" ", "")}`}
                          className="text-muted-foreground hover:text-primary transition-colors"
                      >
                        {item}
                      </Link>
                  ))}
                </div>
              </nav>
              <Button className="bg-primary hover:bg-primary/90 text-primary-foreground rounded-full shadow-md">
                Consultation Gratuite
              </Button>
            </div>
          </div>
        </header>

        {/* Hero Section */}
        <section className="bg-gradient-to-br from-card to-background py-20">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                className="text-center max-w-4xl mx-auto"
            >
              <div className="flex items-center justify-center gap-2 mb-6">
                <Bot className="w-12 h-12 text-primary animate-bounce" />
                <Sparkles className="w-8 h-8 text-accent animate-pulse" />
              </div>
              <h1 className="text-4xl md:text-6xl font-extrabold text-foreground mb-6 leading-tight">
                Assistant <span className="text-primary">IA Juridique</span>
              </h1>
              <p className="text-xl text-muted-foreground mb-8">
                Votre guide intelligent pour naviguer dans vos besoins juridiques.
                Posez vos questions, obtenez des réponses instantanées et trouvez
                les services adaptés à votre situation.
              </p>

              {/* Input */}
              <div className="max-w-2xl mx-auto mb-8">
                <div className="flex gap-2 shadow-lg rounded-xl overflow-hidden">
                  <Input
                      value={question}
                      onChange={(e) => setQuestion(e.target.value)}
                      placeholder="Posez votre question juridique..."
                      className="text-lg py-6 bg-background border-0 focus:ring-0"
                  />
                  <Button size="lg" className="bg-primary hover:bg-primary/90 text-primary-foreground px-8 rounded-none">
                    <MessageCircle className="w-5 h-5 mr-2" />
                    Demander
                  </Button>
                </div>
              </div>

              {/* Quick Questions */}
              <div className="flex flex-wrap items-center justify-center gap-2">
              <span className="text-sm text-muted-foreground">
                Questions fréquentes :
              </span>
                {quickQuestions.slice(0, 3).map((q, index) => (
                    <Badge
                        key={index}
                        variant="outline"
                        className="cursor-pointer hover:bg-primary hover:text-primary-foreground transition-all rounded-full px-4 py-1"
                        onClick={() => setQuestion(q)}
                    >
                      {q}
                    </Badge>
                ))}
              </div>
            </motion.div>
          </div>
        </section>

        {/* Features */}
        <section className="py-20 bg-background">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl font-bold text-foreground mb-4">
                Pourquoi Utiliser Notre Assistant IA ?
              </h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                Un outil intelligent conçu pour vous faire gagner du temps et vous
                orienter efficacement
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {features.map((feature, index) => {
                const Icon = feature.icon
                return (
                    <motion.div
                        key={index}
                        initial={{ opacity: 0, y: 40 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: index * 0.2 }}
                    >
                      <Card className="border-border bg-card/60 backdrop-blur-md hover:shadow-lg transition-all text-center p-6 rounded-2xl">
                        <div className="w-16 h-16 bg-primary/10 rounded-xl flex items-center justify-center mx-auto mb-4">
                          <Icon className="w-8 h-8 text-primary" />
                        </div>
                        <CardTitle className="text-xl text-foreground">
                          {feature.title}
                        </CardTitle>
                        <CardDescription className="text-base">
                          {feature.description}
                        </CardDescription>
                      </Card>
                    </motion.div>
                )
              })}
            </div>
          </div>
        </section>
      </div>
  )
}
