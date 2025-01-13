import { createClient } from "contentful";

const client = createClient({
  space: process.env.NEXT_PUBLIC_CONTENTFUL_SPACE_ID!,
  environment: process.env.NEXT_PUBLIC_CONTENTFUL_ENVIRONMENT!,
  accessToken: process.env.NEXT_PUBLIC_CONTENTFUL_ACCESS_TOKEN!,
});

//get banyak data
export const getEntries = async (page: number = 1) => {
  try {
    const limit = 3;
    const skip = (page - 1) * limit;
    const response = await client.getEntries({
      limit,
      skip,
    });

    // console.log(response);

    const blogs = response.items.map((blog: any) => {
      return {
        title: blog.fields.title,
        slug: blog.fields.slug,
        description: blog.fields.description,
        thumbnail: blog.fields.thumbnail,
        author: blog.fields.author,
        category: blog.fields.category,
        content: blog.fields.content,
        createdAt: blog.fields.createdAt,
      };
    });

    return {
      data: blogs,
      meta: { total: response.total, limit: response.limit },
    };
  } catch (error) {
    console.log(error);
  }
};

// get 1 data berdasarkan slug
export const getEntryBySlug = async (slug: string) => {
  try {
    const response = await client.getEntries({
      content_type: "blog",
      "fields.slug": slug, // Gunakan parameter slug
    });

    if (response.items.length === 0) {
      console.error(`No entry found for slug: ${slug}`);
      return null;
    }

    const blog = response.items[0].fields;

    return {
      title: blog.title,
      slug: blog.slug,
      description: blog.description,
      thumbnail: blog.thumbnail,
      author: blog.author,
      category: blog.category,
      content: blog.content,
      createdAt: blog.createdAt,
    };
  } catch (error) {
    console.error("Error fetching entry by slug:", error);
    return null;
  }
};
