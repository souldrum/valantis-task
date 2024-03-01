import cn from "classnames";
import React from "react";

export const MainBox: React.FC<
  React.PropsWithChildren<{ className?: string }>
> = ({ className, children }) => {
  return (
    <div
      className={cn(
        "bg-surface-container-lowest dark:bg-dark-surface-container p-4 shadow-elevation-1 animate-appear rounded-lg sm:rounded-3xl",
        className
      )}
    >
      {children}
    </div>
  );
};
