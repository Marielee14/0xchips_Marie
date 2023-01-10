import React from "react";


import {  Image, Button,Modal,
    ModalOverlay,
    ModalContent,
    ModalHeader,
    ModalFooter,
    ModalBody,
    ModalCloseButton,Input } from "@chakra-ui/react";

const NftCollectionModal = ({games, onClose, isOpen}) => {
    return (
        <Modal isOpen={isOpen} onClose={onClose}>
            <ModalOverlay />
            <ModalContent>
            <ModalHeader color="black">{games.tagline}</ModalHeader>
            <ModalCloseButton />
            <ModalBody>
            <Image src={games.image} objectFit={"fill"}  />
            <Input mt={3} placeholder='가격표' />
            </ModalBody>

            <ModalFooter>
                <Button colorScheme='blue' mr={3} onClick={onClose}>
                구매하기
                </Button>
            </ModalFooter>
            </ModalContent>
        </Modal>
    );
  };
  
  export default NftCollectionModal;