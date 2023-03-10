"use client";
import { template } from "@/constants";
import Link from "next/link";
import React, { useState, useEffect } from "react";
import { HyperText } from "..";
import { HiMenu } from "react-icons/hi";

const Header = () => {
  const [headerColor, setHeaderColor] = useState("bg-inherit");
  useEffect(() => {
    const handleScroll = () => {
      setHeaderColor(
        document.documentElement.scrollTop + 80 >=
          document.querySelector("#about").offsetTop
          ? "bg-[#141414]"
          : "bg-inherit"
      );

      localStorage.setItem(
        "headerBackgroundColor",
        document.documentElement.scrollTop + 80 >=
          document.querySelector("#about").offsetTop
          ? "bg-[#141414]"
          : "bg-inherit"
      );
    };

    const savedHeaderColor = localStorage.getItem("headerBackgroundColor");
    if (savedHeaderColor) {
      setHeaderColor(savedHeaderColor);
    }

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  return (
    <header
      id="header"
      className={`flex flex-col justify-center w-full fixed top-0 transition-all duration-200 ${headerColor} backdrop-blur shadow z-50`}
    >
      <nav className="flex items-center justify-between gap-2 px-4 space-y-2 my-4">
        <div className="font-jersey-sharp text-3xl">
          <Link href={"/"}>
            <HyperText
              text={"TADA"}
              rate={10}
              delay={28}
              className="text-[#2A9F9B]"
            />
          </Link>
        </div>
        <div className="hidden sm:flex gap-4">
          {template.map((info, i) => (
            <a key={i} href={`/#${info.ref}`}>
              <button className="md border-2 px-4 py-1 font-semibold text-sm text-white hover:bg-white hover:text-[#2A9F9B] transition-all duration-200">
                {info.title}
              </button>
            </a>
          ))}
          <button
            onClick={() => {
              console.log(
                document.querySelector("#about").offsetTop,
                document.documentElement.scrollTop
              );
            }}
            type="button"
            className="md border-2 px-4 py-1 font-semibold text-sm text-[#2A9F9B]"
          >
            Language
          </button>
          <div className="h-auto border-2"></div>
          <button
            onClick={() => {
              console.log(document.documentElement.scrollTop);
            }}
            type="button"
            className="bg-[#2A9F9B] border-2 px-4 py-1 font-semibold text-sm text-white italic"
          >
            Resume
          </button>
        </div>
        <div className="sm:hidden">
          <button type="button" className="cursor-pointer">
            <span className="font-bold text-3xl text-white">
              <HiMenu />
            </span>
          </button>
        </div>
      </nav>
    </header>
  );
};

export default Header;
