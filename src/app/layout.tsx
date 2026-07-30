import type { Metadata } from 'next';
import { Toaster } from "@/components/ui/toaster";
import './globals.css';
import { DisableRightClick } from '@/components/util/disable-right-click';

const jsonLdWebsite = {
  '@context': 'https://schema.org',
  '@type': 'WebSite',
  name: 'Ponte de Pedra',
  alternateName: ['Ponte de Pedra - Um Legado a Preservar', 'Documentário Ponte de Pedra'],
  url: 'https://ponte-de-pedra.vercel.app',
};

const jsonLdMovie = {
  '@context': 'https://schema.org',
  '@type': 'Movie',
  name: 'Ponte de Pedra: Um Legado a Preservar',
  description: 'Documentário e iniciativa para a preservação do patrimônio geológico, arqueológico e ambiental da Ponte de Pedra (GO).',
  url: 'https://ponte-de-pedra.vercel.app',
  image: 'https://ponte-de-pedra.vercel.app/og-image.png',
  inLanguage: 'pt-BR',
  genre: ['Documentário', 'Preservação Ambiental', 'Patrimônio Histórico'],
  author: {
    '@type': 'Organization',
    name: 'Horyu Multimedia',
    url: 'https://www.instagram.com/horyu.multimedia',
  },
};

export const metadata: Metadata = {
  title: "Ponte de Pedra | Um Legado a Preservar - Documentário & Manifesto",
  description: "Conheça o documentário sobre a Ponte de Pedra (GO). Apoie a preservação desse patrimônio geológico, arqueológico e cultural único entre Rio Verde e Paraúna.",
  applicationName: "Ponte de Pedra",
  keywords: ['Ponte de Pedra', 'Goiás', 'preservação', 'patrimônio cultural', 'arqueologia', 'curta-metragem', 'Rio Verde', 'Paraúna', 'meio ambiente', 'tombamento', 'Horyu'],
  authors: [{ name: 'Horyu Multimedia', url: 'https://www.instagram.com/horyu.multimedia' }],
  creator: 'Horyu Multimedia',
  metadataBase: new URL('https://ponte-de-pedra.vercel.app'),
  alternates: {
    canonical: 'https://ponte-de-pedra.vercel.app',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  icons: {
    icon: [
      { url: '/icon.png', sizes: '192x192', type: 'image/png' },
      { url: '/favicon.ico', sizes: 'any' },
    ],
    shortcut: '/icon.png',
    apple: '/icon.png',
  },
  openGraph: {
    title: "Ponte de Pedra | Um Legado a Preservar",
    description: "Um curta-metragem e manifesto urgente sobre a história e preservação do patrimônio natural da Ponte de Pedra em Goiás.",
    url: 'https://ponte-de-pedra.vercel.app',
    siteName: 'Ponte de Pedra',
    images: [
      {
        url: '/og-image.png',
        width: 1200,
        height: 630,
        alt: 'Ponte de Pedra - Um Legado a Preservar',
      },
    ],
    locale: 'pt_BR',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Ponte de Pedra | Um Legado a Preservar',
    description: 'Um curta-metragem e manifesto urgente sobre a história e preservação do patrimônio natural da Ponte de Pedra em Goiás.',
    images: ['/og-image.png'],
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
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLdWebsite) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLdMovie) }}
        />
      </head>
      <body className="font-body antialiased">
        <DisableRightClick />
        {children}
        <Toaster />
      </body>
    </html>
  );
}
