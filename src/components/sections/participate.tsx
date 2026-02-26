import { CheckCircleFillIcon } from "@/components/icons/check-circle-fill";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Megaphone, Share2, Users, Building2, MessageCircle } from "lucide-react";

const otherWaysToSupport = [
  { text: "Compartilhe nosso curta-metragem nas suas redes sociais.", icon: <Share2 className="w-5 h-5 text-primary shrink-0" /> },
  { text: "Participe de eventos e debates sobre o patrimônio histórico.", icon: <Users className="w-5 h-5 text-primary shrink-0" /> },
  { text: "Apoie instituições que trabalham pela preservação cultural.", icon: <Building2 className="w-5 h-5 text-primary shrink-0" /> },
  { text: "Cobre ações do poder público para a manutenção da ponte.", icon: <MessageCircle className="w-5 h-5 text-primary shrink-0" /> },
]

export function Participate() {
  return (
    <section id="participe" className="w-full py-16 md:py-28 lg:py-36 bg-background">
      <div className="container px-4 md:px-6 max-w-6xl mx-auto">
        <div className="flex flex-col items-center justify-center text-center mb-14">
          <span className="inline-block text-sm font-semibold uppercase tracking-wider text-primary mb-3">
            Contribua
          </span>
          <h2 className="text-3xl font-bold font-headline tracking-tight sm:text-4xl md:text-5xl leading-tight">
            Sua Participação é Fundamental
          </h2>
          <div className="section-divider w-16 mt-6 mb-6"></div>
          <p className="max-w-[700px] text-muted-foreground text-base md:text-lg leading-relaxed">
            Além de assinar o abaixo-assinado, existem outras formas de apoiar a nossa causa e fazer a diferença na preservação da Ponte de Pedra.
          </p>
        </div>

        <div className="grid gap-8 max-w-2xl mx-auto">
          <Card className="bg-card border-border/50 shadow-md">
            <CardHeader className="items-center text-center pb-4">
              <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center mb-3">
                <Megaphone className="w-7 h-7 text-primary" />
              </div>
              <CardTitle className="font-headline text-2xl">Outras Formas de Apoio</CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="space-y-5">
                {otherWaysToSupport.map((way) => (
                  <li key={way.text} className="flex items-start gap-4 p-3 rounded-lg hover:bg-secondary/50 transition-colors">
                    <div className="mt-0.5">{way.icon}</div>
                    <span className="text-foreground/80 leading-relaxed">{way.text}</span>
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
