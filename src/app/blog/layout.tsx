// app/blog/layout.tsx
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Blog Posts - My Website",
  description: "Explore our latest blog posts on various topics.",
  openGraph: {
    title: "Blog Posts - My Website",
    description: "Explore our latest blog posts on various topics.",
    images: [
      {
        url: "https://example.com/default-thumbnail.jpg", // URL gambar default
        width: 1200,
        height: 630,
        alt: "Blog Posts",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Blog Posts - My Website",
    description: "Explore our latest blog posts on various topics.",
    images: ["https://example.com/default-thumbnail.jpg"], // URL gambar default
  },
};

export default function BlogLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div>
      {children}
    </div>
  );
}
