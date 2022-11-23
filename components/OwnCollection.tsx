import { useState, useEffect } from "react";
import { useAddress, useContract, useOwnedNFTs } from "@thirdweb-dev/react";

import CollectionCard from "../components/CollectionCard";
import { COLLECTIONS } from "../constants";

// TODO: Make sure it's able to handle multichain
// assets in the future

const TOKEN_METADATA = {
  name: "Globe: Web3 Crash Course Completer",
  description:
    "Proof of Completion for the Globe Web3 Crash Course by Web3 Philippines",
  imgPath: "assets/collections/wccc.png",
  address: "0x322E3B923416387bf2409422dC589584Ae8060C9",
  chain: "polygon",
  chainImgPath: "assets/home/polygon.svg",
};

export default function OwnCollection() {
  const { contract } = useContract(TOKEN_METADATA.address);

  const address = useAddress();

  const { data: owned, isLoading, error } = useOwnedNFTs(contract, address);

  console.log("owned", owned);

  if (address && isLoading) {
    return <div className="w-full text-center">Loading...</div>;
  }

  return (
    <>
      {address ? (
        <div className="grid grid-cols-3 gap-4">
          {/* TODO: change any to specific datatype */}
          {/* owned?.map((e: any, idx: number) => (
            <CollectionCard
              key={idx}
              name={e.name}
              imgPath={e.imgPath}
              chainImgPath={e.chainImgPath}
            />
          ))*/}
          {(owned?.length as number) > 0 && (
            <a href="https://opensea.io/collection/globe-web3-crash-course-completer">
              <CollectionCard
                name={TOKEN_METADATA.name}
                imgPath={TOKEN_METADATA.imgPath}
                chainImgPath={TOKEN_METADATA.chainImgPath}
              />
            </a>
          )}
        </div>
      ) : (
        <div className="w-full text-center">Connect your wallet</div>
      )}
    </>
  );
}
