const { assert, expect } = require("chai")
const { network, getNamedAccounts, deployments, ethers } = require("hardhat")
const { developmentChains, INITIAL_SUPPLY } = require("../../helper-hardhat-config")

!developmentChains.includes(network.name)
? describe.skip
: describe("JayCoin Unit Test", async function () {
    //Multipler is used to make reading the math easier because of the 18 decimal points

    let JayCoin, deployer

    beforeEach(async function () {
        const accounts = await getNamedAccounts()
        deployer = accounts.deployer
     
        await deployments.fixture("all")
        JayCoin = await ethers.getContract("JayCoin", deployer)
    })

    it("Token is successfully deployed", async () => {
        assert(JayCoin.address)
    })

    describe("constructor", () => {

        it("Should have correct INITIAL_SUPPLY of token ", async () => {
            const totalSupply = await JayCoin.totalSupply()
            assert.equal(totalSupply.toString(), INITIAL_SUPPLY)
        })

        it("Initializes the token with the correct name and symbol ", async () => {
            const name = (await JayCoin.name()).toString()
            assert.equal(name, "JayCoin")

            const symbol = (await JayCoin.symbol()).toString()
            assert.equal(symbol, "JAY")
        })

    })
})