import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Separator } from "@/components/ui/separator"
import { Minus, Plus, Trash2, ShoppingBag } from "lucide-react"
import Link from "next/link"

const cartItems = [
  {
    id: 1,
    title: "Pack Création d'Entreprise Complet",
    price: 89,
    quantity: 1,
    image: "/contract-templates.jpg",
  },
  {
    id: 2,
    title: "Kit Conformité RGPD",
    price: 75,
    quantity: 2,
    image: "/gdpr-compliance-kit.jpg",
  },
]

export default function PanierPage() {
  const subtotal = cartItems.reduce((sum, item) => sum + item.price * item.quantity, 0)
  const tva = subtotal * 0.2
  const total = subtotal + tva

  return (
    <div className="min-h-screen bg-background py-16">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <h1 className="text-4xl font-bold text-center mb-12">Mon Panier</h1>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Cart Items */}
            <div className="lg:col-span-2">
              <Card className="py-6">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <ShoppingBag className="h-5 w-5" />
                    Articles ({cartItems.length})
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-6">
                  {cartItems.map((item) => (
                    <div key={item.id} className="flex gap-4 p-4 border rounded-lg">
                      <img
                        src={item.image || "/placeholder.svg"}
                        alt={item.title}
                        className="w-20 h-20 object-cover rounded"
                      />
                      <div className="flex-1">
                        <h3 className="font-semibold mb-2">{item.title}</h3>
                        <p className="text-2xl font-bold text-primary">{item.price}€</p>
                      </div>
                      <div className="flex items-center gap-2">
                        <Button variant="outline" size="sm">
                          <Minus className="h-4 w-4" />
                        </Button>
                        <span className="w-8 text-center">{item.quantity}</span>
                        <Button variant="outline" size="sm">
                          <Plus className="h-4 w-4" />
                        </Button>
                      </div>
                      <Button variant="ghost" size="sm" className="text-destructive">
                        <Trash2 className="h-4 w-4" />
                      </Button>
                    </div>
                  ))}
                </CardContent>
              </Card>
            </div>

            {/* Order Summary */}
            <div>
              <Card className="py-6">
                <CardHeader>
                  <CardTitle>Récapitulatif</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="flex justify-between">
                    <span>Sous-total</span>
                    <span>{subtotal}€</span>
                  </div>
                  <div className="flex justify-between">
                    <span>TVA (20%)</span>
                    <span>{tva}€</span>
                  </div>
                  <Separator />
                  <div className="flex justify-between font-bold text-lg">
                    <span>Total</span>
                    <span>{total}€</span>
                  </div>

                  <div className="space-y-3 pt-4">
                    <Button className="w-full" size="lg">
                      Procéder au Paiement
                    </Button>
                    <Button variant="outline" className="w-full bg-transparent" asChild>
                      <Link href="/boutique">Continuer mes achats</Link>
                    </Button>
                  </div>

                  {/* Promo Code */}
                  <div className="pt-4 border-t">
                    <h4 className="font-semibold mb-2">Code Promo</h4>
                    <div className="flex gap-2">
                      <Input placeholder="Entrez votre code" />
                      <Button variant="outline">Appliquer</Button>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
