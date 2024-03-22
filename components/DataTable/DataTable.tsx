'use client'
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import { Switch } from "@/components/ui/switch"
import { useState } from "react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { TableRowData } from "@/types/types";
import Link from "next/link";


const DataTable = ({ TableHeading, TableData, isSecurityPage }: { TableHeading: string[], TableData: TableRowData[], isSecurityPage?: boolean }) => {
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
        {TableData.map((row: TableRowData, index) => (
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
                  <Dialog>
                    <DialogTrigger asChild>
                      <Avatar className="cursor-pointer">
                        <AvatarImage src="https://github.com/shadcn.png" alt="@shadcn" />
                        <AvatarFallback>CN</AvatarFallback>
                      </Avatar>
                    </DialogTrigger>
                    <DialogContent>
                      <DialogHeader>
                        <DialogTitle>Are you absolutely sure?</DialogTitle>
                        <DialogDescription>
                          This action cannot be undone. This will permanently delete your account
                          and remove your data from our servers.
                        </DialogDescription>
                      </DialogHeader>
                    </DialogContent>
                  </Dialog>

                  <p>{row.name}</p>
                </div>
              </div>
            </TableCell>
            <TableCell className="w-60">{row.email}</TableCell>
            <TableCell>
              <div >
                {isSecurityPage ? row.SecondaryEmail : <div className="bg-[#439A86] text-start py-1 inline-block p-2 font-bold text-white rounded-full text-md">{row.status}</div>}
              </div>
            </TableCell>
            <TableCell className="">
              <div className="bg-[#439A86] text-start py-1 inline-block p-2 font-bold text-white rounded-full text-md">
                {isSecurityPage ? row["2-Factor"] : row.accountType}

              </div>
            </TableCell>
            <TableCell className={`${isSecurityPage ? 'px-8  text-[#439A86]' : null}`}> {isSecurityPage ? <Link className="underline text-center " href={''}>send link</Link> : row.lastSignIn}</TableCell>
            <TableCell className="">{isSecurityPage ? <Switch /> : row.dataUsage} </TableCell>
          </TableRow>
        ))}


        {/* Add more rows as needed */}
      </TableBody>
    </Table>
  );
};

export default DataTable;