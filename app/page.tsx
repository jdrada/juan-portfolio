import React from "react";
import SkillsIcon from "./components/skillsIcon.tsx/SkillsIcon";

const page = () => {
  return (
    <>
      <div className="flex lg:h-[90vh] w-fit pt-10 px-4 lg:px-20 items-center">
        <div className="p-4 rounded-2xl drop-shadow-xl bg-[#402166]/50 lg:bg-[#221A37]/0">
          <p className="text-indigo-500 text-xl">Front-End Developer</p>
          <h2 className="font-PageTitle font-bold text-slate-50 text-6xl">
            Juan C. Drada
          </h2>

          <p className="mt-5 text-xl font-PageTitle text-slate-200">
            I&apos;m a test driven developer with a passion for solving
            problems. Who loves writing clean, maintainable and scalable code,
            learning and implementing modern design patterns.
          </p>
          <p className="text-slate-300 text-xl mt-4">I usually work with:</p>
          <SkillsIcon />
        </div>
      </div>
    </>
  );
};

export default page;
