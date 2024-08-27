import React from "react";

function ServicesCard({ service }) {
  return (
    <div className="border border-[#c9f31d] rounded-xl cursor-pointer text-white p-6 transition-transform duration-300 hover:scale-105  ">
      <h1 className="text-center text-[#c9f31d] text-xl  transition-colors duration-300">
        {service.name}
      </h1>
      <p className="text-center mt-2 transition-colors duration-300">
        {service.description}
      </p>
    </div>
  );
}

export default ServicesCard;
