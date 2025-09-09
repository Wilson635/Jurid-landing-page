import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Scale, GraduationCap, Award, Users, Heart, BookOpen, Phone, Mail, MapPin, Quote } from "lucide-react"
import Link from "next/link"
import Image from "next/image"

export default function AProposPage() {
  const education = [
    {
      degree: "Master 2 Droit des Affaires",
      institution: "Université Paris 1 Panthéon-Sorbonne",
      year: "2008",
      mention: "Mention Très Bien",
    },
    {
      degree: "Master 1 Droit Privé",
      institution: "Université Paris 1 Panthéon-Sorbonne",
      year: "2007",
      mention: "Mention Bien",
    },
    {
      degree: "Licence en Droit",
      institution: "Université Paris 1 Panthéon-Sorbonne",
      year: "2006",
      mention: "Mention Bien",
    },
  ]

  const experience = [
    {
      position: "Avocate Associée",
      company: "Cabinet Juridique (Fondatrice)",
      period: "2015 - Présent",
      description:
        "Création et direction du cabinet, spécialisée en droit des affaires et accompagnement des entreprises.",
    },
    {
      position: "Avocate Senior",
      company: "Cabinet International de Droit des Affaires",
      period: "2012 - 2015",
      description: "Conseil en fusions-acquisitions et restructurations pour des groupes internationaux.",
    },
    {
      position: "Juriste d'Entreprise",
      company: "Groupe Financier Européen",
      period: "2009 - 2012",
      description: "Gestion des aspects juridiques des opérations financières et bancaires.",
    },
    {
      position: "Collaboratrice Juridique",
      company: "Cabinet de Droit des Sociétés",
      period: "2008 - 2009",
      description: "Accompagnement des PME dans leurs démarches de création et développement.",
    },
  ]

  const certifications = [
    "Certificat d'Aptitude à la Profession d'Avocat (CAPA)",
    "Formation Continue en Droit Numérique et RGPD",
    "Spécialisation en Droit Fiscal des Entreprises",
    "Médiation et Résolution Alternative des Conflits",
  ]

  const values = [
    {
      icon: Heart,
      title: "Proximité Client",
      description: "Une relation de confiance basée sur l'écoute et la compréhension de vos enjeux spécifiques.",
    },
    {
      icon: Scale,
      title: "Excellence Juridique",
      description: "Une expertise pointue et une veille juridique permanente pour vous offrir les meilleurs conseils.",
    },
    {
      icon: Users,
      title: "Accompagnement Personnalisé",
      description: "Des solutions sur mesure adaptées à votre situation et à vos objectifs d'entreprise.",
    },
  ]

  const testimonials = [
    {
      content:
        "Maître Martin nous a accompagnés dans la création de notre SAS avec un professionnalisme exemplaire. Ses conseils ont été précieux pour structurer notre entreprise.",
      author: "Pierre Dubois",
      company: "CEO, TechStart",
      rating: 5,
    },
    {
      content:
        "Une expertise remarquable en droit financier. Grâce à ses conseils, nous avons pu optimiser notre structure de financement et éviter de nombreux écueils.",
      author: "Marie Lecomte",
      company: "Directrice Financière, InnovCorp",
      rating: 5,
    },
    {
      content:
        "Réactivité, compétence et bienveillance. Maître Martin a su nous guider dans un dossier complexe de fusion avec une approche très professionnelle.",
      author: "Jean-Luc Moreau",
      company: "Président, Groupe Expansion",
      rating: 5,
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
                <Link href="/apropos" className="text-foreground hover:text-primary transition-colors font-medium">
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
          <div className="max-w-6xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-6 text-balance">
                  Maître <span className="text-primary">Sophie Martin</span>
                </h1>
                <p className="text-xl text-muted-foreground mb-8 text-pretty">
                  Avocate spécialisée en droit des affaires avec plus de 15 années d'expérience dans l'accompagnement
                  des entreprises et entrepreneurs.
                </p>
                <div className="flex flex-wrap gap-2 mb-8">
                  <Badge className="bg-primary text-primary-foreground">Droit des Sociétés</Badge>
                  <Badge className="bg-accent text-accent-foreground">Droit Financier</Badge>
                  <Badge className="bg-primary text-primary-foreground">Droit Foncier</Badge>
                  <Badge className="bg-accent text-accent-foreground">Conseil Juridique</Badge>
                </div>
                <div className="flex flex-col sm:flex-row gap-4">
                  <Button size="lg" className="bg-primary hover:bg-primary/90 text-primary-foreground">
                    <Phone className="w-5 h-5 mr-2" />
                    Prendre Rendez-vous
                  </Button>
                  <Button size="lg" variant="outline">
                    <Mail className="w-5 h-5 mr-2" />
                    Me Contacter
                  </Button>
                </div>
              </div>
              <div className="relative">
                <div className="relative h-96 w-full rounded-lg overflow-hidden">
                  <Image src="/professional-lawyer-woman-in-office.jpg" alt="Maître Sophie Martin" fill className="object-cover" />
                </div>
                <div className="absolute -bottom-6 -right-6 bg-accent text-accent-foreground p-4 rounded-lg shadow-lg">
                  <div className="text-center">
                    <div className="text-2xl font-bold">15+</div>
                    <div className="text-sm">Années d'expérience</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-foreground mb-8 text-center">Mon Parcours</h2>
            <div className="prose prose-lg max-w-none text-muted-foreground">
              <p className="text-lg leading-relaxed mb-6">
                Passionnée par le droit des affaires depuis mes études à la Sorbonne, j'ai consacré ma carrière à
                accompagner les entreprises dans leurs défis juridiques les plus complexes. Mon approche se base sur une
                écoute attentive et une compréhension approfondie des enjeux économiques de mes clients.
              </p>
              <p className="text-lg leading-relaxed mb-6">
                Après avoir acquis une solide expérience au sein de cabinets internationaux et en entreprise, j'ai fondé
                mon cabinet en 2015 avec la conviction qu'un accompagnement juridique de qualité doit être accessible à
                toutes les entreprises, des startups aux grands groupes.
              </p>
              <p className="text-lg leading-relaxed">
                Aujourd'hui, je mets mon expertise au service de plus de 200 clients, en privilégiant toujours une
                relation de proximité et de confiance. Ma mission : transformer la complexité juridique en opportunités
                de développement pour votre entreprise.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-16 bg-card">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-foreground mb-4">Mes Valeurs</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Les principes qui guident mon approche professionnelle au quotidien
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {values.map((value, index) => {
              const IconComponent = value.icon
              return (
                <Card key={index} className="border-border text-center">
                  <CardHeader>
                    <div className="w-16 h-16 bg-primary/10 rounded-lg flex items-center justify-center mx-auto mb-4">
                      <IconComponent className="w-8 h-8 text-primary" />
                    </div>
                    <CardTitle className="text-xl text-foreground">{value.title}</CardTitle>
                    <CardDescription className="text-base">{value.description}</CardDescription>
                  </CardHeader>
                </Card>
              )
            })}
          </div>
        </div>
      </section>

      {/* Experience & Education */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-6xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
              {/* Experience */}
              <div>
                <h2 className="text-3xl font-bold text-foreground mb-8 flex items-center gap-2">
                  <Award className="w-8 h-8 text-primary" />
                  Expérience Professionnelle
                </h2>
                <div className="space-y-6">
                  {experience.map((exp, index) => (
                    <Card key={index} className="border-border">
                      <CardHeader>
                        <div className="flex justify-between items-start">
                          <div>
                            <CardTitle className="text-lg text-foreground">{exp.position}</CardTitle>
                            <CardDescription className="text-primary font-medium">{exp.company}</CardDescription>
                          </div>
                          <Badge variant="outline" className="text-xs">
                            {exp.period}
                          </Badge>
                        </div>
                      </CardHeader>
                      <CardContent>
                        <p className="text-sm text-muted-foreground">{exp.description}</p>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </div>

              {/* Education */}
              <div>
                <h2 className="text-3xl font-bold text-foreground mb-8 flex items-center gap-2">
                  <GraduationCap className="w-8 h-8 text-accent" />
                  Formation
                </h2>
                <div className="space-y-6 mb-8">
                  {education.map((edu, index) => (
                    <Card key={index} className="border-border">
                      <CardHeader>
                        <div className="flex justify-between items-start">
                          <div>
                            <CardTitle className="text-lg text-foreground">{edu.degree}</CardTitle>
                            <CardDescription className="text-accent font-medium">{edu.institution}</CardDescription>
                          </div>
                          <Badge variant="outline" className="text-xs">
                            {edu.year}
                          </Badge>
                        </div>
                      </CardHeader>
                      <CardContent>
                        <Badge className="bg-accent/10 text-accent text-xs">{edu.mention}</Badge>
                      </CardContent>
                    </Card>
                  ))}
                </div>

                {/* Certifications */}
                <Card className="border-border">
                  <CardHeader>
                    <CardTitle className="text-lg text-foreground flex items-center gap-2">
                      <BookOpen className="w-5 h-5 text-primary" />
                      Certifications & Formations
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-2">
                      {certifications.map((cert, index) => (
                        <li key={index} className="flex items-center gap-2 text-sm text-muted-foreground">
                          <div className="w-1.5 h-1.5 bg-accent rounded-full flex-shrink-0" />
                          {cert}
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-16 bg-card">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-foreground mb-4">Témoignages Clients</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Ce que disent mes clients de notre collaboration
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <Card key={index} className="border-border">
                <CardHeader>
                  <Quote className="w-8 h-8 text-accent mb-2" />
                  <div className="flex gap-1 mb-2">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <div key={i} className="w-4 h-4 bg-accent rounded-full" />
                    ))}
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground mb-4 italic">"{testimonial.content}"</p>
                  <div>
                    <p className="font-semibold text-foreground">{testimonial.author}</p>
                    <p className="text-sm text-muted-foreground">{testimonial.company}</p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Info */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl font-bold text-foreground mb-8">Prenons Contact</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
              <div className="flex flex-col items-center">
                <Phone className="w-8 h-8 text-primary mb-2" />
                <h3 className="font-semibold text-foreground mb-1">Téléphone</h3>
                <p className="text-muted-foreground">+33 1 23 45 67 89</p>
              </div>
              <div className="flex flex-col items-center">
                <Mail className="w-8 h-8 text-accent mb-2" />
                <h3 className="font-semibold text-foreground mb-1">Email</h3>
                <p className="text-muted-foreground">sophie.martin@cabinet-juridique.fr</p>
              </div>
              <div className="flex flex-col items-center">
                <MapPin className="w-8 h-8 text-primary mb-2" />
                <h3 className="font-semibold text-foreground mb-1">Adresse</h3>
                <p className="text-muted-foreground">75001 Paris, France</p>
              </div>
            </div>
            <Button size="lg" className="bg-primary hover:bg-primary/90 text-primary-foreground">
              Prendre Rendez-vous Maintenant
            </Button>
          </div>
        </div>
      </section>
    </div>
  )
}
