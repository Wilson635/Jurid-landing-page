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
      // Filtrer uniquement les articles publiés
      const published = parsed.filter((article: Article) => article.published !== false)
      setDynamicArticles(published)
    }
  }, [])

  // Fusionner et trier les articles
  useEffect(() => {
    // Combiner articles dynamiques et statiques
    const combined = [...dynamicArticles, ...staticArticles]

    // Trier par date (du plus récent au plus ancien)
    const sorted = combined.sort((a, b) => {
      const dateA = new Date(a.date).getTime()
      const dateB = new Date(b.date).getTime()
      return dateB - dateA
    })

    setAllArticles(sorted)

    // Définir l'article en vedette (le plus récent)
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
    { name: "Tous les articles", count: allArticles.length, active: true },
    { name: "Droit des sociétés", count: categoryCounts["Droit des sociétés"] || 0, active: false },
    { name: "Droit financier", count: categoryCounts["Droit financier"] || 0, active: false },
    { name: "Actualités juridiques", count: categoryCounts["Actualités juridiques"] || 0, active: false },
    { name: "Conseils pratiques", count: categoryCounts["Conseils pratiques"] || 0, active: false },
  ]

  // Articles pour la grille (exclure l'article en vedette)
  const gridArticles = allArticles.filter(
      (article) => article.slug !== featuredArticle?.slug
  )

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
                Blog <span className="text-primary">Juridique</span>
              </h1>
              <p className="text-xl text-muted-foreground mb-8 text-pretty">
                Actualités, conseils pratiques et analyses juridiques pour vous accompagner dans vos décisions
              </p>

              {/* Search Bar */}
              <div className="max-w-md mx-auto relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground w-4 h-4" />
                <Input placeholder="Rechercher un article..." className="pl-10 bg-background dark:bg-black border-border" />
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
                    Catégories
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
                    Articles Populaires
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
                              <span>{new Date(article.date).toLocaleDateString('fr-FR', {
                                day: 'numeric',
                                month: 'long',
                                year: 'numeric'
                              })}</span>
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
                            <span>{new Date(featuredArticle.date).toLocaleDateString('fr-FR', {
                              day: 'numeric',
                              month: 'long',
                              year: 'numeric'
                            })}</span>
                          </div>
                          <span>{featuredArticle.readTime} de lecture</span>
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
                          <span className="text-xs text-muted-foreground">{article.readTime} de lecture</span>
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
                  Charger plus d'articles
                </Button>
              </div>
            </div>
          </div>
        </div>

        {/* Newsletter Section */}
        <section className="py-16 bg-primary text-primary-foreground">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl font-bold mb-4">Restez Informé</h2>
            <p className="text-xl mb-8 opacity-90">
              Recevez nos derniers articles et analyses juridiques directement dans votre boîte mail
            </p>
            <div className="max-w-md mx-auto flex gap-2">
              <Input
                  placeholder="Votre adresse email"
                  className="bg-primary-foreground text-primary border-primary-foreground"
              />
              <Button variant="secondary" className="bg-accent text-accent-foreground hover:bg-accent/90">
                S'abonner
              </Button>
            </div>
          </div>
        </section>

        {/* Footer */}
        <Footer />
      </div>
  )
}


