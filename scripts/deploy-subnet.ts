import { ethers } from "hardhat";

async function main() {
  const [deployer] = await ethers.getSigners();
  console.log("Deploying contracts with the account:", deployer.address);

  const Subnet = await ethers.getContractFactory("Subnet");
  const subnet = await Subnet.deploy(deployer.address);
  
  await subnet.waitForDeployment();
  const address = await subnet.getAddress();
  
  console.log(`Subnet contract deployed to: ${address}`);
}

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
}); 