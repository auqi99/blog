"use client";

import {
  Box,
  Container,
  Heading,
  HStack,
  Icon,
  Link,
  List,
  ListItem,
  Text,
  VStack
} from "@chakra-ui/react";
import { FaInstagram, FaLinkedin, FaTwitter } from "react-icons/fa";

const AboutPage = () => {
  return (
    <Box
      bg="linear-gradient(to bottom, #108dc7, #ef8e38)"
      minH="100vh"
      py={12}
      display="flex"
      alignItems="center"
      justifyContent="center"
    >
      <Container
        maxW="4xl"
        bg="white"
        p={8}
        borderRadius="2xl"
        boxShadow="lg"
        textAlign="center"
      >
        {/* Header */}
        <VStack spacing={3} mb={8}>
          <Heading color="blue.600" fontSize="4xl">
            FunBlog
          </Heading>
          <Text fontSize="lg" color="gray.500" fontWeight="medium">
            Education and Sports Blog
          </Text>
        </VStack>

        {/* Blog History */}
        <Box mb={8}>
          <Heading size="lg" color="gray.800" fontWeight="bold">
            Blog History
          </Heading>
          <Text mt={3} color="gray.600" fontSize="md">
            FunBlog was created to share knowledge and insights on education and
            sports. Our journey started with a passion for learning and sports
            analysis, and over time, we have built a strong community of readers
            who share our enthusiasm.
          </Text>
        </Box>

        {/* Mission and Vision */}
        <Box mb={8}>
          <Heading size="lg" color="gray.800" fontWeight="bold">
            Mission & Vision
          </Heading>
          <Text mt={3} color="gray.600" fontSize="md">
            Our mission is to create engaging and insightful content about
            education and sports. We believe that knowledge and passion drive
            personal and professional growth.
          </Text>
        </Box>

        {/* Featured Articles */}
        <Box mb={8}>
          <Heading size="lg" color="gray.800" fontWeight="bold">
            Featured Articles
          </Heading>
          <List spacing={3} mt={3} color="gray.600" fontSize="md">
            <ListItem>🚀 The Power of Habits</ListItem>
            <ListItem>💻 How to be A Great Fullstack Web Developer</ListItem>
            <ListItem>⚽ Argentina Football</ListItem>
            <ListItem>🔥 The Easiest Method to Learn JavaScript</ListItem>
            <ListItem>🏆 All About FC Barcelona</ListItem>
            <ListItem>🐐 Who is Lionel Messi</ListItem>
          </List>
        </Box>

        {/* Contact Info */}
        <Box>
          <Heading size="md" color="gray.800" fontWeight="bold">
            Get in Touch
          </Heading>
          <Text mt={3} color="gray.600" fontSize="md">
            Follow us on social media to stay updated!
          </Text>
          <HStack spacing={6} mt={5} justify="center">
            <Link href="#" isExternal>
              <Icon
                as={FaTwitter}
                boxSize={7}
                color="blue.400"
                transition="0.3s"
                _hover={{ color: "blue.600", transform: "scale(1.2)" }}
              />
            </Link>
            <Link href="#" isExternal>
              <Icon
                as={FaLinkedin}
                boxSize={7}
                color="blue.600"
                transition="0.3s"
                _hover={{ color: "blue.800", transform: "scale(1.2)" }}
              />
            </Link>
            <Link href="#" isExternal>
              <Icon
                as={FaInstagram}
                boxSize={7}
                color="pink.500"
                transition="0.3s"
                _hover={{ color: "pink.700", transform: "scale(1.2)" }}
              />
            </Link>
          </HStack>
        </Box>
      </Container>
    </Box>
  );
};

export default AboutPage;
