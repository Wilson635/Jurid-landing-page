"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Badge } from "@/components/ui/badge"
import { Scale, Bot, MessageCircle, Sparkles, Zap, Shield, Clock, ArrowRight } from "lucide-react"
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
      description: "Obtenez des réponses immédiates à vos questions juridiques de base",
    },
    {
      icon: Shield,
      title: "Expertise Juridique",
      description: "Basé sur notre expertise de 15+ années en droit des affaires",
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
      description: "Trouvez rapidement le service juridique adapté à votre situation",
      examples: ["Quel service pour mon projet ?", "Qui contacter pour un contrat ?"],
    },
    {
      title: "Questions Pratiques",
      description: "Réponses aux questions courantes sur les démarches juridiques",
      examples: ["Comment créer une entreprise ?", "Quels documents fournir ?"],
    },
    {
      title: "Informations Tarifaires",
      description: "Estimations et informations sur nos tarifs et prestations",
      examples: ["Combien coûte une création de SAS ?", "Tarifs consultation ?"],
    },
    {
      title: "Prise de Rendez-vous",
      description: "Planification simplifiée de vos consultations juridiques",
      examples: ["Prendre rendez-vous", "Consultation urgente"],
    },
  ]

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="bg-card border-b border-border sticky top-0 z-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex h-16 items-center justify-between">
            <div className="flex items-center">
              <Link href="/" className="flex items-center gap-2">
                <Scale className="w-8 h-8 text-primary" />
                <span className="text-xl font-bold text-foreground">Cabinet Juridique</span>
              </Link>
            </div>
            <nav className="hidden md:block">
              <div className="ml-10 flex items-baseline space-x-8">
                <Link href="/" className="text-muted-foreground hover:text-primary transition-colors">
                  Accueil
                </Link>
                <Link href="/services" className="text-muted-foreground hover:text-primary transition-colors">
                  Services
                </Link>
                <Link href="/blog" className="text-muted-foreground hover:text-primary transition-colors">
                  Blog
                </Link>
                <Link href="/boutique" className="text-muted-foreground hover:text-primary transition-colors">
                  Boutique
                </Link>
                <Link href="/apropos" className="text-muted-foreground hover:text-primary transition-colors">
                  À Propos
                </Link>
                <Link href="/contact" className="text-muted-foreground hover:text-primary transition-colors">
                  Contact
                </Link>
              </div>
            </nav>
            <Button className="bg-primary hover:bg-primary/90 text-primary-foreground">Consultation Gratuite</Button>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-card to-background">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-4xl mx-auto">
            <div className="flex items-center justify-center gap-2 mb-6">
              <Bot className="w-12 h-12 text-primary" />
              <Sparkles className="w-8 h-8 text-accent" />
            </div>
            <h1 className="text-4xl md:text-6xl font-bold text-foreground mb-6 text-balance">
              Assistant <span className="text-primary">IA Juridique</span>
            </h1>
            <p className="text-xl text-muted-foreground mb-8 text-pretty">
              Votre guide intelligent pour naviguer dans vos besoins juridiques. Posez vos questions, obtenez des
              réponses instantanées et trouvez les services adaptés à votre situation.
            </p>

            {/* Quick Question Input */}
            <div className="max-w-2xl mx-auto mb-8">
              <div className="flex gap-2">
                <Input
                  value={question}
                  onChange={(e) => setQuestion(e.target.value)}
                  placeholder="Posez votre question juridique..."
                  className="text-lg py-6 bg-background border-border"
                />
                <Button size="lg" className="bg-primary hover:bg-primary/90 text-primary-foreground px-8">
                  <MessageCircle className="w-5 h-5 mr-2" />
                  Demander
                </Button>
              </div>
            </div>

            {/* Quick Questions */}
            <div className="flex flex-wrap items-center justify-center gap-2 mb-8">
              <span className="text-sm text-muted-foreground mr-2">Questions fréquentes :</span>
              {quickQuestions.slice(0, 3).map((q, index) => (
                <Badge
                  key={index}
                  variant="outline"
                  className="cursor-pointer hover:bg-primary hover:text-primary-foreground transition-colors"
                  onClick={() => setQuestion(q)}
                >
                  {q}
                </Badge>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-foreground mb-4">Pourquoi Utiliser Notre Assistant IA ?</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Un outil intelligent conçu pour vous faire gagner du temps et vous orienter efficacement
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {features.map((feature, index) => {
              const IconComponent = feature.icon
              return (
                <Card key={index} className="border-border text-center">
                  <CardHeader>
                    <div className="w-16 h-16 bg-primary/10 rounded-lg flex items-center justify-center mx-auto mb-4">
                      <IconComponent className="w-8 h-8 text-primary" />
                    </div>
                    <CardTitle className="text-xl text-foreground">{feature.title}</CardTitle>
                    <CardDescription className="text-base">{feature.description}</CardDescription>
                  </CardHeader>
                </Card>
              )
            })}
          </div>
        </div>
      </section>

      {/* Use Cases */}
      <section className="py-16 bg-card">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-foreground mb-4">Comment l'Assistant Peut Vous Aider</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Découvrez les différentes façons dont notre IA peut vous accompagner
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {useCases.map((useCase, index) => (
              <Card key={index} className="border-border">
                <CardHeader>
                  <CardTitle className="text-xl text-foreground">{useCase.title}</CardTitle>
                  <CardDescription className="text-base">{useCase.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-2">
                    <p className="text-sm font-medium text-muted-foreground">Exemples de questions :</p>
                    {useCase.examples.map((example, exampleIndex) => (
                      <div key={exampleIndex} className="flex items-center gap-2">
                        <ArrowRight className="w-3 h-3 text-accent flex-shrink-0" />
                        <span className="text-sm text-foreground">"{example}"</span>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Demo Section */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-foreground mb-4">Essayez Maintenant</h2>
              <p className="text-lg text-muted-foreground">Testez notre assistant avec ces questions courantes</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {quickQuestions.map((question, index) => (
                <Card
                  key={index}
                  className="border-border hover:shadow-md transition-shadow cursor-pointer group"
                  onClick={() => setQuestion(question)}
                >
                  <CardContent className="p-4">
                    <div className="flex items-center justify-between">
                      <span className="text-sm text-foreground group-hover:text-primary transition-colors">
                        {question}
                      </span>
                      <MessageCircle className="w-4 h-4 text-muted-foreground group-hover:text-primary transition-colors" />
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-primary text-primary-foreground">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold mb-4">Prêt à Commencer ?</h2>
          <p className="text-xl mb-8 opacity-90">
            Utilisez notre assistant IA ou contactez directement nos experts pour une consultation personnalisée
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Button size="lg" variant="secondary" className="bg-accent text-accent-foreground hover:bg-accent/90">
              <Bot className="w-5 h-5 mr-2" />
              Utiliser l'Assistant IA
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-primary-foreground text-primary-foreground hover:bg-primary-foreground hover:text-primary bg-transparent"
            >
              Consultation Humaine
            </Button>
          </div>
        </div>
      </section>
    </div>
  )
}
