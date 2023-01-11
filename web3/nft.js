require("dotenv").config();
const fs = require("fs");
const FormData = require("form-data");
const axios = require("axios");
const { ethers } = require("ethers"); //Grab the contract ABI
// const contract = require("../artifacts/contracts/ArGram.sol/ArGram.json");
const {
  PINATA_API_KEY,
  PINATA_SECRET_KEY,
  API_URL,
  PRIVATE_KEY,
  PUBLIC_KEY,
  CONTRACT_ADDRESS,
} = process.env;

// const authResponse = await axios.get(
//   "https://api.pinata.cloud/data/testAuthentication",
//   {
//     headers: {
//       pinata_api_key: PINATA_API_KEY,
//       pinata_secret_api_key: PINATA_SECRET_KEY,
//     },
//   }
// );

 const stream = fs.createReadStream(req.file.path);
 const data = new FormData();
 data.append("file", stream);

 //pinata config
 const fileResponse = await axios.post("https://api.pinata.cloud/pinning/pinFileToIPFS", data, {
        headers: {
           "Content-Type": `multipart/form-data; boundary=  ${data._boundary}`,
            pinata_api_key: PINATA_API_KEY,
            pinata_secret_api_key: PINATA_SECRET_KEY,
        },
 });
        const { data: fileData = {} } = fileResponse;
        const { IpfsHash } = fileData;
        const fileIPFS= `https://gateway.pinata.cloud/ipfs/${IpfsHash}`;

        const metadata = {
   image:"https://gateway.pinata.cloud/ipfs/QmeK8t9Lom2AcH8s7gLpuZordcxisegwkcSJpqL46S87uC",
   name: "MyArGramNFT",
   description: "MyArGramNFT Description",
   attributes: [
        { "trait_type": "color", "value": "brown"}, 
        { "trait_type": "background", "value": "white"}
   ]
}

const pinataJSONBody = {
      pinataContent: metadata 
};
const jsonResponse = await axios.post("https://api.pinata.cloud/pinning/pinJSONToIPFS", pinataJSONBody, {
    headers: {
       "Content-Type": `application/json`,
        pinata_api_key: PINATA_API_KEY,
        pinata_secret_api_key: PINATA_SECRET_KEY,
    },
 });
 const { data: jsonData = {} } = jsonResponse;
 const { IpfsHash } = jsonData;
 const tokenURI = `https://gateway.pinata.cloud/ipfs/${IpfsHash}`;

const provider = new ethers.providers.JsonRpcProvider(API_URL);
const wallet = new ethers.Wallet(PRIVATE_KEY, provider);
const etherInterface = new ethers.utils.Interface(contract.abi);
// Get latest nonce
const nonce = await provider.getTransactionCount(PUBLIC_KEY, "latest");
// Get gas price
const gasPrice = await provider.getGasPrice();
// Get network
const network = await provider.getNetwork();
const { chainId } = network;
//Transaction object
const transaction = {
   from: PUBLIC_KEY,
   to: CONTRACT_ADDRESS,
   nonce,
   chainId,
   gasPrice,
   data: etherInterface.encodeFunctionData("mintNFT", 
         [ PUBLIC_KEY, tokenURI ]) 
};
//Estimate gas limit
const estimatedGas = await provider.estimateGas(transaction);
transaction["gasLimit"] = estimatedGas;
//Sign & Send transaction
const signedTx = await wallet.signTransaction(transaction);
const transactionReceipt = await provider.sendTransaction(signedTx);
await transactionReceipt.wait();
const hash = transactionReceipt.hash;
console.log("Your Transaction Hash is:", hash);
// Get transaction receipt
const receipt = await provider.getTransactionReceipt(hash);
const { logs } = receipt;// Get token ID
const tokenInBigNumber = ethers.BigNumber.from(logs[0].topics[3]);
const tokenId = tokenInBigNumber.toNumber();
console.log("Token ID minted:", tokenId);