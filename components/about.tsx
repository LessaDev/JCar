import { CheckCircle2 } from "lucide-react"

const highlights = [
  "Profissionais certificados e experientes",
  "Equipamentos de diagnóstico de última geração",
  "Peças originais e de qualidade garantida",
  "Transparência total nos orçamentos",
  "Atendimento personalizado e humanizado",
  "Reboque 24 horas para emergências",
]

export function About() {
  return (
    <section id="sobre" className="border-t border-border bg-secondary/50 py-24">
      <div className="mx-auto max-w-7xl px-4 lg:px-8">
        <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-20">
          {/* Left: Stats + Image placeholder */}
          <div className="space-y-8">
            <div className="grid grid-cols-2 gap-6">
              {[
                { value: "10+", label: "Anos de experiência" },
                { value: "5000+", label: "Clientes atendidos" },
                { value: "24h", label: "Reboque disponível" },
                { value: "100%", label: "Compromisso" },
              ].map((stat) => (
                <div
                  key={stat.label}
                  className="rounded-xl border border-border bg-card p-6 text-center"
                >
                  <span
                    className="block text-3xl font-bold text-primary md:text-4xl"
                    style={{ fontFamily: "var(--font-heading)" }}
                  >
                    {stat.value}
                  </span>
                  <span className="mt-1 block text-xs text-muted-foreground">
                    {stat.label}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* Right: Text */}
          <div>
            <span className="mb-3 inline-block text-xs font-semibold uppercase tracking-[0.2em] text-primary">
              Quem somos
            </span>
            <h2
              className="text-3xl font-bold uppercase tracking-tight text-foreground sm:text-4xl"
              style={{ fontFamily: "var(--font-heading)" }}
            >
              Excelência em cada detalhe
            </h2>
            <p className="mt-5 text-base leading-relaxed text-muted-foreground">
              A J-Car Centro Automotivo é referência em manutenção automotiva no
              Rio de Janeiro. Reunimos em um único espaço todos os serviços que
              seu veículo precisa, com uma equipe dedicada a oferecer o melhor
              atendimento e os melhores resultados.
            </p>
            <ul className="mt-8 space-y-3">
              {highlights.map((item) => (
                <li key={item} className="flex items-center gap-3">
                  <CheckCircle2 className="h-5 w-5 shrink-0 text-primary" />
                  <span className="text-sm text-foreground">{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  )
}
