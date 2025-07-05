import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"

export function Team() {
  return (
    <section id="equipe" className="w-full py-12 md:py-24 lg:py-32 bg-background">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center mb-12">
          <h2 className="text-3xl font-bold font-headline tracking-tighter sm:text-4xl md:text-5xl">
            Conheça os Envolvidos no Projeto
          </h2>
          <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
            Indivíduos e instituições que contribuíram para a preservação e valorização da Ponte de Pedra.
          </p>
        </div>
        <div className="max-w-4xl mx-auto">
          <Accordion type="single" collapsible className="w-full">
            <AccordionItem value="item-1">
              <AccordionTrigger className="font-headline text-xl">Liderança e Execução da Ação</AccordionTrigger>
              <AccordionContent className="pt-4 text-muted-foreground space-y-3">
                <p><strong>Jordana Vieira Goulart (Arqueóloga):</strong> Principal responsável técnica pelos estudos, pleito de tombamento e liderança do resgate arqueológico emergencial (2022-2024).</p>
                <div>
                  <p><strong>Klener Alves Rocha Júnior:</strong> Conselheiro em órgãos como CONDEC, CBH Rio dos Bois e CONSEG's, foi quem iniciou a mobilização, articulando com a prefeitura e trazendo a Jordana para o projeto.</p>
                  <p className="pt-2 text-muted-foreground/90 text-sm"><em>Militar Fuzileiro Naval da Marinha do Brasil, Tecnologo em Gestão Pública pela UNOPAR e Pós Graduado em Segurança Pública e Investigação Criminal pela UNIRV.</em></p>
                </div>
                <p><strong>Guilherme Marques Martins (Geólogo):</strong> Membro da equipe multidisciplinar que realizou os estudos técnicos e o levantamento geológico.</p>
                <p><strong>Fernando Santiago do Prado (Engenheiro Ambiental):</strong> Membro da equipe, responsável pelo mapeamento e geoprocessamento.</p>
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-2">
              <AccordionTrigger className="font-headline text-xl">Parceiros Locais e Comunitários</AccordionTrigger>
              <AccordionContent className="pt-4 text-muted-foreground space-y-3">
                <p><strong>Sr. Luiz "Catuaba":</strong> Morador antigo e guardião da memória local.</p>
                <p><strong>Sr. Vanildo:</strong> Proprietário da fazenda (lado Paraúna), apoiador da preservação.</p>
                <p><strong>Juliano (Restaurante "Recanto da Ponte de Pedra"):</strong> Empreendedor local que apoia o turismo consciente.</p>
                <p><strong>Comunidade Local de Rio Verde e Paraúna:</strong> Pescadores, agricultores, assentados e turistas que frequentam e cuidam da área.</p>
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-3">
              <AccordionTrigger className="font-headline text-xl">Apoio Institucional e Público</AccordionTrigger>
              <AccordionContent className="pt-4 text-muted-foreground space-y-3">
                <p><strong>Prefeitura de Rio Verde:</strong> Apoio fundamental nos estudos técnicos e no decreto de tombamento municipal, incluindo o Prefeito Paulo Faria do Vale, a Secretária Marion Kompier e o Procurador Vinícius Fonseca Campos (gestão 2020).</p>
                <p><strong>Conselho Municipal de Meio Ambiente (COMMAM) de Rio Verde:</strong> Deliberou e aprovou o tombamento municipal.</p>
                <p><strong>Prefeitura de Paraúna:</strong> Apoio na sinalização e organização do acesso às cavernas.</p>
                <p><strong>Museu Histórico de Jataí - Francisco Honório de Campos:</strong> Instituição responsável pela guarda dos bens arqueológicos resgatados.</p>
                <p><strong>Entidades de Estudos e Contexto:</strong> Agradecimentos à Rhama Consultoria, Biota, Preservar Arqueologia e Meio Ambiente, cujos relatórios técnicos foram essenciais para revelar as ameaças e direcionar as ações de resgate.</p>
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </div>
      </div>
    </section>
  )
}
