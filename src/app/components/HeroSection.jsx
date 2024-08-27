"use client";
import React from "react";
import Image from "next/image";
import { TypeAnimation } from "react-type-animation";
import { motion } from "framer-motion";
import Link from "next/link";
import { Icon } from "@iconify/react";

const HeroSection = () => {
  return (
    <section className="lg:py-5 px-5">
      <div className="grid grid-cols-1 sm:grid-cols-12">
        <motion.div
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          className="col-span-8 place-self-center text-center sm:text-left justify-self-start">
          <h1 className="text-white mb-4 text-4xl sm:text-5xl lg:text-5xl lg:leading-normal font-semibold">
            <span className=" text-[#c9f31d]">Hello, I&apos;m </span>
            <br></br>
            <TypeAnimation
              sequence={[
                "Muhammad Ali Awan",
                1000,
                "Full MERN Stack Developer",
                1000,
                // "Mobile Developer",
                // 1000,
                // "UI/UX Designer",
                // 1000,
              ]}
              wrapper="span"
              speed={50}
              repeat={Infinity}
            />
          </h1>
          <p className="text-[#ADB7BE] text-base sm:text-lg mb-6 lg:text-xl  sm:w-[70%] w-full">
            "Crafting digital solutions from concept to deployment, I am a
            dedicated full-stack developer with a passion for innovation"
          </p>
          <div>
            <Link
              href="/contact-me"
              className="inline-block py-3 w-full sm:w-fit font-bold rounded-xl px-10 mr-4 bg-[#c9f31d] text-black">
              Hire Me
            </Link>
            {/* <Link
              target="_blank"
              href="/new resume.pdf"
              className="px-1 inline-block transition bg-[#121212] py-1 w-full sm:w-fit rounded-xl border-[#c9f31d] border font-bold hover:bg-[#c9f31d] hover:text-black  text-white mt-3">
              <span className="block   rounded-xl px-5 py-2">Download CV</span>
            </Link> */}
          </div>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          className="col-span-4 place-self-center mt-4 lg:mt-0">
          <Image
            src="/images/circle.png"
            alt="hero image"
            className=""
            width={400}
            height={400}
          />
          {/* <div className="rounded-full flex justify-center items-center bg-[#181818] w-[250px] h-[250px] lg:w-[400px] lg:h-[400px] relative">
            <Image
              src="/images/circle.png"
              alt="hero image"
              className="absolute transform -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2"
              width={300}
              height={250}
            />
          </div> */}
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;
