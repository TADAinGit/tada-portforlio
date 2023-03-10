import Image from "next/image";
import React from "react";

const About = () => {
  return (
    <section
      id="about"
      className="h-screen flex items-start justify-center py-20"
    >
      <div className="flex flex-col w-full justify-center items-center py-5 gap-5">
        <h1 className="text-4xl font-bold text-[#2A9B9F]">About me</h1>

        <div className="flex h-full w-full">
          <Image
            src={"/images/sadcat.jpg"}
            alt="My image"
            width={400}
            height={500}
          />
          <div className="flex flex-col w-[50%] gap-2 items-center justify-center font-mono text-lg text-justify indent-10 tracking-tight">
            <p>
              Hi! I am fourth-year student majoring in Software engineering at
              Ton Duc Thang University. I&apos;m passionate about using
              technology to make a positive impact on people&apos;s lives.
            </p>
            <p>
              Web development has always been my favorite area of Software
              engineering, and I love the creative aspect of designing and
              developing interactive websites. My dream is to work as a
              full-stack web developer for a top tech company, creating
              innovative user interfaces and robust backend systems.
            </p>
            <p>
              Aside from coding, I&apos;m really love playing sports, especially
              intellectual sports and e-sports. I find that sports help me stay
              active and focused, which helps me be more productive in my
              studies and coding projects. I also enjoy going out with friends
              to try new foods and explore the city.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
