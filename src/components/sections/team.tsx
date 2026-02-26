import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"

interface TeamMember {
  name: string;
  role: string;
  bio?: string;
}

const teamSections = [
  {
    id: "item-1",
    title: "Liderança e Execução da Ação",
    members: [
      {
        name: "Jordana Vieira Goulart",
        role: "Arqueóloga",
        description: "Principal responsável técnica pelos estudos arqueológicos, pleito de tombamento (2020-até o momento).",
        bio: "Arqueóloga pela PUC-GO (2011); Graduação em Administração com Habilitação em Marketing pelo Instituto de Ensino Superior de Rio Verde (2005); Pós Graduação em Curadoria, Museologia e Gestão de Exposições (2023) pela Estácio de Ribeirão Preto. Atua na área de Licenciamento ambiental desde 2011.",
      },
      {
        name: "Klener Alves Rocha Júnior",
        role: "Ambientalista",
        description: "Conselheiro em órgãos como CONDEC, CBH Rio dos Bois e CONSEG's, foi quem iniciou a mobilização, articulando com a prefeitura e trazendo a Jordana para o projeto.",
        bio: "Militar Fuzileiro Naval da Marinha do Brasil, Tecnólogo em Gestão Pública pela UNOPAR e Pós Graduado em Segurança Pública e Investigação Criminal pela UNIRV.",
      },
      {
        name: "Guilherme Marques Martins",
        role: "Geólogo",
        description: "Membro da equipe multidisciplinar que realizou os estudos técnicos e o levantamento geológico.",
      },
      {
        name: "Fernando Santiago do Prado",
        role: "Engenheiro Ambiental",
        description: "Membro da equipe multidisciplinar, responsável pelo mapeamento e geoprocessamento.",
      },
    ],
  },
  {
    id: "item-4",
    title: "Direção de Arte e Desenvolvimento Web",
    members: [
      {
        name: 'Arthur "Horyu" André',
        role: "Desenvolvedor e Diretor de Arte",
        description: "Principal responsável pela concepção digital e audiovisual do projeto.",
        bio: 'Desenvolvedor com expertise em tecnologias como Next.js e TypeScript, foi o responsável técnico pela criação da landing page "Legado da Ponte de Pedra". Como Diretor de Arte e Produtor Audiovisual, liderou a direção de fotografia e a edição do curta-metragem. Possui certificação em Análise de Marketing pelo Google e formação em Direção Cinematográfica, unindo a execução técnica com a visão estratégica e criativa para dar vida à causa da preservação.',
      },
    ],
  },
  {
    id: "item-2",
    title: "Parceiros Locais e Comunitários",
    members: [
      { name: 'Sr. Luiz "Catuaba"', role: "Guardião da Memória", description: "Morador antigo da região, trabalhou até aposentar nas fazendas do Paulo Reis e guardião da memória local." },
      { name: "Sr. Vanildo João Pedrini", role: "Proprietário de Fazenda", description: "Proprietário da fazenda (lado Paraúna), apoiador da preservação da área." },
      { name: "Juliano", role: 'Ex-Proprietário do Restaurante "Recanto da Ponte de Pedra"', description: "Empreendedor local que apoia o turismo consciente." },
      { name: "Audirley Silva Cabral", role: 'Atual Responsável pelo Restaurante "Recanto da Ponte de Pedra"', description: "Empreendedor local que apoia o turismo consciente." },
      { name: "Povoado Ponte de Pedra", role: "Comunidade", description: "Pequenos agricultores que vivem em assentamentos da reforma agrária nas margens do rio Ponte de Pedra e Córrego Corrente." },
      { name: "Comunidade Local de Rio Verde e Paraúna", role: "Comunidade", description: "Pescadores, agricultores, assentados e turistas que frequentam e cuidam da área." },
    ],
  },
  {
    id: "item-3",
    title: "Apoio Institucional e Público",
    members: [
      { name: "Prefeitura de Rio Verde", role: "Governo Municipal", description: "Apoio fundamental nos estudos técnicos e no Decreto de tombamento municipal, incluindo o Prefeito Paulo Faria do Vale, a Secretária Marion Kompier e o Procurador Vinícius Fonseca Campos (gestão 2020)." },
      { name: "Conselho Municipal de Meio Ambiente (COMMAM) de Rio Verde", role: "Conselho", description: "Deliberou e aprovou o tombamento municipal." },
      { name: "Prefeitura de Paraúna", role: "Governo Municipal", description: "Apoio na sinalização, revitalização das estruturas e dos quiosques e implantação das passarelas que dão acesso às cavernas." },
      { name: "Museu Histórico de Jataí - Francisco Honório de Campos", role: "Instituição Cultural", description: "Instituição responsável pela guarda dos bens arqueológicos resgatados." },
      { name: "Entidades de Estudos e Contexto", role: "Instituições Acadêmicas", description: "Agradecimentos à Universidade Federal de Goiás, Rhama Consultoria, Preservar Arqueologia e Meio Ambiente, cujos relatórios técnicos foram essenciais para revelar as ameaças e direcionar as ações." },
    ],
  },
];

export function Team() {
  return (
    <section id="equipe" className="w-full py-16 md:py-28 lg:py-36 bg-background">
      <div className="container px-4 md:px-6 max-w-6xl mx-auto">
        <div className="flex flex-col items-center justify-center text-center mb-16">
          <span className="inline-block text-sm font-semibold uppercase tracking-wider text-primary mb-3">
            Quem Somos
          </span>
          <h2 className="text-3xl font-bold font-headline tracking-tight sm:text-4xl md:text-5xl leading-tight">
            Conheça os Envolvidos no Projeto
          </h2>
          <div className="section-divider w-16 mt-6 mb-6"></div>
          <p className="max-w-[750px] text-muted-foreground text-base md:text-lg leading-relaxed">
            Indivíduos e instituições que contribuíram para a preservação e valorização da Ponte de Pedra.
          </p>
        </div>
        <div className="max-w-4xl mx-auto">
          <Accordion type="single" collapsible className="w-full space-y-3">
            {teamSections.map((section) => (
              <AccordionItem key={section.id} value={section.id} className="border rounded-xl px-4 bg-card shadow-sm data-[state=open]:shadow-md transition-shadow">
                <AccordionTrigger className="font-headline text-lg md:text-xl py-5 hover:no-underline">
                  {section.title}
                </AccordionTrigger>
                <AccordionContent className="pb-6">
                  <div className="space-y-5 pt-2">
                    {section.members.map((member, idx) => (
                      <div key={idx} className="border-l-2 border-primary/20 pl-5">
                        <p className="font-semibold text-foreground">
                          {member.name}
                          <span className="font-normal text-sm text-primary ml-2">— {member.role}</span>
                        </p>
                        <p className="mt-1 text-muted-foreground text-sm leading-relaxed">
                          {member.description}
                        </p>
                        {member.bio && (
                          <p className="mt-2 text-muted-foreground/80 text-xs leading-relaxed italic">
                            {member.bio}
                          </p>
                        )}
                      </div>
                    ))}
                  </div>
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  )
}
