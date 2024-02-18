import React from "react";
import * as Component from "@site/src/components";
import * as ReactGhosta from "react-ghosta";

const Button = ({ showGradientBorder, ...props }) => {
  return !showGradientBorder ? (
    <Component.Button {...props} />
  ) : (
    <Component.GradientBox>
      <Component.Button {...props} />
    </Component.GradientBox>
  );
};

// Add react-live imports you need here
const ReactLiveScope = {
  React,
  ...React,
  ...ReactGhosta,
  ...Component,
  Button,
};

export default ReactLiveScope;
