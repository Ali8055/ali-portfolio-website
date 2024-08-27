"use client";
import { Icon } from "@iconify/react";
import React, { useEffect, useState, useRef } from "react";

function SplashScreen({ finishLoading, greatVibesFont }) {
  const [isMounted, setIsMounted] = useState(false);
  const lastElementRef = useRef(null);

  useEffect(() => {
    const timeout = setTimeout(() => setIsMounted(true), 9000);
    return () => clearTimeout(timeout);
  }, []);

  useEffect(() => {
    if (isMounted) {
      finishLoading();
      console.log("abc");
    }
  }, [isMounted, finishLoading]);

  console.log("is mounted", isMounted);

  return (
    <div className="flex  justify-center items-center h-screen">
      <div
        // isMounted={isMounted}
        // style={{ opacity: isMounted ? 1 : 0 }}
        className="relative mx-auto w-[900px] h-[200px] text-white overflow-hidden">
        <div className="carousel">
          <p className=" text-center sm:text-[40px] text-[25px] leading-[200px]">
            Hi!
          </p>
          <p className=" leading-[200px] sm:text-[40px] text-[25px] text-center">
            You are Welcomed
          </p>
          <p className=" sm:text-[40px] text-[20px] text-center leading-[200px]">
            ⁠Meet your go-to{" "}
            <span className="text-[#c9f31d]">
              Full Stack Software Developer
            </span>
          </p>
          <p className=" sm:text-[40px] text-[20px] text-center leading-[200px] flex justify-center items-center ">
            ⁠Let’s collaborate and transform your ideas…💡
          </p>

          <p
            className={` ${greatVibesFont.className} text-[#c9f31d]  text-center sm:text-[40px] text-[25px] leading-[200px]`}
            ref={lastElementRef}>
            ⁠Share your concerns, and let’s get started
          </p>
        </div>
      </div>
    </div>
  );
}

export default SplashScreen;
