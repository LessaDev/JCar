"use client"

import { useState } from "react"
import { Menu, X, Phone } from "lucide-react"

const navLinks = [
  { href: "#inicio", label: "Início" },
  { href: "#servicos", label: "Serviços" },
  { href: "#sobre", label: "Sobre" },
  { href: "#socorro", label: "Socorro 24h" },
  { href: "#avaliacoes", label: "Avaliações" },
  { href: "#localizacao", label: "Localização" },
  { href: "#contato", label: "Contato" },
]

export function Header() {
  const [menuOpen, setMenuOpen] = useState(false)

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b border-border">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-3 lg:px-8">
        {/* Logo */}
        <a href="#inicio" className="flex items-center gap-2">
          <div className="flex h-12 w-12 items-center justify-center rounded-lg lg:h-26 lg:w-26">
            <img src="/images/logo.png" alt="logo" />
             {/* Logo 
            <span className="text-lg font-bold text-primary-foreground">J</span>
          </div>
          <div>
            <span className="text-xl font-bold tracking-tight text-foreground" style={{ fontFamily: "var(--font-heading)" }}>
              J-CAR
            </span>
            <span className="block text-[10px] uppercase tracking-[0.2em] text-muted-foreground">
              Centro Automotivo
            </span>
            */}
          </div>
        </a>

        {/* Desktop Nav */}
        <nav className="hidden items-center gap-8 md:flex" aria-label="Navegação principal">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-sm font-medium text-muted-foreground transition-colors hover:text-foreground"
            >
              {link.label}
            </a>
          ))}
        </nav>

        {/* CTA + Mobile Toggle */}
        <div className="flex items-center gap-3">
          <a
            href="tel:+5521964529016"
            className="hidden items-center gap-2 rounded-lg bg-primary px-4 py-2 text-sm font-semibold text-primary-foreground transition-colors hover:bg-primary/90 sm:flex"
          >
            <Phone className="h-4 w-4" />
            Ligar Agora
          </a>
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="flex h-10 w-10 items-center justify-center rounded-lg text-foreground md:hidden"
            aria-label={menuOpen ? "Fechar menu" : "Abrir menu"}
          >
            {menuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </div>

      {/* Mobile Nav */}
      {menuOpen && (
        <nav className="border-t border-border bg-background px-4 pb-4 md:hidden" aria-label="Navegação mobile">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={() => setMenuOpen(false)}
              className="block py-3 text-sm font-medium text-muted-foreground transition-colors hover:text-foreground"
            >
              {link.label}
            </a>
          ))}
          <a
            href="tel:+5521964529016"
            className="mt-2 flex items-center justify-center gap-2 rounded-lg bg-primary px-4 py-3 text-sm font-semibold text-primary-foreground"
          >
            <Phone className="h-4 w-4" />
            Ligar Agora
          </a>
        </nav>
      )}
    </header>
  )
}
