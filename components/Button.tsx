type Props = {
  text: string;
  styling?: string;
  action: () => any;
};

export default function Button({ text, styling, action }: Props) {
  return (
    <button
      className={`rounded-md border-[1px] border-purple-heart bg-white p-4 text-purple-heart transition-all hover:scale-110 hover:cursor-pointer hover:text-blue-ribbon hover:drop-shadow-xl ${styling}`}
      onClick={() => action()}
    >
      {text}
    </button>
  );
}
