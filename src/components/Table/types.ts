import { ColumnDef, RowData, Table } from "@tanstack/react-table";

export type TableRootProps = {
  data: any[];
  columns: ColumnDef<any, any>[];
  children?: React.ReactNode;
};

export type TableContextValue = {
  table: Table<any>;
};
