import classNames from "classnames";
import type { FC, JSX, ReactNode} from 'react';

type Variant =
  "h1"
  | "h2"
  | "h3"
  | "h5"
  | "body"
  | "small"
  | "caption"
  | "large";

type Weight =
  "normal"
  | "medium"
  | "semibold"
  | "bold";

type Colors =
  "primary"
  | "onPrimary"
  | "secondary"
  | "muted"
  | "error"
  | "success"
  | "warning"
  | "standard"

interface TextProps {
  children: ReactNode;
  variant?: Variant;
  as?: keyof JSX.IntrinsicElements; // позволяет менять HTML-тег
  weight?: Weight;
  className?: string;
  color?: Colors;
}

const variantClasses: Record<Variant, string> = {
  h1: "text-[28px] leading-[36px] font-semibold tracking-wide",
  h2: "text-2xl leading-[32px] font-semibold tracking-wide",
  h3: "text-[22px] leading-[28px] font-semibold tracking-wide",
  h5: "text-[16px] leading-[24px] font-semibold tracking-wide",
  body: "text-base leading-6",
  small: "text-sm leading-4",
  large: "text-6xl leading-[1.1]",
  caption: "text-xs leading-4 uppercase tracking-wide",
};

const weightClasses: Record<Weight, string> = {
  normal: "font-normal",
  medium: "font-medium",
  semibold: "font-semibold",
  bold: "font-bold",
};

const colorClasses: Record<Colors, string> = {
  standard: "text-text",
  primary: "text-primary",
  onPrimary: "text-on-primary",
  secondary: "text-secondary",
  muted: "text-text-muted",
  error: "text-error",
  success: "text-success",
  warning: "text-warning",
};

export const Text: FC<TextProps> = ({
  children,
  variant = "body",
  as,
  weight,
  className,
  color = 'standard',
}) => {
  const Component = (as || (["h1", "h2", "h3", "h5"].includes(variant) ? variant : "p")) as keyof JSX.IntrinsicElements;

  return (
    <Component
      className={classNames(
        variantClasses[variant],
        weight && weightClasses[weight],
        colorClasses[color],
        className
      )}
    >
      {children}
    </Component>
  );
};

