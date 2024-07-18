"use client";
import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
} from "@mui/material";
import { CiLogout } from "react-icons/ci";
import Cookies from "js-cookie";
import { useRouter } from "next/navigation";
import { useState } from "react";

const LogoutBtn = () => {
  const [showLogoutDialog, setShowLogoutDialog] = useState(false);

  const router = useRouter();

  const logoutHandler = () => {
    Cookies.remove("token");
    router.push("/login");
  };

  return (
    <>
      <Button
        onClick={() => setShowLogoutDialog(true)}
        className="flex items-center gap-2 w-full"
        color="secondary"
      >
        <CiLogout />
        خروج از حساب کاربری
      </Button>
      <Dialog
        open={showLogoutDialog}
        onClose={() => setShowLogoutDialog(false)}
      >
        <DialogTitle id="alert-dialog-title">
          آیا از خروج از حساب کاربریتان اطمینان دارید؟
        </DialogTitle>

        <DialogActions>
          <Button onClick={() => setShowLogoutDialog(false)}>انصراف</Button>
          <Button
            variant="contained"
            onClick={logoutHandler}
            color="error"
            sx={{ px: 3 }}
          >
            بله
          </Button>
        </DialogActions>
      </Dialog>
    </>
  );
};

export default LogoutBtn;
