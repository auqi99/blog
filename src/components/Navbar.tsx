"use client";

import useScroll from "@/hooks/useScroll";
import { Box, Container, Flex, Link, Text } from "@chakra-ui/react";

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
            <Text>Blog</Text>
            <Text>About</Text>
            <Text>Content</Text>
          </Flex>
        </Flex>
      </Container>
    </Box>
  );
};

export default Navbar;
