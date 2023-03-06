"use client";
import Link from "next/link";
import React from "react";
import { usePathname } from "next/navigation";

const NavButtons = () => {
  const currentPath = usePathname();
  const activeStyle =
    "content-center lg:px-4 h-[2rem] border-b-4 border-indigo-500";
  const inactiveStyle =
    "content-center lg:px-4 h-[2rem] hover:border-b-4 hover:border-indigo-500";

  return (
    <nav className="flex justify-between lg:grow lg:justify-center text-slate-50 lg:gap-x-20 font-Logo items-center">
      <Link
        className={currentPath === "/" ? activeStyle : inactiveStyle}
        href="/"
      >
        About
      </Link>
      <Link
        className={currentPath === "/experience" ? activeStyle : inactiveStyle}
        href="/experience"
      >
        Experience
      </Link>

      <Link
        className={currentPath === "/work" ? activeStyle : inactiveStyle}
        href="/work"
      >
        Work
      </Link>
      <Link
        className={currentPath === "/contact" ? activeStyle : inactiveStyle}
        href="/contact"
      >
        Contact
      </Link>
    </nav>
  );
};

export default NavButtons;
