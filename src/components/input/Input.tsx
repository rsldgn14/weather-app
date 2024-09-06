"use client";
import Image from "next/image";
import { ChangeEvent, ReactNode } from "react";

interface Props {
  value: string;
  placeholder?: string;
  onChange: (e:ChangeEvent<HTMLInputElement>) => void;
  name: string;
  icon?: ReactNode;
}

export default function Input(props: Props) {
  const { value, placeholder, onChange, name, icon } = props;

  return (
    <div className="relative shadow-defaultShadow  w-full">
      <input
        className="px-[14px] text-[14px] font-normal placeholder-[#252F4A] rounded-[10px] border-[1px] border-[#DBDFE9] h-[46px] w-full min-w-[360px]  py-4"
        placeholder={placeholder}
        name={name}
        value={value}
        onChange={onChange}
      />
      <Image
        className="absolute top-4 right-4"
        src={"/static/search.svg"}
        height={13}
        width={13}
        alt="search"
      />
    </div>
  );
}
