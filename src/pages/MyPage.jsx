import React, { useState, useEffect } from "react";
import { Mark, Box, Heading, useHighlight, Flex } from "@chakra-ui/react";
import { ethers } from "ethers";
import MyCollectionList from "../components/organisms/MyCollectionList";

const MyPage = () => {


  const [account, setAccount] = useState()
  const [balance, setBalance] = useState()

  const connect = async () => {
  
    if (window.ethereum) {
      try {
        const res = await window.ethereum.request({
          method: 'eth_requestAccounts',
        })
        console.log(res)
        setAccount(res[0])
        const balance1 = await window.ethereum.request({
          method: 'eth_getBalance',
          params: [res[0].toString(), 'latest'],
        })

        setBalance(ethers.utils.formatEther(balance1))
      } catch (err) {
        console.error(err)
      } 
    } else {
      console.log('Install Metamask')
    }
  }


  connect();
  const chunks = useHighlight({
    text:
      `Hello, there. Thank you for using 0xchips gaming NFT marketplace. 
      Your connected wallet address is` +
      "  " +
      `${account}` +
      " " +
      "the balance is" + " " +
      `${balance}` + "  " + "ether.",
    query: ["connected wallet address", "the balance", `${account}`, `${balance}`],
  });

  return (
    <>
      <Flex  
        padding={90}
        h={200}
        display={"raw"}
        justify={"center"}
        align={"center"}
        my={200}
        mx={300}>
        <Heading lineHeight="50px">
          {chunks.map(({ match, text }) => {
            if (!match) return text;
            return text === "connected wallet address" ||
              text === "the balance" ? (
              <Box as="u">{text}</Box>
            ) : (
              <Mark bg="white" color="black" px="3" py="1">
                {text}
              </Mark>
            );
          })}
        </Heading>
      </Flex>
      <MyCollectionList />
    </>
  );
};

export default MyPage;
