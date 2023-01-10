import {
  Heading,
  Stack,
  SimpleGrid,
  Text,
  Flex,
  Image,
} from "@chakra-ui/react";

import { useParams } from "react-router-dom";
import gameDetails from "../../mock/gamedata";

function Introduction() {
  const { gameTitle } = useParams();
  const thisGame = gameDetails.find(game=>game.title = gameTitle)

    return (
      <Flex h={"100vh"} mx={300} mt={30} justify={"center"}>
        <SimpleGrid columns={2} spacing={10} key={thisGame.id}>
          <Stack spacing={4}>
            <Heading fontSize={50}> {thisGame.head1} </Heading>
            <Text fontSize={20}>{thisGame.content1}</Text>
          </Stack>
          <Image
            rounded={"md"}
            alt={"feature image"}
            src={thisGame.img1}
            objectFit={"cover"}
          />
          <Image
            rounded={"md"}
            alt={"feature image"}
            src={thisGame.img2}
            objectFit={"cover"}
          />
          <Stack spacing={4}>
            <Heading fontSize={50}> {thisGame.head2} </Heading>
            <Text fontSize={20}>{thisGame.content2}</Text>
          </Stack>
          <Stack spacing={4}>
            <Heading fontSize={50}> {thisGame.head3} </Heading>
            <Text fontSize={20}>{thisGame.content3}</Text>
          </Stack>
          <Image
            rounded={"md"}
            alt={"feature image"}
            src={thisGame.img3}
            objectFit={"cover"}
          />
          <div className="header"></div>
        </SimpleGrid>
      </Flex>
    );
  }

export default Introduction;
