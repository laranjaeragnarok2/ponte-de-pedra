import { Button } from "@/components/ui/button";
import { ChevronDown } from "lucide-react";

export function Hero() {
  return (
    <section id="hero" className="relative w-full h-dvh min-h-[600px] flex items-center justify-center text-center text-white overflow-hidden">
      <div
        className="absolute inset-0 bg-cover bg-center animate-kenburns"
        style={{ backgroundImage: "url('https://i.postimg.cc/xTgXxCwP/3da24e5f6ac4f18877d086882e80c.jpg')" }}
      ></div>
      <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/50 to-black/20"></div>

      <div className="container relative max-w-4xl mx-auto px-4 z-10">
        <span className="inline-block text-sm font-semibold uppercase tracking-[0.2em] text-white/80 mb-4 animate-fade-in-up">
          Curta-metragem documental
        </span>
        <h1 className="font-headline text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl lg:text-7xl [text-shadow:_2px_4px_8px_rgb(0_0_0_/_50%)] leading-[1.1]">
          Ponte de Pedra: Um Legado a Preservar
        </h1>
        <p className="mt-6 max-w-2xl mx-auto text-lg md:text-xl text-white/85 leading-relaxed [text-shadow:_1px_2px_4px_rgb(0_0_0_/_40%)]">
          Um curta-metragem que lança luz sobre a história e a necessidade urgente de preservação da icônica Ponte de Pedra. Junte-se a nós e seja parte dessa história de salvaguarda.
        </p>
        <div className="mt-10 flex flex-col sm:flex-row gap-4 justify-center items-center">
          <Button size="lg" asChild className="text-base px-8 py-6 rounded-full shadow-lg hover:shadow-xl transition-shadow">
            <a href="#jornada">Assista ao Curta-Metragem</a>
          </Button>
          <Button size="lg" variant="outline" asChild className="text-base px-8 py-6 rounded-full border-white/30 text-white hover:bg-white/10 hover:text-white">
            <a href="#sobre">Conheça a Causa</a>
          </Button>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce z-10">
        <a href="#sobre" aria-label="Rolar para baixo">
          <ChevronDown className="w-8 h-8 text-white/60" />
        </a>
      </div>
    </section>
  );
}
