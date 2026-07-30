import { Button } from "@/components/ui/button";
import { PenSquare } from "lucide-react";

export function Petition() {
  return (
    <section id="abaixo-assinado" className="relative w-full py-20 md:py-32 lg:py-40 text-white overflow-hidden bg-slate-950">
      <div className="absolute inset-0 bg-gradient-to-br from-emerald-950 via-slate-950 to-stone-900"></div>
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-emerald-500/10 rounded-full blur-[100px] pointer-events-none"></div>

      <div className="container relative px-4 md:px-6 z-10 max-w-3xl mx-auto">
        <div className="flex flex-col items-center justify-center space-y-6 text-center">
          <div className="w-16 h-16 rounded-2xl bg-emerald-500/10 border border-emerald-500/30 backdrop-blur-md flex items-center justify-center">
            <PenSquare className="h-8 w-8 text-emerald-400" />
          </div>
          <h2 className="text-3xl font-bold font-headline tracking-tight sm:text-4xl md:text-5xl leading-tight">
            Assine o Abaixo-Assinado
          </h2>
          <p className="max-w-[650px] text-slate-300 text-base md:text-lg leading-relaxed">
            Sua assinatura é uma voz poderosa na luta pela preservação da Ponte de Pedra. Junte-se a milhares de pessoas e ajude a proteger nosso patrimônio histórico e ambiental contra projetos que ameaçam sua existência.
          </p>
          <Button size="lg" asChild className="text-base px-8 py-6 rounded-full shadow-lg hover:shadow-xl transition-all mt-2 bg-emerald-700 hover:bg-emerald-800 text-white border border-emerald-500/30">
            <a href="https://www.change.org/p/salve-a-ponte-de-pedra-pch-prev%C3%AA-impacto-negativo-em-patrim%C3%B4nio-ambiental-e-arquiol%C3%B3gico?source_location=psf_petitions" target="_blank" rel="noopener noreferrer">
              <PenSquare className="mr-2 h-5 w-5" />
              Ir para o Abaixo-Assinado
            </a>
          </Button>
        </div>
      </div>
    </section>
  );
}
