import { PILLARS } from "../../constants";

export default function Pillars() {
  return (
    <section className="flex w-full flex-col items-center justify-center px-[5vw] py-[10vh]">
      {PILLARS.map((e, idx) => (
        <div className="w-full max-w-[900px]" key={idx}>
          {idx % 2 === 0 ? (
            <div className="flex w-full items-center self-start">
              <img src="assets/home/shower.png" alt="Glowstick" />
              <div>
                <h1 className="mb-4 font-futura-bold text-2xl">{e.heading}</h1>
                <p>{e.description}</p>
              </div>
            </div>
          ) : (
            <div className="flex w-full items-center self-end" key={idx}>
              <div className="text-right">
                <h1 className="mb-4 font-futura-bold text-2xl">{e.heading}</h1>
                <p>{e.description}</p>
              </div>
              <img src="assets/home/shower.png" alt="Glowstick" />
            </div>
          )}
        </div>
      ))}
    </section>
  );
}
