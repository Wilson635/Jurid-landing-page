"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Scale, Building, Users, TrendingUp, FileText, ArrowLeft, Check, Phone, Mail } from "lucide-react"
import Link from "next/link"
import Header from "@/components/ui/header";
import Footer from "@/components/ui/footer";
import {useState} from "react";

export default function DroitSocietesPage() {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    company: "",
    needType: "Création d'entreprise",
    projectDescription: "",
  })

  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitMessage, setSubmitMessage] = useState("")


  const subServices = [
    {
      title: "Constitution de Sociétés",
      description: "Création et structuration juridique de votre entreprise selon vos objectifs",
      icon: Building,
      features: ["Choix de la forme juridique", "Rédaction des statuts", "Immatriculation", "Capital social"],
    },
    {
      title: "Gouvernance d'Entreprise",
      description: "Organisation et optimisation de la gouvernance de votre société",
      icon: Users,
      features: ["Pactes d'actionnaires", "Règlements intérieurs", "Assemblées générales", "Conseils d'administration"],
    },
    {
      title: "Fusions & Acquisitions",
      description: "Accompagnement dans vos opérations de croissance externe",
      icon: TrendingUp,
      features: ["Due diligence juridique", "Négociation des accords", "Structuration des opérations", "Closing"],
    },
    {
      title: "Restructurations",
      description: "Réorganisation et optimisation de vos structures societaires",
      icon: FileText,
      features: ["Restructurations fiscales", "Apports-fusions", "Scissions", "Transformations"],
    },
  ]

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()

    //validation simple
    if (!formData.firstName || !formData.lastName || !formData.email || !formData.company || !formData.projectDescription) {
      setSubmitMessage("Veuillez remplir tous les champs requis.")
      setTimeout(() => setSubmitMessage(""), 3000)
      return
    }

    setIsSubmitting(true)

    // Send form data to backend
    const projet = {
      id: Date.now().toString(),
      ...formData,
      date: new Date().toLocaleDateString('fr-FR', {
        day: 'numeric',
        month: 'long',
        year: 'numeric'
      }),
      status: "En attente",
      createdAt: new Date().toISOString(),
      service: "Droit des Sociétés",
    }

    // Take an existing project from localStorage if any
    const savedProjects = localStorage.getItem("userProjects")
    const projects = savedProjects ? JSON.parse(savedProjects) : []

    // Save the new project
    projects.push(projet)
    localStorage.setItem("userProjects", JSON.stringify(projects))
    setIsSubmitting(false)
    setSubmitMessage("Votre projet a été envoyée avec succès !")
    // Reset form
    setFormData({
      firstName: "",
      lastName: "",
      email: "",
      company: "",
      needType: "Création d'entreprise",
      projectDescription: "",
    })
    setTimeout(() => setSubmitMessage(""), 3000)
  }

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <Header/>

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
            <span className="text-foreground">Droit des Sociétés</span>
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
                  <Building className="w-8 h-8 text-white" />
                </div>
                <div>
                  <h2 className="text-4xl md:text-5xl font-semibold tracking-tight text-balance text-white">
                    Droit des Sociétés
                  </h2>
                  <p className="mt-2 text-xl text-pretty text-gray-300">
                    Accompagnement dans la vie de votre entreprise
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
            <h2 className="text-3xl font-bold text-foreground mb-12 text-center">
              Notre Expertise en Droit des Sociétés
            </h2>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {subServices.map((service, index) => {
                const IconComponent = service.icon
                return (
                  <Card key={index} className="border-border hover:shadow-lg transition-shadow py-6">
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
              <h2 className="text-3xl font-bold text-foreground mb-4">Votre Projet d'Entreprise</h2>
              <p className="text-lg text-muted-foreground">
                Parlons de votre projet et trouvons ensemble les meilleures solutions juridiques
              </p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
              {/* Contact Form */}
              <Card className="border-border py-6">
                <CardHeader>
                  <CardTitle>Demande de Conseil</CardTitle>
                  <CardDescription>Décrivez votre projet d'entreprise pour un conseil personnalisé</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  {submitMessage && (
                      <div className={`p-4 rounded-lg ${
                          submitMessage.includes("succès")
                              ? "bg-green-50 text-green-800 border border-green-200"
                              : "bg-red-50 text-red-800 border border-red-200"
                      }`}>
                        {submitMessage}
                      </div>
                  )}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="text-sm font-medium text-foreground mb-2 block">Prénom</label>
                      <Input placeholder="Votre prénom" value={formData.firstName} onChange={(e) => setFormData({ ...formData, firstName: e.target.value })} />
                    </div>
                    <div>
                      <label className="text-sm font-medium text-foreground mb-2 block">Nom</label>
                      <Input placeholder="Votre nom" value={formData.lastName} onChange={(e) => setFormData({ ...formData, lastName: e.target.value })} />
                    </div>
                  </div>
                  <div>
                    <label className="text-sm font-medium text-foreground mb-2 block">Email</label>
                    <Input type="email" placeholder="votre.email@exemple.com" value={formData.email} onChange={(e) => setFormData({ ...formData, email: e.target.value })} />
                  </div>
                  <div>
                    <label className="text-sm font-medium text-foreground mb-2 block">Entreprise</label>
                    <Input placeholder="Nom de votre entreprise (optionnel)" value={formData.company} onChange={(e) => setFormData({ ...formData, company: e.target.value })} />
                  </div>
                  <div>
                    <label className="text-sm font-medium text-foreground mb-2 block">Type de besoin</label>
                    <select className="w-full px-3 py-2 border border-border rounded-md bg-input text-foreground" value={formData.needType} onChange={(e) => setFormData({ ...formData, needType: e.target.value })}>
                      <option>Création d'entreprise</option>
                      <option>Gouvernance</option>
                      <option>Fusion/Acquisition</option>
                      <option>Restructuration</option>
                      <option>Autre</option>
                    </select>
                  </div>
                  <div>
                    <label className="text-sm font-medium text-foreground mb-2 block">
                      Description de votre projet
                    </label>
                    <Textarea placeholder="Décrivez votre projet d'entreprise et vos objectifs..." rows={4} value={formData.projectDescription} onChange={(e) => setFormData({ ...formData, projectDescription: e.target.value })} />
                  </div>
                  <Button className="w-full bg-primary hover:bg-primary/90 text-primary-foreground" onClick={handleSubmit} disabled={isSubmitting}>
                    {isSubmitting ? "Envoi en cours..." : "Envoyer la demande"}
                  </Button>
                </CardContent>
              </Card>

              {/* Contact Info */}
              <div className="space-y-6">
                <Card className="border-border py-6">
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                      <Phone className="w-5 h-5 text-primary" />
                      Contact Spécialisé
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground mb-4">Notre équipe spécialisée en droit des sociétés</p>
                    <div className="space-y-2">
                      <div className="flex items-center gap-2">
                        <Phone className="w-4 h-4 text-primary" />
                        <span className="text-foreground">+237 6 00 00 00</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <Mail className="w-4 h-4 text-primary" />
                        <span className="text-foreground">societes@cabinet-juridique.fr</span>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card className="border-border py-6">
                  <CardHeader>
                    <CardTitle>Notre Approche</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-3">
                      <li className="flex items-start gap-2">
                        <Check className="w-5 h-5 text-primary/50 mt-0.5 flex-shrink-0" />
                        <span className="text-sm text-muted-foreground">Analyse personnalisée de votre situation</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <Check className="w-5 h-5 text-primary/50 mt-0.5 flex-shrink-0" />
                        <span className="text-sm text-muted-foreground">Solutions sur mesure et optimisées</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <Check className="w-5 h-5 text-primary/50 mt-0.5 flex-shrink-0" />
                        <span className="text-sm text-muted-foreground">Accompagnement de A à Z</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <Check className="w-5 h-5 text-primary/50 mt-0.5 flex-shrink-0" />
                        <span className="text-sm text-muted-foreground">Suivi post-création</span>
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
      <Footer/>
    </div>
  )
}
