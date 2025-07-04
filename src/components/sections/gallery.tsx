import Image from "next/image";
import { Card, CardContent } from "@/components/ui/card";

const galleryImages = [
  { src: "https://placehold.co/600x400.png", alt: "Vista da Ponte de Pedra ao amanhecer", hint: "bridge sunrise" },
  { src: "https://placehold.co/600x400.png", alt: "Detalhe dos arcos da ponte", hint: "bridge architecture" },
  { src: "https://placehold.co/600x400.png", alt: "Rio correndo sob a ponte", hint: "river bridge" },
  { src: "https://placehold.co/600x400.png", alt: "Equipe de filmagem em ação", hint: "film crew" },
  { src: "https://placehold.co/600x400.png", alt: "Ponte de Pedra em preto e branco", hint: "bridge monochrome" },
  { src: "https://placehold.co/600x400.png", alt: "Vista aérea da ponte", hint: "drone bridge" },
];

export function Gallery() {
  return (
    <section id="galeria" className="w-full py-12 md:py-24 lg:py-32 bg-secondary">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          <h2 className="text-3xl font-bold font-headline tracking-tighter sm:text-4xl md:text-5xl">
            Galeria e Registros
          </h2>
          <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
            Imagens que contam a história e a beleza da Ponte de Pedra, capturadas durante nossa jornada.
          </p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6 mt-12">
          {galleryImages.map((image, index) => (
            <Card key={index} className="overflow-hidden group">
              <CardContent className="p-0">
                <Image
                  src={image.src}
                  alt={image.alt}
                  width={600}
                  height={400}
                  className="w-full h-full object-cover aspect-video transition-transform duration-300 group-hover:scale-105"
                  data-ai-hint={image.hint}
                />
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
