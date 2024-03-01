import React from "react";
import {
  HiChevronDoubleLeft,
  HiChevronDoubleRight,
  HiChevronLeft,
  HiChevronRight,
} from "react-icons/hi";
import { Button } from "../Button/Button";

type PaginationProps = {
  page: number;
  setPage: React.Dispatch<React.SetStateAction<number>>;
  pagesCount: number;
  itemsCount: number;
};

export const Pagination: React.FC<PaginationProps> = ({
  page,
  setPage,
  pagesCount,
  itemsCount,
}) => {
  return (
    <div className="flex flex-col gap-1 sm:gap-2 justify-center items-center p-2">
      <div className="flex gap-1 sm:gap-2 items-center">
        <Button color="surface" onClick={() => setPage(0)} disabled={page <= 0}>
          <HiChevronDoubleLeft className="h-3 w-3" />
        </Button>
        <Button
          color="primary"
          className="rounded-e-none"
          onClick={() => setPage((page) => page - 1)}
          disabled={page <= 0}
        >
          <HiChevronLeft className="h-3 w-3" />
        </Button>

        <span className="text-primary text-body sm:text-body-lg">
          {page + 1} / {pagesCount}
        </span>
        <Button
          color="primary"
          className="rounded-s-none"
          onClick={() => setPage((page) => page + 1)}
          disabled={page >= pagesCount - 1}
        >
          <HiChevronRight className="h-3 w-3" />
        </Button>
        <Button
          color="surface"
          onClick={() => setPage(pagesCount - 1)}
          disabled={page >= pagesCount - 1}
        >
          <HiChevronDoubleRight className="h-3 w-3" />
        </Button>
      </div>
      <div className="flex flex-col items-center text-on-surface-variant text-body">
        <p>
          Количество товаров на странице:
          <span className="ml-1 text-primary">{itemsCount}</span>
        </p>
      </div>
    </div>
  );
};
