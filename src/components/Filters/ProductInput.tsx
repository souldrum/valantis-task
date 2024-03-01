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
        "border border-outline rounded py-1 pl-4 min-w-input text-outline text-body-lg bg-inherit",
        focus && "border-2"
      )}
    >
      <input
        className="py-1 bg-transparent outline-none autofill:shadow-input-autocomplete w-11/12"
        type="text"
        name="product"
        value={value}
        onChange={handleChange}
        onBlur={handleBlur}
        // onKeyDown={handleKeyDown}
        onFocus={handleFocus}
      />
    </div>
  );
};
