import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Scale, Calendar, User, ArrowLeft, Share2, BookOpen, Clock } from "lucide-react"
import Link from "next/link"
import Image from "next/image"
import Header from "@/components/ui/header";
import Footer from "@/components/ui/footer";

// This would typically come from a CMS or database
const getArticleBySlug = (slug: string) => {
  const articles = {
    "nouvelle-reglementation-protection-donnees": {
      title: "Nouvelle réglementation sur la protection des données : ce qui change pour les entreprises",
      excerpt:
        "Analyse complète des dernières évolutions du RGPD et leurs implications pratiques pour les entreprises françaises.",
      content: `
        <p>La protection des données personnelles continue d'évoluer avec de nouvelles réglementations qui impactent directement les entreprises françaises. Cette analyse détaillée vous présente les changements majeurs et leurs implications pratiques.</p>

        <h2>Les principales évolutions réglementaires</h2>
        <p>Depuis l'entrée en vigueur du RGPD en 2018, plusieurs textes sont venus compléter et préciser le cadre juridique de la protection des données. Les dernières évolutions portent notamment sur :</p>
        <ul>
          <li>Le renforcement des obligations de transparence</li>
          <li>L'extension du droit à l'effacement</li>
          <li>De nouvelles sanctions pour les violations de données</li>
          <li>L'encadrement des transferts internationaux</li>
        </ul>

        <h2>Impact sur les entreprises</h2>
        <p>Ces évolutions nécessitent une adaptation des pratiques internes des entreprises. Les principales mesures à mettre en place incluent :</p>

        <h3>Mise à jour des politiques internes</h3>
        <p>Il est essentiel de réviser vos politiques de confidentialité et vos procédures internes pour intégrer les nouvelles obligations. Cela comprend la mise à jour des mentions d'information et des formulaires de consentement.</p>

        <h3>Formation des équipes</h3>
        <p>Vos collaborateurs doivent être sensibilisés aux nouvelles règles, particulièrement ceux qui manipulent des données personnelles au quotidien.</p>

        <h2>Recommandations pratiques</h2>
        <p>Pour vous conformer aux nouvelles exigences, nous recommandons de :</p>
        <ol>
          <li>Effectuer un audit de conformité complet</li>
          <li>Mettre à jour votre registre des traitements</li>
          <li>Réviser vos contrats avec les sous-traitants</li>
          <li>Implémenter de nouvelles mesures de sécurité</li>
        </ol>

        <p>Notre cabinet vous accompagne dans cette démarche de mise en conformité pour sécuriser juridiquement vos traitements de données personnelles.</p>
      `,
      category: "Actualités juridiques",
      date: "15 Mars 2024",
      author: "Me. Sophie Martin",
      readTime: "8 min",
      image: "/legal-documents-and-data-protection.jpg",
      tags: ["RGPD", "Protection des données", "Conformité", "Entreprises"],
    },
    "guide-creation-sas-2024": {
      title: "Guide complet pour créer sa SAS en 2024",
      excerpt:
        "Tout ce qu'il faut savoir sur la création d'une SAS : avantages, inconvénients, formalités et optimisations fiscales.",
      content: `
        <p>La Société par Actions Simplifiée (SAS) reste l'une des formes juridiques les plus prisées par les entrepreneurs. Ce guide complet vous accompagne dans toutes les étapes de création.</p>

        <h2>Pourquoi choisir la SAS ?</h2>
        <p>La SAS offre de nombreux avantages qui expliquent son succès auprès des créateurs d'entreprise :</p>
        <ul>
          <li>Flexibilité dans l'organisation et la gouvernance</li>
          <li>Responsabilité limitée des associés</li>
          <li>Facilité d'entrée et de sortie des associés</li>
          <li>Régime social avantageux pour le président</li>
        </ul>

        <h2>Les étapes de création</h2>
        <p>La création d'une SAS suit un processus structuré en plusieurs étapes clés :</p>

        <h3>1. Rédaction des statuts</h3>
        <p>Les statuts constituent l'acte fondateur de votre SAS. Ils doivent obligatoirement contenir certaines mentions et peuvent être personnalisés selon vos besoins spécifiques.</p>

        <h3>2. Constitution du capital social</h3>
        <p>Le capital minimum d'une SAS est fixé à 1 euro, mais il est recommandé de prévoir un capital adapté à votre activité et à vos besoins de financement.</p>

        <h3>3. Formalités d'immatriculation</h3>
        <p>L'immatriculation s'effectue auprès du guichet unique des entreprises et comprend plusieurs démarches administratives.</p>

        <h2>Optimisations fiscales</h2>
        <p>Plusieurs options s'offrent à vous pour optimiser la fiscalité de votre SAS :</p>
        <ul>
          <li>Option pour l'impôt sur le revenu (sous conditions)</li>
          <li>Choix du régime de TVA</li>
          <li>Optimisation de la rémunération du dirigeant</li>
        </ul>

        <p>Notre cabinet vous accompagne dans toutes ces démarches pour créer votre SAS dans les meilleures conditions.</p>
      `,
      category: "Droit des sociétés",
      date: "12 Mars 2024",
      author: "Me. Jean Dupont",
      readTime: "12 min",
      image: "/business-formation-documents.jpg",
      tags: ["SAS", "Création d'entreprise", "Droit des sociétés", "Fiscalité"],
    },
  }

  return articles[slug as keyof typeof articles] || null
}

