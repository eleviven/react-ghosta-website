import type { PlaygroundRootProps } from "./types";
import { useState } from "react";
import { GhostaContainer, GhostaOptions, ghosta } from "react-ghosta";
import { PlaygroundContext } from "./PlaygroundContext";

const PlaygroundRoot: React.FC<PlaygroundRootProps> = ({ children }) => {
  const [options, setOptions] = useState<GhostaOptions>({
    title: "Tada! 🎉",
    description: "Easy to use and customize",
    icon: `<svg viewBox="0 0 24 24" width="24" height="24"><path fill="currentColor" d="M9.37,5.51C9.19,6.15,9.1,6.82,9.1,7.5c0,4.08,3.32,7.4,7.4,7.4c0.68,0,1.35-0.09,1.99-0.27C17.45,17.19,14.93,19,12,19 c-3.86,0-7-3.14-7-7C5,9.07,6.81,6.55,9.37,5.51z M12,3c-4.97,0-9,4.03-9,9s4.03,9,9,9s9-4.03,9-9c0-0.46-0.04-0.92-0.1-1.36 c-0.98,1.37-2.58,2.26-4.4,2.26c-2.98,0-5.4-2.42-5.4-5.4c0-1.81,0.89-3.42,2.26-4.4C12.92,3.04,12.46,3,12,3L12,3z"></path></svg>`,
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

  const handleChangeOption = (name: string, value: any) => {
    setOptions((prev) => ({ ...prev, [name]: value }));
  };

  return (
    <PlaygroundContext.Provider value={{ options, handleChangeOption }}>
      {children}

      <GhostaContainer />
    </PlaygroundContext.Provider>
  );
};

export default PlaygroundRoot;
