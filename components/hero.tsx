import { Phone, Clock, ArrowDown } from "lucide-react"

export function Hero() {
  return (
    <section
      id="inicio"
      className="relative flex min-h-screen items-center justify-center overflow-hidden pt-16"
    >
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: "url('/images/hero-mechanic.jpg')" }}
      />
      {/* Overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-background/90 via-background/70 to-background" />

      <div className="relative z-10 mx-auto max-w-7xl px-4 py-20 text-center lg:px-8">
        {/* Badge */}
        <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-primary/30 bg-primary/10 px-4 py-1.5">
          <Clock className="h-4 w-4 text-primary" />
          <span className="text-xs font-medium text-white">
            Reboque 24h Disponível
          </span>
        </div>

        <h1
          className="mx-auto max-w-3xl text-3xl font-bold uppercase leading-tight tracking-tight text-foreground sm:text-5xl md:text-6xl lg:text-7xl"
          style={{ fontFamily: "var(--font-heading)" }}
        >
          Problema no carro? {" "}
          <span className="text-primary">
            Relaxa,
          </span>{" "}
          a gente resolve.
        </h1>

        {/*<p className="mx-auto mt-6 max-w-2xl text-lg leading-relaxed text-muted-foreground md:text-xl">
          Especialistas em manutencao preventiva e corretiva, suspensao,
          eletrica, ar-condicionado e reboque 24 horas. Qualidade e
          transparencia que voce merece.
        </p>*/}

        <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
          <a
            href="#contato"
            className="flex items-center gap-2 rounded-lg bg-primary px-8 py-4 text-base font-semibold text-primary-foreground transition-all hover:bg-primary/90 hover:shadow-lg hover:shadow-primary/25"
          >
            Agendar Serviço
          </a>
          <a
            href="tel:+5521964529016"
            className="flex items-center gap-2 rounded-lg border border-border bg-secondary px-8 py-4 text-base font-semibold text-secondary-foreground transition-colors hover:bg-secondary/80"
          >
            <Phone className="h-5 w-5" />
            (21)96452-9016
          </a>
        </div>

        {/* Scroll Indicator */}
        <div className="mt-16 flex justify-center">
          <a href="#servicos" aria-label="Rolar para serviços" className="animate-bounce text-muted-foreground transition-colors hover:text-foreground">
            <ArrowDown className="h-6 w-6" />
          </a>
        </div>
      </div>
    </section>
  )
}
