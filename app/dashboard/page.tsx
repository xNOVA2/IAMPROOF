import Image from "next/image";
import { cn } from "@/lib/utils";
import Box from "@/components/Box/Box";
import BoxButton from "@/components/Box/BoxButton";
import SubHeading from "@/components/Box/SubHeading";
import DashboardLayout from "../Layouts/DashboardLayout";

import { Suspense } from "react";
import Graph from "@/components/Graph/Graph";

export default function Home() {
    return (
        <DashboardLayout>
            <div className={cn("w-full h-screen flex flex-col  ")}>
                <div className="flex justify-evenly gap-5 pr-10 ">
                    <Box

                        ImagePath="/assets/Directory.png"
                        headerText="DIRECTORY"
                        subHeading="Current number of users: 93"
                    >

                        <SubHeading
                            text="Total permiun Subscribers:24"
                            bgColor="#BCD8C180"
                        />
                        <SubHeading
                            text="Total Active Users:52"
                            bgColor="#BCD8C1"
                        />
                        <div></div>
                    </Box>

                    <Box ImagePath="/assets/Security.png" headerText="SECURITY">
                        <div className="flex  gap-5 ">
                            <div className="w-52 h-56 border-2 rounded-lg">
                                <div className="bg-[#BCD8C180] text-center p-2">
                                    <p className="font-extrabold text-4xl">#1</p>
                                    <p className="text-sm">INTEGRATION APP/DEVICE</p>
                                </div>
                                <div className="text-2xl  flex justify-center items-center h-20 py-5">Whoops</div>
                                <SubHeading
                                    text="Total users:50"
                                    bgColor="#BCD8C1"
                                />
                            </div>
                            <div className="w-52 h-56 border-2 rounded-lg">
                                <div className="bg-[#BCD8C180] text-center p-2">
                                    <p className="font-extrabold text-4xl">#2</p>
                                    <p className="text-sm">INTEGRATION APP/DEVICE</p>
                                </div>
                                <div className="text-2xl  flex justify-center items-center h-20 text-center py-5">My Fitness Pal</div>
                                <SubHeading
                                    text="Total users:59"
                                    bgColor="#BCD8C1"
                                />
                            </div>
                            <div className="w-52 h-56 border-2 rounded-lg">
                                <div className="bg-[#BCD8C180] text-center p-2">
                                    <p className="font-extrabold text-4xl">#3</p>
                                    <p className="text-sm">INTEGRATION APP/DEVICE</p>
                                </div>
                                <div className="text-2xl  flex justify-center items-center h-20 py-5">Apple Health</div>
                                <SubHeading
                                    text="Total users:25"
                                    bgColor="#BCD8C1"
                                />
                            </div>
                        </div>


                    </Box>
                </div>
                <div className="flex-grow border-[#BCD8C1] border-2 mt-6 mr-10  rounded-lg  ">
                    <ReportingDashboard />
                </div>
                <div className="flex justify-between pr-10 mb-5  gap-5">
                    <Box
                        ImagePath="/assets/Billing.png"
                        headerText="BILLING"
                        subHeading="Total revenue$:20"
                    >
                        <SubHeading
                            text="Monthly subscriptions:51"
                            bgColor="#BCD8C180"
                        />
                        <SubHeading
                            text="Annual subscriptions:41"
                            bgColor="#BCD8C1"
                        />
                        <BoxButton text="Manage subscriptions" href="" />
                        <BoxButton text="View all invoices" href="" />
                    </Box>

                    <Box
                        ImagePath="/assets/DataControl.png"
                        headerText="DATA CONTROL"
                        subHeading="Users sharing full data:63"
                    >
                        <div className="bg-[#BCD8C180] w-full text-center py-2">
                            <p>
                                Current number of premium subscribers:{" "}
                                <span className="font-bold">51</span>
                            </p>
                        </div>
                        <div className="bg-[#BCD8C133] w-full text-center py-2">
                            <p>
                                Users sharing no data:<span className="font-bold">20</span>
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
