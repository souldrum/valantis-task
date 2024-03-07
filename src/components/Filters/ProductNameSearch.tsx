import React from "react";

export const ProductNameSearch: React.FC<{
  onChange: (value: string) => void;
}> = ({ onChange }) => {
  const [value, setValue] = React.useState("");

  const handleChange: React.ChangeEventHandler<HTMLInputElement> = (e) =>
    setValue(e.target.value);

  const handleBlur = () => onChange(value);

  const handleKeyDown: React.KeyboardEventHandler<HTMLInputElement> = (e) => {
    if (e.key === "Enter") onChange(value);
  };

  return (
    <div className="border-b focus-within:border-b-2 border-outline-variant pb-3 pl-4 min-w-input text-outline text-body-lg bg-inherit">
      <input
        className="pt-2 bg-transparent outline-none autofill:shadow-input-autocomplete w-11/12 placeholder:text-outline-variant"
        type="text"
        name="product"
        placeholder="Введите название"
        autoComplete="off"
        value={value}
        onChange={handleChange}
        onBlur={handleBlur}
        onKeyDown={handleKeyDown}
      />
    </div>
  );
};
