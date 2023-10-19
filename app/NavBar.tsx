"use client";

import { usePathname } from "next/navigation";
import Link from "next/link";
import { BsFillBugFill } from "react-icons/bs";

const NavBar = () => {
  const currentPath = usePathname();

  const links = [
    { label: "Dashboard", href: "/" },
    { label: "Issues", href: "/issues/list" },
  ];

  return (
    <div className="navbar bg-base-100 border-b-[0.5px] border-neutral-content px-5">
      <Link href="/" className="mr-3">
        <BsFillBugFill />
      </Link>
      {links.map((ele, i) => (
        <Link
          key={i}
          href={ele.href}
          className={`btn btn-ghost normal-case text-base font-normal ${
            currentPath === ele.href && "text-accent font-medium"
          }`}
        >
          {ele.label}
        </Link>
      ))}
    </div>
  );
};

export default NavBar;
