import Image from "next/image";
import SubHeading from "./SubHeading";

export default function Box({
    ImagePath,
    headerText,
    subHeading,
    children,
  }: {
    ImagePath: string;
    headerText: string;
    subHeading?: string;
    children: React.ReactNode;
  }) {
    return (
    <div className="border-[#BCD8C1] pb-4 border-2 rounded-2xl mt-8 w-[100%] ">
        <div className="flex gap-3 p-5 items-center mb-5">
            <Image src={ImagePath} alt="" width={25} height={15} />
            <h1>{headerText}</h1>
        </div>
        <div className="flex flex-col items-center justify-center ">
            {subHeading ? <SubHeading bgColor="#BCD8C1" text={subHeading} /> : null}
            {children}
        </div>
    </div>
    );
  }