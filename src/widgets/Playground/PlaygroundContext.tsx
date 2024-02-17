import type { PlaygroundContextValue } from "./types";
import { createContext } from "react";

export const PlaygroundContext = createContext<PlaygroundContextValue>(
  {} as PlaygroundContextValue
);
