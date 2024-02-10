import Link from "next/link";

export function UsersTableOptions({}) {
    return (
      <>
        <button className="border-2 border-[#439A86] px-6 rounded-full text-[#439A86]">
          <Link href={""}>Add a new user</Link>
        </button>
        <button className="border-2 border-[#439A86] px-6 rounded-full text-[#439A86]">
          <Link href={""}>Bulk update users </Link>
        </button>
  
        <button className="border-2 border-[#439A86] px-6 rounded-full text-[#439A86]">
          <Link href={""}>Download user log</Link>
        </button>
      </>
    );
  }
  
  export function TableOptions({ isUsersTableOption }: { isUsersTableOption: boolean }) {
    return (
      <div className="flex justify-end items-center pr-12 mt-2 gap-5">
        {isUsersTableOption ? <UsersTableOptions /> : null}
  
        <button className="border-2 border-[#439A86] px-6 rounded-full text-[#439A86]">
          <Link href={""}>More options</Link>
        </button>
      </div>
    );
  }
  