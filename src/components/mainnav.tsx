"use client";

import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";
import Link from "next/link";

export function MainNav({
  className,
  ...props
}: React.HTMLAttributes<HTMLElement>) {
  const pathName = usePathname();

  const routes = [
    {
      href: "/settings",
      label: "Settings",
      active: pathName === `/settings`,
    },
  ];

  return (
    <div className={cn("flex items-center space-x-4 lg:space-x-6")}>
      {routes.map((item, key) => (
        <Link
          key={key}
          href={item.href}
          className={cn(
            "text-sm font-medium transition-colors hover:text-primary",
            item.active ? "text-black dark:text-white" : "text-muted-foreground"
          )}
        >
          {item.label}
        </Link>
      ))}
    </div>
  );
}