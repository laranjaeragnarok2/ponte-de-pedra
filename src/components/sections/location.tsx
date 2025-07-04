import Image from 'next/image';
import { Card, CardContent } from '@/components/ui/card';

export function Location() {
  return (
    <section id="localizacao" className="w-full py-12 md:py-24 lg:py-32">
      <div className="container px-4 md:px-6">
        <div className="grid items-center gap-6 lg:grid-cols-2 lg:gap-12">
          <div className="space-y-4">
            <h2 className="text-3xl font-bold font-headline tracking-tighter sm:text-4xl md:text-5xl">
              Onde o Legado Reside: A Ponte de Pedra
            </h2>
            <p className="max-w-[600px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
              A Ponte de Pedra está localizada na divisa entre os municípios de Rio Verde e Paraúna, em Goiás, sobre o Rio Ponte de Pedra. Este local de rara beleza e rica história, embora ainda não seja Patrimônio Mundial, é um tesouro que lutamos para preservar.
            </p>
            <p className="text-muted-foreground">
              <strong>Coordenadas:</strong> S 17°10'21.73" W 50°50'11.72" - Rio Verde/Paraúna, Goiás.
            </p>
          </div>
          <Card>
            <CardContent className="p-0">
               <Image
                src="https://placehold.co/600x400.png"
                alt="Mapa da localização da Ponte de Pedra na divisa de Rio Verde e Paraúna"
                width={600}
                height={400}
                className="w-full rounded-lg shadow-lg aspect-[4/3] object-cover"
                data-ai-hint="map river goias"
              />
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
}
