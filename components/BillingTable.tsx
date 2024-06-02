"use client";
import React, { useState } from "react";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Avatar, AvatarFallback, AvatarImage } from "./ui/avatar";
import { TableRowData2 } from "@/types/types";
import { Trash } from "lucide-react";
import Image from "next/image";
import UserDialog from "./UserDialog/UserDialog";
import { Dialog, DialogTrigger } from "./ui/dialog";

export default function BillingTable({
  TableHeading,
  TableData,
  isDataCenterPage,
}: {
  TableHeading: string[];
  TableData: TableRowData2[];
  isDataCenterPage?: boolean;
}) {
  const [selectAll, setSelectAll] = useState(false);
  const [selectedRows, setSelectedRows] = useState([]);

  const handleCheckboxChange = (index: number) => {
    if (selectAll) {
      setSelectedRows([]);
      setSelectAll(false);
    } else {
      const updatedSelectedRows = [...selectedRows];
      if (updatedSelectedRows.includes(index as never)) {
        updatedSelectedRows.splice(
          updatedSelectedRows.indexOf(index as never),
          1
        );
      } else {
        updatedSelectedRows.push(index as never);
      }
      setSelectedRows(updatedSelectedRows);
    }
  };
  return (
    <Table className="mt-3 max-h-[75vh] overflow-y-auto">
      <TableHeader>
        <TableRow className="bg-[#BCD8C1] bg-opacity-50 hover:bg-opacity-50 hover:bg-[#BCD8C1]  w-full rounded-sm h-5">
          <TableHead className="w-52">
            <div className="flex items-center gap-6">
              <input
                type="checkbox"
                id="name"
                checked={selectAll}
                className="shadow checked:bg-[#439A86]  focus:ring-0 checked:text-[#439A86]"
                onChange={() => setSelectAll(!selectAll)}
              />

              <label htmlFor="name" className="font-bold">
                Name
              </label>
            </div>
          </TableHead>
          {TableHeading.map((heading, index) => (
            <TableHead key={index} className="font-bold ">
              {heading}
            </TableHead>
          ))}
        </TableRow>
      </TableHeader>
      <TableBody className="px-28">
        {TableData.map((row, index) => (
          <TableRow key={index}>
            <TableCell className="w-52">
              <div className="flex items-center gap-6">
                <input
                  type="checkbox"
                  checked={selectAll || selectedRows.includes(index as never)}
                  onChange={() => handleCheckboxChange(index)}
                  className="h-4 w-4  shadow checked:bg-[#439A86] focus:ring-0 checked:text-[#439A86]"
                />
                <div className="flex gap-2 items-center">
                  <Dialog>
                    <DialogTrigger asChild>
                      <Avatar className="cursor-pointer">
                        <AvatarImage src={row.photo} alt="@shadcn" />
                        <AvatarFallback>
                          <Image
                            src={"/assets/dummy.jpeg"}
                            width={40}
                            height={40}
                            alt="User Dummy Picture"
                          />
                        </AvatarFallback>
                      </Avatar>
                    </DialogTrigger>
                    {!isDataCenterPage ? (
                      <UserDialog
                        profileImageUrl={`${row.photo || "/assets/dummy.jpeg"}`}
                        userInfo={{
                          userId: row._id || '',
                          userName: row.name,
                          subscriptionStatus: "Premium",
                        }}
                        additionalData={{
                          EMAIL: row.email,
                          "SUBSCRIPTION STATUS": row.isActive
                            ? "ACTIVE"
                            : "DEACTIVE",
                          "PAYMENT PLAN": "-",
                          "BILLING ADDRESS": "-",
                        }}
                      ></UserDialog>
                    ) : (
                      <UserDialog
                        profileImageUrl={`${row.photo || "/assets/dummy.jpeg"}`}
                        userInfo={{
                          userId: row._id,
                          userName: row.name,
                          subscriptionStatus: "Premium",
                        }}
                        additionalData={{
                          EMAIL: row.email,
                          "DATA OPT-IN": row.isActive ? "ACTIVE" : "DEACTIVE",
                          "DATA SHARING PARTNER": "-",
                          "SHARING PRVILEGES": "-",
                        }}
                      />
                    )}
                  </Dialog>
                  <p>{row.name}</p>
                </div>
              </div>
            </TableCell>
            <TableCell className="">{row.email}</TableCell>
            <TableCell>
              <div>
                <div className="bg-[#439A86] text-start py-1 inline-block p-2 font-bold text-white rounded-full text-md">
                  {isDataCenterPage
                    ? row.isActive
                      ? "ACTIVE"
                      : "DEACTIVE"
                    : row.isActive
                    ? "ACTIVE"
                    : "DEACTIVE"}{" "}
                </div>
              </div>
            </TableCell>
            <TableCell className="">
              {isDataCenterPage ? (
                <Image
                  src="/assets/trash.svg"
                  width={15}
                  height={10}
                  alt=""
                  className="ml-10"
                />
              ) : (
                <p className="px-10">
                  {row.paymentPlan || "-"}
                </p>
              )}
            </TableCell>
            <TableCell className="  text-[#439A86] ">
              {isDataCenterPage ? (
                <Image
                  src="/assets/dots.png"
                  width={6}
                  height={10}
                  alt=""
                  className="ml-10"
                />
              ) : (
                <p className="px-10">
                {row.paymentDue || "-"}
              </p>
              )}{" "}
            </TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  
  );
}
