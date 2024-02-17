import type { ISchema } from "@site/src/types";
import type { PlaygroundTableProps } from "./types";

import { useContext, useMemo } from "react";
import { createColumnHelper } from "@tanstack/react-table";

import { SchemaRender, Table } from "@site/src/components";

import { PlaygroundContext } from "./PlaygroundContext";

const PlaygroundTable: React.FC<PlaygroundTableProps> = ({
  data = [],
  whitelist,
  blocklist,
}) => {
  const { options, handleChangeOption } = useContext(PlaygroundContext);

  const columnHelper = createColumnHelper<ISchema>();
  const columns = [
    columnHelper.accessor("name", {
      header: "Property",
    }),
    columnHelper.display({
      id: "Value",
      header: "Value",
      size: 400,
      cell: ({ row }) => {
        return (
          <SchemaRender
            schemaItem={row.original}
            values={options}
            onChange={handleChangeOption}
          />
        );
      },
    }),
  ];

  const tableData = useMemo(() => {
    return data.filter(
      ({ name }) =>
        (whitelist ? whitelist?.includes(name) : true) &&
        !blocklist?.includes(name)
    );
  }, [whitelist, blocklist, data]);

  return (
    <Table.Root data={tableData} columns={columns}>
      <Table.Content />
    </Table.Root>
  );
};

export default PlaygroundTable;
