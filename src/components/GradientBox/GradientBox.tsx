import React from "react";

export type GradientBoxProps = React.ComponentProps<"button"> & {};

const GradientBox: React.FC<GradientBoxProps> = ({ children, ...props }) => {
  return (
    <div
      className="inline-flex rounded-lg bg-gradient-to-r from-pink-500 via-red-500 to-yellow-500 p-0.5"
      {...props}
    >
      {children}
    </div>
  );
};

export default GradientBox;
