module.exports = async function (callback) {
  const couponModify = artifacts.require("couponModify")

  const contract = await couponModify.deployed()

  console.log('> Set account')
  try {
    await contract.setAccount()
  } catch (e) {
    console.log('Account has already been set!')
  }


  keywords = [
    "shopping,pharmacy,cure",
    "business,trading",
    "stock market,trading",
    "health,wellness"
  ];

  for (let i = 0; i < keywords.length; i++) {
    try {
      await contract.addNew("0x7E5F4552091A69125d5DfCb7b8C2659029395Bdf", keywords[i])
      console.log("Added new coupon with keywords: " + keywords[i])
    }
    catch (e) {
      console.log('Unable to add new coupon!')
    }
  }

  await contract.getInventory()
  console.log('Your inventory:')
  console.log(await contract.showInventory())

  callback()
}