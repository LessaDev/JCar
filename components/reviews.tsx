"use client"

import { Star, Quote } from "lucide-react"

const reviews = [
  {
    name: "Carlos Eduardo",
    rating: 5,
    date: "2 meses atrás",
    text: "Excelente oficina! Levei meu carro com problema na suspensão e resolveram tudo rapidamente. Preço justo e atendimento impecável. Super recomendo a J-Car!",
    avatar: "CE",
  },
  {
    name: "Amanda Silva",
    rating: 5,
    date: "1 mês atrás",
    text: "Precisei de reboque às 23h e eles atenderam super rápido. Serviço de qualidade e profissionais muito atenciosos. Minha oficina de confiança agora!",
    avatar: "AS",
  },
  {
    name: "Roberto Almeida",
    rating: 5,
    date: "3 semanas atrás",
    text: "Fiz a revisão completa do meu carro aqui. Orçamento transparente, sem surpresas. O ar-condicionado voltou a gelar como novo. Parabéns à equipe!",
    avatar: "RA",
  },
  {
    name: "Fernanda Costa",
    rating: 5,
    date: "1 semana atrás",
    text: "Melhor oficina da região! Atendimento rápido, preço honesto e serviço de primeira qualidade. Já indiquei para toda minha família.",
    avatar: "FC",
  },
  {
    name: "Lucas Martins",
    rating: 4,
    date: "2 semanas atrás",
    text: "Ótimo serviço de elétrica automotiva. Resolveram um problema que ninguém conseguia identificar. Equipe competente e atenciosa.",
    avatar: "LM",
  },
  {
    name: "Patricia Oliveira",
    rating: 5,
    date: "3 dias atrás",
    text: "Levei meu carro para manutenção preventiva e fiquei muito satisfeita. Ambiente limpo e organizado, profissionais educados. Voltarei sempre!",
    avatar: "PO",
  },
]

function StarRating({ rating }: { rating: number }) {
  return (
    <div className="flex gap-0.5">
      {Array.from({ length: 5 }).map((_, i) => (
        <Star
          key={i}
          className={`h-4 w-4 ${
            i < rating
              ? "fill-yellow-400 text-yellow-400"
              : "fill-muted text-muted"
          }`}
        />
      ))}
    </div>
  )
}

export function Reviews() {
  return (
    <section id="avaliacoes" className="py-24">
      <div className="mx-auto max-w-7xl px-4 lg:px-8">
        {/* Section Header */}
        <div className="mb-16 text-center">
          <span className="mb-3 inline-block text-xs font-semibold uppercase tracking-[0.2em] text-primary">
            Avaliações
          </span>
          <h2
            className="text-3xl font-bold uppercase tracking-tight text-foreground sm:text-4xl lg:text-5xl"
            style={{ fontFamily: "var(--font-heading)" }}
          >
            O que nossos clientes dizem
          </h2>
          <div className="mx-auto mt-6 flex items-center justify-center gap-3">
            <div className="flex gap-0.5">
              {Array.from({ length: 5 }).map((_, i) => (
                <Star
                  key={i}
                  className="h-6 w-6 fill-yellow-400 text-yellow-400"
                />
              ))}
            </div>
            <span className="text-lg font-bold text-foreground">4.9</span>
            <span className="text-sm text-muted-foreground">
              no Google
            </span>
          </div>
        </div>

        {/* Reviews Grid */}
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {reviews.map((review) => (
            <div
              key={review.name}
              className="relative rounded-xl border border-border bg-card p-6 transition-all hover:border-primary/30"
            >
              <Quote className="absolute right-6 top-6 h-8 w-8 text-primary/10" />
              <div className="mb-4 flex items-center gap-3">
                <div className="flex h-10 w-10 items-center justify-center rounded-full bg-primary/15 text-sm font-bold text-primary">
                  {review.avatar}
                </div>
                <div>
                  <p className="text-sm font-semibold text-foreground">
                    {review.name}
                  </p>
                  <p className="text-xs text-muted-foreground">{review.date}</p>
                </div>
              </div>
              <StarRating rating={review.rating} />
              <p className="mt-4 text-sm leading-relaxed text-muted-foreground">
                {review.text}
              </p>
            </div>
          ))}
        </div>

        {/* Google CTA */}
        <div className="mt-12 text-center">
          <a
            href="https://maps.app.goo.gl/2n1xFb13XkkafaPs5"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-sm font-medium text-primary transition-colors hover:text-primary/80"
          >
            Ver todas as avaliações no Google
            <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
            </svg>
          </a>
        </div>
      </div>
    </section>
  )
}
