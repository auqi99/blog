// app/about/layout.tsx
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'About FunBlog | Education and Sports Blog',
  description: 'Learn about FunBlog - an education and sports blog sharing knowledge and insights. Discover our history, mission, and featured articles.',
  keywords: ['FunBlog', 'education blog', 'sports blog', 'web development', 'football', 'Barcelona', 'Lionel Messi', 'JavaScript'],
  openGraph: {
    title: 'About FunBlog | Education and Sports Blog',
    description: 'Learn about FunBlog - an education and sports blog sharing knowledge and insights on education, sports, and web development.',
    url: 'https://your-domain.com/about',
    siteName: 'FunBlog',
    images: [
      {
        url: 'https://your-domain.com/about-og-image.jpg', // Ganti dengan URL gambar Anda
        width: 1200,
        height: 630,
        alt: 'FunBlog - Education and Sports Blog',
      },
    ],
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'About FunBlog | Education and Sports Blog',
    description: 'Learn about FunBlog - an education and sports blog sharing knowledge and insights.',
    images: ['https://your-domain.com/about-og-image.jpg'], // Ganti dengan URL gambar Anda
  },
}

export default function AboutLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return children
}