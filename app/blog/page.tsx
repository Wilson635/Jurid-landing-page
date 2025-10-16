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
      {/* Header */}
      <Header />

      {/* Hero Section */}
      <section className="py-16 bg-gradient-to-br from-card to-background">
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
              <Input placeholder="Rechercher un article..." className="pl-10 bg-background border-border" />
            </div>
          </div>
        </div>
      </section>

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

          {/* Main Content */}
          <div className="lg:col-span-3">
            {/* Featured Article */}
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
                  <h2 className="text-2xl md:text-3xl font-bold mb-2 text-balance">{featuredArticle.title}</h2>
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

            {/* Articles Grid */}
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
