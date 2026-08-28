import * as React from "react";

type ButtonVariant = "primary" | "outline" | "ghost";
type ButtonSize = "default" | "lg" | "icon";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: ButtonVariant;
  size?: ButtonSize;
  asChild?: boolean;
}

const baseStyles =
  "inline-flex items-center justify-center font-bold uppercase tracking-widest text-sm transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2 focus-visible:ring-offset-background disabled:pointer-events-none disabled:opacity-50 min-h-[44px] select-none";

const variants: Record<ButtonVariant, string> = {
  primary:
    "bg-accent text-accent-foreground border-2 border-accent hover:scale-[1.02] active:scale-[0.98] h-14 px-8",
  outline:
    "bg-transparent text-foreground border-2 border-border hover:bg-foreground hover:text-background hover:border-foreground h-14 px-8",
  ghost:
    "bg-transparent text-foreground border-2 border-transparent hover:bg-accent hover:text-accent-foreground hover:border-accent h-14 px-8",
};

const sizes: Record<ButtonSize, string> = {
  default: "",
  lg: "h-14 px-10 text-base",
  icon: "h-14 w-14 p-0",
};

export function Button({
  variant = "primary",
  size = "default",
  className = "",
  children,
  ...props
}: ButtonProps) {
  return (
    <button
      className={`${baseStyles} ${variants[variant]} ${sizes[size]} ${className}`}
      {...props}
    >
      {children}
    </button>
  );
}

export function LinkButton({
  href,
  variant = "primary",
  size = "default",
  className = "",
  children,
  ...props
}: Omit<React.AnchorHTMLAttributes<HTMLAnchorElement>, "href"> & {
  href: string;
  variant?: ButtonVariant;
  size?: ButtonSize;
}) {
  const isExternal = href.startsWith("http");
  return (
    <a
      href={href}
      target={isExternal ? "_blank" : undefined}
      rel={isExternal ? "noopener noreferrer" : undefined}
      className={`${baseStyles} ${variants[variant]} ${sizes[size]} ${className}`}
      {...props}
    >
      {children}
    </a>
  );
}
