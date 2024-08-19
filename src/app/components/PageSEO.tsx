// components/PageSEO.tsx

import { Metadata } from 'next';

interface PageSEOProps {
  children: React.ReactNode;
  title?: string;
  description?: string;
  keywords?: string;
  ogImage?: string;
}

export function generateMetadata({ title, description, keywords, ogImage }: Omit<PageSEOProps, 'children'>): Metadata {
  return {
    ...(title && { 
      title,
      openGraph: { title },
      twitter: { title },
    }),
    ...(description && { 
      description,
      openGraph: { description },
      twitter: { description },
    }),
    ...(keywords && { keywords: keywords.split(',').map(keyword => keyword.trim()) }),
    ...(ogImage && { 
      openGraph: { images: [ogImage] },
      twitter: { images: [ogImage] },
    }),
  };
}

export default function PageSEO({ children, ...metadataProps }: PageSEOProps) {
  generateMetadata(metadataProps);
  return <>{children}</>;
}
