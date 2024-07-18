"use client";
import Sidebar from "./components/Sidebar";
import { useEffect, useState } from "react";
import Header from "@/app/components/Header";
import Table from "./components/Table";
import AddNewCustomer from "./components/AddNewCustomer";
import Cookies from "js-cookie";
import { useRouter } from "next/navigation";
import axios from "axios";

export default function Home() {
  const [isSidbarOpen, setIsSidebarOpen] = useState(false);
  const [customers, setCustomers] = useState([]);

  const router = useRouter();
  console.log(router);

  const token = Cookies.get("token");
  if (!token) {
    router.push("/login");
  }

  useEffect(() => {
    const getUsers = async () => {
      const res = await axios.post(
        "https://iroriginaltest.com/api/Customer/GetAllCustomers",
        {
          typeOfRegisterCustomer_Id: null,
          registerDate: null,
          phoneNumber: null,
          nationalCode: null,
          token: Cookies.get("token"),
        }
      );

      console.log(res.data);
      setCustomers(res.data.result.informationCustomer);
    };

    getUsers();
  }, []);

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
              <Table customers={customers} />
            </div>
          </main>
        </div>
      </div>
    </>
  );
}
