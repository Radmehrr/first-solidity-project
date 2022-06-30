require("@nomiclabs/hardhat-waffle");

module.exports = {
  solidity: "0.8.0",
  networks: {
    ropsten: {
      url: "https://eth-ropsten.alchemyapi.io/v2/BZT9PSgEhxH8z-N6ysE2aEc2pcpgB6wq",
      accounts: [
        "d9dfcf05f5b6d8a3249de86e09ce97809d8a032293b3315fa6677a3d3c68740a",
      ],
    },
  },
};
