import React from "react";
import { ProductFields } from "../services/valantisService.types";
import { useFilteredItems } from "./useApi";

export const useProductList = () => {
  const [page, setPage] = React.useState(0);
  const [filterName, setFilterName] = React.useState<ProductFields | "">("");
  const [filterValue, setFilterValue] = React.useState<number | string>("");
  const { result, pagesCount } = useFilteredItems(getFilter(), page);

  function getFilter() {
    if (!filterName || !filterValue) return {};

    return { [filterName]: filterValue };
  }

  return React.useMemo(() => {
    return {
      page,
      setPage,
      filterName,
      setFilterName,
      filterValue,
      setFilterValue,
      result,
      pagesCount,
    };
  }, [filterName, filterValue, page, pagesCount, result]);
};
