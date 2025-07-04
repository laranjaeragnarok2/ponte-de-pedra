import { Button } from "@/components/ui/button";
import { CheckCircleFillIcon } from "@/components/icons/check-circle-fill";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { PenSquare } from "lucide-react";

const partners = [
  "Secretaria Municipal de Meio Ambiente de Rio Verde",
  "Associação de Canoeiras do Rio Corrente",
  "Museu Histórico de Jataí - Francisco Honório de Campos",
  "Prefeitura de Paraúna",
  "Comitê de Bacia Hidrográfica dos Bois",
];

export function Participate() {
  return (
    <section id="participe" className="w-full py-12 md:py-24 lg:py-32 bg-secondary">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center mb-16">
          <h2 className="text-3xl font-bold font-headline tracking-tighter sm:text-4xl md:text-5xl">
            Participe e Faça a Diferença
          </h2>
          <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
            A preservação da Ponte de Pedra é uma responsabilidade de todos nós. Sua ajuda é fundamental para que este legado continue de pé.
          </p>
        </div>
        
        <div className="grid gap-16 lg:grid-cols-2 lg:gap-16 items-start">
          <div className="space-y-8">
            <Card className="bg-background">
                <CardHeader className="items-center text-center">
                    <PenSquare className="w-10 h-10 text-primary mb-2" />
                    <CardTitle className="font-headline text-2xl">Sua Voz Faz a Diferença!</CardTitle>
                </CardHeader>
                <CardContent className="text-center space-y-4">
                    <p className="text-muted-foreground">
                        Sua assinatura é uma voz poderosa na luta pela preservação da Ponte de Pedra. Junte-se a milhares de pessoas e ajude a proteger nosso patrimônio histórico e ambiental contra projetos que ameaçam sua existência.
                    </p>
                    <Button size="lg" asChild>
                        <a href="https://www.change.org/p/salve-a-ponte-de-pedra-pch-prev%C3%AA-impacto-negativo-em-patrim%C3%B4nio-ambiental-e-arquiol%C3%B3gico?source_location=psf_petitions" target="_blank" rel="noopener noreferrer">
                        Assine o Abaixo-Assinado
                        </a>
                    </Button>
                </CardContent>
            </Card>

            <div className="space-y-4">
              <h3 className="text-xl font-bold font-headline text-center">Outras Formas de Apoio:</h3>
              <ul className="list-disc list-inside space-y-2 text-muted-foreground pl-4">
                <li>Compartilhe nosso curta-metragem nas suas redes sociais.</li>
                <li>Participe de eventos e debates sobre o patrimônio histórico.</li>
                <li>Apoie instituições que trabalham pela preservação cultural.</li>
                <li>Cobre ações do poder público para a manutenção da ponte.</li>
              </ul>
            </div>
          </div>
          
          <Card className="bg-background">
            <CardContent className="p-8">
              <h3 className="text-2xl font-bold font-headline mb-6">Agradecemos Nossos Parceiros e Apoiadores</h3>
              <ul className="space-y-4">
                {partners.map((partner) => (
                  <li key={partner} className="flex items-center gap-3">
                    <CheckCircleFillIcon className="w-6 h-6 text-primary fill-current" />
                    <span className="font-medium text-foreground/80">{partner}</span>
                  </li>
                ))}
              </ul>
              <p className="mt-6 text-sm text-muted-foreground">
                Agradecemos aos nossos parceiros que acreditam e apoiam a preservação do nosso patrimônio.
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
}
