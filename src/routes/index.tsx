import { createFileRoute } from "@tanstack/react-router";
import { Nav } from "@/components/site/Nav";
import { Hero } from "@/components/site/Hero";
import { Marquee } from "@/components/site/Marquee";
import { About } from "@/components/site/About";
import { Services } from "@/components/site/Services";
import { Portfolio } from "@/components/site/Portfolio";
import { Results } from "@/components/site/Results";
import { Process } from "@/components/site/Process";
import { Testimonials } from "@/components/site/Testimonials";
import { CTA } from "@/components/site/CTA";
import { Footer } from "@/components/site/Footer";
import { WhatsAppFloat } from "@/components/site/WhatsAppFloat";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "AfterLight Studios — Editorial Creative & Growth Studio" },
      {
        name: "description",
        content:
          "AfterLight Studios is a luxury creative agency for real estate, fashion, hospitality and premium brands. Cinematic content, social strategy, Meta ads and lead generation.",
      },
      { property: "og:title", content: "AfterLight Studios — Editorial Creative & Growth Studio" },
      {
        property: "og:description",
        content:
          "Cinematic content, social, Meta ads and lead generation for real estate, fashion, hospitality and premium brands.",
      },
      { property: "og:type", content: "website" },
    ],
  }),
  component: Home,
});

function Home() {
  return (
    <main className="bg-background text-foreground">
      <Nav />
      <Hero />
      <Marquee />
      <About />
      <Services />
      <Portfolio />
      <Results />
      <Process />
      <Testimonials />
      <CTA />
      <Footer />
      <WhatsAppFloat />
    </main>
  );
}
