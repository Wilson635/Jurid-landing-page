"use client"

import type React from "react"

import { useState, useRef, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Badge } from "@/components/ui/badge"
import { MessageCircle, X, Send, Bot, User, Sparkles } from "lucide-react"

interface Message {
  id: string
  content: string
  sender: "user" | "bot"
  timestamp: Date
  suggestions?: string[]
}

const predefinedResponses = {
  greeting: {
    content: "Bonjour ! Je suis votre assistant juridique virtuel. Comment puis-je vous aider aujourd'hui ?",
    suggestions: [
      "J'ai besoin d'une consultation",
      "Créer une entreprise",
      "Questions sur un contrat",
      "Voir vos services",
    ],
  },
  consultation: {
    content:
        "Excellente idée ! Nous proposons une première consultation gratuite. Quel est votre domaine de préoccupation ?",
    suggestions: ["Droit des sociétés", "Droit financier", "Droit foncier", "Autre domaine"],
  },
  rendezvous: {
    content:
        "Pour prendre rendez-vous avec un avocat de notre cabinet, vous pouvez nous écrire directement à contact@cabinetjuridique.com. Notre équipe vous répondra rapidement pour fixer une date.",
    suggestions: ["Envoyer un email", "Retour à l'accueil", "Voir nos services"],
  },
  entreprise: {
    content: "Parfait ! La création d'entreprise est notre spécialité. Quel type de structure envisagez-vous ?",
    suggestions: ["SAS", "SARL", "Entreprise individuelle", "Je ne sais pas encore"],
  },
  contrat: {
    content: "Les questions contractuelles sont importantes. De quel type de contrat s'agit-il ?",
    suggestions: ["Contrat commercial", "Contrat de travail", "Bail commercial", "Autre type"],
  },
  services: {
    content: "Nous offrons une gamme complète de services juridiques. Voici nos principales expertises :",
    suggestions: ["Consultation juridique", "Droit des sociétés", "Droit financier", "Droit foncier"],
  },
  default: {
    content:
        "Je comprends votre question. Pour une réponse personnalisée, je vous recommande de prendre contact avec nos experts.",
    suggestions: ["Prendre rendez-vous", "Voir nos services", "Lire le blog", "Nous contacter"],
  },
}

