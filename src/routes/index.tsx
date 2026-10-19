import { createFileRoute } from "@tanstack/react-router";
import { Nav } from "@/components/site/Nav";
import { Hero } from "@/components/site/Hero";
import { Marquee } from "@/components/site/Marquee";
import { About } from "@/components/site/About";
import { Services } from "@/components/site/Services";
import { Results } from "@/components/site/Results";
import { Process } from "@/components/site/Process";
import { Testimonials } from "@/components/site/Testimonials";
import { CTA } from "@/components/site/CTA";
import { Footer } from "@/components/site/Footer";
import { WhatsAppFloat } from "@/components/site/WhatsAppFloat";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "AfterLight Studios — Influencer Marketing & Social Media" },
      {
        name: "description",
        content:
          "AfterLight Studios builds social-first content strategies, influencer partnerships, and thoughtful social media management for ambitious brands.",
      },
      { property: "og:title", content: "AfterLight Studios — Influencer Marketing & Social Media" },
      {
        property: "og:description",
        content:
          "Influencer partnerships, social media management, and social-first content for ambitious brands.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:title", content: "AfterLight Studios — Influencer Marketing & Social Media" },
      { name: "twitter:description", content: "Influencer partnerships, social media management, and social-first content for ambitious brands." },
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
      <Results />
      <Process />
      <Testimonials />
      <CTA />
      <Footer />
      <WhatsAppFloat />
    </main>
  );
}
