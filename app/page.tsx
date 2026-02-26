import { Header } from "@/components/header"
import { Hero } from "@/components/hero"
import { Services } from "@/components/services"
import { About } from "@/components/about"
import { Emergency } from "@/components/emergency"
import { Reviews } from "@/components/reviews"
import { Location } from "@/components/location"
import { ContactForm } from "@/components/contact-form"
import { Footer } from "@/components/footer"
import { WhatsappFab } from "@/components/whatsapp-fab"

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <Services />
        <About />
        <Emergency />
        <Reviews />
        <Location />
        <ContactForm />
      </main>
      <Footer />
      <WhatsappFab />
    </>
  )
}
