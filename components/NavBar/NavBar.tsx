import Link from "next/link";
import React from "react";
import { useRouter } from "next/router";

const NavBar = () => {
  const linkButtonClasses = "content-center lg:px-4 h-[2rem] rounded-full";

  const router = useRouter();
  const currentRoute = router.pathname;
  return (
    <>
      <div className="lg:flex h-[16vh] lg:h-[10vh] lg:pt-6 px-8 pt-8">
        {/* Mobile Layout*/}
        <h1 className="flex justify-between">
          <div className="lg:hidden h-[8vh] text-slate-50 text-xl font-Logo">
            <Link href="/about">JUAN DRADA</Link>
          </div>
          <button className="lg:hidden px-4 h-[8vh] text-slate-50 text font-Logo bg-[#402166] rounded-full">
            <Link href="/about">Galeries</Link>
          </button>
        </h1>

        {/* Desktop Layout*/}
        <h1 className="hidden lg:block lg:flex-none text-slate-50 text-xl font-Logo ">
          <Link href="/">🚀 JUAN DRADA</Link>
        </h1>

        <button className="hidden lg:block lg:flex:none lg:order-last text-slate-50 font-Logo bg-[#402166] px-6 h-10 rounded-full">
          <Link href="/contact">Contact</Link>
        </button>

        {/* Navigation */}
        <div className="flex justify-between lg:grow h-[8vh] lg:justify-center text-slate-50 lg:gap-x-20 font-Logo">
          <button className={linkButtonClasses}>
            <Link href="/about">Resume</Link>
          </button>
          <button className={linkButtonClasses}>
            <Link href="/about">Galeries</Link>
          </button>
          <button className={linkButtonClasses}>
            <Link href="/about">Certificate</Link>
          </button>
          <button className={linkButtonClasses}>
            <Link href="/">Home</Link>
          </button>
        </div>
      </div>
    </>
  );
};

export default NavBar;
