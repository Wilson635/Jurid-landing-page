import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Scale, Building, Users, TrendingUp, FileText, ArrowLeft, Check, Phone, Mail } from "lucide-react"
import Link from "next/link"

export default function DroitSocietesPage() {
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
                <Link href="/services" className="text-foreground hover:text-primary transition-colors font-medium">
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
      <section className="py-16 bg-gradient-to-br from-card to-background">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <Link
              href="/services"
              className="inline-flex items-center gap-2 text-primary hover:text-primary/80 transition-colors mb-6"
            >
              <ArrowLeft className="w-4 h-4" />
              Retour aux services
            </Link>
            <div className="flex items-center gap-4 mb-6">
              <div className="w-16 h-16 bg-accent/10 rounded-lg flex items-center justify-center">
                <Building className="w-8 h-8 text-accent" />
              </div>
              <div>
                <h1 className="text-4xl md:text-5xl font-bold text-foreground text-balance">Droit des Sociétés</h1>
                <p className="text-xl text-muted-foreground mt-2">Accompagnement dans la vie de votre entreprise</p>
              </div>
            </div>
          </div>
        </div>
      </section>

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
                  <Card key={index} className="border-border hover:shadow-lg transition-shadow">
                    <CardHeader>
                      <div className="w-12 h-12 bg-accent/10 rounded-lg flex items-center justify-center mb-4">
                        <IconComponent className="w-6 h-6 text-accent" />
                      </div>
                      <CardTitle className="text-xl text-foreground">{service.title}</CardTitle>
                      <CardDescription className="text-base">{service.description}</CardDescription>
                    </CardHeader>
                    <CardContent>
                      <ul className="space-y-2">
                        {service.features.map((feature, featureIndex) => (
                          <li key={featureIndex} className="flex items-center text-sm text-muted-foreground">
                            <Check className="w-4 h-4 text-accent mr-2 flex-shrink-0" />
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
              <Card className="border-border">
                <CardHeader>
                  <CardTitle>Demande de Conseil</CardTitle>
                  <CardDescription>Décrivez votre projet d'entreprise pour un conseil personnalisé</CardDescription>
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
                    <label className="text-sm font-medium text-foreground mb-2 block">Entreprise</label>
                    <Input placeholder="Nom de votre entreprise (optionnel)" />
                  </div>
                  <div>
                    <label className="text-sm font-medium text-foreground mb-2 block">Type de besoin</label>
                    <select className="w-full px-3 py-2 border border-border rounded-md bg-input text-foreground">
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
                    <Textarea placeholder="Décrivez votre projet d'entreprise et vos objectifs..." rows={4} />
                  </div>
                  <Button className="w-full bg-primary hover:bg-primary/90 text-primary-foreground">
                    Envoyer la demande
                  </Button>
                </CardContent>
              </Card>

              {/* Contact Info */}
              <div className="space-y-6">
                <Card className="border-border">
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
                        <Phone className="w-4 h-4 text-accent" />
                        <span className="text-foreground">+33 1 23 45 67 89</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <Mail className="w-4 h-4 text-accent" />
                        <span className="text-foreground">societes@cabinet-juridique.fr</span>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card className="border-border">
                  <CardHeader>
                    <CardTitle>Notre Approche</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-3">
                      <li className="flex items-start gap-2">
                        <Check className="w-5 h-5 text-accent mt-0.5 flex-shrink-0" />
                        <span className="text-sm text-muted-foreground">Analyse personnalisée de votre situation</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <Check className="w-5 h-5 text-accent mt-0.5 flex-shrink-0" />
                        <span className="text-sm text-muted-foreground">Solutions sur mesure et optimisées</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <Check className="w-5 h-5 text-accent mt-0.5 flex-shrink-0" />
                        <span className="text-sm text-muted-foreground">Accompagnement de A à Z</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <Check className="w-5 h-5 text-accent mt-0.5 flex-shrink-0" />
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
    </div>
  )
}
