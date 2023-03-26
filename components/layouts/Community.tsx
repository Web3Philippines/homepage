import { GET_INVOLVED } from "../../constants";

export default function Community() {
  return (
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
  );
}
