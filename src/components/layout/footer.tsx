"use client";

import { useAnonymousAuth } from '@/hooks/use-anonymous-auth';
import { Film } from 'lucide-react';

export function Footer() {
  const { user, loading } = useAnonymousAuth();

  return (
    <footer className="border-t bg-background">
      <div className="container flex flex-col items-center justify-between gap-4 py-10 md:h-24 md:flex-row md:py-0">
        <div className="flex flex-col items-center gap-4 px-8 md:flex-row md:gap-2 md:px-0">
          <Film className="h-6 w-6 text-primary hidden md:block" />
          <p className="text-center text-sm leading-loose text-muted-foreground md:text-left">
            Construído com{' '}
            <a
              href="https://firebase.google.com/docs/studio"
              target="_blank"
              rel="noreferrer"
              className="font-medium underline underline-offset-4"
            >
              Firebase Studio
            </a>
            .
          </p>
        </div>
        <div className="text-xs text-muted-foreground">
          {loading ? 'Autenticando...' : `ID de Sessão: ${user?.uid ? user.uid.substring(0, 8) : 'N/A'}`}
        </div>
      </div>
    </footer>
  );
}
