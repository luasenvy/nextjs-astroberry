"use client";

import classnames from "classnames";
import { usePathname } from "next/navigation";

import Avatar from "@/components/Avatar";
import ThemeToggle from "@/components/ThemeToggle";

export interface HeaderProps {
  className?: string;
}

export default function Header({ className }: HeaderProps) {
  const isHome = usePathname() === "/";

  return (
    <header
      className={classnames(
        "relative flex flex-row-reverse justify-between items-center",
        className
      )}
    >
      <ThemeToggle />
      {!isHome && <Avatar className="w-10 h-10 md:w-12 md:h-12" />}
    </header>
  );
}
