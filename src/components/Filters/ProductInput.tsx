import React from "react";

export const ProductInput: React.FC<{ onChange: (value: string) => void }> = ({
  onChange,
}) => {
  const [value, setValue] = React.useState("");

  const handleBlur = () => {
    onChange(value);
  };

  const handleKeyDown: React.KeyboardEventHandler<HTMLInputElement> = (e) => {
    if (e.key === "Enter") onChange(value);
  };

  return (
    <div className="border border-outline rounded py-1 pl-4 min-w-input text-outline text-body-lg bg-inherit">
      <input
        className="py-1 bg-transparent outline-none autofill:shadow-input-autocomplete w-11/12"
        type="text"
        name="product"
        value={value}
        onChange={(e) => setValue(e.target.value)}
        onBlur={handleBlur}
        onKeyDown={handleKeyDown}
      />
    </div>
  );
};
