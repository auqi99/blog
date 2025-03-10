import { Avatar, Box, Container, Text } from "@chakra-ui/react";
import { Metadata } from "next";

// Definisikan tipe untuk props
interface PageProps {
  params: { author: string };
}

// Generate metadata untuk SEO
export async function generateMetadata({
  params,
}: PageProps): Promise<Metadata> {
  return {
    title: `Author: ${params.author}`,
    description: `Profile page for author ${params.author}`,
  };
}

// Komponen halaman dinamis
export default function AuthorPage({ params }: PageProps) {
  return (
    <Container maxW="4xl" py={10} centerContent>
      <Box textAlign="center" maxW="3xl">
        {/* Avatar */}
        <Avatar
          size="2xl"
          name={params.author}
          src="/Aulia Rifqi.jpg"
          border="4px solid #3182CE"
          boxShadow="lg"
        />

        {/* Nama Author */}
        <Text fontSize="3xl" fontWeight="bold" mt={4} color="gray.800">
          {params.author}
        </Text>

        {/* Deskripsi */}
        <Text fontSize="md" mt={3} color="gray.600" lineHeight="1.8">
          As a{" "}
          <Text as="span" fontWeight="semibold" color="blue.500">
            Junior Web Developer
          </Text>{" "}
          with a passion for building websites and web applications. Experienced
          in{" "}
          <Text as="span" fontWeight="semibold" color="blue.500">
            HTML, CSS, JavaScript, TypeScript
          </Text>
          , and modern frameworks like{" "}
          <Text as="span" fontWeight="semibold" color="blue.500">
            Chakra UI, Tailwind CSS, Bootstrap, ReactJS, NextJS, and ExpressJS
          </Text>
          . Constantly exploring new technologies and improving skills in both
          frontend and backend development. This blog is a space to share{" "}
          <Text as="span" fontWeight="semibold" color="blue.500">
            experiences, tutorials, and insights
          </Text>{" "}
          about the world of web development.
        </Text>
      </Box>
    </Container>
  );
}