import Image from "next/image";
import React from "react";

const About = () => {
  return (
    <section id="about" className="flex items-start justify-center py-20">
      <div className="flex flex-col w-full justify-center items-center py-5 gap-5">
        <h1 className="text-4xl font-bold text-[#2A9B9F]">About me</h1>

        <div className="flex h-full w-full">
          <Image
            src={"/images/IMG_5434.JPG"}
            alt="My image"
            width={400}
            height={500}
          />
          <p>
            I am fourth-year student majoring in Software engineering at Ton Duc
            Thang University
          </p>
        </div>
      </div>
    </section>
  );
};

export default About;
