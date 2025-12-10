import React from "react";
import clsx from "clsx";

type ButtonProps = {
  label: string;
  href: string;
  variant?: "solid" | "ghost";
  size?: "sm" | "md" | "lg";
  targetBlank?: boolean;
};

const Button: React.FC<ButtonProps> = ({
  label,
  href,
  variant = "solid",
  size = "md",
  targetBlank = false
}) => {
  const baseStyles =
    "inline-flex items-center justify-center rounded-full font-semibold transition-all duration-200 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent-500";

  const variants = {
    solid:
      "bg-accent-500 text-white hover:bg-accent-600 shadow-md hover:shadow-lg",
    ghost:
      "border border-brand-200 text-brand-800 hover:border-brand-400 hover:shadow-md bg-white/80"
  };

  const sizes = {
    sm: "px-4 py-2 text-sm",
    md: "px-6 py-3 text-sm sm:text-base",
    lg: "px-8 py-3.5 text-base sm:text-lg"
  };

  return (
    <a
      href={href}
      target={targetBlank ? "_blank" : undefined}
      rel={targetBlank ? "noreferrer" : undefined}
      className={clsx(baseStyles, variants[variant], sizes[size])}
    >
      {label}
    </a>
  );
};

export default Button;
