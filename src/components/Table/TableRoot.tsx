import type { TableRootProps } from "./types";

import { useState } from "react";
import { getCoreRowModel, useReactTable } from "@tanstack/react-table";
import { TableContext } from "./TableContext";

const TableRoot: React.FC<TableRootProps> = ({ columns, data, children }) => {
  const [tableData] = useState([...data]);

  const table = useReactTable({
    data: tableData,
    columns,
    getCoreRowModel: getCoreRowModel(),
  });

  return (
    <TableContext.Provider value={{ table }}>{children}</TableContext.Provider>
  );
};

export default TableRoot;
