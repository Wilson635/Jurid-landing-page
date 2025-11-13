"use client"

import { useEffect, useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Trash2, Mail, Phone, ArrowLeft, Users, CheckCircle2, Clock, User } from "lucide-react"
import Link from "next/link"

interface Consultation {
  id: string
  firstName: string
  lastName: string
  email: string
  phone: string
  consultationType: string
  message: string
  date: string
  status: string
  createdAt: string
  service: string
}

interface Datas {
  id: string
  firstName: string
  lastName: string
  email: string
  company: string
  expertiseArea: string
  message: string
  date: string
  status: string
  createdAt: string
  service: string
}

export default function ConsultationsPage() {
  const [consultations, setConsultations] = useState<Consultation[]>([])
    const [datas, setDatas] = useState<Datas[]>([])
  const [filter, setFilter] = useState<"all" | "pending" | "processed">("all")

  useEffect(() => {
    const isAuthenticated = localStorage.getItem("adminAuthenticated") === "true"
    if (!isAuthenticated) {
      window.location.href = "/admin"
      return
    }

    // Load consultations from localStorage
    const saved = localStorage.getItem("adminConsultations")
    if (saved) {
      setConsultations(JSON.parse(saved))
    }

    // Load datas of droit financier from localStorage
    const savedDatas = localStorage.getItem("adminDemands")
    if (savedDatas) {
      setDatas(JSON.parse(savedDatas))
    }
  }, [])

  const handleMarkAsProcessed = (id: string) => {
    const updated = consultations.map((c) => (c.id === id ? { ...c, status: "Traité" } : c))
    const updatedDatas = datas.map((d) => (d.id === id ? { ...d, status: "Traité" } : d))
    setDatas(updatedDatas)
    setConsultations(updated)
    localStorage.setItem("adminDemands", JSON.stringify(updatedDatas))
    localStorage.setItem("adminConsultations", JSON.stringify(updated))
  }

  const handleDeleteConsultation = (id: string) => {
    if (confirm("Êtes-vous sûr de vouloir supprimer cette demande ?")) {
      const updated = consultations.filter((c) => c.id !== id)
      const updatedDatas = datas.filter((d) => d.id !== id)
      setDatas(updatedDatas)
      setConsultations(updated)
      localStorage.setItem("adminDemands", JSON.stringify(updatedDatas))
      localStorage.setItem("adminConsultations", JSON.stringify(updated))
    }
  }

  const filteredConsultations = consultations.filter((c) => {
    if (filter === "pending") return c.status === "En attente"
    if (filter === "processed") return c.status === "Traité"
    return true
  })

  const filteredDatas = datas.filter((d) => {
    if (filter === "pending") return d.status === "En attente"
    if (filter === "processed") return d.status === "Traité"
    return true
  })

  const pendingCount = consultations.filter((c) => c.status === "En attente").length
  const pendingCountDatas = datas.filter((d) => d.status === "En attente").length
  const processedCountDatas = datas.filter((d) => d.status === "Traité").length
  const processedCount = consultations.filter((c) => c.status === "Traité").length

  return (
      <div className="min-h-screen bg-background">
        {/* Hero Section */}
        <div className="relative bg-gradient-to-br from-primary/10 via-background to-accent/10 border-b border-border overflow-hidden">
          {/* Decorative Pattern */}
          <div className="absolute inset-0 opacity-5">
            <div className="absolute inset-0" style={{
              backgroundImage: `radial-gradient(circle at 2px 2px, currentColor 1px, transparent 0)`,
              backgroundSize: '32px 32px'
            }}></div>
          </div>

          <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative">
            {/* Top Bar */}
            <div className="flex items-center justify-between py-4">
              <Link href="/admin/dashboard">
                <Button variant="outline" size="sm" className="border-border">
                  <ArrowLeft className="w-4 h-4 mr-2" />
                  Retour au tableau de bord
                </Button>
              </Link>
            </div>

            {/* Hero Content */}
            <div className="py-12 md:py-16">
              <div className="max-w-3xl">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center">
                    <Users className="w-6 h-6 text-primary" />
                  </div>
                  <h1 className="text-4xl md:text-5xl font-bold text-foreground">
                    Demandes de <span className="text-primary">Consultation</span>
                  </h1>
                </div>
                <p className="text-xl text-muted-foreground mb-8">
                  Gérez et suivez toutes les demandes de consultation reçues
                </p>

                {/* Quick Stats Bar */}
                <div className="grid grid-cols-3 gap-4">
                  <div className="bg-card/50 backdrop-blur-sm border border-border rounded-lg p-4">
                    <div className="flex items-center gap-2 text-primary mb-1">
                      <Users className="w-4 h-4" />
                      <span className="text-2xl font-bold">{consultations.length + datas.length}</span>
                    </div>
                    <p className="text-xs text-muted-foreground">Total demandes</p>
                  </div>
                  <div className="bg-card/50 backdrop-blur-sm border border-border rounded-lg p-4">
                    <div className="flex items-center gap-2 text-primary mb-1">
                      <Clock className="w-4 h-4" />
                      <span className="text-2xl font-bold">{pendingCount + pendingCountDatas}</span>
                    </div>
                    <p className="text-xs text-muted-foreground">En attente</p>
                  </div>
                  <div className="bg-card/50 backdrop-blur-sm border border-border rounded-lg p-4">
                    <div className="flex items-center gap-2 text-green-600 mb-1">
                      <CheckCircle2 className="w-4 h-4" />
                      <span className="text-2xl font-bold">{processedCount + processedCountDatas}</span>
                    </div>
                    <p className="text-xs text-muted-foreground">Traitées</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <main className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
          {/* Filters */}
          <div className="flex items-center gap-3 mb-8">
            <Button
                variant={filter === "all" ? "default" : "outline"}
                size="sm"
                onClick={() => setFilter("all")}
                className={filter === "all" ? "bg-primary text-primary-foreground" : "border-border"}
            >
              Toutes ({consultations.length + datas.length})
            </Button>
            <Button
                variant={filter === "pending" ? "default" : "outline"}
                size="sm"
                onClick={() => setFilter("pending")}
                className={filter === "pending" ? "bg-primary text-primary-foreground" : "border-border"}
            >
              En attente ({pendingCount + pendingCountDatas})
            </Button>
            <Button
                variant={filter === "processed" ? "default" : "outline"}
                size="sm"
                onClick={() => setFilter("processed")}
                className={filter === "processed" ? "bg-primary text-primary-foreground" : "border-border"}
            >
              Traitées ({processedCount + processedCountDatas})
            </Button>
          </div>

          <div className="space-y-4">
            {filteredConsultations.length === 0 ? (
                <Card className="border-border">
                  <CardContent className="py-16 text-center">
                    <div className="text-muted-foreground mb-4">
                      <Users className="w-16 h-16 mx-auto mb-3 opacity-50" />
                    </div>
                    <p className="text-foreground text-lg font-medium">Aucune demande de consultation</p>
                    <p className="text-muted-foreground text-sm mt-2">
                      {filter === "pending" && "Aucune demande en attente"}
                      {filter === "processed" && "Aucune demande traitée"}
                      {filter === "all" && "Les demandes apparaîtront ici"}
                    </p>
                  </CardContent>
                </Card>
            ) : (
                filteredConsultations.map((consultation) => (
                    <Card
                        key={consultation.id}
                        className={`border-border hover:shadow-lg transition-all py-6 ${
                            consultation.status === "En attente" ? "border-l-4 border-l-accent" : "border-l-4 border-l-green-500"
                        }`}
                    >
                      <CardHeader className="pb-3">
                        <div className="flex items-start justify-between gap-4">
                          <div className="flex-1">
                            <div className="flex items-center gap-3 mb-2">
                              <div className="w-10 h-10 rounded-full bg-gradient-to-br from-primary to-accent flex items-center justify-center text-primary-foreground text-sm font-semibold">
                                {consultation.firstName[0]}{consultation.lastName[0]}
                              </div>
                              <div>
                                <CardTitle className="text-xl font-bold text-foreground">
                                  {consultation.firstName} {consultation.lastName}
                                </CardTitle>
                                <div className="flex items-center gap-2 mt-1">
                                  <Badge
                                      variant="secondary"
                                      className={
                                        consultation.status === "En attente"
                                            ? "bg-primary/10 text-primary border-primary/20"
                                            : "bg-green-100 text-green-700 border-green-200"
                                      }
                                  >
                                    {consultation.status === "En attente" ? (
                                        <><Clock className="w-3 h-3 mr-1" /> En attente</>
                                    ) : (
                                        <><CheckCircle2 className="w-3 h-3 mr-1" /> Traité</>
                                    )}
                                  </Badge>
                                  <span className="text-xs text-muted-foreground">•</span>
                                  <span className="text-xs text-muted-foreground">{consultation.date}</span>
                                </div>
                              </div>
                            </div>
                          </div>

                          {/* Action Buttons */}
                          <div className="flex gap-2">
                            {consultation.status === "En attente" && (
                                <Button
                                    onClick={() => handleMarkAsProcessed(consultation.id)}
                                    variant="outline"
                                    size="sm"
                                    className="border-green-200 text-green-700 hover:bg-green-50"
                                >
                                  <CheckCircle2 className="w-4 h-4 mr-1" />
                                  Marquer traité
                                </Button>
                            )}
                            <Button
                                onClick={() => handleDeleteConsultation(consultation.id)}
                                variant="ghost"
                                size="sm"
                                className="hover:bg-red-50"
                            >
                              <Trash2 className="w-4 h-4 text-red-600" />
                            </Button>
                          </div>
                        </div>
                      </CardHeader>

                      <CardContent className="space-y-4">
                        {/* Type de consultation */}
                        <div className="bg-muted/50 rounded-lg p-3 border border-border">
                          <p className="text-xs font-medium text-muted-foreground mb-1">Type de consultation</p>
                          <p className="text-sm font-semibold text-foreground">{consultation.consultationType}</p>
                        </div>

                        {/* Contact Info */}
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                          <div className="flex items-center gap-3 p-3 bg-background rounded-lg border border-border">
                            <div className="w-8 h-8 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                              <Mail className="w-4 h-4 text-primary" />
                            </div>
                            <div className="flex-1 min-w-0">
                              <p className="text-xs text-muted-foreground">Email</p>
                              <a
                                  href={`mailto:${consultation.email}`}
                                  className="text-sm font-medium text-foreground hover:text-primary transition-colors truncate block"
                              >
                                {consultation.email}
                              </a>
                            </div>
                          </div>

                          <div className="flex items-center gap-3 p-3 bg-background rounded-lg border border-border">
                            <div className="w-8 h-8 rounded-lg bg-accent/10 flex items-center justify-center flex-shrink-0">
                              <Phone className="w-4 h-4 text-accent" />
                            </div>
                            <div className="flex-1 min-w-0">
                              <p className="text-xs text-muted-foreground">Téléphone</p>
                              <a
                                  href={`tel:${consultation.phone}`}
                                  className="text-sm font-medium text-foreground hover:text-primary transition-colors"
                              >
                                {consultation.phone}
                              </a>
                            </div>
                          </div>
                        </div>

                        {/* Message */}
                        <div>
                          <p className="text-sm font-semibold text-foreground mb-2 flex items-center gap-2">
                            <span className="w-1 h-4 bg-primary rounded-full"></span>
                            Description de la demande
                          </p>
                          <div className="bg-muted/50 p-4 rounded-lg border border-border">
                            <p className="text-sm text-foreground leading-relaxed whitespace-pre-wrap">
                              {consultation.message}
                            </p>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                ))
            )}

            {filteredDatas.length === 0 ? (
            <Card className="border-border">
              <CardContent className="py-16 text-center">
                <div className="text-muted-foreground mb-4">
                  <Users className="w-16 h-16 mx-auto mb-3 opacity-50" />
                </div>
                <p className="text-foreground text-lg font-medium">Aucune demande de consultation</p>
                <p className="text-muted-foreground text-sm mt-2">
                  {filter === "pending" && "Aucune demande en attente"}
                  {filter === "processed" && "Aucune demande traitée"}
                  {filter === "all" && "Les demandes apparaîtront ici"}
                </p>
              </CardContent>
            </Card>
            ) : (
                filteredDatas.map((data) => (
                    <Card
                        key={data.id}
                        className={`border-border hover:shadow-lg transition-all py-6 ${
                            data.status === "En attente" ? "border-l-4 border-l-accent" : "border-l-4 border-l-green-500"
                        }`}
                    >
                        <CardHeader>
                            <div className="flex items-center justify-between">
                                <div className="flex items-center gap-2">
                                    <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center">
                                        <Users className="w-6 h-6 text-primary" />
                                    </div>
                                    <div>
                                        <h2 className="text-foreground font-bold">{data.firstName} {data.lastName}</h2>
                                        <p className="text-muted-foreground text-sm">{data.email}</p>
                                    </div>
                                </div>
                                <div className="gap-4 flex items-center">
                                    <Badge
                                        variant="secondary"
                                        className={
                                            data.status === "En attente"
                                                ? "bg-primary/10 text-primary border-primary/20"
                                                : "bg-green-100 text-green-700 border-green-200"
                                        }
                                    >
                                        {data.status === "En attente" ? (
                                            <><Clock className="w-3 h-3 mr-1" /> En attente</>
                                        ) : (
                                            <><CheckCircle2 className="w-3 h-3 mr-1" /> Traité</>
                                        )}
                                    </Badge>
                                  {/* Action Buttons */}
                                  {data.status === "En attente" && (
                                      <Button
                                          onClick={() => handleMarkAsProcessed(data.id)}
                                          variant="outline"
                                          size="sm"
                                          className="border-green-200 text-green-700 hover:bg-green-50"
                                      >
                                        <CheckCircle2 className="w-4 h-4 mr-1" />
                                        Marquer traité
                                      </Button>
                                  )}
                                  <Button
                                      onClick={() => handleDeleteConsultation(data.id)}
                                      variant="ghost"
                                      size="sm"
                                      className="hover:bg-red-50"
                                  >
                                    <Trash2 className="w-4 h-4 text-red-600" />
                                  </Button>
                                </div>
                            </div>
                        </CardHeader>
                        <CardContent>
                            <div className="bg-muted/50 rounded-lg p-3 border border-border">
                              <p className="text-xs font-medium text-muted-foreground mb-1">Type de consultation</p>
                              <p className="text-sm flex items-center gap-2 font-semibold text-foreground">{data.expertiseArea}
                                <span className="text-xs text-muted-foreground">•</span>
                                <span className="text-sm font-semibold text-muted-foreground">{data.company}</span>
                              </p>
                            </div>
                            <p className="text-sm font-semibold text-foreground mb-2 flex items-center gap-2">
                                <span className="w-1 h-4 bg-primary rounded-full"></span>
                                Description de la demande
                            </p>
                            <div className="bg-muted/50 p-4 rounded-lg border border-border">
                                <p className="text-sm text-foreground leading-relaxed whitespace-pre-wrap">
                                    {data.message}
                                </p>
                            </div>
                        </CardContent>
                    </Card>
                ))
            )}
          </div>
        </main>
      </div>
  )
}