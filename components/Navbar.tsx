import { useRouter } from "next/router";
import { useState } from "react";
import { ConnectWallet } from "@thirdweb-dev/react";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  const router = useRouter();
  return (
    <>
      <nav className="absolute hidden h-[10vh] w-screen items-center justify-between bg-dim py-4 px-8 md:flex">
        <img
          className="h-[5vh]"
          src="assets/home/w3phl_logo.svg"
          alt="Web3 Philippines Logo"
        />
        <div className="flex h-full items-center text-white">
          <button
            className="px-4 hover:underline"
            onClick={() => router.push("/")}
          >
            Home
          </button>
          <button
            className="px-4 hover:underline"
            onClick={() => router.push("/about")}
          >
            About
          </button>
          <button
            className="px-4 hover:underline"
            onClick={() => router.push("/gallery")}
          >
            Gallery
          </button>
          {/*
        <button className="px-4 hover:underline" onClick={router.push()}>Events</button>
        <button className="px-4 hover:underline" onClick={router.push()}>Projects</button>
        <button className="px-4 hover:underline" onClick={router.push()}>Gallery</button>
        */}
          <button
            className="px-4 hover:underline"
            onClick={() => router.push("/contacts")}
          >
            Contacts
          </button>
          <ConnectWallet 
            colorMode="light"
            accentColor="#7B3FE4"
          />
        </div>
      </nav>

      {/* mobile navigation bar*/}
      <nav className="flex w-screen flex-col items-center bg-dim p-4 md:hidden">
        <div className="mb-4 flex w-full items-center justify-between">
          <img
            className="h-[5vh]"
            src="assets/home/w3phl_logo.svg"
            alt="Web3 Philippines Logo"
          />

          <span
            className="text-4xl text-white hover:cursor-pointer hover:text-purple-heart"
            onClick={() => setOpen((prev) => !open)}
          >
            {open ? "x" : "="}
          </span>
        </div>

        <div className="flex w-full items-center justify-center">
          <ConnectWallet />
        </div>

        {/*mobile nav links*/}
        {open && (
          <div className="flex w-full items-center justify-evenly pt-4">
            <button
              className="px-4 hover:underline"
              onClick={() => router.push("/")}
            >
              Home
            </button>
            <button
              className="px-4 hover:underline"
              onClick={() => router.push("/about")}
            >
              About
            </button>
            <button
              className="px-4 hover:underline"
              onClick={() => router.push("/gallery")}
            >
              Gallery
            </button>
            {/*
        <button className="px-4 hover:underline" onClick={router.push()}>Events</button>
        <button className="px-4 hover:underline" onClick={router.push()}>Projects</button>
        <button className="px-4 hover:underline" onClick={router.push()}>Gallery</button>
        */}
            <button
              className="px-4 hover:underline"
              onClick={() => router.push("/contacts")}
            >
              Contacts
            </button>
          </div>
        )}
      </nav>
    </>
  );
}
