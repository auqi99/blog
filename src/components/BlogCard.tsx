import {
  Card,
  CardBody,
  Heading,
  Image,
  Link,
  Stack,
  Text,
} from "@chakra-ui/react";
import { FC } from "react";

// interface BlogCardProps {}

type BlogCardProps = {
  thumbnail: string;
  title: string;
  description: string;
  slug: string;
};

const BlogCard: FC<BlogCardProps> = ({
  title,
  description,
  thumbnail,
  slug,
}) => {
  console.log("Thumbnail received:", thumbnail); // Debugging
  return (
    <Link href={`/${slug}`}>
      <Card>
        <CardBody>
          <Image
            src={thumbnail ? `https:${thumbnail}` : "/default-thumbnail.jpg"}
            alt={title}
            objectFit="cover"
            borderRadius="md"
            w="100%"
            maxH="200px"
          />

          <Stack mt="6" spacing="3">
            <Heading size="md">{title}</Heading>
            <Text noOfLines={3}>{description}</Text>
          </Stack>
        </CardBody>
      </Card>
    </Link>
  );
};

export default BlogCard;
