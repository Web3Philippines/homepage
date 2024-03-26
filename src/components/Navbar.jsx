import { React, useState, useEffect } from "react";
import { HashLink as Link } from "react-router-hash-link";
import MenuIcon from "../assets/icons/menu.svg";
import CloseIcon from "../assets/icons/close.svg";
import Web3PHIcon from "../assets/icons/web3ph.svg";
import Web3PHIconWhite from "../assets/icons/web3ph_white.svg";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [document_title, setDoucmentTitle] = useState("Web3 Philippines");
  const [activeLink, setActiveLink] = useState("");
  useEffect(() => {
    document.title = document_title;
    const currentUrl = window.location.href;
    const path = new URL(currentUrl).pathname;
    setActiveLink(path);
  }, [document_title]);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const [isTablet, setIsTablet] = useState(window.innerWidth < 768);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    // Function to set the isDesktop state based on the window width
    const handleWindowResize = () => {
      setIsTablet(window.innerWidth < 768);
    };

    // Add event listener on component mount to handle window resize
    window.addEventListener("resize", handleWindowResize);

    // Clean up the event listener on component unmount
    return () => {
      window.removeEventListener("resize", handleWindowResize);
    };
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 100) {
        // Change 100 to the desired scroll height
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <nav
      className={
        isMenuOpen
          ? `flex justify-center max-md:justify-between fixed top-6 max-md:top-0 left-1/2 transform -translate-x-1/2 p-2 max-md:pt-6 max-md:px-6 z-10 w-fit max-md:w-full max-md:bg-bg-purple`
          : `flex justify-center max-md:justify-between fixed top-6 max-md:top-0 left-1/2 transform -translate-x-1/2 p-2 max-md:pt-6 max-md:px-6 z-10 w-fit max-md:w-full ${
              scrolled ? "max-md:bg-bg-gray" : "max-md:bg-transparent"
            } transition duration-300 ease-in-out`
      }
    >
      <Link to="/home">
        <img
          className="hidden max-md:block h-[64px] max-xl:h-[48px]"
          src={isMenuOpen ? Web3PHIconWhite : Web3PHIcon}
          alt="web3ph icon"
        />
      </Link>
      <img
        className="mobile-menu-icon hidden max-md:block h-12"
        src={isMenuOpen ? CloseIcon : MenuIcon}
        onClick={() => {
          setIsMenuOpen(!isMenuOpen);
        }}
      />
      {/* className="max-md:hidden font-poppins font-semibold flex justify-center gap-10 p-2 text-lg bg-white border border-slate-100 rounded-full" */}
      {(!isTablet || isMenuOpen) && (
        <ul className="custom-shadow font-poppins font-semibold flex justify-center gap-10 p-2 text-lg max-md:text-xl bg-white border border-slate-100 rounded-full max-md:flex-col max-md:w-full max-md:bg-bg-purple max-md:text-white max-md:absolute max-md:top-20 max-md:left-0 max-md:rounded-none max-md:border-none max-md:p-0 max-md:gap-0 max-md:h-svh">
          <Link
            className={`hover:bg-slate-200 hover:rounded-full max-md:hover:rounded-none max-md:hover:bg-slate-200 max-md:hover:bg-opacity-50 ${
              activeLink === "/home" && !isTablet ? "active-link" : ""
            }`}
            to="/home"
            onClick={() => {
              setDoucmentTitle("Web3PH | Home");
              isMenuOpen ? toggleMenu() : "";
            }}
          >
            <li className="p-2 max-md:p-5 max-md:text-center">Home</li>
          </Link>
          <Link
            className={`hover:bg-slate-200 hover:rounded-full max-md:hover:rounded-none max-md:hover:bg-slate-200 max-md:hover:bg-opacity-50 ${
              activeLink === "/about" && !isTablet ? "active-link" : ""
            }`}
            to="/about"
            onClick={() => {
              setDoucmentTitle("Web3PH | About");
              isMenuOpen ? toggleMenu() : "";
            }}
          >
            <li className="p-2 max-md:p-5 max-md:text-center">About</li>
          </Link>
          <Link
            className={`hover:bg-slate-200 hover:rounded-full max-md:hover:rounded-none max-md:hover:bg-slate-200 max-md:hover:bg-opacity-50 ${
              activeLink === "/products" && !isTablet ? "active-link" : ""
            }`}
            to="/products"
            onClick={() => {
              setDoucmentTitle("Web3PH | Products");
              isMenuOpen ? toggleMenu() : "";
            }}
          >
            <li className="p-2 max-md:p-5 max-md:text-center">Products</li>
          </Link>
          {/* <Link
          className="hover:bg-slate-200 hover:rounded-full max-md:hover:rounded-none max-md:hover:bg-slate-200 max-md:hover:bg-opacity-50"
          to="/https://blog.web3philippines.org/"
        >
          <li className="p-2 max-md:p-5 max-md:text-center">Blog</li>
        </Link> */}
          <Link
            className={`hover:bg-slate-200 hover:rounded-full max-md:hover:rounded-none max-md:hover:bg-slate-200 max-md:hover:bg-opacity-50 ${
              activeLink === "/contact" && !isTablet ? "active-link" : ""
            }`}
            to="/contact"
            onClick={() => {
              setDoucmentTitle("Web3PH | Contact");
              isMenuOpen ? toggleMenu() : "";
            }}
          >
            <li className="p-2 max-md:p-5 max-md:text-center">Contact</li>
          </Link>
        </ul>
      )}
    </nav>
  );
};

export default Navbar;
