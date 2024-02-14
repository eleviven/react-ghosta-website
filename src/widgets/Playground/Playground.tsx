import React, { Fragment, useState } from "react";
import { Ghosta, ghosta } from "react-ghosta";
import { Button, GradientBox } from "@site/src/components";

import AlertIcon from "@theme/Icon/DarkMode";

const Playground: React.FC = () => {
  const [options, setOptions] = useState<any>({
    title: "Tada! 🎉",
    description: "Easy to use and customize",
    icon: <AlertIcon />,
    showCloseButton: true,
    buttons: [
      {
        title: "Async Trigger",
        variant: "primary",
        onClick: async function () {
          await new Promise((resolve) => {
            setTimeout(resolve, 2000);
          });

          ghosta.fire({
            title: "Async request has completed",
            content: (
              <b className="text-red-500">
                Some <i>HTML</i> content
              </b>
            ),
            showCloseButton: true,
            size: "sm",
          });
        },
      },
      {
        title: "Close",
      },
    ],
  });

  const handleShowAlert = () => {
    ghosta.fire(options);
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
