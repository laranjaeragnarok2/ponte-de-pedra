import Image from "next/image";

export function InMemoriam() {
  return (
    <section id="in-memoriam" className="w-full py-12 md:py-24 lg:py-32 bg-secondary">
      <div className="container px-4 md:px-6">
        <div className="grid gap-12 lg:gap-16 items-center max-w-5xl mx-auto">
            <div className="grid gap-8 lg:grid-cols-2 items-center">
                <div className="overflow-hidden rounded-xl shadow-lg">
                    <Image
                        src="https://i.ibb.co/xSsdZDWN/envato-labs-image-edit-7.png"
                        alt="Foto do Sr. Luiz 'Catuaba'"
                        width={600}
                        height={450}
                        className="mx-auto aspect-video object-cover grayscale"
                        data-ai-hint="portrait man"
                    />
                </div>
                <div className="space-y-4 text-center lg:text-left">
                    <h2 className="text-3xl font-bold font-headline tracking-tighter sm:text-4xl">Em Memória: Sr. Luiz 'Catuaba'</h2>
                    <p className="text-muted-foreground md:text-lg">
                        Dedicamos esta homenagem ao Sr. Luiz 'Catuaba', um verdadeiro guardião da memória local. Sua sabedoria e suas histórias foram fundamentais para a nossa jornada e para a valorização deste patrimônio. Seu legado vive em nossa luta.
                    </p>
                </div>
            </div>
        </div>
      </div>
    </section>
  );
}
