import type { Metadata } from 'next'

const BASE = {
  title: 'Garium',
  url: 'https://garium.co',
  description: 'Garium deploys and manages a fully private AI platform on dedicated infrastructure. Your data never leaves your environment.',
  ogImage: '/og-image.png',
}

export function generatePageMetadata(page: {
  title: string
  description: string
  path: string
}): Metadata {
  return {
    title: page.title,
    description: page.description,
    alternates: { canonical: `${BASE.url}${page.path}` },
    openGraph: {
      title: `${page.title} | Garium`,
      description: page.description,
      url: `${BASE.url}${page.path}`,
      images: [{ url: BASE.ogImage, width: 1200, height: 630 }],
    },
    twitter: {
      card: 'summary_large_image',
      title: `${page.title} | Garium`,
      description: page.description,
    },
  }
}
