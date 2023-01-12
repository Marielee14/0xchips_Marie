import React from "react";
import { Box, Heading, Text, Stack, Image, Button, Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,useDisclosure,Input } from "@chakra-ui/react";

import Modals from "./NftCollectionModal";

const NftCollection = ({ games }) => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  return (
    <Stack key={games.label} mt={"40px"} direction={"row"} px={"40px"}>
      <Box
        w={"270px"}
        bg={"black"}
        boxShadow={"3xl"}
        rounded={"3xl"}
        overflow={"hidden"}
        border={"1px"}
        borderColor={"rgba(101, 101, 101, 0.5)"}
      >
        {/* <Box h={"240px"} mb={5} pos={"relative"}> */}
        <Image src={games.image} objectFit={"fill"} h={"240px"} w={"460px"} />
        {/* </Box> */}

        <Stack direction={"column"} mt={5}>
          <Text
            color={"#E9AFA3"}
            textTransform={"uppercase"}
            fontWeight={300}
            fontSize={"sm"}
            letterSpacing={1.1}
          >
            {games.tagline}
          </Text>
          <Heading color={"rgba(234, 234, 234, 0.5)"} fontSize={"20"}>
           Price
          </Heading>
          {/* <Box bg={"rgba(227, 221, 221, 0.5)"} rounded={"xl"}>
                <Image src={eth} h={"30px"} w={"20px"} />
              </Box> */}

          <Box py={1} textAlign={"left"} px={4}>
            <Text color={"#C7E8F3"}>{games.contents}</Text>
          </Box>
        </Stack>
        <Button
          color={"black"}
          w={"150px"}
          display={"flex"}
          textAlign={"center"}
          mb={5}
          onClick={onOpen}
        >
          BUY
        </Button>
      </Box>
      <Modals games={games} isOpen={isOpen} onClose={onClose} onOpen={onOpen}/>
    </Stack>
  );
};

export default NftCollection;
