const { expect } = require("chai");
const { ethers, waffle } = require("hardhat");
const { BigNumber } = require("@ethersproject/bignumber");
const { time } = require("./testHelpers");

const utils = {
  toWei: (value) => {
    return ethers.utils.parseEther(value.toString());
  },
  fromWei: (value) => {
    value = BigNumber.from(value.toString());
    return ethers.utils.formatEther(value);
  },
};

describe("ArmedaxToken", () => {
  let provider, ArmedaxToken, armedaxToken, owner, alice, bob, carol;

  beforeEach(async () => {
    provider = waffle.provider;
    [owner, alice, bob, carol] = await ethers.getSigners();

    ArmedaxToken = await ethers.getContractFactory("ArmedaxToken");
    armedaxToken = await ArmedaxToken.deploy();
    await armedaxToken.deployed();
  });

  describe("Deployment", () => {
    it("should have the name, Armedax Token", async () => {
      const name = await armedaxToken.name();
      expect(name).to.equal("Armedax Token");
    });

    it("should have the symbol, AMDX", async () => {
      const symbol = await armedaxToken.symbol();
      expect(symbol).to.equal("AMDX");
    });

    it("should have the decimal, 18", async () => {
      const decimal = await armedaxToken.decimal();
      expect(decimal.toString()).to.equal("18");
    });
  });
});
