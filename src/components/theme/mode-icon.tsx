"use client"
import { useAppDispatch, useAppSelector } from "@/store/hooks";
import { Theme } from "../../types/interface";
import { setTheme } from "@/store/app.slice";
import { FaMoon } from "react-icons/fa";
import { FaSun } from "react-icons/fa";
import { useEffect } from "react";

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

  const toggleTheme = () => {
    dispatch(setTheme(currentTheme === Theme.DARK ? Theme.LIGHT : Theme.DARK));
  };

  return (
    <>
      <div className={`sm:text-black flex rounded-[20px] w-[60px] gap-3 p-2 relative ${currentTheme===Theme.DARK?'bg-white text-black':'bg-white text-black'}`} >
        <button onClick={ toggleTheme} >
          <FaSun />
        </button>
        <button onClick={(toggleTheme)} >
          <FaMoon />
        </button>
        <span className={`absolute rounded-full bg-black z-10  transition-all h-[20px] w-[20px]   ${
         currentTheme === Theme.DARK ? 'right-[7px] duration-500' : 'right-[33px] duration-500'}`} onClick={toggleTheme} ></span>
      </div>

    </>
  );
}
export default ModeIcon;
