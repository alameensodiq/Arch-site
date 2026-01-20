// components/Navbar.jsx
import { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import logo from "../../assets/logo.svg";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-white border-b border-gray-200 shadow-sm sticky top-0 z-50 w-full">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:pl-8 lg:pr-1">
        <div className="flex justify-between items-center h-25">
          {/* Logo + Company Name */}
          <img src={logo} alt="Arch & Build" className="h-16 w-auto" />

          <div className="hidden md:flex items-center space-x-9">
            {[
              { name: "Home", to: "/" },
              { name: "About Us", to: "/about" },
              { name: "Services", to: "/services" },
              { name: "Projects", to: "/projects" }
            ].map((item) => (
              <NavLink
                key={item.name}
                to={item.to}
                end={item.to === "/"}
                className={({ isActive }) => `
        relative text-[14px] font-medium pb-1 transition-all duration-300
        ${isActive ? "!text-[#00AAE8]" : "!text-[#000000] hover:!text-[#00AAE8]"}
        after:content-[''] after:absolute after:left-0 after:-bottom-[1px]
        after:h-[1px] after:w-full after:bg-[#00AAE8]
        after:origin-left after:transition-transform after:duration-300
        ${isActive ? "after:scale-x-100" : "after:scale-x-0 hover:after:scale-x-100"}
      `}
              >
                {item.name}
              </NavLink>
            ))}

            {/* Contact Button */}
            <NavLink
              to="/contacts"
              className="
      text-[14px] font-medium !text-white
      bg-[#133475]
      px-6 py-3
      rounded-[50px]
       border-[#133475]
      shadow-[0px_1px_2px_0px_#1018280D]
      hover:bg-[#133475]
      transition-all duration-300
      flex items-center gap-2 border-0
    "
            >
              Contact Us
              <svg
                width="12"
                height="12"
                viewBox="0 0 12 12"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <g clip-path="url(#clip0_25_33)">
                  <g clip-path="url(#clip1_25_33)">
                    <path
                      fill-rule="evenodd"
                      clip-rule="evenodd"
                      d="M10 4.235L2 0V2.118L10 6.353L2 10.118V12L10 8.235V4.235Z"
                      fill="white"
                    />
                  </g>
                </g>
                <defs>
                  <clipPath id="clip0_25_33">
                    <rect width="12" height="12" fill="white" />
                  </clipPath>
                  <clipPath id="clip1_25_33">
                    <rect
                      width="8"
                      height="12"
                      fill="white"
                      transform="translate(2)"
                    />
                  </clipPath>
                </defs>
              </svg>
            </NavLink>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-gray-700 hover:text-blue-700 focus:outline-none"
              aria-label="Toggle menu"
            >
              {isOpen ? (
                <svg
                  className="h-8 w-8"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              ) : (
                <svg
                  className="h-8 w-8"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                </svg>
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-white border-t border-gray-200">
          <div className="px-4 pt-2 pb-4 space-y-4">
            <Link
              to="/"
              className="block py-3 px-4 text-gray-700 hover:bg-blue-50 hover:text-blue-700 rounded-md"
              onClick={() => setIsOpen(false)}
            >
              Home
            </Link>
            <Link
              to="/about"
              className="block py-3 px-4 text-gray-700 hover:bg-blue-50 hover:text-blue-700 rounded-md"
              onClick={() => setIsOpen(false)}
            >
              About Us
            </Link>
            <Link
              to="/services"
              className="block py-3 px-4 text-gray-700 hover:bg-blue-50 hover:text-blue-700 rounded-md"
              onClick={() => setIsOpen(false)}
            >
              Services
            </Link>
            <Link
              to="/projects"
              className="block py-3 px-4 text-gray-700 hover:bg-blue-50 hover:text-blue-700 rounded-md"
              onClick={() => setIsOpen(false)}
            >
              Projects
            </Link>
            <Link
              to="/contacts"
              className="block py-4 px-4 mt-3 bg-blue-700 text-white rounded-md text-center font-medium hover:bg-blue-800 transition-colors"
              onClick={() => setIsOpen(false)}
            >
              Contact Us →
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
