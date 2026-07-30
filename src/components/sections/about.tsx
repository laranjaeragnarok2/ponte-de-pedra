import { Mountain, Archeology, ShieldAlert, Sparkles } from "lucide-react";

const facets = [
  {
    icon: Mountain,
    badge: "Geologia & Cárstico",
    title: "Formações Únicas e Espeleotemas Vivos",
    description:
      "A área abriga as impressionantes Ponte de Pedra I, um arco natural esculpido pelo tempo sobre o Rio Corrente, e a Ponte de Pedra II, uma caverna com espeleotemas ativos, como estalactites e estalagmites. Sua raridade no sudoeste goiano, com processos cársticos em andamento, confere-lhe um valor geológico inestimável e beleza cênica singular.",
    reverse: false,
    color: "from-emerald-950/20 via-slate-900/30 to-emerald-900/10 border-emerald-500/30 text-emerald-400",
  },
  {
    icon: Archeology,
    badge: "Arqueologia (Sítio IPHAN GO00381)",
    title: "Vestígios de Culturas Milenares",
    description:
      "Além de sua grandiosidade natural, a Ponte de Pedra é um sítio arqueológico (GO00381), cadastrado no Iphan desde 1975. Pesquisas revelaram a presença de lascas e artefatos líticos, evidenciando o uso e a ocupação por povos pré-coloniais. O local é um elo direto com a memória e a identidade dos diferentes povos que formaram a sociedade brasileira.",
    reverse: true,
    color: "from-amber-950/20 via-slate-900/30 to-amber-900/10 border-amber-500/30 text-amber-400",
  },
  {
    icon: ShieldAlert,
    badge: "Alerta de Preservação",
    title: "Um Legado em Risco Constante",
    description:
      "Infelizmente, essa joia multifacetada está sob constante ameaça. O vandalismo, com pichações e descarte inadequado de lixo, degrada o ambiente. A maior ameaça, no entanto, é a proposta de instalação da PCH Ponte de Pedra 2, que, conforme relatório de março de 2022, impactaria severamente a biodiversidade e o regime hídrico, além de submergir múltiplos sítios arqueológicos recém-identificados.",
    reverse: false,
    color: "from-rose-950/20 via-slate-900/30 to-rose-900/10 border-rose-500/30 text-rose-400",
  },
];

export function About() {
  return (
    <section id="sobre" className="w-full py-16 md:py-28 lg:py-36 bg-background">
      <div className="container px-4 md:px-6 max-w-6xl mx-auto">
        {/* Section Header */}
        <div className="flex flex-col items-center justify-center text-center mb-16 md:mb-20">
          <span className="inline-block text-sm font-semibold uppercase tracking-wider text-primary mb-3">
            Sobre o Patrimônio
          </span>
          <h2 className="text-3xl font-bold font-headline tracking-tight sm:text-4xl md:text-5xl max-w-3xl leading-tight">
            A Ponte de Pedra: Uma Joia Multifacetada de Goiás
          </h2>
          <div className="section-divider w-16 mt-6 mb-6"></div>
          <p className="max-w-[750px] text-muted-foreground text-base md:text-lg leading-relaxed">
            A Ponte de Pedra transcende a beleza paisagística; é um complexo patrimonial vivo,
            situado na divisa de Rio Verde e Paraúna (GO). Sua relevância se manifesta em múltiplas
            dimensões, desde formações geológicas raras até vestígios milenares de ocupações humanas.
          </p>
        </div>

        {/* Content Grid */}
        <div className="space-y-16 md:space-y-24">
          {facets.map((facet, index) => {
            const IconComponent = facet.icon;
            return (
              <div
                key={index}
                className={`grid gap-8 md:gap-12 lg:grid-cols-12 items-center ${
                  facet.reverse ? "lg:grid-flow-dense" : ""
                }`}
              >
                <div
                  className={`lg:col-span-5 ${
                    facet.reverse ? "lg:col-start-8" : ""
                  }`}
                >
                  <div className={`p-8 md:p-10 rounded-3xl bg-gradient-to-br ${facet.color} border shadow-lg flex flex-col items-center justify-center text-center space-y-4`}>
                    <div className="w-16 h-16 rounded-2xl bg-background/80 backdrop-blur-md flex items-center justify-center shadow-md">
                      <IconComponent className="w-8 h-8" />
                    </div>
                    <span className="text-xs font-semibold uppercase tracking-widest opacity-90">
                      {facet.badge}
                    </span>
                    <div className="text-xs font-mono text-muted-foreground">
                      Patrimônio Geológico e Cultural
                    </div>
                  </div>
                </div>

                <div className={`lg:col-span-7 ${facet.reverse ? "lg:col-start-1" : ""}`}>
                  <span className="inline-block text-xs font-semibold uppercase tracking-wider text-primary/70 mb-2">
                    {String(index + 1).padStart(2, "0")} / {String(facets.length).padStart(2, "0")}
                  </span>
                  <h3 className="text-2xl md:text-3xl font-bold font-headline leading-tight">
                    {facet.title}
                  </h3>
                  <p className="mt-4 text-muted-foreground text-base leading-relaxed prose-readable">
                    {facet.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
