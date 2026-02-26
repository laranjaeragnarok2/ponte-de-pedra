import { Card, CardContent } from "@/components/ui/card";
import { Users, Landmark, Sailboat, Palette, GraduationCap, Shield, HandHeart } from 'lucide-react';

const partners = [
  { name: "Prefeitura de Rio Verde", icon: <Landmark className="w-8 h-8 text-primary" /> },
  { name: "Prefeitura de Paraúna", icon: <Landmark className="w-8 h-8 text-primary" /> },
  { name: "Associação de Canoeiras do Rio Corrente", icon: <Sailboat className="w-8 h-8 text-primary" /> },
  { name: "CONDEC", description: "Conselho de Desenvolvimento Comunitário", icon: <Users className="w-8 h-8 text-primary" /> },
  { name: "CONSEG", description: "Conselho Comunitário de Segurança e Defesa Social", icon: <Shield className="w-8 h-8 text-primary" /> },
  { name: "Secretaria de Cultura de Goiás", icon: <Palette className="w-8 h-8 text-primary" /> },
  { name: "Universidade Federal de Goiás", icon: <GraduationCap className="w-8 h-8 text-primary" /> },
];

const whatsappLink = `https://wa.me/556281471728?text=${encodeURIComponent("Olá! Gostaria de saber como posso apoiar o projeto Legado da Ponte de Pedra.")}`;

export function Partners() {
  return (
    <section id="parceiros" className="w-full py-16 md:py-28 lg:py-36 bg-secondary">
      <div className="container px-4 md:px-6 max-w-6xl mx-auto">
        <div className="flex flex-col items-center justify-center text-center mb-14">
          <span className="inline-block text-sm font-semibold uppercase tracking-wider text-primary mb-3">
            Parceiros
          </span>
          <h2 className="text-3xl font-bold font-headline tracking-tight sm:text-4xl md:text-5xl leading-tight">
            Apoio Institucional
          </h2>
          <div className="section-divider w-16 mt-6 mb-6"></div>
          <p className="max-w-[700px] text-muted-foreground text-base md:text-lg leading-relaxed">
            Agradecemos aos nossos parceiros que acreditam e apoiam a preservação do nosso patrimônio.
          </p>
        </div>
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-5 max-w-5xl mx-auto">
          {partners.map((partner, index) => (
            <Card key={index} className="h-full flex items-center justify-center bg-background border-border/50 hover:shadow-md hover:-translate-y-0.5 transition-all duration-300">
              <CardContent className="flex flex-col items-center justify-center text-center p-5 gap-3">
                <div className="w-14 h-14 rounded-xl bg-primary/5 flex items-center justify-center">
                  {partner.icon}
                </div>
                <div>
                  <span className="text-sm font-semibold leading-tight block">{partner.name}</span>
                  {partner.description && (
                    <span className="text-xs text-muted-foreground mt-1 block">{partner.description}</span>
                  )}
                </div>
              </CardContent>
            </Card>
          ))}
          <a href={whatsappLink} target="_blank" rel="noopener noreferrer" className="no-underline">
            <Card className="h-full flex items-center justify-center bg-primary/5 hover:bg-primary/10 border-primary/20 transition-all duration-300 hover:-translate-y-0.5 hover:shadow-md">
              <CardContent className="flex flex-col items-center justify-center text-center p-5 gap-3">
                <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center">
                  <HandHeart className="w-8 h-8 text-primary" />
                </div>
                <span className="text-sm font-semibold text-primary">Quero ser um apoiador</span>
              </CardContent>
            </Card>
          </a>
        </div>
      </div>
    </section>
  );
}
