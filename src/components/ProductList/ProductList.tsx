import cn from "classnames";
import React from "react";
import { PulseLoader } from "react-spinners";
import { useFilteredItems } from "../../hooks/useApi";
import { ProductFields } from "../../services/valantisService.types";
import { ErrorBox } from "../ErrorBox/ErrorBox";
import { Filter } from "../Filters/Filter";
import { Pagination } from "../Pagination/Pagination";
import { ProductListItem } from "../ProductListItem/ProductListItem";

export const ProductList: React.FC = () => {
  const [page, setPage] = React.useState(0);
  const [filterName, setFilterName] = React.useState<ProductFields | "">("");
  const [filterValue, setFilterValue] = React.useState<number | string>("");
  const { result, pagesCount, error } = useFilteredItems(getFilter(), page);

  function getFilter() {
    if (!filterName || !filterValue) return {};

    return { [filterName]: filterValue };
  }

  if (error) return <ErrorBox error={error} />;

  if (!result.data) {
    return (
      <div className="flex justify-center items-center h-full">
        <PulseLoader color="rgb(144 74 71)" />
      </div>
    );
  }

  return (
    <>
      <div className="flex justify-center xl:justify-between sticky top-0 z-10 bg-surface container mx-auto gap-4 flex-wrap animate-appear">
        <Filter
          currentName={filterName}
          onNameChange={setFilterName}
          onValueChange={setFilterValue}
        />

        <Pagination
          page={page}
          setPage={setPage}
          itemsCount={result.data?.length ?? 0}
          pagesCount={pagesCount}
        />
      </div>

      <ul
        className={cn(
          "container mx-auto grid sm:grid-cols-2 lg:grid-cols-3 gap-4 p-2 animate-appear",
          result.isPlaceholderData && "!animate-pulse opacity-15"
        )}
      >
        {result.data?.map((product) => (
          <ProductListItem key={product.id} product={product} />
        ))}
      </ul>
    </>
  );
};
