import { motion } from "framer-motion";

import { HandleRoutes } from "../../pages";

import Button from "../Button";

type Props = {
  onRoutesClick: HandleRoutes;
};

export default function Header({ onRoutesClick }: Props) {
  return (
    <header className="font-futura box-border flex min-h-screen w-screen flex-col items-center bg-hero bg-cover">
      <div className="grid h-full w-full max-w-[1600px] grid-cols-1 md:grid-cols-2">
        <aside className="flex h-full flex-col justify-center p-8">
          <h1 className="font-futura-bold text-5xl leading-snug drop-shadow-lg md:text-6xl">
            Helping Filipinos build in the Web3 space
          </h1>
          <p className="text">
            {" "}
            The first and primary Web3 tech and non-tech builder community in
            the country.
          </p>

          {/* extra div to prevent full width due to grid */}
          <div>
            <Button
              text="Connect with us"
              action={onRoutesClick("/contacts")}
              styling="mt-4 px-8"
            />
          </div>
        </aside>

        <aside className="flex h-full flex-col items-end justify-center p-12 md:p-0">
          <img
            className="w-auto md:h-screen"
            src="assets/home/phmap.png"
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
          <img src="assets/home/citroen.svg" alt="Arrow Down" />
        </motion.div>
      </div>
    </header>
  );
}
