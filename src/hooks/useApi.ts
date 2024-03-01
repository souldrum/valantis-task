import { keepPreviousData, useQuery } from "@tanstack/react-query";
import { ValantisService } from "../services/valantisService";
import { FilterParams } from "../services/valantisService.types";

const {
  getItems,
  getFilteredIds,
  getFieldValues: getFields,
} = new ValantisService();

const itemsOnPage = 50;

const getPagesCount = (items: number = 0) => Math.ceil(items / itemsOnPage);

export const useFilteredItemsIds = (filter: FilterParams = {}) => {
  const { brand, price, product } = filter;

  const result = useQuery({
    queryKey: ["itemsIds", brand, price, product],
    queryFn: () => getFilteredIds(filter),
  });

  return result;
};

export const useFilteredItems = (filter: FilterParams = {}, page = 0) => {
  const filteredIds = useFilteredItemsIds(filter);
  const { brand, price, product } = filter;

  const pagesCount = getPagesCount(filteredIds.data?.length);

  const result = useQuery({
    queryKey: ["items", brand, price, product, page],
    queryFn: () => {
      if (filteredIds.data!.length === 0) return [];
      return getItems(
        filteredIds.data!.slice(
          page * itemsOnPage,
          page * itemsOnPage + itemsOnPage
        )
      );
    },
    enabled: !!filteredIds.data,
    placeholderData: keepPreviousData,
  });

  return { result, pagesCount };
};

export const useBrands = () => {
  const result = useQuery({
    queryKey: ["brands"],
    queryFn: () => getFields({ field: "brand" }),
  });

  const brands = Array.from(new Set(result.data as string[]))
    .sort((a, b) => a.localeCompare(b))
    .filter(Boolean);

  return { isLoading: result.isLoading, brands };
};

export const usePrices = () => {
  const result = useQuery({
    queryKey: ["prices"],
    queryFn: () => getFields({ field: "price" }),
  });

  const prices = Array.from(new Set(result.data as number[])).sort(
    (a, b) => a - b
  );

  return { isLoading: result.isLoading, prices };
};
