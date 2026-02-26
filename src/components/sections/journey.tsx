import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Film, PenTool, Search, Users, PlayCircle } from "lucide-react";
import Image from "next/image";

const journeySteps = [
  {
    icon: <Search className="w-7 h-7 text-primary" />,
    title: "Pesquisa e Roteiro",
    description: "Imersão na história, entrevistas com historiadores e moradores locais para um roteiro autêntico e embasado."
  },
  {
    icon: <Film className="w-7 h-7 text-primary" />,
    title: "Produção e Filmagem",
    description: "Captura de imagens cinematográficas da Ponte de Pedra, destacando sua beleza, fragilidade e o trabalho da equipe de resgate."
  },
  {
    icon: <PenTool className="w-7 h-7 text-primary" />,
    title: "Pós-Produção",
    description: "Edição, colorização e trilha sonora para criar uma experiência visual e sonora impactante e emocionante."
  },
  {
    icon: <Users className="w-7 h-7 text-primary" />,
    title: "Divulgação e Ativismo",
    description: "Lançamento do filme como ferramenta de mobilização da comunidade e autoridades para a causa da preservação do patrimônio."
  }
];

export function Journey() {
  return (
    <section id="jornada" className="w-full py-16 md:py-28 lg:py-36 bg-secondary">
      <div className="container px-4 md:px-6 max-w-6xl mx-auto">
        {/* Section Header */}
        <div className="flex flex-col items-center justify-center text-center mb-16">
          <span className="inline-block text-sm font-semibold uppercase tracking-wider text-primary mb-3">
            O Projeto
          </span>
          <h2 className="text-3xl font-bold font-headline tracking-tight sm:text-4xl md:text-5xl leading-tight">
            Nossa Jornada: Da Conscientização ao Resgate
          </h2>
          <div className="section-divider w-16 mt-6"></div>
        </div>

        {/* Video Section */}
        <div className="max-w-4xl mx-auto mb-20">
          <h3 className="text-xl font-bold font-headline mb-4 text-center text-muted-foreground">O Curta-Metragem</h3>
          <div className="aspect-video rounded-2xl flex items-center justify-center relative overflow-hidden group cursor-pointer shadow-2xl">
            <Image
              src="https://i.postimg.cc/xTgXxCwP/3da24e5b95f6ac4f18877d086882e80c.jpg"
              alt="Thumbnail do curta-metragem"
              fill={true}
              className="object-cover transition-transform duration-700 ease-in-out group-hover:scale-110"
            />
            <div className="absolute inset-0 bg-black/50 transition-colors group-hover:bg-black/40"></div>
            <div className="relative flex flex-col items-center justify-center text-white z-10">
              <div className="w-20 h-20 rounded-full border-2 border-white/50 flex items-center justify-center backdrop-blur-sm bg-white/10 transition-all duration-300 group-hover:scale-110 group-hover:border-white/80">
                <PlayCircle className="w-12 h-12 text-white/90" />
              </div>
              <p className="mt-4 font-headline text-lg font-semibold [text-shadow:_1px_1px_3px_rgb(0_0_0_/_60%)]">Assista ao Curta</p>
              <span className="text-sm text-white/70 mt-1">(Em Breve)</span>
            </div>
          </div>
        </div>

        {/* Story Section */}
        <div className="max-w-3xl mx-auto space-y-10 mb-20">
          <div className="text-center">
            <h3 className="text-2xl md:text-3xl font-bold font-headline">A Ação de Preservação e Tombamento</h3>
          </div>
          <div className="space-y-6 text-foreground/80 text-base md:text-lg leading-[1.85] prose-readable">
            <p>A história de luta pela preservação da Ponte de Pedra começou com um alerta – um sinal de que algo precioso estava em risco. No Comitê da Bacia Hidrográfica do Rio dos Bois, soou a preocupação: uma Pequena Central Hidrelétrica (PCH) poderia ser instalada na região. Mais do que uma ameaça ambiental, tratava-se do possível impacto sobre um território carregado de memória, natureza e identidade. Era o início de uma mobilização por respeito, cuidado e permanência.</p>
            <p>Diante da urgência da ameaça, a Prefeitura de Rio Verde apoiou a busca por especialistas para desenvolver um estudo técnico e compreender melhor o cenário e os impactos da instalação da PCH no rio Ponte de Pedra.</p>
            <blockquote className="border-l-4 border-primary pl-6 italic my-8 text-foreground/70 bg-primary/5 py-4 pr-4 rounded-r-lg">&quot;Foi nesse contexto de urgência e cuidado que a arqueóloga Jordana Vieira Goulart uniu forças com uma equipe multidisciplinar comprometida com a proteção do território. Ao lado do ambientalista Klener Alves — conselheiro do Comitê da Bacia Hidrográfica do Rio dos Bois e representante do CODERV, do geólogo Guilherme Marques e do engenheiro ambiental Fernando Santiago iniciaram os estudos de campo. Cada passo dado ali carregava o propósito de ouvir a terra, entender seus sinais e proteger o que ainda resiste: a memória, a natureza e a história viva da região.&quot;</blockquote>
            <p>No final de 2019, foi realizada a primeira visita local, que revelou a grandiosidade da biodiversidade e a vulnerabilidade do lugar. Foram encontrados lixos e pichações. No âmbito da arqueologia, localizaram-se em superfície lascas de pedra nos bolsões da entrada da gruta. Os vestígios foram registrados fotograficamente e deixados no local, conforme os protocolos de conservação.</p>
            <p>A pesquisa de campo e bibliográfica permitiu identificar duas expedições arqueológicas pioneiras na região: a primeira, em 1973, com o Padre Schmitz, e a segunda, em 1975, conduzida por Acary de Passos e Iluska Simonsen. Entrevistas com moradores locais, como o Sr. Luiz &apos;Catuaba&apos;, enriqueceram a compreensão do uso ancestral da terra.</p>
            <p>Após a visita técnica, foi construído um relatório multidisciplinar que marcou um passo fundamental na luta: o pedido de tombamento municipal. Em 2020, conquistou-se um marco: <strong>o tombamento provisório municipal da Gruta da Ponte de Pedra (Decreto Nº 1.799)</strong>.</p>
            <p>No entanto, a luta continua. Hoje, o desafio é ampliar essa proteção por meio do tombamento estadual e federal, além da conscientização pública. O abaixo-assinado, iniciado em 2023, é parte vital dessa mobilização.</p>
          </div>
        </div>

        {/* Behind the Scenes Cards */}
        <div>
          <div className="text-center mb-12">
            <span className="inline-block text-sm font-semibold uppercase tracking-wider text-primary mb-3">
              Bastidores
            </span>
            <h3 className="text-2xl md:text-3xl font-bold font-headline">Por Trás das Câmeras: A Criação do Curta</h3>
          </div>
          <div className="mx-auto grid items-start gap-6 sm:max-w-4xl sm:grid-cols-2 md:gap-8 lg:max-w-5xl lg:grid-cols-4 stagger-children">
            {journeySteps.map((step, index) => (
              <Card key={index} className="h-full bg-background border-border/50 hover:shadow-lg hover:-translate-y-1 transition-all duration-300">
                <CardHeader className="flex flex-col items-center text-center pb-2">
                  <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center mb-3">
                    {step.icon}
                  </div>
                  <CardTitle className="font-headline text-lg">{step.title}</CardTitle>
                </CardHeader>
                <CardContent className="text-center">
                  <CardDescription className="text-sm leading-relaxed">{step.description}</CardDescription>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}