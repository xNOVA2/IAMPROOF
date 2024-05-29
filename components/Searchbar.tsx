import Image from "next/image";
import { Input } from "./ui/input";
import { Avatar, AvatarFallback, AvatarImage } from "./ui/avatar";

export default function SearchBar({}) {
  return (
    <div className="flex  gap-2">
      <div className="relative flex-grow  ">
        <Input
          className="bg-[#BCD8C1] bg-opacity-10 placeholder:text-[#439A86] px-10 focus:border-transparent ]"
          placeholder="Search for users, groups or settings"
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
