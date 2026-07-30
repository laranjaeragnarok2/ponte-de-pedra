import { Header } from "@/components/layout/header";
import { Footer } from "@/components/layout/footer";
import { Hero } from "@/components/sections/hero";
import { About } from "@/components/sections/about";
import { RecantoSection } from "@/components/sections/recanto";
import { Journey } from "@/components/sections/journey";
import { Team } from "@/components/sections/team";
import { Gallery } from "@/components/sections/gallery";
import { Location } from "@/components/sections/location";
import { Participate } from "@/components/sections/participate";
import { Partners } from "@/components/sections/partners";
import { InMemoriam } from "@/components/sections/in-memoriam";
import { Petition } from "@/components/sections/petition";
import { ExternalLinks } from "@/components/sections/external-links";

export default function Home() {
  return (
    <div className="flex flex-col min-h-dvh bg-background">
      <Header />
      <main className="flex-1">
        <Hero />
        <About />
        <RecantoSection />
        <Journey />
        <Team />
        <Gallery />
        <Petition />
        <Location />
        <ExternalLinks />
        <Participate />
        <Partners />
        <InMemoriam />
      </main>
      <Footer />
    </div>
  );
}
