import { Card, CardContent } from '@/components/ui/card';
import { ExternalLink, Globe, Map, Info } from 'lucide-react';

const links = [
  {
    title: "Recanto Ponte de Pedra",
    description: "Conheça o local onde a natureza e o lazer se encontram. Hospedagem, camping e uma experiência completa.",
    url: "https://pontedepedra.vercel.app/",
    icon: Globe,
    label: "Visitar Site"
  },
  {
    title: "Turismo Paraúna",
    description: "Informações oficiais da Prefeitura de Paraúna sobre o monumento natural e regulamentações.",
    url: "https://www.parauna.go.gov.br/turismo/255-ponte-de-pedra",
    icon: Info,
    label: "Ver no Site Oficial"
  },
  {
    title: "Guia Turístico de Goiás",
    description: "Um guia detalhado sobre as atrações turísticas e a história geológica da região de Paraúna.",
    url: "https://www.guiaturisticodegoias.com.br/cidades-turisticas/31-parauna/atracoes-turisticas/82-ponte-de-pedra-parauna",
    icon: Map,
    label: "Acessar Guia"
  },
  {
    title: "Trilhas no Wikiloc",
    description: "Para os aventureiros: confira as melhores rotas e trilhas de motociclismo e trekking para chegar ao local.",
    url: "https://pt.wikiloc.com/trilhas-motociclismo/ponte-de-pedra-parauna-goias-156788015",
    icon: ExternalLink,
    label: "Ver Trilhas"
  }
];

export function ExternalLinks() {
  return (
    <section id="descubra-mais" className="w-full py-16 md:py-24 bg-secondary/30">
      <div className="container px-4 md:px-6 max-w-6xl mx-auto">
        <div className="text-center space-y-4 mb-12">
          <h2 className="text-3xl font-bold font-headline tracking-tight sm:text-4xl md:text-5xl">
            Descubra Mais
          </h2>
          <p className="max-w-[800px] mx-auto text-muted-foreground text-lg leading-relaxed">
            Explore outros portais e fontes de informação para planejar sua visita e aprofundar seu conhecimento sobre a Ponte de Pedra.
          </p>
        </div>
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          {links.map((link, index) => (
            <Card key={index} className="group hover:shadow-xl transition-all duration-300 border-none bg-background/60 backdrop-blur-sm overflow-hidden">
              <CardContent className="p-6 flex flex-col h-full">
                <div className="mb-4 w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-primary-foreground transition-colors duration-300">
                  <link.icon className="w-6 h-6" />
                </div>
                <h3 className="text-xl font-bold mb-2 group-hover:text-primary transition-colors">
                  {link.title}
                </h3>
                <p className="text-muted-foreground text-sm flex-grow mb-6">
                  {link.description}
                </p>
                <a
                  href={link.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center text-sm font-semibold text-primary hover:underline group/link"
                >
                  {link.label}
                  <ExternalLink className="ml-1 w-3 h-3 group-hover/link:translate-x-0.5 group-hover/link:-translate-y-0.5 transition-transform" />
                </a>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
