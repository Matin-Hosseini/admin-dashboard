"use client";

import { Button } from "@mui/material";
import axios from "axios";
import Cookies from "js-cookie";
import { useEffect } from "react";

const User = () => {
  useEffect(() => {
    const setnRequest = async () => {
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

      console.log(res);
    };

    setnRequest();
  });
  return (
    <div>
      {/* <Sidebar /> */}
      this is the user page
      <Button>this is the text</Button>
    </div>
  );
};

export default User;
