import { useState } from "react";

export default function Navbar() {
  const [show, setShow] = useState(false);

  const handleClick = () => {
    setShow(!show);
  };

  const menuActive = show ? "translate-x-0" : "-translate-x-full";

  return (
    <>
      <nav className="w-full z-50 fixed p-3">
        <div className="bg-white shadow-md hover:shadow-xs hover:shadow-blue-500 transition-all duration-500 mt-2 fixed top-0 left-1/2 transform -translate-x-1/2 rounded-full flex w-[350px] md:w-[600px] px-4 py-1 justify-between items-center">
          <div className="flex items-center">
            <img src="/icon.png" alt="" className="w-8 h-8" />
          </div>
          <ul
            className={`md:flex md:items-center md:justify-center md:bg-transparent bg-white rounded-r-xl md:w-96 md:static absolute top-52 w-52 -left-14 text-center md:translate-x-0  md:p-0 p-5 space-y-3 md:space-y-0 md:shadow-none shadow-lg h-36 md:h-auto md:gap-10 text-xs md:px-3 md:py-2 ${menuActive} transition-all duration-500`}
          >
            <li className="hover:text-blue-500 group active:bg-gray-200 md:active:bg-transparent  active:text-blue-900 transition-colors duration-300">
              <a href="">Home</a>
              <div className="h-0.5 w-0 group-hover:w-full group-active:bg-blue-700 bg-blue-600 transition-all duration-300"></div>
            </li>
            <li className="hover:text-blue-500 group active:bg-gray-200 md:active:bg-transparent active:text-blue-900 transition-colors duration-300">
              <a href="">About Us</a>
              <div className="h-0.5 w-0 group-hover:w-full group-active:bg-blue-700 bg-blue-600 transition-all duration-300"></div>
            </li>
            <li className="hover:text-blue-500 group active:bg-gray-200 md:active:bg-transparent active:text-blue-900 transition-colors duration-300">
              <a href="">Testimoni</a>
              <div className="h-0.5 w-0 group-hover:w-full group-active:bg-blue-700 bg-blue-600 transition-all duration-300"></div>
            </li>
            <li className="hover:text-blue-500 group active:bg-gray-200 md:active:bg-transparent active:text-blue-900 transition-colors duration-300">
              <a href="">Price</a>
              <div className="h-0.5 w-0 group-hover:w-full group-active:bg-blue-700 bg-blue-600 transition-all duration-300"></div>
            </li>
          </ul>
          <div className="group/contact gap-4 flex items-center">
            <a
              href="#"
              className="active:bg-gray-300 text-sm shadow rounded-lg hover:text-blue-500  px-2 active:text-blue-900 transition-colors duration-300"
            >
              Contact us
            </a>
            <button
              className="md:hidden active:bg-gray-300 hover:text-blue-500  px-2 active:text-blue-900 transition-colors duration-300 "
              onClick={handleClick}
            >
              <i className="ri-menu-5-line"></i>
            </button>
          </div>
        </div>
      </nav>
    </>
  );
}
