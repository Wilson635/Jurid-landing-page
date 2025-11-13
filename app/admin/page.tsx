"use client"

import { useState, useEffect, useRef } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Lock } from "lucide-react"
import Header from "@/components/ui/header";

const ADMIN_PASSWORD = "123456"

export default function AdminLoginPage() {
  const [otp, setOtp] = useState(["", "", "", "", "", ""])
  const [error, setError] = useState("")
  const [isLoading, setIsLoading] = useState(false)
  const inputRefs = useRef<(HTMLInputElement | null)[]>([])

  useEffect(() => {
    // Focus sur le premier input au chargement
    inputRefs.current[0]?.focus()
  }, [])

  useEffect(() => {
    const isAuthenticated = localStorage.getItem("adminAuthenticated")
    if (isAuthenticated === "true") {
      window.location.href = "/admin/dashboard"
    }
  }, [])

  const handleChange = (index: number, value: string) => {
    // Autoriser uniquement les chiffres
    if (value && !/^\d$/.test(value)) return

    const newOtp = [...otp]
    newOtp[index] = value
    setOtp(newOtp)
    setError("")

    // Passer au champ suivant si un chiffre est entré
    if (value && index < 5) {
      inputRefs.current[index + 1]?.focus()
    }

    // Vérifier automatiquement si tous les champs sont remplis
    if (newOtp.every(digit => digit !== "") && index === 5) {
      handleVerify(newOtp.join(""))
    }
  }

  const handleKeyDown = (index: number, e: React.KeyboardEvent<HTMLInputElement>) => {
    // Supprimer et revenir au champ précédent
    if (e.key === "Backspace" && !otp[index] && index > 0) {
      inputRefs.current[index - 1]?.focus()
    }

    // Naviguer avec les flèches
    if (e.key === "ArrowLeft" && index > 0) {
      inputRefs.current[index - 1]?.focus()
    }
    if (e.key === "ArrowRight" && index < 5) {
      inputRefs.current[index + 1]?.focus()
    }
  }

  const handlePaste = (e: React.ClipboardEvent) => {
    e.preventDefault()
    const pastedData = e.clipboardData.getData("text").slice(0, 6)

    if (!/^\d+$/.test(pastedData)) return

    const newOtp = pastedData.split("").concat(Array(6 - pastedData.length).fill(""))
    setOtp(newOtp)

    // Focus sur le dernier champ rempli ou le suivant
    const nextIndex = Math.min(pastedData.length, 5)
    inputRefs.current[nextIndex]?.focus()

    // Vérifier automatiquement si 6 chiffres collés
    if (pastedData.length === 6) {
      handleVerify(pastedData)
    }
  }

  const handleVerify = async (code: string) => {
    setIsLoading(true)
    setError("")

    // Simuler un délai de vérification
    await new Promise(resolve => setTimeout(resolve, 500))

    if (code === ADMIN_PASSWORD) {
      localStorage.setItem("adminAuthenticated", "true")
      localStorage.setItem("adminLoginTime", new Date().toISOString())
      window.location.href = "/admin/dashboard"
    } else {
      setError("Code incorrect")
      setOtp(["", "", "", "", "", ""])
      inputRefs.current[0]?.focus()
    }

    setIsLoading(false)
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    const code = otp.join("")
    if (code.length === 6) {
      handleVerify(code)
    }
  }

  return (
      <>
        <Header />
        <div className="min-h-screen bg-gradient-to-br from-card to-background flex items-center justify-center p-4">
          <Card className="w-full max-w-md border-border py-6">
            <CardHeader className="text-center">
              <div className="flex justify-center mb-4">
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center">
                  <Lock className="w-6 h-6 text-primary" />
                </div>
              </div>
              <CardTitle className="text-2xl">Accès Admin</CardTitle>
              <CardDescription>Entrez le code à 6 chiffres pour accéder au tableau de bord</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-6">
                {/* OTP Input */}
                <div className="flex justify-center gap-2 md:gap-3">
                  {otp.map((digit, index) => (
                      <input
                          key={index}
                          ref={(el) => (inputRefs.current[index] = el)}
                          type="text"
                          inputMode="numeric"
                          maxLength={1}
                          value={digit}
                          onChange={(e) => handleChange(index, e.target.value)}
                          onKeyDown={(e) => handleKeyDown(index, e)}
                          onPaste={index === 0 ? handlePaste : undefined}
                          disabled={isLoading}
                          className={`w-12 h-14 md:w-14 md:h-16 text-center text-2xl font-bold border-2 rounded-xl transition-all
                      ${digit ? 'border-black bg-black/10 dark:bg-white/10' : 'border-gray-300 dark:border-gray-600'}
                      ${error ? 'border-red-500 animate-shake' : ''}
                      focus:border-black focus:ring-4 focus:ring-black/20 dark:focus:ring-white/20
                      disabled:opacity-50 disabled:cursor-not-allowed
                      outline-none`}
                      />
                  ))}
                </div>

                {/* Error Message */}
                {error && (
                    <div className="text-red-500 text-sm text-center font-medium bg-red-50 dark:bg-red-950 py-2 px-4 rounded-lg">
                      {error}
                    </div>
                )}

                {/* Submit Button */}
                <Button
                    onClick={(e) => {
                      e.preventDefault()
                      const code = otp.join("")
                      if (code.length === 6) {
                        handleVerify(code)
                      }
                    }}
                    className="w-full h-12 bg-gradient-to-r from-black to-black dark:from-white dark:to-white hover:from-black/80 hover:to-black/80 dark:hover:from-white/80 dark:hover:to-white/80 text-white dark:text-black font-semibold text-base shadow-lg hover:shadow-xl transition-all"
                    disabled={isLoading || otp.some(digit => digit === "")}
                >
                  {isLoading ? (
                      <div className="flex items-center gap-2">
                        <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                        <span>Vérification...</span>
                      </div>
                  ) : (
                      "Confirmer le Code"
                  )}
                </Button>

                {/* Helper Text */}
                <p className="text-xs text-center text-gray-500 dark:text-gray-400">
                </p>
              </div>
            </CardContent>
          </Card>
        </div>

        <style jsx>{`
        @keyframes shake {
          0%, 100% { transform: translateX(0); }
          25% { transform: translateX(-10px); }
          75% { transform: translateX(10px); }
        }
        .animate-shake {
          animation: shake 0.3s ease-in-out;
        }
      `}</style>
      </>
  )
}

/*****


"use client"

import type React from "react"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Lock } from "lucide-react"
import { useRouter } from "next/navigation"
import Header from "@/components/ui/header";

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
      <>
        <Header />
        <div className="min-h-screen bg-gradient-to-br from-card to-background flex items-center justify-center p-4">
          <Card className="w-full max-w-md border-border py-6">
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

      </>
  )
}
*/