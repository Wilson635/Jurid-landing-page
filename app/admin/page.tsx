"use client"

import type React from "react"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Lock } from "lucide-react"
import { useRouter } from "next/navigation"

const ADMIN_PASSWORD = "123456"

export default function AdminLoginPage() {
  const [password, setPassword] = useState("")
  const [error, setError] = useState("")
  const [isLoading, setIsLoading] = useState(false)
  const router = useRouter()

  useEffect(() => {
    const isAuthenticated = localStorage.getItem("adminAuthenticated")
    if (isAuthenticated === "true") {
      router.push("/admin/dashboard")
    }
  }, [router])

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault()
    setError("")
    setIsLoading(true)

    if (password === ADMIN_PASSWORD) {
      localStorage.setItem("adminAuthenticated", "true")
      localStorage.setItem("adminLoginTime", new Date().toISOString())
      router.push("/admin/dashboard")
    } else {
      setError("Mot de passe incorrect")
      setPassword("")
    }

    setIsLoading(false)
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-card to-background flex items-center justify-center p-4">
      <Card className="w-full max-w-md border-border">
        <CardHeader className="text-center">
          <div className="flex justify-center mb-4">
            <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center">
              <Lock className="w-6 h-6 text-primary" />
            </div>
          </div>
          <CardTitle className="text-2xl">Accès Admin</CardTitle>
          <CardDescription>Entrez le mot de passe pour accéder au tableau de bord</CardDescription>
        </CardHeader>
        <CardContent>
          <form onSubmit={handleLogin} className="space-y-4">
            <div>
              <Input
                type="password"
                placeholder="Mot de passe"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="bg-background border-border"
                disabled={isLoading}
              />
            </div>
            {error && <div className="text-red-500 text-sm">{error}</div>}
            <Button
              type="submit"
              className="w-full bg-primary hover:bg-primary/90 text-primary-foreground"
              disabled={isLoading}
            >
              {isLoading ? "Connexion..." : "Se Connecter"}
            </Button>
          </form>
        </CardContent>
      </Card>
    </div>
  )
}
