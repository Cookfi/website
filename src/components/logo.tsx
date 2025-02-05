import { cn } from "@/lib/utils";
import Image from "next/image";
import Link from "next/link";

interface LogoProps {
  className?: string;
}

export function Logo({ className }: LogoProps) {
  return (
    <Link href="/" className={cn("flex items-center gap-3", className)}>
      <Image alt="Image" src="/images/cookai-robot.png" width={50} height={500} />
      <div className="text-2xl font-bold">
        <span className="font-heading text-2xl font-extrabold">CookFi</span>
      </div>
    </Link>
  );
}
