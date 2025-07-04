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
            <CardContent className="p-0 overflow-hidden rounded-lg">
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
