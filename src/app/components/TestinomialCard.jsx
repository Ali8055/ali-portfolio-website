import React from "react";

function TestinomialCard({ testinimial }) {
  return (
    <div className="border border-[#c9f31d] relative rounded-xl flex justify-center cursor-pointer text-white p-6 transition-transform duration-300 hover:scale-105  ">
      <div
        style={{ boxShadow: "inset 0 0 15px 5px #c9f31d", background: "black" }}
        className="rounded-full inline-flex border border-[#c9f31d] absolute -top-10 
                shadow-[inset_0_0_15px_5px_#c9f31d]">
        {/* <img
          style={{
            boxShadow: "inset 0 0 15px 5px #c9f31d",
          }}
          src={testinimial.picture}
          alt="pic"
          className="h-20 w-20 rounded-full"
        /> */}
      </div>

      <div className="mt-2 text-center">
        <img
          style={{
            boxShadow: "inset 0 0 15px 5px #c9f31d",
          }}
          src={testinimial.picture}
          alt="pic"
          className="h-20 w-20 rounded-full mx-auto mb-3"
        />
        <p className="mb-2">"{testinimial.description}"</p>
        <span className="text-xl text-center text-[#c9f31d]">
          {testinimial.name}
        </span>
        {/* <span className="px-1 text-center text-sm ">{testinimial.company}</span> */}
      </div>
    </div>
  );
}

export default TestinomialCard;
