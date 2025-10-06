import React from "react";
import { useTheme } from "../contexts/ThemeContext";
import { Link } from "react-router-dom";


interface NavWrapperPros {
    title: string,
    link: string,
    children: React.ReactNode
}

function NavWrapper({children, title, link}: NavWrapperPros) {

    const {theme} = useTheme()
    
    let navClass = "text-teal-600 hover:underline mb-6 inline-block fixed top-0 left-0 w-full  px-4 py-2 shadow-md"
    
    if(theme === "light"){
        navClass += " bg-teal-100"
    }
    else{
        navClass += " bg-gray-800"

    }

return (
  <>
    {title && link && (
      <Link to={link} className={navClass}>
        {title}
      </Link>
    )}
    {children}
  </>
);

}

export default NavWrapper

