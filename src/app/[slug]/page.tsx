import { getEntryBySlug } from "@/libs/contentful";
import { Badge, Box, Container, Image, Text } from "@chakra-ui/react";
import {
  documentToReactComponents,
  Options,
} from "@contentful/rich-text-react-renderer";
import { BLOCKS } from "@contentful/rich-text-types";
import { notFound } from "next/navigation";
import React from "react";
import { format } from "date-fns";

const BlogDetail = async ({ params }: { params: { slug: string } }) => {
  const blog = await getEntryBySlug(params.slug);

  if (!blog) {
    return notFound();
  }

  const RICHTEXT_OPTIONS: Options = {
    renderNode: {
      [BLOCKS.HEADING_2]: (node, children) => {
        return (
          <Text fontSize={{ base: "xl", md: "2xl" }} fontWeight="semibold">
            {children}
          </Text>
        );
      },
      [BLOCKS.PARAGRAPH]: (node, children) => {
        return <Text>{children}</Text>;
      },
    },
  };

  return (
    <Container maxW="4xl">
      <Badge colorScheme="yellow" px="3" py="-1.5">
        {blog.category}
      </Badge>
      <Text fontSize={{ base: "2xl", md: "3xl" }} fontWeight="semibold">
        {blog.title}
      </Text>
      <Text fontSize="smaller" fontWeight="light">
        {format(new Date(blog.createdAt), "yyyy dd MMM ")} - {blog.author}
      </Text>
      <Image
        src={`https:${blog.thumbnail.fields.file.url}`}
        w="100%"
        maxH={{ base: "220px", md: "280px" }}
        objectFit="contain"
      />
      <Box mt="5" mb="12">
        {documentToReactComponents(blog?.content, RICHTEXT_OPTIONS)}
      </Box>
    </Container>
  );
};

export default BlogDetail;
