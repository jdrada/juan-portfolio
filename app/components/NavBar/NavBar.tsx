import Link from "next/link";
import React from "react";
import NavButtons from "./NavButtons";

const NavBar = () => {
  return (
    <>
      <div className="lg:flex lg:h-[10vh] px-8 pt-8 items-center">
        {/* Mobile Layout*/}
        <div className="flex justify-between">
          <Link
            className="lg:hidden text-slate-50 text-xl font-Logo"
            href="/about"
          >
            JUAN DRADA
          </Link>

          <Link
            className="lg:hidden px-4 text-slate-50 text font-Logo bg-[#402166] rounded-full"
            href="/about"
          >
            Galeries
          </Link>
        </div>
        {/* Desktop Layout*/}\
        <Link
          className="hidden lg:block lg:flex-none text-slate-50 text-xl font-Logo "
          href="/"
        >
          🚀 JUAN DRADA
        </Link>
        \ \
        <Link
          className="hidden lg:block lg:flex:none lg:order-last text-slate-50 font-Logo bg-[#402166] hover:bg-indigo-500 px-6 py-3 rounded-full"
          href="/contact"
        >
          Download CV
        </Link>
        \{/* Navigation */}
        <NavButtons />
      </div>
    </>
  );
};

export default NavBar;
