"use client";

import useScroll from "@/hooks/useScroll";
import { Box, Container, Flex, Link, Text } from "@chakra-ui/react";
import NextLink from "next/link";

const Navbar = () => {
  const { scrollY } = useScroll();
  return (
    <Box
      color={scrollY > 0 ? "blackAlpha.800" : "brown"}
      bgColor={scrollY > 0 ? "lightblue" : "beige"}
      zIndex="10"
      pos="sticky"
      top="0"
      transition="background-color 0.2s ease"
    >
      <Container maxW="5xl" p="3.5">
        <Flex justifyContent="space-between" align="center">
          <Link href="/">
            <Text fontSize="2xl" fontWeight="bold">
              FunBlog
            </Text>
          </Link>
          <Flex gap="3">
            <Link
              as={NextLink}
              href="/blog"
              fontWeight="bold"
              _hover={{ color: "blue.500" }}
            >
              <Text>Blog</Text>
            </Link>
            <Link
              as={NextLink}
              href="/about"
              fontWeight="bold"
              _hover={{ color: "blue.500" }}
            >
              <Text>About</Text>
            </Link>
            <Link
              as={NextLink}
              href="/categories"
              fontWeight="bold"
              _hover={{ color: "blue.500" }}
            >
              <Text>Categories</Text>
            </Link>
          </Flex>
        </Flex>
      </Container>
    </Box>
  );
};

export default Navbar;
