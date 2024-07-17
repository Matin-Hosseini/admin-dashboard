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
} from "@mui/material";
import { IoEye } from "react-icons/io5";
import { IoMdEyeOff } from "react-icons/io";

import { useState } from "react";
import Logo from "../components/Logo";
import { useForm } from "react-hook-form";
import axios from "axios";
import ThreeDotsLoading from "../components/ThreeDotLoading";

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

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm({
    resolver: zodResolver(loginFieldsSchema),
  });

  const handleLogin = async (data) => {
    // console.log(data);

    const res = await axios.post(
      "https://iroriginaltest.com/api/Account/GetToken",
      {
        data: {
          userName: "matinhosseini",
          password: "09129323541",
        },
      }
    );

    // const myHeaders = new Headers();
    // myHeaders.append("Content-Type", "application/json");

    // const raw = JSON.stringify({
    //   userName: "matinhosseini",
    //   password: "09129323541",
    // });
    // const requestOptions = {
    //   method: "POST",
    //   headers: myHeaders,
    //   body: raw,
    //   // redirect: "follow",\
    //   mode: "no-cors",
    // };

    // fetch("https://iroriginaltest.com/api/Account/GetToken", {
    //   method: "POST",
    //   headers: {
    //     "Content-Type": "application/json",
    //   },
    //   body: JSON.stringify({
    //     username: "matinhosseini",
    //     password: "09129323541",
    //   }),
    //   // mode: "no-cors",
    // }).then((res) => {
    //   console.log(res);
    // });
    console.log("response: ", res);
    console.log("data: ", res.data);

    // fetch("https://iroriginaltest.com/api/Account/GetToken", {
    //   method: "POST",
    //   body: JSON.stringify({
    //     userName: "matinhosseini",
    //     password: "09129323541",
    //   }),
    //   headers: {
    //     "Content-Type": "application/json",
    //   },
    //   // mode: "no-cors",
    // }).then((res) => console.log(res));

    // axios.post("https://iroriginaltest.com/api/Account/GetToken",)
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
    </div>
  );
};

export default Login;
