import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Input } from "@/components/ui/input"
import { Search, ShoppingCart, Star, Filter, Download, FileText, BookOpen, Video } from "lucide-react"
import Link from "next/link"
import Footer from "@/components/ui/footer";
import Header from "@/components/ui/header";

const categories = [
  { name: "Modèles de Contrats", icon: FileText, count: 45 },
  { name: "Guides Juridiques", icon: BookOpen, count: 28 },
  { name: "Formations", icon: Video, count: 15 },
  { name: "Documents Types", icon: Download, count: 62 },
]

const featuredProducts = [
  {
    id: 1,
    title: "Pack Création d'Entreprise Complet",
    description: "Tous les documents nécessaires pour créer votre entreprise en toute sérénité",
    price: "89€",
    originalPrice: "120€",
    rating: 4.9,
    reviews: 156,
    category: "Modèles de Contrats",
    image: "/contract-templates.jpg",
    bestseller: true,
  },
  {
    id: 2,
    title: "Guide Complet du Droit des Sociétés",
    description: "Manuel pratique de 200 pages sur le droit des sociétés français",
    price: "45€",
    rating: 4.8,
    reviews: 89,
    category: "Guides Juridiques",
    image: "/legal-guide-book.jpg",
  },
  {
    id: 3,
    title: "Formation : Négociation de Contrats Commerciaux",
    description: "Formation vidéo de 4h avec cas pratiques et modèles inclus",
    price: "149€",
    rating: 4.9,
    reviews: 67,
    category: "Formations",
    image: "/contract-negotiation-training.jpg",
  },
  {
    id: 4,
    title: "Modèles de Contrats de Travail",
    description: "15 modèles de contrats de travail adaptés à tous les secteurs",
    price: "35€",
    rating: 4.7,
    reviews: 203,
    category: "Modèles de Contrats",
    image: "/employment-contracts.jpg",
  },
  {
    id: 5,
    title: "Kit Conformité RGPD",
    description: "Tous les documents pour mettre votre entreprise en conformité RGPD",
    price: "75€",
    rating: 4.8,
    reviews: 124,
    category: "Documents Types",
    image: "/gdpr-compliance-kit.jpg",
  },
  {
    id: 6,
    title: "Masterclass : Droit Immobilier",
    description: "Formation complète de 6h sur le droit immobilier avec certificat",
    price: "199€",
    rating: 5.0,
    reviews: 45,
    category: "Formations",
    image: "/real-estate-law-masterclass.jpg",
  },
]

export default function BoutiquePage() {
  return (
    <div className="min-h-screen bg-background">
      {/* Header Section */}
      <Header />
      <section className="bg-gradient-to-r from-primary/5 to-secondary/5 py-16">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto">
            <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-6">Boutique Juridique</h1>
            <p className="text-xl text-muted-foreground mb-8">
              Découvrez notre sélection de produits juridiques professionnels : modèles, guides, formations et outils
              pour sécuriser votre activité
            </p>

            {/* Search Bar */}
            <div className="relative max-w-md mx-auto">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground h-4 w-4" />
              <Input placeholder="Rechercher un produit..." className="pl-10 pr-4 py-3 text-lg" />
            </div>
          </div>
        </div>
      </section>

      {/* Categories Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Nos Catégories</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {categories.map((category, index) => (
              <Link key={index} href={`/boutique/categorie/${category.name.toLowerCase().replace(/\s+/g, "-")}`}>
                <Card className="hover:shadow-lg py-6 transition-shadow cursor-pointer group">
                  <CardContent className="p-6 text-center">
                    <category.icon className="h-12 w-12 text-primary mx-auto mb-4 group-hover:text-secondary transition-colors" />
                    <h3 className="font-semibold text-lg mb-2">{category.name}</h3>
                    <p className="text-muted-foreground">{category.count} produits</p>
                  </CardContent>
                </Card>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Products */}
      <section className="py-16 bg-card/50">
        <div className="container mx-auto px-4">
          <div className="flex justify-between items-center mb-12">
            <h2 className="text-3xl font-bold">Produits Populaires</h2>
            <div className="flex gap-4">
              <Button variant="outline" size="sm">
                <Filter className="h-4 w-4 mr-2" />
                Filtrer
              </Button>
              <Button variant="outline" size="sm">
                <ShoppingCart className="h-4 w-4 mr-2" />
                Panier (0)
              </Button>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {featuredProducts.map((product) => (
              <Card key={product.id} className="overflow-hidden hover:shadow-lg transition-shadow">
                <div className="relative">
                  <img
                    src={product.image || "/placeholder.svg"}
                    alt={product.title}
                    className="w-full h-48 object-cover"
                  />
                  {product.bestseller && (
                    <Badge className="absolute top-2 left-2 bg-secondary text-secondary-foreground">Bestseller</Badge>
                  )}
                  {product.originalPrice && (
                    <Badge variant="destructive" className="absolute top-2 right-2">
                      -26%
                    </Badge>
                  )}
                </div>

                <CardHeader>
                  <div className="flex justify-between items-start mb-2">
                    <Badge variant="outline" className="text-xs">
                      {product.category}
                    </Badge>
                    <div className="flex items-center gap-1">
                      <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                      <span className="text-sm font-medium">{product.rating}</span>
                      <span className="text-xs text-muted-foreground">({product.reviews})</span>
                    </div>
                  </div>
                  <CardTitle className="text-lg leading-tight">{product.title}</CardTitle>
                  <CardDescription className="text-sm">{product.description}</CardDescription>
                </CardHeader>

                <CardFooter className="flex justify-between items-center">
                  <div className="flex items-center gap-2">
                    <span className="text-2xl font-bold text-primary">{product.price}</span>
                    {product.originalPrice && (
                      <span className="text-sm text-muted-foreground line-through">{product.originalPrice}</span>
                    )}
                  </div>
                  <Button size="sm">
                    <ShoppingCart className="h-4 w-4 mr-2" />
                    Ajouter
                  </Button>
                </CardFooter>
              </Card>
            ))}
          </div>

          <div className="text-center mt-12">
            <Button size="lg" variant="outline">
              Voir tous les produits
            </Button>
          </div>
        </div>
      </section>

      {/* Trust Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            <div>
              <div className="bg-primary/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Download className="h-8 w-8 text-primary" />
              </div>
              <h3 className="font-semibold text-lg mb-2">Téléchargement Immédiat</h3>
              <p className="text-muted-foreground">Accédez instantanément à vos achats après paiement</p>
            </div>
            <div>
              <div className="bg-primary/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <FileText className="h-8 w-8 text-primary" />
              </div>
              <h3 className="font-semibold text-lg mb-2">Documents Professionnels</h3>
              <p className="text-muted-foreground">Tous nos modèles sont rédigés par des juristes expérimentés</p>
            </div>
            <div>
              <div className="bg-primary/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Star className="h-8 w-8 text-primary" />
              </div>
              <h3 className="font-semibold text-lg mb-2">Satisfaction Garantie</h3>
              <p className="text-muted-foreground">30 jours de garantie satisfait ou remboursé</p>
            </div>
          </div>
        </div>
      </section>

      {/* Newsletter Section */}
      <section className="py-16 bg-primary text-primary-foreground">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-4">Restez Informé</h2>
          <p className="text-xl mb-8 opacity-90">Recevez nos nouveaux produits et offres exclusives</p>
          <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
            <Input placeholder="Votre email" className="bg-white text-foreground" />
            <Button variant="secondary" size="lg">
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
