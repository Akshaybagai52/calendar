"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import logo from "../../assets/logo-white.png";
import { FaBars } from "react-icons/fa";
import ModeIcon from "../theme/mode-icon";
import Image from "next/image";
import { useState } from "react";
import "../homePage.css";
import { BellSvg } from "../notification/svg";
import NotificationDetails from "../notification/notificationDetails";

export default function Navbar() {
  const [FaBarsToggle, setFaBarsToggle] = useState<boolean>(false);
  const router = usePathname();
  let localNotification: any = localStorage.getItem("notification");
  const storeNotification: any = JSON.parse(localNotification);
  const [showNotification, setShowNotification] = useState<boolean>(false);

  const isLinkActive = (href: string) => {
    return router === href
      ? "sm:bg-black sm:p-0  sm:rounded-none  bg-white text-[#6366f1] px-2.5 py-0.5 rounded-[30px]"
      : "";
  };

  return (
    <div>
      {/* <Navbar /> */}
      <header className="bg-black border-solid fixed z-[999] top-0 inset-x-0 ">
        <div className="container ">
          <div className="flex justify-between items-center relative ">
            {/* Logo */}
            <Link href={"/"} className="text-red-500 font-bold text-4xl">
              <Image src={logo} alt="logo" className="sm:w-[64px] w-[100px]" />
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
                <li className="sm:hidden text-[black] rounded px-3.5 py-1.5 bg-white">
                  <Link href="/login">Login</Link>
                </li>
                <li className="sm:hidden inline-flex items-center gap-1 relative">
                  <ModeIcon />
                  <span className="cursor-pointer">
                  <BellSvg />{" "}
                  <span
                    className="notification_num text-white absolute top-[6px] left-[74px] right-0 z-1"
                    onClick={() => setShowNotification(!showNotification)}
                  >
                    {!storeNotification?0:storeNotification.length}
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
         
              <div className={`absolute top-[96px] ${showNotification?"right-[-150px] duration-500":"right-[-500px]  duration-500"}  `}>
                <NotificationDetails />
              </div>
            
          </div>
        </div>
      </header>
    </div>
  );
}
