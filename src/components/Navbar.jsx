// components/Navbar.jsx
import { useState, useEffect } from "react";

export default function Navbar() {
  const [show, setShow] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  const handleClick = () => {
    setShow(!show);
  };

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${scrolled ? 'py-1' : 'py-2'}`}>
      <div className={`max-w-[95vw] mx-auto shadow-md hover:shadow-xs hover:shadow-blue-500 transition-all duration-500 rounded-full flex px-4 py-1 justify-between items-center bg-white`}>
        <div className="flex items-center">
          <img src="/icon.png" alt="Logo" className="w-8 h-8" />
        </div>
        
        <ul className="hidden md:flex items-center justify-center gap-10 text-xs px-3 py-2">
          {['Home', 'About Us', 'Testimoni', 'Price'].map((item) => (
            <li key={item} className="hover:text-blue-500 group transition-colors duration-300">
              <a href="#" className="block py-2">{item}</a>
              <div className="h-0.5 w-0 group-hover:w-full bg-blue-600 transition-all duration-300"></div>
            </li>
          ))}
        </ul>

        <div className="flex items-center gap-4">
          <a
            href="#"
            className="hidden md:block text-sm shadow rounded-lg hover:bg-gray-100 px-4 py-1 transition-colors duration-300"
          >
            Contact us
          </a>
          <button
            className="md:hidden text-xl"
            onClick={handleClick}
            aria-label="Toggle menu"
          >
            <i className={show ? "ri-close-line" : "ri-menu-5-line"}></i>
          </button>
        </div>
      </div>
      
      <div className={`md:hidden bg-white shadow-lg absolute top-full left-0 w-full transition-all duration-300 overflow-hidden ${show ? 'max-h-96' : 'max-h-0'}`}>
        <ul className="py-3 px-4 space-y-3">
          {['Home', 'About Us', 'Testimoni', 'Price'].map((item) => (
            <li key={item}>
              <a 
                href="#" 
                className="block py-2 px-4 hover:bg-gray-100 rounded-lg transition-colors duration-300"
                onClick={() => setShow(false)}
              >
                {item}
              </a>
            </li>
          ))}
          <li>
            <a 
              href="#" 
              className="block py-2 px-4 bg-blue-100 text-blue-700 rounded-lg font-medium text-center mt-2"
              onClick={() => setShow(false)}
            >
              Contact us
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
}