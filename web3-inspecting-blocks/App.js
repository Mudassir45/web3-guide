const Web3 = require("web3")
const web3 = new Web3("https://mainnet.infura.io/v3/a4b5a070aa6c4e47846463e3c7167799")

// First, we can get the latest block number like this:
web3.eth.getBlockNumber().then(console.log);

// We can also get all the data for the latest block like this:
web3.eth.getBlock("latest").then(console.log);

// To get the 10 blocks
web3.eth.getBlockNumber().then((latest)=> {
    for (var i = 0; i < 10; i++) {
        web3.eth.getBlock(latest - i).then((block)=> {
            console.log(block.number)
        })
    }
});

const hash = "0xca1c66ddc5994b492bff61f27477a63990aa078ecef3dd79df79f1b7472b6064"
web3.eth.getTransactionFromBlock(hash, 2).then(console.log)
