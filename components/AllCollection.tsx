import CollectionCard from "../components/CollectionCard";

import { COLLECTIONS } from "../constants";

export default function AllCollection() {
  return (
    <div className="grid grid-cols-3 gap-4">
      {/* TODO: change any to specific datatype */}
      {COLLECTIONS.map((e: any, idx: number) => (
        <CollectionCard
          key={idx}
          name={e.name}
          imgPath={e.imgPath}
          chainImgPath={e.chainImgPath}
        />
      ))}
    </div>
  );
}
