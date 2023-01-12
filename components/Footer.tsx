import Link from "next/link";
import { useRouter } from "next/router";

const FOOTER_LINKS = [
  {
    name: "discord",
    link: "https://discord.com/invite/4xbJEBKWKc",
    imgPath: "assets/home/discord.svg",
  },
  {
    name: "facebook",
    link: "https://www.facebook.com/groups/web3philippines",
    imgPath: "assets/home/facebook.svg",
  },
  {
    name: "twitter",
    link: "https://twitter.com/web3phl",
    imgPath: "assets/home/twitter.svg",
  },
  {
    name: "github",
    link: "https://github.com/web3phl",
    imgPath: "assets/home/github.svg",
  },
];

export default function Footer() {
  const router = useRouter();
  return (
    <footer className="flex w-screen flex-col items-center bg-black-pearl p-12 md:block">
      <section className="mb-8 flex h-[10vh] w-full flex-col items-center justify-between md:mb-0 md:flex-row">
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
        <button className="px-4 hover:underline">Events</button>
        <button className="px-4 hover:underline">Projects</button>
        <button className="px-4 hover:underline">Gallery</button>
        */}
          <button
            className="px-4 hover:underline"
            onClick={() => router.push("/contacts")}
          >
            Contacts
          </button>
        </div>
      </section>

      <section className="flex w-full flex-col justify-between md:flex-row">
        <span className="mb-4 md:mb-0">
          &#169; 2023 Web3 Philippines, All Rights Reserved.
        </span>

        <span className="flex flex-row justify-center md:justify-start">
          {FOOTER_LINKS.map((e, idx) => (
            <Link className="mx-2" key={idx} href={e.link}>
              <img src={e.imgPath} alt={e.name} />
            </Link>
          ))}
        </span>
      </section>
    </footer>
  );
}
