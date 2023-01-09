import { Tabs, TabList, Tab, TabPanels, TabPanel } from "@chakra-ui/react";

import Introduction from "../organisms/Introduction";
import gameDetails from "../../mock/gamedata";
import { useNavigate } from "react-router-dom";

export default function GameTabs({game}) {
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
          {gameDetails
            .filter((game) => {
                return game;
            })
            .map((game) => (
              <Introduction game={game} />
            ))}
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
