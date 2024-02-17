import type { TableContextValue } from "./types";
import { createContext } from "react";

export const TableContext = createContext<TableContextValue>(
  {} as TableContextValue
);
