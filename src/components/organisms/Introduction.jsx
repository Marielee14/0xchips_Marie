import {
  Heading,
  Stack,
  SimpleGrid,
  Text,
  Flex,
  Image,
} from "@chakra-ui/react";

import gameDetails from "../../mock/gamedata";

function Introduction({ game }) {
  return (
    <Flex h={"100vh"} mx={300} mt={30} justify={"center"}>
      <SimpleGrid columns={2} spacing={10} key={game.id}>
        <Stack spacing={4}>
          <Heading key={game.id} fontSize={50}>
            {" "}
            {game.head1}{" "}
          </Heading>
          <Text fontSize={20}>{game.content1}</Text>
        </Stack>
        <Image
          rounded={"md"}
          alt={"feature image"}
          src={game.img1}
          objectFit={"cover"}
        />
        <Image
          rounded={"md"}
          alt={"feature image"}
          src={game.img2}
          objectFit={"cover"}
        />
        <Stack spacing={4}>
          <Heading fontSize={50}> {game.head2} </Heading>
          <Text fontSize={20}>{game.content2}</Text>
        </Stack>
        <Stack spacing={4}>
          <Heading fontSize={50}> {game.head3} </Heading>
          <Text fontSize={20}>{game.content3}</Text>
        </Stack>
        <Image
          rounded={"md"}
          alt={"feature image"}
          src={game.img3}
          objectFit={"cover"}
        />
        <div className="header"></div>
      </SimpleGrid>
    </Flex>
  );
}

export default Introduction;
