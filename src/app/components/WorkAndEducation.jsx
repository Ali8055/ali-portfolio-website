"use client";
// import { Icon } from "@iconify-icon/react";
import { Icon } from "@iconify/react";
import React from "react";
import EducationCard from "./EducationCard";

function WorkAndEducation() {
  const education = [
    {
      degree: "BS (Bachelor's in Computer Science)",
      institute: "Arid Agriculture University",
      year: "2018 - 2022",
    },
    {
      degree: "ICS (Intermediate in Computer Science)",
      institute: "Punjab College of Commerce",
      year: "2016 - 2018",
    },
  ];

  const workDuties = [
    "developing intuitive and responsive user interface with Reactjs / Nextjs for an enhanced user experience",
    "Created RESTful API that allowed for seamless integration with other applications",
    "Managing data with MongoDB, optimizing application performance",
    "Developing server-side logic and APIs using Node js and Express js to handle data request and application functionality",
  ];
  return (
    <div className="text-white py-10 my-5 px-5">
      <h1 className="sm:text-4xl text-3xl text-[#c9f31d] font-semibold">
        Work & Education
      </h1>
      <div>
        <div className="flex  sm:gap-14 gap-9 mt-10 px-4">
          <div className="relative ">
            <div className="h-full bg-[#c9f31d]/50 w-[1px] rounded-full"></div>
            <div className=" absolute top-0 -left-[28px]   rounded-full">
              <div className=" bg-[#c9f31d] flex justify-center items-center rounded-full h-14 w-14 ">
                <Icon
                  icon="zondicons:education"
                  className="text-black text-4xl"
                />
              </div>
            </div>
          </div>
          <div>
            <p className="text-2xl py-3">Education</p>
            <div className="flex sm:flex-nowrap flex-wrap gap-10">
              {education.map((data, index) => (
                <EducationCard data={data} key={index} />
              ))}
            </div>
          </div>
        </div>
      </div>
      <div>
        <div className="flex sm:gap-14 gap-9 mt-10 px-4">
          <div className="relative ">
            <div className="h-full bg-[#c9f31d]/50 w-[1px] rounded-full"></div>
            <div className=" absolute top-0 -left-[28px]   rounded-full">
              <div className=" bg-[#c9f31d] flex justify-center items-center rounded-full h-14 w-14 ">
                <Icon icon="ic:round-work" className="text-black text-4xl" />
              </div>
            </div>
          </div>
          <div>
            <p className="text-2xl small-text py-3">Experience</p>
            <div className=" p-8 edu-card rounded-lg border sm:w-[50%] w-full border-[#c9f31d] ">
              <p className="text-2xl">
                MERN Stack Developer{" "}
                <span className="text-xl text-white/60">
                  - Texinity <br /> Technolgies
                </span>
              </p>
              <p className="py-2 text-[#c9f31d]">2022 - Present</p>
              {workDuties.map((val, index) => (
                <div className="flex gap-3 py-2" key={index}>
                  <Icon
                    icon="mdi:star-four-points-outline"
                    className="text-2xl text-[#c9f31d]"
                  />
                  <p className="">{val}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default WorkAndEducation;
