import type { Metadata } from 'next'

export function buildMetadata(params: {
  title: string
  description: string
  path?: string
}): Metadata {
  const url = `${process.env.NEXT_PUBLIC_SITE_URL || 'https://garium.com'}${params.path || ''}`
  return {
    title: params.title,
    description: params.description,
    openGraph: {
      title: params.title,
      description: params.description,
      url,
    },
  }
}
