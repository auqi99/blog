import { getEntriesByCategory } from "@/libs/contentful";
import {
  Box,
  Container,
  Heading,
  Link,
  SimpleGrid,
  Text,
  VStack,
} from "@chakra-ui/react";
import { Metadata } from "next";
import NextLink from "next/link";

export const metadata: Metadata = {
  title: "Categories Page",
  description: "Generated by create next app",
};

const categories = [
  {
    name: "Education",
    description: "Articles about learning, courses, and academic insights.",
  },
  {
    name: "Sport",
    description:
      "Latest news, tips, and insights on various sports activities.",
  },
];

const CategoriesPage = async () => {
  // Fetch latest posts per category
  const educationPosts = await getEntriesByCategory("Education");
  const sportsPosts = await getEntriesByCategory("Sport");

  const categoriesWithPosts = [
    { ...categories[0], posts: educationPosts },
    { ...categories[1], posts: sportsPosts },
  ];

  return (
    <Container maxW="5xl" py={10}>
      {/* Page Title */}
      <Heading as="h1" size="xl" textAlign="center" mb={8} color="gray.700">
        Blog Categories
      </Heading>

      {/* Categories List */}
      <SimpleGrid columns={{ base: 1, md: 2 }} spacing={8}>
        {categoriesWithPosts.map((category, index) => (
          <Box
            key={index}
            p={6}
            borderWidth="1px"
            borderRadius="lg"
            shadow="md"
            _hover={{
              shadow: "lg",
              transform: "scale(1.02)",
              transition: "0.3s",
            }}
          >
            <Heading as="h2" size="lg" color="blue.600" mb={2}>
              {category.name}
            </Heading>
            <Text mb={4} color="gray.600">
              {category.description}
            </Text>

            {/* Recent Posts */}
            <VStack align="start" spacing={3}>
              {category.posts.map((post, postIndex) => (
                <Link
                  as={NextLink}
                  key={postIndex}
                  href={`/${post.slug}`} // Tidak pakai "/posts/"
                  color="blue.500"
                  fontWeight="bold"
                  _hover={{ textDecoration: "underline", color: "blue.700" }}
                >
                  {post.title}
                </Link>
              ))}
            </VStack>
          </Box>
        ))}
      </SimpleGrid>
    </Container>
  );
};

export default CategoriesPage;
