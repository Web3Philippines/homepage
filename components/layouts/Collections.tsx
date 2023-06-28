import { COLLECTIONS } from "../../constants";
import { HandleRoutes } from "../../pages";

import Button from "../Button";

type Props = {
  onRoutesClick: HandleRoutes;
};

export default function Collections({ onRoutesClick }: Props) {
  return (
    <section className="flex flex-col items-center px-[5vw] py-[10vh]">
      <h1 className="mb-2 text-center font-futura-black text-3xl text-letters">
        Web3 Philippines Collections
      </h1>
      <p className="mb-8 text-center text-letters">
        Collect Web3 Philippines assets to keep track of your historical moments
        with us.
      </p>
      <section>
        <div className="grid w-full max-w-[1200px] grid-cols-1 gap-4 md:grid-cols-3">
          {COLLECTIONS.map((e, idx: number) => (
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
          action={onRoutesClick("/gallery")}
          styling="w-full mt-4"
        />
      </section>
    </section>
  );
}
