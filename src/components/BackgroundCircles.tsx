import React from "react";

type Props = {};

const BackgroundCircles = (props: Props) => {
  return (
    <div className="relative flex items-center justify-center mt-32 z-0">
      <div className="absolute border border-[#333333] h-[150px] w-[150px] rounded-full animate-ping" />
      {/* <div className="absolute border border-[#333333] h-[200px] w-[200px] rounded-full" /> */}
      <div className="absolute border border-[#333333] h-[280px] w-[280px] rounded-full" />
      <div className="absolute border border-brand h-[430px] w-[430px] rounded-full  opacity-20 animate-pulse" />
      <div className="absolute border border-[#333333] h-[560px] w-[560px] rounded-full" />
    </div>
  );
};

export default BackgroundCircles;
