import React from "react";
import { usePrices } from "../../hooks/useApi";

export const PriceSelector: React.FC<{ onChange: (value: number) => void }> = ({
  onChange,
}) => {
  const { isLoading, prices } = usePrices();

  if (isLoading) return null;

  const handleChange: React.ChangeEventHandler<HTMLSelectElement> = (e) => {
    onChange(Number(e.target.value));
  };

  return (
    <div className="pb-2 border-outline-variant border-b w-max">
      <select
        name="price"
        className="py-2 px-3 w-max outline-none bg-transparent text-primary"
        onChange={handleChange}
      >
        <option value="">Все</option>
        {prices.map((p) => (
          <option key={p} value={p}>
            {p}
          </option>
        ))}
      </select>
    </div>
  );
};
