// src/components/CardWrapper.tsx
import React from "react";
import { useTheme } from "../../contexts/ThemeContext";
import { useLocation } from "react-router-dom";


interface CardWrapperProps {
  title?: string;
  children: React.ReactNode;
}

function CardWrapper({ title, children }: CardWrapperProps) {
  const { theme } = useTheme();

    let mainBg = 'bg-gradient-to-br from-teal-50 to-teal-200'
  
    if(theme === 'light'){
        mainBg = "bg-gradient-to-br from-teal-50 to-teal-200";
    }else{
     mainBg = ' bg-gradient-to-br from-black via-gray-800 to-gray-900 shadow-sm shadow-teal-900'
      
    }

    const location = useLocation();
  const containerClass = location.pathname === "/"
    ? `${mainBg} p-6 rounded-lg shadow-lg w-full max-w-md`
    : `${mainBg} p-6 rounded-lg shadow-lg max-w-2xl mx-auto mb-6`;


  

  return (
    <div className={containerClass}>
      {title && <h2 className="text-2xl font-semibold text-teal-500 mb-4">{title}</h2>}
      {children}
    </div>
  );
}

export default CardWrapper;
