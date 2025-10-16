import {Button} from "@/components/ui/button"
import {Card, CardContent, CardDescription, CardHeader, CardTitle} from "@/components/ui/card"
import {ArrowRight, Building, Landmark, MapPin, Scale} from "lucide-react"
import Link from "next/link"
import Header from "@/components/ui/header";
import Footer from "@/components/ui/footer";

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
      color: "bg-primary/10 text-primary", /*"bg-accent/10 text-accent"*/
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
      color: "bg-primary/10 text-primary", /*"bg-accent/10 text-accent"*/
      subServices: ["Acquisitions immobilières", "Baux commerciaux", "Urbanisme", "Contentieux foncier"],
    },
  ]

  return (
      <div className="min-h-screen bg-background">
        {/* Header */}
        <Header/>
        {/*<header className="bg-card border-b border-border sticky top-0 z-50">
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
      </header>*/}


        <div className="relative isolate overflow-hidden bg-white px-6 py-24 sm:py-32 lg:overflow-visible lg:px-0">
          <div className="absolute inset-0 -z-10 overflow-hidden">
            <svg aria-hidden="true"
                 className="absolute top-0 left-[max(50%,25rem)] h-256 w-512 -translate-x-1/2 mask-[radial-gradient(64rem_64rem_at_top,white,transparent)] stroke-gray-200">
              <defs>
                <pattern id="e813992c-7d03-4cc4-a2bd-151760b470a0" width="200" height="200" x="50%" y="-1"
                         patternUnits="userSpaceOnUse">
                  <path d="M100 200V.5M.5 .5H200" fill="none"/>
                </pattern>
              </defs>
              <svg x="50%" y="-1" className="overflow-visible fill-gray-50">
                <path
                    d="M-100.5 0h201v201h-201Z M699.5 0h201v201h-201Z M499.5 400h201v201h-201Z M-300.5 600h201v201h-201Z"
                    stroke-width="0"/>
              </svg>
              <rect width="100%" height="100%" fill="url(#e813992c-7d03-4cc4-a2bd-151760b470a0)" stroke-width="0"/>
            </svg>
          </div>
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center max-w-4xl mx-auto">
              <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
                Nos <span className="text-primary">Services Juridiques</span>
              </h1>
              <p className="text-xl text-muted-foreground mb-8">
                Une expertise complète dans tous les domaines du droit pour accompagner vos projets personnels et
                professionnels avec excellence.
              </p>
            </div>
          </div>
        </div>


        {/* Services Grid */}
        <section className="py-16 bg-background">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {services.map((service, index) => {
                const IconComponent = service.icon
                return (
                    <Card key={index} className="border-border hover:shadow-lg py-6 transition-all duration-300 group">
                      <CardHeader className="pb-4">
                        <div className={`w-16 h-16 rounded-lg flex items-center justify-center mb-4 ${service.color}`}>
                          <IconComponent className="w-8 h-8"/>
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
                                  <div className="w-1.5 h-1.5 bg-accent rounded-full mr-2 flex-shrink-0"/>
                                  {subService}
                                </li>
                            ))}
                          </ul>
                        </div>
                        <Link href={service.href}>
                          <Button
                              className="w-full group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
                            En savoir plus
                            <ArrowRight className="w-4 h-4 ml-2"/>
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
        {/*<section className="relative py-16 bg-gradient-to-br from-black via-black to-black/50 text-primary-foreground overflow-hidden">

        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold mb-4">Une Question Juridique ?</h2>
          <p className="text-xl mb-8 opacity-90">
            Nos experts sont à votre disposition pour vous conseiller
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Button
                size="lg"
                variant="secondary"
                className="bg-accent text-accent-foreground hover:bg-accent/90"
            >
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
      </section>*/}

        <div className="relative py-16  overflow-hidden bg-black isolate">
          <div className="container mx-auto px-4 sm:px-6 text-white lg:px-8 text-center">
            <h2 className="text-3xl font-bold mb-4">Une Question Juridique ?</h2>
            <p className="text-xl mb-8 opacity-90">
              Nos experts sont à votre disposition pour vous conseiller
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Button
                  size="lg"
                  variant="secondary"
                  className="bg-accent text-accent-foreground hover:bg-accent/90"
              >
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
          <div className="absolute top-0 -translate-x-1/2 left-1/2 -z-10 blur-3xl xl:-top-6" aria-hidden="true">
            <div
                className="aspect-[1155/678] w-[72.1875rem] bg-gradient-to-tr from-[#ff80b5] to-[#9089fc] opacity-30"
                style={{
                  clipPath:
                      'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)',
                }}
            />
          </div>

          <div className="absolute bottom-0 -translate-x-1/2 right-1 -z-10 blur-3xl xl:-bottom-6" aria-hidden="true">
            <div
                className="aspect-[1155/678] w-[72.1875rem] bg-gradient-to-tr from-[#ff80b5] to-[#9089fc] opacity-30"
                style={{
                  clipPath:
                      'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)',
                }}
            />
          </div>
        </div>


        {/* Footer */}
        <Footer/>
      </div>
  )
}
