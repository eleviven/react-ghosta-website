import React from "react";

export type GradientBoxProps = React.ComponentProps<"div"> & {};

const GradientBox: React.FC<GradientBoxProps> = ({ children, ...props }) => {
  return (
    <div
      className="relative inline-flex rounded-lg p-[3px] [&>*]:relative overflow-hidden"
      {...props}
    >
      <div className="!absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 origin-center">
        <div
          className="bg-gradient-to-r from-yellow-500 via-red-500 to-blue-500 animate-spin w-[200px] h-[200px] rounded-full"
          style={{ animationDuration: "3s" }}
        />
      </div>
      {children}
    </div>
  );
};

export default GradientBox;
