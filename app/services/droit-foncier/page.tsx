import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import {Scale, MapPin, Home, FileText, Building2, ArrowLeft, Check, Phone, Mail, Landmark} from "lucide-react"
import Link from "next/link"
import Header from "@/components/ui/header";
import Footer from "@/components/ui/footer";

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
            <span className="text-foreground">Droit Foncier</span>
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
                  <MapPin className="w-8 h-8 text-white"/>
                </div>
                <div>
                  <h2 className="text-4xl md:text-5xl font-semibold tracking-tight text-balance text-white">
                    Droit Foncier
                  </h2>
                  <p className="mt-2 text-xl text-pretty text-gray-300">
                    Transactions immobilières et expertise foncière complète
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
            <h2 className="text-3xl font-bold text-foreground mb-12 text-center">Notre Expertise Foncière</h2>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {subServices.map((service, index) => {
                const IconComponent = service.icon
                return (
                  <Card key={index} className="border-border hover:shadow-lg transition-shadow">
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
                    <Input type="tel" placeholder="+237 6 00 00 00 " />
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
                        <Phone className="w-4 h-4 text-primary" />
                        <span className="text-foreground">+237 6 00 00 00</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <Mail className="w-4 h-4 text-primary" />
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
                        <Check className="w-5 h-5 text-primary/50 mt-0.5 flex-shrink-0" />
                        <span className="text-sm text-muted-foreground">Expertise locale et nationale</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <Check className="w-5 h-5 text-primary/50 mt-0.5 flex-shrink-0" />
                        <span className="text-sm text-muted-foreground">Réseau de partenaires immobiliers</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <Check className="w-5 h-5 text-primary/50 mt-0.5 flex-shrink-0" />
                        <span className="text-sm text-muted-foreground">Accompagnement de A à Z</span>
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
      <Footer/>
    </div>
  )
}
