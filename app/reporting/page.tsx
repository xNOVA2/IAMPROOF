import React from "react";
import DashboardLayout from "../Layouts/DashboardLayout";
import ReportGraph from "@/components/ReportGraph/ReportGraph";
import Image from "next/image";
// import Link from "next/link";
// import {
//   ReportBox,
//   ReportingBoxElement,
// } from "@/components/Box/ReportBox/ReportBox";

export default function Reporting() {
  return (
    <DashboardLayout active={"REPORTING"}>
      <div className="w-full h-screen">
        <div className="flex flex-col gap-4 p-5">
          <div className="flex gap-4">
            <Image
              src={"/assets/reporting.png"}
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
{
  /* <div className="w-full h-screen">
        <div className="flex justify-end mt-4 2 gap-2">
          <button className="border-2 border-[#439A86] py-1 px-3 text-xs rounded-full text-[#439A86]">
            <Link href={""}>All users</Link>
          </button>

          <button className="border-2 border-[#439A86] py-1 px-3 text-xs rounded-full text-[#439A86]">
            <Link href={""}>All pages</Link>
          </button>

          <button className="border-2 border-[#439A86] py-1 px-3 text-xs rounded-full text-[#439A86]">
            <Link href={""}>01/06/24 - 01/12/24</Link>
          </button>
        </div>

        <div className="flex gap-7 my-5 mb-5">
          <div className="   flex flex-col gap-4  w-1/2">
            <ReportBox heading="Home" subHeading="Accounts">
              <ReportingBoxElement question="“Log in” clicks:" answer="19" />
              <ReportingBoxElement question="“Sign up” clicks:" answer="20" />
              <ReportingBoxElement
                question="Average page view duration:"
                answer="3.4 seconds"
              />
            </ReportBox>

            <ReportBox heading="Login" subHeading="Accounts">
              <ReportingBoxElement
                question="'Log In with Google' clicks:"
                answer="19"
              />
              <ReportingBoxElement
                question="'Log In with Apple' clicks:"
                answer="20"
              />
              <ReportingBoxElement
                question="'Log In with Facebook' clicks:"
                answer="3.4 seconds"
              />
              <ReportingBoxElement
                question="'Log In with biometrics' clicks:"
                answer="3.4 seconds"
              />
              <ReportingBoxElement
                question="'Email' interactions:"
                answer="3.4 seconds"
              />
              <ReportingBoxElement
                question="'Show password” clicks:"
                answer="3.4 seconds"
              />
              <ReportingBoxElement
                question="'Remember me ' clicks:"
                answer="3.4 seconds"
              />
              <ReportingBoxElement
                question="'Log in' clicks:"
                answer="3.4 seconds"
              />
              <ReportingBoxElement
                question="'Sign in' clicks:"
                answer="3.4 seconds"
              />
            </ReportBox>

            <ReportBox heading="Home" subHeading="Accounts">
              <ReportingBoxElement question="“Log in” clicks:" answer="19" />
              <ReportingBoxElement question="“Sign up” clicks:" answer="20" />
            </ReportBox>
          </div>
          <div className="   flex flex-col gap-4  w-1/2">
            <ReportBox heading="Sign up" subHeading="Accounts">
              <ReportingBoxElement
                question="'sign up with facebook' clicks:"
                answer="19"
              />
              <ReportingBoxElement
                question="'sign up with email' clicks:"
                answer="20"
              />
              <ReportingBoxElement
                question="'I Agree with terms & Privacy ' checkes:"
                answer="3.4 seconds"
              />
              <ReportingBoxElement
                question="'sign up with biometrics' clicks:"
                answer="3.4 seconds"
              />
              <ReportingBoxElement
                question="'Terms'clicks:"
                answer="3.4 seconds"
              />
              <ReportingBoxElement
                question="'Privacy' clicks:"
                answer="3.4 seconds"
              />
              <ReportingBoxElement
                question="'Remember me ' clicks:"
                answer="3.4 seconds"
              />
              <ReportingBoxElement
                question="'Complete Sign up' clicks:"
                answer="3.4 seconds"
              />
              <ReportingBoxElement
                question="'Log in ' clicks:"
                answer="3.4 seconds"
              />
            </ReportBox>

            <ReportBox heading="Forget Password" subHeading="Accounts">
              <ReportingBoxElement
                question="'Email' interactions:"
                answer="19"
              />
              <ReportingBoxElement
                question="'Send recovery email' clicks:"
                answer="20"
              />
              <ReportingBoxElement
                question="'Log In ' clicks:"
                answer="3.4 seconds"
              />
              <ReportingBoxElement
                question="'Sign up ' clicks:"
                answer="3.4 seconds"
              />
            </ReportBox>

            <ReportBox heading="Dashboard" subHeading="dashboard">
              <ReportingBoxElement question="'Settings'  clicks:" answer="19" />
              <h1 className="w-full bg-[#BCD8C1] text-sm text-center">
                GLUCOSE MONITOR CAROUSEL
              </h1>
              <ReportingBoxElement
                question="'Glucose monitor ' swipes:"
                answer="20"
              />
              <ReportingBoxElement
                question="'Glucose monitor' clicks:"
                answer="20"
              />
              <ReportingBoxElement
                question="'Daily Glucose Level Report' swipes:"
                answer="20"
              />
              <h1 className="w-full bg-[#BCD8C1] text-sm text-center">
                CALORIE CAROUSEL
              </h1>
              <ReportingBoxElement question="Calories swipes:" answer="20" />
              <ReportingBoxElement question="Calories clicks:" answer="20" />
              <ReportingBoxElement
                question="Calories burned swipes:"
                answer="20"
              />
              <ReportingBoxElement
                question="Calories burned clicks:"
                answer="20"
              />
              <ReportingBoxElement
                question=" Calories Consumed swipes:"
                answer="20"
              />
              <h1 className="w-full bg-[#BCD8C1] text-sm text-center">
                NUTRITION CAROUSEL
              </h1>
              <ReportingBoxElement question="Nutrition swipes:" answer="20" />
              <ReportingBoxElement question="Nutrition clicks:" answer="20" />
              <ReportingBoxElement
                question="Target daily  Nutrition swipes:"
                answer="20"
              />
              <ReportingBoxElement
                question="Target daily  Nutrition clicks:"
                answer="20"
              />
              <ReportingBoxElement
                question="Meal Tracking swipes:"
                answer="20"
              />
              <ReportingBoxElement question="Log Meal  click:" answer="20" />

              <ReportingBoxElement
                question="Meal Tracking click:"
                answer="20"
              />
            </ReportBox>
          </div>
          <div className="   flex flex-col gap-4  w-1/2">
            <ReportBox heading="Home" subHeading="Accounts">
              <ReportingBoxElement question="“Log in” clicks:" answer="19" />
              <ReportingBoxElement question="“Sign up” clicks:" answer="20" />
              <ReportingBoxElement
                question="Average page view duration:"
                answer="3.4 seconds"
              />
            </ReportBox>

            <ReportBox heading="Login" subHeading="Accounts">
              <ReportingBoxElement
                question="'Log In with Google' clicks:"
                answer="19"
              />
              <ReportingBoxElement
                question="'Log In with Apple' clicks:"
                answer="20"
              />
              <ReportingBoxElement
                question="'Log In with Facebook' clicks:"
                answer="3.4 seconds"
              />
              <ReportingBoxElement
                question="'Log In with biometrics' clicks:"
                answer="3.4 seconds"
              />
              <ReportingBoxElement
                question="'Email' interactions:"
                answer="3.4 seconds"
              />
              <ReportingBoxElement
                question="'Show password” clicks:"
                answer="3.4 seconds"
              />
              <ReportingBoxElement
                question="'Remember me ' clicks:"
                answer="3.4 seconds"
              />
              <ReportingBoxElement
                question="'Log in' clicks:"
                answer="3.4 seconds"
              />
              <ReportingBoxElement
                question="'Sign in' clicks:"
                answer="3.4 seconds"
              />
            </ReportBox>

            <ReportBox heading="Home" subHeading="Accounts">
              <ReportingBoxElement question="“Log in” clicks:" answer="19" />
              <ReportingBoxElement question="“Sign up” clicks:" answer="20" />
            </ReportBox>
          </div>
        </div>
      </div> */
}
