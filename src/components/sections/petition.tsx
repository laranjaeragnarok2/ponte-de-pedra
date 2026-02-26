import { Button } from "@/components/ui/button";
import { PenSquare } from "lucide-react";

export function Petition() {
  return (
    <section id="abaixo-assinado" className="relative w-full py-20 md:py-32 lg:py-40 text-white overflow-hidden">
      <div
        className="absolute inset-0 bg-cover bg-center bg-fixed"
        style={{ backgroundImage: "url('https://i.postimg.cc/xTgXxCwP/3da24e5b95f6ac4f18877d086882e80c.jpg')" }}
      ></div>
      <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/60 to-black/80"></div>
      <div className="container relative px-4 md:px-6 z-10 max-w-3xl mx-auto">
        <div className="flex flex-col items-center justify-center space-y-6 text-center">
          <div className="w-16 h-16 rounded-2xl bg-white/10 backdrop-blur-sm flex items-center justify-center">
            <PenSquare className="h-8 w-8 text-white" />
          </div>
          <h2 className="text-3xl font-bold font-headline tracking-tight sm:text-4xl md:text-5xl [text-shadow:_2px_3px_6px_rgb(0_0_0_/_40%)] leading-tight">
            Assine o Abaixo-Assinado
          </h2>
          <p className="max-w-[650px] text-white/85 text-base md:text-lg leading-relaxed [text-shadow:_1px_1px_3px_rgb(0_0_0_/_30%)]">
            Sua assinatura é uma voz poderosa na luta pela preservação da Ponte de Pedra. Junte-se a milhares de pessoas e ajude a proteger nosso patrimônio histórico e ambiental contra projetos que ameaçam sua existência.
          </p>
          <Button size="lg" asChild className="text-base px-8 py-6 rounded-full shadow-lg hover:shadow-xl transition-all mt-2 bg-white text-black hover:bg-white/90">
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
