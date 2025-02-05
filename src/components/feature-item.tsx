import { cn } from "@/lib/utils";
import { LucideProps } from "lucide-react";

interface FeatureItemProps {
  title: string;
  description: string;
  icon: React.ForwardRefExoticComponent<
    Omit<LucideProps, "ref"> & React.RefAttributes<SVGSVGElement>
  >;
  className?: string;
}

export function FeatureItem({ title, description, icon: Icon, className }: FeatureItemProps) {
  return (
    <div className={cn("flex items-center gap-4", className)}>
      <div className="shrink-0 size-16 flex items-center justify-center rounded-2xl bg-gradient-to-b from-primary/25 to-primary/0 text-secondary">
        <Icon size={29} />
      </div>
      <div className="flex flex-col gap-2">
        <h3 className="font-bold">{title}</h3>
        <p className="text-muted-foreground text-balance">{description}</p>
      </div>
    </div>
  );
}
