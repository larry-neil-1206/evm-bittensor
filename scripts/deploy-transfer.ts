import { ethers } from "hardhat";

async function main() {
  const Transfer = await ethers.getContractFactory("Transfer");
  const transfer = await Transfer.deploy();
  
  await transfer.waitForDeployment();
  const address = await transfer.getAddress();
  
  console.log(`Transfer contract deployed to: ${address}`);
}

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
}); 