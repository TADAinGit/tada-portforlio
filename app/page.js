"use client";
import { template } from "@/constants";
import React, { useEffect, useCallback, useState } from "react";
import styles from "./page.module.css";
import particlesConfig from "@/config/particlesjs-config.json";
import Particles from "react-particles";
import { loadFull } from "tsparticles";
import { About, Contact, HyperText, Projects } from "@/components";

const Home = () => {
  useEffect(() => {
    const handleScroll = () => {
      // console.log(window.scrollY);
    };
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const particlesInit = useCallback(async (engine) => {
    await loadFull(engine);
  }, []);

  const particlesLoaded = useCallback(async (container) => {
    // await console.log(container);
  }, []);
  return (
    <main className="flex flex-col">
      <section
        id="head-section"
        className="h-screen flex flex-col items-start bg-white"
      >
        <div
          id="particle-container"
          className="w-full h-full flex flex-col items-center md:justify-center justify-center bg-[#141414]"
        >
          <div className="absolute bg-white aspect-square w-[520px] bottom-0 left-0 rounded-full"></div>
          <Particles
            id="tsparticles"
            className="h-full w-full absolute"
            init={particlesInit}
            // loaded={particlesLoaded}
            options={particlesConfig}
          />
          <h1 className="text-4xl text-left md:text-6xl font-bold font-mplus-code text-[#B8DDDF] ml-10 z-[1] leading-10 animate-fade-in w-[60%]">
            Hi! I am{" "}
            <a href="#about">
              <span className="text-[#2A9F9B]">TADA</span>
            </a>
            <br />I am intended to be a{" "}
            <HyperText
              className="bg-white text-[#2A9F9B] cursor-pointer"
              text="front-end"
              // toText="full-stack"
            />{" "}
            developer
          </h1>
        </div>
      </section>
      <About />
      <Projects />
      <Contact />
    </main>
  );
};

export default Home;
