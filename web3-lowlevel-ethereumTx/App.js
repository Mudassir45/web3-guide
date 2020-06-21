const Tx = require('ethereumjs-tx').Transaction
const Web3 = require('web3')
const web3 = new Web3('https://ropsten.infura.io/v3/a4b5a070aa6c4e47846463e3c7167799')

const account1 = '0x88167084471E2b3EFe365Ee95C39605Ed9E8053f' // Your account address 1
const account2 = '0xF0F0888d0b8851918E107f2A7E591C99f3CaC747' // Your account address 2

const privateKey1 = Buffer.from('D45CB35AE66BD05D65E20F77A891FB8388155E6A95EE096E7AA205A592DD801D','hex')
const privateKey2 = Buffer.from('2C65D2F13EB3A2CCC3EAF66AED2D01126A0A58AD321E618AB6D54AA1A49E255E','hex')

web3.eth.getTransactionCount(account1, (err, txCount) => {
  // Build the transaction
  const txObject = {
    nonce:    web3.utils.toHex(txCount),
    to:       account2,
    value:    web3.utils.toHex(web3.utils.toWei('0.1', 'ether')),
    gasLimit: web3.utils.toHex(21000),
    gasPrice: web3.utils.toHex(web3.utils.toWei('10', 'gwei'))
  }

  // Sign the transaction
  var tx = new Tx(txObject, {'chain':'ropsten'});
  tx.sign(privateKey1)

  const serializedTx = tx.serialize()
  const raw = '0x' + serializedTx.toString('hex')

  // Broadcast the transaction
  web3.eth.sendSignedTransaction(raw, (err, txHash) => {
    console.log('txHash:', txHash)
    // Now go check etherscan to see the transaction!
  })
})