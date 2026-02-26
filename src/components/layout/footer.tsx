"use client";

import { Film, Instagram, Youtube, Facebook, Github, Link as LinkIcon } from 'lucide-react';
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from '@/components/ui/tooltip';

const navLinks = [
  { href: '#sobre', label: 'A Causa' },
  { href: '#jornada', label: 'Jornada' },
  { href: '#equipe', label: 'Equipe' },
  { href: '#galeria', label: 'Galeria' },
  { href: '#participe', label: 'Participe' },
];

export function Footer() {
  return (
    <footer className="border-t bg-secondary/50">
      <div className="container py-12 max-w-6xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div className="space-y-4 lg:col-span-2">
            <a href="#hero" className="flex items-center space-x-2.5 group">
              <div className="w-9 h-9 rounded-lg bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                <Film className="h-5 w-5 text-primary" />
              </div>
              <h3 className="text-xl font-bold font-headline">Legado da Ponte de Pedra</h3>
            </a>
            <p className="text-sm text-muted-foreground leading-relaxed max-w-md">
              Um curta-metragem e uma causa pela preservação de um patrimônio geológico, arqueológico e cultural de Goiás.
            </p>
          </div>

          <div className="space-y-4">
            <h4 className="font-semibold font-headline text-lg">Navegue</h4>
            <ul className="space-y-2.5 text-sm">
              {navLinks.map(link => (
                <li key={link.href}>
                  <a href={link.href} className="text-muted-foreground transition-colors hover:text-foreground">{link.label}</a>
                </li>
              ))}
            </ul>
          </div>

          <div className="space-y-4">
            <h4 className="font-semibold font-headline text-lg">Siga a Causa</h4>
            <div className="flex space-x-3">
              <a href="https://www.instagram.com/horyu.multimedia" target="_blank" rel="noopener noreferrer" aria-label="Instagram" className="w-10 h-10 rounded-lg bg-background flex items-center justify-center text-muted-foreground transition-colors hover:text-primary hover:bg-primary/10"><Instagram className="h-5 w-5" /></a>
              <a href="#" aria-label="YouTube" className="w-10 h-10 rounded-lg bg-background flex items-center justify-center text-muted-foreground transition-colors hover:text-primary hover:bg-primary/10"><Youtube className="h-5 w-5" /></a>
              <a href="#" aria-label="Facebook" className="w-10 h-10 rounded-lg bg-background flex items-center justify-center text-muted-foreground transition-colors hover:text-primary hover:bg-primary/10"><Facebook className="h-5 w-5" /></a>
            </div>
          </div>
        </div>

        <div className="mt-12 border-t pt-8">
          <div className="flex flex-col sm:flex-row justify-between items-center gap-4 text-sm text-muted-foreground">
            <p>&copy; 2024 Legado da Ponte de Pedra. Todos os direitos reservados.</p>
            <div className="flex items-center gap-4">
              <span>Feito com amor por Horyu ♥</span>
              <TooltipProvider>
                <div className="flex items-center gap-2">
                  <Tooltip>
                    <TooltipTrigger asChild>
                      <a href="https://www.instagram.com/horyu.multimedia/" target="_blank" rel="noopener noreferrer" aria-label="Instagram de Horyu Multimedia" className="text-muted-foreground transition-colors hover:text-primary">
                        <Instagram className="h-4.5 w-4.5" />
                      </a>
                    </TooltipTrigger>
                    <TooltipContent>
                      <p>Instagram</p>
                    </TooltipContent>
                  </Tooltip>
                  <Tooltip>
                    <TooltipTrigger asChild>
                      <a href="https://github.com/laranjaeragnarok2" target="_blank" rel="noopener noreferrer" aria-label="GitHub de Horyu Multimedia" className="text-muted-foreground transition-colors hover:text-primary">
                        <Github className="h-4.5 w-4.5" />
                      </a>
                    </TooltipTrigger>
                    <TooltipContent>
                      <p>GitHub</p>
                    </TooltipContent>
                  </Tooltip>
                  <Tooltip>
                    <TooltipTrigger asChild>
                      <a href="http://horyu-arthur.vercel.app/" target="_blank" rel="noopener noreferrer" aria-label="Portfólio de Horyu Multimedia" className="text-muted-foreground transition-colors hover:text-primary">
                        <LinkIcon className="h-4.5 w-4.5" />
                      </a>
                    </TooltipTrigger>
                    <TooltipContent>
                      <p>Portfólio</p>
                    </TooltipContent>
                  </Tooltip>
                </div>
              </TooltipProvider>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
