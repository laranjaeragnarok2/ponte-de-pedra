import { Button } from "@/components/ui/button";
import { ChevronDown, Clapperboard, Sparkles } from "lucide-react";

export function Hero() {
  return (
    <section id="hero" className="relative w-full h-dvh min-h-[620px] flex items-center justify-center text-center text-white overflow-hidden bg-slate-950">
      {/* Ambient background glow gradient */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-emerald-950/60 via-slate-950 to-stone-950"></div>
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-emerald-600/10 rounded-full blur-[120px] pointer-events-none"></div>

      <div className="container relative max-w-4xl mx-auto px-4 z-10">
        <div className="inline-flex items-center gap-2.5 text-xs font-bold uppercase tracking-[0.2em] text-emerald-400 bg-emerald-950/80 border border-emerald-500/30 px-4 py-2 rounded-full mb-6 shadow-lg backdrop-blur-sm">
          <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></span>
          <Clapperboard className="w-3.5 h-3.5" />
          Documentário em Produção
        </div>

        <h1 className="font-headline text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl lg:text-7xl [text-shadow:_0_4px_12px_rgb(0_0_0_/_70%)] leading-[1.1]">
          Ponte de Pedra: Um Legado a Preservar
        </h1>

        <p className="mt-6 max-w-2xl mx-auto text-lg md:text-xl text-slate-300 leading-relaxed">
          Um curta-metragem documental <strong>em fase de produção</strong> que busca resgatar a memória, a biodiversidade e a urgência do tombamento do monumento natural da Ponte de Pedra (GO).
        </p>

        <div className="mt-10 flex flex-col sm:flex-row gap-4 justify-center items-center">
          <Button size="lg" asChild className="text-base px-8 py-6 rounded-full shadow-lg hover:shadow-xl transition-all bg-emerald-700 hover:bg-emerald-800 text-white">
            <a href="#jornada">Status da Produção</a>
          </Button>
          <Button size="lg" variant="outline" asChild className="text-base px-8 py-6 rounded-full border-emerald-500/40 text-emerald-300 hover:bg-emerald-500/10 hover:text-white backdrop-blur-sm">
            <a href="#recanto">
              <Sparkles className="mr-2 h-4 w-4 text-emerald-400" />
              Projeto Recanto
            </a>
          </Button>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce z-10">
        <a href="#sobre" aria-label="Rolar para baixo">
          <ChevronDown className="w-8 h-8 text-white/50 hover:text-white transition-colors" />
        </a>
      </div>
    </section>
  );
}
