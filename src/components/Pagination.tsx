"use client";

import { useRouter } from "next/navigation";
import React, { FC } from "react";
import ReactPaginate from "react-paginate";
import styles from "./Pagination.module.css";
import { useSearchParams } from "next/navigation";

interface PaginationProps {
  total: number;
  limit: number;
}

const Pagination: FC<PaginationProps> = ({ total, limit }) => {
  const router = useRouter();
  const searchParams = useSearchParams();
  const page = searchParams.get("page");

  const onChangePage = ({ selected }: { selected: number }) => {
    router.replace(`/?page=${selected + 1}`);
  };
  return (
    <ReactPaginate
      pageCount={Math.ceil(total / limit)}
      onPageChange={onChangePage}
      previousLabel={"<"}
      nextLabel={">"}
      containerClassName={styles.pagination}
      pageClassName={styles.pageItem}
      previousClassName={styles.pageItem}
      nextClassName={styles.pageItem}
      activeClassName={styles.activePage}
      pageLinkClassName={styles.pageLink}
      previousLinkClassName={styles.pageLink}
      nextLinkClassName={styles.pageLink}
      activeLinkClassName={styles.activePage}
      forcePage={Number(page) - 1}
    />
  );
};

export default Pagination;
