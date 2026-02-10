const hre = require("hardhat");
async function main() {
  const Exon = await hre.ethers.getContractFactory("ExonToken");
  const exon = await Exon.deploy();
  await exon.deployed();
  console.log("EXON deployed to:", exon.address);
}
main().catch((error) => { console.error(error); process.exitCode = 1; });
