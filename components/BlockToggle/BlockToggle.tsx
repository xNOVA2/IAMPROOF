import { useMutation } from "@tanstack/react-query";
import { toggleBlock } from "@/API/dashboard.api";
import { useState } from "react";
import Image from "next/image";
import { toast } from "sonner";

export default function BlockToggle({ userId, isActive }: { userId: string; isActive: boolean }) {
  const { mutateAsync } = useMutation({
    mutationFn: toggleBlock,
  });

  const [checked, setChecked] = useState(isActive);

  const toggle = async () => {
    const data = await mutateAsync(userId);
    if (data.success) {
      toast.success(
        `${checked ? "User Account has been unlocked successfully" : "User Account has been locked successfully"}`
      );
      setChecked(!checked);
    } else {
      toast.error("Something went wrong. Please try again.");
    }
  };

  return (
    <div className="flex items-center">
      <div
        className={`relative w-16 h-8 flex items-center rounded-full p-1 cursor-pointer ${
          checked ? "bg-green-400" : "bg-gray-300"
        }`}
        onClick={toggle}
      >
        <div
          className={`bg-white w-7 h-7 rounded-full shadow-md transform duration-300 ease-in-out ${
            checked ? "translate-x-8" : "translate-x-1"
          }`}
        >
          {checked ? (
            <Image src={"/assets/unlock.png"} alt="Unlock Icon" width={20} height={20} />
          ) : (
            <Image src={"/assets/lock.png"} alt="Lock Icon" width={20} height={20} />
          )}
        </div>
      </div>
      <span className="ml-2 text-sm">{checked ? "Unlocked" : "Locked"}</span>
    </div>
  );
}
