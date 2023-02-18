import Header from "@/components/Header";
import Note from "@/components/js/Note";
import Link from "next/link";
import React, { useRef } from "react";
import { SocialIcon } from "react-social-icons";

type Props = {};
const tableContents = [
  { title: "Strings", url: "/js/strings" },
  { title: "Arrays", url: "/js/arrays" },
];
const Index = (props: Props) => {
  return (
    <div className="bg-bg-primary relative text-white">
      <Header />
      <div className="bg-bg-primary px-4 min-h-screen text-white">
        <div className="max-w-5xl mx-auto">
          <div className="pt-10 pb-7 grid md:grid-cols-4 grid-cols-1 gap-4">
            <div className="md:col-span-3">
              <h1 className="text-3xl">
                Javascript, like you have never known before
              </h1>
              <p className="text-justify">
                How it's done now. From the basics to advanced topics with
                simple, but detailed explanations.
              </p>
            </div>
            <div className="place-self-end">
              <div className="border border-neutral-700 bg-bg-primary-400 hover:bg-bg-primary-200 rounded-lg pl-5 pr-3 flex items-center">
                <span className="text-red-600">Share :</span>
                <SocialIcon
                  url="https://twitter.com/intent/tweet?url=https%3A%2F%2Flocalhost:3000%2F"
                  bgColor="transparent"
                  fgColor="#e47a6a"
                  className="max-w-[36px] max-h-[36px]"
                />
              </div>
            </div>
          </div>
          <div className="">
            <Note>
              This guide was created to prepare for interviews by laying a
              strong foundation
            </Note>
            <h2 className="mt-6 text-2xl font-robotoCon">Table of contents</h2>
            <ol className="mt-1 flex flex-col gap-y-1">
              {tableContents.map((item, index) => {
                return (
                  <Link href={item.url} className="w-fit px-2 hover:text-brand">
                    <li className="">
                      <span className="font-semibold mr-2">{index + 1}.</span>
                      {item.title}
                    </li>
                  </Link>
                );
              })}
            </ol>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Index;
