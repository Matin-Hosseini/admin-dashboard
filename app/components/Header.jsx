import {
  Avatar,
  FormControl,
  IconButton,
  InputAdornment,
  InputLabel,
  OutlinedInput,
  TextField,
} from "@mui/material";
import { useState } from "react";
import { CiMenuFries } from "react-icons/ci";
import { IoIosSearch } from "react-icons/io";
import profile from "@/public/images/profile.webp";

const Header = ({ onSidebar }) => {
  return (
    <header className="header">
      <div className="content flex items-center w-full">
        <IconButton className="ml-4 lg:hidden " onClick={onSidebar}>
          <CiMenuFries />
        </IconButton>
        <div className="flex items-center justify-between w-full">
          <FormControl
            sx={{
              m: 1,
              "& .MuiInputBase-root": { paddingLeft: "16px" },
              "& .MuiInputBase-input": { padding: "12.5px 14px" },
            }}
            variant="outlined"
          >
            <InputLabel
              sx={{
                top: "50%",
                transform: "translate(14px, -50%)",
                "&.Mui-focused": {
                  transform: "translate(14px, -180%)",
                  fontSize: ".8rem",
                },
                transition: ".2s",
              }}
              htmlFor="search-input"
            >
              جستجو
            </InputLabel>
            <OutlinedInput
              id="search-input"
              type="text"
              sx={{
                borderRadius: "10rem",
              }}
              endAdornment={
                <InputAdornment position="end">
                  <IconButton
                    aria-label="toggle password visibility"
                    edge="end"
                  >
                    <IoIosSearch />
                  </IconButton>
                </InputAdornment>
              }
              label="جستجو"
            />
          </FormControl>

          <Avatar src={profile.src} />
        </div>
      </div>
    </header>
  );
};

export default Header;
