import Image from "next/image";
import React from "react";

type Props = {};

const About = (props: Props) => {
  return (
    <div className="h-screen flex flex-col items-center justify-center">
      <h2 className="font-nunito text-4xl flex flex-col items-center gap-y-1 tracking-[4px]">
        <p>ABOUT</p>
        <span className="w-20 border border-white"></span>
      </h2>
      <div className="px-4 max-w-5xl md:mx-auto flex items-center gap-x-10 my-20">
        <Image
          alt=""
          src="/portfolio/astro.svg"
          width={300}
          height={300}
          className="rounded-full"
        />
        <div className="flex flex-col gap-y-8">
          <p className="text-2xl flex flex-col">
            <span>Hello.</span>
            <span className="">
              I'm{" "}
              <span className="text-brand font-montserrat font-semibold">
                Chinmaya
              </span>
              , Nice to meet you!
            </span>
          </p>
          <p className="text-justify text-xl">
            I'm a{" "}
            <span className="text-cyan capitalize text-2xl">
              frontend developer
            </span>{" "}
            established in Bangalore. Since the beginning of my professional
            journey from Jan,22, I have dedicated myself to code beautifull User
            Interfaces and{" "}
            <span className="text-brand text-2xl">
              I love what I do and get things done, no matter the problem.
            </span>{" "}
            <span className="text-cyan text-2xl">
              React is my first love, but I also know Svelte
            </span>
            . I'm always excited to learn new technologies and explore different
            ways of doing things.
          </p>
        </div>
      </div>
    </div>
  );
};

export default About;
