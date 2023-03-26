import { WHAT_TO_EXPECT } from "../../constants";
import { HandleRoutes } from "../../pages";

import Button from "../Button";

type Props = {
  onRoutesClick: HandleRoutes;
};

export default function AboutUs({ onRoutesClick }: Props) {
  return (
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
          action={onRoutesClick("/about")}
          styling="w-full"
        />
      </div>
    </section>
  );
}
