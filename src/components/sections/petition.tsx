import { Button } from "@/components/ui/button";
import { PenSquare } from "lucide-react";

export function Petition() {
  return (
    <section id="abaixo-assinado" className="relative w-full py-12 md:py-24 lg:py-32 text-primary-foreground overflow-hidden">
       <div 
        className="absolute inset-0 bg-cover bg-center opacity-80 animate-kenburns"
        style={{backgroundImage: "url('https://i.postimg.cc/xTgXxCwP/3da24e5b95f6ac4f18877d086882e80c.jpg')"}}
      ></div>
      <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/40 to-black/10"></div>
      <div className="container relative px-4 md:px-6 z-10">
        <div className="flex flex-col items-center justify-center space-y-6 text-center">
          <div className="inline-block rounded-lg bg-primary/20 p-3 text-primary-foreground">
            <PenSquare className="h-8 w-8" />
          </div>
          <h2 className="text-3xl font-bold font-headline tracking-tighter sm:text-4xl md:text-5xl [text-shadow:_2px_2px_4px_rgb(0_0_0_/_30%)]">
            Assine o Abaixo-Assinado
          </h2>
          <p className="max-w-[700px] text-primary-foreground/90 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed [text-shadow:_1px_1px_2px_rgb(0_0_0_/_30%)]">
            Sua assinatura é uma voz poderosa na luta pela preservação da Ponte de Pedra. Junte-se a milhares de pessoas e ajude a proteger nosso patrimônio histórico e ambiental contra projetos que ameaçam sua existência.
          </p>
          <Button size="lg" asChild>
            <a href="https://www.change.org/p/salve-a-ponte-de-pedra-pch-prev%C3%AA-impacto-negativo-em-patrim%C3%B4nio-ambiental-e-arquiol%C3%B3gico?source_location=psf_petitions" target="_blank" rel="noopener noreferrer">
              Ir para o Abaixo-Assinado
            </a>
          </Button>
        </div>
      </div>
    </section>
  );
}
