import React from "react";
import { ProductFields } from "../../services/valantisService.types";
import { Button } from "../Button/Button";
import { Select } from "../Select/Select";
import { BrandSelector } from "./BrandSelector";
import { PriceSelector } from "./PriceSelector";
import { ProductInput } from "./ProductInput";

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

  const handleReset = () => {
    onNameChange("");
    onValueChange("");
  };

  return (
    <div className="flex items-center gap-4">
      <Select name="filterName" value={currentName} onChange={handleSelect}>
        <option value="" disabled>
          Отфильтровать
        </option>
        <option value="brand">По бренду</option>
        <option value="price">По цене</option>
        <option value="product">По названию</option>
      </Select>
      {currentName === "brand" && <BrandSelector onChange={onValueChange} />}
      {currentName === "price" && <PriceSelector onChange={onValueChange} />}
      {currentName === "product" && <ProductInput onChange={onValueChange} />}
      {currentName && (
        <Button
          className="animate-appear"
          color="primary"
          onClick={handleReset}
        >
          Сбросить фильтр
        </Button>
      )}
    </div>
  );
};
