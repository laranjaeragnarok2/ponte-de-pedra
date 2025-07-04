import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Film, PenTool, Search, Users } from "lucide-react";

const journeySteps = [
  {
    icon: <Search className="w-8 h-8 text-primary" />,
    title: "Pesquisa e Roteiro",
    description: "Imersão na história da ponte, entrevistas com historiadores e moradores locais para um roteiro autêntico."
  },
  {
    icon: <Film className="w-8 h-8 text-primary" />,
    title: "Produção e Filmagem",
    description: "Captura de imagens cinematográficas da ponte e seus arredores, destacando sua beleza e fragilidade."
  },
  {
    icon: <PenTool className="w-8 h-8 text-primary" />,
    title: "Pós-Produção",
    description: "Edição, colorização e trilha sonora para criar uma experiência visual e sonora impactante."
  },
  {
    icon: <Users className="w-8 h-8 text-primary" />,
    title: "Divulgação e Ativismo",
    description: "Lançamento do filme e mobilização da comunidade e autoridades para a causa da preservação."
  }
];

export function Journey() {
  return (
    <section id="jornada" className="w-full py-12 md:py-24 lg:py-32 bg-secondary">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          <h2 className="text-3xl font-bold font-headline tracking-tighter sm:text-4xl md:text-5xl">
            Nossa Jornada Cinematográfica
          </h2>
          <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
            Desde a concepção até a tela, cada passo foi dado com a missão de honrar o legado da Ponte de Pedra.
          </p>
        </div>
        <div className="mx-auto grid items-start gap-8 sm:max-w-4xl sm:grid-cols-2 md:gap-12 lg:max-w-5xl lg:grid-cols-4 mt-12">
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
    </section>
  );
}
