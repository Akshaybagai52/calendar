"use client"
import { useAppDispatch, useAppSelector } from "@/store/hooks";
import { Theme } from "../../types/interface";
import { setTheme } from "@/store/app.slice";
import { FaMoon } from "react-icons/fa";
import { FaSun } from "react-icons/fa";
import { useEffect, useState } from "react";

function ModeIcon() {
  const dispatch = useAppDispatch();
  const storeTheme = useAppSelector((state) => state.theme);
  const prefTheme = window.matchMedia("dark").matches
    ? Theme.DARK
    : Theme.LIGHT;

  const currentTheme = storeTheme ?? prefTheme;
  useEffect(() => {
    if (!storeTheme) {
      document.documentElement.setAttribute("data-theme", prefTheme);
    } else {
      dispatch(setTheme(storeTheme));
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <>
      <div className="flex rounded-[20px] bg-white h-[34px] w-[60px] gap-3 p-2 relative ">
        <button onClick={() => dispatch(setTheme(Theme.LIGHT))}>
          <FaSun />
        </button>
        <button onClick={() => dispatch(setTheme(Theme.DARK))}>
          <FaMoon />
        </button>
        <span className={`absolute rounded-full bg-black z-10  transition-all h-[20px] w-[20px]  ${
          currentTheme === "dark" ? 'right-[7px] duration-500' : 'right-[33px] duration-500'}`} ></span>
      </div>

      {/* <button
        className="text-white"
        onClick={() =>
          dispatch(
            setTheme(currentTheme === Theme.LIGHT ? Theme.DARK : Theme.LIGHT)
          )
        }
      >
        {currentTheme === Theme.LIGHT ? "Dark" : "Light"}
      </button> */}
    </>
  );
}
export default ModeIcon;
