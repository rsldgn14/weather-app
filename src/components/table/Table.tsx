import { WeatherData } from "@/data/weather";
import { useCallback } from "react";

export type Column = {
  title: string;
  key?: string;
  isSelected?: boolean;
  render?: (value: any) => string;
};

export type TableProps = {
  columns: Column[];
  data: WeatherData[];
  title?: string;
  onSelect: (date: string) => void;
};

export default function Table<T>({
  columns,
  data,
  title,
  onSelect,
}: TableProps) {
  const renderInfo = useCallback((data: string, key: number) => {
    return (
      <td
        className="px-5  cursor-pointer text-sm font-normal text-[#252F4A] border-l-[1px]  py-[26px]"
        key={key}
      >
        {data}
      </td>
    );
  }, []);

  return (
    <div className="rounded-xl border-[#DBDFE9] border-[1px] shadow-defaultShadow overflow-hidden overflow-x-auto">
      <h1 className="p-[25px] text-[#071437] font-semibold text-[16px]">
        {title}
      </h1>
      <table className="w-full">
        <thead>
          <tr className="border-b-[1px]">
            {columns.map((col, index) => (
              <th
                className="px-5 font-normal text-[13px]  text-left text-[#4B5675] border-l-[1px] border-t-[1px] border-b-[1px] bg-[#F1F1F4] py-4"
                key={index + 99}
              >
                {col.title}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {data.map((row, index) => (
            <tr
              className="border-b-[1px]"
              onClick={() => onSelect(row.datetime)}
              key={index}
            >
              {columns.map((col, index) => {
                if (col.render) {
                  return renderInfo(
                    col.render((row as any)[col.key as keyof typeof row]),
                    index
                  );
                }
                return renderInfo(
                  (row as any)[col.key as keyof typeof row],
                  index
                );
              })}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
