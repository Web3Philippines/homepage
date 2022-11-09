import { useRouter } from "next/router";
import { ConnectWallet } from "@thirdweb-dev/react";

export default function Navbar() {
  const router = useRouter();
  return (
    <nav className="bg-dim absolute flex h-[10vh] w-screen items-center justify-between py-4 px-8">
      <img
        className="h-[5vh]"
        src="assets/home/w3phl_logo.svg"
        alt="Web3 Philippines Logo"
      />
      <div className="flex h-full items-center">
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
        <ConnectWallet />
      </div>
    </nav>
  );
}
