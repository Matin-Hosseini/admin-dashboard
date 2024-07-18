"use client";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import Image from "next/image";
import chess from "@/public/images/login/chess.jpg";
import chess2 from "@/public/images/login/chess-vertical.jpg";
import {
  Button,
  Checkbox,
  FormControl,
  FormControlLabel,
  FormGroup,
  IconButton,
  InputAdornment,
  InputLabel,
  OutlinedInput,
  Snackbar,
} from "@mui/material";
import { IoEye } from "react-icons/io5";
import { IoMdEyeOff } from "react-icons/io";

import { useState } from "react";
import Logo from "../components/Logo";
import { useForm } from "react-hook-form";
import axios from "axios";
import ThreeDotsLoading from "../components/ThreeDotLoading";
import { IoMdClose } from "react-icons/io";
import Cookies from "js-cookie";
import { useRouter } from "next/navigation";

const loginFormControlStyles = {
  width: "100%",
  mb: 2,
  "& label, & label.Mui-focused": { color: "#fff" },
  "& fieldset, ": { borderColor: "#fff !important" },
  "& input": { color: "#fff" },
  "& svg": { color: "#fff" },
};

const loginFieldsSchema = z.object({
  username: z.string().min(1, "نام کاربری الزامی است."),
  password: z.string().min(1, "رمز عبور الزامی است."),
  remember_me: z.boolean(),
});

const Login = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [showSnackbar, setShowSnackbar] = useState(false);
  const [snackbarTitle, setSnackbarTitle] = useState("");

  const router = useRouter();

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm({
    resolver: zodResolver(loginFieldsSchema),
  });

  const handleLogin = async (data) => {
    console.log(data);
    try {
      const res = await axios.post(
        "https://iroriginaltest.com/api/Account/GetToken",
        {
          userName: data.username,
          password: data.password,
        }
      );

      Cookies.set("token", res.data.result, { expires: 1, path: "" });
      setShowSnackbar(true);
      setSnackbarTitle("حوش آمدید.");
      router.push("/");
    } catch (error) {
      setShowSnackbar(true);
      if (error.response.status === 400) {
        setSnackbarTitle("نام کاربری یا رمز عبور اشتباه است.");
      } else {
        setSnackbarTitle("خطا در برقراری ارتباط");
      }
    }
  };

  return (
    <div className="bg-black relative">
      <div className="w-vw h-dvh md:hidden">
        <Image
          src={chess2}
          style={{ width: "100%", height: "100%", objectFit: "contain" }}
        />
      </div>
      <div className="w-vw h-dvh hidden md:block">
        <Image
          src={chess}
          style={{ width: "100%", height: "100%", objectFit: "contain" }}
        />
      </div>

      <form
        className="absolute top-1/2 right-1/2 px-5 w-3/4 md:w-auto py-5 rounded-lg  bg-[rgba(255,255,255,0.2)] backdrop-blur-[2px] translate-x-1/2 -translate-y-1/2 text-white"
        onSubmit={handleSubmit(handleLogin)}
      >
        <div className="flex justify-center mb-5">
          <Logo />
        </div>
        <FormControl sx={loginFormControlStyles} variant="outlined">
          <InputLabel htmlFor="outlined-adornment-password">
            نام کاربری
          </InputLabel>
          <OutlinedInput
            {...register("username")}
            id="outlined-adornment-password"
            type="text"
            label="username"
          />
          {errors.username && (
            <span className="text-red-400">{errors.username.message}</span>
          )}
        </FormControl>
        <FormControl sx={loginFormControlStyles} variant="outlined">
          <InputLabel htmlFor="outlined-adornment-password">
            رمز عبور
          </InputLabel>
          <OutlinedInput
            {...register("password")}
            id="outlined-adornment-password"
            type={showPassword ? "text" : "password"}
            endAdornment={
              <InputAdornment position="end">
                <IconButton
                  aria-label="toggle password visibility"
                  onClick={() => setShowPassword((show) => !show)}
                  onMouseDown={(e) => e.preventDefault()}
                  edge="end"
                >
                  {showPassword ? <IoMdEyeOff /> : <IoEye />}
                </IconButton>
              </InputAdornment>
            }
            label="Password"
          />
          {errors.password && (
            <span className="text-red-400">{errors.password.message}</span>
          )}
        </FormControl>

        <FormGroup sx={{ mb: 1 }}>
          <FormControlLabel
            control={
              <Checkbox
                {...register("remember_me")}
                sx={{
                  "&, &.Mui-checked": { color: "#fff" },
                }}
              />
            }
            label="مرا به خاطر بسپار"
          />
        </FormGroup>

        <Button
          variant="contained"
          type="submit"
          className="w-full h-12 flex items-center justify-center bg-gray-500"
          disabled={isSubmitting}
        >
          {isSubmitting ? <ThreeDotsLoading /> : "ورود به پنل"}
        </Button>
      </form>

      <Snackbar
        open={showSnackbar}
        autoHideDuration={3000}
        onClose={() => setShowSnackbar(false)}
        message={snackbarTitle}
        action={
          <IconButton color="inherit" onClick={() => setShowSnackbar(false)}>
            <IoMdClose />
          </IconButton>
        }
      />
    </div>
  );
};

export default Login;
