"use client";

import { Button } from "@mui/material";
import { useEffect } from "react";

const User = () => {
  useEffect(() => {
    const setnRequest = async () => {
      fetch("https://iroriginaltest.com/api/Customer/GetAllCustomers", {
        method: "POST",
        mode: "no-cors",
        body: JSON.stringify({
          typeOfRegisterCustomer_Id: 0,
          registerDate: "2024-07-17T12:09:41.535Z",
          phoneNumber: "09129323541",
          nationalCode: "0200040431",
          token:
            "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJodHRwOi8vc2NoZW1hcy54bWxzb2FwLm9yZy93cy8yMDA1LzA1L2lkZW50aXR5L2NsYWltcy9uYW1lIjoiYWRtaW4iLCJuYmYiOjE3MjExOTkwNTUsImV4cCI6MTcyMTI0MjI1NSwiaXNzIjoiaHR0cHM6Ly9pcm9yaWdpbmFsdGVzdC5jb20iLCJhdWQiOiJDYXBJcmFuT3JpZ2luYWwifQ.w7nlJ2RO1V18PD2f4j4mcrc-nk-s0UtYi917pkBn1FM",
        }),
      }).then((res) => console.log(res.headers));
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
