import React from "react";
import { ProductFields } from "../../services/valantisService.types";
import { BrandSelector } from "./BrandSelector";
import { PriceSelector } from "./PriceSelector";
import { ProductInput } from "./ProductInput";
import { Button } from "../Button/Button";

type FilterProps = {
  currentName: string;
  onNameChange: (value: ProductFields | "") => void;
  onValueChange: (value: string | number) => void;
};

export const Filter: React.FC<FilterProps> = ({
  currentName,
  onNameChange,
  onValueChange,
}) => {
  const handleSelect: React.ChangeEventHandler<HTMLSelectElement> = (e) => {
    onNameChange(e.target.value as ProductFields);
    onValueChange("");
  };

  const handleResetFilters = () => {
    onNameChange("");
    onValueChange("");
  };

  return (
    <div className="flex items-center gap-4">
      <div className="pb-2 border-outline-variant border-b w-max">
        <select
          name="filterName"
          className="py-2 px-3 w-max outline-none bg-transparent text-primary"
          value={currentName}
          onChange={handleSelect}
        >
          <option value="" disabled>
            Отфильтровать
          </option>
          <option value="brand">По бренду</option>
          <option value="price">По цене</option>
          <option value="product">По названию</option>
        </select>
      </div>
      {currentName === "brand" && <BrandSelector onChange={onValueChange} />}
      {currentName === "price" && <PriceSelector onChange={onValueChange} />}
      {currentName === "product" && <ProductInput onChange={onValueChange} />}
      {currentName && (
        <Button color="primary" onClick={handleResetFilters}>
          Сбросить фильтр
        </Button>
      )}
    </div>
  );
};
