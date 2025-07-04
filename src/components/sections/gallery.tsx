import Image from "next/image";
import { Card, CardContent } from "@/components/ui/card";

const galleryImages = [
  { src: "https://i.postimg.cc/Y0HvVm2d/015920127f3e3555ed2c0d71f620363e.jpg", alt: "Vista da Ponte de Pedra" },
  { src: "https://i.postimg.cc/WbsDwrH3/49f29e143ce544d4e038a90a8fc4b336.jpg", alt: "Detalhe dos arcos da ponte" },
  { src: "https://i.postimg.cc/dQ2kCnnp/72f24337a6e4b553a8f96907b49ea072.jpg", alt: "Rio correndo sob a ponte" },
  { src: "https://i.postimg.cc/wBnyXGC8/9d010bd80656c2cae903908f7c22693c.jpg", alt: "Ponte de Pedra e vegetação" },
  { src: "https://i.postimg.cc/SNGMBVMC/eccb837a0c89f08bf9e9bc061ae3a9bf.jpg", alt: "Ponte de Pedra em preto e branco" },
  { src: "https://i.postimg.cc/xTgXxCwP/3da24e5b95f6ac4f18877d086882e80c.jpg", alt: "Vista aérea da ponte" },
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
                />
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
