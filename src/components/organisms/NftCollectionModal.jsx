import React from "react";
import MarketplaceJSON from "../Marketplace.json";

import {  Image, Button,Modal,
    ModalOverlay,
    ModalContent,
    ModalHeader,
    ModalFooter,
    ModalBody,
    ModalCloseButton,Input } from "@chakra-ui/react";

const NftCollectionModal = ({games, onClose, isOpen}) => {

async function buyNFT(tokenId) {

    try {
    const ethers = require("ethers");
    //After adding your Hardhat network to your metamask, this code will get providers and signers
    const provider = new ethers.providers.Web3Provider(window.ethereum);
    const signer = provider.getSigner();

    //Pull the deployed contract instance
    let contract = new ethers.Contract(
      MarketplaceJSON.address,
      MarketplaceJSON.abi,
      signer
    );
    const salePrice = ethers.utils.parseUnits(data.price, "ether");
    //run the executeSale function
    let transaction = await contract.executeSale(tokenId, {
      value: salePrice,
    });
    await transaction.wait();

    alert("You successfully bought the NFT!");

  } catch (e) {
    alert("Upload Error" + e);
  }
}

    return (
      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader color="black">{games.tagline}</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <Image src={games.image} objectFit={"fill"} />
            <Input mt={3} placeholder="가격표" />
          </ModalBody>

          <ModalFooter>
            <Button colorScheme="blue" mr={3} onClick={buyNFT}>
              구매하기
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    );
  };
  
  export default NftCollectionModal;