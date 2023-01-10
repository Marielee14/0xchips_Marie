//import Image from 'next/image';
import { SimpleGrid } from "@chakra-ui/react";
import GameCard from "../molecules/GameCard";
import gameDetails from "../../mock/gamedata";
import React, { useState, useEffect } from "react";
import { Heading, Stack, Input, IconButton, Flex } from "@chakra-ui/react";
import { FaSearch } from "react-icons/fa";
import {useParams} from "react-router-dom"

import "@fontsource/iceberg";

//TODO: add search keyword with game meta data: chain, genre, etc.

//매우 단순한 검색창. games.title로 filter해서 해당하는 카드를 보여줌.
const SearchResult = () => {
  const [searchTerm, setSearchTerm] = useState("");
  // useEffect(() => {
  //   setSearchTerm()
  // })
const {gameId}= useParams()

  return (
    <>
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

      <SimpleGrid
        columns={4}
        spacing={4}
        justify={"center"}
        align={"center"}
        my={"60px"}
      >
        {gameDetails
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
            <GameCard games={games} />
          ))}
      </SimpleGrid>
    </>
  );
};

export default SearchResult;
