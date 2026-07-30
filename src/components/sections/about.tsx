import Image from "next/image";

const facets = [
  {
    image: "https://www.parauna.go.gov.br/res/midias/img/3da24e5b95f6ac4f18877d086882e80c.jpg",
    alt: "Formações rochosas da Ponte de Pedra",
    title: "Formações Únicas e Espeleotemas Vivos",
    description:
      "A área abriga as impressionantes Ponte de Pedra I, um arco natural esculpido pelo tempo sobre o Rio Corrente, e a Ponte de Pedra II, uma caverna com espeleotemas ativos, como estalactites e estalagmites. Sua raridade no sudoeste goiano, com processos cársticos em andamento, confere-lhe um valor geológico inestimável e beleza cênica singular.",
    reverse: false,
  },
  {
    image: "/images/archaeological-artifacts.png",
    alt: "Artefato arqueológico encontrado no local",
    title: "Vestígios de Culturas Milenares",
    description:
      "Além de sua grandiosidade natural, a Ponte de Pedra é um sítio arqueológico (GO00381), cadastrado no Iphan desde 1975. Pesquisas revelaram a presença de lascas e artefatos líticos, evidenciando o uso e a ocupação por povos pré-coloniais. O local é um elo direto com a memória e a identidade dos diferentes povos que formaram a sociedade brasileira.",
    reverse: true,
  },
  {
    image: "/images/vandalism-damage.png",
    alt: "Pichações e lixo na área da Ponte de Pedra",
    title: "Um Legado em Risco Constante",
    description:
      "Infelizmente, essa joia multifacetada está sob constante ameaça. O vandalismo, com pichações e descarte inadequado de lixo, degrada o ambiente. A maior ameaça, no entanto, é a proposta de instalação da PCH Ponte de Pedra 2, que, conforme relatório de março de 2022, impactaria severamente a biodiversidade e o regime hídrico, além de submergir múltiplos sítios arqueológicos recém-identificados, representando uma perda irreparável para a história e a cultura.",
    reverse: false,
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
        <div className="space-y-20 md:space-y-28">
          {facets.map((facet, index) => (
            <div
              key={index}
              className={`grid gap-8 md:gap-12 lg:grid-cols-2 items-center ${
                facet.reverse ? "lg:grid-flow-dense" : ""
              }`}
            >
              <div
                className={`overflow-hidden rounded-2xl shadow-lg group transition-all duration-300 ease-in-out hover:shadow-2xl ${
                  facet.reverse ? "lg:col-start-2" : ""
                }`}
              >
                <Image
                  src={facet.image}
                  alt={facet.alt}
                  width={640}
                  height={420}
                  className="w-full aspect-[3/2] object-cover transition-transform duration-700 ease-in-out group-hover:scale-105"
                />
              </div>
              <div className={facet.reverse ? "lg:col-start-1" : ""}>
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
          ))}
        </div>
      </div>
    </section>
  );
}
