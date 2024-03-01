import cn from "classnames";
import React from "react";
import { ClipLoader } from "react-spinners";
import { useProductList } from "../../hooks/useProductList";
import { isMobile } from "../../isMobile/isMobile";
import { Filter } from "../Filters/Filter";
import { Pagination } from "../Pagination/Pagination";
import { ProductListItem } from "../ProductListItem/ProductListItem";

export const ProductList: React.FC = () => {
  const {
    filterName,
    page,
    pagesCount,
    result,
    setFilterName,
    setFilterValue,
    setPage,
  } = useProductList();

  if (result.error) {
    console.log(result.error.name, result.error.message);
    return <p>Ошибка: {result.error.message}</p>;
  }

  return (
    <>
      {result.isLoading ? (
        <ClipLoader
          size={50}
          color="rgb(144 74 71)"
          // loading={result.isLoading}
          cssOverride={{ display: "block", margin: "auto" }}
        />
      ) : (
        <>
          <div
            className={cn(
              "flex justify-between sticky z-10 bg-surface container mx-auto",
              isMobile() ? "top-12" : "top-0"
            )}
          >
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
              "container mx-auto grid sm:grid-cols-2 md:grid-cols-3 gap-4 p-2 animate-appear",
              result.isPlaceholderData && "!animate-pulse opacity-15"
            )}
          >
            {result.data?.map((product, i) => (
              <ProductListItem key={i} product={product} />
            ))}
          </ul>
        </>
      )}
    </>
  );
};
