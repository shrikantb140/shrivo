export function DecorativeNumber({
  number,
  className = "",
  size = "lg",
}: {
  number: string;
  className?: string;
  size?: "sm" | "md" | "lg" | "xl";
}) {
  const sizes = {
    sm: "text-[4rem] md:text-[5rem] leading-none",
    md: "text-[6rem] md:text-[8rem] leading-none",
    lg: "text-[8rem] md:text-[12rem] lg:text-[14rem] leading-[0.8]",
    xl: "text-[10rem] md:text-[16rem] lg:text-[20rem] leading-[0.8]",
  }[size];

  return (
    <span
      aria-hidden="true"
      className={`font-bold tracking-tighter text-muted/30 select-none pointer-events-none ${sizes} ${className}`}
    >
      {number}
    </span>
  );
}

export function SectionNumber({
  number,
  className = "",
}: {
  number: string;
  className?: string;
}) {
  return (
    <span
      aria-hidden="true"
      className={`absolute -top-6 -left-2 md:-top-10 md:left-0 text-[6rem] md:text-[8rem] lg:text-[10rem] font-bold leading-none tracking-tighter text-muted/20 select-none pointer-events-none ${className}`}
    >
      {number}
    </span>
  );
}
