import { Header } from "@/components/layout/header";
import { Footer } from "@/components/layout/footer";
import { Hero } from "@/components/sections/hero";
import { About } from "@/components/sections/about";
import { Journey } from "@/components/sections/journey";
import { Team } from "@/components/sections/team";
import { Gallery } from "@/components/sections/gallery";
import { Location } from "@/components/sections/location";
import { Participate } from "@/components/sections/participate";

export default function Home() {
  return (
    <div className="flex flex-col min-h-dvh bg-background">
      <Header />
      <main className="flex-1">
        <Hero />
        <About />
        <Journey />
        <Team />
        <Gallery />
        <Location />
        <Participate />
      </main>
      <Footer />
    </div>
  );
}
