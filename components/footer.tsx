import { Phone, MapPin } from "lucide-react"

export function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="border-t border-border bg-card py-12">
      <div className="mx-auto max-w-7xl px-4 lg:px-8">
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {/* Brand */}
          <div className="sm:col-span-2 lg:col-span-1">
            <div className="flex items-center gap-2">
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
            <p className="mt-4 text-sm leading-relaxed text-muted-foreground">
              Sua oficina de confiança no Rio de Janeiro. Qualidade, transparência e compromisso com o seu veículo.
            </p>
          </div>

          {/* Services */}
          <div>
            <h4 className="mb-4 text-sm font-bold uppercase tracking-wider text-foreground">
              Serviços
            </h4>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li>Manutenção Preventiva</li>
              <li>Manutenção Corretiva</li>
              <li>Suspensão</li>
              <li>Elétrica Automotiva</li>
              <li>Ar-Condicionado</li>
              <li>Reboque 24h</li>
            </ul>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="mb-4 text-sm font-bold uppercase tracking-wider text-foreground">
              Navegação
            </h4>
            <ul className="space-y-2 text-sm">
              {[
                { href: "#inicio", label: "Início" },
                { href: "#servicos", label: "Serviços" },
                { href: "#sobre", label: "Sobre" },
                { href: "#avaliacoes", label: "Avaliações" },
                { href: "#localizacao", label: "Localização" },
                { href: "#contato", label: "Contato" },
              ].map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className="text-muted-foreground transition-colors hover:text-foreground"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="mb-4 text-sm font-bold uppercase tracking-wider text-foreground">
              Contato
            </h4>
            <div className="space-y-3 text-sm text-muted-foreground">
              <div className="flex items-center gap-2">
                <Phone className="h-4 w-4 text-primary" />
                <span>(21)96452-9016</span>
              </div>
              <div className="flex items-center gap-2">
                <MapPin className="h-4 w-4 text-primary" />
                <span>R. Antônio Carlos Guedes, 64 - Centro, Itaboraí - RJ, 24855-156</span>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom */}
        <div className="mt-12 border-t border-border pt-6 text-center text-xs text-muted-foreground">
          {currentYear} J-Car Centro Automotivo. Todos os direitos reservados.
          <br />
          Desenvolvido por{"LessaDev"}
        </div>
      </div>
    </footer>
  )
}
