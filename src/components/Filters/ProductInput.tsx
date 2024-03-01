import cn from "classnames";
import React from "react";

export const ProductInput: React.FC<{ onChange: (value: string) => void }> = ({
  onChange,
}) => {
  const [value, setValue] = React.useState("");
  const [focus, setFocus] = React.useState(false);

  React.useEffect(() => {
    if (value.length > 2) onChange(value);
  }, [value, onChange]);

  const handleChange: React.ChangeEventHandler<HTMLInputElement> = (e) =>
    setValue(e.target.value);

  const handleFocus = () => setFocus(true);

  const handleBlur = () => {
    onChange(value);
    setFocus(false);
  };

  // const handleKeyDown: React.KeyboardEventHandler<HTMLInputElement> = (e) => {
  //   if (e.key === "Enter") onChange(value);
  // };

  return (
    <div
      className={cn(
        "border-b border-outline-variant pb-3 pl-4 min-w-input text-outline text-body-lg bg-inherit",
        focus && "border-b-2"
      )}
    >
      <input
        className="pt-2 bg-transparent outline-none autofill:shadow-input-autocomplete w-11/12 placeholder:text-outline-variant"
        type="text"
        name="product"
        placeholder="Начните вводить название"
        autoComplete="off"
        value={value}
        onChange={handleChange}
        onBlur={handleBlur}
        // onKeyDown={handleKeyDown}
        onFocus={handleFocus}
      />
    </div>
  );
};
