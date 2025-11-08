import React from "react";
import { useTheme } from "../contexts/ThemeContext";

interface PageWrapperProps{
    title: string,
    children: React.ReactNode
}

function PageWrapper({title, children}: PageWrapperProps){

   const {theme} = useTheme() 

    let pageClass = "p-6 rounded-lg shadow-lg max-w-2xl mx-auto mb-8"

    if(theme === "light"){

        pageClass+= " bg-gradient-to-br from-teal-50 to-teal-200"

    }
    
    else if(theme === "dark"){

        pageClass+= " bg-gradient-to-br from-black via-gray-800 to-gray-900 shadow-sm shadow-teal-900"

    }

    return( <div className={pageClass}>
      {title && <h2 className="text-2xl font-semibold text-teal-500 mb-4">{title}</h2>}
      {children}
    </div>) 
}

export default PageWrapper;