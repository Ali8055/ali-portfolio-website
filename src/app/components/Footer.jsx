"use client";
import { Icon } from "@iconify/react";
import Link from "next/link";
import React from "react";

const Footer = ({ font }) => {
  return (
    <footer className="footer border z-10 border-t-[#33353F] border-l-transparent border-r-transparent text-white">
      <div className="container p-12 flex sm:flex-nowrap flex-wrap justify-between">
        <span className={` text-[#c9f31d] sm:mb-0 mb-4  text-4xl`}>
          Muhammad Ali Awan
        </span>
        <div className="">
          <p>
            Feel free to reach out if you have a project in mind or just want to
            connect!
          </p>
          <p className="text-[#c9f31d] py-3 text-center cursor-pointer underline">
            muhammadaliawan8055@gmail.com
          </p>
          <div className="flex gap-4 justify-center">
            <Link
              target="_blank"
              href="https://github.com/lintakhan"
              className="h-16 w-16  flex border border-[#c9f31d] items-center justify-center rounded-full shadow-2xl bg-[#181818] cursor-pointer hover:transform hover:scale-110 hover:transition-transform">
              <Icon icon="pajamas:github" className="text-4xl" />
            </Link>
            <Link
              target="_blank"
              href="https://www.linkedin.com/in/linta-khan-490547216/"
              className="h-16 w-16  flex border border-[#c9f31d] items-center justify-center rounded-full shadow-2xl bg-[#181818] cursor-pointer hover:transform hover:scale-110 hover:transition-transform">
              <Icon icon="skill-icons:linkedin" className="text-4xl" />
            </Link>
          </div>
        </div>
      </div>
      <p className="text-white/60 text-center py-4">
        © 2024 Muhammad Ali Awan | All Rights Reserved.
      </p>
    </footer>
  );
};

export default Footer;
