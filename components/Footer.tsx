import Link from "next/link";

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
  return (
    <footer className="w-screen bg-black-pearl p-12">
      <section className="flex h-[10vh] w-full items-center justify-between">
        <img
          className="h-[5vh]"
          src="assets/home/w3phl_logo.svg"
          alt="Web3 Philippines Logo"
        />
        <div className="flex h-full items-center">
          <button className="px-4 hover:underline">Home</button>
          <button className="px-4 hover:underline">About</button>
          {/*
        <button className="px-4 hover:underline">Events</button>
        <button className="px-4 hover:underline">Projects</button>
        <button className="px-4 hover:underline">Gallery</button>
        */}
          <button className="px-4 hover:underline">Contacts</button>
        </div>
      </section>

      <section className="flex w-full justify-between">
        <span>&#169; 2022 Web3 Philippines, All Rights Reserved.</span>

        <span className="flex flex-row">
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
