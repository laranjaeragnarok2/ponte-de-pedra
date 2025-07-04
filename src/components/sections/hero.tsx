import { Button } from "@/components/ui/button";

export function Hero() {
  return (
    <section id="hero" className="relative w-full h-[80vh] min-h-[500px] flex items-center justify-center text-center">
      <div 
        className="absolute inset-0 bg-cover bg-center opacity-20 dark:opacity-10"
        style={{backgroundImage: "url('https://placehold.co/1920x1080.png')"}}
        data-ai-hint="stone bridge nature"
      ></div>
       <div className="absolute inset-0 bg-gradient-to-t from-background via-background/80 to-transparent"></div>
      <div className="container relative max-w-4xl mx-auto px-4">
        <h1 className="font-headline text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl lg:text-7xl">
          Ponte de Pedra: Um Legado a Preservar
        </h1>
        <p className="mt-6 max-w-2xl mx-auto text-lg text-muted-foreground">
          Um curta-metragem que lança luz sobre a história e a necessidade urgente de preservação da icônica Ponte de Pedra. Junte-se a nós nesta causa.
        </p>
        <div className="mt-8 flex flex-col sm:flex-row justify-center gap-4">
          <Button size="lg" asChild>
            <a href="#jornada">Nossa Jornada</a>
          </Button>
          <Button size="lg" variant="outline" asChild>
            <a href="#galeria">Ver Galeria</a>
          </Button>
        </div>
      </div>
    </section>
  );
}
