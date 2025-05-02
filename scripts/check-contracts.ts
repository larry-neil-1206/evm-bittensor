import { ethers } from "hardhat";

async function main() {
  const [signer] = await ethers.getSigners();
  console.log("Checking contracts with account:", signer.address);

  // Replace these addresses with your deployed contract addresses
  const STAKE_ADDRESS = "YOUR_STAKE_CONTRACT_ADDRESS"; // 0x308c3C0178e9e3892C040801c01bA7413bd15bcc
  const SUBNET_ADDRESS = "YOUR_SUBNET_CONTRACT_ADDRESS";
  const TRANSFER_ADDRESS = "YOUR_TRANSFER_CONTRACT_ADDRESS";

  // Check Stake contract
  const stake = await ethers.getContractAt("Stake", STAKE_ADDRESS);
  console.log("\nChecking Stake contract:");
  console.log("Contract address:", STAKE_ADDRESS);
  console.log("Contract balance:", (await ethers.provider.getBalance(STAKE_ADDRESS)).toString());

  // Check Subnet contract
  const subnet = await ethers.getContractAt("Subnet", SUBNET_ADDRESS);
  console.log("\nChecking Subnet contract:");
  console.log("Contract address:", SUBNET_ADDRESS);
  console.log("Contract balance:", (await ethers.provider.getBalance(SUBNET_ADDRESS)).toString());
  
  // Example: Check serving rate limit for a specific netuid
  const netuid = 1;
  try {
    const rateLimit = await subnet.getHyperParameter(netuid);
    console.log(`Serving rate limit for netuid ${netuid}:`, rateLimit.toString());
  } catch (error: any) {
    console.log(`Could not get rate limit for netuid ${netuid}:`, error.message);
  }

  // Check Transfer contract
  const transfer = await ethers.getContractAt("Transfer", TRANSFER_ADDRESS);
  console.log("\nChecking Transfer contract:");
  console.log("Contract address:", TRANSFER_ADDRESS);
  console.log("Contract balance:", (await ethers.provider.getBalance(TRANSFER_ADDRESS)).toString());
}

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
}); 