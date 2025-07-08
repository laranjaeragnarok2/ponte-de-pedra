import type { Metadata } from 'next';
import { Toaster } from "@/components/ui/toaster";
import './globals.css';
import { DisableRightClick } from '@/components/util/disable-right-click';

export const metadata: Metadata = {
  title: "Legado da Ponte de Pedra | Um Curta Pela Preservação",
  description: "Junte-se à causa pela preservação da Ponte de Pedra (GO). Assista ao curta-metragem e apoie a proteção deste patrimônio geológico, arqueológico e cultural.",
  keywords: ['Ponte de Pedra', 'Goiás', 'preservação', 'patrimônio cultural', 'arqueologia', 'curta-metragem', 'Rio Verde', 'Paraúna', 'meio ambiente', 'tombamento', 'Horyu'],
  authors: [{ name: 'Horyu Multimedia', url: 'https://www.instagram.com/horyu.multimedia' }],
  creator: 'Horyu Multimedia',
  metadataBase: new URL('https://ponte-de-pedra.vercel.app'),
  openGraph: {
    title: "Legado da Ponte de Pedra: Um Legado a Preservar",
    description: "Um curta-metragem sobre a história e a necessidade urgente de preservação da icônica Ponte de Pedra em Goiás. Apoie esta causa.",
    url: 'https://ponte-de-pedra.vercel.app',
    siteName: 'Legado da Ponte de Pedra',
    images: [
      {
        url: 'https://i.postimg.cc/xTgXxCwP/3da24e5f6ac4f18877d086882e80c.jpg',
        width: 1280,
        height: 720,
        alt: 'Vista panorâmica da Ponte de Pedra em Goiás',
      },
    ],
    locale: 'pt_BR',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Legado da Ponte de Pedra: Um Legado a Preservar',
    description: 'Um curta-metragem sobre a história e a necessidade urgente de preservação da icônica Ponte de Pedra em Goiás. Apoie esta causa.',
    images: ['https://i.postimg.cc/xTgXxCwP/3da24e5f6ac4f18877d086882e80c.jpg'],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Lato:wght@400;700&family=Playfair+Display:wght@700&display=swap" rel="stylesheet" />
      </head>
      <body className="font-body antialiased">
        <DisableRightClick />
        {children}
        <Toaster />
      </body>
    </html>
  );
}
