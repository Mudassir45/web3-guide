const Web3 = require("web3")
const web3 = new Web3("https://mainnet.infura.io/v3/a4b5a070aa6c4e47846463e3c7167799")

// To get the current gas price:
// web3.eth.getGasPrice().then((result)=> {
//     console.log(web3.utils.fromWei(result, "ether"))
// });

// // Encryption through sha3:
// console.log(web3.utils.sha3("Mudassir Ali"));

// // Encryption through sha3:
// console.log(web3.utils.keccak256("Mudassir Ali"));

// // To handle (pseudo) randomness by generating a 32 byte random hex:
// console.log(web3.utils.randomHex(10));

const _ = web3.utils._
_.each({key1: "value1", key2: "value2"}, (value, key) => {
    console.log(key)
});