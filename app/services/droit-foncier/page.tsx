import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Scale, MapPin, Home, FileText, Building2, ArrowLeft, Check, Phone, Mail } from "lucide-react"
import Link from "next/link"

export default function DroitFoncierPage() {
  const subServices = [
    {
      title: "Acquisitions Immobilières",
      description: "Accompagnement complet dans vos projets d'acquisition immobilière",
      icon: Home,
      features: ["Due diligence immobilière", "Négociation des prix", "Rédaction des actes", "Garanties d'éviction"],
    },
    {
      title: "Baux Commerciaux",
      description: "Expertise en matière de baux commerciaux et professionnels",
      icon: Building2,
      features: ["Rédaction de baux", "Révision des loyers", "Cession de bail", "Contentieux locatif"],
    },
    {
      title: "Urbanisme",
      description: "Conseil en droit de l'urbanisme et aménagement du territoire",
      icon: MapPin,
      features: ["Permis de construire", "Autorisations d'urbanisme", "Recours administratifs", "PLU et zonage"],
    },
    {
      title: "Contentieux Foncier",
      description: "Résolution des litiges en matière immobilière et foncière",
      icon: FileText,
      features: ["Troubles de voisinage", "Servitudes", "Copropriété", "Expropriation"],
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
            <span className="text-foreground">Droit Foncier</span>
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
                <MapPin className="w-8 h-8 text-accent" />
              </div>
              <div>
                <h1 className="text-4xl md:text-5xl font-bold text-foreground text-balance">Droit Foncier</h1>
                <p className="text-xl text-muted-foreground mt-2">
                  Transactions immobilières et expertise foncière complète
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Sub-services */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl font-bold text-foreground mb-12 text-center">Notre Expertise Foncière</h2>
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
              <h2 className="text-3xl font-bold text-foreground mb-4">Votre Projet Immobilier</h2>
              <p className="text-lg text-muted-foreground">
                Partagez les détails de votre projet immobilier pour un conseil personnalisé
              </p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
              {/* Contact Form */}
              <Card className="border-border">
                <CardHeader>
                  <CardTitle>Demande de Conseil Foncier</CardTitle>
                  <CardDescription>Décrivez votre projet immobilier pour un accompagnement sur mesure</CardDescription>
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
                    <Input type="tel" placeholder="+33 1 23 45 67 89" />
                  </div>
                  <div>
                    <label className="text-sm font-medium text-foreground mb-2 block">Type de projet</label>
                    <select className="w-full px-3 py-2 border border-border rounded-md bg-input text-foreground">
                      <option>Acquisition immobilière</option>
                      <option>Bail commercial</option>
                      <option>Urbanisme</option>
                      <option>Contentieux foncier</option>
                      <option>Autre</option>
                    </select>
                  </div>
                  <div>
                    <label className="text-sm font-medium text-foreground mb-2 block">
                      Description de votre projet
                    </label>
                    <Textarea
                      placeholder="Décrivez votre projet immobilier, sa localisation, vos objectifs..."
                      rows={4}
                    />
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
                      Équipe Immobilière
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground mb-4">Nos spécialistes en droit foncier et immobilier</p>
                    <div className="space-y-2">
                      <div className="flex items-center gap-2">
                        <Phone className="w-4 h-4 text-accent" />
                        <span className="text-foreground">+33 1 23 45 67 89</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <Mail className="w-4 h-4 text-accent" />
                        <span className="text-foreground">foncier@cabinet-juridique.fr</span>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card className="border-border">
                  <CardHeader>
                    <CardTitle>Pourquoi Nous Faire Confiance ?</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-3">
                      <li className="flex items-start gap-2">
                        <Check className="w-5 h-5 text-accent mt-0.5 flex-shrink-0" />
                        <span className="text-sm text-muted-foreground">Expertise locale et nationale</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <Check className="w-5 h-5 text-accent mt-0.5 flex-shrink-0" />
                        <span className="text-sm text-muted-foreground">Réseau de partenaires immobiliers</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <Check className="w-5 h-5 text-accent mt-0.5 flex-shrink-0" />
                        <span className="text-sm text-muted-foreground">Accompagnement de A à Z</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <Check className="w-5 h-5 text-accent mt-0.5 flex-shrink-0" />
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
    </div>
  )
}
