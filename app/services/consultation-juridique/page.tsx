import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import {Scale, FileText, Building2, BookOpen, Shield, ArrowLeft, Check, Phone, Mail, Landmark} from "lucide-react"
import Link from "next/link"
import Header from "@/components/ui/header";
import Footer from "@/components/ui/footer";

export default function ConsultationJuridiquePage() {
  const subServices = [
    {
      title: "Rédaction des Contrats",
      description: "Élaboration de contrats sur mesure adaptés à vos besoins spécifiques",
      icon: FileText,
      features: ["Contrats commerciaux", "Contrats de travail", "Contrats de prestation", "Conditions générales"],
    },
    {
      title: "Création des Entreprises",
      description: "Accompagnement complet dans la création et structuration de votre entreprise",
      icon: Building2,
      features: [
        "Choix de la forme juridique",
        "Rédaction des statuts",
        "Formalités administratives",
        "Optimisation fiscale",
      ],
    },
    {
      title: "Information Juridique Documentaire",
      description: "Recherche et analyse juridique approfondie pour éclairer vos décisions",
      icon: BookOpen,
      features: ["Veille juridique", "Analyses réglementaires", "Études de jurisprudence", "Notes de synthèse"],
    },
    {
      title: "Conformité & Ingénierie Juridique",
      description: "Mise en conformité et optimisation de vos structures juridiques",
      icon: Shield,
      features: ["Audit de conformité", "Mise en conformité RGPD", "Restructurations", "Optimisation juridique"],
    },
  ]

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <Header />

      {/* Breadcrumb */}
      <div className="bg-card border-b border-border">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex items-center gap-2 text-sm text-muted-foreground">
            <Link href="/" className="hover:text-primary transition-colors">
              Accueil
            </Link>
            <span>/</span>
            <Link href="/services" className="hover:text-primary transition-colors">
              Services
            </Link>
            <span>/</span>
            <span className="text-foreground">Consultation Juridique</span>
          </div>
        </div>
      </div>

      {/* Hero Section */}
      <div className="bg-white">
        <div className="mx-auto max-w-6xl sm:px-16 lg:px-0 py-12">
          <div
              className="relative isolate overflow-hidden bg-gray-900 px-6 pt-16 shadow-2xl sm:px-16 md:pt-24 lg:flex lg:gap-x-20 lg:px-24 lg:pt-0">
            <svg viewBox="0 0 1024 1024" aria-hidden="true"
                 className="absolute top-1/2 left-1/2 -z-10 size-256 -translate-y-1/2 mask-[radial-gradient(closest-side,white,transparent)] sm:left-full sm:-ml-80 lg:left-1/2 lg:ml-0 lg:-translate-x-1/2 lg:translate-y-0">
              <circle r="512" cx="512" cy="512" fill="url(#759c1415-0410-454c-8f7c-9a820de03641)" fill-opacity="0.7"/>
              <defs>
                <radialGradient id="759c1415-0410-454c-8f7c-9a820de03641">
                  <stop stop-color="#7775D6"/>
                  <stop offset="1" stop-color="#E935C1"/>
                </radialGradient>
              </defs>
            </svg>
            <div className="mx-auto lg:mx-0 lg:flex-auto lg:py-8 text-left">

              <div className="mt-10 flex  gap-x-6 lg:justify-start">
                <Link
                    href="/services"
                    className="inline-flex items-center gap-2 text-white hover:text-white/80 transition-colors mb-6"
                >
                  <ArrowLeft className="w-4 h-4"/>
                  Retour aux services
                </Link>
              </div>
              <div className="flex items-center gap-4 mb-6">
                <div className="w-16 h-16 bg-white/20 rounded-lg flex items-center justify-center">
                  <Scale className="w-8 h-8 text-white" />
                </div>
                <div>
                  <h2 className="text-4xl md:text-5xl font-semibold tracking-tight text-balance text-white">
                    Consultation Juridique
                  </h2>
                  <p className="mt-2 text-xl text-pretty text-gray-300">
                    Conseils personnalisés et expertise juridique complète
                  </p>
                </div>
              </div>


            </div>
          </div>
        </div>
      </div>

      {/* Sub-services */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl font-bold text-foreground mb-12 text-center">Nos Services de Consultation</h2>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {subServices.map((service, index) => {
                const IconComponent = service.icon
                return (
                  <Card key={index} className="border-border hover:shadow-lg py-6 transition-shadow">
                    <CardHeader>
                      <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                        <IconComponent className="w-6 h-6 text-primary" />
                      </div>
                      <CardTitle className="text-xl text-foreground">{service.title}</CardTitle>
                      <CardDescription className="text-base">{service.description}</CardDescription>
                    </CardHeader>
                    <CardContent>
                      <ul className="space-y-2">
                        {service.features.map((feature, featureIndex) => (
                          <li key={featureIndex} className="flex items-center text-sm text-muted-foreground">
                            <Check className="w-4 h-4 text-primary/50 mr-2 flex-shrink-0" />
                            {feature}
                          </li>
                        ))}
                      </ul>
                    </CardContent>
                  </Card>
                )
              })}
            </div>
          </div>
        </div>
      </section>

      {/* Contact Form */}
      <section className="py-16 bg-card">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-foreground mb-4">Demander une Consultation</h2>
              <p className="text-lg text-muted-foreground">
                Décrivez votre situation et nous vous recontacterons rapidement
              </p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
              {/* Contact Form */}
              <Card className="border-border py-6">
                <CardHeader>
                  <CardTitle>Formulaire de Contact</CardTitle>
                  <CardDescription>Remplissez ce formulaire pour une consultation personnalisée</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="text-sm font-medium text-foreground mb-2 block">Prénom</label>
                      <Input placeholder="Votre prénom" />
                    </div>
                    <div>
                      <label className="text-sm font-medium text-foreground mb-2 block">Nom</label>
                      <Input placeholder="Votre nom" />
                    </div>
                  </div>
                  <div>
                    <label className="text-sm font-medium text-foreground mb-2 block">Email</label>
                    <Input type="email" placeholder="votre.email@exemple.com" />
                  </div>
                  <div>
                    <label className="text-sm font-medium text-foreground mb-2 block">Téléphone</label>
                    <Input type="tel" placeholder="+237 6 00 00 00" />
                  </div>
                  <div>
                    <label className="text-sm font-medium text-foreground mb-2 block">Type de consultation</label>
                    <select className="w-full px-3 py-2 border border-border rounded-md bg-input text-foreground">
                      <option>Rédaction de contrats</option>
                      <option>Création d'entreprise</option>
                      <option>Information juridique</option>
                      <option>Conformité juridique</option>
                      <option>Autre</option>
                    </select>
                  </div>
                  <div>
                    <label className="text-sm font-medium text-foreground mb-2 block">
                      Description de votre demande
                    </label>
                    <Textarea placeholder="Décrivez votre situation et vos besoins juridiques..." rows={4} />
                  </div>
                  <Button className="w-full bg-primary hover:bg-primary/90 text-primary-foreground">
                    Envoyer la demande
                  </Button>
                </CardContent>
              </Card>

              {/* Contact Info */}
              <div className="space-y-6">
                <Card className="border-border py-6">
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                      <Phone className="w-5 h-5 text-primary" />
                      Contact Direct
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground mb-4">
                      Pour une consultation urgente, contactez-nous directement
                    </p>
                    <div className="space-y-2">
                      <div className="flex items-center gap-2">
                        <Phone className="w-4 h-4 text-primary/50" />
                        <span className="text-foreground">+237 6 00 00 00</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <Mail className="w-4 h-4 text-primary/50" />
                        <span className="text-foreground">consultation@cabinet-juridique.fr</span>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card className="border-border py-6">
                  <CardHeader>
                    <CardTitle>Pourquoi Nous Choisir ?</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-3">
                      <li className="flex items-start gap-2">
                        <Check className="w-5 h-5 text-primary/50 mt-0.5 flex-shrink-0" />
                        <span className="text-sm text-muted-foreground">
                          15+ années d'expérience en droit des affaires
                        </span>
                      </li>
                      <li className="flex items-start gap-2">
                        <Check className="w-5 h-5 text-primary/50 mt-0.5 flex-shrink-0" />
                        <span className="text-sm text-muted-foreground">Réponse garantie sous 24h</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <Check className="w-5 h-5 text-primary/50 mt-0.5 flex-shrink-0" />
                        <span className="text-sm text-muted-foreground">Première consultation gratuite</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <Check className="w-5 h-5 text-primary/50 mt-0.5 flex-shrink-0" />
                        <span className="text-sm text-muted-foreground">Tarifs transparents et compétitifs</span>
                      </li>
                    </ul>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <Footer />
    </div>
  )
}
