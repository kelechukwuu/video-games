import React, { useContext, useEffect, useState } from "react";
import logo from "../assets/images/logo-6ec23eb2.png";
import { HiOutlineSearch } from "react-icons/hi";
import { HiMoon } from "react-icons/hi";
import { HiOutlineSun } from "react-icons/hi";
import { ThemeContext } from "../Context/ThemeContext";

const Header = () => {
  const [toggle, setToggle] = useState(false);
  const {theme, setTheme}=useContext(ThemeContext)
  useEffect(()=>{
    console.log("Theme", theme)
  },[])
  return (
    <div className="flex items-center p-3 gap-2">
      <img src={logo} width={60} />
      <div className="flex bg-slate-200 p-2 w-full rounded-full items-center mx-5 gap-2">
        <HiOutlineSearch />
        <input placeholder="Search Games" className="w-[100%] outline-none" />
      </div>
      <div>
        {theme == 'dark' ? (
          <HiMoon
            className=" text-[35px] bg-slate-200 rounded-full cursor-pointer"
            onClick={() => {setTheme('light'); localStorage.setItem('theme','light')}}
          />
        ) : (
          <HiOutlineSun
            className=" text-[35px] bg-slate-200 rounded-full cursor-pointer"
            onClick={() => {setTheme('dark'); localStorage.setItem('theme','dark')}}
          />
        )}
      </div>
    </div>
  );
};

export default Header;
