'use client'
import Image from "next/image";
import { Input } from "./ui/input";
import { Avatar, AvatarFallback, AvatarImage } from "./ui/avatar";
import { ChangeEvent, useCallback, useEffect, useState } from "react";
import { Search } from "lucide-react";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import { useDebounce } from "@uidotdev/usehooks";

export default function SearchBar() {
  const [value, setValue] = useState('');
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const router = useRouter();

  const query = useDebounce(value, 700);

  const createQueryString = useCallback(
    (name: string, value: string) => {
      const params = new URLSearchParams(searchParams);
      params.set(name, value);
      params.delete("page");
      return params.toString();
    },
    [searchParams]
  );

  useEffect(() => {
    const currentQuery = searchParams.get("search") || "";

    // Reset page to 1 only when the search query changes
    if (query !== currentQuery) {
      router.push(`${pathname}?${createQueryString("search", query)}`);
    }
  }, [query, router, pathname, searchParams, createQueryString]);
  return (
    <div className="flex  gap-2">
      <div className="relative flex-grow  ">
        <Input
          className="bg-[#BCD8C1] bg-opacity-10 placeholder:text-[#439A86] px-10 focus:border-transparent ]"
          placeholder="Search for users, groups or settings"
          onChange={(e: ChangeEvent<HTMLInputElement>) =>
            setValue(e.target.value)
          }
        />
        <Image
          src={"/assets/Search.png"}
          alt="Search Icon"
          width={20}
          height={20}
          className="absolute top-3 left-3"
        />
      </div>
      <Avatar>
        <AvatarImage src="https://github.com/shadcn.png" />
        <AvatarFallback>KM</AvatarFallback>
      </Avatar>
    </div>
  );
}
