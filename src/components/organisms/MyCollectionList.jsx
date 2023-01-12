//import Image from 'next/image';
import { SimpleGrid } from "@chakra-ui/react";
import GameCard from "../molecules/GameCard";
import displayItems from "../../mock/data";
import MyCollection from "./MyCollection";
import myNFTs from "../../mock/nftData";
import React from "react";


const MyCollectionList = () => {
  return (
    <>
      <SimpleGrid columns={6} spacing={4} justify={"center"} align={"center"}>
        {myNFTs.map((games) => (
          <MyCollection games={games} />
        ))}
      </SimpleGrid>
    </>
  );
};

export default MyCollectionList;
