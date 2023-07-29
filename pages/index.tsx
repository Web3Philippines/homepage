import Head from "next/head";
import Link from "next/link";
import { useRouter } from "next/router";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";

import Button from "../components/Button";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
// import CollectionCard from "../components/CollectionCard";

import { PARTNERS, COLLECTIONS } from "../constants";

const WHAT_TO_EXPECT = [
  {
    name: "Learn",
    description: "Get knowledge about Web3.",
    imgPath: "assets/home/learn.png",
  },
  {
    name: "Experience",
    description: "Get immersed in the Web3 experience.",
    imgPath: "assets/home/experience.png",
  },
  {
    name: "Connect",
    description: "Find like-minded people to learn with.",
    imgPath: "assets/home/connect.png",
  },
  {
    name: "Get Involved",
    description: "Contribute to our vision",
    imgPath: "assets/home/getinvolved.png",
  },
];

const METRICS = [
  {
    name: "Partners",
    value: 8,
    description: "Helping us with our vision",
  },
  {
    name: "Community Members",
    value: "7,500+",
    description: "Thriving in the community",
  },
  { name: "Community Events", value: "20+", description: "Visible executions" },
];

// 5 Pillars of Web3 Philippines
const PILLARS = [
  {
    heading: "Community",
    description:
      "Building a place for tech and non-tech builders to learn, grow, and thrive in the Web3 space",
  },
  {
    heading: "Education",
    description:
      "Finding ways to educate our fellow Filipinos on Web3 topics like engineering, community building, technical writing, soft skills, and more.",
  },
  {
    heading: "Building",
    description:
      "Using opensource workflow and principles to build applications, tools, and infrastructure with the vision to make Web3 easier for everyone.",
  },
  {
    heading: "Experience",
    description:
      "Leading initatives that will expose Web3 learners to real-life Web3 experiences to grow and build their reputation and credibility.",
  },
  {
    heading: "Opportunities",
    description:
      "Connecting intelligent, professional, and trustworthy community contributors to clients and job opportunities.",
  },
];

const GET_INVOLVED = [
  {
    name: "Speech Bubble",
    imgPath: "assets/home/bubble.png",
    description: "Contribute in Web3 community forums",
  },
  {
    name: "Calendar",
    imgPath: "assets/home/calendar.png",
    description: "Attend weekly AMAs, monthly workshops, and events",
  },
  {
    name: "People",
    imgPath: "assets/home/people.png",
    description: "Build tech and non-tech connections",
  },
  {
    name: "Flag",
    imgPath: "assets/home/flag.png",
    description: "Learn from 100% Filipino builder community",
  },
];

