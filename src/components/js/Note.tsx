import React from "react";

type Props = any;

const Note = ({ children }: Props) => {
  return (
    <p className="bg-bg-primary-200 px-3 py-1 rounded-md mr-auto">
      <span className="font-bold whitespace-nowrap pr-2">Note : </span>
      {children}
    </p>
  );
};

export default Note;
