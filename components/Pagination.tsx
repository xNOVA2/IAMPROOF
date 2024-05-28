"use client";
import React from "react";
import { PaginationTypes } from "@/types/types";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { usePathname, useRouter, useSearchParams } from "next/navigation";

export const Pagination = ({ data }: { data: PaginationTypes }) => {
  const { currentPage, hasNextPage, hasPrevPage, totalPages } = data;
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const router = useRouter();

  const handlePageChange = (pageNumber: number) => {
    const queryParams = new URLSearchParams(searchParams);
    queryParams.set("page", pageNumber.toString());

    const queryString = queryParams.toString();
    router.push(`${pathname}?${queryString}`, { scroll: false });
  };

  return (
    <div className="flex items-center gap-x-2 pr-10">
      <button
        disabled={!hasPrevPage}
        className="bg-[#439A86] text-white size-7 center rounded-md disabled:opacity-40"
        onClick={() => handlePageChange(currentPage - 1)}
      >
        <ChevronLeft className="size-5" />
      </button>
      <button className="bg-[#439A86] text-white rounded-md size-7 center">
        {currentPage}
      </button>

      <button
        className="bg-[#439A86] text-white size-7 center rounded-md disabled:opacity-40"
        disabled={!hasNextPage}
        onClick={() => handlePageChange(currentPage + 1)}
      >
        <ChevronRight className="size-5" />
      </button>
    </div>
  );
};
