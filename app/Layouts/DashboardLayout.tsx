import { menuItems } from "@/data/navLinks";
import Image from "next/image";
import Link from "next/link";
import SearchBar from "@/components/Searchbar";

export default function DashboardLayout({
  children,
  active,
}: {
  children: React.ReactNode;
  active: string;
}) {
  return (
    <div className="flex w-full">
      <aside className="sticky top-0 left-0 flex h-screen min-w-52 flex-col overflow-y-auto border-r bg-white px-5 py-4">
        <div className="flex justify-center">
          <Link href={"/"}>
            <Image
              src={"/assets/logo.svg"}
              alt="Logo"
              width={150}
              height={200}
            />
          </Link>
        </div>
        <div className="mt-6 flex flex-1 flex-col justify-between">
          <nav className="space-x-5 space-y-6 ">
            <div className="space-y-3 ">
              {menuItems.map((item) => (
                <Link
                  key={item.title}
                  className={`border-[#BCD8C1] border-2 flex transform items-center rounded-lg px-2 py-4 text-center text-gray-600 transition-colors duration-300 ${
                    String(active) === item.id ? "bg-gray-100" : null
                  } hover:text-gray-700`}
                  href={item.href}
                >
                  <Image
                    src={item.logo}
                    alt={item.title}
                    width={24}
                    height={24}
                  />
                  <span className="mx-2 text-sm ">{item.title}</span>
                </Link>
              ))}
            </div>
          </nav>
        </div>
      </aside>

      <div className="flex flex-col px-5 py-8 w-full min-h-screen">
        <SearchBar />
        {children}
      </div>
    </div>
  );
}
