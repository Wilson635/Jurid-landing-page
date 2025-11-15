"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Scale, GraduationCap, Award, Users, Heart, BookOpen, Phone, Mail, MapPin, Quote } from "lucide-react"
import Image from "next/image"
import Header from "@/components/ui/header"
import Footer from "@/components/ui/footer"
import { useTranslation } from "@/hooks/use-translation"
import { experience, education, certifications, testimonials, values } from "@/utils"

export default function AProposPage() {
  const { t } = useTranslation()

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
                    {t.about.hero.name.split(' ')[0]} <span className="text-primary">{t.about.hero.name.split(' ')[1]}</span>
                  </h1>
                  <p className="text-xl text-muted-foreground mb-8 text-pretty">
                    {t.about.hero.subtitle}
                  </p>
                  <div className="flex flex-wrap gap-2 mb-8">
                    <Badge className="bg-primary text-primary-foreground">{t.about.hero.badges.business}</Badge>
                    <Badge className="bg-accent text-accent-foreground">{t.about.hero.badges.corporate}</Badge>
                    <Badge className="bg-primary text-primary-foreground">{t.about.hero.badges.compliance}</Badge>
                    <Badge className="bg-accent text-accent-foreground">{t.about.hero.badges.governance}</Badge>
                    <Badge className="bg-primary text-primary-foreground">{t.about.hero.badges.landLaw}</Badge>
                  </div>
                  <div className="flex flex-col sm:flex-row gap-4">
                    <Button size="lg" className="bg-primary hover:bg-primary/90 text-primary-foreground">
                      <Phone className="w-5 h-5 mr-2" />
                      {t.about.hero.ctaAppointment}
                    </Button>
                    <Button size="lg" variant="outline">
                      <Mail className="w-5 h-5 mr-2" />
                      {t.about.hero.ctaContact}
                    </Button>
                  </div>
                </div>
                <div className="relative">
                  <div className="relative h-96 w-auto rounded-lg overflow-hidden">
                    <Image
                        src="/professional-lawyer-woman-in-office.jpg"
                        alt={t.about.hero.name}
                        fill
                        className="object-cover"
                    />
                  </div>
                  <div className="absolute -bottom-6 -right-6 bg-accent text-accent-foreground p-4 rounded-lg shadow-lg">
                    <div className="text-center">
                      <div className="text-2xl font-bold">10+</div>
                      <div className="text-sm">{t.about.hero.experience}</div>
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
              <div className="p-[2px] bg-gradient-to-r from-blue-500 via-blue-200 to-blue-500 w-fit mx-auto">
                <div className="flex items-center px-4 py-2 bg-background rounded-lg">
                  <h2 className="text-xl text-blue-400 font-bold text-center">03</h2>

                  {/* Ligne verticale */}
                  <div className="w-px h-8 bg-gradient-to-r from-blue-300 via-blue-50-500 to-blue-500 mx-4"></div>

                  <h2 className="text-xl text-blue-400 font-bold text-center">{t.about.journey.title}</h2>
                </div>
              </div>

              <div className="prose prose-lg max-w-none text-muted-foreground">
                <p className="text-lg leading-relaxed mb-6">
                  {t.about.journey.paragraph1}
                </p>
                <p className="text-lg leading-relaxed mb-6">
                  {t.about.journey.paragraph2}
                </p>
                <p className="text-lg leading-relaxed mb-6">
                  {t.about.journey.paragraph3}
                </p>
                <p className="text-lg leading-relaxed">
                  {t.about.journey.paragraph4}
                </p>
              </div>
            </div>
          </div>
        </section>


        {/* Values */}
        <section className="py-16 bg-card">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-foreground mb-4">{t.about.values.title}</h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                {t.about.values.subtitle}
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {values.map((value, index) => {
                const IconComponent = value.icon
                return (
                    <Card key={index} className="border-border py-6 text-center">
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
                    {t.about.experience.title}
                  </h2>
                  <div className="space-y-6">
                    {experience.map((exp, index) => (
                        <Card key={index} className="border-border py-6">
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
                    {t.about.education.title}
                  </h2>
                  <div className="space-y-6 mb-8">
                    {education.map((edu, index) => (
                        <Card key={index} className="border-border py-6">
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
                  <Card className="border-border py-6">
                    <CardHeader>
                      <CardTitle className="text-lg text-foreground flex items-center gap-2">
                        <BookOpen className="w-5 h-5 text-primary" />
                        {t.about.education.certifications}
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
              <h2 className="text-3xl font-bold text-foreground mb-4">{t.about.testimonials.title}</h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                {t.about.testimonials.subtitle}
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {testimonials.map((testimonial, index) => (
                  <Card key={index} className="border-border py-6">
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

        {/* Footer */}
        <Footer />
      </div>
  )
}