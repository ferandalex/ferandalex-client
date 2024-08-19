import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Hero from "./components/Hero";
import SolutionsForAnyProject from "./components/SolutionsForAnyProject";
import WhatWeOffer from "./components/WhatWeOffer";
import OurVision from "./components/OurVision";
import Corporate from "./components/Corporate";
import CustomerOpinion from "./components/CustomerOpinion";
import GoToTopButton from "./components/GoToTopButton";
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: {
    default: 'Ferandalex | Home',
    template: '%s | Ferandalex'
  },
  description: 'Ferandalex oferă servicii complete de construcții, de la proiectare până la finisaje, cu focus pe calitate, eficiență și satisfacția clientului.',
  keywords: ['construcții', 'renovări', 'proiectare', 'amenajări interioare', 'Ferandalex', 'construcții România'],
  authors: [{ name: 'Echipa Ferandalex' }],
  creator: 'Ferandalex',
  publisher: 'Ferandalex',
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL('https://www.ferandalex.ro'),
  alternates: {
    canonical: '/',
    languages: {
      'ro-RO': '/ro',
      'en-US': '/en',
    },
  },
  openGraph: {
    title: 'Ferandalex - Expertiza în Construcții',
    description: 'Soluții complete în construcții, de la fundație la acoperiș. Calitate și profesionalism garantate.',
    url: 'https://www.ferandalex.ro',
    siteName: 'Ferandalex',
    images: [
      {
        url: 'https://www.ferandalex.ro/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'Ferandalex - Proiecte de Construcții',
      },
    ],
    locale: 'ro_RO',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Ferandalex - Lider în Industria Construcțiilor',
    description: 'Construim viitorul cu fiecare proiect. Descoperă serviciile noastre de top în construcții.',
    images: ['https://www.ferandalex.ro/twitter-image.jpg'],
    creator: '@ferandalex',
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
    icon: '/favicon.ico',
    shortcut: '/favicon-16x16.png',
    apple: '/apple-touch-icon.png',
    other: {
      rel: 'apple-touch-icon-precomposed',
      url: '/apple-touch-icon-precomposed.png',
    },
  },
  manifest: 'https://www.ferandalex.ro/site.webmanifest',
  category: 'construcții',
}

const Home: React.FC = () => {
  return (
    <div>
      <Hero />
      <SolutionsForAnyProject />
      <OurVision />
      <Corporate />
      <WhatWeOffer />
      <CustomerOpinion />
      <Footer />
      <GoToTopButton />
    </div>
  );
};

export default Home;
