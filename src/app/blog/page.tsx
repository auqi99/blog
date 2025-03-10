"use client";

import { getEntries } from "@/libs/contentful";
import { useState, useEffect } from "react";
import { Input, Select, Box, Text, Image, Badge, Flex } from "@chakra-ui/react";
import Link from "next/link";
import { format } from "date-fns";

interface Post {
  title: string;
  slug: string;
  description: string;
  thumbnail: string;
  author: string;
  category: string;
  content: string;
  createdAt: string;
}

const BlogPage = () => {
  const [posts, setPosts] = useState<Post[]>([]);
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("All");

  useEffect(() => {
    const fetchPosts = async () => {
      const response = await getEntries();
      setPosts(response.data as Post[]);
    };

    fetchPosts();
  }, []);

  const filteredPosts = posts.filter(
    (post) =>
      post.title.toLowerCase().includes(searchQuery.toLowerCase()) &&
      (selectedCategory === "All" || post.category === selectedCategory)
  );

  return (
    <Box maxW="6xl" mx="auto" mt="8" px="4">
      {/* Title */}
      <Text fontSize="4xl" fontWeight="bold" textAlign="center" mb="6" color="gray.800">
        Blog Posts
      </Text>

      {/* Search & Filter */}
      <Flex justify="center" gap="4" flexWrap="wrap">
        <Input
          placeholder="🔍 Search posts..."
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          bg="white"
          borderRadius="full"
          px="4"
          boxShadow="md"
          maxW="300px"
        />
        <Select
          value={selectedCategory}
          onChange={(e) => setSelectedCategory(e.target.value)}
          bg="white"
          borderRadius="full"
          px="1"
          boxShadow="md"
          maxW="200px"
        >
          <option value="All">All Categories</option>
          <option value="Education">Education</option>
          <option value="Sport">Sport</option>
        </Select>
      </Flex>

      {/* Blog Posts */}
      <Box mt="8" display="grid" gridTemplateColumns={{ base: "1fr", md: "1fr 1fr" }} gap="6">
        {filteredPosts.length > 0 ? (
          filteredPosts.map((post, index) => (
            <Link key={post.slug || index} href={`/${post.slug}`} passHref>
              <Box
                p="5"
                borderRadius="xl"
                bg="white"
                boxShadow="lg"
                transition="all 0.3s"
                cursor="pointer"
                _hover={{ transform: "translateY(-5px)", boxShadow: "xl" }}
              >
                <Image
                  src={post.thumbnail ? `https:${post.thumbnail}` : "/default-thumbnail.jpg"}
                  alt={post.title}
                  maxH="220px"
                  w="100%"
                  objectFit="cover"
                  borderRadius="lg"
                  mb="4"
                />
                <Badge colorScheme="blue" fontSize="sm" px="2" py="1">
                  {post.category}
                </Badge>
                <Text fontSize="xl" fontWeight="bold" mt="2" color="gray.800">
                  {post.title}
                </Text>
                <Text fontSize="sm" color="gray.500">
                  {post.createdAt ? format(new Date(post.createdAt), "yyyy dd MMM") : "Unknown Date"}
                </Text>
                <Text mt="3" fontSize="md" color="gray.700" noOfLines={2}>
                  {post.description || "No excerpt available"}
                </Text>
              </Box>
            </Link>
          ))
        ) : (
          <Text fontSize="lg" textAlign="center" color="gray.600">
            No posts found
          </Text>
        )}
      </Box>
    </Box>
  );
};

export default BlogPage;