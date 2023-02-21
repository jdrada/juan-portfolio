import Link from "next/link";
import React from "react";
import { useRouter } from "next/router";

const NavBar = () => {
  const router = useRouter();
  const currentRoute = router.pathname;
  return (
    <>
      <div className="flex w-full h-[10vh]">
        <h1 className="basis-1/4 font-Logo text-slate-50 text-2xl drop-shadow-lg justify-self-center">
          🚀 JUAN DRADA
        </h1>
        <div className="flex basis-3/4 flex-row-reverse lg:gap-x-20 pr-20 font-xl font-alata">
          <button>
            <Link
              className={
                currentRoute === "/some-path"
                  ? "text-slate-50"
                  : "text-slate-100"
              }
              href="/about"
            >
              Resume
            </Link>
          </button>
          <button>
            <Link
              className={
                currentRoute === "/some-path"
                  ? "text-slate-50"
                  : "text-slate-100"
              }
              href="/about"
            >
              Galeries
            </Link>
          </button>
          <button>
            <Link
              className={
                currentRoute === "/some-path"
                  ? "text-slate-50"
                  : "text-slate-100"
              }
              href="/about"
            >
              Certificate
            </Link>
          </button>
          <button>
            <Link
              className={
                currentRoute === "/some-path"
                  ? "text-slate-50"
                  : "text-slate-100"
              }
              href="/"
            >
              Home
            </Link>
          </button>
        </div>
      </div>
    </>
  );
};

export default NavBar;
