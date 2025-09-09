import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Scale, Building, Landmark, MapPin, ArrowRight } from "lucide-react"
import Link from "next/link"

export default function ServicesPage() {
  const services = [
    {
      title: "Consultation Juridique",
      description: "Conseils personnalisés et expertise juridique complète pour tous vos besoins",
      icon: Scale,
      href: "/services/consultation-juridique",
      color: "bg-primary/10 text-primary",
      subServices: [
        "Rédaction des contrats",
        "Création des entreprises",
        "Information juridique documentaire",
        "Conformité & Ingénierie juridique",
      ],
    },
    {
      title: "Droit des Sociétés",
      description: "Accompagnement dans la création, gestion et développement de votre entreprise",
      icon: Building,
      href: "/services/droit-societes",
      color: "bg-accent/10 text-accent",
      subServices: [
        "Constitution de sociétés",
        "Gouvernance d'entreprise",
        "Fusions & acquisitions",
        "Restructurations",
      ],
    },
    {
      title: "Droit Financier & Bancaire",
      description: "Expertise en matière financière, bancaire et d'investissement",
      icon: Landmark,
      href: "/services/droit-financier",
      color: "bg-primary/10 text-primary",
      subServices: ["Droit bancaire", "Crédit bail", "Investissements", "Droit boursier"],
    },
    {
      title: "Droit Foncier",
      description: "Transactions immobilières et expertise foncière complète",
      icon: MapPin,
      href: "/services/droit-foncier",
      color: "bg-accent/10 text-accent",
      subServices: ["Acquisitions immobilières", "Baux commerciaux", "Urbanisme", "Contentieux foncier"],
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

      {/* Hero Section */}
      <section className="py-16 bg-gradient-to-br from-card to-background">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-4xl mx-auto">
            <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-6 text-balance">
              Nos <span className="text-primary">Services Juridiques</span>
            </h1>
            <p className="text-xl text-muted-foreground mb-8 text-pretty">
              Une expertise complète dans tous les domaines du droit pour accompagner vos projets personnels et
              professionnels avec excellence.
            </p>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {services.map((service, index) => {
              const IconComponent = service.icon
              return (
                <Card key={index} className="border-border hover:shadow-lg transition-all duration-300 group">
                  <CardHeader className="pb-4">
                    <div className={`w-16 h-16 rounded-lg flex items-center justify-center mb-4 ${service.color}`}>
                      <IconComponent className="w-8 h-8" />
                    </div>
                    <CardTitle className="text-2xl text-foreground group-hover:text-primary transition-colors">
                      {service.title}
                    </CardTitle>
                    <CardDescription className="text-base">{service.description}</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-3 mb-6">
                      <h4 className="font-semibold text-foreground">Nos expertises :</h4>
                      <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                        {service.subServices.map((subService, subIndex) => (
                          <li key={subIndex} className="flex items-center text-sm text-muted-foreground">
                            <div className="w-1.5 h-1.5 bg-accent rounded-full mr-2 flex-shrink-0" />
                            {subService}
                          </li>
                        ))}
                      </ul>
                    </div>
                    <Link href={service.href}>
                      <Button className="w-full group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
                        En savoir plus
                        <ArrowRight className="w-4 h-4 ml-2" />
                      </Button>
                    </Link>
                  </CardContent>
                </Card>
              )
            })}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-primary text-primary-foreground">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold mb-4">Une Question Juridique ?</h2>
          <p className="text-xl mb-8 opacity-90">Nos experts sont à votre disposition pour vous conseiller</p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Button size="lg" variant="secondary" className="bg-accent text-accent-foreground hover:bg-accent/90">
              Consultation Gratuite
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-primary-foreground text-primary-foreground hover:bg-primary-foreground hover:text-primary bg-transparent"
            >
              Nous Contacter
            </Button>
          </div>
        </div>
      </section>
    </div>
  )
}
