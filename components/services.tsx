import {
  Wrench,
  ShieldCheck,
  Zap,
  Wind,
  Truck,
  Settings,
} from "lucide-react"

const services = [
  {
    icon: ShieldCheck,
    title: "Manutenção Preventiva",
    description:
      "Revisões completas seguindo o cronograma do fabricante. Previna falhas e garanta a segurança do seu veículo com inspeções regulares de motor, freios e mais.",
  },
  {
    icon: Wrench,
    title: "Manutenção Corretiva",
    description:
      "Diagnóstico preciso e reparos eficientes. Identificamos e corrigimos problemas mecânicos, restaurando o funcionamento ideal do seu carro.",
  },
  {
    icon: Settings,
    title: "Suspensão",
    description:
      "Serviços completos de suspensão incluindo amortecedores, molas, bandejas e alinhamento. Garantimos estabilidade e conforto na direção.",
  },
  {
    icon: Zap,
    title: "Elétrica Automotiva",
    description:
      "Diagnóstico e reparo do sistema elétrico do seu veículo. Alternador, motor de partida, bateria, iluminação e todo o sistema eletrônico.",
  },
  {
    icon: Wind,
    title: "Ar-Condicionado",
    description:
      "Recarga de gás, higienização, reparo de compressor e manutenção completa do sistema de climatização automotiva.",
  },
  {
    icon: Truck,
    title: "Reboque 24h",
    description:
      "Serviço de reboque disponível 24 horas por dia, 7 dias por semana. Ficou na mão? Ligue agora e resgatamos seu veículo rapidamente.",
  },
]

export function Services() {
  return (
    <section id="servicos" className="py-24">
      <div className="mx-auto max-w-7xl px-4 lg:px-8">
        {/* Section Header */}
        <div className="mb-16 text-center">
          <span className="mb-3 inline-block text-xs font-semibold uppercase tracking-[0.2em] text-primary">
            O que fazemos
          </span>
          <h2
            className="text-3xl font-bold uppercase tracking-tight text-foreground sm:text-4xl lg:text-5xl"
            style={{ fontFamily: "var(--font-heading)" }}
          >
            Nossos Serviços
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-base leading-relaxed text-muted-foreground">
            Oferecemos uma gama completa de serviços automotivos com
            profissionais qualificados e equipamentos de última geração.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((service) => (
            <div
              key={service.title}
              className="group relative rounded-xl border border-border bg-card p-8 transition-all hover:border-primary/40 hover:bg-card/80"
            >
              <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10 text-primary transition-colors group-hover:bg-primary group-hover:text-primary-foreground">
                <service.icon className="h-6 w-6" />
              </div>
              <h3 className="mb-3 text-lg font-bold text-foreground">
                {service.title}
              </h3>
              <p className="text-sm leading-relaxed text-muted-foreground">
                {service.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
