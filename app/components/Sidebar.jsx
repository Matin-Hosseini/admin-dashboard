"use client";
import { Button, IconButton } from "@mui/material";
import Logo from "./Logo";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { PiUsers } from "react-icons/pi";
import { IoMdClose } from "react-icons/io";
import { CiLogout } from "react-icons/ci";
import NavLink from "./NavLink";

const menuItems = [];

const Sidebar = ({ isOpen, onClose }) => {
  const pathName = usePathname();

  return (
    <aside
      className={`side-bar ${isOpen ? "right-0" : "-right-[300px]"} lg:right-0`}
    >
      <div className="content p-4">
        <div className="flex flex-col justify-between h-full">
          <div>
            <div className="flex justify-between lg:justify-center items-center mb-10">
              <Logo />
              <IconButton className="lg:hidden" onClick={() => onClose()}>
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
                <NavLink />
              </li>
              <li className="py-2 px-4">
                <Link
                  href={"/user"}
                  className={pathName === "/user" ? "bg-red-400" : ""}
                >
                  آیتم 1
                </Link>
              </li>
              <li className="py-2 px-4">
                <Link href={""}>آیتم 2</Link>
              </li>
              <li className="py-2 px-4">
                <Link href={""}>آیتم 3</Link>
              </li>
              <li className="py-2 px-4">
                <Link href={""}>آیتم 4</Link>
              </li>
            </ul>
          </div>

          <div>
            <Button
              className="flex items-center gap-2 w-full"
              color="secondary"
            >
              <CiLogout />
              خروج از حساب کاربری
            </Button>
          </div>
        </div>
      </div>
    </aside>
  );
};

export default Sidebar;
