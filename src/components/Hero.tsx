import Image from "next/image";
import Link from "next/link";
import React from "react";
import { Cursor, useTypewriter } from "react-simple-typewriter";
import BackgroundCircles from "./BackgroundCircles";

type Props = {};

const Hero = (props: Props) => {
  const [text, count] = useTypewriter({
    words: [
      "Hi, I'm Chinmaya Bisoi",
      "I-love-Coffee.tsx",
      "<ButLoveToCodeMore />",
    ],
    loop: true,
    delaySpeed: 2000,
  });
  return (
    <div className="h-screen cursor-default px-4 flex flex-col items-center justify-center gap-y-4 text-center overflow-hidden">
      <BackgroundCircles />
      <div className="flex flex-col items-center justify-center z-10 gap-y-8 -mt-20">
        <Image
          src="/portfolio/chinu-new.png"
          height={128}
          width={128}
          alt="Profile Pic"
          className="object-center object-fill rounded-full"
        />
        <h2 className="uppercase text-neutral-400 hover:text-brand md:tracking-[12px] text-center font-semibold tracking-[8px]">
          Software Engineer
        </h2>
        <h1 className="md:text-4xl text-2xl">
          <span>{text}</span>
          <Cursor cursorColor="text-brand" />
        </h1>
        <div className="flex items-center justify-center gap-x-6 text-sm">
          <Link href={"#about"}>
            <div className="heroBtn">About</div>
          </Link>
          <Link href={"#experience"}>
            <div className="heroBtn">Experience</div>
          </Link>
          <Link href={"#skills"}>
            <div className="heroBtn">Skills</div>
          </Link>
          <Link href={"#projects"}>
            <div className="heroBtn">Projects</div>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Hero;
