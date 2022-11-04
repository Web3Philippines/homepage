import Head from "next/head";
import { useEffect, useState } from "react";
import { motion } from "framer-motion";

import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Button from "../components/Button";
import { PARTNERS } from "../constants";

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
    name: "Community Partners",
    value: 8,
    description: "Helping us with our vision",
  },
  {
    name: "Community Members",
    value: "7,300+",
    description: "Thriving in the community",
  },
  { name: "Community Events", value: "20+", description: "Visible executions" },
];

export default function Home() {
  const [directory, setDirectory] = useState([]);

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
      response = response.slice(0, 3);
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

      <header className="box-border flex min-h-screen w-screen flex-col items-center bg-hero bg-cover font-futura">
        <div className="grid h-full w-full max-w-[1600px] grid-cols-2">
          <aside className="flex h-full flex-col justify-center p-8">
            <h1 className="font-futura-black text-6xl leading-snug">
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
                action={() => console.log("Connect with us")}
                styling="mt-4 px-8"
              />
            </div>
          </aside>

          <aside className="flex flex-col items-end justify-center">
            <div className="h-5/6">
              <img
                className="h-full"
                src="assets/home/phmap.png"
                alt="Map of the Philippines"
              />
            </div>
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
            Community Partners
          </h1>
          <div className="grid w-screen max-w-[1200px] grid-cols-4 gap-24">
            {PARTNERS.map((e, idx) => (
              <a
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
              </a>
            ))}
          </div>
        </section>

        <section className="flex flex-col items-center px-[5vw] py-[10vh]">
          <h1 className="mb-2 font-futura-black text-3xl text-letters">
            Web3 is now in the Philippines
          </h1>
          <p className="mb-8 text-letters">
            Web3 knowledge and experience at your doorstep
          </p>

          <div className="w-full max-w-[1200px]">
            <div className="mb-8 grid w-full grid-cols-4 gap-8">
              {WHAT_TO_EXPECT.map((e, idx) => (
                <div
                  className="rounded-2xl border-[1px] border-purple-heart bg-white p-8 text-black drop-shadow-md hover:cursor-pointer hover:drop-shadow-xl"
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
              action={() => console.log("About us")}
              styling="w-full"
            />
          </div>
        </section>

        <section className="flex flex-col items-center px-[5vw] py-[10vh]">
          <h1 className="mb-2 font-futura-black text-3xl text-letters">
            We are continuously growing
          </h1>
          <p className="mb-8 text-letters">Web3 is now in the Philippines</p>

          <div className="w-full max-w-[1200px]">
            <div className="mb-8 grid w-full grid-cols-3 gap-8">
              {METRICS.map((e, idx) => (
                <div
                  className="rounded-2xl border-[1px] border-purple-heart bg-white p-8 text-center text-black drop-shadow-md hover:cursor-pointer hover:drop-shadow-xl"
                  key={idx}
                >
                  <h1 className="font-future-black text-6xl">{e.value}</h1>
                  <h2 className="my-4 font-futura-bold text-3xl">{e.name}</h2>
                  <p>{e.description}</p>
                </div>
              ))}
            </div>
            <Button
              text="Join us"
              action={() => console.log("Join us")}
              styling="w-full"
            />
          </div>
        </section>
      </section>

      {/* top level section*/}
      <section className="bg-directory-white bg-directory bg-cover">
        <section className="flex flex-col items-center px-[5vw] py-[10vh]">
          <h1 className="mb-2 font-futura-black text-3xl text-letters">
            Web3 Philippines Directory
          </h1>
          <p className="mb-8 text-letters">
            Gathering Filipino Web3 projects for everyone to
            Do-Your-Own-Research (DYOR)
          </p>

          <div className="w-full max-w-[1200px]">
            <div className="mb-8 grid w-full grid-cols-3 gap-8">
              {/* TODO: eliminate any here*/}
              {directory.length > 0 &&
                directory.map((e: any, idx: any) => (
                  <div
                    className="rounded-2xl border-[1px] border-purple-heart bg-white p-8 text-center text-black drop-shadow-md hover:cursor-pointer hover:drop-shadow-xl"
                    key={idx}
                  >
                    <h1 className="font-future-black text-6xl">{e.value}</h1>
                    <h2 className="my-4 font-futura-bold text-3xl">{e.name}</h2>
                    <p>{e.description}</p>
                  </div>
                ))}
            </div>
            <Button
              text="Submit project"
              action={() => console.log("Submit project")}
              styling="w-full"
            />
          </div>
        </section>
      </section>

      <Footer />
    </div>
  );
}
