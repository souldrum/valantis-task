import React from "react";
import { useBrands } from "../../hooks/useApi";
import { Select } from "../Select/Select";

export const BrandSelector: React.FC<{ onChange: (value: string) => void }> = ({
  onChange,
}) => {
  const { isLoading, brands } = useBrands();

  if (isLoading) return <p className="text-primary">Загружаем...</p>;

  const handleChange: React.ChangeEventHandler<HTMLSelectElement> = (e) => {
    onChange(e.target.value);
  };

  return (
    <Select name="brand" onChange={handleChange}>
      <option value="">Все</option>
      {brands.map((b) => (
        <option key={b} value={b}>
          {b}
        </option>
      ))}
    </Select>
  );
};
