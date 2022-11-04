type Props = {
  text: string;
  styling?: string;
  action: () => any;
};

export default function Button({ text, styling, action }: Props) {
  return (
    <button
      className={`rounded-md border-[1px] border-purple-heart bg-white p-2 text-purple-heart transition-all hover:scale-110 hover:text-blue-ribbon hover:drop-shadow-xl ${styling}`}
      onClick={() => action()}
    >
      {text}
    </button>
  );
}
