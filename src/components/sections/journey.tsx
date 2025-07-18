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
        
        <div className="grid gap-12 lg:grid-cols-5">
            <div className="lg:col-span-3 space-y-4">
                <h3 className="text-2xl font-bold font-headline">A Ação de Preservação e Tombamento</h3>
                <p className="text-muted-foreground">A história de luta pela preservação da Ponte de Pedra começou com um alerta – um sinal de que algo precioso estava em risco. No Comitê da Bacia Hidrográfica do Rio dos Bois, soou a preocupação: uma Pequena Central Hidrelétrica (PCH) poderia ser instalada na região. Mais do que uma ameaça ambiental, tratava-se do possível impacto sobre um território carregado de memória, natureza e identidade. Era o início de uma mobilização por respeito, cuidado e permanência.</p>
                <p className="text-muted-foreground">Diante da urgência da ameaça, a Prefeitura de Rio Verde apoiou a busca por especialistas para desenvolver um estudo técnico e compreender melhor o cenário e os impactos da instalação da PCH no rio Ponte de Pedra.</p>
                <p className="text-muted-foreground italic">"Foi nesse contexto de urgência e cuidado que a arqueóloga Jordana Vieira Goulart uniu forças com uma equipe multidisciplinar comprometida com a proteção do território. Ao lado do ambientalista Klener Alves — conselheiro do Comitê da Bacia Hidrográfica do Rio dos Bois e representante do CODERV, do geólogo Guilherme Marques e do engenheiro ambiental Fernando Santiago iniciaram os estudos de campo. Cada passo dado ali carregava o propósito de ouvir a terra, entender seus sinais e proteger o que ainda resiste: a memória, a natureza e a história viva da região."</p>
                <p className="text-muted-foreground">No final de 2019, foi realizada a primeira visita local e revelou a grandiosidade da biodiversidade e a vulnerabilidade do lugar. No local foram localizados lixos e áreas com pichações feitas pelos freqüentadores. No âmbito da arqueologia localizou-se em superfície lascas de pedra nos bolsões da entrada da gruta. Os vestígios identificados foram registrados fotograficamente com suas coordenadas geográficas e deixados in situ, conforme os protocolos de conservação e registro arqueológico.</p>
                <p className="text-muted-foreground">A pesquisa de campo e bibliográfica permitiram identificar duas importantes expedições arqueológicas pioneiras relacionadas à região: a primeira, realizada em 1973, contou com a participação do Padre Schmitz, de pesquisadores do Instituto Anchietano (RS) e do Instituto Goiano de Pré-História e Antropologia (IGPA); a segunda, em 1975, foi conduzida por Acary de Passos e Iluska Simonsen, tendo como foco a área específica da Ponte de Pedra. Além disso entrevistas com moradores locais, como o Sr. Luiz 'Catuaba', enriqueceram a compreensão do uso ancestral da terra e da consciência de preservação local.</p>
                <p className="text-muted-foreground">Após a visita técnica, foi construído, com escuta atenta e olhares diversos, um relatório multidisciplinar que representava mais do que um documento técnico — era um gesto de cuidado e reconhecimento. O relatório marcou um passo fundamental na luta pela proteção da Ponte de Pedra: o pedido de tombamento municipal. Um ato simbólico e concreto de valorização da memória, da natureza e das vozes que defendem esse território como parte viva de nossa identidade coletiva. Em 2020, conquistou-se um marco: o tombamento provisório municipal da Gruta da Ponte de Pedra (Decreto Nº 1.799), um passo crucial para sua proteção e preservação.</p>
                <p className="text-muted-foreground">No entanto, a luta continua. Um trabalho intenso e essencial vem sendo realizado para preservar e salvaguardar a cavidade e a caverna, protegendo não apenas a integridade do local, mas também a memória e a identidade dos povos que ali viveram. Essa ação direta tem sido decisiva para manter viva a história e o vínculo cultural com a região. Hoje, o desafio é ainda maior: busca-se a ampliação dessa proteção por meio do tombamento em esferas estadual e federal, além da promoção contínua da conscientização pública. O abaixo-assinado, iniciado em 2023, é parte vital dessa mobilização.</p>
            </div>
            <div className="lg:col-span-2">
                <h3 className="text-2xl font-bold font-headline mb-6 text-center lg:text-left">O Curta-Metragem</h3>
                <div className="aspect-video rounded-lg flex items-center justify-center relative overflow-hidden group cursor-pointer bg-secondary shadow-xl">
                    <Image
                        src="https://i.postimg.cc/xTgXxCwP/3da24e5f6ac4f18877d086882e80c.jpg"
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
        </div>

        <div className="mt-20">
            <div className="text-center mb-12">
                <h3 className="text-2xl font-bold font-headline">Do Conceito à Tela: A Criação do Curta-Metragem</h3>
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
