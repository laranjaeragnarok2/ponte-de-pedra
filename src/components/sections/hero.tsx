import { Button } from "@/components/ui/button";

export function Hero() {
  return (
    <section id="hero" className="relative w-full h-[80vh] min-h-[500px] flex items-center justify-center text-center text-primary-foreground overflow-hidden">
      <div 
        className="absolute inset-0 bg-cover bg-center animate-kenburns"
        style={{backgroundImage: "url('https://i.postimg.cc/xTgXxCwP/3da24e5f6ac4f18877d086882e80c.jpg')"}}
      ></div>
       <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/50 to-transparent"></div>
      <div className="container relative max-w-4xl mx-auto px-4 z-10">
        <h1 className="font-headline text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl lg:text-7xl [text-shadow:_2px_2px_4px_rgb(0_0_0_/_40%)]">
          Ponte de Pedra: Um Legado a Preservar
        </h1>
        <p className="mt-6 max-w-2xl mx-auto text-lg text-primary-foreground/90 [text-shadow:_1px_1px_2px_rgb(0_0_0_/_40%)]">
          Um curta-metragem que lança luz sobre a história e a necessidade urgente de preservação da icônica Ponte de Pedra. Junte-se a nós e seja parte dessa história de salvaguarda.
        </p>
        <div className="mt-8">
          <Button size="lg" asChild>
            <a href="#jornada">Assista ao Curta-Metragem</a>
          </Button>
        </div>
      </div>
    </section>
  );
}
