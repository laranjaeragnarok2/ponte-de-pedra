import Image from "next/image";

export function InMemoriam() {
  return (
    <section id="in-memoriam" className="w-full py-16 md:py-28 lg:py-36 bg-secondary">
      <div className="container px-4 md:px-6 max-w-5xl mx-auto">
        <div className="grid gap-10 lg:gap-16 lg:grid-cols-2 items-center">
          <div className="overflow-hidden rounded-2xl shadow-xl">
            <Image
              src="https://i.ibb.co/xSsdZDWN/envato-labs-image-edit-7.png"
              alt="Foto do Sr. Luiz 'Catuaba'"
              width={600}
              height={450}
              className="w-full aspect-[4/3] object-cover grayscale hover:grayscale-0 transition-all duration-700"
            />
          </div>
          <div className="space-y-6 text-center lg:text-left">
            <span className="inline-block text-sm font-semibold uppercase tracking-wider text-primary/70">
              Homenagem
            </span>
            <h2 className="text-3xl font-bold font-headline tracking-tight sm:text-4xl leading-tight">
              Em Memória: Sr. Luiz &apos;Catuaba&apos;
            </h2>
            <div className="section-divider w-12 mx-auto lg:mx-0"></div>
            <p className="text-muted-foreground text-base md:text-lg leading-relaxed">
              Dedicamos esta homenagem ao Sr. Luiz &apos;Catuaba&apos;, um verdadeiro guardião da memória local. Sua sabedoria e suas histórias foram fundamentais para a nossa jornada e para a valorização deste patrimônio. Seu legado vive em nossa luta.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
