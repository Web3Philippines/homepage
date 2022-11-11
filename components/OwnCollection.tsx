import { useState, useEffect } from "react";
import { useAddress, useContract, useOwnedNFTs } from "@thirdweb-dev/react";

import CollectionCard from "../components/CollectionCard";
import { COLLECTIONS } from "../constants";

const useOwned = (walletAddress: string, contractAddress: string) => {
  const [owned, setOwned] = useState([]);

  const { contract } = useContract(contractAddress);
  const { data: ownedNFTs } = useOwnedNFTs(contract, walletAddress);

  useEffect(() => {
    if (!ownedNFTs) return;
    setOwned(ownedNFTs);
  }, []);

  return owned;
};

// TODO: Make sure it's able to handle multichain
// assets in the future
export default function OwnCollection() {
  const [owned, setOwned] = useState([]);

  const address = useAddress();

  const body = COLLECTIONS.map((e) => <></>);

  return (
    <>
      {address && (
        <div className="grid grid-cols-3 gap-4">
          {/* TODO: change any to specific datatype */}
          {owned.map((e: any, idx: number) => (
            <CollectionCard
              key={idx}
              name={e.name}
              imgPath={e.imgPath}
              chainImgPath={e.chainImgPath}
            />
          ))}
        </div>
      )}
    </>
  );
}
