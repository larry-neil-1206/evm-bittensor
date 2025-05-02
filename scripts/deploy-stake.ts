import { ethers } from "hardhat";

async function main() {
  const Stake = await ethers.getContractFactory("Stake");
  const stake = await Stake.deploy();
  
  await stake.waitForDeployment();
  const address = await stake.getAddress();
  
  console.log(`Stake contract deployed to: ${address}`);
}

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
}); 