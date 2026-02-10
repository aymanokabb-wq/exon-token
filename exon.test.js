const { expect } = require("chai");
describe("EXON Token", function () {
  it("Should deploy and mint supply", async function () {
    const Exon = await ethers.getContractFactory("ExonToken");
    const exon = await Exon.deploy();
    await exon.deployed();
    const [owner] = await ethers.getSigners();
    expect(await exon.balanceOf(owner.address)).to.be.gt(0);
  });
});
