import Head from "next/head";
import { useRouter } from "next/router";

import { motion } from "framer-motion";

import Button from "../components/Button";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";

const SOCIALS = [
  {
    name: "Discord",
    description: "Join server",
    imgPath: "assets/contact/discord_purple.svg",
    link: "https://web3philippines.org/discord",
  },
  {
    name: "Facebook Page",
    description: "Follow @web3phl",
    imgPath: "assets/contact/facebook_purple.svg",
    link: "https://facebook.com/web3phl",
  },
  {
    name: "Facebook Group",
    description: "Join @web3philippines",
    imgPath: "assets/contact/facebook_purple.svg",
    link: "https://facebook.com/groups/web3philippines",
  },
  {
    name: "Twitter",
    description: "Follow @web3ph",
    imgPath: "assets/contact/twitter_purple.svg",
    link: "https://twitter.com/web3ph",
  },
  {
    name: "LinkedIn",
    description: "Follow @web3phl",
    imgPath: "assets/contact/linkedin_purple.svg",
    link: "https://linkedin.com/company/web3phl",
  },
  {
    name: "Github",
    description: "Follow @web3phl",
    imgPath: "assets/contact/github_purple.svg",
    link: "https://github.com/web3phl",
  },
  {
    name: "Instagram",
    description: "Follow @web3phl",
    imgPath: "assets/contact/instagram_purple.svg",
    link: "https://instagram.com/web3phl/",
  },
  {
    name: "Reddit",
    description: "Join r/web3philippines",
    imgPath: "assets/contact/reddit_purple.svg",
    link: "https://reddit.com/r/web3philippines",
  },
  {
    name: "Youtube",
    description: "Subscribe to channel",
    imgPath: "assets/contact/youtube_purple.svg",
    link: "https://www.youtube.com/channel/UC1lc-7tbvRiOxspdsn6SCHA",
  },
  {
    name: "TikTok",
    description: "Follow @web3phl",
    imgPath: "assets/contact/tiktok_purple.svg",
    link: "https://www.tiktok.com/@web3phl",
  },
  {
    name: "Gather",
    description: "Join the gathering",
    imgPath: "assets/contact/gather_purple.png",
    link: "https://app.gather.town/app/EgdJnVXXhokxeu8g/web3philippines",
  },
];

export default function Contacts() {
  const router = useRouter();

  return (
    <div>
      <Head>
        <title>Web3PH | About</title>
        <meta name="description" content="Web3 Philippines Website" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Navbar />

      <header className="font-futura box-border flex min-h-screen w-screen flex-col items-center bg-hero bg-cover">
        <div className="grid h-full w-full max-w-[1600px] grid-cols-2">
          <aside className="flex h-full flex-col justify-center p-8">
            <h1 className="font-futura-bold text-6xl leading-snug">
              We want to hear from you!
            </h1>
            <p className="text">
              Want help with Web3? Have questions to ask? Connect with us!
            </p>

            {/* extra div to prevent full width due to grid */}
            <div>
              <Button
                text="Send us a message"
                action={() =>
                  router.push(
                    "https://mail.google.com/mail/u/0/?fs=1&to=sudo@web3philippines.org&tf=cm"
                  )
                }
                styling="mt-4 px-8"
              />
            </div>
          </aside>

          <aside className="flex h-full flex-col items-end justify-center">
            <img
              className="h-screen"
              src="assets/contact/contact.svg"
              alt="Device Art / Graphic"
            />
          </aside>
        </div>

        <div className="absolute bottom-4">
          <motion.div
            animate={{ y: -10 }}
            transition={{
              duration: 1,
              repeat: Infinity,
              repeatType: "reverse",
            }}
          >
            <img src="assets/about/citroen.svg" alt="Arrow Down" />
          </motion.div>
        </div>
      </header>

      {/* top level section*/}
      <section className="w-screen bg-directory-white bg-about bg-cover font-futura-regular">
        <section className="flex w-full flex-col items-center justify-center py-24 text-letters">
          <h1 className="mb-8 font-futura-black text-3xl text-letters">
            Socials
          </h1>
          <div className="grid w-full max-w-[900px] grid-cols-3 gap-8">
            {SOCIALS.map((e, idx) => (
              <a
                className="flex rounded-lg border-[1px] border-purple-heart bg-white p-4 drop-shadow-md transition-all hover:scale-[1.04] hover:drop-shadow-lg"
                href={e.link}
                target="_blank"
                rel="noreferrer noopener"
                key={idx}
              >
                <img className="mr-4" src={e.imgPath} alt={e.name} />
                <div>
                  <h1 className="font-futura-black">{e.name}</h1>
                  <p className="font-futura-regular text-sm">{e.description}</p>
                </div>
              </a>
            ))}
          </div>
        </section>
      </section>

      <Footer />
    </div>
  );
}
