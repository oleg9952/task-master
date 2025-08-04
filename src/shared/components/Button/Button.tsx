import type { PropsWithChildren } from "react";
import { cn } from "../../utils/styles";

export const ButtonVariantsMap = {
  primary: "primary",
  regular: "regular",
} as const;

type ButtonVariantType = ValueOf<typeof ButtonVariantsMap>;

type ButtonProps = {
  className?: string;
  event?: string;
  variant?: ButtonVariantType;
  onClick: () => void;
};

const Button = ({
  className,
  event,
  variant = ButtonVariantsMap.regular,
  children,
  onClick,
}: PropsWithChildren<ButtonProps>) => {
  const onClickWithAnalytics = () => {
    onClick?.();
    if (!event) return;
    console.log(`GA-analytics::${event}`);
  };

  if (variant === ButtonVariantsMap.primary) {
    return (
      <button
        className={cn(
          "bg-button-primary hover:bg-[#61abf7] transition-colors duration-150 text-white px-2 py-2 rounded-lg cursor-pointer",
          className
        )}
        onClick={onClickWithAnalytics}
      >
        {children}
      </button>
    );
  }

  return (
    <button
      className={cn(
        "bg-gray-300 text-white px-2 py-2 rounded-lg cursor-pointer",
        className
      )}
      onClick={onClickWithAnalytics}
    >
      {children}
    </button>
  );
};

export default Button;
