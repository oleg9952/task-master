import type { PropsWithChildren } from "react";
import { cn } from "../../utils/styles";

export const TextVariantsMap = {
  h1: "h1",
  h2: "h2",
  p: "p",
} as const;

type TextVariantsType = ValueOf<typeof TextVariantsMap>;

interface TextProps extends PropsWithChildren {
  variant?: TextVariantsType;
  className?: string;
}

const Text = ({
  variant = TextVariantsMap.p,
  className,
  children,
}: TextProps) => {
  if (variant === TextVariantsMap.h1) {
    return <h1 className={cn("text-content", className)}>{children}</h1>;
  }

  if (variant === TextVariantsMap.h2) {
    return <h2 className={cn("text-content", className)}>{children}</h2>;
  }

  return <p className={cn("text-content", className)}>{children}</p>;
};

export default Text;
