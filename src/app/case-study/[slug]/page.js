"use client";
import { caseStudies } from "@/app/components/jsonData";
import { useParams } from "next/navigation";
import React from "react";

function page() {
  const { slug } = useParams();
  const caseStudyData = caseStudies.find((study) => study.name === slug);

  if (!caseStudyData) {
    return (
      <div className="p-16 text-white text-xl h-screen flex justify-center items-center">
        Case study not found!
      </div>
    );
  }

  return (
    <div className="p-16 text-white">
      <div className="py-6 ">
        {caseStudyData.picture.map((val, index) => (
          <img
            key={index}
            src={val}
            alt="case study"
            className="w-[70%] mx-auto"
          />
        ))}
      </div>
    </div>
  );
}

export default page;
