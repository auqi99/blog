import { createClient } from "contentful";

// Inisialisasi Contentful client
const client = createClient({
  space: process.env.NEXT_PUBLIC_CONTENTFUL_SPACE_ID!,
  environment: process.env.NEXT_PUBLIC_CONTENTFUL_ENVIRONMENT! || "master",
  accessToken: process.env.NEXT_PUBLIC_CONTENTFUL_ACCESS_TOKEN!,
});

export const getEntries = async (page: number = 1) => {
  try {
    const limit = 7;
    const skip = (page - 1) * limit;
    const response = await client.getEntries({
      limit,
      skip,
    });

    const blogs = response.items.map((blog: any) => ({
      title: blog.fields.title,
      slug: blog.fields.slug,
      description: blog.fields.description,
      thumbnail: blog.fields.thumbnail?.fields?.file?.url,
      author: blog.fields.author,
      category: blog.fields.category,
      content: blog.fields.content,
      createdAt: blog.fields.createdAt,
    }));

    return {
      data: blogs,
      meta: { total: response.total, limit: response.limit },
    };
  } catch (error) {
    console.error("Error fetching entries:", error);
    return { data: [], meta: { total: 0, limit: 0 } };
  }
};

export const getEntryBySlug = async (slug: string) => {
  try {
    const response = await client.getEntries({
      content_type: "blog",
      "fields.slug": slug, // Filter berdasarkan slug
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

export const getEntriesByCategory = async (category: string) => {
  try {
    const response = await client.getEntries({
      content_type: "blog",
      "fields.category": category,
    });

    return response.items.map((blog: any) => ({
      title: blog.fields.title,
      slug: blog.fields.slug,
      description: blog.fields.description,
      thumbnail: blog.fields.thumbnail.fields.file.url,
      category: blog.fields.category,
      createdAt: blog.fields.createdAt,
      excerpt:
        blog.fields.excerpt ||
        blog.fields.description.substring(0, 100) + "...",
    }));
  } catch (error) {
    console.error(`Error fetching blogs for category ${category}:`, error);
    return [];
  }
};
