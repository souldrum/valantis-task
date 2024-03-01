import React from "react";
import { usePrices } from "../../hooks/useApi";
import { Select } from "../Select/Select";

export const PriceSelector: React.FC<{ onChange: (value: number) => void }> = ({
  onChange,
}) => {
  const { isLoading, prices } = usePrices();

  if (isLoading)
    return <p className="text-primary animate-appear">Загружаем...</p>;

  const handleChange: React.ChangeEventHandler<HTMLSelectElement> = (e) => {
    onChange(Number(e.target.value));
  };

  return (
    <Select name="price" onChange={handleChange}>
      <option value="">Все</option>
      {prices.map((p) => (
        <option key={p} value={p}>
          {p}
        </option>
      ))}
    </Select>
  );
};
