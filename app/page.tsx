import Image from "next/image";
import DashboardLayout from "./Layouts/DashboardLayout";
import { cn } from "@/lib/utils";
import Box from "@/components/Box/Box";
import BoxButton from "@/components/Box/BoxButton";
import SubHeading from "@/components/Box/SubHeading";

export default function Home() {
  return (
    <DashboardLayout>
      <div className={cn("w-full h-screen flex flex-col  ")}>
        <div className="flex justify-between pr-10 ">
          <Box
            ImagePath="/assets/Directory.png"
            headerText="DIRECTORY"
            subHeading="Current number of users: 93"
          >
            <BoxButton text="Add a new user" href="" />
            <BoxButton text="Delete a user" href="" />
            <BoxButton text="Update a user's name" href="" />
          </Box>

          <Box ImagePath="/assets/Security.png" headerText="SECURITY">
            <BoxButton text="Lock a user's account" href="" />
            <BoxButton text="Reset a user's password" href="" />
            <BoxButton text="Check user's 2 Factor Authentication" href="" />
            <BoxButton text="View user's security questions" href="" />
          </Box>
        </div>
        <div className="flex-grow border-[#BCD8C1] border-2 mt-6 mr-10  rounded-lg h-52 ">
          <div className="flex gap-3 p-5 items-center">
            <Image
              src={"/assets/Reporting.png"}
              alt=""
              width={25}
              height={15}
            />
            <h1>REPORTING</h1>
          </div>
        </div>
        <div className="flex justify-between pr-10 mb-5  ">
          <Box
            ImagePath="/assets/Billing.png"
            headerText="BILLING"
            subHeading="Current number of users: 93"
          >
            <SubHeading
              text="Current number of premium subscribers:51"
              bgColor="#BCD8C180"
            />
            <BoxButton text="Manage subscriptions" href="" />
            <BoxButton text="View all invoices" href="" />
          </Box>

          <Box
            ImagePath="/assets/DataControl.png"
            headerText="DATA CONTROL"
            subHeading="Users sharing full data:63"
          >
            <SubHeading
              text="Current number of premium subscribers:51"
              bgColor="#BCD8C180"
            />
            <SubHeading text="Users sharing no data:20" bgColor="#BCD8C133" />

            <BoxButton text="Reset a user's password" href="" />
            <BoxButton text="Check user's 2 Factor Authentication" href="" />
          </Box>
        </div>
      </div>
    </DashboardLayout>
  );
}
