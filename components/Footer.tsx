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
  const latestYear = new Date().getFullYear();
  return (
    <footer className="flex flex-col items-center bg-black-pearl p-12 md:block">
      <section className="mb-8 flex h-[10vh] w-full flex-col items-center justify-between md:mb-0 md:flex-row">
        <Link className="cursor-pointer" href="/">
            <img
              className="min-w-[100px]"
              src="assets/home/w3phl_logo.svg"
              alt="Web3 Philippines Logo"
              width="110"
              height="110"
            />
          </Link>
        <div className="flex items-center gap-2 sm:gap-4 md:gap-10">
          <Link
            href="/"
              className="px-4 hover:underline cursor-pointer"
            >
              Home
          </Link>
          <Link
                href="/about"
                className="px-4 hover:underline cursor-pointer"
              >
                About
              </Link>
          <Link
            href="/gallery"
            className="px-4 hover:underline cursor-pointer"
          >
            Gallery
          </Link>
          {/*
        <button className=" hover:underline">Events</button>
        <button className=" hover:underline">Projects</button>
        <button className=" hover:underline">Gallery</button>
        */}
          <Link
            href="/contacts"
              className="px-4 hover:underline"
            >
              Contacts
          </Link>
        </div>
      </section>

      <section className="flex w-full flex-col justify-between md:flex-row">
        <span className="mb-4 md:mb-0">
          &#169; {latestYear} Web3 Philippines, All Rights Reserved.
        </span>

        <span className="flex flex-row justify-center md:justify-start md:items-center">
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
