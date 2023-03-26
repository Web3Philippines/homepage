import { METRICS } from "../../constants";

import Button from "../Button";

export default function Metrics() {
  return (
    <section className="flex flex-col items-center px-[5vw] py-[10vh]">
      <h1 className="mb-2 text-center font-futura-black text-3xl text-letters">
        We are continuously growing
      </h1>
      <p className="mb-8 text-center text-letters">Fast and non-stop growth</p>

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
  );
}
