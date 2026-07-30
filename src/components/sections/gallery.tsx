import Image from "next/image";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { FileText, ExternalLink } from "lucide-react";

const galleryImages = [
  { src: "https://www.pontedepedra.tur.br/galeria/hero-bg.jpeg", alt: "Ponte de Pedra e vegetação nativa do Cerrado" },
  { src: "https://www.pontedepedra.tur.br/gruta.png", alt: "Entrada da Gruta e Arcos de Pedra" },
  { src: "https://www.pontedepedra.tur.br/ponte-de-pedra-parauna-galery-9-807.jpg", alt: "Formação geológica milenar da Ponte de Pedra" },
  { src: "https://www.pontedepedra.tur.br/galeria/lago-natural.webp", alt: "Lago Natural e Rio Corrente" },
  { src: "https://www.pontedepedra.tur.br/camping.png", alt: "Área de Preservação e Camping" },
  { src: "https://www.pontedepedra.tur.br/galeria/hero-bg.jpeg", alt: "Vista panorâmica do monumento natural" },
];

const documents = [
  { title: "Decreto Municipal (2020)", description: "Documento oficial do tombamento provisório", href: "https://drive.google.com/file/d/1AKQQTK6ZY-5TTFmgc2wTt4LhOpb2Kh7r/view?usp=drivesdk" },
  { title: "Abaixo-Assinado (Change.org)", description: "Assine e apoie a preservação", href: "https://www.change.org/p/salve-a-ponte-de-pedra-pch-prev%C3%AA-impacto-negativo-em-patrim%C3%B4nio-ambiental-e-arquiol%C3%B3gico?source_location=psf_petitions" },
]

export function Gallery() {
  return (
    <section id="galeria" className="w-full py-16 md:py-28 lg:py-36 bg-secondary">
      <div className="container px-4 md:px-6 max-w-6xl mx-auto">
        {/* Section Header */}
        <div className="flex flex-col items-center justify-center text-center mb-14">
          <span className="inline-block text-sm font-semibold uppercase tracking-wider text-primary mb-3">
            Registros Visuais
          </span>
          <h2 className="text-3xl font-bold font-headline tracking-tight sm:text-4xl md:text-5xl leading-tight">
            Galeria e Registros
          </h2>
          <div className="section-divider w-16 mt-6 mb-6"></div>
          <p className="max-w-[700px] text-muted-foreground text-base md:text-lg leading-relaxed">
            Imagens que contam a história e a beleza da Ponte de Pedra, capturadas durante nossa jornada.
          </p>
        </div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-5">
          {galleryImages.map((image, index) => (
            <Card key={index} className="overflow-hidden group border-0 shadow-md hover:shadow-xl transition-all duration-300">
              <CardContent className="p-0">
                <div className="relative overflow-hidden">
                  <Image
                    src={image.src}
                    alt={image.alt}
                    width={600}
                    height={400}
                    className="w-full h-full object-cover aspect-[4/3] transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end">
                    <p className="text-white text-sm font-medium p-4">{image.alt}</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Documents Section */}
        <div className="mt-20">
          <div className="flex flex-col items-center justify-center text-center mb-10">
            <span className="inline-block text-sm font-semibold uppercase tracking-wider text-primary mb-3">
              Documentação
            </span>
            <h3 className="text-2xl md:text-3xl font-bold font-headline tracking-tight">Decreto e Abaixo-Assinado</h3>
            <p className="max-w-[600px] text-muted-foreground mt-3 text-sm md:text-base">Acesse os documentos que embasam nossa luta pela preservação.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5 max-w-2xl mx-auto">
            {documents.map((doc) => (
              <Card key={doc.title} className="bg-background hover:-translate-y-1 hover:shadow-lg transition-all duration-300 group">
                <CardContent className="p-6 flex flex-col items-center text-center">
                  <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
                    <FileText className="w-7 h-7 text-primary" />
                  </div>
                  <h4 className="font-headline text-lg font-semibold mb-1">{doc.title}</h4>
                  <p className="text-muted-foreground text-sm mb-4">{doc.description}</p>
                  <Button asChild variant="outline" size="sm" className="rounded-full">
                    <a href={doc.href} target="_blank" rel="noopener noreferrer">
                      Acessar <ExternalLink className="w-3.5 h-3.5 ml-1.5" />
                    </a>
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
