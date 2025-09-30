import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import {
  Scale,
  FileText,
  Building,
  Users,
  MessageCircle,
  ShoppingCart,
  BookOpen,
  Phone,
  Mail,
  MapPin,
} from "lucide-react"
import Link from "next/link"
import Footer from "@/components/ui/footer";
import Header from "@/components/ui/header";

export default function LegalHomePage() {
  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <Header />

      {/* Hero Section */}
      <section className="px-6 py-24 sm:py-32 relative rounded-lg overflow-hidden before:absolute before:top-0 before:start-1/2 bg-[url('https://preline.co/assets/svg/examples/polygon-bg-element.svg')] before:bg-[url('https://preline.co/assets/svg/examples-dark/polygon-bg-element.svg')] bg-no-repeat bg-top :bg-cover before:size-full before:-z-[1] before:transform before:-translate-x-1/2">
        {/* Pattern Background */}
        <div className="absolute inset-0 -z-10 overflow-hidden">
          <svg
              aria-hidden="true"
              className="absolute inset-0 h-full w-full stroke-gray-200/40"
          >
            <defs>
              <pattern
                  id="circle-pattern"
                  width="100"
                  height="100"
                  patternUnits="userSpaceOnUse"
              >
                <circle cx="1" cy="1" r="1" fill="currentColor" />
              </pattern>
            </defs>
            <rect
                width="100%"
                height="100%"
                fill="url(#circle-pattern)"
                className="text-gray-100"
            />
          </svg>
        </div>

        {/* Content */}
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="text-center max-w-4xl mx-auto">
            <h1 className="text-4xl md:text-6xl font-bold text-foreground mb-6 text-balance">
              Votre <span className="text-primary">Expert Juridique</span> de Confiance
            </h1>
            <p className="text-xl text-muted-foreground mb-8 text-pretty">
              Consultation juridique, création d'entreprises, rédaction de contrats et
              bien plus. Bénéficiez d'un accompagnement professionnel pour tous vos
              besoins juridiques.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-12">
              <Button size="lg" className="bg-primary hover:bg-primary/90 text-primary-foreground px-8 py-4">
                <Phone className="w-5 h-5 mr-2" />
                Consultation Immédiate
              </Button>
              <Button variant="outline" size="lg" className="px-8 py-4 bg-transparent">
                <FileText className="w-5 h-5 mr-2" />
                Nos Services
              </Button>
            </div>

            {/* Trust Indicators */}
            <div className="flex flex-wrap items-center justify-center gap-8 text-sm text-muted-foreground">
              <div className="flex items-center gap-2">
                <Scale className="w-4 h-4 text-primary/50" />
                <span>10+ ans d'expérience</span>
              </div>
              <div className="flex items-center gap-2">
                <Users className="w-4 h-4 text-primary/50" />
                <span>500+ clients satisfaits</span>
              </div>
              <div className="flex items-center gap-2">
                <FileText className="w-4 h-4 text-primary/50" />
                <span>Tous domaines juridiques</span>
              </div>
            </div>
          </div>
        </div>
      </section>


      {/* Services Overview */}
      <section id="services" className="py-16 bg-background">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-foreground mb-4">Nos Domaines d'Expertise</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Un accompagnement complet dans tous vos projets juridiques
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
            {/* Consultation Juridique */}
            <Card className="border-border hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                  <Scale className="w-6 h-6 text-primary" />
                </div>
                <CardTitle className="text-foreground">Consultation Juridique</CardTitle>
                <CardDescription>Conseils personnalisés et expertise juridique complète</CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li>• Rédaction des contrats</li>
                  <li>• Création des entreprises</li>
                  <li>• Information juridique documentaire</li>
                  <li>• Conformité & Ingénierie juridique</li>
                </ul>
                <Button variant="outline" className="w-full mt-4 bg-transparent">
                  En savoir plus
                </Button>
              </CardContent>
            </Card>

            {/* Droit des Sociétés */}
            <Card className="border-border hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="w-12 h-12 bg-accent/10 rounded-lg flex items-center justify-center mb-4">
                  <Building className="w-6 h-6 text-accent" />
                </div>
                <CardTitle className="text-foreground">Droit des Sociétés</CardTitle>
                <CardDescription>Accompagnement dans la vie de votre entreprise</CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li>• Constitution de sociétés</li>
                  <li>• Gouvernance d'entreprise</li>
                  <li>• Fusions & acquisitions</li>
                  <li>• Restructurations</li>
                </ul>
                <Button variant="outline" className="w-full mt-4 bg-transparent">
                  En savoir plus
                </Button>
              </CardContent>
            </Card>

            {/* Services Financiers */}
            <Card className="border-border hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                  <FileText className="w-6 h-6 text-primary" />
                </div>
                <CardTitle className="text-foreground">Droit Financier</CardTitle>
                <CardDescription>Expertise en matière financière et bancaire</CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li>• Droit bancaire</li>
                  <li>• Crédit bail</li>
                  <li>• Investissements</li>
                  <li>• Droit boursier</li>
                </ul>
                <Button variant="outline" className="w-full mt-4 bg-transparent">
                  En savoir plus
                </Button>
              </CardContent>
            </Card>

            {/* Droit Foncier */}
            <Card className="border-border hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="w-12 h-12 bg-accent/10 rounded-lg flex items-center justify-center mb-4">
                  <MapPin className="w-6 h-6 text-accent" />
                </div>
                <CardTitle className="text-foreground">Droit Foncier</CardTitle>
                <CardDescription>Transactions immobilières et foncières</CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li>• Acquisitions immobilières</li>
                  <li>• Baux commerciaux</li>
                  <li>• Urbanisme</li>
                  <li>• Contentieux foncier</li>
                </ul>
                <Button variant="outline" className="w-full mt-4 bg-transparent">
                  En savoir plus
                </Button>
              </CardContent>
            </Card>

            {/* Blog Preview */}
            <Card className="border-border hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                  <BookOpen className="w-6 h-6 text-primary" />
                </div>
                <CardTitle className="text-foreground">Articles & Actualités</CardTitle>
                <CardDescription>Restez informé des évolutions juridiques</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground mb-4">
                  Découvrez nos analyses juridiques et conseils pratiques
                </p>
                <Button variant="outline" className="w-full bg-transparent">
                  Lire le blog
                </Button>
              </CardContent>
            </Card>

            {/* E-commerce Preview */}
            <Card className="border-border hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="w-12 h-12 bg-accent/10 rounded-lg flex items-center justify-center mb-4">
                  <ShoppingCart className="w-6 h-6 text-accent" />
                </div>
                <CardTitle className="text-foreground">Boutique Juridique</CardTitle>
                <CardDescription>Documents et formations juridiques</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground mb-4">
                  Modèles de contrats, guides pratiques et formations
                </p>
                <Button variant="outline" className="w-full bg-transparent">
                  Voir la boutique
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-primary text-primary-foreground">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold mb-4">Besoin d'un Conseil Juridique ?</h2>
          <p className="text-xl mb-8 opacity-90">Contactez-nous dès aujourd'hui pour une consultation personnalisée</p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Button size="lg" variant="secondary" className="bg-accent text-accent-foreground hover:bg-accent/90">
              <Phone className="w-5 h-5 mr-2" />
              Appeler Maintenant
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-primary-foreground text-primary-foreground hover:bg-primary-foreground hover:text-primary bg-transparent"
            >
              <Mail className="w-5 h-5 mr-2" />
              Envoyer un Email
            </Button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <Footer />
    </div>
  )
}
