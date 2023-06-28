import Head from "next/head";
import { useRouter } from "next/router";

import { useEffect, useState } from "react";

import Footer from "../components/Footer";
import Navbar from "../components/Navbar";

// import CollectionCard from "../components/CollectionCard";

import {
  AboutUs,
  Collections,
  Community,
  Directories,
  Header,
  Metrics,
  PartnersSection,
  Pillars,
  SubCommunities,
} from "../components/layouts";

export type HandleRoutes = (route: string) => () => void;

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

  const handleRoutesClick = (route: string) => {
    return () => router.push(route);
  };

  return (
    <div>
      <Head>
        <title>Web3PH | Home</title>
        <meta name="description" content="Web3 Philippines Website" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Navbar />
      <Header onRoutesClick={handleRoutesClick} />

      {/* top level section*/}
      <section className="bg-directory-white bg-about bg-cover">
        <PartnersSection />
        <AboutUs onRoutesClick={handleRoutesClick} />
        <Metrics />
      </section>

      {/* top level section */}
      <section className="bg-black-pearl">
        <Pillars />
        <SubCommunities />
      </section>

      {/* top level section*/}
      <section className="bg-directory-white bg-directory bg-cover">
        <Directories directory={directory} onRoutesClick={handleRoutesClick} />
        <Collections onRoutesClick={handleRoutesClick} />
      </section>

      {/* top level section*/}
      <section className="bg-event bg-cover">
        <Community />
        {/* TODO: carousel */}
        <section>
          <div className="w-full max-w-[1200px]"></div>
        </section>
      </section>

      <Footer />
    </div>
  );
}
