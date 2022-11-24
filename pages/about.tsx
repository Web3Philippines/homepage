import Head from "next/head";
import Link from "next/link";
import { useRouter } from "next/router";

import { motion } from "framer-motion";

import Button from "../components/Button";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import TeamCard from "../components/TeamCard";

const TEAM = [
  {
    name: "Waren Gonzaga",
    position: "Co-Founder",
    imgPath: "assets/about/team/wareng.png",
  },
  {
    name: "Beau Zabdiel Valoria",
    position: "Co-Founder",
    imgPath: "assets/about/team/zabv.png",
  },
  {
    name: "Alleo Indong",
    position: "Co-Founder",
    imgPath: "assets/about/team/alleoi.png",
  },
  {
    name: "Kristian Quirapas",
    position: "Co-Founder",
    imgPath: "assets/about/team/kristianq.png",
  },
  {
    name: "Alexander Paul Quinit",
    position: "Batak-na-Batak",
    imgPath: "assets/about/team/alexq.png",
  },
  {
    name: "Alvin Reyes",
    position: "Batak-na-Batak",
    imgPath: "assets/about/team/alvinr.png",
  },
  {
    name: "Paul Soliman",
    position: "Batak-na-Batak",
    imgPath: "assets/about/team/pauls.png",
  },
  {
    name: "Allan Catayoc",
    position: "Batak-na-Batak",
    imgPath: "assets/about/team/allnc.png",
  },
  {
    name: "Irvin",
    position: "Batak-na-Batak",
    imgPath: "assets/about/team/man.png",
  },
  {
    name: "Brandon Aniag",
    position: "Batak-na-Batak",
    imgPath: "assets/about/team/brandona.png",
  },
  {
    name: "Mark Cabale",
    position: "Head of Graphics and UI/UX",
    imgPath: "assets/about/team/markc.png",
  },
  {
    name: "Warvin Gonzaga",
    position: "Head of Video",
    imgPath: "assets/about/team/warving.png",
  },
  {
    name: "Michael Domagas",
    position: "Head of Subcommunity",
    imgPath: "assets/about/team/michaeld.png",
  },
  {
    name: "Ruderey Mendoza",
    position: "Head of Metaverse",
    imgPath: "assets/about/team/rudereym.png",
  },
  {
    name: "John James Nebab",
    position: "Head of Frontend",
    imgPath: "assets/about/team/man.png",
  },
  {
    name: "Tristian Pitogo",
    position: "FB and IG SMM",
    imgPath: "assets/about/team/tristianp2.png",
  },
  {
    name: "Airouh Ledesma",
    position: "LinkedIn and Reddit SMM",
    imgPath: "assets/about/team/airouhl.png",
  },
  {
    name: "Nate Peralta",
    position: "Twitter SMM",
    imgPath: "assets/about/team/man.png",
  },
  {
    name: "Kaye Labay",
    position: "TikTok SMM",
    imgPath: "assets/about/team/kayel.png",
  },
  {
    name: "Lorenzo Llamas",
    position: "Telegram SMM",
    imgPath: "assets/about/team/man.png",
  },
  {
    name: "Mayan Benedicto",
    position: "Community Associate",
    imgPath: "assets/about/team/mayanb.png",
  },
  {
    name: "Dave Paurillo",
    position: "Community Associate",
    imgPath: "assets/about/team/davep.png",
  },
  {
    name: "Wendy America",
    position: "Partnerships Associate",
    imgPath: "assets/about/team/woman.png",
  },
  {
    name: "Aaron Lares",
    position: "Metaverse Associate",
    imgPath: "assets/about/team/man.png",
  },
];

export default function About() {
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
        <div className="grid h-full w-full max-w-[1600px] grid-cols-1 md:grid-cols-2">
          <aside className="flex h-full flex-col justify-center p-8">
            <h1 className="font-futura-bold text-5xl leading-snug md:text-6xl">
              You can help us with our vision
            </h1>
            <p className="text">
              Let&lsquo;s join hands and find different ways to collaborate
              towards our vision
            </p>

            {/* extra div to prevent full width due to grid */}
            <div>
              <Button
                text="Connect with us"
                action={() => router.push("/contacts")}
                styling="mt-4 px-8"
              />
            </div>
          </aside>

          <aside className="flex h-full flex-col items-end justify-center p-12 md:p-0">
            <img
              className="w-auto md:h-screen"
              src="assets/about/about.svg"
              alt="Map of the Philippines"
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
        <section className="flex w-full justify-center px-8 py-24 text-letters md:px-0">
          <div className="w-full max-w-[900px] bg-white p-16 text-center drop-shadow-md md:p-24">
            <h1 className="mb-2 font-futura-black text-3xl text-letters">
              Vision Statement
            </h1>
            <p className="mb-8 font-futura-regular text-base">
              The Philippines as the Builders Capital of the World.
            </p>

            <h1 className="mb-2 font-futura-black text-3xl text-letters">
              Mission Statement
            </h1>
            <p>
              Helping Filipinos Build in the Web3 Space with 5 Pillars:
              <br />
              <span className="font-futura-black">
                Community, Education, Building, Experience, and Opportunity
              </span>
              .
            </p>
          </div>
        </section>

        <section className="flex w-full justify-center py-24">
          <div className="w-full max-w-[900px] px-16 text-center md:px-0">
            <h1 className="mb-8 font-futura-black text-3xl text-letters">
              The Team
            </h1>
            <div className="grid grid-cols-1 gap-16 md:grid-cols-4">
              {TEAM.map((e, idx) => (
                <TeamCard
                  key={idx}
                  name={e.name}
                  position={e.position}
                  imgPath={e.imgPath}
                />
              ))}
            </div>
          </div>
        </section>
      </section>

      <Footer />
    </div>
  );
}
