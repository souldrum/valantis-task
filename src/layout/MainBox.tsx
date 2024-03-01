import cn from "classnames";
import React from "react";
import { isMobile } from "../isMobile/isMobile";

export const MainBox: React.FC<
  React.PropsWithChildren<{ className?: string }>
> = ({ className, children }) => {
  return (
    <div
      className={cn(
        "bg-surface-container-lowest dark:bg-dark-surface-container p-4 shadow-elevation-1 animate-appear",
        className,
        isMobile() ? "rounded-lg" : "rounded-3xl"
      )}
    >
      {children}
    </div>
  );
};
