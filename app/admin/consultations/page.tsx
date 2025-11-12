"use client"

import { useEffect, useState } from "react"
import { useRouter } from "next/navigation"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Trash2, Mail, Phone, ArrowLeft } from "lucide-react"
import Link from "next/link"

interface Consultation {
  id: string
  name: string
  email: string
  phone: string
  service: string
  message: string
  date: string
  read: boolean
}

export default function ConsultationsPage() {
  const router = useRouter()
  const [consultations, setConsultations] = useState<Consultation[]>([])

  useEffect(() => {
    const isAuthenticated = localStorage.getItem("adminAuthenticated") === "true"
    if (!isAuthenticated) {
      router.push("/admin")
      return
    }

    const saved = localStorage.getItem("adminConsultations")
    if (saved) {
      setConsultations(JSON.parse(saved))
    }
  }, [router])

  const handleMarkAsRead = (id: string) => {
    const updated = consultations.map((c) => (c.id === id ? { ...c, read: true } : c))
    setConsultations(updated)
    localStorage.setItem("adminConsultations", JSON.stringify(updated))
  }

  const handleDeleteConsultation = (id: string) => {
    if (confirm("Êtes-vous sûr de vouloir supprimer cette demande ?")) {
      const updated = consultations.filter((c) => c.id !== id)
      setConsultations(updated)
      localStorage.setItem("adminConsultations", JSON.stringify(updated))
    }
  }

  const unreadCount = consultations.filter((c) => !c.read).length

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="bg-card border-b border-border sticky top-0 z-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex h-16 items-center justify-between">
            <div className="flex items-center gap-4">
              <Link href="/admin/dashboard">
                <Button variant="ghost" size="sm">
                  <ArrowLeft className="w-4 h-4 mr-2" />
                  Retour
                </Button>
              </Link>
              <div>
                <h1 className="text-2xl font-bold text-foreground">Demandes de Consultation</h1>
                {unreadCount > 0 && <p className="text-sm text-muted-foreground">{unreadCount} non lu(s)</p>}
              </div>
            </div>
          </div>
        </div>
      </header>

      <main className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="space-y-4">
          {consultations.length === 0 ? (
            <Card className="border-border">
              <CardContent className="py-12 text-center">
                <p className="text-muted-foreground">Aucune demande de consultation pour le moment</p>
              </CardContent>
            </Card>
          ) : (
            consultations.map((consultation) => (
              <Card
                key={consultation.id}
                className={`border-border ${!consultation.read ? "bg-accent/5 border-accent" : ""}`}
              >
                <CardHeader>
                  <div className="flex items-start justify-between">
                    <div className="flex-1">
                      <div className="flex items-center gap-2">
                        <CardTitle className="text-lg">{consultation.name}</CardTitle>
                        {!consultation.read && <Badge className="bg-accent text-accent-foreground">Nouveau</Badge>}
                      </div>
                      <CardDescription>Service: {consultation.service}</CardDescription>
                    </div>
                    <div className="flex gap-2">
                      {!consultation.read && (
                        <Button
                          onClick={() => handleMarkAsRead(consultation.id)}
                          variant="outline"
                          size="sm"
                          className="text-xs"
                        >
                          Marquer comme lu
                        </Button>
                      )}
                      <Button onClick={() => handleDeleteConsultation(consultation.id)} variant="ghost" size="sm">
                        <Trash2 className="w-4 h-4 text-red-600" />
                      </Button>
                    </div>
                  </div>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                    <div className="flex items-center gap-2 text-sm text-muted-foreground">
                      <Mail className="w-4 h-4" />
                      <a href={`mailto:${consultation.email}`} className="hover:text-primary">
                        {consultation.email}
                      </a>
                    </div>
                    <div className="flex items-center gap-2 text-sm text-muted-foreground">
                      <Phone className="w-4 h-4" />
                      <a href={`tel:${consultation.phone}`} className="hover:text-primary">
                        {consultation.phone}
                      </a>
                    </div>
                    <div className="text-sm text-muted-foreground">{consultation.date}</div>
                  </div>
                  <div>
                    <p className="text-sm font-medium text-foreground mb-2">Message:</p>
                    <p className="text-sm text-muted-foreground bg-muted p-3 rounded-md">{consultation.message}</p>
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
