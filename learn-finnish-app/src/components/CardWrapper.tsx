// src/components/CardWrapper.tsx
import React from "react";
import { useTheme } from "../contexts/ThemeContext";


interface CardWrapperProps {
  title?: string;
  children: React.ReactNode;
}

function CardWrapper({ title, children }: CardWrapperProps) {
  const { theme } = useTheme();


  let cardClass = "p-6 rounded-lg shadow-lg w-full max-w-md";

  if (theme === "light") {
    cardClass += " bg-gradient-to-br from-teal-50 to-teal-200";
  } else if (theme === "dark") {
     // console.log(theme)
    cardClass += " bg-gray-800 border border-gray-700 text-white";
  } else if (theme === "rainbow") {
    cardClass += " bg-gradient-to-r from-pink-500 via-yellow-500 to-green-500 text-white";
  }

  return (
    <div className={cardClass}>
      {title && <h2 className="text-2xl font-semibold text-teal-500 mb-4">{title}</h2>}
      {children}
    </div>
  );
}

export default CardWrapper;
