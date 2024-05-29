"use client";
import React, { ReactNode } from "react";
import Image from "next/image";
import {
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { usePathname, useRouter, useSearchParams } from "next/navigation";

interface UserDialogProps<UserInfoType, AdditionalDataType> {
  profileImageUrl: string;
  userInfo: UserInfoType;
  additionalData: AdditionalDataType;
  colorIndex?: number | null;
  children?: ReactNode;
}

const UserDialog = <
  UserInfoType extends Record<string, any>,
  AdditionalDataType extends Record<string, any>
>({
  profileImageUrl,
  userInfo,
  additionalData,
  colorIndex,
  children,
}: UserDialogProps<UserInfoType, AdditionalDataType>) => {
  const topButtons = [
    { name: "DIRECTORY", path: "/directory" },
    { name: "SECURITY", path: "/security" },
    { name: "REPORTING", path: "/reporting" },
    { name: "BILLING", path: "/billing" },
    { name: "DATA CONTROL", path: "data-center" },
  ];
  const searchParams = useSearchParams();
  const router = useRouter();

  const handleModalSwitch = (path: string) => {
    const queryParams = new URLSearchParams(searchParams);
    queryParams.set("userId", userInfo.userId.toString());
    const queryString = queryParams.toString();
    router.push(`${path}?${queryString}`, { scroll: false });
  };

  return (
    <DialogContent className="min-w-[1200px] h-[75%]">
      <DialogHeader>
        <div className="flex items-start w-full gap-3">
          <Image
            src={profileImageUrl}
            alt="Profile Picture"
            width={100}
            height={100}
            className="rounded-full"
          />
          <div className="flex flex-col items-start w-full gap-3">
            <div className="flex gap-4 items-center justify-between  w-full">
              <DialogTitle>{userInfo.userName}</DialogTitle>
              {userInfo.subscriptionStatus && (
                <div className="bg-[#439A86] text-start py-1 inline-block p-2 font-bold text-white rounded-full text-md">
                  {userInfo.subscriptionStatus}
                </div>
              )}
            </div>
            <div className="flex gap-4 justify-between w-full">
              {topButtons.map((button, index) => (
                <button
                  // onClick={() => handleModalSwitch(button.path)}
                  key={`${button.name}-${index}`}
                  className="border-[#BCD8C1] border-2 flex transform items-center rounded-lg px-10 py-3 text-center text-gray-600 transition-colors duration-300 hover:bg-gray-100 hover:text-gray-700"
                >
                  <span className="mx-2 text-sm">{button.name}</span>
                </button>
              ))}
            </div>
          </div>
        </div>
        <div className="w-full flex flex-col ">
          {/* Additional data sections */}
          {Object.entries(additionalData).map(([key, value], index) => (
            <div
              key={index}
              className={`flex gap-2 mt-2 ${
                index % 2 === 0 ? "bg-[#BCD8C180]" : ""
              } py-3 items-center`}
            >
              <p className="w-2/4 text-end text-[#439A86] font-bold">{key}</p>
              <div className="w-2/4 flex justify-between">
                <p
                  className={
                    index == 1 || index == colorIndex
                      ? "bg-[#439A86] text-start  inline-block px-3 py-1 font-bold text-white rounded-full text-md"
                      : ""
                  }
                >
                  {value}
                </p>
                <Image
                  src={"/assets/pencil.png"}
                  alt="Pencil Logo"
                  width={25}
                  height={25}
                />
              </div>
            </div>
          ))}
        </div>
        {children}
      </DialogHeader>
    </DialogContent>
  );
};

export default UserDialog;
