import { Card, CardContent } from "@/components/ui/card";
import { Users, Landmark, Sailboat, Palette, GraduationCap, Sprout, Shield } from 'lucide-react';

const partners = [
  { name: "Prefeitura de Rio Verde", icon: <Landmark className="w-10 h-10 text-primary" /> },
  { name: "Prefeitura de Paraúna", icon: <Landmark className="w-10 h-10 text-primary" /> },
  { name: "Associação de Canoeiras do Rio Corrente", icon: <Sailboat className="w-10 h-10 text-primary" /> },
  { name: "CONDEC - Conselho de Desenvolvimento Comunitário", icon: <Users className="w-10 h-10 text-primary" /> },
  { name: "CONSEG - Conselho Comunitário de Segurança e Defesa Social", icon: <Shield className="w-10 h-10 text-primary" /> },
  { name: "Museu Histórico de Jataí", icon: <Landmark className="w-10 h-10 text-primary" /> },
  { name: "Secretaria de Cultura de Goiás", icon: <Palette className="w-10 h-10 text-primary" /> },
  { name: "IPHAN", icon: <Landmark className="w-10 h-10 text-primary" /> },
  { name: "Universidade Federal de Goiás", icon: <GraduationCap className="w-10 h-10 text-primary" /> },
  { name: "Emater", icon: <Sprout className="w-10 h-10 text-primary" /> },
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
                      {partner.icon}
                      <span className="text-base font-medium">{partner.name}</span>
                    </CardContent>
                </Card>
            ))}
        </div>
      </div>
    </section>
  );
}
