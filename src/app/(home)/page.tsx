import BlogCard from "@/components/BlogCard";
import Pagination from "@/components/Pagination";
import { getEntries } from "@/libs/contentful";
import {
  Container,
  Grid,
  GridItem,
  Input,
  Stack,
  Text,
} from "@chakra-ui/react";

interface HomeProps {
  searchParams: { [key: string]: string | string[] | undefined };
}

export default async function Home({ searchParams }: HomeProps) {
  const blogs = await getEntries(Number(searchParams.page) || 1);

  return (
    <main>
      <Container maxW="5xl">
        {/* JUMBOTRON */}
        <Stack alignItems="center" mt="10">
          <Text fontSize={{ base: "2xl", md: "5xl" }} fontWeight="semibold">
            Education and Sports Blog
          </Text>
          <Text>A blog about education, sports.</Text>
          <Input placeholder="Search for articles" maxW={{ md: "250px" }} />
        </Stack>

        {/* BLOG LIST */}
        <Grid
          templateColumns={{
            base: "repeat(1, 1fr)",
            md: "repeat(3, 1fr)",
          }}
          gap={6}
          mt="16"
          mb="10"
        >
          {blogs?.data.map((blog) => {
            return (
              <GridItem>
                <BlogCard
                  title={blog.title}
                  slug={blog.slug}
                  description={blog.description}
                  thumbnail={blog.thumbnail.fields.file.url}
                />
              </GridItem>
            );
          })}
        </Grid>
        <Pagination
          total={blogs?.meta.total || 0}
          limit={blogs?.meta.limit || 3}
        />
      </Container>
    </main>
  );
}
