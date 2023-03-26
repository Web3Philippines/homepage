import Link from "next/link";

import { PARTNERS } from "../../constants";

export default function PartnersSection() {
  return (
    <section className="flex flex-col items-center px-[5vw] py-[10vh]">
      <h1 className="mb-8 font-futura-black text-3xl text-letters">Partners</h1>
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
  );
}
