import Footer from "@/components/sections/Footer";
import Header from "@/components/sections/Header";
import Hero from "@/components/sections/Hero";
import MeetupMainHero from "@/components/sections/MeetupMainHero";
import Testimonials from "@/components/sections/Testimonials";

export default function Home() {
  return (
    <main>
      <Header />
      <MeetupMainHero />
      <Hero
        title="<p><strong>Envelhecer LGBT+ na Tecnologia</strong></p><p></p>"
        description={'Em plena Semana da Parada SP, realizamos o Meetup Orgulho Tech 2025 na FIAP, com o tema "Envelhecer LGBT+ na Tecnologia". Reunimos painelistas incríveis, premiamos comunidades inspiradoras e celebramos a diversidade que move a tecnologia.'}
        image="https://assets.decocache.com/orgulho-tech/2603afca-f2ea-49bf-9d84-045e2dc7b05e/Screenshot-2025-06-19-at-15.20.24.png"
        placement="left"
        titleSize="heading"
        cta={[
          {
            id: "meetup-video",
            href: "https://youtu.be/BbAVhm59g3g",
            text: "Assista como foi no YouTube",
            outline: false,
          },
        ]}
      />
      <Testimonials />
      <Footer />
    </main>
  );
}
