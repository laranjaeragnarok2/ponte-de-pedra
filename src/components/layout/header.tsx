"use client";

import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet';
import { Menu, Film, PenSquare } from 'lucide-react';

const navLinks = [
  { href: '#sobre', label: 'A Causa' },
  { href: '#jornada', label: 'Jornada' },
  { href: '#equipe', label: 'Equipe' },
  { href: '#galeria', label: 'Galeria' },
  { href: '#localizacao', label: 'Local' },
  { href: '#parceiros', label: 'Apoiadores' },
];

export function Header() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 w-full border-b border-border/30 bg-background/90 backdrop-blur-md supports-[backdrop-filter]:bg-background/70">
      <div className="container flex h-16 max-w-screen-2xl items-center">
        <div className="mr-4 flex items-center">
          <a href="#hero" className="mr-8 flex items-center space-x-2.5 group">
            <div className="w-8 h-8 rounded-lg bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
              <Film className="h-4.5 w-4.5 text-primary" />
            </div>
            <span className="font-bold font-headline text-base sm:inline-block">
              Legado da Ponte de Pedra
            </span>
          </a>
        </div>
        <nav className="hidden md:flex md:flex-1">
          <ul className="flex items-center space-x-1 text-sm">
            {navLinks.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  className="font-medium text-foreground/60 transition-colors hover:text-foreground px-3 py-2 rounded-md hover:bg-secondary"
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>
        <div className="flex flex-1 items-center justify-end space-x-2">
          <Button asChild size="sm" className="rounded-full px-5 hidden sm:inline-flex">
            <a href="#abaixo-assinado">
              <PenSquare className="mr-2 h-3.5 w-3.5" />
              Assine o Abaixo-Assinado
            </a>
          </Button>
          <Sheet open={isOpen} onOpenChange={setIsOpen}>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon" className="md:hidden">
                <Menu className="h-5 w-5" />
                <span className="sr-only">Abrir menu</span>
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="w-72">
              <div className="flex flex-col h-full">
                <nav className="flex flex-col gap-1 text-base font-medium mt-8 flex-1">
                  <a href="#hero" className="flex items-center gap-2.5 mb-6 px-3" onClick={() => setIsOpen(false)}>
                    <Film className="h-5 w-5 text-primary" />
                    <span className="font-bold font-headline">Legado</span>
                  </a>
                  {navLinks.map((link) => (
                    <a
                      key={link.href}
                      href={link.href}
                      className="text-muted-foreground hover:text-foreground hover:bg-secondary px-3 py-2.5 rounded-lg transition-colors"
                      onClick={() => setIsOpen(false)}
                    >
                      {link.label}
                    </a>
                  ))}
                </nav>
                <Button asChild onClick={() => setIsOpen(false)} className="mt-auto rounded-full">
                  <a href="#abaixo-assinado">
                    <PenSquare className="mr-2 h-4 w-4" />
                    Assine o Abaixo-Assinado
                  </a>
                </Button>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
}
