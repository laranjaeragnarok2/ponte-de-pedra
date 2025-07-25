"use client";

import { useAnonymousAuth } from '@/hooks/use-anonymous-auth';
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
  const { user, loading } = useAnonymousAuth();

  return (
    <footer className="border-t bg-secondary/50">
      <div className="container py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div className="space-y-4 lg:col-span-2">
            <a href="#hero" className="flex items-center space-x-2">
              <Film className="h-8 w-8 text-primary" />
              <h3 className="text-xl font-bold font-headline">Legado da Ponte de Pedra</h3>
            </a>
            <p className="text-sm text-muted-foreground">
              Um curta-metragem e uma causa pela preservação de um patrimônio geológico, arqueológico e cultural de Goiás.
            </p>
          </div>
          
          <div className="space-y-4">
            <h4 className="font-semibold font-headline text-lg">Navegue</h4>
            <ul className="space-y-2 text-sm">
              {navLinks.map(link => (
                <li key={link.href}>
                  <a href={link.href} className="text-muted-foreground transition-colors hover:text-foreground">{link.label}</a>
                </li>
              ))}
            </ul>
          </div>
          
          <div className="space-y-4">
            <h4 className="font-semibold font-headline text-lg">Siga a Causa</h4>
            <div className="flex space-x-4">
              <a href="https://www.instagram.com/horyu.multimedia" target="_blank" rel="noopener noreferrer" aria-label="Instagram" className="text-muted-foreground transition-colors hover:text-primary"><Instagram className="h-6 w-6" /></a>
              <a href="#" aria-label="YouTube" className="text-muted-foreground transition-colors hover:text-primary"><Youtube className="h-6 w-6" /></a>
              <a href="#" aria-label="Facebook" className="text-muted-foreground transition-colors hover:text-primary"><Facebook className="h-6 w-6" /></a>
            </div>
          </div>
        </div>

        <div className="mt-12 border-t pt-8">
          <div className="flex flex-col sm:flex-row justify-between items-center gap-4 text-sm text-muted-foreground">
            <p>&copy; 2024 Legado da Ponte de Pedra. Todos os direitos reservados.</p>
            <div className="flex items-center gap-4">
              <span>Feito com amor por Horyu ♥</span>
              <TooltipProvider>
                <div className="flex items-center gap-3">
                    <Tooltip>
                      <TooltipTrigger asChild>
                        <a href="https://www.instagram.com/horyu.multimedia/" target="_blank" rel="noopener noreferrer" aria-label="Instagram de Horyu Multimedia" className="text-muted-foreground transition-colors hover:text-primary">
                          <Instagram className="h-5 w-5" />
                        </a>
                      </TooltipTrigger>
                      <TooltipContent>
                        <p>Instagram</p>
                      </TooltipContent>
                    </Tooltip>
                    <Tooltip>
                      <TooltipTrigger asChild>
                        <a href="https://github.com/laranjaeragnarok2" target="_blank" rel="noopener noreferrer" aria-label="GitHub de Horyu Multimedia" className="text-muted-foreground transition-colors hover:text-primary">
                          <Github className="h-5 w-5" />
                        </a>
                      </TooltipTrigger>
                      <TooltipContent>
                        <p>GitHub</p>
                      </TooltipContent>
                    </Tooltip>
                    <Tooltip>
                      <TooltipTrigger asChild>
                        <a href="http://horyu-arthur.vercel.app/" target="_blank" rel="noopener noreferrer" aria-label="Portfólio de Horyu Multimedia" className="text-muted-foreground transition-colors hover:text-primary">
                          <LinkIcon className="h-5 w-5" />
                        </a>
                      </TooltipTrigger>
                      <TooltipContent>
                        <p>Portfólio</p>
                      </TooltipContent>
                    </Tooltip>
                </div>
              </TooltipProvider>

              <div className="text-xs">
                {loading 
                  ? '...'
                  : user 
                    ? `| ID: ${user.uid.substring(0, 8)}` 
                    : ''}
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
