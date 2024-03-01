import cn from "classnames";
import React from "react";
import { BtnProps } from "./Button.types";

export const Button: React.FC<BtnProps> = React.memo(
  ({ className, type, color, onClick, disabled, children }) => {
    return (
      <button
        type={type}
        className={cn(
          "flex gap-2 justify-center items-center text-label-lg py-2.5 px-6 rounded-full outline-none",
          {
            ["text-on-primary bg-primary active:bg-primary-op-80 shadow-elevation-2 active:shadow-elevation-1"]:
              color === "primary",
            ["text-on-primary-container bg-primary-container active:bg-primary shadow-elevation-2 active:shadow-elevation-1"]:
              color === "primary-container",
            ["bg-surface-container-low shadow-elevation-1 text-primary active:bg-primary-op-8"]:
              color === "surface",
            ["border border-outline bg-inherit text-primary active:backdrop-brightness-95"]:
              color === "outlined",
            ["disabled:text-on-surface-op-38 disabled:bg-on-surface-op-12 disabled:shadow-none active:disabled:shadow-none active:disabled:bg-on-surface-op-12 cursor-not-allowed"]:
              disabled,
          },
          className && className
        )}
        onClick={onClick}
        disabled={disabled}
      >
        {children}
      </button>
    );
  }
);
