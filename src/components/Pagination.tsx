// "use client";

// import { useRouter, useSearchParams } from "next/navigation";
// import React, { FC } from "react";
// import ReactPaginate from "react-paginate";
// import styles from "./Pagination.module.css";

// interface PaginationProps {
//   total: number;
//   limit: number;
// }

// const Pagination: FC<PaginationProps> = ({ total, limit }) => {
//   const router = useRouter();
//   const searchParams = useSearchParams();
//   const page = parseInt(searchParams.get("page") || "1", 10);

//   const onChangePage = ({ selected }: { selected: number }) => {
//     router.push(`/?page=${selected + 1}`);
//   };

//   return (
//     <ReactPaginate
//       pageCount={Math.ceil(total / limit)}
//       onPageChange={onChangePage}
//       previousLabel={"<"}
//       nextLabel={">"}
//       containerClassName={styles.pagination}
//       pageClassName={styles.pageItem}
//       previousClassName={styles.pageItem}
//       nextClassName={styles.pageItem}
//       activeClassName={styles.activePage}
//       pageLinkClassName={styles.pageLink}
//       previousLinkClassName={styles.pageLink}
//       nextLinkClassName={styles.pageLink}
//       activeLinkClassName={styles.activePage}
//       forcePage={page - 1}
//     />
//   );
// };

// export default Pagination;

// // libs/contentful.ts
// import { createClient } from "contentful";

// const client = createClient({
//   space: process.env.NEXT_PUBLIC_CONTENTFUL_SPACE_ID!,
//   environment: process.env.NEXT_PUBLIC_CONTENTFUL_ENVIRONMENT!,
//   accessToken: process.env.NEXT_PUBLIC_CONTENTFUL_ACCESS_TOKEN!,
// });

// export const getEntries = async (page: number = 1, limit: number = 3) => {
//   try {
//     const skip = (page - 1) * limit;
//     const response = await client.getEntries({ limit, skip });

//     return {
//       data: response.items.map((blog: any) => ({
//         title: blog.fields.title,
//         slug: blog.fields.slug,
//         description: blog.fields.description,
//         thumbnail: blog.fields.thumbnail.fields.file.url,
//         author: blog.fields.author,
//         category: blog.fields.category,
//         content: blog.fields.content,
//         createdAt: blog.fields.createdAt,
//       })),
//       meta: { total: response.total, limit },
//     };
//   } catch (error) {
//     console.error("Error fetching entries:", error);
//     return { data: [], meta: { total: 0, limit } };
//   }
// };