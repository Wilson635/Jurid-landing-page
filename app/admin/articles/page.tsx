"use client"

import { useEffect, useState, useRef } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Badge } from "@/components/ui/badge"
import {
  Edit,
  Trash2,
  Eye,
  EyeOff,
  Plus,
  ArrowLeft,
  Upload,
  X,
  Bold,
  Italic,
  List,
  ListOrdered,
  Link2,
  Calendar, LogOut, Moon, Sun, Users, Clock, CheckCircle2
} from "lucide-react"
import Link from "next/link";
import {useTheme} from "@/hooks/use-theme";

interface Article {
  id: string
  title: string
  excerpt: string
  content: string
  category: string
  date: string
  author: string
  readTime: string
  image: string
  slug: string
  published: boolean
}

export default function ArticlesPage() {
  const [articles, setArticles] = useState<Article[]>([])
  const [showForm, setShowForm] = useState(false)
  const [editingId, setEditingId] = useState<string | null>(null)
  const [imagePreview, setImagePreview] = useState<string>("")
  const fileInputRef = useRef<HTMLInputElement>(null)
  const contentRef = useRef<HTMLTextAreaElement>(null)

  const { theme, toggleTheme } = useTheme()

  const [formData, setFormData] = useState({
    title: "",
    excerpt: "",
    content: "",
    category: "Conseils pratiques",
    date: new Date().toISOString().split("T")[0],
    author: "Me. Sophie Martin",
    readTime: "5 min",
    image: "/placeholder.svg",
    published: true,
  })

  const generateSlug = (title: string): string => {
    return title
        .toLowerCase()
        .trim()
        .replace(/[^\w\s-]/g, "")
        .replace(/\s+/g, "-")
        .replace(/-+/g, "-")
  }

  useEffect(() => {
    const saved = localStorage.getItem("adminArticles")
    if (saved) {
      setArticles(JSON.parse(saved))
    }
  }, [])

  useEffect(() => {
    if (formData.image && formData.image !== "/placeholder.svg") {
      setImagePreview(formData.image)
    }
  }, [formData.image])

  const handleImageUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0]
    if (file) {
      const reader = new FileReader()
      reader.onloadend = () => {
        const base64String = reader.result as string
        setImagePreview(base64String)
        setFormData({ ...formData, image: base64String })
      }
      reader.readAsDataURL(file)
    }
  }

  const removeImage = () => {
    setImagePreview("")
    setFormData({ ...formData, image: "/placeholder.svg" })
    if (fileInputRef.current) {
      fileInputRef.current.value = ""
    }
  }

  const insertFormatting = (before: string, after: string = "") => {
    const textarea = contentRef.current
    if (!textarea) return

    const start = textarea.selectionStart
    const end = textarea.selectionEnd
    const selectedText = formData.content.substring(start, end)
    const newText =
        formData.content.substring(0, start) +
        before +
        selectedText +
        after +
        formData.content.substring(end)

    setFormData({ ...formData, content: newText })

    setTimeout(() => {
      textarea.focus()
      textarea.setSelectionRange(
          start + before.length,
          end + before.length
      )
    }, 0)
  }

  const handleSaveArticle = () => {
    if (!formData.title || !formData.excerpt || !formData.content) {
      alert("Veuillez remplir tous les champs obligatoires")
      return
    }

    const slug = generateSlug(formData.title)

    if (editingId) {
      const updated = articles.map((a) => (a.id === editingId ? { ...a, ...formData, slug } : a))
      setArticles(updated)
      localStorage.setItem("adminArticles", JSON.stringify(updated))
      setEditingId(null)
    } else {
      const newArticle: Article = {
        id: Date.now().toString(),
        ...formData,
        slug,
      }
      const updated = [newArticle, ...articles]
      setArticles(updated)
      localStorage.setItem("adminArticles", JSON.stringify(updated))
    }

    resetForm()
  }

  const resetForm = () => {
    setFormData({
      title: "",
      excerpt: "",
      content: "",
      category: "Conseils pratiques",
      date: new Date().toISOString().split("T")[0],
      author: "Me. Sophie Martin",
      readTime: "5 min",
      image: "/placeholder.svg",
      published: true,
    })
    setImagePreview("")
    setShowForm(false)
    setEditingId(null)
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
      content: article.content,
      category: article.category,
      date: article.date,
      author: article.author,
      readTime: article.readTime,
      image: article.image,
      published: article.published,
    })
    setEditingId(article.id)
    setImagePreview(article.image !== "/placeholder.svg" ? article.image : "")
    setShowForm(true)
  }

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

  const slug = generateSlug(formData.title)

  return (
      <div className="min-h-screen bg-background">
        {/* Header */}
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
                  <Button variant="outline" size="sm" onClick={handleLogout} className="p-5 backdrop-blur-sm rounded-none border-border">
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
                  <Button
                      onClick={() => {
                        setShowForm(!showForm)
                        if (showForm) resetForm()
                      }}
                      className="bg-black rounded-none hover:bg-black/90 dark:bg-white dark:hover:bg-white/90 dark:text-black text-white"
                  >
                    <Plus className="w-4 h-4 mr-2" />
                    Nouvel Article
                  </Button>
                </div>
              </div>
            </div>

            <div className="py-12 md:py-16">
              <div className="max-w-3xl">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center">
                    <ListOrdered className="w-6 h-6 text-primary" />
                  </div>
                  <h1 className="text-4xl md:text-5xl font-bold text-foreground">
                    Gestion des <span className="text-primary">Articles</span>
                  </h1>
                </div>
                <p className="text-xl text-muted-foreground mb-8">
                    Créez, modifiez et gérez les articles de votre blog juridique depuis ce tableau de bord intuitif.
                </p>

              </div>
            </div>
          </div>
        </div>

        <main className="container mx-auto px-4 sm:px-6 lg:px-8 py-8">
          {showForm && (
              <Card className="mb-8 shadow-lg">
                <CardHeader className="bg-gradient-to-r from-black/10 to-black/10 border-b py-2.5">
                  <CardTitle className="text-2xl">{editingId ? "Modifier l'article" : "Créer un nouvel article"}</CardTitle>
                  {slug && (
                      <p className="text-sm text-gray-600 mt-2">
                        URL: <code className="bg-white px-3 py-1 rounded border text-black">/{slug}</code>
                      </p>
                  )}
                </CardHeader>
                <CardContent className="p-6 space-y-6">
                  {/* Image Upload Section */}
                  <div className="bg-gray-50 p-6 rounded-lg border-2 border-dashed border-gray-300">
                    <label className="block text-sm font-semibold text-gray-700 mb-3">
                      Image de couverture
                    </label>

                    {imagePreview ? (
                        <div className="relative">
                          <img
                              src={imagePreview}
                              alt="Aperçu"
                              className="w-full h-96 object-cover rounded-lg shadow-md"
                          />
                          <Button
                              onClick={removeImage}
                              variant="destructive"
                              size="sm"
                              className="absolute top-2 right-2"
                          >
                            <X className="w-4 h-4 mr-1" />
                            Supprimer
                          </Button>
                        </div>
                    ) : (
                        <div
                            onClick={() => fileInputRef.current?.click()}
                            className="border-2 border-dashed border-gray-300 rounded-lg p-12 text-center cursor-pointer hover:border-blue-500 hover:bg-blue-50 transition-colors"
                        >
                          <Upload className="w-12 h-12 mx-auto text-gray-400 mb-3" />
                          <p className="text-gray-600 font-medium">Cliquez pour télécharger une image</p>
                          <p className="text-sm text-gray-500 mt-1">PNG, JPG jusqu'à 5MB</p>
                        </div>
                    )}

                    <input
                        ref={fileInputRef}
                        type="file"
                        accept="image/*"
                        onChange={handleImageUpload}
                        className="hidden"
                    />
                  </div>

                  {/* Title */}
                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2">
                      Titre <span className="text-red-500">*</span>
                    </label>
                    <Input
                        value={formData.title}
                        onChange={(e) => setFormData({ ...formData, title: e.target.value })}
                        placeholder="Titre accrocheur de l'article"
                        className="text-lg font-medium"
                    />
                  </div>

                  {/* Excerpt */}
                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2">
                      Extrait <span className="text-red-500">*</span>
                    </label>
                    <Textarea
                        value={formData.excerpt}
                        onChange={(e) => setFormData({ ...formData, excerpt: e.target.value })}
                        placeholder="Résumé court qui apparaîtra dans la liste des articles"
                        rows={3}
                    />
                  </div>

                  {/* Content Editor */}
                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2">
                      Contenu <span className="text-red-500">*</span>
                    </label>

                    {/* Formatting Toolbar */}
                    <div className="flex gap-1 p-2 bg-gray-100 rounded-t-lg border border-b-0">
                      <Button
                          type="button"
                          variant="ghost"
                          size="sm"
                          onClick={() => insertFormatting("<strong>", "</strong>")}
                          title="Gras"
                      >
                        <Bold className="w-4 h-4" />
                      </Button>
                      <Button
                          type="button"
                          variant="ghost"
                          size="sm"
                          onClick={() => insertFormatting("<em>", "</em>")}
                          title="Italique"
                      >
                        <Italic className="w-4 h-4" />
                      </Button>
                      <div className="w-px bg-gray-300 mx-1" />
                      <Button
                          type="button"
                          variant="ghost"
                          size="sm"
                          onClick={() => insertFormatting("<h2>", "</h2>")}
                          title="Titre"
                      >
                        H2
                      </Button>
                      <Button
                          type="button"
                          variant="ghost"
                          size="sm"
                          onClick={() => insertFormatting("<h3>", "</h3>")}
                          title="Sous-titre"
                      >
                        H3
                      </Button>
                      <div className="w-px bg-gray-300 mx-1" />
                      <Button
                          type="button"
                          variant="ghost"
                          size="sm"
                          onClick={() => insertFormatting("<ul>\n  <li>", "</li>\n</ul>")}
                          title="Liste à puces"
                      >
                        <List className="w-4 h-4" />
                      </Button>
                      <Button
                          type="button"
                          variant="ghost"
                          size="sm"
                          onClick={() => insertFormatting("<ol>\n  <li>", "</li>\n</ol>")}
                          title="Liste numérotée"
                      >
                        <ListOrdered className="w-4 h-4" />
                      </Button>
                      <div className="w-px bg-gray-300 mx-1" />
                      <Button
                          type="button"
                          variant="ghost"
                          size="sm"
                          onClick={() => insertFormatting('<a href="URL">', "</a>")}
                          title="Lien"
                      >
                        <Link2 className="w-4 h-4" />
                      </Button>
                      <Button
                          type="button"
                          variant="ghost"
                          size="sm"
                          onClick={() => insertFormatting("<p>", "</p>")}
                          title="Paragraphe"
                      >
                        P
                      </Button>
                    </div>

                    <Textarea
                        ref={contentRef}
                        value={formData.content}
                        onChange={(e) => setFormData({ ...formData, content: e.target.value })}
                        placeholder="Contenu complet de l'article (HTML supporté)"
                        className="font-mono text-sm rounded-t-none"
                        rows={12}
                    />
                    <p className="text-xs text-gray-500 mt-1">
                      💡 Utilisez la barre d'outils pour formater votre texte
                    </p>
                  </div>

                  {/* Metadata Grid */}
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-semibold text-gray-700 mb-2">Catégorie</label>
                      <select
                          value={formData.category}
                          onChange={(e) => setFormData({ ...formData, category: e.target.value })}
                          className="w-full px-3 py-2 bg-white border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                      >
                        <option>Conseils pratiques</option>
                        <option>Droit des sociétés</option>
                        <option>Droit financier</option>
                        <option>Actualités juridiques</option>
                      </select>
                    </div>
                    <div>
                      <label className="block text-sm font-semibold text-gray-700 mb-2">Date</label>
                      <Input
                          type="date"
                          value={formData.date}
                          onChange={(e) => setFormData({ ...formData, date: e.target.value })}
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-semibold text-gray-700 mb-2">Auteur</label>
                      <Input
                          value={formData.author}
                          onChange={(e) => setFormData({ ...formData, author: e.target.value })}
                          placeholder="Me. Sophie Martin"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-semibold text-gray-700 mb-2">Temps de lecture</label>
                      <Input
                          value={formData.readTime}
                          onChange={(e) => setFormData({ ...formData, readTime: e.target.value })}
                          placeholder="5 min"
                      />
                    </div>
                  </div>

                  {/* Publish Toggle */}
                  <div className="flex items-center gap-3 p-4 bg-black/10 rounded-lg border border-black/30">
                    <input
                        type="checkbox"
                        checked={formData.published}
                        onChange={(e) => setFormData({ ...formData, published: e.target.checked })}
                        id="published"
                        className="w-5 h-5 text-black rounded bg-black/30 dark:bg-white/30 border-black/30 dark:border-white/30 focus:ring-2 focus:ring-offset-0 focus:ring-black dark:focus:ring-white"
                    />
                    <label htmlFor="published" className="text-sm font-medium text-black cursor-pointer">
                      Publier cet article immédiatement
                    </label>
                  </div>

                  {/* Action Buttons */}
                  <div className="flex gap-3 pt-4 border-t">
                    <Button
                        onClick={handleSaveArticle}
                        className="bg-black dark:bg-white hover:bg-black/90 dark:hover:bg-white/90 dark:text-black text-white px-8"
                    >
                      {editingId ? "Mettre à jour" : "Créer l'article"}
                    </Button>
                    <Button
                        onClick={resetForm}
                        variant="outline"
                    >
                      Annuler
                    </Button>
                  </div>
                </CardContent>
              </Card>
          )}

          {/* Articles List */}
          <div className="space-y-4">
            <h2 className="text-xl font-bold text-gray-900 mb-4">
              Articles publiés ({articles.filter(a => a.published).length}/{articles.length})
            </h2>

            {articles.length === 0 ? (
                <Card>
                  <CardContent className="py-16 text-center">
                    <div className="text-gray-400 mb-4">
                      <svg className="w-16 h-16 mx-auto" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                      </svg>
                    </div>
                    <p className="text-gray-600 text-lg">Aucun article créé pour le moment</p>
                    <p className="text-gray-500 text-sm mt-2">Commencez par créer votre premier article</p>
                  </CardContent>
                </Card>
            ) : (
                articles.map((article) => (
                    <Card key={article.id} className="group hover:shadow-xl transition-all duration-300 border-l-4 border-l-blue-500 overflow-hidden bg-white">
                      <div className="flex flex-col md:flex-row">
                        {/* Image Section */}
                        {article.image && article.image !== "/placeholder.svg" && (
                            <div className="relative md:w-72 h-48 md:h-auto flex-shrink-0 overflow-hidden bg-gray-100">
                              <img
                                  src={article.image}
                                  alt={article.title}
                                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                              />
                              {/* Status Overlay */}
                              <div className="absolute top-3 left-3">
                                {article.published ? (
                                    <Badge className="bg-green-500 text-white shadow-lg">
                                      <Eye className="w-3 h-3 mr-1" />
                                      Publié
                                    </Badge>
                                ) : (
                                    <Badge className="bg-gray-700 text-white shadow-lg">
                                      <EyeOff className="w-3 h-3 mr-1" />
                                      Brouillon
                                    </Badge>
                                )}
                              </div>
                            </div>
                        )}

                        {/* Content Section */}
                        <div className="flex-1 flex flex-col py-5">
                          <CardHeader className="pb-3">
                            <div className="flex items-start justify-between gap-4">
                              <div className="flex-1 space-y-2">
                                <div className="flex items-center gap-2 text-xs text-gray-500 ">
                                  <Badge variant="secondary" className="bg-blue-100 text-blue-700 font-medium">
                                    {article.category}
                                  </Badge>
                                  <span>•</span>
                                  <span>{new Date(article.date).toLocaleDateString('fr-FR', {
                                    day: 'numeric',
                                    month: 'long',
                                    year: 'numeric'
                                  })}</span>
                                  <span>•</span>
                                  <span>{article.readTime}</span>
                                </div>

                                <CardTitle className="text-xl font-bold text-gray-900 group-hover:text-blue-600 transition-colors leading-tight">
                                  {article.title}
                                </CardTitle>

                                <div className="flex items-center gap-2 text-xs">
                                  <code className="bg-gray-100 text-gray-600 px-2 py-1 rounded text-[10px] font-mono">
                                    /{article.slug}
                                  </code>
                                </div>
                              </div>

                              {/* Action Buttons */}
                              <div className="flex gap-1">
                                <Button
                                    onClick={() => handleTogglePublish(article.id)}
                                    variant="ghost"
                                    size="sm"
                                    className="hover:bg-green-50"
                                    title={article.published ? "Masquer" : "Publier"}
                                >
                                  {article.published ? (
                                      <Eye className="w-4 h-4 text-green-600" />
                                  ) : (
                                      <EyeOff className="w-4 h-4 text-gray-400" />
                                  )}
                                </Button>
                                {/*<Button
                                    onClick={() => handleEditArticle(article)}
                                    variant="ghost"
                                    size="sm"
                                    className="hover:bg-blue-50"
                                    title="Modifier"
                                >
                                  <Edit className="w-4 h-4 text-blue-600" />
                                </Button>*/}
                                <Button
                                    onClick={() => handleDeleteArticle(article.id)}
                                    variant="ghost"
                                    size="sm"
                                    className="hover:bg-red-50"
                                    title="Supprimer"
                                >
                                  <Trash2 className="w-4 h-4 text-red-600" />
                                </Button>
                              </div>
                            </div>
                          </CardHeader>

                          <CardContent className="pt-0 flex-1">
                            <CardDescription className="text-gray-600 leading-relaxed line-clamp-2">
                              {article.excerpt}
                            </CardDescription>

                            {/* Author Info */}
                            <div className="mt-4 pt-4 border-t border-gray-100 flex items-center justify-between">
                              <div className="flex items-center gap-2">
                                <div className="w-8 h-8 rounded-full bg-gradient-to-br from-blue-500 to-indigo-600 flex items-center justify-center text-white text-xs font-semibold">
                                  {article.author.split(' ').map(n => n[0]).join('').slice(0, 2)}
                                </div>
                                <div>
                                  <p className="text-sm font-medium text-gray-900">{article.author}</p>
                                  <p className="text-xs text-gray-500">Auteur</p>
                                </div>
                              </div>

                              <Button
                                  variant="ghost"
                                  size="sm"
                                  onClick={() => handleEditArticle(article)}
                                  className="text-blue-600 hover:text-blue-700 hover:bg-blue-50"
                              >
                                Modifier l'article →
                              </Button>
                            </div>
                          </CardContent>
                        </div>
                      </div>
                    </Card>
                ))
            )}
          </div>
        </main>
      </div>
  )
}
