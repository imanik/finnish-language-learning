import React from "react";
import { useTheme } from "../../contexts/ThemeContext";

interface BodyWrapperProps{
    children: React.ReactNode
}

function BodyWrapper({children}:BodyWrapperProps){

   const {theme} = useTheme() 

    let bodyClass = "min-h-screen p-6 font-['Roboto']"

    if(theme === "light"){

        bodyClass+= " bg-teal-50"

    }
    
    else if(theme === "dark"){

        bodyClass+= " bg-gray-900"

    }

    return <div className={bodyClass}>{children}</div>
}

export default BodyWrapper;