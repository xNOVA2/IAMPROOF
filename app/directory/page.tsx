'use client'
import React from "react";
import DashboardLayout from "../Layouts/DashboardLayout";
import Link from "next/link";
import { TableData, TableHeading } from "@/data/userTableHeader";
import DataTable from "@/components/DataTable/DataTable";
import { TableOptions } from "@/components/TablesOptions";
import { getAllUsers } from "@/API/dashboard.api";
import { useQuery } from "@tanstack/react-query";

export default function Directory() {

  const {data,isError,isLoading } = useQuery({
    queryKey:["Users"],
    queryFn:getAllUsers
  })

  if(isLoading) return <p>Loading...</p>
  if(isError) return <p>Error</p>

  
  return (
    <DashboardLayout>
      <TableOptions isUsersTableOption/>
      <div className="mr-10 border-[#439A86] border-2 h-screen mt-5 rounded-xl">
        <p className="text-white font-bold  bg-[#439A86] border-[#439A86] w-full px-5 py-1 rounded-t-lg">
          Users | <span className="text-sm font-normal">Showing all users</span>
        </p>
        <div className="mt-2 ">
          <button className="mx-2 border-2 border-[#439A86] px-3 rounded-full text-[#439A86] border-dotted">
            + Add a filter
          </button>
          <DataTable TableHeading={TableHeading} TableData={data?.response?.data.data}  />;

        </div>
      </div>
    </DashboardLayout>
  );
}