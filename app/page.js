"use client";
import Sidebar from "./components/Sidebar";
import { useState } from "react";
import Header from "@/app/components/Header";
import Table from "./components/Table";
import { Button } from "@mui/material";
import { RiUserAddLine } from "react-icons/ri";
import AddNewCustomer from "./components/AddNewCustomer";

export default function Home() {
  const [isSidbarOpen, setIsSidebarOpen] = useState(false);

  return (
    <>
      <div className="grid grid-cols-[300px_1fr]">
        <Sidebar
          isOpen={isSidbarOpen}
          onClose={() => setIsSidebarOpen(false)}
        />

        <div className="main-wrapper col-span-2 lg:col-start-2">
          <Header onSidebar={() => setIsSidebarOpen(true)} />
          <main className="main">
            <div className="content">
              <AddNewCustomer />
              <Table />
            </div>
          </main>
        </div>
      </div>
    </>
  );
}
