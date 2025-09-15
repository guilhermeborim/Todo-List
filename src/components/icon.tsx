import { cva, type VariantProps } from "class-variance-authority";
import type React from "react";

export const IconVariants = cva("", {
  variants: {
    animate: {
      false: "",
      true: "animate-spin",
    },
  },
  defaultVariants: {
    animate: false,
  },
});
interface IconProps
  extends React.ComponentProps<"svg">,
    VariantProps<typeof IconVariants> {
  svg: React.FC<React.ComponentProps<"svg">>;
}

export default function Icon({
  svg: SvgComponent,
  animate,
  className,
  ...props
}: IconProps) {
  return (
    <SvgComponent {...props} className={IconVariants({ animate, className })} />
  );
}
