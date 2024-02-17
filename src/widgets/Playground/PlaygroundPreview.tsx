import { useContext } from "react";
import CodeBlock from "@theme/CodeBlock";
import { ghosta } from "react-ghosta";
import { Button, GradientBox } from "@site/src/components";
import { PlaygroundContext } from "./PlaygroundContext";

const PlaygroundPreview: React.FC = () => {
  const { options } = useContext(PlaygroundContext);

  const handleShowAlert = () => {
    ghosta.fire({
      ...options,
      content: <div dangerouslySetInnerHTML={{ __html: options.content }} />,
      icon: (
        <div
          dangerouslySetInnerHTML={{ __html: options.icon }}
          className="leading-[0]"
        />
      ),
    });
  };

  return (
    <div className="lg:grid grid-cols-2 gap-6">
      <div>
        <h3>Emitter</h3>
        <CodeBlock language="json">
          ghosta.fire({JSON.stringify(options, null, 2)})
        </CodeBlock>
      </div>

      <div className="flex flex-col">
        <h3>Trigger</h3>
        <div className="flex-1 flex items-center justify-center gap-6 rounded-md border border-solid border-zinc-200 dark:border-zinc-700 bg-white dark:bg-zinc-800 mb-5">
          <div className="flex flex-col items-center gap-4 py-10 px-5 text-center">
            <GradientBox>
              <Button onClick={handleShowAlert}>Click to Show Alert</Button>
            </GradientBox>
            <div className="text-sm animate-bounce opacity-60">
              Change options below and click button
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PlaygroundPreview;
