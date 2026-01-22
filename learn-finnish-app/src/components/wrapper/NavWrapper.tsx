import React from "react";
import { useTheme } from "../../contexts/ThemeContext";
import { Link } from "react-router-dom";

interface NavWrapperProps {
  title: string;
  link: string;
  children: React.ReactNode;
}

function NavWrapper({ children, title, link }: NavWrapperProps) {
  const { theme } = useTheme();

  let navClass ="text-teal-600 hover:underline px-4 py-2 fixed top-4 left-4 shadow-md rounded";
  let navClass2 ="text-teal-600 hover:underline px-4 py-2 fixed top-4 right-4 shadow-md rounded";

  navClass += theme === "light" ? " bg-teal-100" : " bg-gray-900";
  navClass2 += theme === "light" ? " bg-teal-100" : " bg-gray-900";

  return (
    <div className=" bg-teal-800 ">
      {/* Left-side floating link */}
      {title && link && (
        <Link to={link} className={navClass}>
          {title}
        </Link>
      )}

      {/* Right-side floating link */}
      <Link
        to="/"
        className={navClass2}
      >
        Back to Home →
      </Link>

      {children}
    </div>
  );
}

export default NavWrapper;
