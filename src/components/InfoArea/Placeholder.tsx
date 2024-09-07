"use client";

interface Props {
  title: string;
  description: string;
}

export default function PlaceHolder(props: Props) {
  const { title, description } = props;

  return (
    <div className="p-10 flex flex-col gap-[10px] shadow-defaultShadow border-[1px] rounded-xl">
      <h1 className="font-bold text-4xl  text-center"> {title} </h1>
      <p className="font-normal  text-center leading-5">{description}</p>
    </div>
  );
}
