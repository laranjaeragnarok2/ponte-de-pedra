import { Card, CardContent } from '@/components/ui/card';
import { MapPin } from 'lucide-react';

export function Location() {
  return (
    <section id="localizacao" className="w-full py-16 md:py-28 lg:py-36 bg-background">
      <div className="container px-4 md:px-6 max-w-6xl mx-auto">
        <div className="grid items-center gap-10 lg:grid-cols-2 lg:gap-16">
          <div className="space-y-6">
            <span className="inline-block text-sm font-semibold uppercase tracking-wider text-primary">
              Como Chegar
            </span>
            <h2 className="text-3xl font-bold font-headline tracking-tight sm:text-4xl md:text-5xl leading-tight">
              Onde o Legado Reside
            </h2>
            <p className="max-w-[550px] text-muted-foreground text-base md:text-lg leading-relaxed">
              A Ponte de Pedra está localizada na divisa entre os municípios de Rio Verde e Paraúna, em Goiás, logo abaixo do encontro do Rio Ponte de Pedra e o córrego Corrente. Este local de rara beleza e rica biodiversidade e história, embora ainda não seja Patrimônio Mundial, é um tesouro que lutamos para preservar.
            </p>
            <div className="flex items-center gap-3 text-sm text-muted-foreground bg-secondary rounded-lg p-4">
              <MapPin className="w-5 h-5 text-primary shrink-0" />
              <div>
                <p className="font-semibold text-foreground">Coordenadas UTM</p>
                <p>22 K 517384 / 8101346</p>
              </div>
            </div>
          </div>
          <Card className="shadow-lg border-0">
            <CardContent className="p-0 overflow-hidden rounded-xl">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d823910.310951962!2d-51.41977162099872!3d-17.053096217691586!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x9361058d4488ba2d%3A0x8a0c8a2f38d46b84!2sPonte%20de%20Pedra%20II!5e1!3m2!1spt-BR!2sbr!4v1751668031277!5m2!1spt-BR!2sbr"
                style={{ border: 0 }}
                allowFullScreen={true}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="w-full shadow-lg aspect-[4/3]"
                title="Mapa da localização da Ponte de Pedra na divisa de Rio Verde e Paraúna"
              />
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
}
