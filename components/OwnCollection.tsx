import { useState, useEffect } from "react";
import { useAddress, useSDK } from "@thirdweb-dev/react";

import CollectionCard from "../components/CollectionCard";
import { COLLECTIONS } from "../constants";

// TODO: Make sure it's able to handle multichain
// assets in the future
export default function OwnCollection() {
  const [owned, setOwned] = useState([]);
  const address = useAddress();
  const sdk = useSDK();

  useEffect(() => {
    console.log("mounted");
    (async () => {
      if (!sdk) return;

      const promises = COLLECTIONS.map((e, idx) => isOwned(idx, e.address));
      const response = await Promise.all(promises);
      console.log(response);
    })();
  }, []);

  const isOwned = async (index: number, nftAddress: string) => {
    if (!address || !sdk) return;

    const contract = await sdk.getContract(`${nftAddress}`);
    const nfts = await contract.erc721.getOwned(address);

    if (nfts && nfts.length > 0) {
      return true;
    }

    return false;
  };

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
