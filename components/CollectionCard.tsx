type Props = {
  name: string;
  imgPath: string;
  chainImgPath: string;
};

export default function CollectionCard({ name, imgPath, chainImgPath }: Props) {
  return (
    <div className="rounded-2xl border-[1px] border-purple-heart bg-white p-4 text-letters drop-shadow-md transition-all hover:scale-[1.05] hover:cursor-pointer hover:drop-shadow-lg">
      <img className="rounded-2xl" src={imgPath} alt={name} />
      <div className="grid grid grid-cols-[3fr_1fr] p-4 p-4">
        <span>{name}</span>
        <div className="items-start">
          <span className="flex justify-end">
            <img
              className="box-border w-[50px] self-center rounded-lg border-[1px] border-black p-2"
              src={chainImgPath}
              alt={name}
            />
          </span>
        </div>
      </div>
    </div>
  );
}
