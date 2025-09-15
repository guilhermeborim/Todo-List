import { cva, type VariantProps } from "class-variance-authority";
import React from "react";

export const ContainerVariants = cva("mx-auto", {
  variants: {
    size: {
      md: "max-w-[31.5rem] px-2",
    },
  },
  defaultVariants: {
    size: "md",
  },
});

interface ContainerProps
  extends VariantProps<typeof ContainerVariants>,
    React.ComponentProps<"div"> {
  as?: keyof React.JSX.IntrinsicElements;
}

export default function Container({
  className,
  as = "div",
  children,
  ...props
}: ContainerProps) {
  return React.createElement(
    as,
    {
      className: ContainerVariants({ size: "md", className }),
      ...props,
    },
    children
  );
}
