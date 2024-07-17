"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

const { PiUsers } = require("react-icons/pi");

const NavLink = ({ to, name }) => {
  const pathName = usePathname();
  console.log(pathName);

  return (
    <Link
      href={{ to }}
      className={`flex items-center gap-2 px-3 py-2 rounded-md mb-2 ${
        pathName === to && "bg-blue-800 text-white"
      }`}
    >
      <PiUsers />
      {name}
    </Link>
  );
};

export default NavLink;
