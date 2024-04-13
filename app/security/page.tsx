'use client'
import React from "react";
import DashboardLayout from "../Layouts/DashboardLayout";
import DataTable from "@/components/DataTable/DataTable";
import { TableData, TableHeading, TableHeading2 } from "@/data/userTableHeader";
import { TableOptions } from "@/components/TablesOptions";
import { useQuery } from "@tanstack/react-query";
import { getAllUsers } from "@/API/dashboard.api";

export default function Security() {
  const {data,isError,isLoading } = useQuery({
    queryKey:["Users"],
    queryFn:getAllUsers
  })

  if(isLoading) return <p>Loading...</p>
  if(isError) return <p>Error</p>
  
  return (
    <DashboardLayout active={"SECURITY"}>
      <TableOptions  isUsersTableOption={false}/>
      <div className="mr-10 border-[#439A86] border-2 h-screen mt-5 rounded-xl">
        <p className="text-white font-bold  bg-[#439A86] border-[#439A86] w-full px-5 py-1 rounded-t-lg">
          Users | <span className="text-sm font-normal">Showing all users</span>
        </p>
        <div className="mt-2 ">
          <button className="mx-2 border-2 border-[#439A86] px-3 rounded-full text-[#439A86] border-dotted">
            + Add a filter
          </button>
          <DataTable TableHeading={TableHeading2} TableData={data?.response?.data.data}  isSecurityPage />
        </div>
      </div>
    </DashboardLayout>
  );
}