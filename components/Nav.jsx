import Link from "next/link";
import React, { useState, useEffect } from "react";
import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai";

const Nav = () => {
  const [nav, setNav] = useState(false);
  const [color, setColor] = useState("transparent");
  const [textColor, setTextColor] = useState("white");

  const handleNav = () => {
    setNav(!nav);
  };

  useEffect(() => {
    const changeColor = () => {
      if (window.scrollY >= 90) {
        setColor("#ffffff");
        setTextColor("#000000");
      } else {
        setColor("transparent");
        setTextColor("#ffffff");
      }
    };
    window.addEventListener("scroll", changeColor);
  }, []);

  return (
    <div
      style={{ backgroundColor: `${color}` }}
      className="fixed left-0 top-0 w-full z-10 ease-in duration-300 shadow-lg"
    >
      <div className="max-w-[1240px] mx-3 m-auto flex justify-between items-center p-2 text-white">
        <Link href="/">
          <h1 style={{ color: `${textColor}` }} className="font-bold text-2xl">
            Barber
          </h1>
        </Link>

        <ul style={{ color: `${textColor}` }} className="hidden sm:flex">
          <li className="p-4 hidden lg:block">
            <Link href="/#about">O nás</Link>
          </li>
          <li className="p-4">
            <Link href="/#services">Služby & Cenník</Link>
          </li>
          <li className="p-4 ">
            <Link href="/#booking" className="semibold">
              Rezervácia
            </Link>
          </li>
          <li className="p-4">
            <Link href="/#barbers">Barberi</Link>
          </li>
          <li className="p-4">
            <Link href="/#contact">Kontakt</Link>
          </li>
        </ul>

        {/* Mobile Button */}
        <div onClick={handleNav} className="block sm:hidden z-10">
          {nav ? (
            <AiOutlineClose size={20} style={{ color: `${textColor}` }} />
          ) : (
            <AiOutlineMenu size={20} style={{ color: `${textColor}` }} />
          )}
        </div>

        {/* Mobile Menu */}
        <div
          className={
            nav
              ? "sm:hidden absolute top-0 left-0 right-0 bottom-0 flex justify-center items-center w-full h-screen bg-black text-center ease-in duration-300"
              : "sm:hidden absolute top-0 left-[-100%] right-0 bottom-0 flex justify-center items-center w-full h-screen bg-black text-center ease-in duration-300"
          }
        >
          <ul>
            <li
              onClick={handleNav}
              className="p-4 text-3xl text-white  hover:text-gray-500"
            >
              <a href="/#about">O nás</a>
            </li>
            <li
              onClick={handleNav}
              className="p-4 text-3xl hover:text-gray-500"
            >
              <a href="/#services">Služby & Cenník</a>
            </li>
            <li
              onClick={handleNav}
              className="p-4 text-3xl hover:text-gray-500"
            >
              <a href="/#booking">Rezervácia</a>
            </li>
            <li
              onClick={handleNav}
              className="p-4 text-3xl hover:text-gray-500"
            >
              <a href="/#barbers">Barberi</a>
            </li>
            <li
              onClick={handleNav}
              className="p-4 text-3xl hover:text-gray-500"
            >
              <a href="/#contact">Kontakt</a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Nav;
