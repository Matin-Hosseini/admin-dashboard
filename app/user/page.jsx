import { Button } from "@mui/material";
import { cookies } from "next/headers";

const User = () => {
  const myCookies = cookies();
  console.log(myCookies.get("theme"));

  return (
    <div>
      {/* <Sidebar /> */}
      this is the user page
      <Button>this is the text</Button>
    </div>
  );
};

export default User;
