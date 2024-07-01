"use client";
import React from "react";
import DashboardLayout from "../Layouts/DashboardLayout";
import DataTable from "@/components/DataTable/DataTable";
import { TableHeading2 } from "@/data/userTableHeader";
import { TableOptions } from "@/components/TablesOptions";
import { useQuery } from "@tanstack/react-query";
import { getAllUsers } from "@/API/dashboard.api";
import { Loader } from "@/components/Loader";
import { Pagination } from "@/components/Pagination";
import { SearchParams } from "@/types/types";

export default function Security({
  searchParams,
}: {
  searchParams: SearchParams;
}) {
  const { limit, page,search } = searchParams;
  const { data, isLoading } = useQuery({
    queryKey: ["Users", page, limit,search],
    queryFn: () => getAllUsers({ limit, page,search }),
  });

  return (
    <DashboardLayout active={"SECURITY"}>
      {isLoading ? (
        <div className="flex justify-center items-center w-full h-[80vh]">
          <Loader />
        </div>
      ) : (
        <div
          className="w-full min-h-screen flex flex-col mt-5"
          style={{
            transform: "scale(0.8)",
            transformOrigin: "top left",
            width: "125%", // Adjust width to counteract scaling
          }}
        >
          <div className="mr-10 border-[#439A86] border-2  mt-5 rounded-xl">
            <p className="text-white font-bold bg-[#439A86] border-[#439A86] w-full px-5 py-1 rounded-t-lg">
              Users |{" "}
              <span className="text-sm font-normal">Showing all users</span>
            </p>
            <div className="mt-2 ">
              <div className="flex items-center gap-x-2 justify-between w-full">
                <button className="mx-2 border-2 border-[#439A86] px-3 rounded-full text-[#439A86] border-dotted">
                  + Add a filter
                </button>
                {data && data.response.data && (
                  <Pagination data={data.response.data.pagination} />
                )}
              </div>
              <DataTable
                TableHeading={TableHeading2}
                TableData={data?.response?.data.data}
                isSecurityPage
              />
            </div>
          </div>
        </div>
      )}
    </DashboardLayout>
  );
}
