"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import logo from "../../assets/logo-white.png";
import { FaBars } from "react-icons/fa";
import ModeIcon from "../theme/mode-icon";
import Image from "next/image";
import { useState, useRef, useEffect } from "react";
import "../homePage.css";
import { BellSvg } from "../notification/svg";
import NotificationDetails from "../notification/notificationDetails";
import { Button } from "../buttons/buttons";
import { useAppSelector } from "@/store/hooks";
import { OnscrollFile } from "@/lib/onScrollFile";

export default function Navbar() {
  const [FaBarsToggle, setFaBarsToggle] = useState<boolean>(false);
  const router = usePathname();
  let localNotification: any = localStorage.getItem("notification");
  const [NavbarDrop,setNavbarDrop]=useState<boolean>(false)
  const storeNotification: any = JSON.parse(localNotification);
  const storeTheme = useAppSelector((state) => state.theme);

  const isLinkActive = (href: string) => {
    return router === href
      ? "sm:bg-black sm:p-0  sm:rounded-none  bg-white text-[#6366f1] px-2.5 py-0.5 rounded-[30px]"
      : "";
  };
  
  // outside click EventListener 
  const [showNotification, setShowNotification] = useState<boolean>(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handler = (e: any) => {
     
      if (!ref.current?.contains(e.target)) {
        setShowNotification(false);
      }
    };
    document.addEventListener("mousedown", handler);


    return () => {
      document.removeEventListener("mousedown", handler);
   
    };
  });
// console.log(OnscrollFile(),"ppp")
  // outside click EventListener 


  const changeBackground = () => {
    console.log(window.scrollY)
    if (window.scrollY >= 20) {
      setNavbarDrop(true)
    } else {
      setNavbarDrop(false)
    }
  }

  useEffect(() => {
    changeBackground()
    // adding the event when scroll change background
    window.addEventListener("scroll", changeBackground)
    return () => {
      window.removeEventListener("scroll", changeBackground);
   
    };
  })




  return (
    <div>
      {/* <Navbar /> */}
      <header className={` border-solid fixed z-[999] top-0 inset-x-0  ${storeTheme === 'dark' ? NavbarDrop?'backdrop-blur-xl !bg-[#18161666]':'bg-dark text-white' :NavbarDrop?'backdrop-blur-xl bg-[#18161666]':'bg-black'} `}>
        <div className="container ">
          <div className="flex justify-between items-center relative ">
            {/* Logo */}
            <Link href={"/"} className="text-red-500 font-bold text-4xl">
              <Image src={logo} alt="logo" className="sm:w-[64px] w-[70px] mx-0 my-[5px] px-[5px] py-[7px]  " />
            </Link>

            {/* Navigation Links */}
            <nav
              className="sm:absolute space-x-6 text-white px-10 py-2.5 border-2 border-solid border-[white] rounded-[30px] duration-500"
              style={{ left: FaBarsToggle === true ? "0" : "-178px" }}
            >
              <ul className="navUl sm:block flex items-center ">
                <li className={isLinkActive("/enterprise")}>
                  <Link href="/enterprise">EnterPrise</Link>
                </li>

                <li className={isLinkActive("/plans")}>
                  <Link href="/plans">Plans</Link>
                </li>

                <li className={isLinkActive("/products")}>
                  <Link href="/products">Products</Link>
                </li>

                {/* <li className={isLinkActive("/docs")}>
                  <Link href="/docs">Docs</Link>
                </li> */}

                <li className={`${isLinkActive("/blogs")} !border-none `}>
                  <Link href="/blogs">Blogs</Link>
                </li>
              </ul>
              {/* // mobile screen for  */}
              <div className="hidden sm:block !m-0">
                <div className="flex my-[5px] items-center  gap-3">
                  <Link
                    href="/login"
                    className="text-[black] mx-0 p-1 rounded-[5px] bg-white"
                  >
                    Login
                  </Link>
                  <ModeIcon />
                </div>
              </div>
            </nav>

            <div>
              <ul className=" flex gap-2 items-center ">
                <li>
                  {/* <Link href="/login">Login</Link> */}
                  <Button btnName="Login" pathname="login" />
                </li>
                <li className="sm:hidden inline-flex items-center gap-1 relative">
                  <ModeIcon />
                  <span 
                    className="cursor-pointer"
                    onClick={() => setShowNotification(!showNotification)}
                  >
                    <BellSvg />{" "}
                    <span className="notification_num text-white absolute top-[6px] left-[74px] right-0 z-1">
                      {!storeNotification ? 0 : storeNotification.length}
                    </span>
                  </span>
                </li>

                <span
                  className="text-white hidden sm:block pr-2 text-[24px]"
                  onClick={() => setFaBarsToggle(!FaBarsToggle)}
                >
                  <FaBars />
                </span>
              </ul>
            </div>

            <div
              ref={ref}
              id="#notification"
              className={`absolute top-[96px] ${
                showNotification
                  ? "right-[-150px] duration-500"
                  : "right-[-1000px]  duration-500 hidden "
              }  `}
            >
              <NotificationDetails />
            </div>
          </div>
        </div>
      </header>
    </div>
  );
}
