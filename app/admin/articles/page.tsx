"use client"

import { useEffect, useState } from "react"
import { useRouter } from "next/navigation"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Badge } from "@/components/ui/badge"
import { Edit, Trash2, Eye, EyeOff, Plus, ArrowLeft } from "lucide-react"
import Link from "next/link"

interface Article {
  id: string
  title: string
  excerpt: string
  category: string
  date: string
  published: boolean
}

export default function ArticlesPage() {
  const router = useRouter()
  const [articles, setArticles] = useState<Article[]>([])
  const [showForm, setShowForm] = useState(false)
  const [editingId, setEditingId] = useState<string | null>(null)
  const [formData, setFormData] = useState({
    title: "",
    excerpt: "",
    category: "Conseils pratiques",
    date: new Date().toISOString().split("T")[0],
    published: true,
  })

  useEffect(() => {
    const isAuthenticated = localStorage.getItem("adminAuthenticated") === "true"
    if (!isAuthenticated) {
      router.push("/admin")
      return
    }

    const saved = localStorage.getItem("adminArticles")
    if (saved) {
      setArticles(JSON.parse(saved))
    }
  }, [router])

  const handleSaveArticle = () => {
    if (!formData.title || !formData.excerpt) {
      alert("Veuillez remplir tous les champs")
      return
    }

    if (editingId) {
      const updated = articles.map((a) => (a.id === editingId ? { ...a, ...formData } : a))
      setArticles(updated)
      localStorage.setItem("adminArticles", JSON.stringify(updated))
      setEditingId(null)
    } else {
      const newArticle: Article = {
        id: Date.now().toString(),
        ...formData,
      }
      const updated = [newArticle, ...articles]
      setArticles(updated)
      localStorage.setItem("adminArticles", JSON.stringify(updated))
    }

    setFormData({
      title: "",
      excerpt: "",
      category: "Conseils pratiques",
      date: new Date().toISOString().split("T")[0],
      published: true,
    })
    setShowForm(false)
  }

  const handleDeleteArticle = (id: string) => {
    if (confirm("Êtes-vous sûr de vouloir supprimer cet article ?")) {
      const updated = articles.filter((a) => a.id !== id)
      setArticles(updated)
      localStorage.setItem("adminArticles", JSON.stringify(updated))
    }
  }

  const handleTogglePublish = (id: string) => {
    const updated = articles.map((a) => (a.id === id ? { ...a, published: !a.published } : a))
    setArticles(updated)
    localStorage.setItem("adminArticles", JSON.stringify(updated))
  }

  const handleEditArticle = (article: Article) => {
    setFormData({
      title: article.title,
      excerpt: article.excerpt,
      category: article.category,
      date: article.date,
      published: article.published,
    })
    setEditingId(article.id)
    setShowForm(true)
  }

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
              <h1 className="text-2xl font-bold text-foreground">Gestion des Articles</h1>
            </div>
            <Button
              onClick={() => {
                setShowForm(!showForm)
                setEditingId(null)
                setFormData({
                  title: "",
                  excerpt: "",
                  category: "Conseils pratiques",
                  date: new Date().toISOString().split("T")[0],
                  published: true,
                })
              }}
              className="bg-primary hover:bg-primary/90 text-primary-foreground"
            >
              <Plus className="w-4 h-4 mr-2" />
              Nouvel Article
            </Button>
          </div>
        </div>
      </header>

      <main className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {showForm && (
          <Card className="border-border mb-8">
            <CardHeader>
              <CardTitle>{editingId ? "Modifier l'article" : "Créer un nouvel article"}</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div>
                <label className="text-sm font-medium text-foreground">Titre</label>
                <Input
                  value={formData.title}
                  onChange={(e) => setFormData({ ...formData, title: e.target.value })}
                  placeholder="Titre de l'article"
                  className="mt-1 bg-background border-border"
                />
              </div>
              <div>
                <label className="text-sm font-medium text-foreground">Extrait</label>
                <Textarea
                  value={formData.excerpt}
                  onChange={(e) => setFormData({ ...formData, excerpt: e.target.value })}
                  placeholder="Résumé de l'article"
                  className="mt-1 bg-background border-border"
                  rows={4}
                />
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="text-sm font-medium text-foreground">Catégorie</label>
                  <select
                    value={formData.category}
                    onChange={(e) => setFormData({ ...formData, category: e.target.value })}
                    className="mt-1 w-full px-3 py-2 bg-background border border-border rounded-md text-foreground"
                  >
                    <option>Conseils pratiques</option>
                    <option>Droit des sociétés</option>
                    <option>Droit financier</option>
                    <option>Actualités juridiques</option>
                  </select>
                </div>
                <div>
                  <label className="text-sm font-medium text-foreground">Date</label>
                  <Input
                    type="date"
                    value={formData.date}
                    onChange={(e) => setFormData({ ...formData, date: e.target.value })}
                    className="mt-1 bg-background border-border"
                  />
                </div>
              </div>
              <div className="flex items-center gap-2">
                <input
                  type="checkbox"
                  checked={formData.published}
                  onChange={(e) => setFormData({ ...formData, published: e.target.checked })}
                  id="published"
                />
                <label htmlFor="published" className="text-sm font-medium text-foreground">
                  Publier cet article
                </label>
              </div>
              <div className="flex gap-2">
                <Button onClick={handleSaveArticle} className="bg-primary hover:bg-primary/90 text-primary-foreground">
                  {editingId ? "Mettre à jour" : "Créer"}
                </Button>
                <Button
                  onClick={() => {
                    setShowForm(false)
                    setEditingId(null)
                    setFormData({
                      title: "",
                      excerpt: "",
                      category: "Conseils pratiques",
                      date: new Date().toISOString().split("T")[0],
                      published: true,
                    })
                  }}
                  variant="outline"
                >
                  Annuler
                </Button>
              </div>
            </CardContent>
          </Card>
        )}

        <div className="space-y-4">
          {articles.length === 0 ? (
            <Card className="border-border">
              <CardContent className="py-12 text-center">
                <p className="text-muted-foreground">Aucun article créé pour le moment</p>
              </CardContent>
            </Card>
          ) : (
            articles.map((article) => (
              <Card key={article.id} className="border-border">
                <CardHeader>
                  <div className="flex items-start justify-between">
                    <div className="flex-1">
                      <CardTitle className="text-lg">{article.title}</CardTitle>
                      <CardDescription>{article.excerpt}</CardDescription>
                    </div>
                    <div className="flex gap-2">
                      <Button
                        onClick={() => handleTogglePublish(article.id)}
                        variant="ghost"
                        size="sm"
                        title={article.published ? "Masquer" : "Afficher"}
                      >
                        {article.published ? (
                          <Eye className="w-4 h-4 text-green-600" />
                        ) : (
                          <EyeOff className="w-4 h-4 text-gray-400" />
                        )}
                      </Button>
                      <Button onClick={() => handleEditArticle(article)} variant="ghost" size="sm">
                        <Edit className="w-4 h-4 text-blue-600" />
                      </Button>
                      <Button onClick={() => handleDeleteArticle(article.id)} variant="ghost" size="sm">
                        <Trash2 className="w-4 h-4 text-red-600" />
                      </Button>
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="flex items-center justify-between text-sm text-muted-foreground">
                    <div className="flex gap-2">
                      <Badge variant="secondary">{article.category}</Badge>
                      {!article.published && <Badge variant="destructive">Masqué</Badge>}
                    </div>
                    <span>{article.date}</span>
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
