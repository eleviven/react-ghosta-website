import { GhostaOptions } from "react-ghosta";
import { ISchema } from "@site/src/types";

export type PlaygroundContextValue = {
  options: GhostaOptions;
  handleChangeOption: (key: string, value: any) => void;
};

export type PlaygroundRootProps = {
  children?: React.ReactNode;
};

export type PlaygroundTableProps = {
  data: ISchema[];
  whitelist?: string[];
  blocklist?: string[];
};
