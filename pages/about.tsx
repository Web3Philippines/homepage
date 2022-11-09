import Head from "next/head";
import Link from "next/link";
import { useRouter } from "next/router";

import { motion } from "framer-motion";

import Button from "../components/Button";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";

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
        <div className="grid h-full w-full max-w-[1600px] grid-cols-2">
          <aside className="flex h-full flex-col justify-center p-8">
            <h1 className="font-futura-bold text-6xl leading-snug">
              You can help us with our vision
            </h1>
            <p className="text">
              Let's join hands and find different ways to collaborate towards
              our vision
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

          <aside className="flex h-full flex-col items-end justify-center">
            <img
              className="h-screen"
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

      <Footer />
    </div>
  );
}
