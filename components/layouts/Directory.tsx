import Link from "next/link";

type Props = {
  url: string;
  image: string;
  name: string;
  description: string;
  tags: string[];
};

export default function Directory({
  url,
  image,
  name,
  description,
  tags,
}: Props) {
  return (
    <Link href={url} target="_blank">
      {/* TODO: change linking and API response to something better */}
      <div className="flex h-full flex-col rounded-2xl border-[1px] border-purple-heart bg-white p-8 text-center text-black drop-shadow-md hover:cursor-pointer">
        <img
          className="h-12 self-end font-futura-bold"
          src={image}
          alt={name}
        />
        <div className="flex items-center">
          <span className="my-4 font-futura-black text-xl">{name}</span>
          <img
            className="ml-2 h-[12px] w-[12px]"
            src="assets/home/check.png"
            alt="Verified"
          />
        </div>
        <p className="text-left">{description.substring(0, 100) + "..."}</p>
        <div className="mt-8 flex">
          {tags.map((e: string, idx: number) => (
            <span className="mr-4 flex text-purple-heart" key={idx}>
              {e}
            </span>
          ))}
        </div>
      </div>
    </Link>
  );
}
