

import { useAppDispatch, useAppSelector } from "@/store/hooks";
import { Theme } from "../../types/interface";
import { setTheme } from "@/store/app.slice";

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
      <button
        className="text-white"
        onClick={() =>
          dispatch(
            setTheme(currentTheme === Theme.LIGHT ? Theme.DARK : Theme.LIGHT)
          )
        }
      >
        {currentTheme === Theme.LIGHT ? "Dark" : "Light"}
      </button>
      
    </>
  );
}
export default ModeIcon;

