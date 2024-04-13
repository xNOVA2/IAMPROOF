'use client'
import Image from "next/image";
import { cn } from "@/lib/utils";
import Box from "@/components/Box/Box";
import BoxButton from "@/components/Box/BoxButton";
import SubHeading from "@/components/Box/SubHeading";
import DashboardLayout from "../Layouts/DashboardLayout";

import { Suspense } from "react";
import Graph from "@/components/Graph/Graph";
import { useQuery } from "@tanstack/react-query";
import { getDashboardData, topWearables } from "@/API/dashboard.api";
import { IWearableData } from "@/type";

export default function Home() {

    const { data, isLoading: isLoadingDashboard, isError: isErrorDashboard } = useQuery({
        queryKey: ["dashboard"],
        queryFn: getDashboardData
    });
    const { data: wearableData, isLoading: isLoadingWearable, isError: isErrorWearable } = useQuery({
        queryKey: ["wearable"],
        queryFn: topWearables
    });

    if (isLoadingDashboard) {
        return <div>Loading Dashboard...</div>;
    }
    
    if (isErrorDashboard) {
        return <div>Error fetching Dashboard data</div>;
    }
    
   
    
    if (isLoadingWearable) {
        return <div>Loading Wearable data...</div>;
    }
    
    if (isErrorWearable) {
        return <div>Error fetching Wearable data</div>;
    }
    
    console.log(wearableData);
    
    
    return (
        <DashboardLayout active={"DASHBOARD"}>
            <div className={cn("w-full h-screen flex flex-col  ")}>
                <div className="flex justify-evenly gap-5 pr-10 ">
                    <Box

                        ImagePath="/assets/Directory.png"
                        headerText="DIRECTORY"
                        subHeading="Current number of users:"
                        number={data?.response.data[0].count}
                    >

                        <SubHeading
                            text="Total permiun Subscribers: -"
                            bgColor="#BCD8C180"
                        />
                        <SubHeading
                            text="Total Active Users:"
                            bgColor="#BCD8C1"
                            number={data?.response.data[0].active}
                        />
                    </Box>

                    <Box ImagePath="/assets/Security.png" headerText="SECURITY">
                    <div className="flex gap-5 ">
    {wearableData?.response?.data && wearableData.response.data.length > 0 ? (
        wearableData.response.data.map((wearableData: IWearableData, index: number) => (
            <div key={index} className="w-52 h-56 border-2 rounded-lg">
                <div className="bg-[#BCD8C180] text-center p-2">
                    <p className="font-extrabold text-4xl">#{index+1}</p>
                    <p className="text-sm">INTEGRATION APP/DEVICE</p>
                </div>
                <div className="text-2xl  flex justify-center items-center h-20 py-5">{wearableData._id}</div>
                <SubHeading
                    number={wearableData.count}
                    text="Total users: "
                    bgColor="#BCD8C1"
                />
            </div>
        ))
    ) : (
        <div className="text-center">No information available</div>
    )}
</div>




                    </Box>
                </div>
                <div className="h-fit border-[#BCD8C1] border-2 mt-6 mr-10  rounded-lg  ">
                    <ReportingDashboard />
                </div>
                <div className="flex justify-between pr-10 mb-5  gap-5">
                    <Box
                        ImagePath="/assets/Billing.png"
                        headerText="BILLING"
                        subHeading="Total revenue$: -"
                    >
                        <SubHeading
                            // number={40}
                            text="Monthly subscriptions: -"
                            bgColor="#BCD8C180"
                        />
                        <SubHeading
                            text="Annual subscriptions: -"
                            bgColor="#BCD8C1"
                        />
                        <BoxButton text="Manage subscriptions" href="" />
                        <BoxButton text="View all invoices" href="" />
                    </Box>

                    <Box
                        ImagePath="/assets/DataControl.png"
                        headerText="DATA CONTROL"
                        subHeading="Users sharing full data: -"
                        // number={63}
                    >
                        <div className="bg-[#BCD8C180] w-full text-center py-2">
                            <p>
                                Current number of premium subscribers:{" "}
                                <span className="font-bold">-</span>
                            </p>
                        </div>
                        <div className="bg-[#BCD8C133] w-full text-center py-2">
                            <p>
                                Users sharing no data:<span className="font-bold">-</span>
                            </p>
                        </div>
                        <BoxButton text="Reset a user's password" href="" />
                        <BoxButton text="Check user's 2 Factor Authentication" href="" />
                    </Box>
                </div>
            </div>
        </DashboardLayout>
    );
}

function ReportingDashboard({ }) {
    return (
        <div className="pb-3">
            <div className="mx-12 flex items-center mt-5 gap-3">

                <Image src={"/assets/Reporting.png"} alt="" width={25} height={15} />
                <h1>REPORTING</h1>
            </div>

            <div className=" ">

                <Suspense fallback={<div>loading... </div>}>
                    <Graph />
                </Suspense>
            </div>
        </div>
    );
}
