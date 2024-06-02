import React from "react";
import DashboardLayout from "../Layouts/DashboardLayout";
import ReportGraph from "@/components/ReportGraph/ReportGraph";
import Image from "next/image";

export default function Reporting() {
  return (
    <DashboardLayout active={"REPORTING"}>
      <div   className="w-full min-h-screen flex flex-col"
          style={{
            transform: "scale(0.8)",
            transformOrigin: "top left",
            width: "125%",
          }}
          >
        <div className="flex flex-col gap-4 p-5">
          <div className="flex gap-4">
            <Image
              src={"/assets/reporting.svg"}
              alt="Reporting Icom"
              width={25}
              height={20}
            />
            <h1>Reporting</h1>
          </div>
          <div>
            <h1 className="text-xl font-bold">
              1,610 <span className="text-md font-normal">hits</span>
            </h1>
          </div>
        </div>
        <ReportGraph />
        <div className="p-16">
          <h1 className="font-bold text-2xl text-[#439A86]">March 3, 2024</h1>
        </div>
      </div>
    </DashboardLayout>
  );
}

