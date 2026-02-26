"use client"

import { Phone, Clock, MapPin, ShieldCheck, Truck, Siren } from "lucide-react"

const features = [
  {
    icon: Clock,
    title: "Disponível 24 horas",
    description:
      "Funcionamos todos os dias do ano, incluindo feriados e madrugadas. Sempre prontos para atender sua emergência.",
  },
  {
    icon: MapPin,
    title: "Cobertura ampla",
    description:
      "Atendemos toda a região metropolitana do Rio de Janeiro com rapidez e eficiência no deslocamento.",
  },
  {
    icon: ShieldCheck,
    title: "Transporte seguro",
    description:
      "Equipamentos modernos de guincho e plataforma que garantem o transporte seguro do seu veículo sem danos.",
  },
  {
    icon: Truck,
    title: "Todos os tipos de veículos",
    description:
      "Carros de passeio, SUVs, utilitários e veículos de médio porte. Estrutura para atender diferentes necessidades.",
  },
]

const steps = [
  {
    number: "01",
    title: "Ligue ou mande mensagem",
    description:
      "Entre em contato pelo telefone ou WhatsApp. Estamos sempre disponíveis para atender.",
  },
  {
    number: "02",
    title: "Informe sua localização",
    description:
      "Nos diga onde você está e o que aconteceu com seu veículo para enviarmos a equipe adequada.",
  },
  {
    number: "03",
    title: "Aguarde o resgate",
    description:
      "Nossa equipe será enviada imediatamente ao local para realizar o resgate com total segurança.",
  },
]

export function Emergency() {
  return (
    <section id="socorro" className="relative overflow-hidden py-24">
      {/* Background image with overlay */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: "url('/images/tow-truck.jpg')" }}
      />
      <div className="absolute inset-0 bg-gradient-to-b from-background via-background/95 to-background" />

      <div className="relative z-10 mx-auto max-w-7xl px-4 lg:px-8">
        {/* Section Header */}
        <div className="mb-16 text-center">
          <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-primary/30 bg-primary/10 px-4 py-1.5">
            <Siren className="h-4 w-4 text-primary" />
            <span className="text-xs font-medium text-white">
              Atendimento imediato
            </span>
          </div>
          <h2
            className="text-3xl font-bold uppercase tracking-tight text-foreground sm:text-4xl lg:text-5xl"
            style={{ fontFamily: "var(--font-heading)" }}
          >
            Socorro e Reboque{" "}
            <span className="text-primary">24 horas</span>
          </h2>
          <p className="mx-auto mt-5 max-w-2xl text-base leading-relaxed text-muted-foreground">
            Ficou na mão? Não se preocupe. A J-Car oferece serviço de reboque e
            socorro mecânico 24 horas por dia, 7 dias por semana, em toda a
            região metropolitana do Rio de Janeiro.
          </p>
        </div>

        {/* CTA Banner */}
        <div className="mb-16 rounded-2xl border border-primary/20 bg-primary/5 p-6 sm:p-10">
          <div className="flex flex-col items-center gap-6 lg:flex-row lg:justify-between">
            <div className="text-center lg:text-left">
              <h3
                className="text-2xl font-bold uppercase text-foreground sm:text-3xl"
                style={{ fontFamily: "var(--font-heading)" }}
              >
                Precisa de socorro agora?
              </h3>
              <p className="mt-2 text-base text-muted-foreground">
                Ligue imediatamente e enviaremos uma equipe ao seu local.
              </p>
            </div>
            <div className="flex flex-col items-center gap-3 sm:flex-row">
              <a
                href="tel:+5521964529016"
                className="flex items-center gap-3 rounded-xl bg-primary px-8 py-4 text-lg font-bold text-primary-foreground transition-all hover:bg-primary/90 hover:shadow-lg hover:shadow-primary/25"
              >
                <Phone className="h-6 w-6" />
                (21)96452-9016
              </a>
              <a
                href="https://wa.me/5521964529016?text=Olá%20J-Car!%20Preciso%20de%20socorro%2Freboque%20urgente!"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 rounded-xl border border-border bg-secondary px-8 py-4 text-base font-semibold text-secondary-foreground transition-colors hover:bg-secondary/80"
              >
                <svg className="h-5 w-5" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                </svg>
                WhatsApp
              </a>
            </div>
          </div>
        </div>

        {/* Features Grid */}
        <div className="mb-20 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {features.map((feature) => (
            <div
              key={feature.title}
              className="group rounded-xl border border-border bg-card p-6 transition-all hover:border-primary/40"
            >
              <div className="mb-4 flex h-11 w-11 items-center justify-center rounded-lg bg-primary/10 text-primary transition-colors group-hover:bg-primary group-hover:text-primary-foreground">
                <feature.icon className="h-5 w-5" />
              </div>
              <h3 className="mb-2 text-base font-bold text-foreground">
                {feature.title}
              </h3>
              <p className="text-sm leading-relaxed text-muted-foreground">
                {feature.description}
              </p>
            </div>
          ))}
        </div>

        {/* How it works */}
        <div>
          <h3
            className="mb-10 text-center text-2xl font-bold uppercase tracking-tight text-foreground sm:text-3xl"
            style={{ fontFamily: "var(--font-heading)" }}
          >
            Como funciona o socorro?
          </h3>
          <div className="grid gap-6 md:grid-cols-3">
            {steps.map((step, index) => (
              <div key={step.number} className="relative flex gap-5">
                {/* Connector line on desktop */}
                {index < steps.length - 1 && (
                  <div className="absolute right-0 top-8 hidden h-px w-full translate-x-1/2 bg-gradient-to-r from-primary/40 to-transparent md:block" />
                )}
                <div className="flex flex-col items-center">
                  <div
                    className="flex h-14 w-14 shrink-0 items-center justify-center rounded-xl bg-primary text-xl font-bold text-primary-foreground"
                    style={{ fontFamily: "var(--font-heading)" }}
                  >
                    {step.number}
                  </div>
                </div>
                <div className="pb-8 md:pb-0">
                  <h4 className="mb-1 text-base font-bold text-foreground">
                    {step.title}
                  </h4>
                  <p className="text-sm leading-relaxed text-muted-foreground">
                    {step.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
