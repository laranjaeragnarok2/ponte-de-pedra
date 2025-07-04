import Image from "next/image";

export function About() {
  return (
    <section id="sobre" className="w-full py-12 md:py-24 lg:py-32 bg-background">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center mb-12">
            <h2 className="text-3xl font-bold font-headline tracking-tighter sm:text-4xl md:text-5xl">
              A Ponte de Pedra: Uma Joia Multifacetada de Goiás
            </h2>
            <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
             A Ponte de Pedra transcende a beleza paisagística; é um complexo patrimonial vivo, situado na divisa de Rio Verde e Paraúna (GO). Sua relevância se manifesta em múltiplas dimensões, desde formações geológicas raras até vestígios milenares de ocupações humanas.
            </p>
        </div>
        
        <div className="grid gap-12 lg:gap-16 items-center">
            <div className="grid gap-6 lg:grid-cols-2 items-center">
                <Image
                    src="https://www.parauna.go.gov.br/res/midias/img/3da24e5b95f6ac4f18877d086882e80c.jpg"
                    alt="Formações rochosas da Ponte de Pedra"
                    width={600}
                    height={450}
                    className="mx-auto aspect-video overflow-hidden rounded-xl object-cover"
                />
                <div>
                    <h3 className="text-2xl font-bold font-headline">Formações Únicas e Espeleotemas Vivos</h3>
                    <p className="mt-2 text-muted-foreground">
                    A área abriga as impressionantes Ponte de Pedra I, um arco natural esculpido pelo tempo sobre o Rio Corrente, e a Ponte de Pedra II, uma caverna com espeleotemas ativos, como estalactites e estalagmites. Sua raridade no sudoeste goiano, com processos cársticos em andamento, confere-lhe um valor geológico inestimável e beleza cênica singular.
                    </p>
                </div>
            </div>

            <div className="grid gap-6 lg:grid-cols-2 items-center">
                 <div className="lg:order-2">
                    <Image
                        src="https://gcdnb.pbrd.co/images/0vMC7AeaYqla.png?o=1"
                        data-ai-hint="archeological artifact"
                        alt="Artefato arqueológico encontrado no local"
                        width={600}
                        height={450}
                        className="mx-auto aspect-video overflow-hidden rounded-xl object-cover"
                    />
                 </div>
                <div className="lg:order-1">
                    <h3 className="text-2xl font-bold font-headline">Vestígios de Culturas Milenares</h3>
                    <p className="mt-2 text-muted-foreground">
                    Além de sua grandiosidade natural, a Ponte de Pedra é um sítio arqueológico (GO00381), cadastrado no Iphan desde 1975. Pesquisas revelaram a presença de lascas e artefatos líticos, evidenciando o uso e a ocupação por povos pré-coloniais. O local é um elo direto com a memória e a identidade dos diferentes povos que formaram a sociedade brasileira.
                    </p>
                </div>
            </div>

            <div className="grid gap-6 lg:grid-cols-2 items-center">
                <Image
                    src="https://gcdnb.pbrd.co/images/gDd85RjL9ePf.png?o=1"
                    data-ai-hint="vandalism nature"
                    alt="Pichações e lixo na área da Ponte de Pedra"
                    width={600}
                    height={450}
                    className="mx-auto aspect-video overflow-hidden rounded-xl object-cover"
                />
                <div>
                    <h3 className="text-2xl font-bold font-headline">Um Legado em Risco Constante</h3>
                    <p className="mt-2 text-muted-foreground">
                    Infelizmente, essa joia multifacetada está sob constante ameaça. O vandalismo, com pichações e descarte inadequado de lixo, degrada o ambiente. A maior ameaça, no entanto, é a proposta de instalação da PCH Ponte de Pedra 2, que, conforme relatório de março de 2022, impactaria severamente a biodiversidade e o regime hídrico, além de submergir múltiplos sítios arqueológicos recém-identificados, representando uma perda irreparável para a história e a cultura.
                    </p>
                </div>
            </div>
        </div>
      </div>
    </section>
  );
}
