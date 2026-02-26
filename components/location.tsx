import { MapPin, Navigation, Clock, Phone } from "lucide-react"

export function Location() {
  return (
    <section id="localizacao" className="border-t border-border bg-background py-24">
      <div className="mx-auto max-w-7xl px-4 lg:px-8">
        {/* Section header */}
        <div className="mb-12 text-center">
          <span className="mb-3 inline-block text-xs font-semibold uppercase tracking-[0.2em] text-primary">
            Onde estamos
          </span>
          <h2
            className="text-3xl font-bold uppercase tracking-tight text-foreground sm:text-4xl"
            style={{ fontFamily: "var(--font-heading)" }}
          >
            Nossa localização
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-base leading-relaxed text-muted-foreground">
            Venha nos visitar ou solicite nosso serviço de reboque 24 horas.
            Estamos prontos para atender você.
          </p>
        </div>

        <div className="grid gap-8 lg:grid-cols-5 lg:gap-12">
          {/* Map - takes 3 columns */}
          <div className="order-2 lg:order-1 lg:col-span-3">
            <div className="overflow-hidden rounded-xl border border-border">
         <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3678.8664275112933!2d-42.924715299999995!3d-22.770337800000004!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x9995c7d34d670f%3A0x41986b36f06bff5c!2sJ-Car%20Oficina%20Mecanica%20e%20reboque%2024h!5e0!3m2!1spt-BR!2sbr!4v1771985676134!5m2!1spt-BR!2sbr" width="600" height="450" style={{ border: "0", width: "100%" }} allowFullScreen loading="lazy" referrerPolicy="no-referrer-when-downgrade" />
            </div>
          </div>

          {/* Info cards - takes 2 columns */}
          <div className="order-1 flex flex-col gap-8 lg:order-2 lg:col-span-2 justify-center itens-center">
            {/* Address card */}
            <div className="rounded-xl border border-border bg-card p-6">
              <div className="mb-4 flex items-center gap-3">
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-primary/10 text-primary">
                  <MapPin className="h-5 w-5" />
                </div>
                <h3 className="text-sm font-bold uppercase tracking-wider text-foreground">
                  Endereço
                </h3>
              </div>
              <p className="text-sm leading-relaxed text-muted-foreground">
                R. Antônio Carlos Guedes, 64 - Centro, Itaboraí - RJ, 24855-156
              </p>
              <a
                href="https://maps.google.com/?q=J-Car+Centro+Automotivo+Rio+de+Janeiro"
                target="_blank"
                rel="noopener noreferrer"
                className="mt-4 inline-flex items-center gap-2 text-sm font-medium text-primary transition-colors hover:text-primary/80"
              >
                <Navigation className="h-4 w-4" />
                Abrir no Google Maps
              </a>
            </div>

            {/* Hours card */}
            <div className="rounded-xl border border-border bg-card p-6">
              <div className="mb-4 flex items-center gap-3">
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-primary/10 text-primary">
                  <Clock className="h-5 w-5" />
                </div>
                <h3 className="text-sm font-bold uppercase tracking-wider text-foreground">
                  Horário de funcionamento
                </h3>
              </div>
              <div className="space-y-2 text-sm text-muted-foreground">
                <div className="flex items-center justify-between">
                  <span>Segunda a Sexta</span>
                  <span className="font-medium text-foreground">8h - 18h</span>
                </div>
                <div className="flex items-center justify-between">
                  <span>Sábado</span>
                  <span className="font-medium text-foreground">8h - 14h</span>
                </div>
                <div className="flex items-center justify-between">
                  <span>Domingo e Feriados</span>
                  <span className="font-medium text-muted-foreground">Fechado</span>
                </div>
                <div className="mt-3 rounded-lg bg-primary/10 px-3 py-2 text-center text-sm font-semibold text-primary">
                  Socorro / Reboque: 24 horas
                </div>
              </div>
            </div>

            {/* Phone card 
            <div className="rounded-xl border border-border bg-card p-6">
              <div className="mb-4 flex items-center gap-3">
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-primary/10 text-primary">
                  <Phone className="h-5 w-5" />
                </div>
                <h3 className="text-sm font-bold uppercase tracking-wider text-foreground">
                  Contato rápido
                </h3>
              </div>
              <div className="flex flex-col gap-3">
                <a
                  href="tel:+5521964529016"
                  className="flex items-center justify-center gap-2 rounded-lg bg-primary px-4 py-3 text-sm font-semibold text-primary-foreground transition-all hover:bg-primary/90 hover:shadow-lg hover:shadow-primary/25"
                >
                  <Phone className="h-4 w-4" />
                  (21)96452-9016
                </a>
                <a
                  href="https://wa.me/5521964529016?text=Olá%20J-Car!%20Gostaria%20de%20mais%20informações."
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-2 rounded-lg border border-[#25D366] px-4 py-3 text-sm font-semibold text-[#25D366] transition-all hover:bg-[#25D366]/10"
                >
                  <svg className="h-4 w-4" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                  </svg>
                  WhatsApp
                </a>
              </div>
            </div>
            */}
          </div>
        </div>
      </div>
    </section>
  )
}

