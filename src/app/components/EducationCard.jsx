"use client";
import { Icon } from "@iconify/react";
import React from "react";

function EducationCard({ data }) {
  return (
    <div className="edu-card p-8 rounded-lg border border-[#c9f31d] ">
      <p className="text-2xl small-text">{data.degree}</p>
      <div className="text-xl flex items-center gap-4 my-2 text-white/70">
        <Icon icon="fa-solid:university" />
        <p>{data.institute}</p>
      </div>
      <div className="text-xl flex items-center gap-4 my-2 text-white/70">
        <Icon icon="uis:calender" />
        <p>{data.year}</p>
      </div>
    </div>
  );
}

export default EducationCard;
