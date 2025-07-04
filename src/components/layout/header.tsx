"use client";

import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet';
import { Menu, Film } from 'lucide-react';

const navLinks = [
  { href: '#sobre', label: 'Sobre a Causa' },
  { href: '#jornada', label: 'Nossa Jornada' },
  { href: '#equipe', label: 'A Equipe' },
  { href: '#galeria', label: 'Galeria' },
  { href: '#localizacao', label: 'Localização' },
];

export function Header() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 w-full border-b border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-14 max-w-screen-2xl items-center">
        <div className="mr-4 flex items-center">
          <a href="#hero" className="mr-6 flex items-center space-x-2">
            <Film className="h-6 w-6 text-primary" />
            <span className="font-bold font-headline sm:inline-block">
              Legado da Ponte de Pedra
            </span>
          </a>
        </div>
        <nav className="hidden md:flex md:flex-1">
          <ul className="flex items-center space-x-6 text-sm">
            {navLinks.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  className="font-medium text-foreground/60 transition-colors hover:text-foreground/80"
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>
        <div className="flex flex-1 items-center justify-end space-x-2">
          <Button asChild>
            <a href="#participe">Participe</a>
          </Button>
          <Sheet open={isOpen} onOpenChange={setIsOpen}>
            <SheetTrigger asChild>
              <Button variant="outline" size="icon" className="md:hidden">
                <Menu className="h-5 w-5" />
                <span className="sr-only">Abrir menu</span>
              </Button>
            </SheetTrigger>
            <SheetContent side="right">
              <div className="flex flex-col h-full">
                <nav className="flex flex-col gap-6 text-lg font-medium mt-8 flex-1">
                  <a href="#hero" className="flex items-center gap-2 mb-4" onClick={() => setIsOpen(false)}>
                    <Film className="h-6 w-6 text-primary" />
                    <span className="font-bold font-headline">Legado</span>
                  </a>
                  {navLinks.map((link) => (
                    <a
                      key={link.href}
                      href={link.href}
                      className="text-muted-foreground hover:text-foreground"
                      onClick={() => setIsOpen(false)}
                    >
                      {link.label}
                    </a>
                  ))}
                </nav>
                 <Button asChild onClick={() => setIsOpen(false)} className="mt-auto">
                    <a href="#participe">Participe</a>
                  </Button>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
}
