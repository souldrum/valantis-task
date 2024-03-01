import React from "react";

type SelectProps = React.HTMLProps<HTMLSelectElement>;

export const Select: React.FC<React.PropsWithChildren<SelectProps>> = ({
  name,
  value,
  onChange,
  children,
}) => {
  return (
    <div className="pb-2 border-outline-variant border-b w-max animate-appear">
      <select
        name={name}
        className="py-2 px-3 w-max outline-none bg-transparent text-primary"
        value={value}
        onChange={onChange}
      >
        {children}
      </select>
    </div>
  );
};
