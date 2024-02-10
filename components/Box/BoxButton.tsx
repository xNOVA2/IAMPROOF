import Link from "next/link";

export default function BoxButton({ href, text }: { href: string; text: string }) {
    return (
      <Link
        className="border-[#439A86] py-1 w-72 text-sm mt-4 border-2 text-md text-center align-middle text-[#439A86] font-bold rounded-lg whitespace-nowrap overflow-hidden overflow-ellipsis"
        href={href}
        title={text}
      >
        {text}
      </Link>
    );
  }