const hre = require("hardhat");

async function main() {
  const [deployer] = await hre.ethers.getSigners();

  const ArmedaxToken = await hre.ethers.getContractFactory("ArmedaxToken");
  const armedaxToken = await ArmedaxToken.deploy();
  await armedaxToken.deployed();

  console.log("Armedax Token (AMDX) deployed to:", armedaxToken.address);
  console.log("Armedax Token (AMDX) deployer address:", deployer.address);
}

main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });
