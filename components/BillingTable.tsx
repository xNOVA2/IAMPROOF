'use client'
import React, { useState } from 'react'
import {
    Table,
    TableBody,
    TableCell,
    TableHead,
    TableHeader,
    TableRow,
  } from "@/components/ui/table";
import { Avatar, AvatarFallback, AvatarImage } from './ui/avatar';
import { TableRowData2 } from '@/types/types';
import { Trash } from 'lucide-react';
import Image from 'next/image';
export default function BillingTable({TableHeading,TableData,isDataCenterPage}:{TableHeading:string[],TableData:TableRowData2[],isDataCenterPage?:boolean}) {
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
    <Table className="mt-3">
        <TableHeader>
          <TableRow className="bg-[#BCD8C1] bg-opacity-50 hover:bg-opacity-50 hover:bg-[#BCD8C1]  w-full rounded-sm h-5">
            <TableHead className="   w-52">
              <div className="flex items-center gap-6">
                <input
                  type="checkbox"
                  id="name"
                  checked={selectAll}
                  className="h-4 w-4 rounded-3xl shadow checked:bg-[#439A86]  focus:ring-0 checked:text-[#439A86]"
                  onChange={() => setSelectAll(!selectAll)}
                />
  
                <label htmlFor="name" className="font-bold">
                  Name
                </label>
              </div>
            </TableHead>
            {TableHeading.map((heading, index) => (
    <TableHead key={index} className="font-bold">
      {heading}
    </TableHead>
  ))}
          </TableRow>
        </TableHeader>
        <TableBody>
        {TableData.map((row, index) => (
    <TableRow key={index}>
      <TableCell className="w-52">
        <div className="flex items-center gap-6">
          <input
            type="checkbox"
            checked={selectAll || selectedRows.includes(index as never)}
            onChange={() => handleCheckboxChange(index)}
            className="h-4 w-4 rounded-3xl shadow checked:bg-[#439A86] focus:ring-0 checked:text-[#439A86]"
          />
          <div className="flex gap-2 items-center">
            <Avatar>
              <AvatarImage src="https://github.com/shadcn.png" alt="@shadcn" />
              <AvatarFallback>CN</AvatarFallback>
            </Avatar>
            <p>{row.name}</p>
          </div>
        </div>
      </TableCell>
      <TableCell className="w-60">{row.email}</TableCell>
      <TableCell>
        <div >
           <div className="bg-[#439A86] text-start py-1 inline-block p-2 font-bold text-white rounded-full text-md">{isDataCenterPage? row.DataOptionsIn : row.subscriptionStatus} </div>
        </div>
      </TableCell>
      <TableCell className="">
        {isDataCenterPage? <Trash  className='ml-5'/> : row.paymentPlan}
      </TableCell>
      <TableCell className=" underline text-[#439A86] ">{isDataCenterPage?  <Image src="/assets/dots.png" width={6} height={10}  alt=''  className='ml-10'/>:row.paymentDue} </TableCell>
    </TableRow>
  ))}
  
  
        </TableBody>
      </Table>
  )
}
