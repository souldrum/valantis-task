export type BtnProps = React.PropsWithChildren<
  Omit<React.HTMLProps<HTMLButtonElement>, "type"> & {
    type?: "button" | "submit" | "reset";
    color: "primary" | "surface" | "primary-container" | "outlined";
  }
>;
