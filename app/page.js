"use client";
import Image from "next/image";
import Sidebar from "./components/Sidebar";
import { IoIosSearch } from "react-icons/io";
import { usePathname } from "next/navigation";
import { CiMenuFries } from "react-icons/ci";
import { IconButton } from "@mui/material";
import { useState } from "react";

export default function Home() {
  const [isSidbarOpen, setIsSidebarOpen] = useState(false);

  return (
    <>
      <div className="grid grid-cols-[300px_1fr]">
        <Sidebar
          isOpen={isSidbarOpen}
          onClose={() => setIsSidebarOpen(false)}
        />

        <div className="main-wrapper col-start-2">
          <header className="header">
            <div className="content flex items-center ">
              <IconButton
                className="ml-4"
                onClick={() => setIsSidebarOpen(true)}
              >
                <CiMenuFries />
              </IconButton>
              <div className="bg-gray-300 max-w-[280px] py-1 px-3 rounded-full flex justify-between items-center">
                <input
                  className="bg-transparent outline-none text-gray-600"
                  type="text"
                  placeholder="جستجوی..."
                />
                <button>
                  <IoIosSearch />
                </button>
              </div>
            </div>
          </header>
          <main className="main">
            <div className="content">lorem200</div>
          </main>
        </div>
      </div>
    </>
  );
}
