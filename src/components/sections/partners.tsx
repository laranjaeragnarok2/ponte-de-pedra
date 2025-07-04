import { Card, CardContent } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { Users } from 'lucide-react';

const partners = [
  "Prefeitura de Rio Verde",
  "Prefeitura de Paraúna",
  "Comitê de Bacia Hidrográfica dos Bois",
  "Associação de Canoeiras do Rio Corrente",
  "CONDEC - Conselho de Desenvolvimento Comunitário",
  "Museu Histórico de Jataí",
  "Secretaria de Cultura de Goiás",
  "IPHAN",
  "Universidade Federal de Goiás",
  "Emater",
];

export function Partners() {
  return (
    <section id="parceiros" className="w-full py-12 md:py-24 lg:py-32 bg-secondary">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center mb-12">
          <h2 className="text-3xl font-bold font-headline tracking-tighter sm:text-4xl md:text-5xl">
            Apoio Institucional
          </h2>
          <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
            Agradecemos aos nossos parceiros que acreditam e apoiam a preservação do nosso patrimônio.
          </p>
        </div>
        <Carousel
          opts={{
            align: "start",
            loop: true,
          }}
          className="w-full max-w-5xl mx-auto"
        >
          <CarouselContent>
            {partners.map((partner, index) => (
              <CarouselItem key={index} className="md:basis-1/2 lg:basis-1/3">
                <div className="p-1 h-full">
                  <Card className="h-full flex flex-col justify-center bg-background/70">
                    <CardContent className="flex flex-col items-center justify-center aspect-video p-6 gap-4">
                      <Users className="w-10 h-10 text-primary" />
                      <span className="text-lg font-medium text-center">{partner}</span>
                    </CardContent>
                  </Card>
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious />
          <CarouselNext />
        </Carousel>
      </div>
    </section>
  );
}
