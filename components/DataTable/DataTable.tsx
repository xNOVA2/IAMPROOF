"use client";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Dialog, DialogTrigger } from "@/components/ui/dialog";
import { useState } from "react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { TableRowData } from "@/types/types";
import Link from "next/link";
import UserDialog from "../UserDialog/UserDialog";
import Image from "next/image";
import BlockToggle from "../BlockToggle/BlockToggle";
import { toggleBlock } from "@/API/dashboard.api";
import { toast } from "sonner";
import { usePathname, useRouter, useSearchParams } from "next/navigation";

const DataTable = ({
  TableHeading,
  TableData,
  isSecurityPage,
  userId,
}: {
  TableHeading: string[];
  TableData: TableRowData[];
  isSecurityPage?: boolean;
  userId?: string;
}) => {
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const router = useRouter();

  const removeUserModal = () => {
    const queryParams = new URLSearchParams(searchParams);
    queryParams.delete("userId");

    const queryString = queryParams.toString();
    router.push(`${pathname}?${queryString}`, { scroll: false });
  };

  const [selectAll, setSelectAll] = useState(false);
  const [selectedRows, setSelectedRows] = useState([]);

  const [open, setOpen] = useState(userId ? true : false);

  const handleOpenChange = () => {
    if (userId) removeUserModal();
    else setOpen((prev) => !prev);
  };

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
    <div className="max-h-[75vh] overflow-y-auto">
      <Table className="mt-3">
        <TableHeader>
          <TableRow className="bg-[#BCD8C1] bg-opacity-50 hover:bg-opacity-50 hover:bg-[#BCD8C1]  w-full rounded-sm h-5">
            <TableHead className="w-52">
              <div className="flex items-center gap-6">
                <input
                  type="checkbox"
                  id="name"
                  checked={selectAll}
                  className="h-4 w-4  shadow checked:bg-[#439A86]  focus:ring-0 checked:text-[#439A86]"
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
        <TableBody className="">
          {TableData &&
            TableData.length > 0 &&
            TableData.map((row: TableRowData, index) => (
              <TableRow key={index}>
                <TableCell className="w-52">
                  <div className="flex items-center gap-6">
                    <input
                      type="checkbox"
                      checked={
                        selectAll || selectedRows.includes(index as never)
                      }
                      onChange={() => handleCheckboxChange(index)}
                      className="h-4 w-4 shadow checked:bg-[#439A86] focus:ring-0 checked:text-[#439A86]"
                    />
                    <div className="flex gap-2 items-center">
                      <Dialog
                      // open={open} onOpenChange={handleOpenChange}
                      >
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
                        {isSecurityPage ? (
                          <UserDialog
                            profileImageUrl="/assets/dummy.jpeg"
                            userInfo={{
                              userId: row._id,
                              userName: row.name,
                              subscriptionStatus: "Premium",
                            }}
                            additionalData={{
                              "primary EMAIL": "aliusaid55@gmail.com",
                              "2-FACTOR AUTHENTICATION": "EMAIL",
                              "SECONDARY EMAIL": "aliusaid55@gmail.com",
                            }}
                          >
                            <ManageAccount index={index} userId={row._id} />
                          </UserDialog>
                        ) : (
                          <UserDialog
                            profileImageUrl={`${
                              row.photo || "/assets/dummy.jpeg"
                            }`}
                            userInfo={{
                              userId: row._id,
                              userName: row.name,
                              subscriptionStatus: "Premium",
                            }}
                            colorIndex={2}
                            additionalData={{
                              EMAIL: row.email,
                              "SUBSCRIPTION STATUS": row.isActive
                                ? "ACTIVE"
                                : "DEACTIVATED",
                              "ACCOUNT TYPE": row.role?.toUpperCase(),
                              "LAST SIGN IN": "-",
                              "DATA USAGE": "-",
                            }}
                          />
                        )}
                      </Dialog>

                      <p>{row.name}</p>
                    </div>
                  </div>
                </TableCell>
                <TableCell className="w-60">{row.email}</TableCell>
                <TableCell>
                  <div>
                    {isSecurityPage ? (
                      row.SecondaryEmail || "-"
                    ) : (
                      <div className="bg-[#439A86] text-start py-1 inline-block p-2 font-bold text-white rounded-full text-md">
                        {row.isActive ? "ACTIVE" : "DEACTIVATED"}
                      </div>
                    )}
                  </div>
                </TableCell>
                <TableCell className="">
                  <div
                    className={`${
                      row["2-Factor"] ? "bg-[#439A86] text-white " : null
                    } text-start py-1 inline-block p-2 font-bold rounded-full text-md`}
                  >
                    {isSecurityPage
                      ? row["2-Factor"] || "-"
                      : row.role?.toUpperCase()}
                  </div>
                </TableCell>
                <TableCell
                  className={`${
                    isSecurityPage ? "px-8  text-[#439A86]" : null
                  }`}
                >
                  {" "}
                  {isSecurityPage ? (
                    <Link className="underline text-center " href={""}>
                      send link
                    </Link>
                  ) : (
                    row.lastSignIn || "-"
                  )}
                </TableCell>
                <TableCell className="">
                  {isSecurityPage ? (
                    <BlockToggle userId={row._id} isActive={row.isActive!} />
                  ) : (
                    row.dataUsage || "-"
                  )}{" "}
                </TableCell>
              </TableRow>
            ))}
        </TableBody>
      </Table>
    </div>
  );
};

function ManageAccount({ index, userId }: { index: number; userId: string }) {
  const toggleBlockUser = async (status: boolean) => {
    const data = await toggleBlock(userId, status);

    if (data.success)
      toast.success(
        `${
          status
            ? " User Account has been unlocked sucessfully"
            : "User Account has been locked successfully"
        }  `
      );
  };

  return (
    <div className="flex justify-center pt-10 gap-5">
      <p
        key={index}
        className="border-[#BCD8C1] border-2 flex transform items-center rounded-lg px-10 py-3 text-center text-[#439A86] font-bold text-lg transition-colors duration-300 bg-gray-100 "
      >
        <span className="mx-2 text-sm">RESET PASSWORD</span>
      </p>
      <p
        key={index}
        className="border-[#BCD8C1] border-2 flex transform items-center rounded-lg px-10 py-3 text-center text-[#439A86] font-bold text-lg transition-colors duration-300 bg-gray-100 cursor-pointer"
        onClick={() => toggleBlockUser(false)}
      >
        <Image
          src={"/assets/lock.png"}
          alt="Lock Account"
          width={25}
          height={25}
        />
        <span className="mx-2 text-sm"> LOCK ACCOUNT</span>
      </p>
      <p
        key={index}
        className="border-[#BCD8C1] border-2 flex transform items-center rounded-lg px-10 py-3 text-center text-[#439A86] font-bold text-lg transition-colors duration-300 bg-gray-100  cursor-pointer"
        onClick={() => toggleBlockUser(true)}
      >
        <Image
          src={"/assets/unlock.png"}
          alt="Unlock Account"
          width={25}
          height={25}
        />
        <span className="mx-2 text-sm">UNLOCK ACCOUNT</span>
      </p>
    </div>
  );
}
export default DataTable;
