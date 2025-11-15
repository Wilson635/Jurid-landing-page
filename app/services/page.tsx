"use client"

import {Button} from "@/components/ui/button"
import {Card, CardContent, CardDescription, CardHeader, CardTitle} from "@/components/ui/card"
import {ArrowRight, Building, Landmark, MapPin, Scale} from "lucide-react"
import Link from "next/link"
import Header from "@/components/ui/header"
import Footer from "@/components/ui/footer"
import { useTranslation } from "@/hooks/use-translation"

export default function ServicesPage() {
  const { t } = useTranslation()

  const services = [
    {
      title: t.services.cards.consultation.title,
      description: t.services.cards.consultation.description,
      icon: Scale,
      href: "/services/consultation-juridique",
      color: "bg-primary/10 text-primary",
      subServices: t.services.cards.consultation.items,
    },
    {
      title: t.services.cards.corporate.title,
      description: t.services.cards.corporate.description,
      icon: Building,
      href: "/services/droit-societes",
      color: "bg-primary/10 text-primary",
      subServices: t.services.cards.corporate.items,
    },
    {
      title: t.services.cards.financial.title,
      description: t.services.cards.financial.description,
      icon: Landmark,
      href: "/services/droit-financier",
      color: "bg-primary/10 text-primary",
      subServices: t.services.cards.financial.items,
    },
    {
      title: t.services.cards.landLaw.title,
      description: t.services.cards.landLaw.description,
      icon: MapPin,
      href: "/services/droit-foncier",
      color: "bg-primary/10 text-primary",
      subServices: t.services.cards.landLaw.items,
    },
  ]

  return (
      <div className="min-h-screen bg-background">
        {/* Header */}
        <Header/>


        <div className="relative isolate overflow-hidden bg-white dark:bg-black px-6 py-24 sm:py-32 lg:overflow-visible lg:px-0">
          <div className="absolute inset-0 -z-10 overflow-hidden">
            <svg aria-hidden="true"
                 className="absolute top-0 left-[max(50%,25rem)] h-256 w-512 -translate-x-1/2 mask-[radial-gradient(64rem_64rem_at_top,white,transparent)] stroke-gray-200 dark:stroke-gray-700">
              <defs>
                <pattern id="e813992c-7d03-4cc4-a2bd-151760b470a0" width="200" height="200" x="50%" y="-1"
                         patternUnits="userSpaceOnUse">
                  <path d="M100 200V.5M.5 .5H200" fill="none"/>
                </pattern>
              </defs>
              <svg x="50%" y="-1" className="overflow-visible fill-gray-50 dark:fill-gray-800">
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
                {t.services.hero.title} <span className="text-primary">{t.services.hero.titleHighlight}</span>
              </h1>
              <p className="text-xl text-muted-foreground mb-8">
                {t.services.hero.subtitle}
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
                          <h4 className="font-semibold text-foreground">{t.services.expertises}</h4>
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
                            {t.services.learnMore}
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
        <div className="relative py-16  overflow-hidden bg-black isolate">
          <div className="container mx-auto px-4 sm:px-6 text-white lg:px-8 text-center">
            <h2 className="text-3xl font-bold mb-4">{t.services.cta.title}</h2>
            <p className="text-xl mb-8 opacity-90">
              {t.services.cta.subtitle}
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Button
                  size="lg"
                  variant="secondary"
                  className="bg-accent text-accent-foreground hover:bg-accent/90"
              >
                {t.services.cta.freeConsultation}
              </Button>
              <Button
                  size="lg"
                  variant="outline"
                  className="border-primary-foreground text-primary-foreground hover:bg-primary-foreground hover:text-primary bg-transparent"
              >
                {t.services.cta.contactUs}
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