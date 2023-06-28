import Head from "next/head";
import { useRef, useState } from "react";

import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import AllCollection from "../components/AllCollection";
import OwnCollection from "../components/OwnCollection";

const GALLERIES = [
  // {
  //   tab: "All Items",
  //   body: <AllCollection />,
  // },
  {
    tab: "My Items",
    body: <OwnCollection />,
  },
];

export default function Gallery() {
  /*
   * tab value is in set {0, 1}
   * 0: All Items
   * 1: My Collection
   */
  const [tab, setTab] = useState(0);
  const searchRef = useRef<HTMLInputElement>(null);

  const changeTab = (index: number) => {
    setTab(index);
  };

  return (
    <div>
      <Head>
        <title>Web3PH | About</title>
        <meta name="description" content="Web3 Philippines Website" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Navbar />

      <main className="">
        <section className="min-h-screen w-full bg-directory-white bg-about bg-cover font-futura-regular">
          <section className="flex w-full flex-col items-center justify-center py-44 px-12 text-letters md:px-0">
            <h1 className="mb-2 text-center font-futura-black text-3xl text-letters">
              Moments with Us
            </h1>
            <p className="mb-16 text-center text-letters">
              Valuable moments you&lsquo;ve spent with us, reminisced with
              digital assets.
            </p>

            <div className="w-full max-w-[900px]">
              <div className="w-full">
                <header className="mb-16 flex w-full justify-between">
                  <span className="flex font-futura-black text-3xl">
                    {GALLERIES.map((e, idx) => (
                      <h1
                        className="border-b-4 border-transparent text-center hover:cursor-pointer hover:border-purple-heart md:mr-4"
                        key={idx}
                        onClick={() => changeTab(idx)}
                      >
                        {e.tab}
                      </h1>
                    ))}
                  </span>
                  {/*
                  <input
                    className="rounded-lg border-2 border-light-letter bg-white px-4 py-2 font-futura-regular"
                    placeholder="Search here"
                    ref={searchRef}
                    type="text"
                  />
                  */}
                </header>
                {/* gallery body depends on tab state*/}
                <div>{GALLERIES[tab].body}</div>
              </div>
            </div>
          </section>
        </section>
      </main>
      <Footer />
    </div>
  );
}
