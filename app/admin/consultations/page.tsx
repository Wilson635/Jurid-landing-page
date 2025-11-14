"use client"

import { useEffect, useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import {
  Trash2,
  Mail,
  Phone,
  ArrowLeft,
  Users,
  CheckCircle2,
  Clock,
  Building2,
  Landmark,
  Scale,
  FileText,
  Calendar, LogOut, Moon, Sun
} from "lucide-react"
import Link from "next/link"
import {useTheme} from "@/hooks/use-theme";

interface Consultation {
  id: string
  firstName: string
  lastName: string
  email: string
  phone?: string
  consultationType?: string
  expertiseArea?: string
  needType?: string
  projectType?: string
  company?: string
  description?: string
  projectDescription?: string
  message?: string
  date: string
  status: string
  createdAt: string
  service: string // "consultation" | "droit-financier" | "droit-foncier" | "droit-societes"
}

export default function ConsultationsPage() {
  const [allConsultations, setAllConsultations] = useState<Consultation[]>([])
  const [statusFilter, setStatusFilter] = useState<"all" | "pending" | "processed">("all")
  const [serviceFilter, setServiceFilter] = useState<"all" | string>("all")

  const { theme, toggleTheme } = useTheme()

  useEffect(() => {
    const isAuthenticated = localStorage.getItem("adminAuthenticated") === "true"
    if (!isAuthenticated) {
      window.location.href = "/admin"
      return
    }

    // Charger toutes les demandes et les unifier
    const consultations: Consultation[] = []

    // Consultations juridiques générales
    const savedConsultations = localStorage.getItem("adminConsultations")
    if (savedConsultations) {
      const parsed = JSON.parse(savedConsultations)
      consultations.push(...parsed.map((c: any) => ({ ...c, service: c.service || "consultation" })))
    }

    // Demandes droit financier
    const savedFinancier = localStorage.getItem("adminDemands")
    if (savedFinancier) {
      const parsed = JSON.parse(savedFinancier)
      consultations.push(...parsed.map((d: any) => ({ ...d, service: d.service || "droit-financier" })))
    }

    //Demande droit foncier
    const savedFoncier = localStorage.getItem("userProjets")
    if (savedFoncier) {
      const parsed = JSON.parse(savedFoncier)
      consultations.push(...parsed.map((d: any) => ({ ...d, service: d.service || "droit-foncier" })))
    }

    //Demande droit societes
    const savedSocietes = localStorage.getItem("adminSocietes")
    if (savedSocietes) {
      const parsed = JSON.parse(savedSocietes)
      consultations.push(...parsed.map((d: any) => ({ ...d, service: d.service || "droit-societes" })))
    }

    // Trier par date (plus récent en premier)
    consultations.sort((a, b) => new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime())

    setAllConsultations(consultations)
  }, [])

  const currentDate = new Date().toLocaleDateString('fr-FR', {
    weekday: 'long',
    year: 'numeric',
    month: 'long',
    day: 'numeric'
  })

  const handleLogout = () => {
    localStorage.removeItem("adminAuthenticated")
    localStorage.removeItem("adminLoginTime")
    window.location.href = "/admin"
  }

  const handleMarkAsProcessed = (id: string) => {
    const updated = allConsultations.map((c) =>
        c.id === id ? { ...c, status: "Traité" } : c
    )
    setAllConsultations(updated)
    saveConsultationsByService(updated)
  }

  const handleDeleteConsultation = (id: string) => {
    if (confirm("Êtes-vous sûr de vouloir supprimer cette demande ?")) {
      const updated = allConsultations.filter((c) => c.id !== id)
      setAllConsultations(updated)
      saveConsultationsByService(updated)
    }
  }

  const saveConsultationsByService = (consultations: Consultation[]) => {
    // Séparer et sauvegarder par service
    const byService = {
      consultation: consultations.filter(c => c.service === "consultation"),
      droitFinancier: consultations.filter(c => c.service === "droit-financier"),
      droitFoncier: consultations.filter(c => c.service === "droit-foncier"),
      droitSocietes: consultations.filter(c => c.service === "droit-societes"),
    }

    localStorage.setItem("adminConsultations", JSON.stringify(byService.consultation))
    localStorage.setItem("adminDemands", JSON.stringify(byService.droitFinancier))
    // Ajouter les autres quand vous les aurez
  }

  // Filtres
  const filteredConsultations = allConsultations.filter((c) => {
    const statusMatch =
        statusFilter === "all" ||
        (statusFilter === "pending" && c.status === "En attente") ||
        (statusFilter === "processed" && c.status === "Traité")

    const serviceMatch = serviceFilter === "all" || c.service === serviceFilter

    return statusMatch && serviceMatch
  })

  // Statistiques
  const stats = {
    total: allConsultations.length,
    pending: allConsultations.filter(c => c.status === "En attente").length,
    processed: allConsultations.filter(c => c.status === "Traité").length,
    byService: {
      consultation: allConsultations.filter(c => c.service === "consultation").length,
      droitFinancier: allConsultations.filter(c => c.service === "droit-financier").length,
      droitFoncier: allConsultations.filter(c => c.service === "droit-foncier").length,
      droitSocietes: allConsultations.filter(c => c.service === "droit-societes").length,
    }
  }

  const getServiceIcon = (service: string) => {
    switch (service) {
      case "consultation": return Scale
      case "droit-financier": return Landmark
      case "droit-foncier": return Building2
      case "droit-societes": return FileText
      default: return Users
    }
  }

  const getServiceLabel = (service: string) => {
    switch (service) {
      case "consultation": return "Consultation Juridique"
      case "droit-financier": return "Droit Financier & Bancaire"
      case "droit-foncier": return "Droit Foncier"
      case "droit-societes": return "Droit des Sociétés"
      default: return "Autre"
    }
  }

  return (
      <div className="min-h-screen bg-background">
        {/* Hero Section */}
        <div className="relative bg-gradient-to-br from-primary/10 via-background to-accent/10 border-b border-border overflow-hidden">
          <div className="absolute inset-0 opacity-50">
            <div className="absolute inset-0" style={{
              backgroundImage: `radial-gradient(circle at 2px 2px, currentColor 1px, transparent 0)`,
              backgroundSize: '32px 32px'
            }}></div>
          </div>

          <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative">
            <div className="flex items-center justify-between py-4">
              <Link href="/admin/dashboard">
                <Button variant="outline" size="sm" className="border-border backdrop-blur-sm">
                  <ArrowLeft className="w-4 h-4 mr-2" />
                  Retour au tableau de bord
                </Button>
              </Link>
              {/* Top Bar */}
              <div className="flex items-center justify-between gap-4 py-4">
                <div className="flex items-center gap-2 text-sm text-muted-foreground">
                  <Calendar className="w-4 h-4" />
                  <span className="capitalize">{currentDate}</span>
                </div>
                <div className="flex items-center gap-4">
                  <Button variant="outline" size="sm" onClick={handleLogout} className="p-5 rounded-none border-border">
                    <LogOut className="w-4 h-4 mr-2" />
                    Déconnexion
                  </Button>
                  <Button
                      variant="outline"
                      className="p-5 rounded-none"
                      onClick={toggleTheme}
                      title={theme === "light" ? "Switch to dark mode" : "Switch to light mode"}
                  >
                    {theme === "light" ? <Moon className="h-6 w-6 " /> : <Sun className="h-6 w-6" />}
                  </Button>
                </div>
              </div>
            </div>

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
                  Gérez et suivez toutes les demandes reçues de tous les services
                </p>

                {/* Quick Stats Bar */}
                <div className="grid grid-cols-3 gap-4">
                  <div className="bg-card/50 backdrop-blur-sm border border-border rounded-lg p-4">
                    <div className="flex items-center gap-2 text-primary mb-1">
                      <Users className="w-4 h-4" />
                      <span className="text-2xl font-bold">{stats.total}</span>
                    </div>
                    <p className="text-xs text-muted-foreground">Total demandes</p>
                  </div>
                  <div className="bg-card/50 backdrop-blur-sm border border-border rounded-lg p-4">
                    <div className="flex items-center gap-2 text-primary mb-1">
                      <Clock className="w-4 h-4" />
                      <span className="text-2xl font-bold">{stats.pending}</span>
                    </div>
                    <p className="text-xs text-muted-foreground">En attente</p>
                  </div>
                  <div className="bg-card/50 backdrop-blur-sm border border-border rounded-lg p-4">
                    <div className="flex items-center gap-2 text-green-600 mb-1">
                      <CheckCircle2 className="w-4 h-4" />
                      <span className="text-2xl font-bold">{stats.processed}</span>
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
          <div className="space-y-4 mb-8">
            {/* Status Filters */}
            <div>
              <p className="text-sm font-medium text-muted-foreground mb-2">Statut</p>
              <div className="flex items-center gap-3">
                <Button
                    variant={statusFilter === "all" ? "default" : "outline"}
                    size="sm"
                    onClick={() => setStatusFilter("all")}
                    className={statusFilter === "all" ? "bg-primary text-primary-foreground" : "border-border"}
                >
                  Toutes ({stats.total})
                </Button>
                <Button
                    variant={statusFilter === "pending" ? "default" : "outline"}
                    size="sm"
                    onClick={() => setStatusFilter("pending")}
                    className={statusFilter === "pending" ? "bg-primary text-primary-foreground" : "border-border"}
                >
                  En attente ({stats.pending})
                </Button>
                <Button
                    variant={statusFilter === "processed" ? "default" : "outline"}
                    size="sm"
                    onClick={() => setStatusFilter("processed")}
                    className={statusFilter === "processed" ? "bg-primary text-primary-foreground" : "border-border"}
                >
                  Traitées ({stats.processed})
                </Button>
              </div>
            </div>

            {/* Service Filters */}
            <div>
              <p className="text-sm font-medium text-muted-foreground mb-2">Service</p>
              <div className="flex items-center gap-3 flex-wrap">
                <Button
                    variant={serviceFilter === "all" ? "default" : "outline"}
                    size="sm"
                    onClick={() => setServiceFilter("all")}
                    className={serviceFilter === "all" ? "bg-primary text-primary-foreground" : "border-border"}
                >
                  Tous les services
                </Button>
                <Button
                    variant={serviceFilter === "consultation" ? "default" : "outline"}
                    size="sm"
                    onClick={() => setServiceFilter("consultation")}
                    className={serviceFilter === "consultation" ? "bg-primary text-primary-foreground" : "border-border"}
                >
                  <Scale className="w-3 h-3 mr-1" />
                  Consultation ({stats.byService.consultation})
                </Button>
                <Button
                    variant={serviceFilter === "droit-financier" ? "default" : "outline"}
                    size="sm"
                    onClick={() => setServiceFilter("droit-financier")}
                    className={serviceFilter === "droit-financier" ? "bg-primary text-primary-foreground" : "border-border"}
                >
                  <Landmark className="w-3 h-3 mr-1" />
                  Droit Financier & Bancaire ({stats.byService.droitFinancier})
                </Button>
                <Button
                    variant={serviceFilter === "droit-foncier" ? "default" : "outline"}
                    size="sm"
                    onClick={() => setServiceFilter("droit-foncier")}
                    className={serviceFilter === "droit-foncier" ? "bg-primary text-primary-foreground" : "border-border"}
                >
                  <Building2 className="w-3 h-3 mr-1" />
                  Droit Foncier ({stats.byService.droitFoncier})
                </Button>
                <Button
                    variant={serviceFilter === "droit-societes" ? "default" : "outline"}
                    size="sm"
                    onClick={() => setServiceFilter("droit-societes")}
                    className={serviceFilter === "droit-societes" ? "bg-primary text-primary-foreground" : "border-border"}
                >
                  <FileText className="w-3 h-3 mr-1" />
                  Droit des Sociétés ({stats.byService.droitSocietes})
                </Button>
              </div>
            </div>
          </div>

          {/* Consultations List */}
          <div className="space-y-4">
            {filteredConsultations.length === 0 ? (
                <Card className="border-border py-6">
                  <CardContent className="py-16 text-center">
                    <Users className="w-16 h-16 mx-auto mb-3 opacity-50 text-muted-foreground" />
                    <p className="text-foreground text-lg font-medium">Aucune demande trouvée</p>
                    <p className="text-muted-foreground text-sm mt-2">
                      Aucune demande ne correspond aux filtres sélectionnés
                    </p>
                  </CardContent>
                </Card>
            ) : (
                filteredConsultations.map((consultation) => {
                  const ServiceIcon = getServiceIcon(consultation.service)

                  return (
                      <Card
                          key={consultation.id}
                          className={`border-border py-6 hover:shadow-lg transition-all ${
                              consultation.status === "En attente"
                                  ? "border-l-4 border-l-accent"
                                  : "border-l-4 border-l-green-500"
                          }`}
                      >
                        <CardHeader className="pb-3">
                          <div className="flex items-start justify-between gap-4">
                            <div className="flex-1">
                              <div className="flex items-center gap-3 mb-2">
                                <div className="w-10 h-10 rounded-full bg-black dark:bg-white flex items-center justify-center text-primary-foreground text-sm font-semibold">
                                  {consultation.firstName[0]}{consultation.lastName[0]}
                                </div>
                                <div>
                                  <CardTitle className="text-xl font-bold text-foreground">
                                    {consultation.firstName} {consultation.lastName}
                                  </CardTitle>
                                  <div className="flex items-center gap-2 mt-1 flex-wrap">
                                    <Badge variant="outline" className="border-primary/20 text-primary">
                                      <ServiceIcon className="w-3 h-3 mr-1" />
                                      {getServiceLabel(consultation.service)}
                                    </Badge>
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
                          {/* Type de consultation / Domaine */}
                          <div className="bg-muted/50 rounded-lg p-3 border border-border">
                            <p className="text-xs font-medium text-muted-foreground mb-1">
                              {consultation.consultationType ? "Type de consultation" : "Domaine d'expertise"}
                            </p>
                            <div className="flex items-center gap-2">
                              <p className="text-sm font-semibold text-foreground">
                                {consultation.consultationType || consultation.expertiseArea || consultation.needType || consultation.projectType}
                              </p>
                              {consultation.company && (
                                  <>
                                    <span className="text-xs text-muted-foreground">•</span>
                                    <p className="text-sm text-muted-foreground">{consultation.company}</p>
                                  </>
                              )}
                            </div>
                          </div>

                          {/* Contact Info */}
                          {(consultation.email || consultation.phone) && (
                              <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                                {consultation.email && (
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
                                )}

                                {consultation.phone && (
                                    <div className="flex items-center gap-3 p-3 bg-background rounded-lg border border-border">
                                      <div className="w-8 h-8 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                                        <Phone className="w-4 h-4 text-primary" />
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
                                )}
                              </div>
                          )}

                          {/* Message / Description / Project Description */}
                          {(consultation.message || consultation.description || consultation.projectDescription) && (
                              <div>
                                <p className="text-sm font-semibold text-foreground mb-2 flex items-center gap-2">
                                  <span className="w-1 h-4 bg-primary rounded-full"></span>
                                  Description de la demande
                                </p>
                                <div className="bg-muted/50 p-4 rounded-lg border border-border">
                                  <p className="text-sm text-foreground leading-relaxed whitespace-pre-wrap">
                                    {consultation.message || consultation.description || consultation.projectDescription}
                                  </p>
                                </div>
                              </div>
                          )}
                        </CardContent>
                      </Card>
                  )
                })
            )}
          </div>
        </main>
      </div>
  )
}