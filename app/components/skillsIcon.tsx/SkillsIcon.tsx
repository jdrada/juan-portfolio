import React from "react";
import Image from "next/image";
import JavaScript from "@/public/svg/javascript.svg";
import TypeScript from "@/public/svg/typescript.svg";
import Reactjs from "@/public/svg/reactjs.svg";
import Nextjs from "@/public/svg/nextjs.svg";
import Git from "@/public/svg/git.svg";
import Nodejs from "@/public/svg/nodejs.svg";

const SkillsIcon = () => {
  const Skills = [
    {
      name: "JavaScript",
      src: JavaScript,
      description:
        "JavaScript is a programming language that is widely used for developing web applications. It is used to create highly interactive user interfaces and applications.",
    },
    {
      name: "TypeScript",
      src: TypeScript,
      descripticTypeScripton: "",
    },
    {
      name: "React.js",
      src: Reactjs,
      descripticTypeScripton: "",
    },
    {
      name: "Next.js",
      src: Nextjs,
      descripticTypeScripton: "",
    },
    {
      name: "Git",
      src: Git,
      descripticTypeScripton: "",
    },
    {
      name: "Node.js",
      src: Nodejs,
      descripticTypeScripton: "",
    },
  ];
  return (
    <ul className="mt-6 mb-5 pb-4 gap-4 grid grid-cols-4 sm:grid-cols-6 drop-shadow h-fit ">
      {Skills.map((skill) => (
        <li
          key={skill.src}
          className="grid justify-items-center text-slate-300 text-sm"
        >
          <Image
            className="hover:scale-110 pb-2"
            src={skill.src}
            alt={skill.name}
            height={"45"}
            width={"45"}
          />
          <p>{skill.name}</p>
        </li>
      ))}
    </ul>
  );
};

export default SkillsIcon;