/**********



import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Input } from "@/components/ui/input"
import { Scale, Calendar, User, Search, BookOpen, TrendingUp } from "lucide-react"
import Link from "next/link"
import Image from "next/image"
import Header from "@/components/ui/header";
import Footer from "@/components/ui/footer";

export default function BlogPage() {
  const categories = [
    { name: "Tous les articles", count: 24, active: true },
    { name: "Droit des sociétés", count: 8, active: false },
    { name: "Droit financier", count: 6, active: false },
    { name: "Actualités juridiques", count: 5, active: false },
    { name: "Conseils pratiques", count: 5, active: false },
  ]

  const featuredArticle = {
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

  const articles = [
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
    {
      title: "Contrats commerciaux : les clauses essentielles à ne pas oublier",
      excerpt:
        "Les points clés à vérifier dans vos contrats commerciaux pour éviter les litiges et protéger vos intérêts.",
      category: "Conseils pratiques",
      date: "10 Mars 2024",
      author: "Me. Marie Leroy",
      readTime: "6 min",
      image: "/commercial-contract-signing.jpg",
      slug: "contrats-commerciaux-clauses-essentielles",
    },
    {
      title: "Financement d'entreprise : crédit-bail vs achat, que choisir ?",
      excerpt: "Comparaison détaillée entre crédit-bail et achat direct pour financer vos équipements professionnels.",
      category: "Droit financier",
      date: "8 Mars 2024",
      author: "Me. Pierre Bernard",
      readTime: "10 min",
      image: "/business-financing-equipment.jpg",
      slug: "credit-bail-vs-achat-financement",
    },
    {
      title: "Réforme du droit des sociétés : impact sur les PME",
      excerpt: "Analyse des récentes modifications législatives et de leur impact concret sur la gestion des PME.",
      category: "Actualités juridiques",
      date: "5 Mars 2024",
      author: "Me. Sophie Martin",
      readTime: "7 min",
      image: "/small-business-legal-reform.jpg",
      slug: "reforme-droit-societes-pme",
    },
    {
      title: "Bail commercial : négocier les meilleures conditions",
      excerpt: "Conseils pratiques pour optimiser la négociation de votre bail commercial et sécuriser votre activité.",
      category: "Conseils pratiques",
      date: "3 Mars 2024",
      author: "Me. Jean Dupont",
      readTime: "9 min",
      image: "/commercial-lease-negotiation.jpg",
      slug: "bail-commercial-negociation",
    },
    {
      title: "Investissement immobilier : les pièges juridiques à éviter",
      excerpt:
        "Les erreurs les plus courantes en investissement immobilier et comment les anticiper avec un accompagnement juridique.",
      category: "Droit financier",
      date: "1 Mars 2024",
      author: "Me. Marie Leroy",
      readTime: "11 min",
      image: "/real-estate-investment-legal.jpg",
      slug: "investissement-immobilier-pieges-juridiques",
    },
  ]

  return (
    <div className="min-h-screen bg-background">
      {/* Header
      <Header />

      {/* Hero Section
      <div className="relative isolate overflow-hidden bg-white dark:bg-black px-6 py-20 sm:py-32 lg:overflow-visible lg:px-0">
        <div className="absolute inset-0 -z-10 overflow-hidden">
          <svg aria-hidden="true"
               viewBox="0 0 1024 1024"
               className="absolute top-0 left-[max(50%,25rem)] h-256 w-full -translate-x-1/2 mask-[radial-gradient(64rem_64rem_at_top,white,transparent)] stroke-gray-200 dark:stroke-gray-700">
            <defs>
              <pattern id="e813992c-7d03-4cc4-a2bd-151760b470a0" width="40" height="40" x="100%" y="-1"
                       patternUnits="userSpaceOnUse">
                <path d="M40 0v40H0" fill="none" stroke="currentColor" stroke-width="0.5"/>
              </pattern>
            </defs>
            <svg x="50%" y="-1" className="overflow-visible w-full fill-gray-200 dark:fill-gray-800">
              <path
                  d="M-100.5 0h201v201h-201Z M699.5 0h201v201h-201Z M499.5 400h201v201h-201Z M-300.5 600h201v201h-201Z"
                  stroke-width="0"/>
            </svg>
            <rect width="100%" height="100%" fill="url(#e813992c-7d03-4cc4-a2bd-151760b470a0)" stroke-width="0"/>
          </svg>
        </div>
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-4xl mx-auto">
            <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-6 text-balance">
              Blog <span className="text-primary">Juridique</span>
            </h1>
            <p className="text-xl text-muted-foreground mb-8 text-pretty">
              Actualités, conseils pratiques et analyses juridiques pour vous accompagner dans vos décisions
            </p>

            {/* Search Bar
            <div className="max-w-md mx-auto relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground w-4 h-4" />
              <Input placeholder="Rechercher un article..." className="pl-10 bg-background dark:bg-black border-border" />
            </div>
          </div>
        </div>
      </div>

      {/*
      <div className="px-6 py-24 sm:py-32 relative rounded-xl overflow-hidden before:absolute before:top-0 w-full before:start-1/2 bg-[url('/squared-bg-light.svg')] before:bg-[url('/squared-bg-light.svg')] dark:bg-[url('/squared-bg-dark.svg')] dark:before:bg-[url('/squared-bg-dark.svg')] bg-no-repeat bg-top :bg-cover before:size-full before:-z-[1] before:transform before:-translate-x-1/2">
        <div className="max-w-[85rem] mx-auto px-4 sm:px-6 lg:px-8 pt-24 pb-10">

          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center max-w-4xl mx-auto">
              <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-6 text-balance">
                Blog <span className="text-primary">Juridique</span>
              </h1>
              <p className="text-xl text-muted-foreground mb-8 text-pretty">
                Actualités, conseils pratiques et analyses juridiques pour vous accompagner dans vos décisions
              </p>

              {/* Search Bar
              <div className="max-w-md mx-auto relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground w-4 h-4" />
                <Input placeholder="Rechercher un article..." className="pl-10 bg-background dark:bg-black border-border" />
              </div>
            </div>
          </div>
        </div>
      </div>
      *

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
          {/* Sidebar
          <div className="lg:col-span-1">
            <Card className="border-border mb-8 py-6">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <BookOpen className="w-5 h-5 text-primary" />
                  Catégories
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
                  Articles Populaires
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {articles.slice(0, 3).map((article, index) => (
                    <Link key={index} href={`/blog/${article.slug}`} className="block group">
                      <div className="space-y-2">
                        <h4 className="text-sm font-medium text-foreground group-hover:text-primary transition-colors line-clamp-2">
                          {article.title}
                        </h4>
                        <div className="flex items-center gap-2 text-xs text-muted-foreground">
                          <Calendar className="w-3 h-3" />
                          <span>{article.date}</span>
                        </div>
                      </div>
                    </Link>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Main Content
          <div className="lg:col-span-3">
            {/* Featured Article
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
                  {/*<h2 className="text-2xl md:text-3xl font-bold mb-2 text-balance">{featuredArticle.title}</h2>
                  <p className="text-white/90 mb-4 text-pretty">{featuredArticle.excerpt}</p>
                  <div className="flex items-center gap-4 text-sm text-white/80">
                    <div className="flex items-center gap-1">
                      <User className="w-4 h-4" />
                      <span>{featuredArticle.author}</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <Calendar className="w-4 h-4" />
                      <span>{featuredArticle.date}</span>
                    </div>
                    <span>{featuredArticle.readTime} de lecture</span>
                  </div>
                </div>
              </div>
            </Card>

            {/* Articles Grid
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {articles.map((article, index) => (
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
                      <span className="text-xs text-muted-foreground">{article.readTime} de lecture</span>
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

            {/* Load More
            <div className="text-center mt-12">
              <Button variant="outline" size="lg">
                Charger plus d'articles
              </Button>
            </div>
          </div>
        </div>
      </div>

      {/* Newsletter Section
      <section className="py-16 bg-primary text-primary-foreground">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold mb-4">Restez Informé</h2>
          <p className="text-xl mb-8 opacity-90">
            Recevez nos derniers articles et analyses juridiques directement dans votre boîte mail
          </p>
          <div className="max-w-md mx-auto flex gap-2">
            <Input
              placeholder="Votre adresse email"
              className="bg-primary-foreground text-primary border-primary-foreground"
            />
            <Button variant="secondary" className="bg-accent text-accent-foreground hover:bg-accent/90">
              S'abonner
            </Button>
          </div>
        </div>

      </section>

      {/* Footer
      <Footer />

    </div>
  )
}
*/