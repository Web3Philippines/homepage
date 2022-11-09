type Props = {
  name: string;
  position: string;
  imgPath: string;
};

export default function TeamCard({ name, position, imgPath }: Props) {
  return (
    <div className="font-futura-regular text-letters">
      <img src={imgPath} alt={name} />
      <div>
        <h1 className="font-futura-black">{name}</h1>
        <p className="text-sm">{position}</p>
      </div>
    </div>
  );
}