export default function BlogArticlePage({ params }: { params: { slug: string } }) {
  const article = getArticleBySlug(params.slug)

  if (!article) {
    return (
      <div className="min-h-screen bg-background flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold text-foreground mb-4">Article non trouvé</h1>
          <Link href="/blog">
            <Button>Retour au blog</Button>
          </Link>
        </div>
      </div>
    )
  }

  const relatedArticles = [
    {
      title: "Contrats commerciaux : les clauses essentielles à ne pas oublier",
      slug: "contrats-commerciaux-clauses-essentielles",
      category: "Conseils pratiques",
    },
    {
      title: "Réforme du droit des sociétés : impact sur les PME",
      slug: "reforme-droit-societes-pme",
      category: "Actualités juridiques",
    },
  ]

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <Header />

      {/* Breadcrumb */}
      <div className="bg-card border-b border-border">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex items-center gap-2 text-sm text-muted-foreground">
            <Link href="/" className="hover:text-primary transition-colors">
              Accueil
            </Link>
            <span>/</span>
            <Link href="/blog" className="hover:text-primary transition-colors">
              Blog
            </Link>
            <span>/</span>
            <span className="text-foreground">{article.title}</span>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="max-w-4xl mx-auto">
          {/* Back Button */}
          <Link
            href="/blog"
            className="inline-flex items-center gap-2 text-primary hover:text-primary/80 transition-colors mb-8"
          >
            <ArrowLeft className="w-4 h-4" />
            Retour au blog
          </Link>

          {/* Article Header */}
          <div className="mb-8">
            <div className="flex items-center gap-2 mb-4">
              <Badge className="bg-accent text-accent-foreground">{article.category}</Badge>
              <div className="flex items-center gap-4 text-sm text-muted-foreground">
                <div className="flex items-center gap-1">
                  <Calendar className="w-4 h-4" />
                  <span>{article.date}</span>
                </div>
                <div className="flex items-center gap-1">
                  <Clock className="w-4 h-4" />
                  <span>{article.readTime} de lecture</span>
                </div>
              </div>
            </div>

            <h1 className="text-3xl md:text-4xl font-bold text-foreground mb-4 text-balance">{article.title}</h1>

            <p className="text-xl text-muted-foreground mb-6 text-pretty">{article.excerpt}</p>

            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2">
                <User className="w-5 h-5 text-muted-foreground" />
                <span className="text-foreground font-medium">{article.author}</span>
              </div>
              <Button variant="outline" size="sm">
                <Share2 className="w-4 h-4 mr-2" />
                Partager
              </Button>
            </div>
          </div>

          {/* Featured Image */}
          <div className="relative h-64 md:h-96 mb-8 rounded-lg overflow-hidden">
            <Image src={article.image || "/placeholder.svg"} alt={article.title} fill className="object-cover" />
          </div>

          {/* Article Content */}
          <div className="prose prose-lg max-w-none mb-12">
            <div className="text-foreground leading-relaxed" dangerouslySetInnerHTML={{ __html: article.content }} />
          </div>

          {/* Tags */}
          <div className="mb-12">
            <h3 className="text-lg font-semibold text-foreground mb-4">Tags</h3>
            <div className="flex flex-wrap gap-2">
              {article.tags.map((tag, index) => (
                <Badge key={index} variant="secondary" className="text-sm">
                  {tag}
                </Badge>
              ))}
            </div>
          </div>

          {/* Related Articles */}
          <Card className="border-border py-6">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <BookOpen className="w-5 h-5 text-primary" />
                Articles Connexes
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {relatedArticles.map((relatedArticle, index) => (
                  <Link key={index} href={`/blog/${relatedArticle.slug}`} className="block group">
                    <Card className="border-border hover:shadow-md transition-shadow">
                      <CardContent className="p-4">
                        <Badge variant="secondary" className="text-xs mb-2">
                          {relatedArticle.category}
                        </Badge>
                        <h4 className="font-medium text-foreground group-hover:text-primary transition-colors">
                          {relatedArticle.title}
                        </h4>
                      </CardContent>
                    </Card>
                  </Link>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>
      </div>

      {/* CTA Section */}
      <section className="py-16 bg-primary text-primary-foreground">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold mb-4">Besoin d'un Conseil Personnalisé ?</h2>
          <p className="text-xl mb-8 opacity-90">
            Nos experts sont à votre disposition pour répondre à vos questions juridiques
          </p>
          <Button size="lg" variant="secondary" className="bg-accent text-accent-foreground hover:bg-accent/90">
            Prendre Rendez-vous
          </Button>
        </div>
      </section>

      {/* Footer */}
      <Footer />
    </div>
  )
}
