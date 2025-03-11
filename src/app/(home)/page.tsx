'use client';

import { useSearchParams } from 'next/navigation';
import { useEffect, useState } from 'react';
import BlogCard from '@/components/BlogCard';
import { getEntries } from '@/libs/contentful';
import { Button, Container, Grid, GridItem, HStack, Stack, Text } from '@chakra-ui/react';

// Definisikan tipe data blog
interface Blog {
  title: string;
  slug: string;
  description: string;
  thumbnail?: string;
  author: string;
  category: string;
  content: string;
  createdAt: string;
}

// Definisikan tipe untuk state blogs
interface BlogResponse {
  data: Blog[];
  meta: { total: number; limit: number };
}

export default function Home() {
  // const searchParams = useSearchParams();
  const [blogs, setBlogs] = useState<BlogResponse>({ data: [], meta: { total: 0, limit: 0 } });

  useEffect(() => {
    const fetchBlogs = async () => {
      try {
        const page = 1;
        const data: BlogResponse = await getEntries(Number(page));
        setBlogs(data);
      } catch (error) {
        console.error('Failed to fetch blogs:', error);
      }
    };

    fetchBlogs();
  }, []);

  return (
    <main>
      <Container maxW="5xl">
        <Stack alignItems="center" mt="10" textAlign="center">
          <Text fontSize={{ base: '2xl', md: '5xl' }} fontWeight="semibold">
            Education and Sports Blog
          </Text>
          <Text fontSize="lg" color="gray.600">
            A blog about education, sports, and knowledge-sharing.
          </Text>
        </Stack>

        <Grid templateColumns={{ base: 'repeat(1, 1fr)', md: 'repeat(3, 1fr)' }} gap={6} mt="16" mb="10">
          {blogs.data.length > 0 ? (
            blogs.data.map((blog, index) => (
              <GridItem key={index}>
                <BlogCard
                  title={blog.title}
                  slug={blog.slug}
                  description={blog.description}
                  thumbnail={blog.thumbnail || '/default-thumbnail.jpg'}
                />
              </GridItem>
            ))
          ) : (
            <Text textAlign="center" gridColumn="1 / -1">
              No blogs found.
            </Text>
          )}
        </Grid>

        <HStack spacing={4} my={7} justifyContent="center">
          <Button as="a" href="https://www.instagram.com/purwadhikaschool?igsh=NHUzcXE3dnl3Ymdu" target="_blank" rel="noopener noreferrer" colorScheme="pink" size="lg">
            Follow Us
          </Button>
        </HStack>
      </Container>
    </main>
  );
}
