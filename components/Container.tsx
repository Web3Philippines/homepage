import { ReactNode } from "react";

type Props = {
  children: ReactNode | ReactNode[];
};

/*
 * @dev Container is made to house all the elements in the page
 * and restrict it to a certain width
 *
 */
export default function Container({ children }: Props) {
  return (
    <main className="w-screen">
      <div className="w-full max-w-[1200px]">{children}</div>
    </main>
  );
}
