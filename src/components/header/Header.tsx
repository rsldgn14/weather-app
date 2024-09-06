import Image from "next/image";
import ProjectName from "./ProjectName";

export default function Header() {
  return (
    <div className="bg-primary h-20">
      <div className="px-[163px] flex justify-between items-center h-full w-full">
        <ProjectName />
        <Image src={"/static/icon.svg"} height={29} width={29} alt="icon" />
      </div>
    </div>
  );
}
