import * as hre from "hardhat";
import { getWallet } from "./utils";
import { ethers } from "ethers";

// Address of the contract to interact with
const CONTRACT_ADDRESS = "0x5f40D80E887B71E253810CC79000fb45DD9b4298";
if (!CONTRACT_ADDRESS) throw "⛔️ Provide address of the contract to interact with!";

// An example of a script to interact with the contract
export default async function () {
  console.log(`Running script to interact with contract ${CONTRACT_ADDRESS}`);

  // Load compiled contract info
  const contractArtifact = await hre.artifacts.readArtifact("ZKPassportNFT");

  // Initialize contract instance for interaction
  const contract = new ethers.Contract(
    CONTRACT_ADDRESS,
    contractArtifact.abi,
    getWallet() // Interact with the contract on behalf of this wallet
  );

  // Run contract write function
  // const transaction = await contract.mint("0x72e68E21b48B6AC8951a41cce4D88D87bafA3b3B");
  // console.log(`Transaction hash of new transaction: ${transaction.hash}`);

  // console.log(`Balance of address: ${await contract.balanceOf("0x72e68E21b48B6AC8951a41cce4D88D87bafA3b3B")}`)

  const transaction = await contract.safeTransferFrom("0x72e68E21b48B6AC8951a41cce4D88D87bafA3b3B", "0xc8efafb5F8cbB385b3A3fA20aC7e480F0638Aa87", 2);

  // Wait until transaction is processed
  await transaction.wait();
}
