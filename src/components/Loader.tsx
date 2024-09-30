import { cn } from "@/lib";
import { Loader2 } from "lucide-react";

type Props = {
  className?: string;
  size?: number;
};

/**
 * 旋轉的 Loader
 */
export const Loader = ({ className, size = 20 }: Props) => {
  return (
    <Loader2 className={cn("animate-spin mx-auto", className)} size={size} />
  );
};
