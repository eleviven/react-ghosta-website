import { useContext } from "react";
import { flexRender } from "@tanstack/react-table";
import { TableContext } from "./TableContext";

const TableContent: React.FC = () => {
  const { table } = useContext(TableContext);

  return (
    <div className="overflow-x-auto">
      <table className="w-full table-fixed">
        <thead>
          {table.getHeaderGroups().map((headerGroup) => (
            <tr key={headerGroup.id}>
              {headerGroup.headers.map((header) => {
                const size = header.getSize();
                const title = flexRender(
                  header.column.columnDef.header,
                  header.getContext()
                );

                return (
                  <th
                    key={header.id}
                    style={{ "--size": `${size}px` } as React.CSSProperties}
                    className="w-[var(--size)]"
                  >
                    {!header.isPlaceholder ? title : null}
                  </th>
                );
              })}
            </tr>
          ))}
        </thead>
        <tbody>
          {table.getRowModel().rows.map((row) => (
            <tr key={row.id}>
              {row.getVisibleCells().map((cell) => (
                <td key={cell.id}>
                  {flexRender(cell.column.columnDef.cell, cell.getContext())}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default TableContent;
