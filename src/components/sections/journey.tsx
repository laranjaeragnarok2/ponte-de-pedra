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
            <div className="lg:col-span-3 space-y-6">
                <h3 className="text-2xl font-bold font-headline">A Ação de Preservação e Tombamento</h3>
                <p className="text-muted-foreground">Nossa história de preservação da Ponte de Pedra começou com um alerta no Comitê de Bacia Hidrográfica dos Bois sobre a ameaça da PCH. Diante da urgência, a Prefeitura de Rio Verde apoiou a busca por especialistas, e assim a arqueóloga Jordana Vieira Goulart e nossa equipe multidisciplinar iniciaram a imersão. Em final de 2019, nossa primeira visita sob forte chuva revelou a grandiosidade e a vulnerabilidade do lugar, com pichações e lixo, o que nos motivou a abraçar a causa. Em 2020, conquistamos um marco: o tombamento provisório municipal da Gruta da Ponte de Pedra (Decreto Nº 1.799), um passo crucial para sua proteção. A pesquisa de gabinete e campo aprofundou o conhecimento sobre as expedições arqueológicas de 1973 e 1975, e entrevistas com moradores antigos, como o Sr. Luiz 'Catuaba', enriqueceram a compreensão do uso ancestral e da consciência de preservação local.</p>
                <p className="text-muted-foreground">No entanto, a luta não parou. Um relatório de prospecção finalizado em março de 2022 revelou que a PCH Ponte de Pedra 2 submergiria 5 sítios arqueológicos recém-identificados. Foi então que, entre 2022 e 2024, nossa equipe liderou o resgate arqueológico emergencial desses sítios. Um trabalho intenso e essencial para recuperar e salvaguardar vestígios antes que fossem perdidos para sempre. Essa ação direta foi fundamental para preservar a memória e a identidade dos povos que habitaram essa região. Hoje, o desafio é ampliar essa proteção com o tombamento estadual e federal, além de promover a conscientização contínua. O abaixo-assinado, iniciado em 2023, é parte vital dessa mobilização.</p>
            </div>
            <div className="lg:col-span-2">
                <h3 className="text-2xl font-bold font-headline mb-6 text-center lg:text-left">O Curta-Metragem</h3>
                <div className="aspect-video rounded-lg flex items-center justify-center relative overflow-hidden group cursor-pointer bg-secondary shadow-xl">
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
