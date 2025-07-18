import Image from "next/image";
import { Github, Instagram, Globe } from "lucide-react";
import { Button } from "@/components/ui/button";

export function DeveloperBio() {
  return (
    <section id="developer-bio" className="w-full py-12 md:py-24 lg:py-32 bg-secondary/50">
      <div className="container px-4 md:px-6">
        <div className="grid gap-10 sm:px-10 md:gap-16 md:grid-cols-2 items-center">
          <div className="flex justify-center">
            <Image
              src="https://gcdnb.pbrd.co/images/T1aC2b2D3C4E.png?o=1"
              alt="Foto de Horyu"
              width={300}
              height={300}
              className="rounded-full aspect-square object-cover shadow-lg border-4 border-background"
              data-ai-hint="portrait man"
            />
          </div>
          <div className="space-y-4 text-center md:text-left">
            <div className="space-y-2">
              <h2 className="text-3xl font-bold font-headline tracking-tighter sm:text-4xl">
                Sobre o Criador
              </h2>
              <p className="text-muted-foreground md:text-lg">
                Desenvolvedor, diretor e a mente criativa por trás do projeto "Legado da Ponte de Pedra".
              </p>
            </div>
            <div className="flex justify-center md:justify-start space-x-4">
              <Button variant="ghost" size="icon" asChild>
                <a href="#" target="_blank" rel="noopener noreferrer" aria-label="Portfólio">
                  <Globe className="h-6 w-6" />
                </a>
              </Button>
              <Button variant="ghost" size="icon" asChild>
                <a href="#" target="_blank" rel="noopener noreferrer" aria-label="GitHub">
                  <Github className="h-6 w-6" />
                </a>
              </Button>
              <Button variant="ghost" size="icon" asChild>
                <a href="https://www.instagram.com/horyu.multimedia" target="_blank" rel="noopener noreferrer" aria-label="Instagram">
                  <Instagram className="h-6 w-6" />
                </a>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
