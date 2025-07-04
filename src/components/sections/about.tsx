import Image from "next/image";
import { Card, CardContent } from "@/components/ui/card";

export function About() {
  return (
    <section id="sobre" className="w-full py-12 md:py-24 lg:py-32 bg-background">
      <div className="container px-4 md:px-6">
        <div className="grid gap-10 lg:grid-cols-2 lg:gap-16 items-center">
          <div>
            <h2 className="text-3xl font-bold font-headline tracking-tighter sm:text-4xl md:text-5xl">
              Sobre a Causa
            </h2>
            <p className="mt-4 max-w-[600px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
              A Ponte de Pedra não é apenas uma estrutura; é um marco histórico, um testemunho do nosso passado e uma peça vital do nosso patrimônio cultural. Com o tempo, a ponte sofreu com a negligência e a falta de manutenção, colocando em risco sua integridade e o legado que ela representa.
            </p>
            <p className="mt-4 max-w-[600px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
              Nosso curta-metragem busca despertar a consciência coletiva sobre a importância de preservar este monumento. Através de imagens impactantes e narrativas emocionantes, queremos inspirar a ação e garantir que a Ponte de Pedra continue a ser um símbolo de nossa história para as futuras gerações.
            </p>
          </div>
          <Card>
            <CardContent className="p-0">
              <Image
                src="https://placehold.co/600x450.png"
                alt="Ponte de Pedra"
                width={600}
                height={450}
                className="mx-auto aspect-video overflow-hidden rounded-xl object-cover"
                data-ai-hint="historic bridge"
              />
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
}
