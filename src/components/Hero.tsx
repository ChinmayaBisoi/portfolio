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
    <div className="h-screen flex flex-col items-center justify-center gap-y-8 text-center overflow-hidden">
      <BackgroundCircles />
      <h1 className="text-2xl z-10">
        <span>{text}</span>
        <Cursor cursorColor="brand" />
      </h1>
    </div>
  );
};

export default Hero;
