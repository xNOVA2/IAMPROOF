"use client";
import React from "react";
import DashboardLayout from "../Layouts/DashboardLayout";
import { TableHeading } from "@/data/userTableHeader";
import DataTable from "@/components/DataTable/DataTable";
import { TableOptions } from "@/components/TablesOptions";
import { getAllUsers } from "@/API/dashboard.api";
import { useQuery } from "@tanstack/react-query";
import { Loader } from "@/components/Loader";
import { Pagination } from "@/components/Pagination";
import { SearchParams } from "@/types/types";

export default function Directory({
  searchParams,
}: {
  searchParams: SearchParams;
}) {
  const { limit, page, userId,search } = searchParams;
  const { data, isLoading } = useQuery({
    queryKey: ["Users", page, limit,search],
    queryFn: () => getAllUsers({ limit, page,search }),
  });

  return (
    <DashboardLayout active={"DIRECTORY"}>
      {isLoading ? (
        <div className="flex justify-center items-center w-full h-[80vh]">
          <Loader />
        </div>
      ) : (
        <div
          className="w-full min-h-screen flex flex-col"
          style={{
            transform: "scale(0.8)",
            transformOrigin: "top left",
            width: "125%", // Adjust width to counteract scaling
          }}
        >
          <TableOptions isUsersTableOption />
          <div className="mr-10 border-[#439A86] border-2  mt-5 rounded-xl">
            <p className="text-white font-bold bg-[#439A86] border-[#439A86] w-full px-5 py-1 rounded-t-lg">
              Users |{" "}
              <span className="text-sm font-normal">Showing all users</span>
            </p>
            <div className="mt-2">
              <div className="flex items-center gap-x-2 justify-between w-full">
                <button className="mx-2 border-2 border-[#439A86] px-3 rounded-full text-[#439A86] border-dotted">
                  + Add a filter
                </button>
                {data && data.response.data && (
                  <Pagination data={data.response.data.pagination} />
                )}
              </div>
              <DataTable
                TableHeading={TableHeading}
                TableData={data?.response?.data?.data}
                userId={userId}
              />
            </div>
          </div>
        </div>
      )}
    </DashboardLayout>
  );
}
