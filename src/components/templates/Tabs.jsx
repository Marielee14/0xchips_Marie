import { Tabs, TabList, Tab, TabPanels, TabPanel } from "@chakra-ui/react";
import { useParams } from "react-router-dom";
import Introduction from "../organisms/Introduction";
import gameDetails from "../../mock/gamedata";


export default function GameTabs() {
//  let gameList = [];
//   const { gameTitle } = useParams();

// for (let i = 0; i<gameDetails.length; i++) {
// if (gameTitle === gameDetails.title) {

 
  return (
    <Tabs isFitted variant="enclosed" size="lg" my={400} mx={100} fontSize={20}>
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
          {/* {gameDetails
            .filter((game) => {
                return game;
            })
            .map((game) => (
              <Introduction game={game} />
            ))} */}
        </TabPanel>
        <TabPanel>
          <p>two!</p>
        </TabPanel>
        <TabPanel>
          <p>Three!</p>
        </TabPanel>
      </TabPanels>
    </Tabs>
  );
}
