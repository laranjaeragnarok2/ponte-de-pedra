import { Button } from "@/components/ui/button";
import { CheckCircleFillIcon } from "@/components/icons/check-circle-fill";
import { Card, CardContent } from "@/components/ui/card";

const partners = [
  "Prefeitura de Goiás",
  "Instituto do Patrimônio Histórico e Artístico Nacional (IPHAN)",
  "Universidade Federal de Goiás (UFG)",
  "Secretaria de Cultura de Goiás",
];

export function Participate() {
  return (
    <section id="participe" className="w-full py-12 md:py-24 lg:py-32 bg-secondary">
      <div className="container px-4 md:px-6">
        <div className="grid gap-10 lg:grid-cols-2 lg:gap-16 items-center">
          <div className="space-y-6">
            <h2 className="text-3xl font-bold font-headline tracking-tighter sm:text-4xl md:text-5xl">
              Participe e Faça a Diferença
            </h2>
            <p className="max-w-[600px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
              A preservação da Ponte de Pedra é uma responsabilidade de todos nós. Sua ajuda é fundamental para que este legado continue de pé.
            </p>
            <div className="space-y-4">
              <h3 className="text-xl font-bold font-headline">Como você pode ajudar:</h3>
              <ul className="list-disc list-inside space-y-2 text-muted-foreground">
                <li>Compartilhe nosso curta-metragem nas suas redes sociais.</li>
                <li>Participe de eventos e debates sobre o patrimônio histórico.</li>
                <li>Apoie instituições que trabalham pela preservação cultural.</li>
                <li>Cobre ações do poder público para a manutenção da ponte.</li>
              </ul>
            </div>
            <Button size="lg">Assista ao Curta</Button>
          </div>
          <Card className="bg-background">
            <CardContent className="p-8">
              <h3 className="text-2xl font-bold font-headline mb-6">Apoio Institucional</h3>
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