export default function Home() {
  const [directory, setDirectory] = useState([]);

  const router = useRouter();

  useEffect(() => {
    // temporary
    let response: any;
    (async () => {
      response = await fetch(
        "https://directory-api.web3philippines.org/api/directory"
      );

      response = await response.json();
      response = response.data
        .filter((e: any) => e.verified)
        .sort(() => 0.5 - Math.random());
      response = response.slice(0, 3).sort();
      console.log(response);
      setDirectory(response);
    })();
  }, []);

  return (
    <div>
      <Head>
        <title>Web3PH | Home</title>
        <meta name="description" content="Web3 Philippines Website" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Navbar />

      <header className="font-futura box-border flex min-h-screen w-screen flex-col items-center bg-hero bg-cover">
        <div className="grid h-full w-full max-w-[1600px] grid-cols-1 md:grid-cols-2">
          <aside className="flex h-full flex-col justify-center p-8">
            <h1 className="font-futura-bold text-5xl leading-snug drop-shadow-lg md:text-6xl">
              Helping Filipinos build in the Web3 space
            </h1>
            <p className="text">
              {" "}
              The first and primary Web3 tech and non-tech builder community in
              the country.
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
              src="assets/home/phmap.png"
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
            <img src="assets/home/citroen.svg" alt="Arrow Down" />
          </motion.div>
        </div>
      </header>

      {/* top level section*/}
      <section className="bg-directory-white bg-about bg-cover">
        <section className="flex flex-col items-center px-[5vw] py-[10vh]">
          <h1 className="mb-8 font-futura-black text-3xl text-letters">
            Partners
          </h1>
          <div className="grid w-screen max-w-[1200px] grid-cols-2 gap-16 p-8 md:grid-cols-4">
            {PARTNERS.map((e, idx) => (
              <Link
                className="flex items-center justify-center hover:cursor-pointer"
                key={idx}
                href={e.link}
                rel="noreferrer noopener"
              >
                <img
                  className="w-full grayscale hover:grayscale-0"
                  src={e.imgPath}
                  alt={e.name}
                />
              </Link>
            ))}
          </div>
        </section>

        <section className="flex flex-col items-center px-[5vw] py-[10vh]">
          <h1 className="mb-2 text-center font-futura-black text-3xl text-letters">
            Web3 is now in the Philippines
          </h1>
          <p className="mb-8 text-center text-letters">
            Web3 knowledge and experience at your doorstep
          </p>

          <div className="w-full max-w-[1200px]">
            <div className="mb-8 grid w-full grid-cols-1 gap-8 md:grid-cols-4">
              {WHAT_TO_EXPECT.map((e, idx) => (
                <div
                  className="rounded-2xl border-[1px] border-purple-heart bg-white p-8 text-black drop-shadow-md"
                  key={idx}
                >
                  <img className="w-18" src={e.imgPath} alt={e.name} />
                  <h2 className="my-4 font-futura-bold text-3xl">{e.name}</h2>
                  <p>{e.description}</p>
                </div>
              ))}
            </div>
            <Button
              text="About us"
              action={() => router.push("/about")}
              styling="w-full"
            />
          </div>
        </section>

        <section className="flex flex-col items-center px-[5vw] py-[10vh]">
          <h1 className="mb-2 text-center font-futura-black text-3xl text-letters">
            We are continuously growing
          </h1>
          <p className="mb-8 text-center text-letters">
            Fast and non-stop growth
          </p>

          <div className="w-full max-w-[1200px]">
            <div className="mb-8 grid w-full grid-cols-1 gap-8 md:grid-cols-3">
              {METRICS.map((e, idx) => (
                <div
                  className="rounded-2xl border-[1px] border-purple-heart bg-white p-8 text-center text-black drop-shadow-md"
                  key={idx}
                >
                  <h1 className="font-futura-black text-6xl">{e.value}</h1>
                  <h2 className="my-4 font-futura-bold text-3xl">{e.name}</h2>
                  <p>{e.description}</p>
                </div>
              ))}
            </div>
            <Button
              text="Join us (Coming Soon)"
              action={() => console.log("Join us")}
              styling="w-full"
            />
          </div>
        </section>
      </section>

      {/* top level section */}
      <section className="w-screen bg-black-pearl text-white">
        {/* 5 pillars of Web3 Philippines*/}
        <section className="flex w-full flex-col items-center justify-center px-[5vw] py-[10vh]">
          {PILLARS.map((e, idx) => (
            <div className="w-full max-w-[900px]" key={idx}>
              {idx % 2 === 0 ? (
                <div className="flex w-full items-center self-start">
                  <img src="assets/home/shower.png" alt="Glowstick" />
                  <div>
                    <h1 className="mb-4 font-futura-bold text-2xl">
                      {e.heading}
                    </h1>
                    <p>{e.description}</p>
                  </div>
                </div>
              ) : (
                <div className="flex w-full items-center self-end" key={idx}>
                  <div className="text-right">
                    <h1 className="mb-4 font-futura-bold text-2xl">
                      {e.heading}
                    </h1>
                    <p>{e.description}</p>
                  </div>
                  <img src="assets/home/shower.png" alt="Glowstick" />
                </div>
              )}
            </div>
          ))}
        </section>

        {/* subcommunities */}
        <section className="flex w-screen flex-col items-center bg-cover">
          <div className="md:translate-y-24">
            <h1 className="mb-2 text-center font-futura-black text-3xl text-white">
              Web3 Philippines Subcommunities
            </h1>
            <p className="mb-8 text-center text-letters text-white">
              Metaverse of Web3&lsquo;s builders ecosystem
            </p>
          </div>

          {/* DESKTOP */}
          <img
            className="hidden w-full md:block"
            src="assets/home/subcom_desktop.png"
            alt="Subcommunities"
          />
          {/* MOBILE */}
          <img
            className="w-full md:hidden"
            src="assets/home/subcom_mobile.png"
            alt="Subcommunities"
          />
        </section>
      </section>

      {/* top level section*/}
      <section className="bg-directory-white bg-directory bg-cover">
        <section className="flex flex-col items-center px-[5vw] py-[10vh]">
          <h1 className="mb-2 text-center font-futura-black text-3xl text-letters">
            Web3 Philippines Directory
          </h1>
          <p className="mb-8 text-center text-letters">
            Gathering Filipino Web3 projects for everyone to
            Do-Your-Own-Research (DYOR)
          </p>

          <div className="w-full max-w-[1200px]">
            <div className="mb-8 grid w-full grid-cols-1 gap-8 md:grid-cols-3">
              {/* TODO: eliminate any here*/}
              {directory.length > 0 &&
                directory.map((e: any, idx: any) => (
                  <Link
                    href={e.links.website.url as string}
                    key={idx}
                    target="_blank"
                  >
                    {/* TODO: change linking and API response to something better */}
                    <div className="flex h-full flex-col rounded-2xl border-[1px] border-purple-heart bg-white p-8 text-center text-black drop-shadow-md hover:cursor-pointer">
                      <img
                        className="h-12 self-end font-futura-bold"
                        src={e.image}
                        alt={e.name}
                      />
                      <div className="flex items-center">
                        <span className="my-4 font-futura-black text-xl">
                          {e.name}
                        </span>
                        <img
                          className="ml-2 h-[12px] w-[12px]"
                          src="assets/home/check.png"
                          alt="Verified"
                        />
                      </div>
                      <p className="text-left">
                        {e.description.substring(0, 100) + "..."}
                      </p>
                      <div className="mt-8 flex">
                        {e.tags.map((e: string, idx: number) => (
                          <span
                            className="mr-4 flex text-purple-heart"
                            key={idx}
                          >
                            {e}
                          </span>
                        ))}
                      </div>
                    </div>
                  </Link>
                ))}
            </div>
            <Button
              text="Submit project"
              action={() =>
                router.push("https://directory.web3philippines.org/")
              }
              styling="w-full"
            />
          </div>
        </section>

        <section className="flex w-screen flex-col items-center px-[5vw] py-[10vh]">
          <h1 className="mb-2 text-center font-futura-black text-3xl text-letters">
            Web3 Philippines Collections
          </h1>
          <p className="mb-8 text-center text-letters">
            Collect Web3 Philippines assets to keep track of your historical
            moments with us.
          </p>
          <section>
            <div className="grid w-full max-w-[1200px] grid-cols-1 gap-4 md:grid-cols-3">
              {/* TODO: change any to specific datatype */}
              {COLLECTIONS.map((e: any, idx: number) => (
                <div
                  className="rounded-2xl border-[1px] border-black bg-white p-4 text-letters drop-shadow-md"
                  key={idx}
                >
                  <img className="rounded-2xl" src={e.imgPath} alt={e.name} />
                  <div className="gridp-4 grid grid-cols-[3fr_1fr] p-4">
                    <span>{e.name}</span>
                    <span className="flex justify-end">
                      <img
                        className="box-border w-[50px] rounded-lg border-[1px] border-black p-2"
                        src={e.chainImgPath}
                        alt={e.name}
                      />
                    </span>
                  </div>
                </div>
              ))}
            </div>
            <Button
              text="See all collections"
              action={() => router.push("gallery")}
              styling="w-full mt-4"
            />
          </section>
        </section>
      </section>

      {/* top level section*/}
      <section className="bg-event bg-cover">
        <section className="flex flex-col items-center px-[5vw] py-[10vh]">
          <h1 className="mb-2 text-center font-futura-black text-3xl text-white">
            Get involved in the community
          </h1>
          <p className="mb-8 text-center text-white">
            Be part of Web3 Philippines from attending events, participating in
            discussions, or becoming part of the team!
          </p>

          <div className="w-full max-w-[1200px]">
            <div className="mb-8 grid w-full grid-cols-1 gap-8 md:grid-cols-4">
              {GET_INVOLVED.map((e, idx) => (
                <div
                  className="rounded-2xl border-[1px] border-white bg-purple-heart p-8 text-white drop-shadow-md"
                  key={idx}
                >
                  <img className="w-18 mb-4" src={e.imgPath} alt={e.name} />
                  <p>{e.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* TODO: carousel */}
        <section>
          <div className="w-full max-w-[1200px]"></div>
        </section>
      </section>

      <Footer />
    </div>
  );
}
