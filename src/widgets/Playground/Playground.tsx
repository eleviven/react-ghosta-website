import React, { Fragment } from "react";
import { Ghosta, ghosta } from "react-ghosta";
import { Button, GradientBox } from "@site/src/components";

const Playground: React.FC = () => {
  const handleShowAlert = () => {
    ghosta.fire({
      title: "Tada! 🎉",
      description: "Easy to use and customize",
    });
  };

  return (
    <Fragment>
      <GradientBox>
        <Button onClick={handleShowAlert}>Click to Show Alert</Button>
      </GradientBox>

      <Ghosta />
    </Fragment>
  );
};

export default Playground;
