import { Button } from "@/components/ui/button";
import { CheckCircleFillIcon } from "@/components/icons/check-circle-fill";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { PenSquare, Megaphone } from "lucide-react";

const otherWaysToSupport = [
    "Compartilhe nosso curta-metragem nas suas redes sociais.",
    "Participe de eventos e debates sobre o patrimônio histórico.",
    "Apoie instituições que trabalham pela preservação cultural.",
    "Cobre ações do poder público para a manutenção da ponte.",
]

export function Participate() {
  return (
    <section id="participe" className="w-full py-12 md:py-24 lg:py-32 bg-background">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center mb-16">
          <h2 className="text-3xl font-bold font-headline tracking-tighter sm:text-4xl md:text-5xl">
            Participe e Faça a Diferença
          </h2>
          <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
            A preservação da Ponte de Pedra é uma responsabilidade de todos nós. Sua ajuda é fundamental para que este legado continue de pé.
          </p>
        </div>
        
        <div className="grid gap-8 md:grid-cols-2 max-w-5xl mx-auto">
          
          <Card className="bg-secondary/50 flex flex-col">
              <CardHeader className="items-center text-center">
                  <PenSquare className="w-10 h-10 text-primary mb-2" />
                  <CardTitle className="font-headline text-2xl">Sua Voz Faz a Diferença!</CardTitle>
              </CardHeader>
              <CardContent className="text-center space-y-4 flex flex-col flex-1">
                  <p className="text-muted-foreground flex-1">
                      Sua assinatura é uma voz poderosa na luta pela preservação da Ponte de Pedra. Junte-se a milhares de pessoas e ajude a proteger nosso patrimônio histórico e ambiental contra projetos que ameaçam sua existência.
                  </p>
                  <Button size="lg" asChild className="mt-auto">
                      <a href="https://www.change.org/p/salve-a-ponte-de-pedra-pch-prev%C3%AA-impacto-negativo-em-patrim%C3%B4nio-ambiental-e-arquiol%C3%B3gico?source_location=psf_petitions" target="_blank" rel="noopener noreferrer">
                      Assine o Abaixo-Assinado
                      </a>
                  </Button>
              </CardContent>
          </Card>

          <Card className="bg-secondary/50 flex flex-col">
            <CardHeader className="items-center text-center">
              <Megaphone className="w-10 h-10 text-primary mb-2" />
              <CardTitle className="font-headline text-2xl">Outras Formas de Apoio</CardTitle>
            </CardHeader>
            <CardContent className="flex-1">
              <ul className="space-y-4 text-muted-foreground h-full">
                {otherWaysToSupport.map((way) => (
                  <li key={way} className="flex items-start gap-3">
                    <CheckCircleFillIcon className="w-5 h-5 text-primary fill-current mt-1 shrink-0" />
                    <span>{way}</span>
                  </li>
                ))}
              </ul>
            </CardContent>
          </Card>
          
        </div>
      </div>
    </section>
  );
}
