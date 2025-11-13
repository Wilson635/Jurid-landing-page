"use client"

import { useEffect, useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import {FileText, BarChart3, LogOut, Calendar, TrendingUp, Eye, Users, Moon, Sun} from "lucide-react"
import Link from "next/link"
import {useTheme} from "@/hooks/use-theme";

export default function AdminDashboard() {

  const { theme, toggleTheme, mounted } = useTheme()

  const [stats, setStats] = useState({
    articles: 0,
    published: 0,
    consultations: 0,
  })
  const [adminName, setAdminName] = useState("Administrateur")

  useEffect(() => {
    const isAuthenticated = localStorage.getItem("adminAuthenticated") === "true"
    if (!isAuthenticated) {
      window.location.href = "/admin"
      return
    }

    // Charger les statistiques
    const savedArticles = localStorage.getItem("adminArticles")
    if (savedArticles) {
      const articles = JSON.parse(savedArticles)
      const published = articles.filter((a: any) => a.published !== false).length
      setStats({
        articles: articles.length,
        published: published,
        consultations: 0,
      })
    }

    const saveConsultations = localStorage.getItem("adminConsultations")
    if (saveConsultations) {
      const consultations = JSON.parse(saveConsultations)
      setStats((prevStats) => ({
        ...prevStats,
        consultations: consultations.length,
      }))
    }

    const savedData = localStorage.getItem("adminDemands")
    if (savedData) {
      const adminData = JSON.parse(savedData)
      setStats((prevStats) => ({
        ...prevStats,
        consultations: adminData.length + prevStats.consultations || prevStats.consultations,
      }))
    }
  }, [])

  const handleLogout = () => {
    localStorage.removeItem("adminAuthenticated")
    localStorage.removeItem("adminLoginTime")
    window.location.href = "/admin"
  }

  const currentDate = new Date().toLocaleDateString('fr-FR', {
    weekday: 'long',
    year: 'numeric',
    month: 'long',
    day: 'numeric'
  })

  return (
      <div className="min-h-screen bg-background">
        {/* Hero Section */}
        <div className="relative bg-gradient-to-br from-primary/10 via-background to-accent/10 border-b border-border overflow-hidden">
          {/* Decorative Pattern */}
          <div className="absolute inset-0 opacity-30">
            <div className="absolute inset-0" style={{
              backgroundImage: `radial-gradient(circle at 2px 2px, currentColor 1px, transparent 0)`,
              backgroundSize: '50px 50px'
            }}></div>
          </div>

          <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative">
            {/* Top Bar */}
            <div className="flex items-center justify-between py-4">
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

            {/* Hero Content */}
            <div className="py-12 md:py-16">
              <div className="max-w-3xl">
                <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
                  Bienvenue, <span className="text-primary">{adminName}</span>
                </h1>
                <p className="text-xl text-muted-foreground mb-8">
                  Gérez votre contenu et suivez l'activité de votre cabinet juridique depuis votre tableau de bord
                </p>

                {/* Quick Stats Bar */}
                <div className="grid grid-cols-3 gap-4">
                  <div className="bg-card/50 backdrop-blur-sm border border-border rounded-lg p-4">
                    <div className="flex items-center gap-2 text-primary mb-1">
                      <FileText className="w-4 h-4" />
                      <span className="text-2xl font-bold">{stats.articles}</span>
                    </div>
                    <p className="text-xs text-muted-foreground">Articles total</p>
                  </div>
                  <div className="bg-card/50 backdrop-blur-sm border border-border rounded-lg p-4">
                    <div className="flex items-center gap-2 text-primary mb-1">
                      <Eye className="w-4 h-4" />
                      <span className="text-2xl font-bold">{stats.published}</span>
                    </div>
                    <p className="text-xs text-muted-foreground">Publiés</p>
                  </div>
                  <div className="bg-card/50 backdrop-blur-sm border border-border rounded-lg p-4">
                    <div className="flex items-center gap-2 text-primary mb-1">
                      <Users className="w-4 h-4" />
                      <span className="text-2xl font-bold">{stats.consultations}</span>
                    </div>
                    <p className="text-xs text-muted-foreground">Demandes</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Main Content */}
        <main className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
          {/* Statistics Cards */}
          <div className="mb-12">
            <h2 className="text-2xl font-bold text-foreground mb-6">Statistiques</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <Card className="border-border hover:shadow-lg transition-all py-6">
                <CardHeader className="pb-3">
                  <CardTitle className="flex items-center justify-between text-base">
                  <span className="flex items-center gap-2">
                    <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center">
                      <FileText className="w-5 h-5 text-primary" />
                    </div>
                    Articles
                  </span>
                    <TrendingUp className="w-4 h-4 text-green-500" />
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-4xl font-bold text-foreground mb-2">{stats.articles}</p>
                  <div className="flex items-center justify-between text-sm">
                    <span className="text-muted-foreground">Total créés</span>
                    <span className="text-green-600 font-medium">{stats.published} publiés</span>
                  </div>
                </CardContent>
              </Card>

              <Card className="border-border hover:shadow-lg transition-all py-6">
                <CardHeader className="pb-3">
                  <CardTitle className="flex items-center justify-between text-base">
                  <span className="flex items-center gap-2">
                    <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center">
                      <Users className="w-5 h-5 text-primary" />
                    </div>
                    Demandes
                  </span>
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-4xl font-bold text-foreground mb-2">{stats.consultations}</p>
                  <div className="flex items-center justify-between text-sm">
                    <span className="text-muted-foreground">Consultations</span>
                    <span className="text-muted-foreground">En attente</span>
                  </div>
                </CardContent>
              </Card>

              <Card className="border-border hover:shadow-lg transition-all py-6">
                <CardHeader className="pb-3">
                  <CardTitle className="flex items-center justify-between text-base">
                  <span className="flex items-center gap-2">
                    <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center">
                      <BarChart3 className="w-5 h-5 text-primary" />
                    </div>
                    Activité
                  </span>
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-4xl font-bold text-foreground mb-2">
                    {stats.articles + stats.consultations}
                  </p>
                  <div className="flex items-center justify-between text-sm">
                    <span className="text-muted-foreground">Total actions</span>
                    <span className="text-blue-600 font-medium">Ce mois</span>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>

          {/* Management Sections */}
          <div>
            <h2 className="text-2xl font-bold text-foreground mb-6">Gestion du Contenu</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <Card className="border-border hover:shadow-xl transition-all group py-6">
                <CardHeader className="space-y-3">
                  <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center group-hover:scale-110 transition-transform">
                    <FileText className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <CardTitle className="text-xl mb-2">Gestion des Articles</CardTitle>
                    <CardDescription>
                      Créer, éditer, supprimer ou publier les articles du blog juridique
                    </CardDescription>
                  </div>
                </CardHeader>
                <CardContent>
                  <Link href="/admin/articles">
                    <Button className="w-full bg-primary hover:bg-primary/90 text-primary-foreground h-11">
                      Gérer les Articles →
                    </Button>
                  </Link>
                  <div className="mt-4 flex items-center justify-between text-sm text-muted-foreground">
                    <span>{stats.articles} articles</span>
                    <span>{stats.published} publiés</span>
                  </div>
                </CardContent>
              </Card>

              <Card className="border-border hover:shadow-xl transition-all group py-6">
                <CardHeader className="space-y-3">
                  <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center group-hover:scale-110 transition-transform">
                    <Users className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <CardTitle className="text-xl mb-2">Demandes de Consultation</CardTitle>
                    <CardDescription>
                      Consulter et gérer les demandes reçues depuis les formulaires du site
                    </CardDescription>
                  </div>
                </CardHeader>
                <CardContent>
                  <Link href="/admin/consultations">
                    <Button className="w-full bg-primary hover:bg-primary/90 text-primary-foreground h-11">
                      Voir les Demandes →
                    </Button>
                  </Link>
                  <div className="mt-4 flex items-center justify-between text-sm text-muted-foreground">
                    <span>{stats.consultations} demandes</span>
                    <span>0 traitées</span>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>

          {/* Quick Actions */}
          <div className="mt-12 bg-gradient-to-r from-primary/5 to-accent/5 rounded-xl p-6 border border-border">
            <div className="flex items-center justify-between flex-wrap gap-4">
              <div>
                <h3 className="text-lg font-semibold text-foreground mb-1">Actions Rapides</h3>
                <p className="text-sm text-muted-foreground">Accédez rapidement aux fonctionnalités principales</p>
              </div>
              <div className="flex gap-3">
                <Link href="/admin/articles">
                  <Button variant="outline" className="border-border">
                    <FileText className="w-4 h-4 mr-2" />
                    Nouvel Article
                  </Button>
                </Link>
                <Link href="/blog">
                  <Button variant="outline" className="border-border">
                    <Eye className="w-4 h-4 mr-2" />
                    Voir le Blog
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </main>
      </div>
  )
}