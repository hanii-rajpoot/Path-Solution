import { cn } from "@/lib/cn";

type Props = { children: React.ReactNode; className?: string };

export function SectionLabel({ children, className }: Props) {
  return <p className={cn("section-label mb-4", className)}>{children}</p>;
}
