import { Card, CardContent } from "@/components/ui/card";
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
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6 max-w-7xl mx-auto">
            {partners.map((partner, index) => (
                <Card key={index} className="h-full flex items-center justify-center bg-background/70">
                    <CardContent className="flex flex-col items-center justify-center text-center p-6 gap-4">
                      <Users className="w-10 h-10 text-primary" />
                      <span className="text-base font-medium">{partner}</span>
                    </CardContent>
                </Card>
            ))}
        </div>
      </div>
    </section>
  );
}
