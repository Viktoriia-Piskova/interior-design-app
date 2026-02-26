import { type ButtonHTMLAttributes } from "react";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "secondary" | "ghost" | "outline";
  size?: "sm" | "md" | "lg";
  fullWidth?: boolean;
}

export const Button = ({
  variant = "primary",
  size = "md",
  fullWidth = false,
  className = "",
  children,
  ...props
}: ButtonProps) => {
  const baseClass = "btn";
  const variantClass = `btn--${variant}`;
  const sizeClass = `btn--${size}`;
  const fullWidthClass = `btn--${fullWidth}`;

  const combinedClasses = [baseClass, variantClass, sizeClass, fullWidthClass]
    .filter(Boolean)
    .join(" ");
  return (
    <button className={combinedClasses} {...props}>
      {children}
    </button>
  );
};
