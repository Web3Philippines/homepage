import { useState } from "react";
import { ConnectWallet } from "@thirdweb-dev/react";
import Link from "next/link";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <>
      <nav className=" w-full ">
        <div className="md:absolute w-full z-50 bg-dim ">
          <div className="flex w-full items-center justify-between py-4 px-8">
          {/* logo */}
          <Link className="cursor-pointer" href="/">
            <img
              className="min-w-[100px]"
              src="assets/home/w3phl_logo.svg"
              alt="Web3 Philippines Logo"
              width="110"
              height="110"
            />
          </Link>

          {/* tab */}
          <ul className="flex items-center">
            <li className="hidden md:block">
              <Link
              href="/"
                className="px-4 hover:underline cursor-pointer"
              >
                Home
              </Link>
            </li>
            <li className="hidden md:block">
              <Link
                href="/about"
                className="px-4 hover:underline cursor-pointer"
              >
                About
              </Link>
            </li>
            <li className="hidden md:block">
              <Link
                href="/gallery"
                className="px-4 hover:underline cursor-pointer"
              >
                Gallery
              </Link>
            </li>
            <li className="hidden md:block cursor-pointer">
              <Link
              href="/contacts"
                className="px-4 hover:underline"
              >
                Contacts
              </Link>
            </li>

            <li className="md:hidden">
              <span
                className="text-4xl text-white hover:cursor-pointer hover:text-purple-heart"
                onClick={() => setOpen((prev) => !open)}
              >
                {open ? "x" : "="}
              </span>
            </li>

            <li className="hidden md:block">
              <ConnectWallet colorMode="light" accentColor="#7B3FE4" />
            </li>
          </ul>
        </div>

         <div className="flex justify-center md:hidden py-4">
          <ConnectWallet />
        </div>

        {open && (
          <ul className="flex w-full items-center justify-evenly py-4 md:hidden">
            <li>
              <Link
              href="/"
              className="px-4 hover:underline cursor-pointer"
            >
              Home
            </Link>
            </li>
            <li>
              <Link
              href="/about"
              className="px-4 hover:underline cursor-pointer"
            >
              About
            </Link>
            </li>
            <li>
              <Link
              href="/gallery"
              className="px-4 hover:underline cursor-pointer"
            >
              Gallery
            </Link>
            </li>
            <li>
              <Link
              href="/contacts"
              className="px-4 hover:underline cursor-pointer"
            >
              Contacts
            </Link>
            </li>
          </ul>
        )}
        </div>
        
      </nav>
    </>
  );
}