export default function ChatWidget() {
  const [isOpen, setIsOpen] = useState(false)
  const [messages, setMessages] = useState<Message[]>([])
  const [inputValue, setInputValue] = useState("")
  const [isTyping, setIsTyping] = useState(false)
  const messagesEndRef = useRef<HTMLDivElement>(null)

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" })
  }

  useEffect(() => {
    scrollToBottom()
  }, [messages])

  useEffect(() => {
    if (isOpen && messages.length === 0) {
      // Send greeting message when chat opens for the first time
      setTimeout(() => {
        addBotMessage(predefinedResponses.greeting.content, predefinedResponses.greeting.suggestions)
      }, 500)
    }
  }, [isOpen])

  const addBotMessage = (content: string, suggestions?: string[]) => {
    const botMessage: Message = {
      id: Date.now().toString(),
      content,
      sender: "bot",
      timestamp: new Date(),
      suggestions,
    }
    setMessages((prev) => [...prev, botMessage])
    setIsTyping(false)
  }

  const addUserMessage = (content: string) => {
    const userMessage: Message = {
      id: Date.now().toString(),
      content,
      sender: "user",
      timestamp: new Date(),
    }
    setMessages((prev) => [...prev, userMessage])
  }

  const getBotResponse = (userInput: string): { content: string; suggestions?: string[] } => {
    const input = userInput.toLowerCase()

    if (input.includes("rendez-vous") || input.includes("rdv")) {
      return predefinedResponses.rendezvous
    }
    if (input.includes("consultation") || input.includes("conseil")) {
      return predefinedResponses.consultation
    }
    if (input.includes("entreprise") || input.includes("société") || input.includes("créer")) {
      return predefinedResponses.entreprise
    }
    if (input.includes("contrat") || input.includes("accord")) {
      return predefinedResponses.contrat
    }
    if (input.includes("service") || input.includes("expertise")) {
      return predefinedResponses.services
    }
    if (input.includes("sas")) {
      return {
        content:
            "La SAS est un excellent choix ! C'est une forme juridique flexible et moderne. Voulez-vous en savoir plus sur les avantages de la SAS ?",
        suggestions: ["Avantages de la SAS", "Coût de création", "Prendre rendez-vous", "Lire notre guide"],
      }
    }
    if (input.includes("prix") || input.includes("tarif") || input.includes("coût")) {
      return {
        content:
            "Nos tarifs sont transparents et adaptés à chaque situation. Pour un devis personnalisé, je vous invite à nous contacter directement.",
        suggestions: ["Demander un devis", "Consultation gratuite", "Voir nos services", "Nous contacter"],
      }
    }

    return predefinedResponses.default
  }

  const handleSendMessage = (message?: string) => {
    const messageToSend = message || inputValue.trim()
    if (!messageToSend) return

    addUserMessage(messageToSend)
    setInputValue("")
    setIsTyping(true)

    // Simulate bot typing delay
    setTimeout(
      () => {
        const response = getBotResponse(messageToSend)
        addBotMessage(response.content, response.suggestions)
      },
      1000 + Math.random() * 1000,
    )
  }

  const handleSuggestionClick = (suggestion: string) => {
    handleSendMessage(suggestion)
  }

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault()
      handleSendMessage()
    }
  }

  return (
    <>
      {/* Chat Toggle Button */}
      <div className="fixed bottom-6 right-6 z-50">
        <Button
          onClick={() => setIsOpen(!isOpen)}
          size="lg"
          className="rounded-full w-14 h-14 bg-primary hover:bg-primary/90 text-primary-foreground shadow-lg hover:shadow-xl transition-all duration-300"
        >
          {isOpen ? <X className="w-6 h-6" /> : <MessageCircle className="w-6 h-6" />}
        </Button>
      </div>

      {/* Chat Window */}
      {isOpen && (
        <div className="fixed bottom-24 right-6 z-50 w-96 max-w-[calc(100vw-3rem)]">
          <Card className="border-border shadow-2xl">
            <CardHeader className="bg-primary text-primary-foreground rounded-t-lg">
              <CardTitle className="flex items-center gap-2 text-lg">
                <Bot className="w-5 h-5" />
                Assistant Juridique
                <Sparkles className="w-4 h-4 ml-auto" />
              </CardTitle>
            </CardHeader>
            <CardContent className="p-0">
              {/* Messages */}
              <div className="h-96 overflow-y-auto p-4 space-y-4">
                {messages.map((message) => (
                  <div
                    key={message.id}
                    className={`flex ${message.sender === "user" ? "justify-end" : "justify-start"}`}
                  >
                    <div
                      className={`flex items-start gap-2 max-w-[80%] ${message.sender === "user" ? "flex-row-reverse" : ""}`}
                    >
                      <div
                        className={`w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0 ${
                          message.sender === "user"
                            ? "bg-accent text-accent-foreground"
                            : "bg-primary text-primary-foreground"
                        }`}
                      >
                        {message.sender === "user" ? <User className="w-4 h-4" /> : <Bot className="w-4 h-4" />}
                      </div>
                      <div className="space-y-2">
                        <div
                          className={`rounded-lg p-3 ${
                            message.sender === "user"
                              ? "bg-accent text-accent-foreground"
                              : "bg-muted text-muted-foreground"
                          }`}
                        >
                          <p className="text-sm">{message.content}</p>
                        </div>
                        {message.suggestions && (
                          <div className="flex flex-wrap gap-1">
                            {message.suggestions.map((suggestion, index) => (
                              <Badge
                                key={index}
                                variant="outline"
                                className="cursor-pointer hover:bg-primary hover:text-primary-foreground transition-colors text-xs"
                                onClick={() => handleSuggestionClick(suggestion)}
                              >
                                {suggestion}
                              </Badge>
                            ))}
                          </div>
                        )}
                      </div>
                    </div>
                  </div>
                ))}

                {isTyping && (
                  <div className="flex justify-start">
                    <div className="flex items-start gap-2">
                      <div className="w-8 h-8 rounded-full bg-primary text-primary-foreground flex items-center justify-center">
                        <Bot className="w-4 h-4" />
                      </div>
                      <div className="bg-muted rounded-lg p-3">
                        <div className="flex space-x-1">
                          <div className="w-2 h-2 bg-muted-foreground rounded-full animate-bounce"></div>
                          <div
                            className="w-2 h-2 bg-muted-foreground rounded-full animate-bounce"
                            style={{ animationDelay: "0.1s" }}
                          ></div>
                          <div
                            className="w-2 h-2 bg-muted-foreground rounded-full animate-bounce"
                            style={{ animationDelay: "0.2s" }}
                          ></div>
                        </div>
                      </div>
                    </div>
                  </div>
                )}
                <div ref={messagesEndRef} />
              </div>

              {/* Input */}
              <div className="border-t border-border p-4">
                <div className="flex gap-2">
                  <Input
                    value={inputValue}
                    onChange={(e) => setInputValue(e.target.value)}
                    onKeyPress={handleKeyPress}
                    placeholder="Tapez votre question..."
                    className="flex-1"
                  />
                  <Button
                    onClick={() => handleSendMessage()}
                    disabled={!inputValue.trim() || isTyping}
                    size="sm"
                    className="bg-primary hover:bg-primary/90 text-primary-foreground"
                  >
                    <Send className="w-4 h-4" />
                  </Button>
                </div>
                <p className="text-xs text-muted-foreground mt-2 text-center">
                  Assistant IA pour vous orienter • Consultation gratuite disponible
                </p>
              </div>
            </CardContent>
          </Card>
        </div>
      )}
    </>
  )
}
