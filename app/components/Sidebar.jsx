"use client";
import { IconButton } from "@mui/material";
import Logo from "./Logo";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { PiUsers } from "react-icons/pi";
import { IoMdClose } from "react-icons/io";

const menuItems = [];

const Sidebar = ({ isOpen, onClose }) => {
  const pathName = usePathname();

  return (
    <aside
      className={`side-bar ${isOpen ? "right-0" : "-right-[300px]"} lg:right-0`}
    >
      <div className="content p-4">
        <div className="flex justify-between items-center mb-10">
          <Logo />
          <IconButton onClick={() => onClose()}>
            <IoMdClose />
          </IconButton>
        </div>

        <ul>
          <li className="py-2 px-4 bg-blue-800 text-white rounded-md ">
            <Link href={""} className="flex items-center gap-2">
              <PiUsers />
              کاربران
            </Link>
          </li>
          <li>
            <Link
              href={"/user"}
              className={pathName === "/user" ? "bg-red-400" : ""}
            >
              آیتم 1
            </Link>
          </li>
          <li>
            <Link href={""}>آیتم 2</Link>
          </li>
          <li>
            <Link href={""}>آیتم 3</Link>
          </li>
          <li>
            <Link href={""}>آیتم 4</Link>
          </li>
        </ul>
      </div>
    </aside>
  );
};

export default Sidebar;
