import { ReactNode } from "react";

export type Column<T> = {
  header: string;
  accessor: (row: T) => ReactNode;
  align?: "left" | "right" | "center";
  width?: string;
};

export default function DataTable<T>({ columns, data }: { columns: Column<T>[]; data: T[] }) {
  return (
    <div className="overflow-x-auto">
      <table className="table w-full">
        <thead>
          <tr>
            {columns.map((col) => (
              <th key={col.header} className={col.align === "right" ? "text-right" : col.align === "center" ? "text-center" : "text-left"} style={{ width: col.width }}>
                {col.header}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {data.map((row, idx) => (
            <tr key={idx}>
              {columns.map((col) => (
                <td key={col.header} className={col.align === "right" ? "text-right" : col.align === "center" ? "text-center" : "text-left"}>
                  {col.accessor(row)}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
