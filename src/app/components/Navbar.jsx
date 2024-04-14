"use client";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import NavLink from "./NavLink";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/solid";
import MenuOverlay from "./MenuOverlay";

const navLinks = [
  {
    title: "About me",
    path: "/",
  },
  {
    title: "Projects",
    path: "/projects",
  },
  {
    title: "Contact me",
    path: "/contact-me",
  },
];

const Navbar = ({ font }) => {
  const [navbarOpen, setNavbarOpen] = useState(false);
  const [scrolling, setScrolling] = useState(false);
  const [active, setActive] = useState("About me");

  const handleScroll = () => {
    if (window.scrollY > 0) {
      setScrolling(true);
    } else {
      setScrolling(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const handleActive = (val) => {
    setActive(val);
  };

  return (
    <nav
      className={`fixed z-20 mx-auto transition-all ${
        scrolling ? " transition bg-[#181818]" : ""
      } ${navbarOpen ? "bg-[#181818]" : ""}
      }  top-0 left-0 right-0 z-10  bg-opacity-100`}>
      <div className="flex container lg:py-4 flex-wrap items-center justify-between mx-auto px-4 py-2">
        <Link
          href={"/"}
          className={`text-2xl md:text-3xl text-white font-medium `}>
          Ali
        </Link>
        <div className="mobile-menu block md:hidden">
          {!navbarOpen ? (
            <button
              onClick={() => setNavbarOpen(true)}
              className="flex items-center px-3 py-2 border rounded border-slate-200 text-slate-200 hover:text-white hover:border-white">
              <Bars3Icon className="h-5 w-5" />
            </button>
          ) : (
            <button
              onClick={() => setNavbarOpen(false)}
              className="flex items-center px-3 py-2 border rounded border-slate-200 text-slate-200 hover:text-white hover:border-white">
              <XMarkIcon className="h-5 w-5" />
            </button>
          )}
        </div>
        <div className="menu hidden md:block md:w-auto" id="navbar">
          <ul className="flex p-4 md:p-0 md:flex-row md:space-x-8 mt-0">
            {navLinks.map((link, index) => (
              <li key={index}>
                <NavLink
                  href={link.path}
                  title={link.title}
                  onClick={handleActive}
                  active={active}
                />
              </li>
            ))}
          </ul>
        </div>
        <Link href="/contact-me">
          <div className="cursor-pointer hover:bg-[#121212] font-semibold hover:border hover:border-[#c9f31d] hover:text-white transition bg-[#c9f31d] py-1 rounded-lg text-black px-6">
            Hire me
          </div>
        </Link>
      </div>
      {navbarOpen ? (
        <MenuOverlay links={navLinks} onClick={handleActive} />
      ) : null}
    </nav>
  );
};

export default Navbar;
