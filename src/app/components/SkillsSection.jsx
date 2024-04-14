"use client";
import React from "react";
import { Icon } from "@iconify/react";

function SkillsSection() {
  const texts = [
    { name: "REACT JS", icon: "vscode-icons:file-type-reactjs" },
    { name: "NEXT JS", icon: "teenyicons:nextjs-solid" },
    { name: "REDUX TOOLKIT", icon: "skill-icons:redux" },
    { name: "TAILWIND CSS", icon: "logos:tailwindcss-icon" },
    { name: "EXPRESS JS", icon: "skill-icons:expressjs-dark" },
    { name: "NODE JS", icon: "logos:nodejs-icon" },
    { name: "MONGO DB", icon: "devicon:mongodb" },
    { name: "GITHUB", icon: "pajamas:github" },
    { name: "FIGMA", icon: "logos:figma" },
    { name: "ADOBE ILLUSTRATOR", icon: "logos:adobe-illustrator" },
    { name: "SKILLS", icon: "skill-icons:wordpress" },
  ];

  const duplicatedTexts = [...texts, ...texts, ...texts];
  return (
    <div className="py-10 px-4">
      <p className="py-5 text-4xl font-semibold text-[#c9f31d]">Skills</p>
      <div className="banner-container  flex px-4 py-5 text-white w-full overflow-hidden banner">
        <div className="banner-animation inline-flex gap-5">
          {duplicatedTexts.map((text, index) => (
            <span
              key={index}
              className=" text-xl flex flex-col justify-center gap-2 items-center  p-5 rounded-lg text-white ">
              <p className="text-white text-center">
                <Icon icon={text.icon} className="text-3xl text-white" />
              </p>
              {text.name}
            </span>
          ))}
        </div>
        <div className="banner-animation inline-flex gap-5">
          {duplicatedTexts.map((text, index) => (
            <span
              key={index}
              className=" text-xl flex flex-col justify-center items-center gap-2  p-5 rounded-lg text-white ">
              <p className="text-white text-center">
                <Icon icon={text.icon} className="text-3xl text-white" />
              </p>
              {text.name}
            </span>
          ))}
        </div>

        {/* </marquee> */}
      </div>
    </div>
  );
}

export default SkillsSection;
