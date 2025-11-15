"use client"

import { useEffect, useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Input } from "@/components/ui/input"
import { Scale, Calendar, User, Search, BookOpen, TrendingUp } from "lucide-react"
import Link from "next/link"
import Image from "next/image"
import Header from "@/components/ui/header"
import Footer from "@/components/ui/footer"
import { useTranslation } from "@/hooks/use-translation"

interface Article {
  id?: string
  title: string
  excerpt: string
  content?: string
  category: string
  date: string
  author: string
  readTime: string
  image: string
  slug: string
  published?: boolean
}

export default function BlogPage() {
  const { t, language } = useTranslation()
  const [dynamicArticles, setDynamicArticles] = useState<Article[]>([])
  const [allArticles, setAllArticles] = useState<Article[]>([])
  const [featuredArticle, setFeaturedArticle] = useState<Article | null>(null)

  // Articles statiques par défaut
  const staticArticles: Article[] = [
    {
      title: "Nouvelle réglementation sur la protection des données : ce qui change pour les entreprises",
      excerpt:
          "Analyse complète des dernières évolutions du RGPD et leurs implications pratiques pour les entreprises françaises.",
      category: "Actualités juridiques",
      date: "15 Mars 2024",
      author: "Me. Sophie Martin",
      readTime: "8 min",
      image: "/legal-documents-and-data-protection.jpg",
      slug: "nouvelle-reglementation-protection-donnees",
    },
    {
      title: "Guide complet pour créer sa SAS en 2024",
      excerpt:
          "Tout ce qu'il faut savoir sur la création d'une SAS : avantages, inconvénients, formalités et optimisations fiscales.",
      category: "Droit des sociétés",
      date: "12 Mars 2024",
      author: "Me. Jean Dupont",
      readTime: "12 min",
      image: "/business-formation-documents.jpg",
      slug: "guide-creation-sas-2024",
    },
  ]

  const defaultFeatured: Article = {
    title: "Nouvelle réglementation sur la protection des données : ce qui change pour les entreprises",
    excerpt:
        "Analyse complète des dernières évolutions du RGPD et leurs implications pratiques pour les entreprises françaises.",
    category: "Actualités juridiques",
    date: "15 Mars 2024",
    author: "Me. Sophie Martin",
    readTime: "8 min",
    image: "/legal-documents-and-data-protection.jpg",
    slug: "nouvelle-reglementation-protection-donnees",
  }

  // Charger les articles dynamiques depuis localStorage
  useEffect(() => {
    const savedArticles = localStorage.getItem("adminArticles")
    if (savedArticles) {
      const parsed = JSON.parse(savedArticles)
      const published = parsed.filter((article: Article) => article.published !== false)
      setDynamicArticles(published)
    }
  }, [])

  // Fusionner et trier les articles
  useEffect(() => {
    const combined = [...dynamicArticles, ...staticArticles]
    const sorted = combined.sort((a, b) => {
      const dateA = new Date(a.date).getTime()
      const dateB = new Date(b.date).getTime()
      return dateB - dateA
    })

    setAllArticles(sorted)

    if (sorted.length > 0) {
      setFeaturedArticle(sorted[0])
    } else {
      setFeaturedArticle(defaultFeatured)
    }
  }, [dynamicArticles])

  // Calculer les catégories dynamiquement
  const getCategoryCounts = () => {
    const counts: { [key: string]: number } = {}
    allArticles.forEach((article) => {
      counts[article.category] = (counts[article.category] || 0) + 1
    })
    return counts
  }

  const categoryCounts = getCategoryCounts()
  const categories = [
    { name: t.blog.sidebar.allArticles, count: allArticles.length, active: true },
    { name: "Droit des sociétés", count: categoryCounts["Droit des sociétés"] || 0, active: false },
    { name: "Droit financier", count: categoryCounts["Droit financier"] || 0, active: false },
    { name: "Actualités juridiques", count: categoryCounts["Actualités juridiques"] || 0, active: false },
    { name: "Conseils pratiques", count: categoryCounts["Conseils pratiques"] || 0, active: false },
  ]

  // Articles pour la grille (exclure l'article en vedette)
  const gridArticles = allArticles.filter(
      (article) => article.slug !== featuredArticle?.slug
  )

  // Formater la date selon la langue
  const formatDate = (dateString: string) => {
    const date = new Date(dateString)
    return date.toLocaleDateString(language === "fr" ? "fr-FR" : "en-US", {
      day: 'numeric',
      month: 'long',
      year: 'numeric'
    })
  }

  return (
      <div className="min-h-screen bg-background">
        {/* Header */}
        <Header />

        {/* Hero Section */}
        <div className="relative isolate overflow-hidden bg-white dark:bg-black px-6 py-20 sm:py-32 lg:overflow-visible lg:px-0">
          <div className="absolute inset-0 -z-10 overflow-hidden">
            <svg
                aria-hidden="true"
                viewBox="0 0 1024 1024"
                className="absolute top-0 left-[max(50%,25rem)] h-256 w-full -translate-x-1/2 mask-[radial-gradient(64rem_64rem_at_top,white,transparent)] stroke-gray-200 dark:stroke-gray-700"
            >
              <defs>
                <pattern
                    id="e813992c-7d03-4cc4-a2bd-151760b470a0"
                    width="40"
                    height="40"
                    x="100%"
                    y="-1"
                    patternUnits="userSpaceOnUse"
                >
                  <path d="M40 0v40H0" fill="none" stroke="currentColor" strokeWidth="0.5" />
                </pattern>
              </defs>
              <svg x="50%" y="-1" className="overflow-visible w-full fill-gray-200 dark:fill-gray-800">
                <path
                    d="M-100.5 0h201v201h-201Z M699.5 0h201v201h-201Z M499.5 400h201v201h-201Z M-300.5 600h201v201h-201Z"
                    strokeWidth="0"
                />
              </svg>
              <rect width="100%" height="100%" fill="url(#e813992c-7d03-4cc4-a2bd-151760b470a0)" strokeWidth="0" />
            </svg>
          </div>
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center max-w-4xl mx-auto">
              <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-6 text-balance">
                {t.blog.hero.title} <span className="text-primary">{t.blog.hero.titleHighlight}</span>
              </h1>
              <p className="text-xl text-muted-foreground mb-8 text-pretty">
                {t.blog.hero.subtitle}
              </p>

              {/* Search Bar */}
              <div className="max-w-md mx-auto relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground w-4 h-4" />
                <Input placeholder={t.blog.hero.searchPlaceholder} className="pl-10 bg-background dark:bg-black border-border" />
              </div>
            </div>
          </div>
        </div>

        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
            {/* Sidebar */}
            <div className="lg:col-span-1">
              <Card className="border-border mb-8 py-6">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <BookOpen className="w-5 h-5 text-primary" />
                    {t.blog.sidebar.categories}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-2">
                    {categories.map((category, index) => (
                        <button
                            key={index}
                            className={`w-full text-left px-3 py-2 rounded-md transition-colors ${
                                category.active
                                    ? "bg-primary text-primary-foreground"
                                    : "hover:bg-muted text-muted-foreground hover:text-foreground"
                            }`}
                        >
                          <div className="flex items-center justify-between">
                            <span className="text-sm">{category.name}</span>
                            <span className="text-xs">{category.count}</span>
                          </div>
                        </button>
                    ))}
                  </div>
                </CardContent>
              </Card>

              <Card className="border-border py-6">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <TrendingUp className="w-5 h-5 text-accent" />
                    {t.blog.sidebar.popularArticles}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    {allArticles.slice(0, 3).map((article, index) => (
                        <Link key={index} href={`/blog/${article.slug}`} className="block group">
                          <div className="space-y-2">
                            <h4 className="text-sm font-medium text-foreground group-hover:text-primary transition-colors line-clamp-2">
                              {article.title}
                            </h4>
                            <div className="flex items-center gap-2 text-xs text-muted-foreground">
                              <Calendar className="w-3 h-3" />
                              <span>{formatDate(article.date)}</span>
                            </div>
                          </div>
                        </Link>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Main Content */}
            <div className="lg:col-span-3">
              {/* Featured Article */}
              {featuredArticle && (
                  <Card className="border-border mb-12 overflow-hidden">
                    <div className="relative h-64 md:h-80">
                      <Image
                          src={featuredArticle.image || "/placeholder.svg"}
                          alt={featuredArticle.title}
                          fill
                          className="object-cover"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                      <div className="absolute bottom-6 left-6 right-6 text-white">
                        <Badge className="bg-accent text-accent-foreground mb-3">{featuredArticle.category}</Badge>
                        <CardTitle className="text-2xl md:text-3xl font-bold mb-2 text-balance">
                          <Link href={`/blog/${featuredArticle.slug}`}>{featuredArticle.title}</Link>
                        </CardTitle>
                        <p className="text-white/90 mb-4 text-pretty">{featuredArticle.excerpt}</p>
                        <div className="flex items-center gap-4 text-sm text-white/80">
                          <div className="flex items-center gap-1">
                            <User className="w-4 h-4" />
                            <span>{featuredArticle.author}</span>
                          </div>
                          <div className="flex items-center gap-1">
                            <Calendar className="w-4 h-4" />
                            <span>{formatDate(featuredArticle.date)}</span>
                          </div>
                          <span>{featuredArticle.readTime} {t.blog.article.readTime}</span>
                        </div>
                      </div>
                    </div>
                  </Card>
              )}

              {/* Articles Grid */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {gridArticles.map((article, index) => (
                    <Card key={index} className="border-border pb-6 hover:shadow-lg transition-shadow group">
                      <div className="relative h-48 overflow-hidden rounded-t-lg">
                        <Image
                            src={article.image || "/placeholder.svg"}
                            alt={article.title}
                            fill
                            className="object-cover group-hover:scale-105 transition-transform duration-300"
                        />
                      </div>
                      <CardHeader>
                        <div className="flex items-center justify-between mb-2">
                          <Badge variant="secondary" className="text-xs">
                            {article.category}
                          </Badge>
                          <span className="text-xs text-muted-foreground">{article.readTime} {t.blog.article.readTime}</span>
                        </div>
                        <CardTitle className="text-lg group-hover:text-primary transition-colors">
                          <Link href={`/blog/${article.slug}`}>{article.title}</Link>
                        </CardTitle>
                        <CardDescription className="text-sm">{article.excerpt}</CardDescription>
                      </CardHeader>
                      <CardContent>
                        <div className="flex items-center justify-between text-xs text-muted-foreground">
                          <div className="flex items-center gap-1">
                            <User className="w-3 h-3" />
                            <span>{article.author}</span>
                          </div>
                          <div className="flex items-center gap-1">
                            <Calendar className="w-3 h-3" />
                            <span>{article.date}</span>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                ))}
              </div>

              {/* Load More */}
              <div className="text-center mt-12">
                <Button variant="outline" size="lg">
                  {t.blog.actions.loadMore}
                </Button>
              </div>
            </div>
          </div>
        </div>

        {/* Newsletter Section */}
        <section className="py-16 bg-primary text-primary-foreground">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl font-bold mb-4">{t.blog.newsletter.title}</h2>
            <p className="text-xl mb-8 opacity-90">
              {t.blog.newsletter.subtitle}
            </p>
            <div className="max-w-md mx-auto flex gap-2">
              <Input
                  placeholder={t.blog.newsletter.emailPlaceholder}
                  className="bg-primary-foreground text-primary border-primary-foreground"
              />
              <Button variant="secondary" className="bg-accent text-accent-foreground hover:bg-accent/90">
                {t.blog.newsletter.subscribe}
              </Button>
            </div>
          </div>
        </section>

        {/* Footer */}
        <Footer />
      </div>
  )
}