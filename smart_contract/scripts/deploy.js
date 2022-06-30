const main = async () => {
  const Transactions = await hre.ethers.getContractFactory("Transactions");
  const transactions = await Transactions.deploy();

  await transactions.deployed();

  console.log("Transactions deployed to:", transactions.address);
};

const runMain = async () => {
  try {
    await main();
    process.exit(0); // whitch means that the process went successfully okey.
  } catch (e) {
    console.error(e);
    process.exit(1); // means that there was an error.
  }
};

runMain();
