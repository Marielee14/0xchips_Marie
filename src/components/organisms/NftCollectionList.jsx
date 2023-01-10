//import Image from 'next/image';
import { SimpleGrid } from "@chakra-ui/react";
import GameCard from "../molecules/GameCard";
import displayItems from "../../mock/data";
import NftCollection from "./NftCollection";
import myNFTs from "../../mock/nftData";
import React, { useState } from "react";
import { Heading, Stack, Input, IconButton, Flex } from "@chakra-ui/react";
import { FaSearch } from "react-icons/fa";

import "@fontsource/iceberg";
const NftCollectionList = () => {
  const [searchTerm, setSearchTerm] = useState("");

  return (
    <>
      {/*
      <Stack h={"300px"} justify={"center"} align={"center"} my={10} pt={10}>
        <Heading
          as="h1"
          // fontFamily="Iceberg"
          size="2xl"
          // color={"#F7FF58"}
        >
          Play, Trade and Connect
        </Heading>
        <Flex pt={5}>
          <Input
            display={"flex"}
            justify={"center"}
            align={"center"}
            w={"800px"}
            h={"60px"}
            placeholder="Search your game"
            size={"lg"}
            variant={"filled"}
            focusBorderColor={"#E9AFA3"}
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
          <IconButton
            type={"button"}
            colorScheme="black"
            aria-label="Search database"
            icon={<FaSearch />}
            size="lg"
            h={"60px"}
            onClick={() => {}}
          />
        </Flex>
      </Stack>
  */}
      <SimpleGrid
        columns={6}
        spacing={4}
        justify={"center"}
        align={"center"}
        my={"60px"}
      >
        {myNFTs
          .filter((games) => {
            if (searchTerm == "") {
              return games;
            } else if (
              games.title.toLowerCase().includes(searchTerm.toLowerCase())
            ) {
              return games;
            }
          })
          .map((games) => (
            <NftCollection games={games} />
          ))}
      </SimpleGrid>
    </>
  );
};

export default NftCollectionList;
