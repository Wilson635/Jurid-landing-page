"use client"

import { useEffect } from "react"
import { useRouter } from "next/navigation"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { LinkIcon, BarChart3, LogOut } from "lucide-react"
import Link from "next/link"

export default function AdminDashboard() {
  const router = useRouter()

  useEffect(() => {
    const isAuthenticated = localStorage.getItem("adminAuthenticated") === "true"
    if (!isAuthenticated) {
      router.push("/admin")
    }
  }, [router])

  const handleLogout = () => {
    localStorage.removeItem("adminAuthenticated")
    localStorage.removeItem("adminLoginTime")
    router.push("/admin")
  }

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="bg-card border-b border-border sticky top-0 z-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex h-16 items-center justify-between">
            <h1 className="text-2xl font-bold text-foreground">Tableau de Bord Admin</h1>
            <Button variant="destructive" size="sm" onClick={handleLogout}>
              <LogOut className="w-4 h-4 mr-2" />
              Déconnexion
            </Button>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          <Card className="border-border">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <BarChart3 className="w-5 h-5 text-primary" />
                Articles du Blog
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-3xl font-bold text-primary">0</p>
              <p className="text-sm text-muted-foreground">Articles publiés</p>
            </CardContent>
          </Card>

          <Card className="border-border">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <BarChart3 className="w-5 h-5 text-accent" />
                Demandes
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-3xl font-bold text-accent">0</p>
              <p className="text-sm text-muted-foreground">Consultations en attente</p>
            </CardContent>
          </Card>

          <Card className="border-border">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <BarChart3 className="w-5 h-5 text-primary" />
                Produits
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-3xl font-bold text-primary">0</p>
              <p className="text-sm text-muted-foreground">Dans la boutique</p>
            </CardContent>
          </Card>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <Card className="border-border hover:shadow-lg transition-shadow">
            <CardHeader>
              <CardTitle>Gestion des Articles</CardTitle>
              <CardDescription>Créer, éditer, supprimer ou afficher/masquer les articles du blog</CardDescription>
            </CardHeader>
            <CardContent>
              <Link href="/admin/articles">
                <Button className="w-full bg-primary hover:bg-primary/90 text-primary-foreground">
                  <LinkIcon className="w-4 h-4 mr-2" />
                  Gérer les Articles
                </Button>
              </Link>
            </CardContent>
          </Card>

          <Card className="border-border hover:shadow-lg transition-shadow">
            <CardHeader>
              <CardTitle>Demandes de Consultation</CardTitle>
              <CardDescription>Consulter les demandes reçues depuis les formulaires du site</CardDescription>
            </CardHeader>
            <CardContent>
              <Link href="/admin/consultations">
                <Button className="w-full bg-primary hover:bg-primary/90 text-primary-foreground">
                  <LinkIcon className="w-4 h-4 mr-2" />
                  Voir les Demandes
                </Button>
              </Link>
            </CardContent>
          </Card>
        </div>
      </main>
    </div>
  )
}
