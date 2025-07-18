import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Film, PenTool, Search, Users, PlayCircle } from "lucide-react";
import Image from "next/image";

const journeySteps = [
  {
    icon: <Search className="w-8 h-8 text-primary" />,
    title: "Pesquisa e Roteiro",
    description: "Imersão na história, entrevistas com historiadores e moradores locais para um roteiro autêntico e embasado."
  },
  {
    icon: <Film className="w-8 h-8 text-primary" />,
    title: "Produção e Filmagem",
    description: "Captura de imagens cinematográficas da Ponte de Pedra, destacando sua beleza, fragilidade e o trabalho da equipe de resgate."
  },
  {
    icon: <PenTool className="w-8 h-8 text-primary" />,
    title: "Pós-Produção",
    description: "Edição, colorização e trilha sonora para criar uma experiência visual e sonora impactante e emocionante."
  },
  {
    icon: <Users className="w-8 h-8 text-primary" />,
    title: "Divulgação e Ativismo",
    description: "Lançamento do filme como ferramenta de mobilização da comunidade e autoridades para a causa da preservação do patrimônio."
  }
];

export function Journey() {
  return (
    <section id="jornada" className="w-full py-12 md:py-24 lg:py-32 bg-secondary">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center mb-12">
          <h2 className="text-3xl font-bold font-headline tracking-tighter sm:text-4xl md:text-5xl">
            Nossa Jornada: Da Conscientização ao Resgate
          </h2>
        </div>
        
        <div className="max-w-4xl mx-auto">
          <h3 className="text-2xl font-bold font-headline mb-6 text-center">O Curta-Metragem</h3>
          <div className="aspect-video rounded-lg flex items-center justify-center relative overflow-hidden group cursor-pointer bg-secondary shadow-xl mb-16">
              <Image
                  src="https://i.postimg.cc/xTgXxCwP/3da24e5b95f6ac4f18877d086882e80c.jpg"
                  alt="Thumbnail do curta-metragem"
                  fill={true}
                  className="object-cover transition-transform duration-500 ease-in-out group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-black/50"></div>
              <div className="relative flex flex-col items-center justify-center text-primary-foreground z-10">
                  <PlayCircle className="w-20 h-20 text-white/80 transition-all duration-300 group-hover:scale-110 group-hover:text-white" />
                  <p className="mt-2 font-headline text-lg [text-shadow:_1px_1px_2px_rgb(0_0_0_/_50%)]">Assista ao Curta</p>
                  <span className="text-sm [text-shadow:_1px_1px_2px_rgb(0_0_0_/_50%)]">(Em Breve)</span>
              </div>
          </div>
        </div>

        <div className="max-w-4xl mx-auto space-y-8">
            <div className="space-y-4 text-center">
                <h3 className="text-2xl font-bold font-headline">A Ação de Preservação e Tombamento</h3>
            </div>
            <div className="space-y-6 text-muted-foreground text-lg leading-relaxed">
              <p>A história de luta pela preservação da Ponte de Pedra começou com um alerta – um sinal de que algo precioso estava em risco. No Comitê da Bacia Hidrográfica do Rio dos Bois, soou a preocupação: uma Pequena Central Hidrelétrica (PCH) poderia ser instalada na região. Mais do que uma ameaça ambiental, tratava-se do possível impacto sobre um território carregado de memória, natureza e identidade. Era o início de uma mobilização por respeito, cuidado e permanência.</p>
              <p>Diante da urgência da ameaça, a Prefeitura de Rio Verde apoiou a busca por especialistas para desenvolver um estudo técnico e compreender melhor o cenário e os impactos da instalação da PCH no rio Ponte de Pedra.</p>
              <blockquote className="border-l-4 border-primary pl-4 italic my-6">"Foi nesse contexto de urgência e cuidado que a arqueóloga Jordana Vieira Goulart uniu forças com uma equipe multidisciplinar comprometida com a proteção do território. Ao lado do ambientalista Klener Alves — conselheiro do Comitê da Bacia Hidrográfica do Rio dos Bois e representante do CODERV, do geólogo Guilherme Marques e do engenheiro ambiental Fernando Santiago iniciaram os estudos de campo. Cada passo dado ali carregava o propósito de ouvir a terra, entender seus sinais e proteger o que ainda resiste: a memória, a natureza e a história viva da região."</blockquote>
              <p>No final de 2019, foi realizada a primeira visita local, que revelou a grandiosidade da biodiversidade e a vulnerabilidade do lugar. Foram encontrados lixos e pichações. No âmbito da arqueologia, localizaram-se em superfície lascas de pedra nos bolsões da entrada da gruta. Os vestígios foram registrados fotograficamente e deixados no local, conforme os protocolos de conservação.</p>
              <p>A pesquisa de campo e bibliográfica permitiu identificar duas expedições arqueológicas pioneiras na região: a primeira, em 1973, com o Padre Schmitz, e a segunda, em 1975, conduzida por Acary de Passos e Iluska Simonsen. Entrevistas com moradores locais, como o Sr. Luiz 'Catuaba', enriqueceram a compreensão do uso ancestral da terra.</p>
              <p>Após a visita técnica, foi construído um relatório multidisciplinar que marcou um passo fundamental na luta: o pedido de tombamento municipal. Em 2020, conquistou-se um marco: o tombamento provisório municipal da Gruta da Ponte de Pedra (Decreto Nº 1.799).</p>
              <p>No entanto, a luta continua. Hoje, o desafio é ampliar essa proteção por meio do tombamento estadual e federal, além da conscientização pública. O abaixo-assinado, iniciado em 2023, é parte vital dessa mobilização.</p>
            </div>
        </div>

        <div className="mt-20">
            <div className="text-center mb-12">
                <h3 className="text-2xl font-bold font-headline">Por Trás das Câmeras: A Criação do Curta</h3>
            </div>
            <div className="mx-auto grid items-start gap-8 sm:max-w-4xl sm:grid-cols-2 md:gap-12 lg:max-w-5xl lg:grid-cols-4">
              {journeySteps.map((step, index) => (
                <Card key={index} className="h-full bg-background">
                  <CardHeader className="flex flex-col items-center text-center">
                    <div className="mb-4">{step.icon}</div>
                    <CardTitle className="font-headline">{step.title}</CardTitle>
                  </CardHeader>
                  <CardContent className="text-center">
                    <CardDescription>{step.description}</CardDescription>
                  </CardContent>
                </Card>
              ))}
            </div>
        </div>
      </div>
    </section>
  );
}