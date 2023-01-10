import React from "react";
import {
  Box,
  Heading,
  Text,
  Stack,
  Image,

} from "@chakra-ui/react";
import {Link, useNavigate} from "react-router-dom"

//TODO 1: card rearrangement
//TODO 2: add star-rating system?

//games를 prop으로 내려주고, 카드 형태를 생성. 이 카드를 Game-Search에서 씁니다.
const GameCard = ({ games }) => {
  const navigate = useNavigate()
  return (
    <Link to={`/games/${games.title}`}>
      <Stack
        key={games.id}
        mt={"40px"}
        direction={"row"}
        //px={"40px"}
      >
        <Box
          as={"button"}
          // onClick={() => navigate(`/games/${games.title}`)}
          w={"450px"}
          h={"600px"}
          bg={"black"}
          boxShadow={"0 0 0.60em #52137D"}
          rounded={"lg"}
          p={3}
          overflow={"hidden"}>
          <Image
            src={games.image1}
            alt={games.title}
            objectFit={"fill"}
            h={"240px"}
            w={"460px"}
          />

          <Stack direction={"column"} mt={5}>
            <Text
              color={"#E9AFA3"}
              textTransform={"uppercase"}
              fontWeight={300}
              fontSize={"sm"}
              letterSpacing={1.1}>
              {games.tagline}
            </Text>
            <Heading color={"white"} fontSize={"3xl"}>
              {games.title}
            </Heading>

            <Box
              py={3}
              textAlign={"center"}
              px={4}
              overflow={"hidden"}
              text-overflow={"ellipsis"}
              numberOfLines={4}
              h={150}
              fontSize={15}>
              <Text color={"#C7E8F3"}>{games.content1}</Text>
            </Box>
          </Stack>
        </Box>
      </Stack>
    </Link>
  );
};

export default GameCard;
