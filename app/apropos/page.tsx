import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Scale, GraduationCap, Award, Users, Heart, BookOpen, Phone, Mail, MapPin, Quote } from "lucide-react"
import Image from "next/image"
import Header from "@/components/ui/header";

import { experience, education, certifications, testimonials, values } from "@/utils"

export default function AProposPage() {

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <Header />

      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-card to-background">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-6xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-6 text-balance">
                  Maître <span className="text-primary">[Nom de l’Avocate]</span>
                </h1>
                <p className="text-xl text-muted-foreground mb-8 text-pretty">
                  Avocate inscrite aux barreaux du Cameroun et du Nigeria, spécialisée en droit des affaires et en droit des sociétés.
                  Depuis 2014, elle accompagne entreprises et investisseurs sur les mécanismes juridiques, la conformité règlementaire
                  et la gouvernance.
                </p>
                <div className="flex flex-wrap gap-2 mb-8">
                  <Badge className="bg-primary text-primary-foreground">Droit des Affaires</Badge>
                  <Badge className="bg-accent text-accent-foreground">Droit des Sociétés</Badge>
                  <Badge className="bg-primary text-primary-foreground">Compliance</Badge>
                  <Badge className="bg-accent text-accent-foreground">Corporate Governance</Badge>
                  <Badge className="bg-primary text-primary-foreground">Droit Foncier & Immobilier</Badge>
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
                  <Image
                      src="/professional-lawyer-woman-in-office.jpg"
                      alt="Maître [Nom de l’Avocate]"
                      fill
                      className="object-cover"
                  />
                </div>
                <div className="absolute -bottom-6 -right-6 bg-accent text-accent-foreground p-4 rounded-lg shadow-lg">
                  <div className="text-center">
                    <div className="text-2xl font-bold">10+</div>
                    <div className="text-sm">Années d’expérience</div>
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
                Depuis 2014, j’ai choisi de me spécialiser en <strong>droit des affaires</strong> et en <strong>droit des sociétés</strong>,
                avec un intérêt particulier pour les mécanismes juridiques liés au financement et à la sécurisation des investissements.
                Mon expertise couvre également la conformité règlementaire et administrative des entreprises, le corporate secretarial
                services, la gestion des contrats, l’audit juridique, ainsi que la résolution des litiges.
              </p>
              <p className="text-lg leading-relaxed mb-6">
                Avocate inscrite aux <strong>barreaux du Cameroun et du Nigeria</strong>, je possède une double maîtrise du système
                de la <strong>Common Law</strong> et du <strong>Droit Civil français</strong>. Je conseille entreprises et institutions
                sur des sujets stratégiques de gouvernance et j’ai récemment lancé le podcast <em>“Le guide des entreprises”</em>,
                dédié aux dirigeants et entrepreneurs.
              </p>
              <p className="text-lg leading-relaxed mb-6">
                Parallèlement, j’élargis mes compétences dans le domaine du <strong>droit foncier</strong>, du
                <strong> droit immobilier</strong> et du <strong>leasing (crédit-bail)</strong>, avec une formation en gestion de projets
                (certification PMP en cours). Ces expériences me permettent d’apporter une approche transversale et pragmatique
                aux problématiques juridiques et économiques de mes clients.
              </p>
              <p className="text-lg leading-relaxed">
                Ma mission est claire : <strong>offrir aux entreprises un accompagnement juridique de haut niveau</strong>,
                transformant la complexité réglementaire en leviers de croissance durable.
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
