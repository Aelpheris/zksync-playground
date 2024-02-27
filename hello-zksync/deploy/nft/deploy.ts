import { deployContract } from "../utils";

// This script is used to deploy an NFT contract
// as well as verify it on Block Explorer if possible for the network
export default async function () {
  const name = "ZK Passport NFT";
  const symbol = "ZKP";
  const baseTokenURI = "https://ipfs.io/ipfs/QmPYKeyoe4cTSbdP4J7XkV7XuM96YkgNsCaMzBLHGrpNdW";
  await deployContract("ZKPassportNFT", [name, symbol, baseTokenURI]);
}
