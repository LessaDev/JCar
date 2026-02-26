"use client"

import { useState, type FormEvent } from "react"
import { Send, MessageCircle, MapPin, Phone, Clock } from "lucide-react"

export function ContactForm() {
  const [name, setName] = useState("")
  const [phone, setPhone] = useState("")
  const [message, setMessage] = useState("")
  const [sending, setSending] = useState(false)

  function formatPhoneInput(value: string) {
    const digits = value.replace(/\D/g, "").slice(0, 11)
    if (digits.length <= 2) return digits
    if (digits.length <= 7)
      return `(${digits.slice(0, 2)}) ${digits.slice(2)}`
    return `(${digits.slice(0, 2)}) ${digits.slice(2, 7)}-${digits.slice(7)}`
  }

  function handleSubmit(e: FormEvent) {
    e.preventDefault()
    setSending(true)

    const whatsappNumber = "5521964529016"
    const text = encodeURIComponent(
      `Olá J-Car! Meu nome é ${name}.\n` +
        `Telefone: ${phone}\n\n` +
        `Problema/Solicitação:\n${message}`
    )

    window.open(`https://wa.me/${whatsappNumber}?text=${text}`, "_blank")

    setTimeout(() => {
      setSending(false)
      setName("")
      setPhone("")
      setMessage("")
    }, 1000)
  }

  return (
    <section id="contato" className="border-t border-border bg-secondary/50 py-24">
      <div className="mx-auto max-w-7xl px-4 lg:px-8">
        <div className="grid gap-12 lg:grid-cols-2 lg:gap-20">
          {/* Left: Info */}
          <div>
            <span className="mb-3 inline-block text-xs font-semibold uppercase tracking-[0.2em] text-primary">
              Fale conosco
            </span>
            <h2
              className="text-3xl font-bold uppercase tracking-tight text-foreground sm:text-4xl"
              style={{ fontFamily: "var(--font-heading)" }}
            >
              Entre em contato
            </h2>
            <p className="mt-5 text-base leading-relaxed text-muted-foreground">
              Preencha o formulário ou entre em contato diretamente. Responderemos
              o mais rápido possível pelo WhatsApp.
            </p>

            <div className="mt-10 space-y-6">
              <div className="flex items-start gap-4">
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-primary/10 text-primary">
                  <Phone className="h-5 w-5" />
                </div>
                <div>
                  <p className="text-sm font-semibold text-foreground">Telefone / WhatsApp</p>
                  <p className="text-sm text-muted-foreground">(21)96452-9016</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-primary/10 text-primary">
                  <MapPin className="h-5 w-5" />
                </div>
                <div>
                  <p className="text-sm font-semibold text-foreground">Endereço</p>
                  <p className="text-sm text-muted-foreground">R. Antônio Carlos Guedes, 64 - Centro, Itaboraí - RJ, 24855-156</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-primary/10 text-primary">
                  <Clock className="h-5 w-5" />
                </div>
                <div>
                  <p className="text-sm font-semibold text-foreground">Horário de funcionamento</p>
                  <p className="text-sm text-muted-foreground">Seg - Sab: 8h às 18h</p>
                  <p className="text-sm text-primary font-medium">Reboque: 24 horas</p>
                </div>
              </div>
            </div>
          </div>

          {/* Right: Form */}
          <div>
            <form
              onSubmit={handleSubmit}
              className="rounded-xl border border-border bg-card p-6 sm:p-8"
            >
              <div className="mb-6 flex items-center gap-3">
                <MessageCircle className="h-5 w-5 text-primary" />
                <h3 className="text-lg font-bold text-foreground">
                  Enviar pelo WhatsApp
                </h3>
              </div>

              <div className="space-y-5">
                {/* Name */}
                <div>
                  <label
                    htmlFor="name"
                    className="mb-2 block text-sm font-medium text-foreground"
                  >
                    Seu nome
                  </label>
                  <input
                    id="name"
                    type="text"
                    required
                    placeholder="Ex: João Silva"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    className="w-full rounded-lg border border-border bg-input px-4 py-3 text-sm text-foreground placeholder-muted-foreground outline-none transition-colors focus:border-primary focus:ring-1 focus:ring-primary"
                  />
                </div>

                {/* Phone */}
                <div>
                  <label
                    htmlFor="phone"
                    className="mb-2 block text-sm font-medium text-foreground"
                  >
                    Telefone
                  </label>
                  <input
                    id="phone"
                    type="tel"
                    required
                    placeholder="(21) 99999-9999"
                    value={phone}
                    onChange={(e) => setPhone(formatPhoneInput(e.target.value))}
                    className="w-full rounded-lg border border-border bg-input px-4 py-3 text-sm text-foreground placeholder-muted-foreground outline-none transition-colors focus:border-primary focus:ring-1 focus:ring-primary"
                  />
                </div>

                {/* Message */}
                <div>
                  <label
                    htmlFor="message"
                    className="mb-2 block text-sm font-medium text-foreground"
                  >
                    Descreva seu problema
                  </label>
                  <textarea
                    id="message"
                    required
                    rows={4}
                    placeholder="Descreva o problema do seu veículo ou o serviço que você precisa..."
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    className="w-full resize-none rounded-lg border border-border bg-input px-4 py-3 text-sm text-foreground placeholder-muted-foreground outline-none transition-colors focus:border-primary focus:ring-1 focus:ring-primary"
                  />
                </div>

                <button
                  type="submit"
                  disabled={sending}
                  className="flex w-full items-center justify-center gap-2 rounded-lg bg-primary px-6 py-3.5 text-sm font-semibold text-primary-foreground transition-all hover:bg-primary/90 hover:shadow-lg hover:shadow-primary/25 disabled:opacity-60"
                >
                  {sending ? (
                    "Abrindo WhatsApp..."
                  ) : (
                    <>
                      <Send className="h-4 w-4" />
                      Enviar via WhatsApp
                    </>
                  )}
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  )
}
