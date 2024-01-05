import { useState } from "react"


export const OnscrollFile=()=>{
    const [navbar, setNavbar] = useState<boolean>(false)
    if (window.scrollY >= 10) {
        setNavbar(true)
      } else {
        setNavbar(false)
      }
  
    return navbar;
}