import { Flex, Stack, Tabs, TabList, Tab, TabPanels, TabPanel, Heading, Image} from "@chakra-ui/react";
import { useParams } from "react-router-dom";
import Introduction from "../organisms/Introduction";
import NftCollection from "../../pages/NftCollection";
import BulletinBoard from "../../pages/BulletinBoard";
import gameDetails from "../../mock/gamedata";

export default function GameTabs() {
  //  let gameList = [];
  const { gameTitle } = useParams();
  const thisGame = gameDetails.find((game) => game.title === gameTitle);

  return (
    <>
      <Stack px={0} py={100}>
        <Flex justify={"center"} align={"center"} mt={100} mb={200}>
          <Image src={thisGame.icon} w={70} h={70} mr={5}/>
          <Heading as="h1" size="4xl" noOfLines={1}>
            {thisGame.title}
          </Heading>
        </Flex>
        <Tabs
          isFitted
          variant="enclosed"
          size="lg"
          my={400}
          mx={100}
          fontSize={20}>
          <TabList mb={10}>
            <Tab fontSize={22} _selected={{ color: "white", bg: "gray.600" }}>
              About the game
            </Tab>
            <Tab fontSize={22} _selected={{ color: "white", bg: "gray.600" }}>
              Listed NFTs
            </Tab>
            <Tab fontSize={22} _selected={{ color: "white", bg: "gray.600" }}>
              Community
            </Tab>
          </TabList>
          <TabPanels>
            <TabPanel>
              <Introduction />
            </TabPanel>
            <TabPanel>
              <NftCollection />
            </TabPanel>
            <TabPanel>
              <BulletinBoard />
            </TabPanel>
          </TabPanels>
        </Tabs>
      </Stack>
    </>
  );
}
