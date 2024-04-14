"use client";
import React from "react";
import Link from "next/link";
import Card from "./Card";
import { Icon } from "@iconify/react";
import { projectsData } from "./jsonData";

const ProjectsSection = () => {
  const filter = projectsData.slice(0, 6);
  return (
    <section id="projects">
      <h2 className="text-center text-4xl font-semibold text-[#c9f31d] mt-4 mb-8 md:mb-10">
        My Projects
      </h2>
      <Card projectsData={filter} />
      <div className="flex justify-end my-7 pr-3">
        <Link
          href="/projects"
          className="relative inline-flex items-center justify-start py-3 pl-4 pr-12 overflow-hidden font-semibold text-[#c9f31d] border border-[#c9f31d] transition-all duration-150 ease-in-out rounded hover:pl-10 hover:pr-6 bg-[#181818] group">
          <span className="absolute bottom-0 left-0 w-full h-1 transition-all duration-150 ease-in-out bg-[#c9f31d] group-hover:h-full"></span>
          <span class="absolute right-0 pr-4 duration-200 ease-out group-hover:translate-x-12">
            <Icon
              icon="ph:arrow-right"
              className="text-2xl mt-2 text-[#c9f31d]"
            />
          </span>
          <span className="absolute left-0 pl-2.5 -translate-x-12 group-hover:translate-x-0 ease-out duration-200">
            <Icon
              icon="lucide:arrow-left"
              className="text-2xl mt-2 text-black"
            />
          </span>
          <span className="relative w-full text-left transition-colors duration-200 ease-in-out group-hover:text-black">
            View more
          </span>
        </Link>
      </div>
    </section>
  );
};

export default ProjectsSection;
