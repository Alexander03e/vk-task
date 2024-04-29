import { useState } from "react";
import styles from "./Pagination.module.scss";

export const Pagination = ({
  page,
  totalPages,
  onPageChange,
  pageCount = 5,
}: {
  page: number;
  totalPages: number;
  onPageChange: (val: number) => void;
  pageCount?: number;
}) => {
  const [activePage, setActivePage] = useState(page);

  const nextPage = () => {
    if (activePage < totalPages) {
      setActivePage(activePage + 1);
      onPageChange(activePage + 1);
    }
  };

  const prevPage = () => {
    if (activePage > 1) {
      setActivePage(activePage - 1);
      onPageChange(activePage - 1);
    }
  };

  const handlePageChange = (pageNumber: number) => {
    setActivePage(pageNumber);
    onPageChange(pageNumber);
  };

  return (
    <div className={styles.paginationWrapper}>
      {activePage > 1 ? (
        <button className={styles.paginateButton} onClick={prevPage}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="w-6 h-6"
            style={{ transform: "rotate(180deg)" }}
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3"
            />
          </svg>
        </button>
      ) : (
        ""
      )}
      {Array.from({ length: pageCount }, (_, i) => {
        const curPage = activePage + i;
        if (curPage <= totalPages) {
          return (
            <PaginationItem
              activePage={activePage}
              curPage={curPage}
              handlePageChange={handlePageChange}
              index={i}
            />
          );
        }
      })}
      {activePage < totalPages ? (
        <button className={styles.paginateButton} onClick={nextPage}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="w-6 h-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3"
            />
          </svg>
        </button>
      ) : (
        ""
      )}
    </div>
  );
};

const PaginationItem = ({
  activePage,
  curPage,
  handlePageChange,
  index,
}: {
  activePage: number;
  curPage: number;
  index: number;
  handlePageChange: (val: number) => void;
}) => {
  return (
    <button
      className={`${styles.paginateButton} ${
        activePage === curPage ? styles.active : ""
      }`}
      onClick={() => handlePageChange(curPage)}
    >
      {activePage + index}
    </button>
  );
};
