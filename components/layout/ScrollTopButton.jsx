"use client";
import React, { useState, useEffect } from "react";
import { IoIosArrowUp } from "react-icons/io";

const ScrollTopButton = () => {
  const [showButton, setShowButton] = useState(false);

  // Xử lý sự kiện scroll
  useEffect(() => {
    const handleScroll = () => {
      setShowButton(window.scrollY > 100);
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const handleClick = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };
  return (
    <>
      <button
        type="button"
        onClick={handleClick}
        className={`fixed bottom-5 right-5 bg-[#141414]  p-4 rounded-full ${
          showButton ? "opacity-100" : "opacity-0 cursor-default"
        } transition-all duration-200 shadow-lg hover:rotate-[360deg] hover:duration-700`}
      >
        <span className="text-2xl font-bold text-[#2A9F9B]">
          <IoIosArrowUp />
        </span>
      </button>
    </>
  );
};

export default ScrollTopButton;
