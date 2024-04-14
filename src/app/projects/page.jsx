import React from "react";
import Card from "../components/Card";
import { projectsData } from "../components/jsonData";

function projects() {
  return (
    <div className="text-white sm:px-16 px-3 sm:py-24 py-16">
      <section id="projects">
        <h2 className="text-center text-4xl font-semibold text-[#c9f31d] mt-4 mb-8 md:mb-10">
          My Projects
        </h2>
        <Card projectsData={projectsData} />
      </section>
    </div>
  );
}

export default projects;
