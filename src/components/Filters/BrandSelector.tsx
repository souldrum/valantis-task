import React from "react";
import { useBrands } from "../../hooks/useApi";

export const BrandSelector: React.FC<{ onChange: (value: string) => void }> = ({
  onChange,
}) => {
  const { isLoading, brands } = useBrands();

  if (isLoading) return null;

  const handleChange: React.ChangeEventHandler<HTMLSelectElement> = (e) => {
    onChange(e.target.value);
  };

  return (
    <div className="pb-2 border-outline-variant border-b w-max">
      <select
        name="brand"
        className="py-2 px-3 w-max outline-none bg-transparent text-primary"
        onChange={handleChange}
      >
        <option value="">Все</option>
        {brands.map((b) => (
          <option key={b} value={b}>
            {b}
          </option>
        ))}
      </select>
    </div>
  );
};
