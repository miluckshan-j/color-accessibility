import React from "react";

type Props = {
  children?: React.ReactNode;
  classes?: string;
};

const Card = ({ children, classes }: Props) => {
  return (
    <div
      className={`bg-white border border-slate-200 rounded-lg p-4 ${classes}`}
    >
      {children}
    </div>
  );
};

export default Card;
