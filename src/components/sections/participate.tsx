import { CheckCircleFillIcon } from "@/components/icons/check-circle-fill";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Megaphone } from "lucide-react";

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
            Sua Participação é Fundamental
          </h2>
          <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
            Além de assinar o abaixo-assinado, existem outras formas de apoiar a nossa causa e fazer a diferença na preservação da Ponte de Pedra.
          </p>
        </div>
        
        <div className="grid gap-8 max-w-2xl mx-auto">
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
