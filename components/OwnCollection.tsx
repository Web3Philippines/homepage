// import { useState, useEffect } from "react";
import { useAddress, useContract, useOwnedNFTs } from "@thirdweb-dev/react";

import CollectionCard from "../components/CollectionCard";
// import { COLLECTIONS } from "../constants";

// TODO: Make sure it's able to handle multichain
// assets in the future

const TOKEN_METADATA = {
  name: "Batangas State University: Web3 Crash Course Completer",
  description:
    "Token of Course Completion for students who completed the Web3 Philippines course at Batangas State University",
  imgPath: "assets/collections/BSU.png",
  address: "0x4fFed779578D04382Cb06a072f8e3B494E47e51B",
  chain: "polygon",
  chainImgPath: "assets/home/polygon.svg",
};

export default function OwnCollection() {
  const { contract } = useContract(TOKEN_METADATA.address);

  const address = useAddress();

  const { data: owned, isLoading } = useOwnedNFTs(contract, address);

  console.log("owned", owned);

  if (address && isLoading) {
    return <div className="w-full text-center">Loading...</div>;
  }

  return (
    <>
      {address ? (
        <div className="grid grid-cols-1 gap-4 md:grid-cols-3">
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
            <a href="#" target="_blank" rel="noreferrer noopener">
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
