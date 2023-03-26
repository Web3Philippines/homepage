import { HandleRoutes } from "../../pages";

import Button from "../Button";
import Directory from "./Directory";

type Directory = {
  description: string;
  id: string;
  image: string;
  links: Record<string, Record<string, string>>;
  name: string;
  tags: string[];
  verified: boolean;
};

type Props = {
  directory: Directory[];
  onRoutesClick: HandleRoutes;
};

export default function Directories({ directory, onRoutesClick }: Props) {
  return (
    <section className="flex flex-col items-center px-[5vw] py-[10vh]">
      <h1 className="mb-2 text-center font-futura-black text-3xl text-letters">
        Web3 Philippines Directory
      </h1>
      <p className="mb-8 text-center text-letters">
        Gathering Filipino Web3 projects for everyone to Do-Your-Own-Research
        (DYOR)
      </p>

      <div className="w-full max-w-[1200px]">
        <div className="mb-8 grid w-full grid-cols-1 gap-8 md:grid-cols-3">
          {directory.length > 0 &&
            directory.map((e, idx: number) => (
              <Directory
                url={e.links.website.url}
                name={e.name}
                image={e.image}
                description={e.description}
                tags={e.tags}
                key={idx}
              />
            ))}
        </div>
        <Button
          text="Submit project"
          action={onRoutesClick("https://directory.web3philippines.org/")}
          styling="w-full"
        />
      </div>
    </section>
  );
}
