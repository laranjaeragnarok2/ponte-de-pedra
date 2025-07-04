import { Button } from "@/components/ui/button";
import { PenSquare } from "lucide-react";

export function Petition() {
  return (
    <section id="abaixo-assinado" className="w-full py-12 md:py-24 lg:py-32 bg-secondary">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-6 text-center">
          <div className="inline-block rounded-lg bg-primary/10 p-3 text-primary">
            <PenSquare className="h-8 w-8" />
          </div>
          <h2 className="text-3xl font-bold font-headline tracking-tighter sm:text-4xl md:text-5xl">
            Assine o Abaixo-Assinado
          </h2>
          <p className="max-w-[700px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
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
