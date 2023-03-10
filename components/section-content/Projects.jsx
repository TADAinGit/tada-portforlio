"use client";
import React, { useEffect, useState } from "react";
import { HyperCard } from "..";

const Projects = () => {
  const [showProjectDetail, setShowProjectDetail] = useState(false);

  return (
    <section
      id="projects"
      className="flex items-center justify-center my-16 py-10"
    >
      <div className="w-full h-screen flex justify-center items-center mt-16 pb-14">
        <div
          className={`w-full h-full transition-all duration-500 ${
            showProjectDetail ? "md:w-[65%] w-0" : "w-full"
          }`}
        >
          <div className="w-full h-full flex items-center justify-center bg-[#ffffff]">
            <div
              id="cards"
              className="h-full grid grid-cols-1 md:grid-cols-2 gap-5 overflow-y-scroll px-4 my-10"
            >
              {[...Array(6)].map((_, i) => (
                <HyperCard
                  onClick={() => {
                    setShowProjectDetail(true);
                  }}
                  key={i}
                >
                  hello
                </HyperCard>
              ))}
            </div>
          </div>
        </div>
        <div
          className={`h-screen bg-blue-500 transition-all duration-500 ${
            showProjectDetail
              ? "md:w-[35%] w-full opacity-100"
              : "w-0 opacity-0"
          }`}
        >
          <button
            type="button"
            onClick={() => {
              setShowProjectDetail(false);
            }}
          >
            back
          </button>
        </div>
      </div>
    </section>
  );
};

export default Projects;
