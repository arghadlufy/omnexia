import Link from "next/link";
import { cn } from "@/lib/utils";

interface LogoProps {
  className?: string;
  href?: string;
}

export function Logo({ className, href = "/" }: LogoProps) {
  return (
    <Link
      href={href}
      className={cn(
        "text-2xl font-bold text-foreground hover:text-primary transition-colors",
        className
      )}
      aria-label="Omnexia Home"
    >
      Omnexia
    </Link>
  );
}

